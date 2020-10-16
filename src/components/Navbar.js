import React from 'react';

function Navbar(props) {

    return (
        <div className='container-fluid bg-dark p-0'>
            <nav className='navbar navbar-expand-lg navbar-dark'>
                <a className="navbar-brand text-light">Skyler's Website</a>
                <ul className='navbar-nav ml-auto'>
                    {
                        props.pages.map((item, index) => {
                            return (
                                <li className="nav-item" key={index}>
                                    <a
                                        // href={item.url}
                                        onClick={() => props.setPage(index)}
                                        className={'nav-link text-light' + (props.currentPage === index ? 'active': '')}
                                    >
                                        {item.readableName}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;