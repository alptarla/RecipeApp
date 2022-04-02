import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category, CategoryState } from '../../types'
import apiClient from '../../utils/apiClient'

export const getCategories = createAsyncThunk(
  'category/getCategories',
  async () => {
    const { data } = await apiClient.get('/categories.php')
    return data.categories
  }
)

const initialState: CategoryState = {
  categories: [],
  status: 'idle',
  error: null,
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getCategories.fulfilled,
      (state, action: PayloadAction<Category[]>) => {
        state.status = 'idle'
        state.categories = action.payload
        state.error = null
      }
    )
    builder.addCase(getCategories.rejected, (state, action) => {
      state.status = 'error'
      state.error = action.error.message || 'Something went wrong'
    })
    builder.addCase(getCategories.pending, (state) => {
      state.status = 'loading'
    })
  },
})

export default categorySlice.reducer
