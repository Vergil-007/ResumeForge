import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div
      className="home-container"
      style={{
        position: 'relative',
        padding: '4rem 2rem',
        textAlign: 'center',
        minHeight: 'calc(100vh - 70px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <div className="home-hero-bg"></div>

      <div className="home-content-wrapper" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', maxWidth: '1100px', margin: '0 auto', width: '100%', padding: '2rem 0', zIndex: 1, flexWrap: 'wrap-reverse' }}>

        <div className="home-hero-text" style={{ flex: '1 1 500px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

          <div className="title-card animate-fade-in-up" style={{
            color: 'var(--accent-color)',
            marginBottom: '0.5rem',
            display: 'inline-flex',
            alignItems: 'center',
          }}>
            <div className="fancy-typing-wrapper">
              <span className="fancy-typing-text">Welcome to ResumeForge</span>
            </div>
          </div>

          <h1
            className="home-title animate-fade-in-up delay-100"
            style={{
              fontSize: '4rem',
              fontWeight: '800',
              marginBottom: '0',
              lineHeight: '1.15'
            }}
          >
            Forge Your Dream Career
          </h1>
          <p
            className="animate-fade-in-up delay-200"
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              maxWidth: '550px',
              marginBottom: '2.5rem',
              marginTop: '-7rem',
              lineHeight: '1.6'
            }}
          >
            Create professional, stunning resumes in minutes with ResumeForge. Our intuitive builder provides the tools you need to stand out from the crowd and land your next big opportunity.
          </p>
          <div className="animate-fade-in-up delay-300" style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/register" className="btn-primary btn-pulse" style={{ padding: '0.85rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px', boxShadow: 'var(--shadow-md)' }}>
              Get Started!
            </Link>
            <Link to="/login" className="btn-secondary" style={{ padding: '0.85rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px', backdropFilter: 'blur(5px)', background: 'var(--card-bg)' }}>
              Login
            </Link>
          </div>
        </div>

        <div className="home-hero-visual animate-fade-in-up delay-400" style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="resume-mock">
            <div className="mock-header">
              <div className="mock-avatar"></div>
              <div className="mock-title-lines" style={{ justifyContent: 'center' }}>
                <div className="typing-text-wrapper" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-primary)', lineHeight: '1.2' }}>
                  <span className="typing-text type-step-1">Alex Developer</span>
                </div>
                <div className="typing-text-wrapper" style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontWeight: '600' }}>
                  <span className="typing-text type-step-2">Software Engineer</span>
                </div>
              </div>
            </div>

            <div className="mock-line accent type-animation-3" style={{ width: '30%', marginTop: '0.5rem' }}></div>
            <div className="mock-content-lines">
              <div className="mock-line type-animation-4" style={{ width: '100%' }}></div>
              <div className="mock-line type-animation-4 delay-loop-1" style={{ width: '90%' }}></div>
              <div className="mock-line type-animation-4 delay-loop-2" style={{ width: '80%' }}></div>
            </div>

            <div className="mock-line accent type-animation-5" style={{ width: '40%', marginTop: '1rem' }}></div>
            <div className="mock-content-lines">
              <div className="mock-line type-animation-5 delay-loop-1" style={{ width: '100%' }}></div>
              <div className="mock-line type-animation-5 delay-loop-2" style={{ width: '85%' }}></div>
            </div>

            <div className="mock-badge-group animate-fade-in-up delay-after-type" style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
              <div style={{ padding: '0.25rem 0.75rem', background: 'var(--accent-color)', color: 'white', fontSize: '0.7rem', borderRadius: '20px', opacity: 0.9 }}>React</div>
              <div style={{ padding: '0.25rem 0.75rem', background: 'var(--text-secondary)', color: 'white', fontSize: '0.7rem', borderRadius: '20px', opacity: 0.7 }}>Node.js</div>
              <div style={{ padding: '0.25rem 0.75rem', background: 'var(--text-secondary)', color: 'white', fontSize: '0.7rem', borderRadius: '20px', opacity: 0.7 }}>UI/UX</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="animate-fade-in-up delay-500"
        style={{
          marginTop: '5rem',
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '1200px',
          zIndex: 1,
          width: '100%'
        }}
      >
        <div className="glass-panel home-card-hover" style={{ flex: '1 1 300px', padding: '2rem', textAlign: 'left', borderRadius: '16px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '700' }}>Easy to Use</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>Intuitive builder interface that lets you focus on your content, not formatting. Build your resume seamlessly.</p>
        </div>
        <div className="glass-panel home-card-hover" style={{ flex: '1 1 300px', padding: '2rem', textAlign: 'left', borderRadius: '16px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✨</div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '700' }}>Professional Designs</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>Beautiful, recruiter-tested templates engineered to safely bypass ATS systems and get you more interviews.</p>
        </div>
        <div className="glass-panel home-card-hover" style={{ flex: '1 1 300px', padding: '2rem', textAlign: 'left', borderRadius: '16px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📄</div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '700' }}>Export to PDF</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>Download your finished resume instantly in a polished PDF format, ready to send to your dream employer.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
