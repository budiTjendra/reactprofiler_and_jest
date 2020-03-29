const api = require('../api.js')

const {
   fetchData
} = api

test("mock fetch function", async () => {
    const expectedColorData = require('../../../public/color')
    const mockFetchPromise = Promise.resolve({
        json: () => require('../../../public/color')
    });

    jest.spyOn(global,'fetch').mockImplementation(()=> mockFetchPromise)

    const data = await fetchData()
    expect(data).toBe(expectedColorData)

})


test("mock fetch function without Promise", async () => {
    const expectedColorData = require('../../../public/color')
    const mockFetchWithoutPromise = {
        json: () => require('../../../public/color')
    };

    jest.spyOn(global,'fetch').mockImplementation( ()=> mockFetchWithoutPromise)

    const data = await fetchData()
    expect(data).toBe(expectedColorData)

})
