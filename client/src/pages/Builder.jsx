import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TemplateOne from '../components/templates/TemplateOne';
import TemplateTwo from '../components/templates/TemplateTwo';
import TemplateThree from '../components/templates/TemplateThree';
import TemplateFour from '../components/templates/TemplateFour';
import TemplateFive from '../components/templates/TemplateFive';
import TemplateSix from '../components/templates/TemplateSix';
import TemplateSeven from '../components/templates/TemplateSeven';
import TemplateEight from '../components/templates/TemplateEight';
import TemplateNine from '../components/templates/TemplateNine';
import TemplateTen from '../components/templates/TemplateTen';
import TemplateEleven from '../components/templates/TemplateEleven';
import TemplateTwelve from '../components/templates/TemplateTwelve';
import { exportToPdf } from '../utils/pdfExport';

const templatesMap = {
  template1: TemplateOne,
  template2: TemplateTwo,
  template3: TemplateThree,
  template4: TemplateFour,
  template5: TemplateFive,
  template6: TemplateSix,
  template7: TemplateSeven,
  template8: TemplateEight,
  template9: TemplateNine,
  template10: TemplateTen,
  template11: TemplateEleven,
  template12: TemplateTwelve
};

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const initialData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: ''
  },
  experience: [
    { id: Date.now().toString(), company: '', position: '', startDate: '', endDate: '', description: '' }
  ],
  education: [
    { id: Date.now().toString() + 'edu', institution: '', degree: '', year: '', percentage: '', scoreType: 'percentage' }
  ],
  projects: [
    { id: Date.now().toString() + 'proj', title: '', domain: '', description: '' }
  ],
  skills: ''
};

