import { Router } from './router'
import { ThemeProvider } from './theme/theme.provider'


export function App() {
  return (
    <ThemeProvider>
          <Router />
    </ThemeProvider>
  )
}
