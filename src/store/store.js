import { configureStore } from '@reduxjs/toolkit'
import allDataSlice from './features/allDataSlice'
import basketSlice from './features/basketSlice'
import sideBarToggleSlice from './features/sideBarToggleSlice'
export const store = configureStore({
  reducer: {
    data:allDataSlice,
    toggleSideBar:sideBarToggleSlice,
    basket:basketSlice,
  },
})