import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductStateType } from 'types'

const initialState: ProductStateType = {
    isProductShow: false,
    product: {
        id: null,
        image: null,
        name: null,
        ingredients: null,
        packSizes: null
    }
}

export const productSlice = createSlice({
    name: 'product',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setProduct: (state, action: PayloadAction<ProductStateType>) => {
            state.product.id = action.payload.product.id
            state.product.image = action.payload.product.image
            state.product.name = action.payload.product.name
            state.product.ingredients = action.payload.product.ingredients
            state.product.packSizes = action.payload.product.packSizes
            state.isProductShow = action.payload.isProductShow
        },
    },
})

export const { setProduct } = productSlice.actions
export default productSlice.reducer