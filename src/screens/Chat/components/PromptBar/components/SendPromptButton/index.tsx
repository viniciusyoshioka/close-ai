import { IconButton } from 'react-native-paper'


const BUTTON_SIZE = 48


export interface SendPromptButtonProps {
  onPress?: () => void
}


export function SendPromptButton(props: SendPromptButtonProps) {
  return (
    <IconButton
      mode={'contained'}
      icon={'send-outline'}
      size={24}
      style={{
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        borderRadius: BUTTON_SIZE,
        margin: 0,
      }}
      onPress={props.onPress}
    />
  )
}
