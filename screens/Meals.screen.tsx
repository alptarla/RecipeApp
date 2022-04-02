import { RouteProp, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  View,
} from 'react-native'
import MealItem from '../components/MealItem'
import useRootStackNavigation from '../hooks/useRootStackNavigation'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getMealsByCategoryName } from '../store/slices/mealSlice'
import Colors from '../theme/Colors'
import { Meal, RootStackPramList } from '../types'

const Meals = () => {
  const { meals, status } = useAppSelector((state) => state.meal)

  const {
    params: { categoryName },
  } = useRoute<RouteProp<RootStackPramList, 'Meals'>>()

  const rootStackNavigation = useRootStackNavigation()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMealsByCategoryName({ categoryName }))
  }, [])

  const goToMealDetailScreen = (mealId: string) => () =>
    rootStackNavigation.navigate('MealDetail', { mealId })

  const renderMealItem: ListRenderItem<Meal> = ({ item }) => (
    <Pressable
      onPress={goToMealDetailScreen(item.idMeal)}
      style={styles.mealWrapper}
    >
      <MealItem meal={item} />
    </Pressable>
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
