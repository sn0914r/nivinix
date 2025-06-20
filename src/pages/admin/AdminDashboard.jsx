"use client";

import {
  FaCommentDots,
  FaEnvelope,
  FaBriefcase,
  FaCogs,
  FaUsers,
  FaEllipsisH,
  FaArrowRight,
} from "react-icons/fa";
import "../../styles/pages/admin/AdminDashboard.css"
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const dashboardData = [
    {
      id: "testimonials",
      title: "All Testimonials",
      description:
        "Manage customer testimonials, reviews, and feedback from clients.",
      icon: <FaCommentDots />,
      className: "card-testimonials",
      route: "testimonials"
    },
    {
      id: "messages",
      title: "Messages",
      description:
        "View and respond to customer inquiries, support requests, and communications.",
      icon: <FaEnvelope />,
      className: "card-messages",
      hasNotification: true,
      notificationCount: 12,
      route: "messages"
    },
    {
      id: "portfolio",
      title: "Portfolio",
      description:
        "Manage portfolio projects, case studies, and showcase work samples.",
      icon: <FaBriefcase />,
      className: "card-portfolio",
      route: "portifolio"
    },
    {
      id: "services",
      title: "Services",
      description:
        "Update service offerings, pricing, packages, and service descriptions.",
      icon: <FaCogs />,
      className: "card-services",
      route: "services"
    },
    {
      id: "developers",
      title: "Developers",
      description:
        "Manage team members, developer profiles, skills, and availability.",
      icon: <FaUsers />,
      className: "card-developers",
      route: "developers"
    },
    {
      id: "others",
      title: "Others",
      description:
        "Additional settings, configurations, and miscellaneous management options.",
      icon: <FaEllipsisH />,
      className: "card-others",
      route: "others"
    },
  ];

  const handleCardClick = (cardId) => {
    console.log(`Navigating to ${cardId} section`);
    // Add navigation logic here
  };

  return (
    <div className="admin-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="admin-container">
              {/* Header */}
              <div className="admin-header">
                <h1 className="admin-title">Admin Dashboard</h1>
                <p className="admin-subtitle">
                  Welcome to your control center. Manage all aspects of your
                  NIVINX platform from this centralized dashboard.
                </p>
              </div>

              {/* Dashboard Grid */}
              <div className="admin-grid">
                {dashboardData.map((card) => (
                  <div key={card.id} className={`admin-card ${card.className}`}>
                    {card.hasNotification && (
                      <div className="notification-badge">
                        {card.notificationCount}
                      </div>
                    )}

                    <div className="card-icon">{card.icon}</div>

                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-description">{card.description}</p>

                    <Link
                      to={`/admin-dashboard/${card.route}`}
                      className="manage-button text-decoration-none"
                    >
                      <span>Manage</span>
                      <FaArrowRight />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
