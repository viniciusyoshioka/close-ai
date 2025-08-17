import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'

import { appDataSource, logDataSource } from '../../data-source'
import { ChatRepository } from '../../entities/chat/chat.repository'
import { ChatService } from '../../entities/chat/chat.service'
import { LogRepository } from '../../entities/log/log.repository'
import { LogService } from '../../entities/log/log.service'
import { useDataSources } from './hooks/useDataSources'
import { Services } from './services.types'


const ServicesContext = createContext<Services>(null as unknown as Services)


export function ServicesProvider(props: PropsWithChildren) {


  const dataSources = useDataSources()

  const [services, setServices] = useState<Services | null>(null)


  const createServices = useCallback(() => {
    const chatRepository = new ChatRepository(appDataSource)
    const chatService = new ChatService({ chatRepository })

    const logRepository = new LogRepository(logDataSource)
    const logService = new LogService({ logRepository })

    setServices({ chatService, logService })
  }, [])

  const prepareDataSources = useCallback(async () => {
    const initializationStatus = await dataSources.initialize()
    if (!initializationStatus.success) {
      console.error(`Error initializing ${initializationStatus.database} data source`)
      console.error(initializationStatus.error)

      Alert.alert(
        'Erro crítico',
        `Erro inicializando banco de dados "${initializationStatus.database}": ${initializationStatus.error.message}`,
      )
      return
    }

    const migrationStatus = await dataSources.migrate()
    if (!migrationStatus.success) {
      console.error(`Error migrating ${migrationStatus.database} data source`)
      console.error(migrationStatus.error)

      Alert.alert(
        'Erro crítico',
        `Erro migrando banco de dados "${migrationStatus.database}": ${migrationStatus.error.message}`,
      )
      return
    }

    createServices()
  }, [dataSources, createServices])


  useEffect(() => {
    prepareDataSources()

    return () => {
      dataSources.close()
    }
  }, [])


  if (!services) {
    return null
  }


  return (
    <ServicesContext.Provider
      value={services}
      children={props.children}
    />
  )
}


export function useServices(): Services {
  return useContext(ServicesContext)
}
