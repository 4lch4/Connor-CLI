import ConfigStore from 'configstore'
import { DefaultConfig } from '../constants/DefaultConfig.js'

/**
 * A utility class for interacting with the config store. A config store is just
 * a fancy word for a config file that I don't have to think about storing or
 * retrieving.
 */
export class ConfigUtil {
  private cfgStore: ConfigStore

  constructor() {
    this.cfgStore = new ConfigStore('kuma-cli', DefaultConfig)
  }

  /**
   * Returns the value of the entire config file at once. You can also cast it
   * to a specific type and the function will return the object as said type.
   *
   * @returns An object containing all the config values.
   */
  public all<T = any>(): T {
    return this.cfgStore.all as T
  }

  /** Deletes all values from the config file. */
  public clear(): void {
    this.cfgStore.clear()
  }

  /**
   * Deletes a property with the given name from the config file.
   *
   * @param key The name of the property to remove.
   */
  public delete(key: string): void {
    this.cfgStore.delete(key)
  }

  /**
   * Attempts to retrieve the value of a config property with the given name.
   *
   * @param key The name of the property to get.
   * @returns The value of the property, if it exists.
   */
  public get<T = any>(key: string): T {
    return this.cfgStore.get(key) as T
  }

  /**
   * Determines whether or not a property with the given name has been stored in
   * the config file.
   *
   * @param key The name of the property to check for.
   * @returns True or false whether or not the property exists.
   */
  public has(key: string): boolean {
    return this.cfgStore.has(key)
  }

  /**
   * Gets the path to the config file. Can be used to show the user where it is,
   * or better, open it.
   *
   * @returns The path to the config file.
   */
  public path(): string {
    return this.cfgStore.path
  }

  /**
   * Set a value for a config property and save it to the config file.
   *
   * @param key — The name of the property to set.
   * @param value — The value to set
   */
  public set(key: string, value: any): void {
    this.cfgStore.set(key, value)
  }

  /**
   * Determines whether or not to save a config value based on whether or not it
   * exists or if the --force flag was passed.
   *
   * @param name The name of the config value to check.
   * @param force Whether or not to force a write.
   * @returns True or false whether or not to write the config value.
   */
  public shouldWriteValue(name: string, force: boolean = false) {
    const exists = this.cfgStore.has(name)

    // There is no value with this name or the force flag was provided, safe to write.
    if (!exists || force) return true
    else if (exists && !force) return true
    // The value exists, and we're not forcing it to be overwritten.
    else if (exists && !force) return false
    // Unknown case, return false by default
    else return false
  }
}
