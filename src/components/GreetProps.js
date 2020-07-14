import React from 'react';



const Greet = props => {
    return (
        <div>
            <h4>Hello {props.name} aka - {props.heroName}</h4>
            {props.children}
        </div>
    )
}

// Below syntax is for Destructring
// const Greet = ({name, heroName}) => {
//     return (
//         <div>
//             <h4>Hello {name} aka - {heroName}</h4>
//             {/* {props.children} */}
//         </div>
//     )
// }

export default Greet;
