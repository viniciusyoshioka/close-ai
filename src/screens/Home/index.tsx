import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'
import { View } from 'react-native'
import { FAB } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { NavigationProps } from '../../router/router.types'


export function HomeScreen() {


  const safeAreaInsets = useSafeAreaInsets()
  const navigation = useNavigation<NavigationProps<'Home'>>()


  const openNewChat = useCallback(() => {
    navigation.navigate('Chat')
  }, [navigation])


  return (
    <View style={{ flex: 1 }}>
      <FAB
        icon={'plus'}
        mode={'flat'}
        onPress={openNewChat}
        style={{
          position: 'absolute',
          bottom: safeAreaInsets.bottom,
          right: safeAreaInsets.right,
          margin: 16,
        }}
      />
    </View>
  )
}
