import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../styles/components/common/ContactUs.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="section-title text-center mb-4">Contact Us</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="contact-form">
              <h3 className="mb-4">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="cta-button">
                  Send Message
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;