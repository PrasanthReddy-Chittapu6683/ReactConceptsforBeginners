import React, { Component } from 'react'

class GreetState extends Component {

    render() {
        const { name, heroName } = this.props
        return (
            <div>
                <h4> Welcome State : {this.props.name} aka - {this.props.heroName} </h4>
                <h4>using Destructring</h4>
                <h4> Welcome State : {name} aka - {heroName} </h4>
            </div>
        )
    }


}

export default GreetState