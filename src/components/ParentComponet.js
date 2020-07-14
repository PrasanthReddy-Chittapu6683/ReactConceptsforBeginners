import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msgVal: "Parent Comp"
        }
        this.geetParentComp = this.geetParentComp.bind(this)
        this.greetParentCompArrow = this.greetParentCompArrow.bind(this)
    }
    geetParentComp() {
        alert(`Hello ${this.state.msgVal} `)
    }
    greetParentCompArrow(childName) {
        alert(`Hello ${this.state.msgVal} from ${childName}`)

    }
    render() {
        return (
            <div>
                <h1>Methods as Props</h1>
                <ChildComponent greethandler={this.geetParentComp}  greetHandlerArrowFun={this.greetParentCompArrow}></ChildComponent>
                {/* <button>click</button> */}
            </div>
        )
    }
}

export default ParentComponet
