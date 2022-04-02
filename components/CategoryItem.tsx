import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Colors from '../theme/Colors'
import { Category } from '../types'

const CategoryItem: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{ uri: category.strCategoryThumb }}
      />
      <Text style={styles.title}>{category.strCategory}</Text>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  item: {
    width: Dimensions.get('window').width - 30,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    padding: 10,
    borderBottomStartRadius: 50,
    borderTopStartRadius: 50,
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    marginHorizontal: 15,
  },
  title: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 24,
  },
})
