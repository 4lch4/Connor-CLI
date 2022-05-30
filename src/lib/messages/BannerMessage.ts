import { Chalk } from 'chalk'
import figlet from 'figlet'

const chalk = new Chalk()

export const BannerMessage = chalk.blue(figlet.textSync('Connor-CLI', 'Slant'))
/*
  Fonts of choice:
  - Doom
  - Ogre
  - Slant
  - Varsity
  - Georgia11
  - Ivrit
*/
