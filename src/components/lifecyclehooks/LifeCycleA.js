import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Prasanth"
        }
        console.log('LifeCycleA constructor()')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps()')
        return null;
    }
    componentDidMount() {
        console.log('LifeCycleA componentDidMount()')

    }
    render() {
        console.log('LifeCycleA render()')

        return (
            <div>
                <div>
                    LifeCycleA - Check the Console.log to see the order of execution
                </div>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifeCycleA
