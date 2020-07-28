import React from 'react'

export default function Nav() {
    return (
        <>
            <nav>
                <div className="logo">
                    <a href="/"><h4>Foodblog</h4></a>
                </div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <div className="burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>
            
        </>
    )
}
