import React, { useState, useEffect } from 'react';
import Navbar from '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/components/Navbar.js';
import Footer from '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/components/Footer.js';

export default function Home() {
    const [isContentLoaded, setIsContentLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsContentLoaded(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <section id="welcome" className="hero-section">
                <img src="https://res.cloudinary.com/dhriwtfjq/image/upload/v1711762095/IMG_1716_zbgq3c.jpg" alt="Palace made of books" className="background-image" />
                <div className="hero-content">
                    <h1>Welcome to Reader's Palace</h1>
                    <p>Unlock the Majesty of Storytelling at Reader's Palace - A regal haven for book lovers and aspiring authors.</p>
                    <button onClick={() => window.location.href = '/signup'}>Join the Community</button>
                </div>
            </section>
            {/* Other sections */}
            {!isContentLoaded && (
                <div className="loading-container">
                    <img src="https://cdn.pixabay.com/animation/2022/07/31/05/09/05-09-47-978_512.gif" alt="Loading" />
                </div>
            )}
        </div>

    );
}