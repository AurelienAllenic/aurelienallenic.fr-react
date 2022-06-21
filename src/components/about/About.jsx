import React from 'react'
import './about.css'
import Me from '../../assets/autre-photo.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h2>A propos</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About image" />
            </div>
            </div>
            <div className="about__content">
            <div className="about__cards">
              
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <p>Etna : piscine et suivi de la formation de septembre à fevrier 2021/2022  Openclassrooms : formation developpeur web démarrée le 22 feverier 2022</p>
              </article>
             
              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Sites hors projets personnels</h5>
                <p>aurelienallenic.fr : site réalisé en react, paro75xx.com : site réalisé avec un template envato, claquettes-swing.fr : participation à la création et au déploiement</p>
              </article>
             
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projets</h5>
                <p>Projets JavaScript bac à sable, projets de développement web d'openclassrooms: HTML, CSS, JavaScript, SEO, NodeJs, MongoDb, VueJS</p>
              </article>
</div>
            <p>
              Suite à l'obtention d'une licence à la Sorbonne-nouvelle et à ma reconversion dans le monde du développement, j'ai commencé par apprendre à travailler à l'ETNA où j'ai pu suivre une piscine avant de m'autonomiser en choisissant de mener à bien une formation de développeur web chez openclassrooms.
              Je souhaite mener ma prochaine formation portant sur React en alternance et dans le futur, devenir FullStack, alliant React et nodeJs.
            </p>
            <a href="#contact" className='btn btn-primary'>Entrer en contact</a>
          </div>
        <div className="about__content"></div>
   </div>
    </section>
  )
}

export default About