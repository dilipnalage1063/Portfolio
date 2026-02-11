import React from 'react'

/**
 * About Section: Adaptive Grid Layout
 * -----------------------------------
 * Layout: Uses a responsive CSS Grid (`repeat(auto-fit, minmax(200px, 1fr))`)
 * to automatically adjust the number of columns based on screen width. 
 * This ensures the content looks intentional on both mobile and large monitors.
 */
const About = () => {
    return (
        <section id="about" className="container">
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', textAlign: 'center' }}>My Journey</h2>
            <div className="glass-card" style={{ padding: '3rem', marginTop: '2rem' }}>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    My engineering background in Electronics and Telecommunication has always driven me to understand how complex systems operate. I am now applying that analytical discipline to software engineering, specifically focusing on building high-performance backend architectures and responsive user interfaces.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                    I am currently pursuing a Post Graduate Diploma in Advanced Computing (PG-DAC, August 2025 Batch) under C-DAC Pune to bridge the gap between my technical hardware knowledge and modern software development.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                    <div>
                        <h3 style={{ color: 'var(--accent-primary)' }}>Currently Pursuing</h3>
                        <p>PG-DAC, Aug 2025 Batch</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>C-DAC</p>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--accent-primary)' }}>Background</h3>
                        <p>BE in Electronics & TC</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Modern College of Engineering, Pune</p>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--accent-primary)' }}>Location</h3>
                        <p>Pune, Maharashtra</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
