import { logger } from '@4lch4/logger'
import { Argument, Command, Option } from 'commander'
import { ICommandInfo, ICommandInput } from '../../interfaces/index.js'
import { DebugOption, VerboseOption } from '../options/index.js'
import { ConfigUtil } from '../utils/index.js'

export abstract class BaseCommand {
  protected flags?: Option[]
  protected args?: Argument[]
  protected cfgUtil: ConfigUtil

  constructor(public info: ICommandInfo) {
    this.cfgUtil = new ConfigUtil()
  }

  protected initCommand(inputFields?: ICommandInput): Command {
    const command = new Command(this.info.name)

    if (inputFields && inputFields.flags) inputFields.flags.push(DebugOption, VerboseOption)
    else if (inputFields && !inputFields.flags) inputFields.flags = [DebugOption, VerboseOption]

    // Check if the inputFields are provided.
    if (inputFields) {
      // Check if args are provided and if so add each of them.
      if (inputFields.args) for (const arg of inputFields.args) command.addArgument(arg)

      // Check if flags are provided and if so add each of them.
      if (inputFields.flags) for (const flag of inputFields.flags) command.addOption(flag)
    }

    // Check if the description is provided and if so add it.
    if (this.info.description) command.description(this.info.description)

    // Check if any aliases are provided and if so add them.
    if (this.info.alias) for (const alias of this.info.alias) command.alias(alias)

    // Add --verbose flag to all commands; enables verbose logging.
    command.addOption(VerboseOption)

    // Add --debug flag to all commands; enables debug logging.
    command.addOption(DebugOption)

    return command
  }

  protected getCommandInput(): ICommandInput {
    return {}
  }

  protected log(msg: string) {
    logger.info(msg)
  }

  protected success(msg: string) {
    logger.success(msg)
  }

  protected error(msg: string) {
    logger.error(msg)
  }

  protected warn(msg: string) {
    logger.warn(msg)
  }

  protected debug(msg: string, opts?: any) {
    if (opts?.debug) logger.debug(msg)
  }

  protected abstract run(input: any): Promise<any>

  async build(): Promise<Command> {
    throw new Error('Not implemented')
  }
}
