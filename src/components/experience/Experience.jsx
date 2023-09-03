import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        {/* frontend */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            {/* <article className='experience__details'>
              <BsPatchCheckFill className='icon'/> 
              <div>
              <h4>HTML</h4>
              <small>Experienced</small>
              </div>
            </article> */}

            <article className='experience__details'>
              <BsPatchCheckFill className='icon'/> 
              <div>
              <h4>HTML</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='icon'/> 
              <div>
              <h4>CSS</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='icon'/> 
              <div>
              <h4>JavaScript</h4>
              <small>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='icon'/> 
              <div>
              <h4>Bootstrap</h4>
              <small>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>JQuery</h4>
                <small>Intermediate</small>
              </div> 
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='icon'/> 
              <div>
              <h4>React</h4>
              <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of frontend */}
        <div className="experience__backend">

        <h3>Backend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>NodeJs</h4>
                <small>Beginner</small>
              </div> 
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='icon'/> 
              <div>
              <h4>MongoDB</h4>
              <small>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='icon'/>
              <div>
              <h4>PHP</h4>
              <small>Intermediate</small>
              </div> 
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='icon'/> 
              <div>
              <h4>MySQL</h4>
              <small>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='icon'/> 
              <div>
              <h4>Java</h4>
              <small>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='icon'/> 
              <div>
              <h4>C</h4>
              <small>Intermediate</small> 
              </div>
            </article>
            </div>
          
        </div>
      </div>
    </section>
  )
}

export default Experience
