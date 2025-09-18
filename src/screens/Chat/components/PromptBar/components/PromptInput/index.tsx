import { RefObject, useImperativeHandle, useRef, useState } from 'react'
import { useMaterialTheme } from 'react-material-design-provider'
import { TextInput } from 'react-native'

import { useKeyboard } from '../../../../../../hooks/useKeyboard'


export interface PromptInputProps {
  ref?: RefObject<PromptInputRef | undefined>
}


export interface PromptInputRef {
  prompt: string
  setPrompt: (newPrompt: string) => void
}


// TODO: Translate
export function PromptInput(props: PromptInputProps) {


  const { colors, typography } = useMaterialTheme()

  const inputRef = useRef<TextInput>(null)

  const [promptMessage, setPromptMessage] = useState('')


  useImperativeHandle(
    props.ref,
    () => ({
      prompt: promptMessage,
      setPrompt: setPromptMessage,
    }),
    [promptMessage, setPromptMessage],
  )

  useKeyboard('keyboardDidHide', () => {
    inputRef.current?.blur()
  })


  return (
    <TextInput
      ref={inputRef}
      value={promptMessage}
      onChangeText={setPromptMessage}
      placeholder={'Digite seu prompt'}
      multiline={true}
      numberOfLines={8}
      style={{
        flex: 1,

        minHeight: 48,

        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 4,
        paddingBottom: 4,

        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,

        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.outlineVariant,

        backgroundColor: colors.surfaceContainerHigh,
        color: colors.onSurface,

        ...typography.label.large,
      }}
    />
  )
}
