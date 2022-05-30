import { Option } from 'commander'

export const VerboseOption = new Option('-v, --verbose', 'Enable verbose logging.').conflicts('--debug')
export const DebugOption = new Option('-d, --debug', 'Enable debug logging.').conflicts('--verbose')
