import React from 'react';

const TemplateNine = ({ data }) => {
  const { personalInfo, experience, education, projects, skills } = data;

  return (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif', lineHeight: 1.6, color: '#1f2937' }}>
      
      {/* Split Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '4px solid #111827', paddingBottom: '20px', marginBottom: '30px' }}>
        <div style={{ width: '60%' }}>
          <h1 style={{ margin: '0', fontSize: '46px', fontWeight: '900', letterSpacing: '-1.5px', color: '#111827', lineHeight: 1 }}>
            {personalInfo?.fullName || 'Your Name'}
          </h1>
        </div>
        <div style={{ width: '40%', textAlign: 'right', fontSize: '13px', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {personalInfo?.email && <div>{personalInfo.email}</div>}
          {personalInfo?.phone && <div>{personalInfo.phone}</div>}
          {personalInfo?.address && <div>{personalInfo.address}</div>}
        </div>
      </div>

      {/* Grid Layout Body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2فر', gap: '40px' }}>
        
        {/* Left Col: Info, Edu, Skills */}
        <div style={{ gridColumn: '1 / 2' }}>
          {personalInfo?.summary && (
            <div style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 800, color: '#9ca3af', letterSpacing: '2px', marginBottom: '10px' }}>Profile</h2>
              <p style={{ margin: 0, fontSize: '14px', color: '#374151' }}>{personalInfo.summary}</p>
            </div>
          )}

          {education && education.length > 0 && education.some(e => e.institution || e.degree) && (
            <div style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 800, color: '#9ca3af', letterSpacing: '2px', marginBottom: '15px' }}>Education</h2>
              {education.map(edu => (
                (edu.institution || edu.degree) && (
                  <div key={edu.id} style={{ marginBottom: '15px' }}>
                    <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#111827' }}>{edu.degree || 'Degree'}</div>
                    <div style={{ fontSize: '14px', color: '#4b5563' }}>{edu.institution}</div>
                    <div style={{ fontSize: '13px', color: '#9ca3af' }}>{edu.year}{edu.percentage && (edu.scoreType === 'cgpa' ? ` | ${edu.percentage} CGPA` : ` | ${edu.percentage}%`)}</div>
                  </div>
                )
              ))}
            </div>
          )}

          {skills && (
            <div>
              <h2 style={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 800, color: '#9ca3af', letterSpacing: '2px', marginBottom: '15px' }}>Skills</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px', color: '#374151', fontWeight: 500 }}>
                {skills.split(',').map((skill, index) => (
                  <div key={index}>— {skill.trim()}</div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Col: Experience */}
        <div style={{ gridColumn: '2 / 3' }}>
          {projects && projects.length > 0 && projects.some(p => p.title || p.domain) && (
            <div style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 800, color: '#9ca3af', letterSpacing: '2px', marginBottom: '20px' }}>Projects</h2>
              {projects.map(proj => (
                (proj.title || proj.domain) && (
                  <div key={proj.id} style={{ marginBottom: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '800', color: '#111827' }}>{proj.title || 'Project Title'}</h3>
                    </div>
                    <div style={{ fontSize: '15px', color: '#4f46e5', fontWeight: '600', marginBottom: '10px' }}>
                      {proj.domain}
                    </div>
                    {proj.description && (
                      <p style={{ margin: 0, fontSize: '14px', whiteSpace: 'pre-wrap', color: '#374151' }}>{proj.description}</p>
                    )}
                  </div>
                )
              ))}
            </div>
          )}

          {experience && experience.length > 0 && experience.some(e => e.company || e.position) && (
            <div>
              <h2 style={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 800, color: '#9ca3af', letterSpacing: '2px', marginBottom: '20px' }}>Experience</h2>
              {experience.map(exp => (
                (exp.company || exp.position) && (
                  <div key={exp.id} style={{ marginBottom: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '800', color: '#111827' }}>{exp.position || 'Position Title'}</h3>
                      <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: 600 }}>{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <div style={{ fontSize: '15px', color: '#4f46e5', fontWeight: '600', marginBottom: '10px' }}>
                      {exp.company}
                    </div>
                    {exp.description && (
                      <p style={{ margin: 0, fontSize: '14px', whiteSpace: 'pre-wrap', color: '#374151' }}>{exp.description}</p>
                    )}
                  </div>
                )
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default TemplateNine;
