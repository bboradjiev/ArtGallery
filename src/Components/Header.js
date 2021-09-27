import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({start, setStart}) {
   return (
    <header className="header">
      <h1>galleria.</h1>
      <p onClick={() => setStart(!start)}>
        {start ? (
          <Link to="/image/Starry Night">START SLIDESHOW</Link>
        ) : (
          <Link to="/">END SLIDESHOW</Link>
        )}
      </p>
      {/* <Link to="/" onClick={() => setStart(!start)}>
        <p>{start ? "START SLIDESHOW" : "END SLIDESHOW"}</p>
      </Link> */}
    </header>
  );
}

export default Header;
