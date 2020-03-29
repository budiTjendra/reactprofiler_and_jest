//https://github.com/testing-library/react-testing-library#basic-example
import React from 'react'
import * as BaseComponent from '../Index'
import { render, fireEvent, waitFor, screen} from '@testing-library/react'

const {
    HelloworldComponent,
    HiddenMessage
} = BaseComponent


describe("Test HelloworldComponent", () => {
    beforeEach( ()=>{
        render(<HelloworldComponent/>)
    })


    test("lookup by attribute",()=>{
        const text = screen.getByTestId('helloworld-element')
        expect(text).toBeDefined()
    })

    test("lookup by text", () => {
        const text = screen.getByText('Helloworld')
        expect(text).toBeDefined()

    })

    //queryselector reference
    //https://www.w3.org/TR/selectors-3/#attribute-substrings
    test("lookup for className by queryselector", () => {
        const { container } = render(<HelloworldComponent />)
        const foo = container.querySelector('[class="basic simple"]')
        expect(foo).toBeDefined()
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
