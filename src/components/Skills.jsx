import React from 'react'

/**
 * Skills Section: Data-Driven Rendering
 * -------------------------------------
 * Implementation: This component uses an array-based data structure to store 
 * skills. This follows the "Don't Repeat Yourself" (DRY) principle by mapping 
 * the data to JSX, making it trivial to add or remove skills in the future.
 */
const Skills = () => {
    const skillsData = [
        { category: 'Languages', skills: ['Java', 'C++', 'Python', 'C#', 'JavaScript', 'SQL'] },
        { category: 'Backend', skills: ['Spring Boot', '.NET Web API', 'RESTful APIs', 'NodeJS', 'Multithreading'] },
        { category: 'Frontend/Design', skills: ['ReactJS', 'HTML5', 'CSS3', 'WordPress'] },
        { category: 'Hardware/IoT', skills: ['IoT', 'Embedded Systems', 'ESP32', 'Arduino IDE'] },
        { category: 'Core Skills', skills: ['Data Structures', 'Git/GitHub', 'AWS Cloud (Basic)', 'Problem Solving', 'Communication'] }
    ]

    return (
        <section id="skills" className="container">
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', textAlign: 'center' }}>My Expertise</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                {skillsData.map((item, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '2rem' }}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>{item.category}</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {item.skills.map(skill => (
                                <span key={skill} style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    border: '1px solid var(--glass-border)'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
