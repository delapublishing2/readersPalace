import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ background: 'var(--deep-blue)', color: 'var(--ivory)' }}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/book-clubs">Book Clubs</Link></li>
                <li><Link to="/contests">Contests</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/authors-spotlight">Author's Spotlight</Link></li>
                <li><Link to="/forums">Forums</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;