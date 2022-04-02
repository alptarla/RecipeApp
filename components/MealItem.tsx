import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Colors from '../theme/Colors'
import { Meal } from '../types'

const MealItem: React.FC<{ meal: Meal }> = ({ meal }) => {
  return (
    <View style={styles.item}>
      <ImageBackground
        source={{ uri: meal.strMealThumb }}
        style={styles.bgImage}
      >
        <View style={styles.titleWrapper}>
          <Text
            style={styles.title}
            numberOfLines={1}
          >
            {meal.strMeal}
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    minHeight: 200,
    overflow: 'hidden',
  },
  bgImage: {
    flex: 1,
  },
  titleWrapper: {
    marginTop: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: Colors.white,
    textAlign: 'right',
  },
})
