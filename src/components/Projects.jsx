import React from 'react'

/**
 * Projects Section: Interactive Portfolio
 * --------------------------------------
 * Implementation: Uses an array of objects to manage project metadata.
 * Layout: Employs CSS Grid with a `column` flex direction on the glass-cards 
 * to ensure that the "View Repository" button always stays at the bottom, 
 * regardless of the description length.
 */
const Projects = () => {
    const projects = [
        {
            title: 'Student Assessment and Performance Tracker',
            platform: 'Java Spring Boot, .NET Web API, ReactJS',
            description: 'A comprehensive web application for managing student assessments, grade calculations, and automated notifications.',
            repo: 'https://github.com/dilipnalage1063/Student-Assessment-And-Performance-Tracker'
        },
        {
            title: 'Secure Image Encryption and Transmission',
            platform: 'IoT, ESP32-CAM, C++, ReactJS',
            description: 'An IoT-based surveillance system with AES-128 encryption for end-to-end secure image transmission.',
            repo: 'https://github.com/dilipnalage1063/SITE-Project'
        },
        {
            title: 'Fire Fighting Robot Using ESP32',
            platform: 'IoT, ESP32, C++, IR Sensors',
            description: 'Designed and implemented a fire-fighting robot with efficient fire detection and extinguishing capabilities using a remote-control system.',
            repo: '#'
        },
        {
            title: 'Internship Portfolio',
            platform: 'Web Technologies',
            description: 'Built during internship at Oasis Infobyte, featuring landing pages and a temperature converter.',
            repo: '#'
        }
    ]

    return (
        <section id="projects" className="container">
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', textAlign: 'center' }}>Featured Work</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                {projects.map((proj, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ color: 'var(--accent-primary)' }}>{proj.title}</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>{proj.platform}</p>
                        <p style={{ color: 'var(--text-secondary)', flexGrow: 1 }}>{proj.description}</p>
                        <a href={proj.repo} target="_blank" rel="noopener noreferrer" style={{
                            marginTop: '1.5rem',
                            color: 'var(--accent-primary)',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            View Repository →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
