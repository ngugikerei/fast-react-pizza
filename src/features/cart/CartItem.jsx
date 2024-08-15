/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'

import { formatCurrency } from '../../utils/helpers'

import DeleteItem from './DeleteItem'

function CartItem({ item }) {
    // eslint-disable-next-line no-unused-vars
    const { pizzaId, pizzaName, quantity, totalPrice } = item

    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch()

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {pizzaName}
            </p>

            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">
                    {formatCurrency(totalPrice)}
                </p>
                {/* <Button
                    type="small"
                    onClick={() => dispatch(deleteItem(pizzaId))}
                >
                    Delete
                </Button> */}

                <DeleteItem pizzaId={pizzaId}></DeleteItem>
            </div>
        </li>
    )
}

export default CartItem;
