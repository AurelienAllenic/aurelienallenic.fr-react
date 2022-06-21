import React from 'react'
import './interests.css'
import {MdOutlineComputer} from 'react-icons/md'
import {TbMusic} from 'react-icons/tb'
import {GiMagicPalm} from 'react-icons/gi'
import {GiFist} from 'react-icons/gi'
import {FaChessKnight} from 'react-icons/fa'
import {BsFlag} from 'react-icons/bs'

function Interests() {
  return (
    <section id='interests'>
        <h2>Mes centres d'intérêt</h2>
            <div className='container interests__container'>
                <div className="single__card">
                    
                    <h4>Programmation informatique</h4>
                    <small className='text-light'>Web, data, créativité</small>
                    <MdOutlineComputer className='interests__details-icon'/>
                </div>
                <div className="single__card">
                    
                    <h4>Piano</h4>
                    <small className='text-light'>classique et compositions cinématographiques</small>
                    <TbMusic className='interests__details-icon'/>
                </div>
                <div className="single__card">
                    
                    <h4>Prestidigitation</h4>
                    <small className='text-light'>Close up</small>
                    <GiMagicPalm className='interests__details-icon'/>
                </div>
                <div className="single__card">
                    
                    <h4>Arts martiaux</h4>
                    <small className='text-light'>Fut Ga Quen Sil Lum, Judo, Wing Tsun</small>
                    <GiFist className='interests__details-icon'/>
                </div>
                <div className="single__card">
                    
                    <h4>échecs</h4>
                    <small className='text-light'>pratique stratégique et intellectuelle</small>
                    <FaChessKnight className='interests__details-icon'/>
                </div>
                <div className="single__card">
                    
                    <h4>Langues</h4>
                    <small className='text-light'>
                        Anglais/Espagnol : B2
                        Japonais/Allemand: novice
                        </small>
                    <BsFlag className='interests__details-icon'/>
                </div>
            </div>
            
    </section>
)}

export default Interests