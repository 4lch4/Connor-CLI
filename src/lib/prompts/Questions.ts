import { Question } from 'inquirer'
import { DefaultConfig } from '../constants/index.js'

/** A Question object that asks for the defaultPushToken value. */
export const PushTokenQuestion: Question = {
  type: 'input',
  name: 'pushToken',
  message: 'What is the default push token?',
  default: DefaultConfig.pushToken
}

/** A Question object that asks for the instanceUrl value. */
export const InstanceUrlQuestion: Question = {
  type: 'input',
  name: 'instanceUrl',
  message: 'What is the URL of the instance you want to interact with?',
  default: DefaultConfig.instanceUrl
}

/** A Question object that asks the user if they'd like to force overwrites. */
export const ForceOverwriteQuestion: Question = {
  type: 'confirm',
  name: 'force',
  message: 'Do you want to overwrite any existing values?',
  default: false
}
