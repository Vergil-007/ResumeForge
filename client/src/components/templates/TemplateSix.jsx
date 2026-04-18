import React from 'react';

const TemplateSix = ({ data }) => {
  const { personalInfo, experience, education, projects, skills } = data;

  return (
    <div style={{ fontFamily: 'Georgia, serif', lineHeight: 1.6, color: '#333', padding: '10px 40px' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'left', marginBottom: '40px', paddingTop: '20px' }}>
        <h1 style={{ margin: '0 0 5px 0', fontSize: '36px', color: '#111' }}>{personalInfo?.fullName || 'Your Name'}</h1>
        <div style={{ fontSize: '14px', color: '#666', borderBottom: '2px solid #ddd', paddingBottom: '20px' }}>
          {personalInfo?.email && <span style={{ marginRight: '15px' }}>{personalInfo.email}</span>}
          {personalInfo?.phone && <span style={{ marginRight: '15px' }}>{personalInfo.phone}</span>}
          {personalInfo?.address && <span>{personalInfo.address}</span>}
        </div>
      </div>

      {personalInfo?.summary && (
        <div style={{ marginBottom: '40px' }}>
          <p style={{ margin: 0, fontSize: '15px', color: '#444' }}>{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience Timeline */}
      {experience && experience.length > 0 && experience.some(e => e.company || e.position) && (
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '20px', color: '#111', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
            Experience
          </h2>
          <div style={{ position: 'relative', borderLeft: '2px solid #cbd5e1', paddingLeft: '20px', marginLeft: '10px' }}>
            {experience.map(exp => (
              (exp.company || exp.position) && (
                <div key={exp.id} style={{ position: 'relative', marginBottom: '30px' }}>
                  {/* Timeline Dot */}
                  <div style={{ position: 'absolute', left: '-27px', top: '5px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b82f6', border: '2px solid #fff' }}></div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ margin: '0 0 5px 0', fontSize: '17px', fontWeight: 'bold' }}>{exp.position || 'Position Title'}</h3>
                    <span style={{ fontSize: '14px', color: '#64748b', fontStyle: 'italic' }}>
                      {exp.startDate} {exp.startDate && exp.endDate && '-'} {exp.endDate}
                    </span>
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: '500', color: '#475569', marginBottom: '10px' }}>
                    {exp.company}
                  </div>
                  {exp.description && (
                    <p style={{ margin: 0, fontSize: '14px', whiteSpace: 'pre-wrap', color: '#334155' }}>{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Projects Timeline */}
      {projects && projects.length > 0 && projects.some(p => p.title || p.domain) && (
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '20px', color: '#111', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
            Projects
          </h2>
          <div style={{ position: 'relative', borderLeft: '2px solid #cbd5e1', paddingLeft: '20px', marginLeft: '10px' }}>
            {projects.map(proj => (
              (proj.title || proj.domain) && (
                <div key={proj.id} style={{ position: 'relative', marginBottom: '30px' }}>
                  <div style={{ position: 'absolute', left: '-27px', top: '5px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981', border: '2px solid #fff' }}></div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ margin: '0 0 5px 0', fontSize: '17px', fontWeight: 'bold' }}>{proj.title || 'Project Title'}</h3>
                    <span style={{ fontSize: '14px', color: '#64748b', fontStyle: 'italic' }}>{proj.domain}</span>
                  </div>
                  {proj.description && (
                    <p style={{ margin: '10px 0 0 0', fontSize: '14px', whiteSpace: 'pre-wrap', color: '#334155' }}>{proj.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Education Timeline */}
      {education && education.length > 0 && education.some(e => e.institution || e.degree) && (
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '20px', color: '#111', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
            Education
          </h2>
          <div style={{ position: 'relative', borderLeft: '2px solid #cbd5e1', paddingLeft: '20px', marginLeft: '10px' }}>
            {education.map(edu => (
              (edu.institution || edu.degree) && (
                <div key={edu.id} style={{ position: 'relative', marginBottom: '20px' }}>
                  <div style={{ position: 'absolute', left: '-27px', top: '5px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#8b5cf6', border: '2px solid #fff' }}></div>
                  
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '17px', fontWeight: 'bold' }}>{edu.degree || 'Degree'}</h3>
                  <div style={{ fontSize: '15px', color: '#475569' }}>
                    {edu.institution} <span style={{ fontStyle: 'italic', color: '#64748b' }}>({edu.year}{edu.percentage && (edu.scoreType === 'cgpa' ? `, ${edu.percentage} CGPA` : `, ${edu.percentage}%`)})</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills && (
        <div>
          <h2 style={{ fontSize: '20px', color: '#111', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
            Skills
          </h2>
          <div style={{ fontSize: '15px', lineHeight: 2 }}>
            {skills.split(',').map((skill, index) => (
              <span key={index} style={{ 
                display: 'inline-block', 
                borderBottom: '1px solid #94a3b8', 
                marginRight: '15px'
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

export default TemplateSix;
