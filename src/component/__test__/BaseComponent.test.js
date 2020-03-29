//https://github.com/testing-library/react-testing-library#basic-example
import React from 'react'
import * as BaseComponent from '../BaseComponent'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

const {
    HelloworldComponent,
    HiddenMessage
} = BaseComponent


describe("Test HelloworldComponent", () => {
    beforeEach( ()=>{
        render(<HelloworldComponent/>)
    })


    test("test lookup by attribute",()=>{
        const text = screen.getByTestId('helloworld-element')
        expect(text).toBeDefined()
    })

    test("test lookup by text", () => {
        const text = screen.getByText('Helloworld')
        expect(text).toBeDefined()

    })
})


describe("Test HiddenMessage", ()=> {
    test('shows the children when the checkbox is checked', () => {
        const testMessage = 'Test Message'
        render(<HiddenMessage>{testMessage}</HiddenMessage>)

        // query* functions will return the element or null if it cannot be found
        // get* functions will return the element or throw an error if it cannot be found
        expect(screen.queryByText(testMessage)).toBeNull()

        // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
        fireEvent.click(screen.getByLabelText(/show/i))

        // .toBeInTheDocument() is an assertion that comes from jest-dom
        // otherwise you could use .toBeDefined()
        expect(screen.getByText(testMessage)).toBeInTheDocument()
    })
})
