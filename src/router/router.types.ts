import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


export type ScreenParams = {
  Home: undefined
  Chat: undefined
}


type ScreenName = keyof ScreenParams


export type NavigationProps<T extends ScreenName> = NativeStackNavigationProp<
  ScreenParams,
  T
>

export type RouteProps<T extends ScreenName> = RouteProp<ScreenParams, T>
