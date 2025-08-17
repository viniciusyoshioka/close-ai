import { PropsWithChildren } from 'react'
import { MaterialDarkTheme, MaterialProvider } from 'react-material-design-provider'
import { MD3DarkTheme, PaperProvider, ProviderProps as PaperProviderProps } from 'react-native-paper'


const paperProviderSettings: PaperProviderProps['settings'] = {
  rippleEffectEnabled: true,
}


export function ThemeProvider(props: PropsWithChildren) {
  return (
    <PaperProvider settings={paperProviderSettings} theme={MD3DarkTheme}>
      <MaterialProvider theme={MaterialDarkTheme}>
        {props.children}
      </MaterialProvider>
    </PaperProvider>
  )
}