const Builder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = !id;

  const [title, setTitle] = useState('My Awesome Resume');
  const [templateId, setTemplateId] = useState('template1');
  const [resumeData, setResumeData] = useState(initialData);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isNew) {
      fetchResume();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchResume = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/resumes/${id}`);
      setTitle(res.data.title);
      setTemplateId(res.data.template_id);
      setResumeData(res.data.content_json);
    } catch (err) {
      console.error('Error fetching resume', err);
      alert('Could not load resume');
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (isNew) {
        const res = await axios.post(`${API_URL}/api/resumes`, {
          title,
          template_id: templateId,
          content_json: resumeData
        });
        navigate(`/builder/${res.data.id}`);
      } else {
        await axios.put(`${API_URL}/api/resumes/${id}`, {
          title,
          template_id: templateId,
          content_json: resumeData
        });
        alert('Resume saved successfully!');
      }
    } catch (err) {
      console.error('Error saving resume', err);
      alert('Failed to save resume');
    } finally {
      setSaving(false);
    }
  };

  const handleExport = () => {
    exportToPdf('resume-preview-content', `${title || 'resume'}.pdf`);
  };

  // Generic change handler for personal info
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [name]: value }
    }));
  };

  // Array handlers
  const handleArrayChange = (arrayName, id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const addArrayItem = (arrayName, defaultItem) => {
    setResumeData(prev => ({
      ...prev,
      [arrayName]: [...prev[arrayName], { ...defaultItem, id: Date.now().toString() }]
    }));
  };

  const removeArrayItem = (arrayName, id) => {
    setResumeData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].filter(item => item.id !== id)
    }));
  };

  if (loading) return <div className="builder-container">Loading builder...</div>;

  return (
    <div className="builder-container">
      <div className="builder-sidebar">
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Resume Title</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Select Template</label>
            <select value={templateId} onChange={e => setTemplateId(e.target.value)}>
              <option value="template1">Modern Professional</option>
              <option value="template2">Minimalist Clean</option>
              <option value="template3">Executive Classic</option>
              <option value="template4">Creative Two-Column</option>
              <option value="template5">Tech Startup</option>
              <option value="template6">Timeline Approach</option>
              <option value="template7">Color Pop</option>
              <option value="template8">Academic CV</option>
              <option value="template9">Modern Split Header</option>
              <option value="template10">Centered Minimalist</option>
              <option value="template11">Bold Typography</option>
              <option value="template12">Subtle Accent</option>
            </select>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn-primary" onClick={handleSave} disabled={saving} style={{ flexGrow: 1 }}>
              {saving ? 'Saving...' : 'Save & Sync'}
            </button>
            <button className="btn-secondary" onClick={handleExport}>
              Export PDF
            </button>
          </div>
        </div>

        <div style={{ flexGrow: 1, overflowY: 'auto' }}>
          {/* Personal Info Form */}
          <div className="form-section">
            <div className="form-section-title">Personal Information</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <input type="text" name="fullName" placeholder="Full Name" value={resumeData.personalInfo?.fullName || ''} onChange={handlePersonalInfoChange} />
              <input type="email" name="email" placeholder="Email" value={resumeData.personalInfo?.email || ''} onChange={handlePersonalInfoChange} />
              <input type="text" name="phone" placeholder="Phone Number" value={resumeData.personalInfo?.phone || ''} onChange={handlePersonalInfoChange} />
              <input type="text" name="address" placeholder="Address" value={resumeData.personalInfo?.address || ''} onChange={handlePersonalInfoChange} />
              <textarea name="summary" placeholder="Professional Summary" value={resumeData.personalInfo?.summary || ''} onChange={handlePersonalInfoChange} rows={4} />
            </div>
          </div>

          {/* Experience Form */}
          <div className="form-section">
            <div className="form-section-title">
              Experience
              <button
                className="btn-secondary"
                style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
                onClick={() => addArrayItem('experience', { company: '', position: '', startDate: '', endDate: '', description: '' })}
              >
                + Add
              </button>
            </div>
            {resumeData.experience?.map((exp, index) => (
              <div key={exp.id} style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: index !== resumeData.experience.length - 1 ? '1px dashed var(--border-color)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.5rem' }}>
                  <button className="btn-danger" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }} onClick={() => removeArrayItem('experience', exp.id)}>Remove</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <input type="text" placeholder="Company Name" value={exp.company || ''} onChange={e => handleArrayChange('experience', exp.id, 'company', e.target.value)} />
                  <input type="text" placeholder="Job Title" value={exp.position || ''} onChange={e => handleArrayChange('experience', exp.id, 'position', e.target.value)} />
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input type="text" placeholder="Start (e.g., Jan 2021)" value={exp.startDate || ''} onChange={e => handleArrayChange('experience', exp.id, 'startDate', e.target.value)} />
                    <input type="text" placeholder="End (e.g., Present)" value={exp.endDate || ''} onChange={e => handleArrayChange('experience', exp.id, 'endDate', e.target.value)} />
                  </div>
                  <textarea placeholder="Job Description / Achievements" value={exp.description || ''} onChange={e => handleArrayChange('experience', exp.id, 'description', e.target.value)} rows={3} />
                </div>
              </div>
            ))}
          </div>

          {/* Education Form */}
          <div className="form-section">
            <div className="form-section-title">
              Education
              <button
                className="btn-secondary"
                style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
                onClick={() => addArrayItem('education', { institution: '', degree: '', year: '', percentage: '', scoreType: 'percentage' })}
              >
                + Add
              </button>
            </div>
            {resumeData.education?.map((edu, index) => (
              <div key={edu.id} style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: index !== resumeData.education.length - 1 ? '1px dashed var(--border-color)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.5rem' }}>
                  <button className="btn-danger" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }} onClick={() => removeArrayItem('education', edu.id)}>Remove</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <input type="text" placeholder="Institution" value={edu.institution || ''} onChange={e => handleArrayChange('education', edu.id, 'institution', e.target.value)} />
                  <input type="text" placeholder="Degree" value={edu.degree || ''} onChange={e => handleArrayChange('education', edu.id, 'degree', e.target.value)} />
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input type="text" placeholder="Year (e.g., 2024)" value={edu.year || ''} onChange={e => handleArrayChange('education', edu.id, 'year', e.target.value)} style={{ flexGrow: 1 }} />
                    <select 
                      value={edu.scoreType || 'percentage'} 
                      onChange={e => {
                        handleArrayChange('education', edu.id, 'scoreType', e.target.value);
                        handleArrayChange('education', edu.id, 'percentage', '');
                      }}
                      style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                    >
                      <option value="percentage">Percentage</option>
                      <option value="cgpa">CGPA</option>
                    </select>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flexGrow: 1 }}>
                      <input 
                        type="number" 
                        step={(!edu.scoreType || edu.scoreType === 'percentage') ? '1' : '0.01'}
                        placeholder={(!edu.scoreType || edu.scoreType === 'percentage') ? 'e.g., 89' : 'e.g., 9.32'} 
                        value={edu.percentage || ''} 
                        onChange={e => {
                          const val = e.target.value;
                          const scoreType = edu.scoreType || 'percentage';
                          if (scoreType === 'percentage') {
                            if (val === '' || /^\d+$/.test(val)) handleArrayChange('education', edu.id, 'percentage', val);
                          } else {
                            if (val === '' || /^\d+(\.\d{0,2})?$/.test(val)) handleArrayChange('education', edu.id, 'percentage', val);
                          }
                        }} 
                        style={{ width: '100%' }}
                      />
                      {(!edu.scoreType || edu.scoreType === 'percentage') && <span>%</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Projects Form */}
          <div className="form-section">
            <div className="form-section-title">
              Projects
              <button
                className="btn-secondary"
                style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
                onClick={() => addArrayItem('projects', { title: '', domain: '', description: '' })}
              >
                + Add
              </button>
            </div>
            {resumeData.projects?.map((proj, index) => (
              <div key={proj.id} style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: index !== resumeData.projects.length - 1 ? '1px dashed var(--border-color)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.5rem' }}>
                  <button className="btn-danger" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }} onClick={() => removeArrayItem('projects', proj.id)}>Remove</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <input type="text" placeholder="Project Title" value={proj.title || ''} onChange={e => handleArrayChange('projects', proj.id, 'title', e.target.value)} />
                  <input type="text" placeholder="Domain (e.g., Web App, Machine Learning)" value={proj.domain || ''} onChange={e => handleArrayChange('projects', proj.id, 'domain', e.target.value)} />
                  <textarea placeholder="Project Description" value={proj.description || ''} onChange={e => handleArrayChange('projects', proj.id, 'description', e.target.value)} rows={3} />
                </div>
              </div>
            ))}
          </div>

          {/* Skills Form */}
          <div className="form-section">
            <div className="form-section-title">Skills</div>
            <textarea
              placeholder="Comma separated skills (e.g., JavaScript, React, Node.js)"
              value={resumeData.skills || ''}
              onChange={e => setResumeData({ ...resumeData, skills: e.target.value })}
              rows={4}
            />
          </div>
        </div>
      </div>

      <div className="builder-content">
        <div id="resume-preview-content" className="resume-preview-wrapper">
          {(() => {
            const SelectedTemplate = templatesMap[templateId] || TemplateOne;
            return <SelectedTemplate data={resumeData} />;
          })()}
        </div>
      </div>
    </div>
  );
};

export default Builder;
