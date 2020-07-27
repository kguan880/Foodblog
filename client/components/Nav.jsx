import React from 'react'

export default function Nav() {
    return (
        <>
            <nav>
                <div className="logo">
                    <h4> The Nav</h4>
                </div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Recipes</a></li>
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
