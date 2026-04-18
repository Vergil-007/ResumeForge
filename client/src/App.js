import React, { useContext } from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { ThemeContext } from './context/ThemeContext';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Builder from './pages/Builder';

// SVG Icons
const SunIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        ResumeForge
      </Link>
      <div className="nav-links">
        {user ? (
          <>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <button onClick={handleLogout} className="btn-secondary" style={{ padding: '0.5rem 1rem' }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="btn-primary" style={{ padding: '0.5rem 1rem' }}>Register</Link>
          </>
        )}
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </nav>
  );
}

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/" replace />;
  return children;
};

function App() {
  const { loading } = useContext(AuthContext);

  if (loading) return null; // Or a full screen loader

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/builder/new" element={
          <ProtectedRoute>
            <Builder />
          </ProtectedRoute>
        } />
        <Route path="/builder/:id" element={
          <ProtectedRoute>
            <Builder />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
