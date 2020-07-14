import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: "Hello"
        }

        this.classClickHandler = this.classClickHandler.bind(this)
    }
    classClickHandler() {
        if (this.state.msg === "Hello") {
            this.setState({
                msg: "GoodBye"
            })
        } else {
            this.setState({
                msg: "Hello"
            })
        }

    }
    classClickHandlerArrow = () => {
        this.classClickHandler()
    }
    render() {
        return (
            <div>
                <div>{this.state.msg}</div>
                <button title="onClick" onClick={this.classClickHandler.bind(this)}>ClassComp-EventBinding</button>
                <button title="onClick" onClick={() => this.classClickHandler()}>ClassComp-arrowFuncApproach</button>
                <button title="onClick" onClick={this.classClickHandler}>ClassComp-ConstructorBinding</button>
                <button title="onClick" onClick={this.classClickHandlerArrow}>ClassComp-ConstructorBinding</button>
            </div>
        )
    }
}

export default EventBind
