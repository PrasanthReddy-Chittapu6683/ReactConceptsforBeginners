import React from 'react'

function ChildComponent(props) {
    return (

        <div>
            <button onClick={props.greethandler}>Geet parent</button>
            <button onClick={()=>props.greetHandlerArrowFun("from Child")}>Geet parent from Child- ArrowFunction</button>
        </div>
    )
}

export default ChildComponent
