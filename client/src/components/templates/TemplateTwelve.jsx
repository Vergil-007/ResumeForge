import React from 'react';

const TemplateTwelve = ({ data }) => {
  const { personalInfo, experience, education, projects, skills } = data;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, color: '#334155', padding: '30px' }}>
      
      {/* Header */}
      <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '8px', borderLeft: '6px solid #0d9488', marginBottom: '30px' }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '32px', color: '#0f172a', fontWeight: '800' }}>
          {personalInfo?.fullName || 'Your Name'}
        </h1>
        <div style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {personalInfo?.email && <span>{personalInfo.email}</span>}
          {personalInfo?.phone && <span>{personalInfo.phone}</span>}
          {personalInfo?.address && <span>{personalInfo.address}</span>}
        </div>
      </div>

      {personalInfo?.summary && (
        <div style={{ marginBottom: '30px', padding: '0 10px' }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.7 }}>
            <span style={{ fontSize: '24px', color: '#0d9488', lineHeight: 0, verticalAlign: 'bottom' }}>"</span>
            {personalInfo.summary}
            <span style={{ fontSize: '24px', color: '#0d9488', lineHeight: 0, verticalAlign: 'bottom' }}>"</span>
          </p>
        </div>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && projects.some(p => p.title || p.domain) && (
        <div style={{ marginBottom: '30px', padding: '0 10px' }}>
          <h2 style={{ fontSize: '18px', color: '#0d9488', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '20px', display: 'inline-block' }}>
            Projects
          </h2>
          {projects.map(proj => (
            (proj.title || proj.domain) && (
              <div key={proj.id} style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#0f172a', fontWeight: '700' }}>{proj.title || 'Project'}</h3>
                </div>
                <div style={{ fontSize: '14px', color: '#64748b', fontWeight: '500', marginBottom: '8px' }}>
                  {proj.domain}
                </div>
                {proj.description && (
                  <p style={{ margin: 0, fontSize: '14px', color: '#475569', whiteSpace: 'pre-wrap' }}>{proj.description}</p>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && experience.some(e => e.company || e.position) && (
        <div style={{ marginBottom: '30px', padding: '0 10px' }}>
          <h2 style={{ fontSize: '18px', color: '#0d9488', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '20px', display: 'inline-block' }}>
            Experience
          </h2>
          {experience.map(exp => (
            (exp.company || exp.position) && (
              <div key={exp.id} style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#0f172a', fontWeight: '700' }}>{exp.position || 'Position'}</h3>
                  <span style={{ fontSize: '13px', color: '#94a3b8', backgroundColor: '#f1f5f9', padding: '2px 8px', borderRadius: '4px' }}>
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <div style={{ fontSize: '14px', color: '#64748b', fontWeight: '500', marginBottom: '8px' }}>
                  {exp.company}
                </div>
                {exp.description && (
                  <p style={{ margin: 0, fontSize: '14px', color: '#475569', whiteSpace: 'pre-wrap' }}>{exp.description}</p>
                )}
              </div>
            )
          ))}
        </div>
      )}

      <div style={{ display: 'flex', gap: '40px', padding: '0 10px' }}>
        {/* Education */}
        {education && education.length > 0 && education.some(e => e.institution || e.degree) && (
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '18px', color: '#0d9488', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '20px', display: 'inline-block' }}>
              Education
            </h2>
            {education.map(edu => (
              (edu.institution || edu.degree) && (
                <div key={edu.id} style={{ marginBottom: '15px' }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '15px', color: '#0f172a', fontWeight: '700' }}>{edu.degree || 'Degree'}</h3>
                  <div style={{ fontSize: '14px', color: '#64748b' }}>{edu.institution}</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>{edu.year}{edu.percentage && (edu.scoreType === 'cgpa' ? ` | ${edu.percentage} CGPA` : ` | ${edu.percentage}%`)}</div>
                </div>
              )
            ))}
          </div>
        )}

        {/* Skills */}
        {skills && (
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '18px', color: '#0d9488', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '20px', display: 'inline-block' }}>
              Skills Snapshot
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skills.split(',').map((skill, index) => (
                <span key={index} style={{ backgroundColor: '#f0fdfa', color: '#0f766e', border: '1px solid #ccfbf1', padding: '4px 10px', fontSize: '13px', borderRadius: '20px' }}>
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default TemplateTwelve;
