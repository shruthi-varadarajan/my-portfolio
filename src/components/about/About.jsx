import React from 'react';
import './about.css';
import ME from '../../assets/mine.jpeg'
import {FaAward} from 'react-icons/fa';
import {AiFillProject} from 'react-icons/ai'

const About = () => {
  return (
    <>
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About image" />
                    </div>
                </div>
                {/* break */}
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Certificates</h5>
                            <small>3 certificates</small>
                        </article>

                        <article className='about__card'>
                            <AiFillProject className='about__icon'/>
                            <h5>Projects Completed</h5>
                            <small>3 Projects</small>
                        </article>
                    </div>

                    <p>I am a dedicated, organized and methodical individual. I have good interpersonal skills, am an excellent team worker and am keen and very willing to learn and develop new skills. I am reliable and dependable and often seek new responsibilities within a wide range of employment areas. I have an active and dynamic approach to work and getting things done. I am determined and decisive. I identify and develop opportunities.</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default About
