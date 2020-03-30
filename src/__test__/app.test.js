import React from "react";
import App from '../App';
import { render, fireEvent, waitForElement } from '@testing-library/react'


// AutoSizer uses offsetWidth and offsetHeight.
// Jest runs in JSDom which doesn't support measurements APIs.
function mockOffsetSize(width, height) {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
        configurable: true,
        value: height,
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
        configurable: true,
        value: width,
    });
}

//https://itnext.io/testing-components-with-jest-and-react-testing-library-d36f5262cde2
//https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
test('render when button click', async ()=> {
    mockOffsetSize(1000, 1000);
    const dataColor = require('../../public/color')

    const mockFetchFn = jest.spyOn(window,'fetch').mockImplementationOnce(()=>{
        console.log('calling mock')
        return Promise.resolve({
            json: () => Promise.resolve(dataColor)
        })
    })

    const {container , findByRole} = render(<App/>)
    const button = container.querySelector('button')
    fireEvent.click(button)

    //findByRole interchangeble used with getByText and getByTestId
    const output = await waitForElement(()=> container.querySelector('[class="List"]'))
    expect(mockFetchFn).toHaveBeenCalled()
    expect(output).toBeDefined()

})



