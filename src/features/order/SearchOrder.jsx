import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchOrder() {
    const [orderId, setOrderId] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        if (!orderId) return
        navigate(`/order/${orderId}`)
        setOrderId('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Search Order Number"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="rounded-full px-4 py-2
        text-sm bg-yellow-200 placeholder:text-stone-400 w-28 sm:w-64
        sm:focus:w-72 focus:outline-none focus:ring focus:ring-yellow-500 
        focus:ring-opacity-50 transition-all duration-300"
            />
        </form>
    )
}
