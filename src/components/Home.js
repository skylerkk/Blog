import React from 'react'
import HomePage from '../data/HomePage.json'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPost: -1
        }
    }

    setPost(newBlogPost) {
        this.setState({ currentPost: newBlogPost })
    }

    blogList() {
        return (
            <div className="row py-2">
                <img alt='computer' src='./img/Skylers-Blog-Header-V2.png' style={{ width: '100%' }}></img>
                <h1 className='col-12 mx-auto text-center py-3'> Blog Posts</h1>
                <hr />
                {HomePage[0].listings.map((item, index) => {
                    return (
                        <div className='card col-12' key={index}>
                            <div className='card-body'>
                                <h5 className='card-title text-center'>{item.title}</h5>
                                <p className='card-text text-center'>{item.info}</p>
                                <a onClick={() => { this.setPost(index) }} className="btn btn-primary btn-block">Go to</a>
                            </div>
                        </div>
                    )
                })}
                <hr />
            </div>
        )
    }

    blogPost(post) {
        return (
            <div className='row'>
                <button className = 'btn btn-primary' onClick={() => this.setState({currentPost: -1})}>Back</button>
                <h2 className='col-12 mx-auto text-center py-3'>{HomePage[0].blogPost[post].title}</h2>
                <h3 className='col-12 mx-auto text-center pt-1 pb-5'>{HomePage[0].blogPost[post].secondaryTitle}</h3>
                <p className='col-12 mx-auto text-center px-5 py-3'>{HomePage[0].blogPost[post].page}</p>
            </div>
        )
    }

    render() {
        return (
            <div className='container'>
                {
                    (this.state.currentPost > -1) ? this.blogPost(this.state.currentPost) : this.blogList()
                }
            </div>
        )
    }
}

export default Home;