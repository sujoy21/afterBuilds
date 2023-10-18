import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accessToken: "",
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setAccessToken: (state,action) => {
      state.accessToken = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAccessToken } = loginSlice.actions

export default loginSlice.reducer