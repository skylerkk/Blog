import React from 'react';
import Navbar from './Navbar';
import Home from './Home'
import About from './About'
import Project from './Projects'

class App extends React.Component {

    constructor() {
        super();
        this.pages = [{readableName: 'Home', url:Home},{readableName: 'About', url: 'about'}, {readableName: 'Projects', url: 'project'}];
        this.state = {
            currentPage: 0
        }
        this.setPage = this.setPage.bind(this);
    }

    setPage(newPageNum) {
        console.log(newPageNum)
        this.setState({ currentPage: newPageNum })
    }

    componentDidMount() {

        let currentPage = window.localStorage.getItem('currentPage')

        if(currentPage){
            this.setState({currentPage: JSON.parse(currentPage)})
        }
        else{
            window.localStorage.setItem('currentPage', 0)
        }
    }

    componentDidUpdate() {
        window.localStorage.setItem('currentPage', this.state.currentPage);
    }

    render() {
        return (
            <div >
                <Navbar
                    pages={this.pages}
                    currentPage={this.state.currentPage}
                    setPage={this.setPage}
                />
                {(this.state.currentPage === 0) ? <Home/> : ''}
                {(this.state.currentPage === 1) ? <About/> : ''}
                {(this.state.currentPage === 2) ? <Project/> : ''}
            </div>
        );
    }
}

export default App;