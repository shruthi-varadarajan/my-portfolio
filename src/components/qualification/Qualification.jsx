import React from 'react';
import { useState } from 'react';
import './qualification.css';
import {FaGraduationCap } from 'react-icons/fa';
import {BsShieldCheck} from'react-icons/bs';
import {SlCalender} from 'react-icons/sl'

const Qualification=()=> {
  const[toggleState, setToggleState]=useState(1);
  const toggleTab = (index)=>{
    setToggleState(index);
  };
  return (
    <>
      <section id='qualification'>
      <h5 className="section__subtitle">My Personal Journey</h5>
      <h2 className="section__title">Qualification</h2>

      <div className="qualification__container container">
        <div className="qualification__tabs">
           <div className={toggleState === 1? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
           onClick={()=> toggleTab(1)}
           >
            <FaGraduationCap className='qualification__icon' />Education
           </div>

           <div className={toggleState === 2? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
           onClick={()=> toggleTab(2)}
           >
            <BsShieldCheck className='qualification__icon'/>Certifications
           </div>
        </div>

        <div className="qualification__sections" >
          <div className={toggleState === 1? "qualification__content qualification__content-active":"qualification__content"}>

            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">Bachelors of Engineering</h3>
                <span className='qualification__subtitle'>Computer Science</span>
                <div className='qualification__calender'>
                  <SlCalender className='iicon'/>2020 - 2024
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Higher Secondary</h3>
                <span className='qualification__subtitle'> Devi Academy (CBSE)</span>
                <div className='qualification__calender'>
                  <SlCalender className='iicon'/>2019 - 2020 
                </div>
              </div>

              
            </div>

            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">Secondary</h3>
                <span className='qualification__subtitle'> Devi Academy (CBSE)</span>
                <div className='qualification__calender'>
                  <SlCalender className='iicon'/>2017 - 2018
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            

          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active":"qualification__content"}>
            
            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">RPA Developer Foundation</h3>
                <span className='qualification__subtitle'>UiPath-RPA Design and Development v4.0</span>
                <div className='qualification__calender'>
                  <SlCalender  className='iicon'/> Issued on 22nd November 2022
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Java Programming Fundamentals</h3>
                <span className='qualification__subtitle'>Infosys Springboard</span>
                <div className='qualification__calender'>
                  <SlCalender  className='iicon'/>Issued on 16th January 2022
                </div>
              </div>

              
            </div>

            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">Database Managaement System</h3>
                <span className='qualification__subtitle'>Infosys Springboard</span>
                <div className='qualification__calender'>
                  <SlCalender  className='iicon'/>Issued on 22nd June 2022
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      </section>
    </>
  )
}

export default Qualification
