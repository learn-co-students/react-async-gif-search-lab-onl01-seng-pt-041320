import React, { Component } from 'react';

class GifList extends Component
{
    render()
    {
        return (
            <div>
                {this.props.gifs.map(gif => <img key={gif} src={gif} alt="gif" />)}
            </div>
        )
    }
}

export default GifList;