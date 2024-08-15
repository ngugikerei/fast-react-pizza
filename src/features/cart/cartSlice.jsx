import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            //payload = new item ///  add item to cart array
            state.cart.push(action.payload)
        },

        deleteItem(state, action) {
            //filter out selected item
            state.cart = state.cart.filter(
                (item) => item.pizzaId !== action.payload
            )
        },

        increaseItemQuantity(state, action) {
            //payload == pizzaId
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            )
            item.quantity++
            item.totalPrice = item.quantity * item.unitPrice
        },
        decreaseItemQuantity(state, action) {
            //payload == pizzaId
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            )
            item.quantity--
            item.totalPrice = item.quantity * item.unitPrice
        },

        clearCart(state) {
            state.cart = []
        },
    },
})

//Redux Selector Function to get tnumber of pizzas in cart
export const getTotalCartQuanity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

//Redux Selector Function to getprice of pizzas in cart
export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)

//Redux Selector Function to get cart from store
export const getCart = (state) => state.cart.cart

//Redux Selector Funtion to check if item is in cart, takes id and state as arguements
export const getCurrentQuantityById = (id) => (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0


export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = cartSlice.actions

export default cartSlice.reducer
