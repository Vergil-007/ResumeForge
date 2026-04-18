import React from 'react';

const TemplateOne = ({ data }) => {
  const { personalInfo, experience, education, projects, skills } = data;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, color: '#333' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', borderBottom: '2px solid #3b82f6', paddingBottom: '20px', marginBottom: '20px' }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '32px', color: '#1e3a8a' }}>{personalInfo?.fullName || 'Your Name'}</h1>
        <div style={{ fontSize: '14px', color: '#666', display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
          {personalInfo?.email && <span>{personalInfo.email}</span>}
          {personalInfo?.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo?.address && <span>• {personalInfo.address}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo?.summary && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ fontSize: '18px', color: '#1e3a8a', textTransform: 'uppercase', marginBottom: '10px' }}>Professional Summary</h2>
          <p style={{ margin: 0, fontSize: '14px' }}>{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && experience.some(e => e.company || e.position) && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ fontSize: '18px', color: '#1e3a8a', textTransform: 'uppercase', marginBottom: '10px' }}>Experience</h2>
          {experience.map(exp => (
            (exp.company || exp.position) && (
              <div key={exp.id} style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: 'bold' }}>{exp.position || 'Position Title'}</h3>
                  <span style={{ fontSize: '14px', fontStyle: 'italic', color: '#666' }}>
                    {exp.startDate} {exp.startDate && exp.endDate && '-'} {exp.endDate}
                  </span>
                </div>
                <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#555', marginBottom: '5px' }}>
                  {exp.company}
                </div>
                {exp.description && (
                  <p style={{ margin: 0, fontSize: '14px', whiteSpace: 'pre-wrap' }}>{exp.description}</p>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && projects.some(p => p.title || p.domain) && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ fontSize: '18px', color: '#1e3a8a', textTransform: 'uppercase', marginBottom: '10px' }}>Projects</h2>
          {projects.map(proj => (
            (proj.title || proj.domain) && (
              <div key={proj.id} style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: 'bold' }}>{proj.title || 'Project Title'}</h3>
                  <span style={{ fontSize: '14px', fontStyle: 'italic', color: '#666' }}>{proj.domain}</span>
                </div>
                {proj.description && (
                  <p style={{ margin: 0, fontSize: '14px', whiteSpace: 'pre-wrap', marginTop: '5px' }}>{proj.description}</p>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Education */}
      {education && education.length > 0 && education.some(e => e.institution || e.degree) && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ fontSize: '18px', color: '#1e3a8a', textTransform: 'uppercase', marginBottom: '10px' }}>Education</h2>
          {education.map(edu => (
            (edu.institution || edu.degree) && (
              <div key={edu.id} style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: 'bold' }}>{edu.degree || 'Degree'}</h3>
                  <span style={{ fontSize: '14px', fontStyle: 'italic', color: '#666' }}>
                    {edu.year}{edu.percentage && (edu.scoreType === 'cgpa' ? ` | ${edu.percentage} CGPA` : ` | ${edu.percentage}%`)}
                  </span>
                </div>
                <div style={{ fontSize: '15px', color: '#555' }}>
                  {edu.institution}
                </div>
              </div>
            )
          ))}
        </div>
      )}

      {/* Skills */}
      {skills && (
        <div>
          <h2 style={{ fontSize: '18px', color: '#1e3a8a', textTransform: 'uppercase', marginBottom: '10px' }}>Skills</h2>
          <div style={{ fontSize: '14px', lineHeight: 1.8 }}>
            {skills.split(',').map((skill, index) => (
              <span key={index} style={{ 
                display: 'inline-block', 
                backgroundColor: '#f1f5f9', 
                padding: '4px 10px', 
                marginRight: '8px', 
                marginBottom: '8px',
                borderRadius: '4px',
                border: '1px solid #e2e8f0'
              }}>
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateOne;
