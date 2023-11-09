import { createSlice  } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"products",
    initialState: {
        products: []
    },
    reducers: {
        addProduct: (state, action) => {
            const newProduct = {
                id: Date.now(),
                name: action.payload.name,
                price: action.payload.price
            }

            state.products.push(newProduct)
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        }
    }
})

export const {addProduct, deleteProduct} = productSlice.actions
export default productSlice.reducer