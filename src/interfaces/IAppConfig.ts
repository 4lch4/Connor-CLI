export interface IAppConfig {
  /** The version number of the currently installed/used Kuma-CLI. */
  version: string

  /** A brief description of what the CLI app does. */
  description: string

  /** The full URL to your instance of Uptime Kuma (https://uptime.example) */
  instanceUrl: string

  /**
   * The default token (for the given monitor) to use for sending requests to
   * Uptime Kuma. Can be overridden by simply providing the token as an argument
   * to the send command (e.g. kuma send [pushToken]).
   */
  pushToken: string
}
