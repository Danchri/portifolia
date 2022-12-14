import React, {useRef, useEffect} from "react";
import "./hero.css";
import { Container, Row, Col } from "reactstrap";
import heroImage from '../../assets/heroku.png'
import "bootstrap/dist/css/bootstrap.min.css";
import { init } from 'ityped'

const Hero = () => {

    const textRef = useRef()
useEffect(()=>{
    init(textRef.current,{
        backDelay:1500,
        showCursor:true,
        strings:['Daniel Mburu',
        'A Web developer',
        'Mobile App Dev',
        'Hardware and Software technician'
    ]
    })
}, [])    
  return (
    <section className="first-top ">
      <Container>
        <Row>
          <Col lg="6" md="7">
            <div className="h-content">
              <p className="mb-3">Welcome to my World !</p>
              
              <h2 className="hero-tttle mb-4">
                I'm <span ref={textRef}></span>
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
                quisquam esse delectus dolore incidunt quasi possimus. Cumque
                fugit hic praesentium?
              </p>
              <div className="hero-buttons mt-5 d-flex align-items-center gap-4">
                <button className="btn"><a href="/">Contact me</a></button>
                <button className="btn">Hire ame</button>
               
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero-img">
                <img src={heroImage} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
