import { BaseCommand } from '../lib/index.js'
import { ConfigCommand } from './Config.js'
import { InitCommand } from './Init.js'
import { PingCommand } from './Ping.js'
import { SendCommand } from './Send.js'

export function getCommands(): BaseCommand[] {
  return [new ConfigCommand(), new InitCommand(), new PingCommand(), new SendCommand()]
}
