import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'
import { Appbar } from 'react-native-paper'

import { NavigationProps } from '../../../../router/router.types'


export interface ChatHeaderProps {}


// TODO: Translate title
export function ChatHeader(props: ChatHeaderProps) {


  const navigation = useNavigation<NavigationProps<'Chat'>>()


  const goBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])


  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={'Chat'} />
    </Appbar.Header>
  )
}
