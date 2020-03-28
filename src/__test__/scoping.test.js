const utils = require('../utils/jestUtils')

const {
    initializeCityDatabase,
    initializeFoodDatabase,
    isCity,
    isValidCityFoodPair
} = utils

// Applies to all tests in this file
beforeEach(() => {
    return initializeCityDatabase();
});

afterEach( () => console.log('After each'))
afterAll(() => console.log('After all'))
beforeAll(()=> console.log('Before all'))

test('city database has Vienna', () => {
    console.log('test Vienna')
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    console.log('test San Juan')
    expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', () => {
    console.log('describe matching cities to foods')
    // Applies only to tests in this describe block
    beforeEach(() => {
        return initializeFoodDatabase();
    });

    test('Vienna <3 sausage', () => {
        expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });

    test('San Juan <3 plantains', () => {
        expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
});
