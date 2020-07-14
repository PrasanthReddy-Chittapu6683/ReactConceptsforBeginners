import React, { Component } from 'react'

class NameListRender extends Component {
    render() {
        const names = ["Prasanth", "Tanu", "Shashi", "PRCV"];
        const nameList = names.map(a => <li key={a}> {a}  </li>)
        return (
            <div>
                <ul>
                    {nameList}
                </ul>
            </div>
        )
    }
}

export default NameListRender
