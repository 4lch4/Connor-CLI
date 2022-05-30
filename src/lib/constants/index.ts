import { join } from 'path'

export * from './DefaultConfig.js'
export const CONFIG_DIR = join(process.env.HOME || '~', '.config', 'kuma-cli')
