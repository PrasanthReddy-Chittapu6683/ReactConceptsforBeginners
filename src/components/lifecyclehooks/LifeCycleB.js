import React, { Component } from 'react'


class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Tanu"
        }
        console.log('LifeCycleB constructor()')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps()')
        return null;
    }
    componentDidMount() {
        console.log('LifeCycleB componentDidMount()')

    }
    render() {
        console.log('LifeCycleB render()')

        return (
            <div>
                <div>
                    LifeCycleB (Child Component) - Check the Console.log to see the order of execution
                </div>

            </div>
        )
    }
}

export default LifeCycleB
