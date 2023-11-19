import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
    return (
        <nav>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
            </div>
        </nav>
    )
}