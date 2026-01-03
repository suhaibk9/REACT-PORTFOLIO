import icons from './icons'

const Icon = ({ name, size = 20, className = '', ...props }) => {
    const IconSvg = icons[name]

    if (!IconSvg) {
        console.warn(`Icon "${name}" not found`)
        return null
    }

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className={`icon icon-${name} ${className}`}
            {...props}
        >
            {IconSvg}
        </svg>
    )
}

export default Icon
