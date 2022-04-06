export class LoggerBrowser {
  static info(message, ...optionalParams): void {
    console.info(message, optionalParams);
  }

  static warn(message, ...optionalParams): void {
    console.warn(message, optionalParams);
  }

  static error(message, ...optionalParams): void {
    console.error(message, optionalParams);
  }
}
