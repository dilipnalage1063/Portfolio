import React from 'react'

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
            <p style={{ color: 'var(--text-secondary)' }}>
                © {new Date().getFullYear()} Dilip Dharmaraj Nalage. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
