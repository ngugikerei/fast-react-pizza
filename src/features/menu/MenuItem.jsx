/* eslint-disable react/prop-types */
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux'
import { addItem, getCurrentQuantityById } from '../cart/cartSlice'
import DeleteItem from '../cart/DeleteItem'
import UpdateItemQuantity from '../cart/UpdateItemQuantity'

function MenuItem({ pizza }) {
    // eslint-disable-next-line no-unused-vars
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza

    const dispatch = useDispatch()

    const currentQuantity = useSelector(getCurrentQuantityById(id))
    const isInCart = currentQuantity > 0

    function handleAddToCart() {
        const newItem = {
            pizzaId: id,
            pizzaName: name,
            quantity: 1,
            unitPrice: unitPrice,
            totalPrice: unitPrice * 1,
        }

        dispatch(addItem(newItem))
        console.log(newItem)
    }

    return (
        <li className="flex gap-4 py-2">
            <img
                src={imageUrl}
                alt={name}
                className={`h-24 ${soldOut ? 'opacity-50 grayscale' : ''}`}
            />
            <div className="flex-grow flex-col pt-0.5">
                <p className="font-medium">{name}</p>
                <p className="text-sm capitalize italic text-stone-500">
                    {ingredients.join(', ')}
                </p>

                <div className="mt-auto flex items-center justify-between text-sm">
                    {!soldOut ? (
                        <p>{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p className="text-sm font-medium uppercase text-stone-500">
                            Sold out
                        </p>
                    )}
                    {isInCart && (
                        <div className="flex items-center gap-3 sm:gap-8">
                            <UpdateItemQuantity
                                pizzaId={id}
                                currentQuantity={currentQuantity}
                            />
                            <DeleteItem pizzaId={id}></DeleteItem>
                        </div>
                    )}

                    {!soldOut && !isInCart && (
                        <Button type="small" onClick={handleAddToCart}>
                            Add to Cart
                        </Button>
                    )}
                </div>
            </div>
        </li>
    )
}

export default MenuItem;
