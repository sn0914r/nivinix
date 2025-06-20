// import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiCode, FiSmartphone, FiShoppingCart, FiSearch, FiLayers, FiSettings } from 'react-icons/fi';
import { db } from "../../firebase/firebaseConfig.js";

const ServicesSection = () => {
  // const [services, setServices] = useState([]);

  // useEffect(()=>{

  // })

  const services = [
    {
      icon: <FiCode />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.'
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.'
    },
    {
      icon: <FiShoppingCart />,
      title: 'E-Commerce',
      description: 'Complete e-commerce solutions with secure payment processing and inventory management.'
    },
    {
      icon: <FiSearch />,
      title: 'SEO Optimization',
      description: 'Improve your online visibility with comprehensive SEO strategies and implementation.'
    },
    {
      icon: <FiLayers />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user engagement and conversion rates.'
    },
    {
      icon: <FiSettings />,
      title: 'Maintenance',
      description: 'Ongoing support and maintenance to keep your digital assets running smoothly.'
    }
  ];

  return (
    <section id="services" className="section" style={{ background: 'var(--light-gray)' }}>
      <Container>
        <Row>
          <Col>
            <h2 className="section-title text-center mb-5">Our Services</h2>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <div className="card-custom text-center">
                <div className="service-icon mb-3" style={{ fontSize: '2rem', color: 'var(white)' }}>
                  {service.icon}
                </div>
                <h4 className="mb-3">{service.title}</h4>
                <p className="text-muted">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
