import React from 'react';
; // Import the CSS file

const HomePage = () => {
    return (
        <div className="home-container">
            <header className="head">
                <nav className="navbar">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </nav>
            </header>
            <section className="hero" id="home">
                <h1>Welcome to Our Homepage!</h1>
                <p>Your gateway to exceptional services and content.</p>
                <button className="cta-button">Get Started</button>
            </section>
            <section className="about" id="about">
                <h2>About Us</h2>
                <p>We are dedicated to providing top-notch solutions and experiences. Our team is skilled in various domains, and we aim to exceed your expectations.</p>
            </section>
            <section className="services" id="services">
                <h2>Our Services</h2>
                <div className="service-item">
                    <h3>Consulting</h3>
                    <p>Expert advice and strategies to help your business grow.</p>
                </div>
                <div className="service-item">
                    <h3>Design</h3>
                    <p>Innovative and creative designs that make a lasting impression.</p>
                </div>
                <div className="service-item">
                    <h3>Development</h3>
                    <p>Custom software solutions tailored to your needs.</p>
                </div>
            </section>
            <section className="portfolio" id="portfolio">
                <h2>Our Portfolio</h2>
                <div className="portfolio-gallery">
                    <div className="portfolio-item">
                        <img src="	https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg" alt="Project 1" />
                        <h3>Project 1</h3>
                        <p>Brief description of Project 1.</p>
                    </div>
                    <div className="portfolio-item">
                        <img src="https://corporate-assets.lucid.co/chart/09255df0-f147-42b4-805e-163ad3001feb.png?v=1707845547429" alt="Project 2" />
                        <h3>Project 2</h3>
                        <p>Brief description of Project 2.</p>
                    </div>
                    <div className="portfolio-item">
                        <img src="https://as1.ftcdn.net/v2/jpg/01/03/13/68/1000_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg" alt="Project 3" />
                        <h3>Project 3</h3>
                        <p>Brief description of Project 3.</p>
                    </div>
                </div>
            </section>
            <section className="blog" id="blog">
                <h2>Latest Blog Posts</h2>
                <div className="blog-post">
                    <h3>Blog Post Title 1</h3>
                    <p>Snippet of the blog post content to grab attention and encourage readers to read more.</p>
                    <a href="#readmore" className="read-more">Read More</a>
                </div>
                <div className="blog-post">
                    <h3>Blog Post Title 2</h3>
                    <p>Snippet of the blog post content to grab attention and encourage readers to read more.</p>
                    <a href="#readmore" className="read-more">Read More</a>
                </div>
            </section>
            <footer className="footer" id="contact">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;

