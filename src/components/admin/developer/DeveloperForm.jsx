import { useState } from "react"
import { FaArrowLeft, FaSave, FaTimes } from "react-icons/fa"
import "../../../styles/components/admin/developers/DeveloperForm.css"

const DeveloperForm = ({ developer, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: developer?.name || "",
    role: developer?.role || "",
    bio: developer?.bio || "",
    skills: developer?.skills || [],
    social: {
      github: developer?.social?.github || "",
      linkedin: developer?.social?.linkedin || "",
      portfolio: developer?.social?.portfolio || "",
    },
  })

  const [currentSkill, setCurrentSkill] = useState("")
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.role.trim()) {
      newErrors.role = "Role is required"
    }

    if (!formData.bio.trim()) {
      newErrors.bio = "Bio is required"
    } else if (formData.bio.length > 150) {
      newErrors.bio = "Bio must be 150 characters or less"
    }

    if (formData.skills.length === 0) {
      newErrors.skills = "At least one skill is required"
    }

    if (!formData.social.github.trim()) {
      newErrors.github = "GitHub URL is required"
    }

    if (!formData.social.linkedin.trim()) {
      newErrors.linkedin = "LinkedIn URL is required"
    }

    if (!formData.social.portfolio.trim()) {
      newErrors.portfolio = "Portfolio URL is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name.startsWith("social.")) {
      const socialField = name.split(".")[1]
      setFormData({
        ...formData,
        social: {
          ...formData.social,
          [socialField]: value,
        },
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleAddSkill = (e) => {
    e.preventDefault()
    if (currentSkill.trim() && !formData.skills.includes(currentSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, currentSkill.trim()],
      })
      setCurrentSkill("")
    }
  }

  const handleRemoveSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((skill) => skill !== skillToRemove),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      const dataToSave = developer ? { ...formData, id: developer.id } : formData
      onSave(dataToSave)
    }
  }

  return (
    <div className="developer-form-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <button className="back-button" onClick={onCancel}>
              <FaArrowLeft />
              Back to Team
            </button>

            <div className="form-card">
              <div className="form-header">
                <h2 className="form-title">{developer ? "Edit Developer" : "Add New Developer"}</h2>
                <p className="form-subtitle">{developer ? "Update developer information" : "Add a new team member"}</p>
              </div>

              <form onSubmit={handleSubmit} className="developer-form">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter full name"
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="role" className="form-label">
                        Role *
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        className={`form-control ${errors.role ? "is-invalid" : ""}`}
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="e.g., Full Stack Developer"
                      />
                      {errors.role && <div className="invalid-feedback">{errors.role}</div>}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="bio" className="form-label">
                    Bio * <span className="char-count">({formData.bio.length}/150)</span>
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    className={`form-control ${errors.bio ? "is-invalid" : ""}`}
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Write a brief bio (max 150 characters)"
                    rows="3"
                    maxLength="150"
                  />
                  {errors.bio && <div className="invalid-feedback">{errors.bio}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Skills * {formData.skills.length > 0 && `(${formData.skills.length} skills)`}
                  </label>
                  <div className="skills-input-container">
                    <input
                      type="text"
                      className="form-control"
                      value={currentSkill}
                      onChange={(e) => setCurrentSkill(e.target.value)}
                      placeholder="Enter a skill and press Add"
                      onKeyPress={(e) => e.key === "Enter" && handleAddSkill(e)}
                    />
                    <button
                      type="button"
                      className="add-skill-btn"
                      onClick={handleAddSkill}
                      disabled={!currentSkill.trim()}
                    >
                      Add
                    </button>
                  </div>
                  {errors.skills && <div className="invalid-feedback d-block">{errors.skills}</div>}

                  {formData.skills.length > 0 && (
                    <div className="skills-preview">
                      {formData.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                          <button type="button" className="remove-skill-btn" onClick={() => handleRemoveSkill(skill)}>
                            <FaTimes />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="social-section">
                  <h4 className="section-title">Social Media Links</h4>

                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="form-group">
                        <label htmlFor="github" className="form-label">
                          GitHub URL *
                        </label>
                        <input
                          type="url"
                          id="github"
                          name="social.github"
                          className={`form-control ${errors.github ? "is-invalid" : ""}`}
                          value={formData.social.github}
                          onChange={handleInputChange}
                          placeholder="https://github.com/username"
                        />
                        {errors.github && <div className="invalid-feedback">{errors.github}</div>}
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="form-group">
                        <label htmlFor="linkedin" className="form-label">
                          LinkedIn URL *
                        </label>
                        <input
                          type="url"
                          id="linkedin"
                          name="social.linkedin"
                          className={`form-control ${errors.linkedin ? "is-invalid" : ""}`}
                          value={formData.social.linkedin}
                          onChange={handleInputChange}
                          placeholder="https://linkedin.com/in/username"
                        />
                        {errors.linkedin && <div className="invalid-feedback">{errors.linkedin}</div>}
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="form-group">
                        <label htmlFor="portfolio" className="form-label">
                          Portfolio URL *
                        </label>
                        <input
                          type="url"
                          id="portfolio"
                          name="social.portfolio"
                          className={`form-control ${errors.portfolio ? "is-invalid" : ""}`}
                          value={formData.social.portfolio}
                          onChange={handleInputChange}
                          placeholder="https://yourportfolio.com"
                        />
                        {errors.portfolio && <div className="invalid-feedback">{errors.portfolio}</div>}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn btn-cancel" onClick={onCancel}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-save">
                    <FaSave className="me-2" />
                    {developer ? "Update Developer" : "Add Developer"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeveloperForm
