import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aur%C3%A9lien-allenic2000" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/AurelienAllenic?tab=repositories" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/aurelienlinconnu/" target="_blank"><FiInstagram/></a>
    </div>
  )
}

export default HeaderSocials