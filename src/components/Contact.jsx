import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus({ submitting: true, submitted: false, error: null })

        try {
            const response = await fetch(import.meta.env.VITE_FORM_SPREE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setStatus({ submitting: false, submitted: true, error: null })
                setFormData({ name: '', email: '', message: '' })
            } else {
                const data = await response.json()
                throw new Error(data.error || 'Something went wrong')
            }
        } catch (error) {
            setStatus({ submitting: false, submitted: false, error: error.message })
        }
    }

    return (
        <section className="contact" id="contact">
            <div className="section-container">
                <div className="section-header fade-in">
                    <span className="section-badge">📬 Contact</span>
                    <h2 className="section-title">Let's Work Together</h2>
                    <p className="section-subtitle">
                        Have a project in mind or just want to chat? I'd love to hear from you!
                    </p>
                </div>

                <div className="contact-container">
                    <div className="contact-info fade-in">
                        <h3 className="contact-title">Get in Touch</h3>
                        <p className="contact-description">
                            I'm always open to discussing new opportunities, interesting projects,
                            or ways to collaborate. Whether you're looking for a frontend specialist
                            or want to build something amazing together, feel free to reach out.
                        </p>

                        <div className="contact-methods">
                            <a href="mailto:suhaib0900@gmail.com" className="contact-method">
                                <div className="method-icon">📧</div>
                                <div className="method-details">
                                    <span className="method-label">Email</span>
                                    <span className="method-value">suhaib0900@gmail.com</span>
                                </div>
                            </a>
                            <div className="contact-method">
                                <div className="method-icon">📍</div>
                                <div className="method-details">
                                    <span className="method-label">Location</span>
                                    <span className="method-value">Liverpool, United Kingdom</span>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a
                                href="https://linkedin.com/in/suhaibk9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                title="LinkedIn"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/suhaibk9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                title="GitHub"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container fade-in">
                        {status.submitted ? (
                            <div className="form-success">
                                <div className="success-icon">✅</div>
                                <h3 className="success-title">Message Sent!</h3>
                                <p className="success-message">
                                    Thanks for reaching out! I'll get back to you as soon as possible.
                                </p>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={status.submitting}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={status.submitting}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        id="message"
                                        placeholder="Tell me about your project..."
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        disabled={status.submitting}
                                    ></textarea>
                                </div>
                                {status.error && (
                                    <div className="form-error">
                                        <span>⚠️</span> {status.error}
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    className="btn btn-primary form-submit"
                                    disabled={status.submitting}
                                >
                                    {status.submitting ? (
                                        <>
                                            <span className="spinner"></span> Sending...
                                        </>
                                    ) : (
                                        <>
                                            <span>✉️</span> Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
