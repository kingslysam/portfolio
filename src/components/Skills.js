import {Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import html from '../assets/HTMLandCSS.jpg';
import java from '../assets/Java.jpg';
import js from '../assets/JavaScript.jpg';
import php from '../assets/PHP.jpg';
import mysql from '../assets/MySql.png';
import rct from '../assets/React.jpg';
import python from '../assets/Python.jpg';
import postgres from '../assets/PostgreSQL.png';
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>NATEST TU<br></br> TENAAAAA</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={java} alt="Image"/>
                                    <h5>Java Development.</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="Image"/>
                                    <h5>HTML & CSS.</h5>
                                </div>
                                <div className="item">
                                    <img src={js} alt="Image"/>
                                    <h5>JavaScript Development.</h5>
                                </div>
                                <div className="item">
                                    <img src={rct} alt="Image"/>
                                    <h5>Front-end Development with React library.</h5>
                                </div>
                                <div className="item">
                                    <img src={php} alt="Image"/>
                                    <h5>Back-end development with PHP.</h5>
                                </div>
                                <div className="item">
                                    <img src={mysql} alt="Image"/>
                                    <h5>Database Managment with MySQL.</h5>
                                </div>
                                <div className="item">
                                    <img src={postgres} alt="Image"/>
                                    <h5>Database Management with Postgres SQL.</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="Image"/>
                                    <h5>Python development.</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}