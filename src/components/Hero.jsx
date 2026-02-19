import profileImg from '../assets/3profile image.png'

/**
 * Hero Section: The Entry Point
 * ----------------------------
 * Layout: Uses Flexbox with `min-height: 100vh` to ensure the intro 
 * takes up the full screen, creating a focused landing experience.
 * Animations: Employs custom CSS animations (`fade-in`) with staggered 
 * `animation-delay` to create a smooth, high-end loading sequence.
 */
const Hero = () => {
    return (
        <section id="hero" className="container" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <div className="fade-in profile-img-container" style={{ animationDelay: '0s' }}>
                <div className="profile-img-glow"></div>
                <img src={profileImg} alt="Dilip Nalage" className="profile-img" />
            </div>
            <div className="fade-in" style={{
                background: 'rgba(0, 242, 255, 0.1)',
                padding: '0.5rem 1.5rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                color: 'var(--accent-primary)',
                border: '1px solid var(--accent-primary)',
                marginBottom: '1.5rem',
                animationDelay: '0.2s'
            }}>
                Proud CDACian • Post Graduate Diploma in Advanced Computing
            </div>
            <h1 className="fade-in" style={{ fontSize: '4rem', marginBottom: '0.5rem', animationDelay: '0.3s' }}>
                Hi, I'm <span className="gradient-text">Dilip Nalage</span>
            </h1>
            <p className="fade-in" style={{
                fontSize: '1.5rem',
                color: 'var(--text-secondary)',
                maxWidth: '700px',
                marginBottom: '2rem',
                animationDelay: '0.5s'
            }}>
                PG-DAC graduate specializing in <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>Java Backend and Full-Stack Development</span> bridging the gap between Electronics Engineering and Advanced Computing.
            </p>
            <div className="fade-in" style={{ display: 'flex', gap: '1.5rem', animationDelay: '0.7s' }}>
                <a href="#projects" className="primary-btn" style={{ padding: '0.75rem 2rem', borderRadius: '50px' }}>View My Work</a>
                <a href="#contact" style={{
                    padding: '0.75rem 2rem',
                    borderRadius: '50px',
                    border: '1px solid var(--accent-primary)',
                    color: 'var(--accent-primary)'
                }}>Let's Connect</a>
            </div>
        </section>
    )
}

export default Hero
