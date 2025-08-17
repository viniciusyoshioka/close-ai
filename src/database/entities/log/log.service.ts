import { LogRepository } from './log.repository'


export interface LogServiceParams {
  logRepository: LogRepository
}


export class LogService {


  private readonly logRepository: LogRepository


  constructor(params: LogServiceParams) {
    this.logRepository = params.logRepository
  }
}
