import React from 'react';

const TemplateSeven = ({ data }) => {
  const { personalInfo, experience, education, projects, skills } = data;

  return (
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: '#333' }}>
      
      {/* Heavy Colored Header */}
      <div style={{ backgroundColor: '#0f172a', padding: '40px', color: '#ffffff' }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '42px', fontWeight: '800', letterSpacing: '-1px' }}>
          {personalInfo?.fullName || 'Your Name'}
        </h1>
        
        {personalInfo?.summary && (
          <p style={{ margin: '0 0 20px 0', fontSize: '15px', maxWidth: '80%', color: '#cbd5e1', lineHeight: 1.6 }}>
            {personalInfo.summary}
          </p>
        )}

        <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: '#94a3b8', flexWrap: 'wrap' }}>
          {personalInfo?.email && <span>{personalInfo.email}</span>}
          {personalInfo?.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo?.address && <span>• {personalInfo.address}</span>}
        </div>
      </div>

      <div style={{ padding: '40px' }}>
        {/* Two Column Layout for Body */}
        <div style={{ display: 'flex', gap: '40px' }}>
          
          {/* Main Column */}
          <div style={{ width: '65%' }}>
            {projects && projects.length > 0 && projects.some(p => p.title || p.domain) && (
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', borderBottom: '3px solid #e2e8f0', paddingBottom: '10px', marginBottom: '20px' }}>
                  PROJECTS
                </h2>
                {projects.map(proj => (
                  (proj.title || proj.domain) && (
                    <div key={proj.id} style={{ marginBottom: '25px' }}>
                      <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{proj.title || 'Project Title'}</h3>
                      <div style={{ fontSize: '15px', color: '#3b82f6', fontWeight: '600', marginBottom: '10px' }}>
                        {proj.domain}
                      </div>
                      {proj.description && (
                        <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#475569', whiteSpace: 'pre-wrap' }}>{proj.description}</p>
                      )}
                    </div>
                  )
                ))}
              </div>
            )}

            {experience && experience.length > 0 && experience.some(e => e.company || e.position) && (
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', borderBottom: '3px solid #e2e8f0', paddingBottom: '10px', marginBottom: '20px' }}>
                  EXPERIENCE
                </h2>
                {experience.map(exp => (
                  (exp.company || exp.position) && (
                    <div key={exp.id} style={{ marginBottom: '25px' }}>
                      <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{exp.position || 'Position'}</h3>
                      <div style={{ fontSize: '15px', color: '#3b82f6', fontWeight: '600', marginBottom: '10px' }}>
                        {exp.company} <span style={{ color: '#64748b', fontWeight: 'normal', fontSize: '13px', marginLeft: '10px' }}>{exp.startDate} - {exp.endDate}</span>
                      </div>
                      {exp.description && (
                        <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#475569', whiteSpace: 'pre-wrap' }}>{exp.description}</p>
                      )}
                    </div>
                  )
                ))}
              </div>
            )}
          </div>

          {/* Side Column */}
          <div style={{ width: '35%' }}>
            {skills && (
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', borderBottom: '3px solid #e2e8f0', paddingBottom: '10px', marginBottom: '20px' }}>
                  SKILLS
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {skills.split(',').map((skill, index) => (
                    <div key={index} style={{ backgroundColor: '#f1f5f9', padding: '8px 12px', fontSize: '14px', color: '#334155', fontWeight: '500', borderRadius: '4px' }}>
                      {skill.trim()}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {education && education.length > 0 && education.some(e => e.institution || e.degree) && (
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', borderBottom: '3px solid #e2e8f0', paddingBottom: '10px', marginBottom: '20px' }}>
                  EDUCATION
                </h2>
                {education.map(edu => (
                  (edu.institution || edu.degree) && (
                    <div key={edu.id} style={{ marginBottom: '20px' }}>
                      <h3 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: '700', color: '#1e293b' }}>{edu.degree || 'Degree'}</h3>
                      <div style={{ fontSize: '14px', color: '#475569', marginBottom: '5px' }}>{edu.institution}</div>
                      <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '600' }}>{edu.year}{edu.percentage && (edu.scoreType === 'cgpa' ? ` | ${edu.percentage} CGPA` : ` | ${edu.percentage}%`)}</div>
                    </div>
                  )
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
};

export default TemplateSeven;
