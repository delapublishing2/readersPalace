import React from 'react';

function Home() {
    return (
      <div className="home">
        <section className="hero-header">
          <h1>Welcome to Reader's Palace</h1>
          <p>A captivating gateway featuring highlights of upcoming events, book clubs, contests, and blogs.</p>
        </section>
        <section className="feature-section">
          <h2>Explore Our Features</h2>
          <p>Highlighting the unique value proposition of Reader's Palace, inviting visitors to explore the literary world.</p>
        </section>
        <section className="features-list">
          <h2>Key Features</h2>
          <ul>
            <li>Upcoming Events</li>
            <li>Book Clubs</li>
            <li>Contests</li>
            <li>Latest Blog Posts</li>
          </ul>
        </section>
        <section className="benefits">
          <h2>Benefits of Joining</h2>
          <p>Explaining the benefits of joining the Reader's Palace community for book lovers and aspiring authors.</p>
        </section>
        <section className="cta">
          <h2>Join Our Community</h2>
          <button>Sign Up Now</button>
        </section>
        <section className="gallery">
          <h2>Gallery</h2>
          <p>A visual display of book covers, event photos, and featured authors to engage visitors.</p>
        </section>
        <section className="faq">
          <h2>FAQ</h2>
          <p>Answering common questions about Reader's Palace services and community involvement.</p>
        </section>
        <section className="testimonials">
          <h2>Testimonials</h2>
          <p>Showcasing testimonials from members about their positive experiences with Reader's Palace.</p>
        </section>
        <section className="final-cta">
          <h2>Get Involved</h2>
          <button>Participate in Events</button>
        </section>
      </div>
    );
  }
  
  export default Home;