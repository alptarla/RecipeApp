import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RootStackPramList } from '../types'

const Meals = () => {
  const { params } = useRoute<RouteProp<RootStackPramList, 'Meals'>>()

  return (
    <View style={styles.screen}>
      <Text>Meals for category: {params.categoryName}</Text>
    </View>
  )
}

export default Meals

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
