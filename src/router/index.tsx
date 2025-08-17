import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useMaterialTheme } from 'react-material-design-provider'

import { ChatScreen } from '../screens/Chat'
import { HomeScreen } from '../screens/Home'
import { ScreenParams } from './router.types'


const NativeStackNavigator = createNativeStackNavigator<ScreenParams>()


export function Router() {


  const { isDark, colors } = useMaterialTheme()


  return (
    <NavigationContainer>
      <NativeStackNavigator.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
          statusBarStyle: isDark ? 'light' : 'dark',
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <NativeStackNavigator.Screen name={'Home'} component={HomeScreen} />
        <NativeStackNavigator.Screen name={'Chat'} component={ChatScreen} />
      </NativeStackNavigator.Navigator>
    </NavigationContainer>
  )
}
