import React from 'react'

function PersonComp({person}) {
    return (
        <div>
            <li>I am {person.name}. My ID is {person.id} and i am {person.gender} </li>            
        </div>
    )
}

export default PersonComp
