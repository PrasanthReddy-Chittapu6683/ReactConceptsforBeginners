import React, { Component } from 'react'

class ClassCompClickEvent extends Component {
    classClickHandler() {
        alert("Class Comp Click Event")
    }
    render() {
        return (
            <div>
                <button onClick={this.classClickHandler}> Class Comp Click Event </button>
            </div>
        )
    }
}

export default ClassCompClickEvent
