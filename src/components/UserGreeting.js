import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isloggedin: true,
            ifElseFuncVal: true,
            ElementVariableVal: true
        }
    }
    ifElseFunc(loggedin) {
        if (loggedin) {
            return (<div>
                <b>Using if/Else</b>
                <div>Welcome Prasanth</div>
            </div>)
        } else {
            return (
                <div>

                    <b>Using if/Else</b>
                    <div>Welcome Guest</div>
                </div>
            )
        }
    }
    render() {
        /** Using if/Else*/

        // if (this.state.ifElseFuncVal) {
        //   return  this.ifElseFunc(this.state.isloggedin)
        // }
        /** Using ElementVariables*/
        // if (this.state.ElementVariableVal) {
        //     let message
        //     if (this.state.isloggedin) {
        //         message = <div> <b>Using ElementVariables</b> <div>Welcom Prasanth</div></div>
        //     } else {
        //         message = <div> <b>Using ElementVariables</b>Us: <div>Welcom Guest</div></div>
        //     }
        //     return (
        //         <div>{message}</div>
        //     )
        // }
        /** Ternary Conditional Operators*/
        // return(
        //     this.state.isloggedin?(<div><b>Ternary Conditional Operators</b> Welcome Prasath</div>):<div><b>Ternary Conditional Operators</b> Welcome Guest</div>
        // )
        /** Using Short circuit operator*/
        return this.state.isloggedin && <div><b>Using Short circuit operator</b> Welcome Prasanth</div>


    }
}

export default UserGreeting
