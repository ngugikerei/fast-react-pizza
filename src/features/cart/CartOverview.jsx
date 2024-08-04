import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTotalCartPrice, getTotalCartQuanity } from './cartSlice'

function CartOverview() {
    //calculate number of pizzas
    const totalCartQuantity = useSelector(getTotalCartQuanity)
    const totalCartPrice = useSelector(getTotalCartPrice)

    if (!totalCartQuantity) return null

    return (
        <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
            <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
                <span>{totalCartQuantity} pizzas</span>
                <span>${totalCartPrice}</span>
            </p>

            <Link to="/cart">Open Cart</Link>
        </div>
    )
}

export default CartOverview
