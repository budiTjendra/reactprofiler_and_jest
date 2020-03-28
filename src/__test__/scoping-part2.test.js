beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
    console.log('Scoped / Nested block (begin)')
    afterAll(() => console.log('2 - afterAll'));
    beforeAll(() => console.log('2 - beforeAll'));
    beforeEach(() => console.log('2 - beforeEach'));
    afterEach(() => console.log('2 - afterEach'));
    test('', () => console.log('2 - test'));
    test('', () => console.log('3 - test'));
    test('', () => console.log('4 - test'));
    console.log('Scoped / Nested block 2 (end)')

});
