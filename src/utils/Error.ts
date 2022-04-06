export class ErrorException<T> extends Error {
  static GENERIC_ERROR = 'GENERIC_ERROR';

  value = null;
  code = null;

  constructor(message: string, code = ErrorException.GENERIC_ERROR, value?: T) {
    super(message);
    this.code = code;
    this.value = value;
  }
}
