import { memo } from 'react'
import { useMaterialTheme } from 'react-material-design-provider'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

import { MessageType } from '../../message.type'


export interface UserMessageItemProps {
  message: MessageType
}


export const UserMessageItem = memo((props: UserMessageItemProps) => {


  const { colors, shape } = useMaterialTheme()


  return (
    <View
      style={{
        flex: 1,
        alignItems: 'flex-end',
      }}
    >
      <View
        style={{
          maxWidth: '75%',
          marginHorizontal: 8,
          marginVertical: 2,
          padding: 8,
          borderRadius: shape.small,
          backgroundColor: colors.primaryContainer,
        }}
      >
        <Text
          variant={'bodyMedium'}
          style={{
            color: colors.onPrimaryContainer,
          }}
          selectionColor={colors.onPrimary}
          selectable={true}
        >
          {props.message.content}
        </Text>
      </View>
    </View>
  )
})
