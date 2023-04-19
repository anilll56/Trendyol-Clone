import { createSlice } from "@reduxjs/toolkit";
import items from "../Api/Items";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const marketSlice = createSlice({
  name: "products",
  initialState: {
    item: items,
    cart: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const { id } = action.payload;
      const item = state.item.find((item) => item.id === id);
      if (item.favori) {
        item.favori = false;
        toast.error("Ürün favorilerden silindi!");
      } else {
        item.favori = true;
        toast.success("Ürün favorilere eklendi!");
      }
    },
    addBasket: (state, action) => {
      const { id } = action.payload;
      const item = state.item.find((item) => item.id === id);
      item.basket = true;
      toast.success("Ürün sepete eklendi!");
    },
    deleteBasket: (state, action) => {
      const id = action.payload;
      const item = state.item.find((item) => item.id === id);
      item.basket = false;
      toast.error("Ürün sepetten silindi!");
    },
    deleteFavori: (state, action) => {
      const id = action.payload;
      const item = state.item.find((item) => item.id === id);
      item.favori = false;
      toast.error("Ürün favorilerden silindi!");
    },
  },
});

export const { addFavorite, addBasket, deleteBasket, deleteFavori } =
  marketSlice.actions;

export default marketSlice.reducer;
