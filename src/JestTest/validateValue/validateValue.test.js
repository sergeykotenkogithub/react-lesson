const validateValue = require('./validateValue');

describe('validateValue', () => {
    test('Нужное значение', () => {
        expect(validateValue([21, 18])).toEqual([22, 19])
    });
    test('Нужное значение не undefined и не Null', () => {
        expect(validateValue([21, 18, undefined, null])).toEqual([22, 19, undefined, null])
    });
    test('Не число', () => {
        expect(validateValue([21, '18'])).toEqual([22, '18'])
    });
});

