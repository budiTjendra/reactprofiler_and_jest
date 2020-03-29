import React from 'react'
export const HelloworldComponent = () => {
    return (<div data-testid="helloworld-element" className="basic simple">Helloworld</div>)
}

export const HiddenMessage = ({children}) => {
    const [showMessage, setShowMessage] = React.useState(false)
    return (
        <div>
            <label htmlFor="toggle">Show Message</label>
            <input
                id="toggle"
                type="checkbox"
                onChange={e => setShowMessage(e.target.checked)}
                checked={showMessage}
            />
            {showMessage ? children : null}
        </div>
    )
}
