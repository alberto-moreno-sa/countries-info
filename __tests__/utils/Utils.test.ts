import { Util } from 'utils';

describe('Util', () => {
  describe('keysToCamelCase', () => {
    it('converts snake_case, PascalCase, kebab-case keys to camelCase deeply', () => {
      const noCamelCaseObj = {
        success: false,
        'error-codes': ['timeout-or-duplicate'],
        snake_case: {
          PascalCase: '23',
        },
      };

      const expectedResult = {
        success: noCamelCaseObj.success,
        errorCodes: noCamelCaseObj['error-codes'],
        snakeCase: {
          pascalCase: noCamelCaseObj.snake_case.PascalCase,
        },
      };

      const converted = Util.keysToCamelCase(noCamelCaseObj);
      expect(JSON.stringify(converted)).toBe(JSON.stringify(expectedResult));
    });
  });
});
