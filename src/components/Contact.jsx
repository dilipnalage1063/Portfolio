import React from 'react'

/**
 * Contact Section: Backend-less Form Integration
 * ----------------------------------------------
 * Implementation: This form leverages FormSubmit.co for email handling.
 * Logic: By setting the `action` to a specific endpoint, the form data 
 * is captured and emailed to the user without needing a custom Node.js 
 * or PHP backend. This makes it a perfect choice for static hosting.
 */
const Contact = () => {
    return (
        <section id="contact" className="container">
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', textAlign: 'center' }}>Get In Touch</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
                <div className="glass-card" style={{ padding: '2rem' }}>
                    <h3 style={{ color: 'var(--accent-primary)' }}>Contact Info</h3>
                    <p style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span>📧</span> dilipnalage106@gmail.com
                    </p>
                    <p style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span>📞</span> +91-7038610295
                    </p>
                    <p style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span>📍</span> Pune, Maharashtra
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                        <a href="https://www.linkedin.com/in/dilip-nalage-73889828a" target="_blank" className="gradient-text" style={{ fontWeight: 'bold' }}>LinkedIn</a>
                        <a href="https://github.com/dilipnalage1063" target="_blank" className="gradient-text" style={{ fontWeight: 'bold' }}>GitHub</a>
                        <a href="https://leetcode.com/u/dilip_nalage1063/" target="_blank" className="gradient-text" style={{ fontWeight: 'bold' }}>LeetCode</a>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Certifications</h3>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                            🏆 <strong>AWS Cloud Practitioner</strong> (Oct 2025)
                        </p>
                        <p style={{ fontSize: '0.9rem' }}>
                            🏆 <strong>Generative AI by Google</strong> (Sept 2024)
                        </p>
                    </div>
                </div>
                <form
                    action="https://formsubmit.co/dilipnalage106@gmail.com"
                    method="POST"
                    className="glass-card"
                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_subject" value="New Portfolio Message!" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />

                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit" className="primary-btn">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
