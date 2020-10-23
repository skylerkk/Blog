import React from 'react'
import AboutPage from '../data/AboutPage.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'



function About(props) {

    return (
        <div className='container' style={{ padding: "3% 10% 3% 10%" }}>
            <div className='row'>
                <img alt='me, my daugther and my girlfriend.' src="./img/AboutPhoto.jpg" className='mx-auto' style={{ width: "50%" }}></img>
                <h1 className='col-12 mx-auto text-center py-3'>{AboutPage[0].title}</h1>
                <p className='col-12 text-center py-1 px-5'>{AboutPage[0].page}</p>
                <h4 className='col-12 mx-auto text-center py-3'>{AboutPage[0].secondTitle}</h4>
                <div className='col-6 text-center py-3'>
                    <a href='https://github.com/skylerkk'><FontAwesomeIcon icon={faGithub} size="4x" /></a>
                </div>
                <div className='col-6 text-center py-3'>
                    <a href='https://www.linkedin.com/in/skyler-kuretza-768362156/'><FontAwesomeIcon icon={faLinkedin} size="4x" /></a>
                </div>
                <div className='col-6 text-center'>
                    <a href='https://twitter.com/SkylerKuretza'><FontAwesomeIcon icon={faTwitter}  size="4x"/></a>
                </div>
                <div className='col-6 text-center'>
                    <a href='https://www.codewars.com/users/skylerkk'><FontAwesomeIcon icon={faCode}  size="4x"/></a>
                </div>
            </div>
        </div>
    )
}

export default About;