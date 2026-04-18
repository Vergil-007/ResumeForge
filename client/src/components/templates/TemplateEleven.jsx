import React from 'react';

const TemplateEleven = ({ data }) => {
  const { personalInfo, experience, education, projects, skills } = data;

  return (
    <div style={{ fontFamily: 'Impact, sans-serif', padding: '30px', color: '#000', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Heavy Header */}
      <div style={{ borderBottom: '8px solid #000', paddingBottom: '10px', marginBottom: '30px' }}>
        <h1 style={{ margin: '0', fontSize: '50px', fontWeight: '900', textTransform: 'uppercase', lineHeight: 0.9 }}>
          {personalInfo?.fullName || 'YOUR NAME'}
        </h1>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 30%) 1fr', gap: '30px' }}>
        
        {/* Left Col */}
        <div>
          {personalInfo?.email || personalInfo?.phone ? (
            <div style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '900', textTransform: 'uppercase', borderBottom: '4px solid #000', display: 'inline-block', marginBottom: '10px' }}>CONTACT</h2>
              <div style={{ fontSize: '14px', fontWeight: '600', lineHeight: 1.8 }}>
                {personalInfo?.phone && <div>{personalInfo.phone}</div>}
                {personalInfo?.email && <div>{personalInfo.email}</div>}
                {personalInfo?.address && <div>{personalInfo.address}</div>}
              </div>
            </div>
          ) : null}

          {skills && (
            <div style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '900', textTransform: 'uppercase', borderBottom: '4px solid #000', display: 'inline-block', marginBottom: '10px' }}>SKILLS</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '14px', fontWeight: '600' }}>
                {skills.split(',').map((skill, index) => (
                  <div key={index}>{skill.trim()}</div>
                ))}
              </div>
            </div>
          )}

          {education && education.length > 0 && education.some(e => e.institution || e.degree) && (
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '900', textTransform: 'uppercase', borderBottom: '4px solid #000', display: 'inline-block', marginBottom: '10px' }}>EDUCATION</h2>
              {education.map(edu => (
                (edu.institution || edu.degree) && (
                  <div key={edu.id} style={{ marginBottom: '15px' }}>
                    <div style={{ fontSize: '14px', fontWeight: '900' }}>{edu.degree || 'Degree'}</div>
                    <div style={{ fontSize: '14px', fontWeight: '600' }}>{edu.institution}</div>
                    <div style={{ fontSize: '12px' }}>{edu.year}{edu.percentage && (edu.scoreType === 'cgpa' ? ` | ${edu.percentage} CGPA` : ` | ${edu.percentage}%`)}</div>
                  </div>
                )
              ))}
            </div>
          )}
        </div>

        {/* Right Col */}
        <div>
          {personalInfo?.summary && (
            <p style={{ margin: '0 0 30px 0', fontSize: '16px', fontWeight: '500', lineHeight: 1.5 }}>
              {personalInfo.summary}
            </p>
          )}

          {projects && projects.length > 0 && projects.some(p => p.title || p.domain) && (
            <div style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '900', textTransform: 'uppercase', borderBottom: '4px solid #000', marginBottom: '20px', paddingBottom: '5px' }}>PROJECTS</h2>
              {projects.map(proj => (
                (proj.title || proj.domain) && (
                  <div key={proj.id} style={{ marginBottom: '25px' }}>
                    <h3 style={{ margin: '0 0 5px 0', fontSize: '20px', fontWeight: '900', textTransform: 'uppercase' }}>{proj.title || 'Project Title'}</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <div style={{ fontSize: '16px', fontWeight: '700' }}>{proj.domain}</div>
                    </div>
                    {proj.description && (
                      <p style={{ margin: 0, fontSize: '14px', fontWeight: '500', lineHeight: 1.6 }}>{proj.description}</p>
                    )}
                  </div>
                )
              ))}
            </div>
          )}

          {experience && experience.length > 0 && experience.some(e => e.company || e.position) && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '900', textTransform: 'uppercase', borderBottom: '4px solid #000', marginBottom: '20px', paddingBottom: '5px' }}>EXPERIENCE</h2>
              {experience.map(exp => (
                (exp.company || exp.position) && (
                  <div key={exp.id} style={{ marginBottom: '25px' }}>
                    <h3 style={{ margin: '0 0 5px 0', fontSize: '20px', fontWeight: '900', textTransform: 'uppercase' }}>{exp.position || 'Position Title'}</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <div style={{ fontSize: '16px', fontWeight: '700' }}>{exp.company}</div>
                      <div style={{ fontSize: '14px', fontWeight: '600', backgroundColor: '#000', color: '#fff', padding: '2px 8px' }}>
                        {exp.startDate} - {exp.endDate}
                      </div>
                    </div>
                    {exp.description && (
                      <p style={{ margin: 0, fontSize: '14px', fontWeight: '500', lineHeight: 1.6 }}>{exp.description}</p>
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

export default TemplateEleven;
