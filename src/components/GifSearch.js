import React, { Component } from 'react';

class GifSearch extends Component
{
    state =
    {
        search: ""
    }

    handleOnSubmit = event =>
    {
        event.preventDefault();

        this.props.fetchGifs(this.state.query);
    }

    stateSetting = (event) =>
    {
        this.setState(
            {
                query: event.target.value
            }
        );
    }

    render()
    {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" onChange={event => this.stateSetting(event)} value={this.state.query} />
                </form>
            </div>
        );
    }
}

export default GifSearch;