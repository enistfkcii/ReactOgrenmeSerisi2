import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const initialState = {
  modal: false,
  getData:[]
}
export const fetchData = createAsyncThunk(
    'users/fetchById',
    // Declare the type your function argument here:
    async (userId) => {
      const response = await fetch(`https://fakestoreapi.com/products`)
      // Inferred return type: Promise<MyData>
      return (await response.json())
    }
  )
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalOpenFunc: (state) => {

      state.modal = !state.modal
    },


  },
  extraReducers:(builder) => {
    builder.addCase(fetchData.fulfilled,(state,action) => {
    state.getData = action.payload
    })
  }
})


export const { modalOpenFunc} = modalSlice.actions

export default modalSlice.reducer