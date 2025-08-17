import { useCallback } from 'react'

import { normalizeError } from '../../../../utils/normalize-error'
import { appDataSource, logDataSource } from '../../../data-source'


type DataSourceStatus =
  | {
    success: true
  }
  | {
    database: 'app' | 'log'
    success: false
    error: Error
  }


export function useDataSources() {


  const initialize = useCallback(async (): Promise<DataSourceStatus> => {
    try {
      if (!appDataSource.isInitialized) {
        await appDataSource.initialize()
      }
    } catch (error) {
      return {
        database: 'app',
        success: false,
        error: normalizeError(error),
      }
    }

    try {
      if (!logDataSource.isInitialized) {
        await logDataSource.initialize()
      }
    } catch (error) {
      return {
        database: 'log',
        success: false,
        error: normalizeError(error),
      }
    }

    return { success: true }
  }, [])


  const migrate = useCallback(async (): Promise<DataSourceStatus> => {
    try {
      if (!appDataSource.isInitialized) {
        throw new Error('App data source is not initialized')
      }

      const appMigrations = await appDataSource.runMigrations()
      console.log(`App migrations executed: ${appMigrations.length}`)
    } catch (error) {
      return {
        database: 'app',
        success: false,
        error: normalizeError(error),
      }
    }

    try {
      if (!logDataSource.isInitialized) {
        throw new Error('Log data source is not initialized')
      }

      const logMigrations = await logDataSource.runMigrations()
      console.log(`Log migrations executed: ${logMigrations.length}`)
    } catch (error) {
      return {
        database: 'log',
        success: false,
        error: normalizeError(error),
      }
    }

    return { success: true }
  }, [])


  const close = useCallback(async (): Promise<DataSourceStatus> => {
    try {
      if (appDataSource.isInitialized) {
        await appDataSource.destroy()
      }
    } catch (error) {
      return {
        database: 'app',
        success: false,
        error: normalizeError(error),
      }
    }

    try {
      if (logDataSource.isInitialized) {
        await logDataSource.destroy()
      }
    } catch (error) {
      return {
        database: 'log',
        success: false,
        error: normalizeError(error),
      }
    }

    return { success: true }
  }, [])


  return { initialize, migrate, close }
}
