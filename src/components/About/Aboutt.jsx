import React, {useState} from 'react'
import './about.css'
import { Container, Row, Col } from "reactstrap";
import abtimg from '../../assets/pic-3.png'
import Education from './Education';





const About = () => {

  const [aboutFilter, setaAboutFilter] = useState('ABOUT')
  return (
   <section className='abt-section'>
    <Container>
      <Row>
        <Col lg='12' className='mb-5 tittle'><h2>About| ME</h2> </Col>
        <Col lg='4' md='3'>
          <div className="about-btns d-flex flex-column align-items-center">
            <button className='abt-btn abt-btn-active' onClick={()=>setaAboutFilter
            ('ABOUT')}>About Me</button>
            <button className='abt-btn' onClick={()=>setaAboutFilter
            ('EDUCATION')}>Education</button>
            <button className='abt-btn'>Skills</button>
            <button className='abt-btn'>Projects</button>
          </div>
        </Col>

        <Col lg='8' md='9'>


          {
            aboutFilter === 'ABOUT' && <div className="abt-content-wrapper d-flex gap-5">
            <div className="abt-img w-25">
              <img src={abtimg }alt="" className='w-100' />
            </div>
            <div className="abt-content w-75">
              <h2>Im Daniel Mondo Mburu</h2>
              <p>Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. A, ratione
              consectetur adipisicing elit. A, ratione
              consectetur adipisicing elit. A, ratione?
              
              
              </p>
              <div className="social-links">
                <h6 className='mb-3'>Connect with Me</h6>
                <span><a href="https://remixicon.com/"><i className="ri-github-fill"></i></a></span>
                <span><a href="https://remixicon.com/"><i className="ri-linkedin-fill"></i></a></span>
                <span><a href="https://remixicon.com/"><i className="ri-telegram-fill"></i></a></span>
                <span><a href="https://remixicon.com/"><i className="ri-facebook-box-fill"></i></a></span>
                <span><a href="https://remixicon.com/"><i className="ri-youtube-fill"></i></a></span>

              


              </div>
            </div>
          </div>
          }
          {
             aboutFilter === 'EDUCATION' && <Education/>

          }
          


        </Col>

       
      </Row>
    </Container>

   </section>
  )
}

export default About