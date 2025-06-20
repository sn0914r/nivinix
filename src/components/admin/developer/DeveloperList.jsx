import { FaGithub, FaLinkedin, FaGlobe, FaUsers, FaCode, FaPlus, FaEdit, FaTrash } from "react-icons/fa"
import "../../../styles/components/admin/developers/DeveloperList.css"

const DeveloperList = ({ developers, onAddDeveloper, onEditDeveloper, onDeleteDeveloper }) => {
  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const truncateBio = (bio, maxLength = 150) => {
    if (bio.length <= maxLength) return bio
    return bio.substring(0, maxLength).trim() + "..."
  }

  return (
    <div className="developer-list-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Header */}
            <div className="dashboard-header">
              <h1 className="dashboard-title">Developer Team</h1>
              <p className="dashboard-subtitle">Meet our talented team of developers, designers, and engineers</p>
              <div className="team-stats">
                <div className="stat-card">
                  <FaUsers className="stat-icon" />
                  <div className="stat-info">
                    <span className="stat-number">{developers.length}</span>
                    <span className="stat-label">Developers</span>
                  </div>
                </div>
                <div className="stat-card">
                  <FaCode className="stat-icon" />
                  <div className="stat-info">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Technologies</span>
                  </div>
                </div>
                <button className="add-developer-btn" onClick={onAddDeveloper}>
                  <FaPlus className="me-2" />
                  Add Developer
                </button>
              </div>
            </div>

            {/* Developers Grid */}
            <div className="row g-4">
              {developers.map((developer) => (
                <div key={developer.id} className="col-12 col-md-6 col-xl-4">
                  <div className="developer-card">
                    <div className="card-actions">
                      <button
                        className="action-btn edit-btn"
                        onClick={() => onEditDeveloper(developer)}
                        title="Edit Developer"
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="action-btn delete-btn"
                        onClick={() => onDeleteDeveloper(developer.id)}
                        title="Delete Developer"
                      >
                        <FaTrash />
                      </button>
                    </div>

                    <div className="card-header-section">
                      <div className="developer-avatar">{developer.avatar}</div>
                      <div className="developer-info">
                        <h5 className="developer-name">{developer.name}</h5>
                        <p className="developer-role">{developer.role}</p>
                      </div>
                    </div>

                    <div className="card-body-section">
                      <p className="developer-bio">{truncateBio(developer.bio)}</p>

                      <div className="skills-section">
                        <h6 className="skills-title">Skills</h6>
                        <div className="skills-container">
                          {developer.skills.map((skill, index) => (
                            <span key={index} className="skill-badge">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="social-links">
                        <button
                          className="social-btn github"
                          onClick={() => handleSocialClick(developer.social.github)}
                          title="GitHub"
                        >
                          <FaGithub />
                        </button>
                        <button
                          className="social-btn linkedin"
                          onClick={() => handleSocialClick(developer.social.linkedin)}
                          title="LinkedIn"
                        >
                          <FaLinkedin />
                        </button>
                        <button
                          className="social-btn portfolio"
                          onClick={() => handleSocialClick(developer.social.portfolio)}
                          title="Portfolio"
                        >
                          <FaGlobe />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeveloperList
