import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Meals = () => {
  return (
    <View style={styles.screen}>
      <Text>Meals</Text>
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
