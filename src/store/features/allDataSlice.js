import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const allDataSlice = createSlice({
  name: 'allData',
  initialState,
  reducers: {
    setAllData: (state, action) => {
      state.data= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setAllData } = allDataSlice.actions

export default allDataSlice.reducer