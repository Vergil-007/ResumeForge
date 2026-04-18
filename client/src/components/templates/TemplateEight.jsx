import React from 'react';

const TemplateEight = ({ data }) => {
  const { personalInfo, experience, education, projects, skills } = data;

  return (
    <div style={{ fontFamily: 'Garamond, "Times New Roman", serif', lineHeight: 1.5, color: '#000', padding: '10px 30px' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '25px' }}>
        <h1 style={{ margin: '0', fontSize: '28px', textTransform: 'uppercase', fontWeight: 'bold' }}>
          {personalInfo?.fullName || 'Your Name'}
        </h1>
        <div style={{ fontSize: '13px', marginTop: '5px' }}>
          {personalInfo?.address && <span>{personalInfo.address}</span>}
          {personalInfo?.phone && <span> • {personalInfo.phone}</span>}
          {personalInfo?.email && <span> • {personalInfo.email}</span>}
        </div>
      </div>

      {personalInfo?.summary && (
        <div style={{ marginBottom: '20px' }}>
          <p style={{ margin: 0, fontSize: '13px', textAlign: 'justify' }}>{personalInfo.summary}</p>
        </div>
      )}

      {/* Education First for Academics */}
      {education && education.length > 0 && education.some(e => e.institution || e.degree) && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '15px', textTransform: 'uppercase', borderBottom: '1px solid #000', marginBottom: '10px', paddingBottom: '2px', fontWeight: 'bold' }}>
            Education
          </h2>
          {education.map(edu => (
            (edu.institution || edu.degree) && (
              <div key={edu.id} style={{ display: 'flex', marginBottom: '8px' }}>
                <div style={{ width: '15%', fontSize: '13px' }}>
                  {edu.year}
                  {edu.percentage && <div>{edu.scoreType === 'cgpa' ? `${edu.percentage} CGPA` : `${edu.percentage}%`}</div>}
                </div>
                <div style={{ width: '85%' }}>
                  <div style={{ fontSize: '13px', fontWeight: 'bold' }}>{edu.degree || 'Degree'}</div>
                  <div style={{ fontSize: '13px', fontStyle: 'italic' }}>{edu.institution}</div>
                </div>
              </div>
            )
          ))}
        </div>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && projects.some(p => p.title || p.domain) && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '15px', textTransform: 'uppercase', borderBottom: '1px solid #000', marginBottom: '10px', paddingBottom: '2px', fontWeight: 'bold' }}>
            Projects
          </h2>
          {projects.map(proj => (
            (proj.title || proj.domain) && (
              <div key={proj.id} style={{ display: 'flex', marginBottom: '15px' }}>
                <div style={{ width: '15%', fontSize: '13px' }}>
                  {proj.domain}
                </div>
                <div style={{ width: '85%' }}>
                  <div style={{ fontSize: '13px', fontWeight: 'bold' }}>{proj.title || 'Project Title'}</div>
                  {proj.description && (
                    <div style={{ fontSize: '13px', textAlign: 'justify', whiteSpace: 'pre-wrap', marginTop: '4px' }}>{proj.description}</div>
                  )}
                </div>
              </div>
            )
          ))}
        </div>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && experience.some(e => e.company || e.position) && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '15px', textTransform: 'uppercase', borderBottom: '1px solid #000', marginBottom: '10px', paddingBottom: '2px', fontWeight: 'bold' }}>
            Academic & Professional Experience
          </h2>
          {experience.map(exp => (
            (exp.company || exp.position) && (
              <div key={exp.id} style={{ display: 'flex', marginBottom: '15px' }}>
                <div style={{ width: '15%', fontSize: '13px' }}>
                  {exp.startDate} -<br/> {exp.endDate}
                </div>
                <div style={{ width: '85%' }}>
                  <div style={{ fontSize: '13px', fontWeight: 'bold' }}>{exp.position || 'Position Title'}</div>
                  <div style={{ fontSize: '13px', fontStyle: 'italic', marginBottom: '4px' }}>{exp.company}</div>
                  {exp.description && (
                    <div style={{ fontSize: '13px', textAlign: 'justify', whiteSpace: 'pre-wrap' }}>{exp.description}</div>
                  )}
                </div>
              </div>
            )
          ))}
        </div>
      )}

      {/* Skills */}
      {skills && (
        <div>
          <h2 style={{ fontSize: '15px', textTransform: 'uppercase', borderBottom: '1px solid #000', marginBottom: '10px', paddingBottom: '2px', fontWeight: 'bold' }}>
            Skills & Software
          </h2>
          <div style={{ fontSize: '13px' }}>
            {skills}
          </div>
        </div>
      )}

    </div>
  );
};

export default TemplateEight;
