import * as React from 'react';
import renderer from 'react-test-renderer';
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

test('render correctly', () =>{
    const dataColor = require('../../public/color')

    jest.spyOn(React, 'useState').mockImplementation((initState)=> {
        //hack to execute mockOffsetSize inside component itself.
        mockOffsetSize(1000, 1000);

        return [dataColor, jest.fn()]
    });
   // const {container , findByRole} = render(<App/>)


    const tree = renderer
        .create(<App/>)
        .toJSON();
    expect(tree).toMatchSnapshot();




})



//https://itnext.io/testing-components-with-jest-and-react-testing-library-d36f5262cde2
//https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
test('render when button click', async ()=> {
    const dataColor = require('../../public/color')

    const mockFetchFn = jest.spyOn(window,'fetch').mockImplementationOnce(()=>{
        console.log('calling mock')

        //hack to execute mockOffsetSize inside component itself.
        mockOffsetSize(1000, 1000);

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




