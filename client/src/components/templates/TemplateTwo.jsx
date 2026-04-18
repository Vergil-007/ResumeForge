import React from 'react';

const TemplateTwo = ({ data }) => {
  const { personalInfo, experience, education, projects, skills } = data;

  return (
    <div style={{ fontFamily: 'Georgia, serif', lineHeight: 1.5, color: '#222', display: 'flex', height: '100%' }}>
      {/* Left Sidebar */}
      <div style={{ width: '35%', backgroundColor: '#1f2937', color: 'white', padding: '30px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            backgroundColor: '#4b5563', 
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#d1d5db'
          }}>
            {personalInfo?.fullName ? personalInfo.fullName.charAt(0).toUpperCase() : 'R'}
          </div>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #4b5563', paddingBottom: '10px', marginBottom: '15px' }}>Contact</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
            {personalInfo?.email && <li style={{ marginBottom: '10px', wordBreak: 'break-all' }}>✉ {personalInfo.email}</li>}
            {personalInfo?.phone && <li style={{ marginBottom: '10px' }}>☏ {personalInfo.phone}</li>}
            {personalInfo?.address && <li style={{ marginBottom: '10px' }}>📍 {personalInfo.address}</li>}
          </ul>
        </div>

        {skills && (
          <div>
            <h3 style={{ fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #4b5563', paddingBottom: '10px', marginBottom: '15px' }}>Skills</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
              {skills.split(',').map((skill, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>• {skill.trim()}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div style={{ width: '65%', padding: '40px 30px', backgroundColor: 'white' }}>
        <h1 style={{ fontSize: '38px', margin: '0 0 5px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {personalInfo?.fullName || 'YOUR NAME'}
        </h1>
        
        {personalInfo?.summary && (
          <div style={{ marginTop: '30px' }}>
            <h2 style={{ fontSize: '18px', color: '#1f2937', textTransform: 'uppercase', letterSpacing: '2px', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px', marginBottom: '15px' }}>Profile</h2>
            <p style={{ fontSize: '15px', color: '#4b5563' }}>{personalInfo.summary}</p>
          </div>
        )}

        {experience && experience.length > 0 && experience.some(e => e.company || e.position) && (
          <div style={{ marginTop: '30px' }}>
            <h2 style={{ fontSize: '18px', color: '#1f2937', textTransform: 'uppercase', letterSpacing: '2px', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px', marginBottom: '20px' }}>Experience</h2>
            {experience.map(exp => (
              (exp.company || exp.position) && (
                <div key={exp.id} style={{ marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '16px', margin: '0 0 5px 0', fontWeight: 'bold' }}>{exp.position || 'Position Title'}</h3>
                  <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px', fontWeight: 'bold' }}>
                    {exp.company} | {exp.startDate} {exp.startDate && exp.endDate && '-'} {exp.endDate}
                  </div>
                  {exp.description && (
                    <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, whiteSpace: 'pre-wrap' }}>{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        )}

        {projects && projects.length > 0 && projects.some(p => p.title || p.domain) && (
          <div style={{ marginTop: '30px' }}>
            <h2 style={{ fontSize: '18px', color: '#1f2937', textTransform: 'uppercase', letterSpacing: '2px', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px', marginBottom: '20px' }}>Projects</h2>
            {projects.map(proj => (
              (proj.title || proj.domain) && (
                <div key={proj.id} style={{ marginBottom: '15px' }}>
                  <h3 style={{ fontSize: '16px', margin: '0 0 5px 0', fontWeight: 'bold' }}>{proj.title || 'Project Title'}</h3>
                  <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '5px' }}>
                    {proj.domain}
                  </div>
                  {proj.description && (
                    <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, whiteSpace: 'pre-wrap' }}>{proj.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        )}

        {education && education.length > 0 && education.some(e => e.institution || e.degree) && (
          <div style={{ marginTop: '30px' }}>
            <h2 style={{ fontSize: '18px', color: '#1f2937', textTransform: 'uppercase', letterSpacing: '2px', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px', marginBottom: '20px' }}>Education</h2>
            {education.map(edu => (
              (edu.institution || edu.degree) && (
                <div key={edu.id} style={{ marginBottom: '15px' }}>
                  <h3 style={{ fontSize: '16px', margin: '0 0 5px 0', fontWeight: 'bold' }}>{edu.degree || 'Degree'}</h3>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>
                    {edu.institution} {edu.year && `| ${edu.year}`} {edu.percentage && (edu.scoreType === 'cgpa' ? `| ${edu.percentage} CGPA` : `| ${edu.percentage}%`)}
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateTwo;
