import React from 'react'

function FunctionCompClickEvent() {
    function clickHandler() {
        alert('functionalComp - Clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Function Comp Click Event</button>
        </div>
    )
}
export default FunctionCompClickEvent