import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Meal, MealDetail, MealState } from '../../types'
import apiClient from '../../utils/apiClient'

export const getMealsByCategoryName = createAsyncThunk(
  'meal/getMeals',
  async ({ categoryName }: { categoryName: string }) => {
    const { data } = await apiClient.get(`filter.php?c=${categoryName}`)
    return data.meals
  }
)

export const getMealDetail = createAsyncThunk(
  'meal/getMealDetail',
  async ({ mealId }: { mealId: string }) => {
    const { data } = await apiClient.get(`lookup.php?i=${mealId}`)
    return data.meals[0]
  }
)

const initialState: MealState = {
  meals: [],
  selectedMeal: null,
  status: 'idle',
  error: null,
}

const mealSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getMealsByCategoryName.fulfilled,
      (state, action: PayloadAction<Meal[]>) => {
        state.status = 'idle'
        state.meals = action.payload
        state.error = null
      }
    )
    builder.addCase(getMealsByCategoryName.rejected, (state, action) => {
      state.status = 'error'
      state.error = action.error.message || 'Something went wrong'
    })
    builder.addCase(getMealsByCategoryName.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(
      getMealDetail.fulfilled,
      (state, action: PayloadAction<MealDetail>) => {
        state.status = 'idle'
        state.selectedMeal = action.payload
        state.error = null
      }
    )
    builder.addCase(getMealDetail.rejected, (state, action) => {
      state.status = 'error'
      state.error = action.error.message || 'Something went wrong'
    })
    builder.addCase(getMealDetail.pending, (state) => {
      state.status = 'loading'
    })
  },
})

export default mealSlice.reducer
