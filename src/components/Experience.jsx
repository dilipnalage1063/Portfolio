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
                    <h3>Internship - Full Stack Intern</h3>
                    <span style={{ color: 'var(--accent-primary)' }}>Dec 2023 - Jan 2024</span>
                </div>
                <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Oasis Infobyte Pvt Ltd</h4>
                <ul style={{ color: 'var(--text-secondary)', listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li>Created responsive landing pages and interactive portfolios.</li>
                    <li>Developed and tested a temperature converter application.</li>
                    <li>Gained hands-on experience with frontend development best practices.</li>
                </ul>
            </div>
        </section>
    )
}

export default Experience
