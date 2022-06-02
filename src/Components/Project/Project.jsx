import React, {useEffect, useState} from 'react'
import './Project.css'
import stemstart from '../assets/images/stemwerkz_start.png'
import Card from "./Card"
import ProjApi from "./ProjectApi"
import revealFunction from '../assets/RevealFunction';
import AnimatedLetters from '../AnimatedLetters'

const Project = () => {

    const [letterClass, setLetterClass] = useState('text-animate-hover')
    const projectText = ['P','r','o','j','e', 'c', 't','s'];

    useEffect(()=>{
        window.addEventListener('scroll', revealFunction)
      },[])
    return (
        <>
         <section className='project-section reveal'>
             <h3 className='reveal'>
             <AnimatedLetters
                            letterClass={letterClass}
                            strArray={projectText}
                            idx={1}
                            />
             </h3>
             <article className='project-article'>
                 <p>Over the years, I've worked on 3 main projects, 
                    <a cl target="_blank" href='https://www.classwerkz.com/'> Classwerkz</a>, 
                    <a target="_blank" href='https://www.nodma.com/'> Nodma</a> and 
                    <a target="_blank" href='https://www.stemwerkz.org/'> Stemwerkz</a>, 
                 together with my colleagues. Each project has its own sub projects with their respective websites. Below are the ones I've mainly worked on.
                 </p>
                 <div className='proj-wrap reveal'>
                     {ProjApi.map((value, index) => {
                         return <Card key={index} img={value.image} title={value.title} body={value.body} link={value.link} id={index}/>
                     })}
                 </div>
             </article>
         </section>
        </>
    )
}

export default Project