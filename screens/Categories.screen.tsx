import React, { useEffect } from 'react'
import {
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  View,
} from 'react-native'
import CategoryItem from '../components/CategoryItem'
import useRootStackNavigation from '../hooks/useRootStackNavigation'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getCategories } from '../store/slices/categorySlice'
import Colors from '../theme/Colors'
import { Category } from '../types'

const Categories = () => {
  const { categories } = useAppSelector((state) => state.category)
  const dispatch = useAppDispatch()
  const rootStackNavigation = useRootStackNavigation()

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const goToMealsScreen = (categoryName: string) => () =>
    rootStackNavigation.navigate('Meals', { categoryName })

  const renderCategoryItem: ListRenderItem<Category> = ({ item }) => (
    <Pressable
      onPress={goToMealsScreen(item.strCategory)}
      style={styles.categoryWrapper}
    >
      <CategoryItem category={item} />
    </Pressable>
  )

  return (
    <View style={styles.screen}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.idCategory}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primaryLight,
  },
  categoryWrapper: {
    marginVertical: 10,
  },
})

export default Categories
