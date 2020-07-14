import React from 'react'

const heading = {
    fontSize: '20px',
    color: 'blue'
}
function InlineStylesheet() {
    return (
        <div>
            Using Inline styles:
            <span style={heading}>
                Inline
             </span>
        </div>
    )
}

export default InlineStylesheet
