import React from 'react';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="header">
            <h1>galleria.</h1>
            <Link to="/"><p>START SLIDESHOW</p></Link>
        </div>
    )
}

export default Header
