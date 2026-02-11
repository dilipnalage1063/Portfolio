import React from 'react'

const Navbar = () => {
    return (
        <nav className="glass-card" style={{
            position: 'fixed',
            top: '0',
            left: '0',
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '1000px',
            zIndex: 1000,
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '50px'
        }}>
            <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '1px' }}>
                DILIP<span className="gradient-text">.dev</span>
            </div>
            <ul style={{ display: 'flex', gap: '2rem' }}>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
