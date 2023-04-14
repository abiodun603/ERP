// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

interface DataParams {
  q: string
}

// ** Fetch Invoices
export const fetchData = createAsyncThunk('appTickets/fetchData', async (params: DataParams) => {
  const response = await axios.get('/apps/tickets/data', {
    params
  })

  return response.data
})

export const appTicketsSlice = createSlice({
  name: 'appTickets',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.tickets
      state.params = action.payload.params
      state.allData = action.payload.allData
      state.total = action.payload.total
    })
  }
})

export default appTicketsSlice.reducer
