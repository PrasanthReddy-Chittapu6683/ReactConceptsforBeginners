import React, { Component } from 'react'

class FromHandling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments: "",
            topic: "PRCV"
        }

    }
    onchangeHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    onchangeComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    onchangeTopics = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.userName}, ${this.state.comments}, ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
         
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>UserName:</label>
                        <input type="text" value={this.state.userName} onChange={this.onchangeHandler}></input>{this.state.userName}
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea valeu={this.state.comments} onChange={this.onchangeComments}></textarea> {this.state.comments}
                    </div>
                    <div>
                        <label> Topics </label>
                        <select value={this.state.topic} onChange={this.onchangeTopics}>
                            <option value="Prasanth">Prasnth</option>
                            <option value="Tanu">Tanu</option>
                            <option value="Shashi">Shashi</option>
                            <option value="PRCV">PRCV</option>
                        </select>
                        {this.state.topic}
                    </div>
                    <div>
                        <button type="submit" > Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FromHandling
