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
            platform: 'Java Spring Boot, React.js, MySQL, Twilio API, Resend API',
            description: 'Built full-stack system managing 10+ students with centralized grade tracking. Integrated SMS & Email APIs; reduced bulk notification time by 40% (from ~10s to ~6s). Improved response efficiency and achieved < 2s load time.',
            repo: 'https://github.com/dilipnalage1063/Student-Assessment-And-Performance-Tracker',
            live: 'https://student-assessment-and-performance.vercel.app/'
        },
        {
            title: 'AI SkillBridge',
            platform: 'HTML, CSS, JavaScript, Spring Boot, MySQL, Gemini AI, Apache Tika, Docker, Railway',
            description: 'Developed platform with 15+ REST APIs for skill analysis and study planning. Implemented PDF resume parsing using AI; improved availability by 30% via fallback logic. Tested with 10+ users, increasing engagement by 25%.',
            repo: 'https://github.com/dilipnalage1063/AI-SkillBridge',
            live: 'https://ai-skill-bridge-production.up.railway.app/'
        },
        {
            title: 'MicroStore Generator',
            platform: 'React.js, Tailwind CSS, Firebase (Serverless), Firestore, Vite, Vercel',
            description: 'Enabled live store creation in <60 seconds with dynamic checkout links. Optimized queries to achieve 1.2s response time; launched 5+ stores.',
            repo: 'https://github.com/dilipnalage1063/MicroStore-Generator',
            live: 'https://micro-store-generator.vercel.app/'
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
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                            {proj.live && (
                                <a href={proj.live} target="_blank" rel="noopener noreferrer" style={{
                                    color: 'var(--accent-primary)',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    Live Demo 🚀
                                </a>
                            )}
                            <a href={proj.repo} target="_blank" rel="noopener noreferrer" style={{
                                color: 'var(--text-secondary)',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                Repo Code 🔗
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
