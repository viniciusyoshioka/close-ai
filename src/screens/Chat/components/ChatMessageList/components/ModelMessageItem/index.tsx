import { memo } from 'react'
import { useMaterialTheme } from 'react-material-design-provider'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

import { MessageType } from '../../message.type'


export interface ModelMessageItemProps {
  message: MessageType
}


export const ModelMessageItem = memo((props: ModelMessageItemProps) => {


  const { colors, shape } = useMaterialTheme()


  return (
    <View
      style={{
        flex: 1,
        alignItems: 'flex-start',
      }}
    >
      <View
        style={{
          maxWidth: '75%',
          marginHorizontal: 8,
          marginVertical: 2,
          padding: 8,
          borderRadius: shape.small,
          backgroundColor: colors.surfaceContainer,
        }}
      >
        <Text
          variant={'bodyMedium'}
          style={{
            color: colors.onSurfaceVariant,
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
