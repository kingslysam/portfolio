import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/maps.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const form = useRef()


    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs.sendForm(
            'service_62oy1hq','template_tsh9fyh',form.current,'IsDppwpIig55owwPc'
        )
            .then(
                ()=> {
                    alert('Message sent successfully')
                    window.location.reload(false)
                },
                ()=>{
                    alert('Failed to send, please try again')
                }
            )
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div>
                                    <h3>Samuel Yona Killagane<br/>samyona48@gmail.com <br/>Dar es Salaam, Tanzania</h3>

                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" name="firstname" placeholder="First Name" required/>
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" name="lastname" placeholder="Last Name"/>
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" name="email" placeholder="Email Address" required/>
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" name="subject" placeholder="Subject" required/>
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea rows="6" name="message" placeholder="Message" required></textarea>
                                                <button type="submit" value="SEND"><span>SEND</span></button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
