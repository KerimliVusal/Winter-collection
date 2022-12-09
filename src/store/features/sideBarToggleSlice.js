import { createSlice } from '@reduxjs/toolkit'


export const sidebarToggleSlice = createSlice({
  name: 'sidebarToggle',
  initialState: {
  toggle:false,
},
  reducers: {
    toggleSidebar: state => {
      state.toggle= !state.toggle;
    },
  },
})

// Action creators are generated for each case reducer function
export const {toggleSidebar} = sidebarToggleSlice.actions

export default sidebarToggleSlice.reducer