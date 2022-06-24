import React from 'react'
import './portfolio.css'
import Booki from '../../assets/booki.webp'
import Ohmyfood from '../../assets/ohmyfood.jpg'
import Lapanthere from '../../assets/lapanthere.jpg'
import Kanap from '../../assets/kanap.webp'
import Piiquante from '../../assets/piiquante.jpg'
import Groupomania from '../../assets/groupomania.webp'

const data = [
  {
    id: 1, 
    image: Booki,
    title: 'Booki, projet de réservation hôtelier',
    github: 'https://github.com/AurelienAllenic/Booki',
    demo: 'https://aurelienallenic.github.io/Booki/'
  },
  {
    id: 2, 
    image: Ohmyfood,
    title: 'Ohmyfood, projet de commande de restaurants gastronomiques',
    github: 'https://github.com/AurelienAllenic/AurelienAllenic.github.io',
    demo: 'https://aurelienallenic.github.io/'
  },
  {
    id: 3, 
    image: Lapanthere,
    title: 'Lapanthere, site de web design basée à Lyon',
    github: 'https://github.com/AurelienAllenic/lapanthere.github.io',
    demo: 'https://aurelienallenic.github.io/lapanthere.github.io/'
  },
  {
    id: 4, 
    image: Kanap,
    title: 'Kanap, site e-commerce en javaScript',
    github: 'https://github.com/AurelienAllenic/kanap-p5-openclassrooms',
    demo: 'https://aurelienallenic.github.io/kanap-p5-openclassrooms/'
  },
  {
    id: 5, 
    image: Piiquante,
    title: 'Piiquante, api de site gastronomique',
    github: 'https://github.com/AurelienAllenic/kanap-p5-openclassrooms',
    demo: 'https://aurelienallenic.github.io/kanap-p5-openclassrooms/'
  },
  {
    id: 6, 
    image: Groupomania,
    title: 'Groupomania, réseau social à destination des entreprises',
    github: 'https://github.com/AurelienAllenic/kanap-p5-openclassrooms',
    demo: 'https://aurelienallenic.github.io/kanap-p5-openclassrooms/'},

]


function Portfolio() {
  return (
   <section id="portfolio">
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) =>{
          return(
          <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} className="sepia"/>
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn-white'target='_blank'>Github</a>
            <a href={demo} className='btn-white' target='_blank'>Live Demo</a>
       </div> 
       </article>
       )
        })
      }
      </div>
      
    
   </section>
  )
}

export default Portfolio