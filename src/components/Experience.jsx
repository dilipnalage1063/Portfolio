import React from 'react'

/**
 * Experience Section: Professional History
 * ----------------------------------------
 * Implementation: Uses semantic HTML (`<ul>`, `<li>`) for better search 
 * engine optimization (SEO) and accessibility (screen readers).
 */
const Experience = () => {
    return (
        <section id="experience" className="container">
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', textAlign: 'center' }}>Professional Journey</h2>
            <div className="glass-card" style={{ padding: '2.5rem', marginTop: '3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <h3>Web Development Intern</h3>
                    <span style={{ color: 'var(--accent-primary)' }}>Oct 2025 - Nov 2025</span>
                </div>
                <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Oasis Infobyte — Pune, India</h4>
                <ul style={{ color: 'var(--text-secondary)', listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li>Developed responsive landing page using HTML, CSS, JavaScript.</li>
                    <li>Built personal portfolio website.</li>
                    <li>Created and tested temperature converter application.</li>
                </ul>
            </div>
        </section>
    )
}

export default Experience
