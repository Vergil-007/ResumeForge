import React from 'react';

const TemplateThree = ({ data }) => {
  const { personalInfo, experience, education, projects, skills } = data;

  return (
    <div style={{ fontFamily: '"Times New Roman", Times, serif', lineHeight: 1.5, color: '#000', padding: '20px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', borderTop: '4px solid #000', borderBottom: '1px solid #000', padding: '20px 0', marginBottom: '20px' }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '36px', letterSpacing: '2px', textTransform: 'uppercase' }}>
          {personalInfo?.fullName || 'Your Name'}
        </h1>
        <div style={{ fontSize: '14px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {personalInfo?.address && <span>{personalInfo.address}</span>}
          {personalInfo?.phone && <span>| {personalInfo.phone}</span>}
          {personalInfo?.email && <span>| {personalInfo.email}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo?.summary && (
        <div style={{ marginBottom: '25px', textAlign: 'justify' }}>
          <p style={{ margin: 0, fontSize: '15px' }}>{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && experience.some(e => e.company || e.position) && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ fontSize: '18px', borderBottom: '1px solid #000', textTransform: 'uppercase', marginBottom: '15px', paddingBottom: '3px' }}>
            Professional Experience
          </h2>
          {experience.map(exp => (
            (exp.company || exp.position) && (
              <div key={exp.id} style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>{exp.position || 'Position Title'}</h3>
                  <span style={{ fontSize: '14px', fontStyle: 'italic' }}>
                    {exp.startDate} {exp.startDate && exp.endDate && '—'} {exp.endDate}
                  </span>
                </div>
                <div style={{ fontSize: '15px', fontStyle: 'italic', marginBottom: '8px' }}>
                  {exp.company}
                </div>
                {exp.description && (
                  <p style={{ margin: 0, fontSize: '14px', whiteSpace: 'pre-wrap', textAlign: 'justify' }}>{exp.description}</p>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && projects.some(p => p.title || p.domain) && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ fontSize: '18px', borderBottom: '1px solid #000', textTransform: 'uppercase', marginBottom: '15px', paddingBottom: '3px' }}>
            Projects
          </h2>
          {projects.map(proj => (
            (proj.title || proj.domain) && (
              <div key={proj.id} style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>{proj.title || 'Project Title'}</h3>
                  <span style={{ fontSize: '14px', fontStyle: 'italic' }}>{proj.domain}</span>
                </div>
                {proj.description && (
                  <p style={{ margin: '5px 0 0 0', fontSize: '14px', whiteSpace: 'pre-wrap', textAlign: 'justify' }}>{proj.description}</p>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Education */}
      {education && education.length > 0 && education.some(e => e.institution || e.degree) && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ fontSize: '18px', borderBottom: '1px solid #000', textTransform: 'uppercase', marginBottom: '15px', paddingBottom: '3px' }}>
            Education
          </h2>
          {education.map(edu => (
            (edu.institution || edu.degree) && (
              <div key={edu.id} style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>{edu.degree || 'Degree'}</h3>
                  <span style={{ fontSize: '14px' }}>{edu.year}{edu.percentage && (edu.scoreType === 'cgpa' ? ` | ${edu.percentage} CGPA` : ` | ${edu.percentage}%`)}</span>
                </div>
                <div style={{ fontSize: '15px' }}>
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
          <h2 style={{ fontSize: '18px', borderBottom: '1px solid #000', textTransform: 'uppercase', marginBottom: '15px', paddingBottom: '3px' }}>
            Core Competencies
          </h2>
          <div style={{ fontSize: '14px' }}>
            {skills.split(',').map(s => s.trim()).join(' • ')}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateThree;
