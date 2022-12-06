import { createSlice } from "@reduxjs/toolkit";
import items from "../Api/Items";

export const marketSlice=createSlice({
    name: "products",
    initialState:{
        item:items,
        cart: [],
    },
    reducers:{
        addFavorite:(state , action)=>{
            const {id} = action.payload;
            const item =state.item.find((item)=>item.id===id);
            item.favori = true;
        },
        addBasket:(state , action)=>{
            const {id} = action.payload;
            const item =state.item.find((item)=>item.id===id);
            item.basket = true;
        },
        deleteBasket:(state , action)=>{
            const id = action.payload;
            const item =state.item.find((item)=>item.id===id);
            item.basket = false;
        },
        deleteFavori:(state , action)=>{
            const id = action.payload;
            const item =state.item.find((item)=>item.id===id);
            item.favori = false;
        }
    }
})

export const { addFavorite , addBasket , deleteBasket , deleteFavori} =marketSlice.actions;

export default marketSlice.reducer;