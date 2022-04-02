export type RootStackPramList = {
  Categories: undefined
  Meals: { categoryName: string }
  MealDetail: undefined
}

type Status = 'idle' | 'loading' | 'error'

export type CategoryState = {
  categories: Category[]
  status: Status
  error: string | null
}

export type Category = {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}
