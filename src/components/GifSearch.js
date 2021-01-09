import React, { Component } from 'react'

class GifSearch extends Component{

    state = {
        query: ""
    }

    handleChange = event => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleSubmit(this.state.query)
    }

    render() {
        return(
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" onChange={event => this.handleChange(event)} value={this.state.query} />
                    <input type="submit"/>
                </form>
        )
    }
}

export default GifSearch