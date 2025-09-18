import { LegendList, LegendListRenderItemProps } from '@legendapp/list'
import { ReactNode, useCallback } from 'react'

import { ChatMessageRole } from '../../../../database/entities/chat-message/chat-message.constants'
import { ChatMessageEntity } from '../../../../database/entities/chat-message/chat-message.entity'
import { ModelMessageItem } from './components/ModelMessageItem'
import { UserMessageItem } from './components/UserMessageItem'


export interface ChatMessageListProps {
  messages?: ChatMessageEntity[]
}


export function ChatMessageList(props: ChatMessageListProps) {


  const messages = props.messages ?? []


  const renderItem = useCallback(
    (renderItemProps: LegendListRenderItemProps<ChatMessageEntity>): ReactNode => {
      const { item } = renderItemProps

      switch (item.role) {
        case ChatMessageRole.USER:
          return <UserMessageItem message={item} />
        case ChatMessageRole.MODEL:
          return <ModelMessageItem message={item} />
        default:
          return null
      }
    },
    [],
  )

  const keyExtractor = useCallback((item: ChatMessageEntity) => {
    return item.id
  }, [])


  return (
    <LegendList
      data={messages}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      recycleItems={false}
      initialContainerPoolRatio={3}
      contentContainerStyle={{
        paddingTop: 6,
        paddingBottom: 6,
      }}
    />
  )
}
