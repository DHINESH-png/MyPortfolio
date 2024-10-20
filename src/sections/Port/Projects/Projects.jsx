import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../../assets/assets/viberr.png'
import freshBurger from '../../../assets/assets/fresh-burger.png'
import hipster from '../../../assets/assets/hipsster.png'
import ProjectCard from '../../../common/ProjectCard'
import fitlift from '../../../assets/assets/fitlift.png'

function Projects() {
  return ( 
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} link='https://github.com/DHINESH-png/pottery.in'
         h3='Pottery'
         p='Advertisement Poster'/>
          <ProjectCard src={freshBurger} link='https://github.com/DHINESH-png/pottery.in'
         h3='MyCalc'
         p='Calculator'/>
          <ProjectCard src={hipster} link='https://github.com/DHINESH-png/pottery.in'
         h3='MyCurrency'
         p='Currency Converter'/>
          <ProjectCard src={fitlift} link='https://github.com/DHINESH-png/pottery.in'
         h3='Deccan Airways'
         p='Airways'/>
        </div>
    </section>
  )
}


export default Projects