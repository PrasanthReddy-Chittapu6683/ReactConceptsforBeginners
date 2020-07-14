import React, { Component } from 'react'
import './myStylesheet.css'

class Stylesheet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            colorFalg: true,
            colorName: ""
        }
        this.applyColorHandler = this.applyColorHandler.bind(this)
    }
    applyColorHandler() {
        this.setState({
            colorFalg: !this.state.colorFalg,
            colorName: this.state.colorFalg ? "danger font-bold" : ""
        })
    }
    
    render() {

        return (
            <div>
                Directly applying the css className: 
                <p className="primary">StyleSheets</p>
                Color Change based on the flag on clicking on button:
                <button onClick={this.applyColorHandler}>Apply Red color</button>
                <p className={this.state.colorName}>StyleSheets</p>
                Using template literals (multiple css classNames):
                <p className={`${this.state.colorName} font-italic`}>StyleSheets</p>



            </div>
        )
    }
}

export default Stylesheet
