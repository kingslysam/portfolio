import {Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import html from '../assets/HTMLandCSS.jpg';
import java from '../assets/Java.jpg';
import js from '../assets/JavaScript.jpg';
import php from '../assets/PHP.jpg';
import mysql from '../assets/MySql.jpg';
import rct from '../assets/React.jpg';
import python from '../assets/Python.jpg';
import postgres from '../assets/PostgresSQL.jpg';
import colorSharp from '../assets/img/bg-pic1.jpg';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
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
                            <p>Skills that I'm aquient</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={java} alt="Image"/>
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="Image"/>
                                    <h5>HTML & CSS.</h5>
                                </div>
                                <div className="item">
                                    <img src={js} alt="Image"/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={rct} alt="Image"/>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={php} alt="Image"/>
                                    <h5>PHP</h5>
                                </div>
                                <div className="item">
                                    <img src={mysql} alt="Image"/>
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={postgres} alt="Image"/>
                                    <h5>Postgres SQL.</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="Image"/>
                                    <h5>Python</h5>
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