import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackPramList } from '../types'

const useRootStackNavigation = () =>
  useNavigation<NavigationProp<RootStackPramList>>()

export default useRootStackNavigation
