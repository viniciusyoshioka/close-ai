import { useNavigation, useRoute } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { LLAMA3_2_1B, LLAMA3_2_TOKENIZER, LLAMA3_2_TOKENIZER_CONFIG, useLLM } from 'react-native-executorch'
import { KeyboardAvoidingView } from 'react-native-keyboard-controller'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ChatMessageRole } from '../../database/entities/chat-message/chat-message.constants'
import { ChatMessageEntity } from '../../database/entities/chat-message/chat-message.entity'
import { ChatEntity } from '../../database/entities/chat/chat.entity'
import { useServices } from '../../database/providers/services-provider/services.provider'
import { NavigationProps, RouteProps } from '../../router/router.types'
import { ChatHeader } from './components/ChatHeader'
import { ChatMessageList } from './components/ChatMessageList'
import { PromptBar } from './components/PromptBar'
import { mapChatMessageToLlmMessage } from './utils/map-chat-message-to-llm-message'


export function ChatScreen() {


  const safeAreaInsets = useSafeAreaInsets()
  const navigation = useNavigation<NavigationProps<'Chat'>>()
  const route = useRoute<RouteProps<'Chat'>>()

  const { chatService, chatMessageService } = useServices()
  const llm = useLLM({
    modelSource: LLAMA3_2_1B,
    tokenizerSource: LLAMA3_2_TOKENIZER,
    tokenizerConfigSource: LLAMA3_2_TOKENIZER_CONFIG,
  })

  const [modelName, setModelName] = useState<string | null>(null)
  const [chat, setChat] = useState<ChatEntity | null>(null)
  const [messages, setMessages] = useState<ChatMessageEntity[]>([])


  const getOrCreateChat = useCallback(async () => {
    if (chat) return chat

    // TODO: Add title and model param values
    const newChat = await chatService.create({
      title: 'title',
      model: 'model-name',
    })

    return newChat
  }, [chatService, chat, modelName])

  const onSendPrompt = useCallback(async (prompt: string) => {
    const currentChat = await getOrCreateChat()

    const newChatMessage = await chatMessageService.create({
      chatId: currentChat.id,
      role: ChatMessageRole.USER,
      content: prompt,
    })

    const llmMessages = [...messages, newChatMessage].map(mapChatMessageToLlmMessage)
    llm.generate(llmMessages)
  }, [getOrCreateChat, chatMessageService])


  console.log(llm)

  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      style={{
        flex: 1,
        paddingLeft: safeAreaInsets.left,
        paddingRight: safeAreaInsets.right,
        paddingBottom: safeAreaInsets.bottom,
      }}
    >
      <ChatHeader />

      <ChatMessageList
        messages={messages}
      />

      <PromptBar
        onSendPrompt={onSendPrompt}
      />
    </KeyboardAvoidingView>
  )
}
