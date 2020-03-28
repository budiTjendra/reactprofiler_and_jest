const utils = require('../utils/jestUtils')

const {
    initializeCityDatabase,
    clearCityDatabase,
    isCity
} = utils


beforeAll(() => {
    return initializeCityDatabase();
});

afterAll(() => {
    return clearCityDatabase();
});

test('city database has Vienna', () => {
    console.log('test Vienna')
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    console.log('test San Juan')
    expect(isCity('San Juan')).toBeTruthy();
});

