import React, { Component } from 'react';

class GifList extends Component{
    render(){
        return(
            <div>
                <ul>
                    {this.props.giphys.map(g => <li><img src={g.images.original.url} key={g.id} alt={g.title} /></li>)}
                </ul>
            </div>
        )
    }
}

export default GifList;