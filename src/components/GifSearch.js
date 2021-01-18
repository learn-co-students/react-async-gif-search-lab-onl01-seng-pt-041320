import React from 'react'

class GifSearch extends React.Component {

    state = {
        searchTerm: '' 
      };

    handleInputChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        this.props.submit(this.state.searchTerm);
        event.preventDefault()
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
            Search
            <input id="searchTerm" name="searchTerm" type="text" onChange={event => this.handleInputChange(event)} value={this.state.searchTerm} />
            </label>
            <button type="submit">Submit</button>
            </form>
        )
    }
}

export default GifSearch