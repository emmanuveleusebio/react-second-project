import React from 'react'
import HeaderCss from './Header.module.css';

const Header = () => {
    return(
        <div className={HeaderCss.title}>
            <h1>MY BLOG</h1>
            <p>Welcome to the blog of <span>Eusebio</span></p>
        </div>
    )
}

export default Header;