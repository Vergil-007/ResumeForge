import React from 'react';

const TemplateFour = ({ data }) => {
  const { personalInfo, experience, education, projects, skills } = data;

  return (
    <div style={{ display: 'flex', minHeight: '100%', fontFamily: '"Segoe UI", Helvetica, Arial, sans-serif' }}>
      
      {/* Sidebar */}
      <div style={{ width: '30%', backgroundColor: '#2d3748', color: '#f7fafc', padding: '30px' }}>
        <h1 style={{ margin: '0 0 5px 0', fontSize: '28px', lineHeight: 1.1 }}>{personalInfo?.fullName || 'Your Name'}</h1>
        <div style={{ fontSize: '14px', color: '#a0aec0', marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #4a5568' }}>
          Professional Resume
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '16px', color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Contact</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#cbd5e0' }}>
            {personalInfo?.email && <div>✉ {personalInfo.email}</div>}
            {personalInfo?.phone && <div>☏ {personalInfo.phone}</div>}
            {personalInfo?.address && <div>⌂ {personalInfo.address}</div>}
          </div>
        </div>

        {skills && (
          <div>
            <h2 style={{ fontSize: '16px', color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Skills</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              {skills.split(',').map((skill, index) => (
                <div key={index} style={{ backgroundColor: '#4a5568', padding: '6px 12px', borderRadius: '4px' }}>
                  {skill.trim()}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div style={{ width: '70%', padding: '40px', backgroundColor: '#ffffff', color: '#2d3748' }}>
        {personalInfo?.summary && (
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '20px', color: '#2b6cb0', marginBottom: '10px', borderBottom: '2px solid #ebf8ff', paddingBottom: '5px' }}>Profile</h2>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.7 }}>{personalInfo.summary}</p>
          </div>
        )}

        {experience && experience.length > 0 && experience.some(e => e.company || e.position) && (
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '20px', color: '#2b6cb0', marginBottom: '15px', borderBottom: '2px solid #ebf8ff', paddingBottom: '5px' }}>Experience</h2>
            {experience.map(exp => (
              (exp.company || exp.position) && (
                <div key={exp.id} style={{ marginBottom: '20px' }}>
                  <h3 style={{ margin: '0 0 3px 0', fontSize: '16px', fontWeight: 'bold' }}>{exp.position || 'Position Title'}</h3>
                  <div style={{ fontSize: '14px', color: '#4a5568', display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 600 }}>{exp.company}</span>
                    <span style={{ fontStyle: 'italic', color: '#718096' }}>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  {exp.description && (
                    <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        )}

        {projects && projects.length > 0 && projects.some(p => p.title || p.domain) && (
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '20px', color: '#2b6cb0', marginBottom: '15px', borderBottom: '2px solid #ebf8ff', paddingBottom: '5px' }}>Projects</h2>
            {projects.map(proj => (
              (proj.title || proj.domain) && (
                <div key={proj.id} style={{ marginBottom: '15px' }}>
                  <h3 style={{ margin: '0 0 3px 0', fontSize: '16px', fontWeight: 'bold' }}>{proj.title || 'Project Title'}</h3>
                  <div style={{ fontSize: '14px', color: '#4a5568', marginBottom: '8px', fontWeight: 600 }}>
                    {proj.domain}
                  </div>
                  {proj.description && (
                    <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{proj.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        )}

        {education && education.length > 0 && education.some(e => e.institution || e.degree) && (
          <div>
            <h2 style={{ fontSize: '20px', color: '#2b6cb0', marginBottom: '15px', borderBottom: '2px solid #ebf8ff', paddingBottom: '5px' }}>Education</h2>
            {education.map(edu => (
              (edu.institution || edu.degree) && (
                <div key={edu.id} style={{ marginBottom: '15px' }}>
                  <h3 style={{ margin: '0 0 3px 0', fontSize: '16px', fontWeight: 'bold' }}>{edu.degree || 'Degree'}</h3>
                  <div style={{ fontSize: '14px', color: '#4a5568', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{edu.institution}</span>
                    <span style={{ color: '#718096' }}>{edu.year}{edu.percentage && (edu.scoreType === 'cgpa' ? ` | ${edu.percentage} CGPA` : ` | ${edu.percentage}%`)}</span>
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

export default TemplateFour;
