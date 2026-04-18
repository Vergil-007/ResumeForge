import React from 'react';

const TemplateTen = ({ data }) => {
  const { personalInfo, experience, education, projects, skills } = data;

  return (
    <div style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', lineHeight: 1.8, color: '#222', padding: '40px' }}>
      
      {/* Centered Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '24px', fontWeight: '300', letterSpacing: '4px', textTransform: 'uppercase' }}>
          {personalInfo?.fullName || 'Your Name'}
        </h1>
        <div style={{ width: '30px', height: '1px', backgroundColor: '#aaa', margin: '0 auto 15px auto' }}></div>
        <div style={{ fontSize: '12px', color: '#666', letterSpacing: '1px' }}>
          {personalInfo?.email && <span style={{ marginRight: '15px' }}>{personalInfo.email}</span>}
          {personalInfo?.phone && <span style={{ marginRight: '15px' }}>{personalInfo.phone}</span>}
          {personalInfo?.address && <span>{personalInfo.address}</span>}
        </div>
      </div>

      {personalInfo?.summary && (
        <div style={{ marginBottom: '40px', textAlign: 'center', maxWidth: '80%', margin: '0 auto 40px auto' }}>
          <p style={{ margin: 0, fontSize: '13px', color: '#555' }}>{personalInfo.summary}</p>
        </div>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && projects.some(p => p.title || p.domain) && (
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', color: '#aaa' }}>
            Projects
          </h2>
          {projects.map(proj => (
            (proj.title || proj.domain) && (
              <div key={proj.id} style={{ marginBottom: '25px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '15px', fontWeight: '500' }}>{proj.title || 'Project Title'}</h3>
                <div style={{ fontSize: '13px', color: '#555', marginBottom: '10px' }}>
                  {proj.domain}
                </div>
                {proj.description && (
                  <p style={{ margin: 0, fontSize: '13px', color: '#666', maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                    {proj.description}
                  </p>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && experience.some(e => e.company || e.position) && (
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', color: '#aaa' }}>
            Experience
          </h2>
          {experience.map(exp => (
            (exp.company || exp.position) && (
              <div key={exp.id} style={{ marginBottom: '25px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '15px', fontWeight: '500' }}>{exp.position || 'Position Title'}</h3>
                <div style={{ fontSize: '13px', color: '#555', marginBottom: '10px' }}>
                  {exp.company} <span style={{ margin: '0 10px' }}>|</span> {exp.startDate} - {exp.endDate}
                </div>
                {exp.description && (
                  <p style={{ margin: 0, fontSize: '13px', color: '#666', maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                    {exp.description}
                  </p>
                )}
              </div>
            )
          ))}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '60px' }}>
        {/* Education */}
        {education && education.length > 0 && education.some(e => e.institution || e.degree) && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', color: '#aaa' }}>
              Education
            </h2>
            {education.map(edu => (
              (edu.institution || edu.degree) && (
                <div key={edu.id} style={{ marginBottom: '15px' }}>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '14px', fontWeight: '500' }}>{edu.degree || 'Degree'}</h3>
                  <div style={{ fontSize: '13px', color: '#555' }}>{edu.institution}</div>
                  <div style={{ fontSize: '12px', color: '#888' }}>{edu.year}{edu.percentage && (edu.scoreType === 'cgpa' ? ` | ${edu.percentage} CGPA` : ` | ${edu.percentage}%`)}</div>
                </div>
              )
            ))}
          </div>
        )}

        {/* Skills */}
        {skills && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', color: '#aaa' }}>
              Skills
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#555' }}>
              {skills.split(',').map((skill, index) => (
                <span key={index}>{skill.trim()}</span>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default TemplateTen;
