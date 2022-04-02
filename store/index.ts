import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './slices/categorySlice'
import mealSlice from './slices/mealSlice'

const store = configureStore({
  reducer: {
    category: categorySlice,
    meal: mealSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
