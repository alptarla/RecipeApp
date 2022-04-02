import { RouteProp, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
} from 'react-native'
import MealItem from '../components/MealItem'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getMealsByCategoryName } from '../store/slices/mealSlice'
import Colors from '../theme/Colors'
import { Meal, RootStackPramList } from '../types'

const Meals = () => {
  const { meals, status } = useAppSelector((state) => state.meal)

  const {
    params: { categoryName },
  } = useRoute<RouteProp<RootStackPramList, 'Meals'>>()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMealsByCategoryName({ categoryName }))
  }, [])

  const renderMealItem: ListRenderItem<Meal> = ({ item }) => (
    <View style={styles.mealWrapper}>
      <MealItem meal={item} />
    </View>
  )

  if (status === 'loading')
    return (
      <View style={styles.centered}>
        <ActivityIndicator
          size="large"
          color={Colors.primaryDark}
        />
      </View>
    )

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.idMeal}
      />
    </View>
  )
}

export default Meals

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primaryLight,
  },
  mealWrapper: {
    margin: 10,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
