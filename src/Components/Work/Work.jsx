import React, {useEffect, useState} from 'react'
import './Work.css'
// import circle from '../assets/images/circle.svg';
// import line from '../assets/images/line.svg';
import revealFunction from '../assets/RevealFunction';
import AnimatedLetters from '../AnimatedLetters'

const Work = () => {

  const [letterClass, setLetterClass] = useState('text-animate-hover')
  const workText = ['E','x','p','e','r','i','e','n','c','e'];

  useEffect(()=>{
    window.addEventListener('scroll', revealFunction)
  },[])

  return (
    <>
        <section className='work-section'>
        <div className="work-curve">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
              </svg>
            </div>
          <h3 className='reveal'>
          <AnimatedLetters
                            letterClass={letterClass}
                            strArray={workText}
                            idx={1}
                            />
          </h3>
            <article className='exp-tree'>
              <div className='year-00'>
                <div className='div0 reveal'></div>
                <div className='div1 flip'>
                  {/* <img className="circle-svg reveal" src={circle}/>
                  <img className="line-svg reveal" src={line}/> */}
                </div>
                <div className='div2 reveal'>
                  <h4>2019 October to Present - <a target="_blank" href='https://www.amdon.com/'>The Amdon Consulting</a></h4>
                  Build and maintain several web applications for online e-learning and STEM education using Angular and Angularjs.
                </div>
              </div>
              <div className='year-01'>
                <div className='div0 reveal'>
                <h4>2019 May to August - <a target="_blank" href='https://www.diracetechnology.com/'>Dir Ace Technology</a> Internship</h4>
                Developed an exam result checker web application using Spring boot and thymeleaf. Wrote mockup web templates for local stock market system.
                </div>
                <div className='div1 flop'>
                  {/* <img className="circle-svg reveal" src={circle}/>
                  <img className="line-svg reveal" src={line}/> */}
                </div>
                <div className='div2 reveal'>
                </div>
              </div>
              <div className='year-02'>
                <div className='div0 reveal'></div>
                <div className='div1 flip'>
                  {/* <img className="circle-svg reveal" src={circle}/>
                  <img className="line-svg reveal" style={{visibility: 'hidden'}} src={line}/> */}
                </div>
                <div className='div2 reveal'>
                  <h4>2018 November - <a target="_blank" href='https://www.facebook.com/BaseTechnologyMyanmar/'>Base Technology</a> Field Study</h4>
                  Web Crawling local News Websites and storing them in seperate files using Python.
                </div>
              </div>
            </article>
            <h2 className='reveal'>My Responsibilities</h2>
            <article className='res-article reveal'>
              <p style={{marginBottom:"12px"}}>My main responsibilites as a front-end developer at the Amdon Consulting Group includes</p>
              <ul>
                <li>Maintaining the existing legacy web applications and fixing or upgrading whenever necessary.</li>
                <li>Functionality testing of the web applications both manually and automated.</li>
                <li>Building fully responsive web applications for new projects either with or without other colleagues.</li>
                <li>Delivering the assigned tasks under deadlines.</li>
              </ul>
            </article>
        </section>
    </>
  )
}

export default Work