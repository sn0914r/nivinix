import { useState } from "react"
import { FaStar, FaUpload, FaUser, FaBuilding, FaEnvelope, FaCommentDots, FaCamera } from "react-icons/fa"
import "../../styles/pages/common/TestimonialForm.css"

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    testimonial: "",
    rating: 0,
    profilePhoto: null,
    consent: false,
  })
  const [hover, setHover] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Thank you for your feedback!")
    setIsSubmitting(false)

    // Reset form
    setFormData({
      fullName: "",
      company: "",
      email: "",
      testimonial: "",
      rating: 0,
      profilePhoto: null,
      consent: false,
    })
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type.startsWith("image/")) {
        handleInputChange("profilePhoto", file)
      }
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleInputChange("profilePhoto", e.target.files[0])
    }
  }

  const StarRating = () => (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className="star-button"
          onClick={() => handleInputChange("rating", star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        >
          <FaStar className={`star-icon ${star <= (hover || formData.rating) ? "star-filled" : "star-empty"}`} />
        </button>
      ))}
      {/* {formData.rating > 0 && <span className="rating-text">{formData.rating} out of 5 stars</span>} */}
    </div>
  )

  return (
    <div className="testimonial-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="testimonial-container">
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="header-icon">
                    <FaCommentDots />
                  </div>
                  <h1 className="testimonial-title">Share Your Experience</h1>
                  <p className="testimonial-description">
                    Your feedback helps us improve and helps others make informed decisions. We'd love to hear about
                    your experience with Nivix.
                  </p>
                </div>

                <div className="testimonial-content">
                  <form onSubmit={handleSubmit}>
                    {/* Personal Information */}
                    <div className="form-section">
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="fullName" className="form-label">
                            <FaUser />
                            Full Name <span className="text-danger">*</span>
                          </label>
                          <input
                            id="fullName"
                            type="text"
                            className="form-input"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="company" className="form-label">
                            <FaBuilding />
                            Company / Role <span className="text-danger">*</span>
                          </label>
                          <input
                            id="company"
                            type="text"
                            className="form-input"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            placeholder="Your company or role"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-section">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          <FaEnvelope />
                          Email (optional, kept private)
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="form-input"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="form-section">
                      <div className="form-group">
                        <label htmlFor="testimonial" className="form-label">
                          <FaCommentDots />
                          Your Testimonial <span className="text-danger">*</span>
                        </label>
                        <textarea
                          id="testimonial"
                          className="form-input form-textarea"
                          value={formData.testimonial}
                          onChange={(e) => handleInputChange("testimonial", e.target.value)}
                          placeholder="Tell us about your experience with Nivix. What did you like? How did we help you achieve your goals?"
                          required
                        />
                        <div className="character-count">{formData.testimonial.length}/500 characters</div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="rating-section">
                      <label className="rating-label">Rating <span className="text-danger">*</span></label>
                      <div className="star-rating-container">
                        <StarRating />
                      </div>
                    </div>

                    {/* Profile Photo Upload */}
                    <div className="upload-section">
                      <label className="form-label">
                        <FaCamera />
                        Profile Photo (optional)
                      </label>
                      <div
                        className={`upload-area ${dragActive ? "drag-active" : ""}`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="upload-input"
                          id="photo-upload"
                        />
                        <label htmlFor="photo-upload">
                          <FaUpload className="upload-icon" />
                          <p className="upload-text">
                            {formData.profilePhoto ? (
                              <span className="upload-filename">{formData.profilePhoto.name}</span>
                            ) : (
                              <>
                                <span style={{ fontWeight: "500" }}>Click to upload</span> or drag and drop
                              </>
                            )}
                          </p>
                          <p className="upload-subtext">PNG, JPG, GIF up to 10MB</p>
                        </label>
                      </div>
                    </div>

                    {/* Consent */}
                    <div className="consent-section">
                      <input
                        type="checkbox"
                        id="consent"
                        className="consent-checkbox"
                        checked={formData.consent}
                        onChange={(e) => handleInputChange("consent", e.target.checked)}
                        required
                      />
                      <label htmlFor="consent" className="consent-label">
                        I allow Nivix to publish this testimonial on the website and marketing materials. I understand
                        that my name, company, and photo (if provided) may be displayed publicly.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="submit-section">
                      <button
                        type="submit"
                        disabled={isSubmitting || !formData.consent || formData.rating === 0}
                        className="submit-button"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="loading-spinner" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Testimonial"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Additional Info */}
              <div className="footer-info">
                <p>
                  Your testimonial will be reviewed before publication. We respect your privacy and will never share
                  your email address.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialForm
