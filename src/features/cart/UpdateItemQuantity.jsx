/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux'
import Button from '../../ui/Button'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice'

// eslint-disable-next-line react/prop-types
export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
    const dispatch = useDispatch()
    return (
        <div className="flex items-center gap-1 md:gap-3">
            <Button
                type="round"
                onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
            >
                -
            </Button>

            <span className="text-sm font-medium">{currentQuantity}</span>

            <Button
                type="round"
                onClick={() => dispatch(increaseItemQuantity(pizzaId))}
            >
                +
            </Button>
        </div>
    )
}
