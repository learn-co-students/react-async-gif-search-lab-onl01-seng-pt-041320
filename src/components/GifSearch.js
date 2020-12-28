import React, { Component } from 'react';

class GifSearch extends Component{
    state = {
        query: "",
        submittedData: []
    }

    handleQueryChange = event => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        let formData = {query: this.state.query};
        let data_arr = this.state.submittedData.concat(formData);
        this.setState({submittedData: data_arr});
    }

    render(){
        return(
            <div>
                <form align="right" onSubmit={event => this.handleSubmit(event)}>
                    <label>Enter a Search Term:</label><br></br>
                    <input type="text" onChange={event => this.handleQueryChange(event)} value={this.state.query} /><br></br>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default GifSearch;