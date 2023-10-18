import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    apartmentData: "",
}

export const getApartmentSlice = createSlice({
  name: 'apartment',
  initialState,
  reducers: {
    setApartment: (state,action) => {
      state.apartmentData = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setApartment } = getApartmentSlice.actions

export default getApartmentSlice.reducer