import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Categories from '../screens/Categories.screen'
import MealDetail from '../screens/MealDetail.screen'
import Meals from '../screens/Meals.screen'
import Colors from '../theme/Colors'
import { RootStackPramList } from '../types'

const RootStack = createNativeStackNavigator<RootStackPramList>()

const RootNavigator = () => (
  <RootStack.Navigator screenOptions={{ headerTintColor: Colors.primaryDark }}>
    <RootStack.Screen
      name="Categories"
      component={Categories}
    />
    <RootStack.Screen
      name="Meals"
      component={Meals}
    />
    <RootStack.Screen
      name="MealDetail"
      component={MealDetail}
    />
  </RootStack.Navigator>
)

export default RootNavigator
