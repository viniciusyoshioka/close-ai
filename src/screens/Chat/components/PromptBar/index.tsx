import { useCallback, useRef } from 'react'
import { View } from 'react-native'

import { PromptInput, PromptInputRef } from './components/PromptInput'
import { SendPromptButton } from './components/SendPromptButton'


export interface PromptBarProps {
  onSendPrompt?: (prompt: string) => void
}


export function PromptBar(props: PromptBarProps) {


  const promptInputRef = useRef<PromptInputRef>(undefined)


  const onSendPrompt = useCallback(() => {
    if (!props.onSendPrompt) return

    const prompt = promptInputRef.current?.prompt
    if (!prompt?.length) return

    props.onSendPrompt(prompt)
  }, [props.onSendPrompt])


  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 8,
        gap: 8,
      }}
    >
      <PromptInput
        ref={promptInputRef}
      />

      <SendPromptButton
        onPress={onSendPrompt}
      />
    </View>
  )
}
