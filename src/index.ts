#!/usr/bin/env node

import { program } from 'commander'
import ConfigStore from 'configstore'
import { getCommands } from './commands/index.js'
import { BannerMessage, DefaultConfig } from './lib/index.js'

const cfgStore = new ConfigStore('connor-cli', DefaultConfig)

program
  .version(cfgStore.get('version'))
  .description(cfgStore.get('description'))
  .addHelpText('before', BannerMessage)

async function setup() {
  for (const command of getCommands()) program.addCommand(await command.build())
}

setup()
  .then(() => program.parse())
  .catch(err => console.error(err))
