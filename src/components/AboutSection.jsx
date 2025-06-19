import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiTarget, FiUsers, FiAward, FiGlobe } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/AboutSection.css";

const AboutSection = () => {
  const skillsRef = useRef(null);

  const stats = [
    { icon: <FiUsers />, number: "150+", label: "Happy Clients" },
    { icon: <FiTarget />, number: "300+", label: "Projects Completed" },
    { icon: <FiAward />, number: "5+", label: "Years Experience" },
  ];

  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Firebase", icon: "🔥" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Express", icon: "🚀" },
    { name: "Git", icon: "📝" },
  ];

  const developers = [
    {
      name: "Ramesh D.",
      role: "Full Stack Developer",
      avatar: "R",
      bio: "Building modern web apps with React and Firebase. Passionate about creating digital experiences that last.",
      socialLinks: [
        {
          icon: <FaGithub />,
          url: "https://github.com/ramesh",
          label: "GitHub",
        },
        {
          icon: <FaLinkedin />,
          url: "https://linkedin.com/in/ramesh",
          label: "LinkedIn",
        },
        {
          icon: <FiGlobe />,
          url: "https://ramesh-portfolio.com",
          label: "Portfolio",
        },
      ],
    },
    {
      name: "Sarah M.",
      role: "UI/UX Designer",
      avatar: "S",
      bio: "Crafting beautiful and intuitive user interfaces. Specializing in modern design systems and user experience optimization.",
      socialLinks: [
        {
          icon: <FaGithub />,
          url: "https://github.com/sarah",
          label: "GitHub",
        },
        {
          icon: <FaLinkedin />,
          url: "https://linkedin.com/in/sarah",
          label: "LinkedIn",
        },
        {
          icon: <FiGlobe />,
          url: "https://sarah-designs.com",
          label: "Portfolio",
        },
      ],
    },
    {
      name: "Alex K.",
      role: "Backend Developer",
      avatar: "A",
      bio: "Expert in Node.js and cloud architecture. Building scalable APIs and microservices for enterprise applications.",
      socialLinks: [
        { icon: <FaGithub />, url: "https://github.com/alex", label: "GitHub" },
        {
          icon: <FaLinkedin />,
          url: "https://linkedin.com/in/alex",
          label: "LinkedIn",
        },
        { icon: <FiGlobe />, url: "https://alex-dev.com", label: "Portfolio" },
      ],
    },
    {
      name: "Maya P.",
      role: "Frontend Developer",
      avatar: "M",
      bio: "React and Vue.js enthusiast. Creating responsive and performant web applications with modern JavaScript frameworks.",
      socialLinks: [
        { icon: <FaGithub />, url: "https://github.com/maya", label: "GitHub" },
        {
          icon: <FaLinkedin />,
          url: "https://linkedin.com/in/maya",
          label: "LinkedIn",
        },
        {
          icon: <FiGlobe />,
          url: "https://maya-frontend.com",
          label: "Portfolio",
        },
      ],
    },
  ];

  useEffect(() => {
    const skillsContainer = skillsRef.current;
    if (!skillsContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;
    const maxScroll = skillsContainer.scrollWidth - skillsContainer.clientWidth;

    const autoScroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
      }
      skillsContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(autoScroll, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="section-title text-center mb-5">About Nivix</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-content">
              <h3 className="h2 mb-4">We Build Digital Excellence</h3>
              <p className="mb-4">
                At Nivix, we're passionate about creating digital solutions that
                make a difference. Our team of experienced developers,
                designers, and strategists work together to deliver exceptional
                results that exceed expectations.
              </p>
              <p className="mb-4">
                From stunning websites to complex web applications, we leverage
                the latest technologies and best practices to ensure your
                project is built for success, scalability, and outstanding
                performance.
              </p>
              <Row>
                {stats.map((stat, index) => (
                  <Col key={index} xs={4} className="text-center">
                    <div className="service-icon mb-3">{stat.icon}</div>
                    <h4
                      className="h3 text-primary mb-1"
                      style={{ color: "var(--primary-orange)" }}
                    >
                      {stat.number}
                    </h4>
                    <p className="small text-muted">{stat.label}</p>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="developers-section">
            <h3 className="h2 mb-4 text-center">Our Developers</h3>
              <div className="developers-grid">
                {developers.map((developer, index) => (
                  <div key={index} className="developer-card">
                    <div className="developer-profile">
                      <div className="profile-avatar">{developer.avatar}</div>
                      <div className="developer-info">
                        <h4 className="developer-name">{developer.name}</h4>
                        <p className="developer-role">{developer.role}</p>
                      </div>
                    </div>

                    <div className="developer-bio">
                      <p>{developer.bio}</p>
                    </div>

                    {index === 0 && (
                      <div className="skills-section">
                        <h6 className="skills-title">Skills</h6>
                        <div className="skills-container" ref={skillsRef}>
                          {[...skills, ...skills].map((skill, skillIndex) => (
                            <div key={skillIndex} className="skill-item">
                              <span className="skill-icon">{skill.icon}</span>
                              <span className="skill-name">{skill.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="social-links-section">
                      <div className="developer-social-links">
                        {developer.socialLinks.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="developer-social-link"
                            aria-label={link.label}
                          >
                            {link.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
