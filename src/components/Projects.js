import React from 'react'
import ProjectPage from '../data/ProjectPage.json'

function Project(props) {

    return (
        <div className='container'>
            <h1 className='mx-auto text-center py-3'>{ProjectPage[0].title}</h1>
            <div className='row'>
                {ProjectPage[0].cards.map((item, index) => {
                    return (
                        <div className='card col-12 align-items-stretch text-center' key = {index}>
                            <div className='card-body'>
                                <h5 className='card-title'>{item.cardTitle}</h5>
                                <p className='card-text'>{item.cardContent}</p>
                                <a className='btn btn-primary mt-auto btn-block' href={item.url}>Go To</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Project;