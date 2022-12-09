import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasket: (state, action) => {
      state.basket= [...state.basket,action.payload];
    },
    deleteFromBasket: (state, action) => {
      state.basket=state.basket.filter(data=>data.id!==action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const {setBasket,deleteFromBasket} = basketSlice.actions

export default basketSlice.reducer