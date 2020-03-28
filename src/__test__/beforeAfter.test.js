const utils = require('../utils/jestUtils')

const {
    initializeCityDatabase,
    clearCityDatabase,
    isCity
} = utils

beforeEach(() => {
    initializeCityDatabase();
});

afterEach(() => {
    clearCityDatabase();
});

test('city database has San Juan', () => {
    console.log('test San Juan')
    expect(isCity('San Juan')).toBeTruthy();
});



test('city database has Vienna', () => {
    console.log('test Vienna')
    expect(isCity('Vienna')).toBeTruthy();
});


