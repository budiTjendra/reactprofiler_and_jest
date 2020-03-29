import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import { render, fireEvent, waitForElement } from '@testing-library/react'

test('render correctly', () =>{
    const tree = renderer
        .create(<App/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})



const api = require('./../utils/api')
const {
    fetchData
} = api

//https://itnext.io/testing-components-with-jest-and-react-testing-library-d36f5262cde2
//https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
test('render when button click', async ()=> {

    const dataColor = require('../../public/color')

    const mockFn = jest.spyOn(window,'fetch').mockImplementationOnce(()=>{
        console.log('calling mock')
        return Promise.resolve({
            json: () => Promise.resolve(dataColor)
        })
    })

    const {container , findByRole} = render(<App/>)
    const button = container.querySelector('button')
    fireEvent.click(button)

    //findByRole interchangeble used with getByText and getByTestId
    const output = await waitForElement(()=> findByRole('output'))
    expect(mockFn).toHaveBeenCalled()
    expect(output).toBeDefined()

})



