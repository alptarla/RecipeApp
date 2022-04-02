export type RootStackPramList = {
  Categories: undefined
  Meals: { categoryName: string }
  MealDetail: { mealId: string }
}

type Status = 'idle' | 'loading' | 'error'

export type CategoryState = {
  categories: Category[]
  status: Status
  error: string | null
}

export type MealState = {
  meals: Meal[]
  selectedMeal: MealDetail | null
  status: Status
  error: string | null
}

export type Meal = {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

export type MealDetail = {
  strInstructions: string
  idMeal: string
  strMeal: string
  strMealThumb: string
}

export type Category = {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}
