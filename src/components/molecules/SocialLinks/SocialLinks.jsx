import Icon from '../../atoms/Icon'
import styles from './SocialLinks.module.css'

const socialLinks = [
    {
        name: 'linkedin',
        url: 'https://linkedin.com/in/suhaibk9',
        label: 'LinkedIn'
    },
    {
        name: 'github',
        url: 'https://github.com/suhaibk9',
        label: 'GitHub'
    }
]

const SocialLinks = ({
    links = socialLinks,
    variant = 'default',
    size = 20,
    className = '',
    ...props
}) => {
    return (
        <div className={`${styles.socialLinks} ${styles[variant]} ${className}`} {...props}>
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    title={link.label}
                >
                    <Icon name={link.name} size={size} />
                </a>
            ))}
        </div>
    )
}

export default SocialLinks
