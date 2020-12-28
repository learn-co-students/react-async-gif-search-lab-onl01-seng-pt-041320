import React, { Component } from 'react';

class GifList extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li>{this.props.giphys.map(g => <img src={g.images.original.url} key={g.id} alt={g.title} />)}</li>
                </ul>
            </div>
        )
    }
}

export default GifList;