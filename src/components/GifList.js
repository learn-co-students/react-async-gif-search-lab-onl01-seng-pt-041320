import React, { Component } from 'react';

class GifList extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li>{this.props.giphys}</li>
                </ul>
            </div>
        )
    }
}

export default GifList;