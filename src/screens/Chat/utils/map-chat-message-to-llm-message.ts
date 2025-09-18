import { Message, MessageRole } from 'react-native-executorch'

import { ChatMessageRole } from '../../../database/entities/chat-message/chat-message.constants'
import { ChatMessageEntity } from '../../../database/entities/chat-message/chat-message.entity'


type MessageRoleMap = {
  [K in ChatMessageRole]: MessageRole
}

const messageRoleMap: MessageRoleMap = {
  [ChatMessageRole.SYSTEM]: 'system',
  [ChatMessageRole.USER]: 'user',
  [ChatMessageRole.MODEL]: 'assistant',
}


export function mapChatMessageToLlmMessage(chatMessage: ChatMessageEntity): Message {
  const llmMessage: Message = {
    role: messageRoleMap[chatMessage.role],
    content: chatMessage.content,
  }

  return llmMessage
}
