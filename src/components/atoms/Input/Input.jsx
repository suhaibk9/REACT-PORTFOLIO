import { forwardRef } from 'react'
import styles from './Input.module.css'

const Input = forwardRef(({
    label,
    type = 'text',
    error,
    className = '',
    ...props
}, ref) => {
    const isTextarea = type === 'textarea'
    const Component = isTextarea ? 'textarea' : 'input'

    return (
        <div className={`${styles.formGroup} ${className}`}>
            {label && <label className={styles.label}>{label}</label>}
            <Component
                ref={ref}
                type={isTextarea ? undefined : type}
                className={`${styles.input} ${isTextarea ? styles.textarea : ''} ${error ? styles.error : ''}`}
                {...props}
            />
            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    )
})

Input.displayName = 'Input'

export default Input
