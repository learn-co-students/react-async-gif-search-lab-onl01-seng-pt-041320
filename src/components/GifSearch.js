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
                <form align="right" >
                    <label>Enter a Search Term:</label><br></br>
                    <input type="text" name="search" /><br></br>
                    <input type="submit" onChange={event => this.handleQueryChange(event)} value={this.state.query} />
                </form>
            </div>
        )
    }
}

export default GifSearch;