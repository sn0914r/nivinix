"use client";

import { useState } from "react";
import {
  FaArrowLeft,
  FaStar,
  FaCalendarAlt,
  FaEnvelope,
  FaEdit,
  FaTrash,
  FaCommentDots,
  FaCheck,
} from "react-icons/fa";
import "../styles/AdminTestimonials.css";
import { Link } from "react-router-dom";

const TestimonialsPage = () => {
  // Sample testimonial data with approval status
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Tech Solutions Inc.",
      email: "sarah.johnson@techsolutions.com",
      rating: 5,
      date: "2024-01-15",
      content:
        "Working with NIVINX has been an absolute game-changer for our business. Their team delivered exceptional results that exceeded our expectations. The attention to detail and professional approach made the entire process smooth and enjoyable.",
      isApproved: false,
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Digital Marketing Pro",
      email: "m.chen@digitalmarketing.com",
      rating: 4,
      date: "2024-01-12",
      content:
        "Great experience working with the NIVINX team. They understood our requirements perfectly and delivered a solution that perfectly fits our needs. Highly recommended for anyone looking for quality development services.",
      isApproved: true,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Creative Agency",
      email: "emily@creativeagency.com",
      rating: 5,
      date: "2024-01-10",
      content:
        "Outstanding work! The team at NIVINX brought our vision to life with incredible precision. Their expertise in modern web technologies is evident in every aspect of the final product.",
      isApproved: false,
    },
    {
      id: 4,
      name: "David Thompson",
      company: "Startup Ventures",
      email: "david.t@startupventures.com",
      rating: 5,
      date: "2024-01-08",
      content:
        "NIVINX delivered exactly what we needed, on time and within budget. Their communication throughout the project was excellent, and they were always available to address our questions and concerns.",
      isApproved: true,
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "E-commerce Solutions",
      email: "lisa.wang@ecommerce.com",
      rating: 4,
      date: "2024-01-05",
      content:
        "Professional, reliable, and skilled. The NIVINX team helped us transform our online presence with a beautiful, functional website that our customers love.",
      isApproved: false,
    },
    {
      id: 6,
      name: "Robert Martinez",
      company: "Consulting Group",
      email: "r.martinez@consulting.com",
      rating: 3,
      date: "2024-01-03",
      content:
        "Good work overall. The project was completed as requested, though there were some minor delays. The final result met our requirements and the team was responsive to feedback.",
      isApproved: false,
    },
  ]);

  const handleApprove = (testimonialId) => {
    setTestimonials((prevTestimonials) =>
      prevTestimonials.map((testimonial) =>
        testimonial.id === testimonialId
          ? { ...testimonial, isApproved: true }
          : testimonial
      )
    );
  };

  const handleEdit = (testimonialId) => {
    console.log(`Edit testimonial ${testimonialId}`);
    // Add edit logic here
  };

  const handleDelete = (testimonialId) => {
    console.log(`Delete testimonial ${testimonialId}`);
    // Add delete logic here
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-orange-500" : "text-gray-300"}
        style={{
          color: index < rating ? "#fbbf24" : "rgba(255, 255, 255, 0.3)",
        }}
      />
    ));
  };

  return (
    <div className="admin-testimonials-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="admin-testimonials-container">
              {/* Back Button */}
              <Link to="/admin-dashboard" className="admin-back-button">
                <FaArrowLeft />
                Back to Dashboard
              </Link>

              {/* Header */}
              <div className="admin-testimonials-header">
                <h1 className="admin-testimonials-title">All Testimonials</h1>
                <p className="admin-testimonials-subtitle">
                  Manage and review all customer testimonials and feedback.
                  Monitor ratings, approve content, and maintain quality
                  standards.
                </p>
              </div>

              {/* Testimonials Grid */}
              {testimonials.length > 0 ? (
                <div className="admin-testimonials-grid">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="admin-testimonial-card"
                    >
                      {/* Left Side - User Info */}
                      <div className="admin-card-left">
                        <div className="admin-testimonial-avatar">
                          {getInitials(testimonial.name)}
                        </div>
                        <h3 className="admin-testimonial-name">
                          {testimonial.name}
                        </h3>
                        <p className="admin-testimonial-company">
                          {testimonial.company}
                        </p>

                        <div className="admin-user-meta">
                          <div className="admin-meta-item admin-date">
                            <FaCalendarAlt />
                            {formatDate(testimonial.date)}
                          </div>
                          <div className="admin-meta-item admin-email">
                            <FaEnvelope />
                            {testimonial.email.split("@")[0]}
                          </div>
                        </div>

                        <div className="admin-testimonial-rating">
                          <div className="admin-rating-stars">
                            {renderStars(testimonial.rating)}
                          </div>
                          <span className="admin-rating-text">
                            {testimonial.rating}/5 Stars
                          </span>
                        </div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="admin-card-right">
                        <div className="admin-testimonial-content">
                          {testimonial.content}
                        </div>

                        <div className="admin-card-actions">
                          {testimonial.isApproved ? (
                            <button className="admin-action-button admin-approved">
                              <FaCheck />
                              Approved
                            </button>
                          ) : (
                            <button
                              className="admin-action-button admin-approve"
                              onClick={() => handleApprove(testimonial.id)}
                            >
                              <FaCheck />
                              Approve
                            </button>
                          )}
                          <button
                            className="admin-action-button admin-edit"
                            onClick={() => handleEdit(testimonial.id)}
                          >
                            <FaEdit />
                            Edit
                          </button>
                          <button
                            className="admin-action-button admin-delete"
                            onClick={() => handleDelete(testimonial.id)}
                          >
                            <FaTrash />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="admin-empty-state">
                  <FaCommentDots />
                  <h3>No Testimonials Found</h3>
                  <p>
                    There are no testimonials to display at the moment. Check
                    back later or add some testimonials.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
