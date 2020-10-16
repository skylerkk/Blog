import React from 'react'
import AboutPage from '../data/AboutPage.json'


function About(props) {

    return (
        <div className='container' style={{padding: "3% 10% 3% 10%"}}>
            <div className='row'>
                <img alt='me, my daugther and my girlfriend.'src="./img/AboutPhoto.jpg" className='mx-auto' style={{width:"50%"}}></img>
                <h1 className='col-12 mx-auto text-center py-3'>{AboutPage[0].title}</h1>
                <p className='text-center py-1 px-5'>{AboutPage[0].page}</p>
                <h4 className='mx-auto text-center py-3'>{AboutPage[0].secondTitle}</h4>
            </div>
        </div>
    )
}

export default About;