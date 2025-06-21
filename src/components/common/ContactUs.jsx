import { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"
import "../../styles/components/common/ContactUs.css";

export default function ContactSection(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = useCallback(e=> {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  })


  const add_message = async (name, email, subject, message)=>{
    try{
      const now = new Date();
      const formated_date = now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      })

      await addDoc(collection(db, "messages"), {
        name, email, subject, message, dateTime: formated_date
      })

      console.log("messages document added");
      alert('Thank you for your message! We\'ll get back to you soon.');
    }catch(error){
      alert("Error sending message:", error)
      console.warn("Error sending message:", error)
    }
  }

  const handleSubmit = useCallback(e=>{
    e.preventDefault();
    console.log('Form submitted: ', formData);
    const { name, email, subject, message } = formData;
    add_message(name, email, subject, message);
    setFormData({
      name: "", email: "",
      subject: "", message: ""
    })
  })

  return <Presenter formData={formData} handleSubmit={handleSubmit} handleChange={handleChange}/>
}

function Presenter({formData, handleSubmit, handleChange}){
  return(
    <section id="contacct" className="section contact-section">
      <Container>
        
        <Row>
          <Col xs={12}>
            <h1 className="section-title text-center mb-4 fs-1">Contact Us</h1>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="contact-form">
              <h3 className="mb-4">Send Us a Message</h3>

              <form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} className="form-control" required/>
                  </Col>

                  <Col md={6} className="mb-3">
                    <input type="email" name="email" className="form-control" placeholder="Your Email" value={formData.email} onChange={handleChange} required/>
                  </Col>
                </Row>

                <div className="mb-3">
                  <input type="text" name="subject" className="form-control" placeholder="Subject" value={formData.subject} onChange={handleChange} required/>
                </div>

                <div className="mb-3">
                  <textarea name="message" className="form-control" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                </div>

                <button type="submit" className="cta-button">Send Message</button>

              </form>

            </div>
          </Col>
        </Row>

      </Container>
    </section>
  )
}