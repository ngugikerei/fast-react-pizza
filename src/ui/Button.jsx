import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function Button({ children, disabled, to, type, onClick }) {
    const base =
        'bg-yellow-400 text-sm uppercase  text-stone-800 font-semibold inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-600   focus:outline-none   focus:ring focus:ring-yellow-300 focus:ring-offset-2   disabled:cursor-not-allowed'

    const styles = {
        primary: base + ' py-3 px-4 my-4 md:px-6 md:py-4',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
        secondary:
            'bg-transparent border-2 text-sm border-stone-300 uppercase py-2.5 px-4 my-4 md:px-6 md:py-3.5 text-stone-400 font-semibold inline-block tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-600   focus:outline-none   focus:ring focus:ring-yellow-300 focus:ring-offset-2   disabled:cursor-not-allowed',
    }

    if (to)
        return (
            <Link className={styles[type]} to={to}>
                {children}
            </Link>
        )

    if (onClick)
        return (
            <button
                disabled={disabled}
                onClick={onClick}
                className={styles[type]}
            >
                {children}
            </button>
        )

    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )
}
