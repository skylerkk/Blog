# Blog Pseudocode

## Home Page

### Header Class
    `import React from 'react'

     function Header(props){
         return (
             <div className={'container-fluid'}>
                <nav className={'navbar navbar-expand-lg navbar-dark'}> 
                <a className={'navbar-brand'}> Skyler's Site </a>
                <button className = {'navbar-toggler'} type = {'button'} onClick={this.menuToggle}>
                    <span className = {'navbar-toggler-icon'}></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarToggler'>
                <ul className = {'navbar-nav ml-auto'}>
                    
                </ul>
                </nav>
             </div>
         )
     }