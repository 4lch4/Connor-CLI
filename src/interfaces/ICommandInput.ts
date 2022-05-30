import { Argument, Option } from 'commander'

export interface ICommandInput {
  args?: Argument[]
  flags?: Option[]
}
