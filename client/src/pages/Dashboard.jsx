import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const Dashboard = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/resumes`);
      setResumes(res.data);
    } catch (err) {
      console.error('Error fetching resumes', err);
    } finally {
      setLoading(false);
    }
  };

  const deleteResume = async (id) => {
    if (window.confirm('Are you sure you want to delete this resume?')) {
      try {
        await axios.delete(`${API_URL}/api/resumes/${id}`);
        setResumes(resumes.filter(r => r.id !== id));
      } catch (err) {
        console.error('Error deleting resume', err);
      }
    }
  };

  if (loading) return <div className="dashboard-container">Loading...</div>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h1 style={{fontSize: '2rem', marginBottom: '0.5rem'}}>Welcome, {user && user.username}</h1>
          <p style={{color: 'var(--text-secondary)'}}>Manage your resumes here</p>
        </div>
        <Link to="/builder/new" className="btn-primary">
          + Create New Resume
        </Link>
      </div>

      {resumes.length === 0 ? (
        <div className="glass-panel" style={{textAlign: 'center', padding: '4rem 2rem'}}>
          <h2 style={{marginBottom: '1rem'}}>No Resumes Yet</h2>
          <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>
            You haven't created any resumes yet. Start building your career profile now.
          </p>
          <Link to="/builder/new" className="btn-primary">Create Your First Resume</Link>
        </div>
      ) : (
        <div className="resume-grid">
          {resumes.map(resume => (
            <div key={resume.id} className="glass-panel resume-card" style={{padding: '1.5rem'}}>
              <div className="resume-card-title">{resume.title || 'Untitled Resume'}</div>
              <div className="resume-card-date">
                Last updated: {new Date(resume.updated_at).toLocaleDateString()}
              </div>
              <div className="resume-card-actions">
                <button 
                  onClick={() => navigate(`/builder/${resume.id}`)} 
                  className="btn-secondary" 
                  style={{flexGrow: 1}}
                >
                  Edit
                </button>
                <button 
                  onClick={() => deleteResume(resume.id)} 
                  className="btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
