import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const STATUSES = Object.freeze({
    IDLE : "idle",
    LOADING : "loading",
    ERROR : "error"
})


export const getProducts = createAsyncThunk('products/fetch', async()=>{
    const res = await fetch('http://localhost:3001/fooditems')
    const data = await res.json()
    return data
})

const productSlice = createSlice({
    name : 'products',
    initialState: {
        data :[],
        category: [],
        status : STATUSES.IDLE
    },
        
    reducers : {
        showAll(state){
            return { ...state, category: state.data };
        },
        Pizza(state, action){
            return { ...state, category: state.data.filter(items => items.CategoryName === "Pizza") };  
        },
        Starter(state){
            return { ...state, category: state.data.filter(items => items.CategoryName === "Starter") };
        },
        Rice(state){
            return { ...state, category: state.data.filter(items => items.CategoryName === "Biryani/Rice") };
        },
        Burger(state){
            return { ...state, category: state.data.filter(items => items.CategoryName === "Burger") };
        },
    
    },
    extraReducers: {
        [getProducts.pending]: (state)=>{
            state.status = STATUSES.LOADING
        },
        [getProducts.fulfilled]: (state, action)=>{
            state.data = action.payload
            state.category = action.payload
            state.status = STATUSES.IDLE
        },
        [getProducts.rejected]: (state)=>{
            state.status = STATUSES.ERROR
        }
    }
})

export const{showAll, Pizza, Starter, Rice, Burger} = productSlice.actions

export default productSlice.reducer


