import React from 'react';

const TemplateFive = ({ data }) => {
  const { personalInfo, experience, education, projects, skills } = data;

  return (
    <div style={{ fontFamily: '"Courier New", Courier, monospace', lineHeight: 1.6, color: '#1a202c', padding: '30px' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ margin: '0 0 5px 0', fontSize: '38px', color: '#047857' }}>
          &gt; {personalInfo?.fullName || 'Your_Name'}
        </h1>
        <div style={{ fontSize: '13px', display: 'flex', gap: '20px', color: '#4a5568' }}>
          {personalInfo?.email && <span>[Email: {personalInfo.email}]</span>}
          {personalInfo?.phone && <span>[Phone: {personalInfo.phone}]</span>}
          {personalInfo?.address && <span>[Loc: {personalInfo.address}]</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo?.summary && (
        <div style={{ marginBottom: '30px' }}>
          <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#047857', marginBottom: '10px' }}>## ABOUT</div>
          <p style={{ margin: 0, fontSize: '14px' }}>{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && experience.some(e => e.company || e.position) && (
        <div style={{ marginBottom: '30px' }}>
          <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#047857', marginBottom: '15px' }}>## EXPERIENCE</div>
          {experience.map(exp => (
            (exp.company || exp.position) && (
              <div key={exp.id} style={{ marginBottom: '20px', borderLeft: '2px solid #047857', paddingLeft: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '15px', fontWeight: 'bold' }}>{exp.position || 'Role'} @ {exp.company}</h3>
                  <span style={{ fontSize: '13px', color: '#718096' }}>
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                {exp.description && (
                  <p style={{ margin: 0, fontSize: '13px', whiteSpace: 'pre-wrap' }}>{exp.description}</p>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && projects.some(p => p.title || p.domain) && (
        <div style={{ marginBottom: '30px' }}>
          <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#047857', marginBottom: '15px' }}>## PROJECTS</div>
          {projects.map(proj => (
            (proj.title || proj.domain) && (
              <div key={proj.id} style={{ marginBottom: '20px', borderLeft: '2px solid #047857', paddingLeft: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '15px', fontWeight: 'bold' }}>{proj.title || 'Project Title'}</h3>
                  <span style={{ fontSize: '13px', color: '#718096' }}>{proj.domain}</span>
                </div>
                {proj.description && (
                  <p style={{ margin: 0, fontSize: '13px', whiteSpace: 'pre-wrap' }}>{proj.description}</p>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Skills/Education */}
      <div style={{ display: 'flex', gap: '40px' }}>
        {skills && (
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#047857', marginBottom: '10px' }}>## SKILLS</div>
            <div style={{ fontSize: '13px', lineHeight: 1.8 }}>
              {skills.split(',').map((skill, index) => (
                <span key={index} style={{ 
                  display: 'inline-block', 
                  backgroundColor: '#ecfdf5', 
                  color: '#065f46',
                  padding: '2px 8px', 
                  marginRight: '8px', 
                  marginBottom: '8px',
                  border: '1px solid #10b981'
                }}>
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        {education && education.length > 0 && education.some(e => e.institution || e.degree) && (
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#047857', marginBottom: '10px' }}>## EDUCATION</div>
            {education.map(edu => (
              (edu.institution || edu.degree) && (
                <div key={edu.id} style={{ marginBottom: '10px' }}>
                  <h3 style={{ margin: '0 0 3px 0', fontSize: '14px', fontWeight: 'bold' }}>{edu.degree || 'Degree'}</h3>
                  <div style={{ fontSize: '13px' }}>
                    {edu.institution} ({edu.year}{edu.percentage && (edu.scoreType === 'cgpa' ? `, ${edu.percentage} CGPA` : `, ${edu.percentage}%`)})
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

export default TemplateFive;
