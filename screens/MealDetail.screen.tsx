import { RouteProp, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getMealDetail } from '../store/slices/mealSlice'
import Colors from '../theme/Colors'
import { RootStackPramList } from '../types'

const MealDetail = () => {
  const { selectedMeal: meal } = useAppSelector((state) => state.meal)

  const {
    params: { mealId },
  } = useRoute<RouteProp<RootStackPramList, 'MealDetail'>>()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMealDetail({ mealId }))
  }, [])

  return (
    <ScrollView style={styles.screen}>
      <Image
        source={{ uri: meal?.strMealThumb }}
        style={styles.image}
      />
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{meal?.strMeal}</Text>
        <Text style={styles.instructions}>{meal?.strInstructions}</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Watch on Youtube</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default MealDetail

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: Dimensions.get('screen').height / 3,
    resizeMode: 'cover',
  },
  contentWrapper: {
    padding: 10,
  },
  title: {
    color: Colors.primaryDark,
    fontWeight: 'bold',
    fontSize: 32,
    marginVertical: 20,
  },
  instructions: {
    fontSize: 18,
  },
  button: {
    width: '100%',
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
})
