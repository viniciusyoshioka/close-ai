import { KeyboardProvider } from 'react-native-keyboard-controller'

import { Router } from './router'
import { ThemeProvider } from './theme/theme.provider'


export function App() {
  return (
    <ThemeProvider>
      <KeyboardProvider>
          <Router />
      </KeyboardProvider>
    </ThemeProvider>
  )
}
