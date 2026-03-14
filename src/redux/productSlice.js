import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products', async() =>{
    const response = await fetch('http://dummyjson.com/products');
    const jsonResp = await response.json();
    return jsonResp.products
})

const initialState = {
    items:[],
    state:undefined,
    error:null
}
const productSlice = createSlice({
      name:'productSlice',
      initialState,
      extraReducers:(builder) =>{
        builder.addCase(fetchProducts.fulfilled, (state,action) =>{
            state.status = 'succeeded',
            state.items = action.payload
        })
      }
});

export default productSlice.reducer
