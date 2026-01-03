import { useState } from 'react'
import { Button, Input } from '../../atoms'
import styles from './ContactForm.module.css'

const ContactForm = ({ className = '', ...props }) => {
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

    if (status.submitted) {
        return (
            <div className={`${styles.success} ${className}`} {...props}>
                <div className={styles.successIcon}>✅</div>
                <h3 className={styles.successTitle}>Message Sent!</h3>
                <p className={styles.successMessage}>
                    Thanks for reaching out! I'll get back to you as soon as possible.
                </p>
                <Button
                    variant="secondary"
                    onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                >
                    Send Another Message
                </Button>
            </div>
        )
    }

    return (
        <form className={`${styles.form} ${className}`} onSubmit={handleSubmit} {...props}>
            <Input
                id="name"
                label="Your Name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={status.submitting}
            />
            <Input
                id="email"
                type="email"
                label="Your Email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={status.submitting}
            />
            <Input
                id="message"
                type="textarea"
                label="Your Message"
                placeholder="Tell me about your project..."
                required
                value={formData.message}
                onChange={handleChange}
                disabled={status.submitting}
            />

            {status.error && (
                <div className={styles.error}>
                    <span>⚠️</span> {status.error}
                </div>
            )}

            <Button
                type="submit"
                variant="primary"
                disabled={status.submitting}
                icon={status.submitting ? null : '✉️'}
                className={styles.submit}
            >
                {status.submitting ? (
                    <>
                        <span className={styles.spinner}></span> Sending...
                    </>
                ) : (
                    'Send Message'
                )}
            </Button>
        </form>
    )
}

export default ContactForm
