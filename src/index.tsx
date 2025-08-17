import { KeyboardProvider } from 'react-native-keyboard-controller'

import { ServicesProvider } from './database/providers/services-provider/services.provider'
import { Router } from './router'
import { ThemeProvider } from './theme/theme.provider'


export function App() {
  return (
    <ThemeProvider>
      <KeyboardProvider>
        <ServicesProvider>
          <Router />
        </ServicesProvider>
      </KeyboardProvider>
    </ThemeProvider>
  )
}
