import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../styles/components/common/PortifolioSection.css";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Restaurant App',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ];

  return (
    <section id="portfolio" className="section">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="section-title">Our Portfolio</h2>
          </Col>
        </Row>
        <Row>
          {portfolioItems.map((item) => (
            <Col key={item.id} lg={4} md={6} className="mb-4">
              <div className="portfolio-item">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <h4 className="text-white mb-2">{item.title}</h4>
                  <p className="text-white-50">{item.category}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioSection;
