import React, { Component } from 'react';

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component{
    state = {
        gif: []
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=BRzpBD4aq2xAfR8ioC5XHlTZcYyp5Yc2&rating=g')
        .then(res => res.json())
        .then(giphys => {
            console.log(giphys.data)
            giphys.data.forEach((giphy) => this.setState({
                gif: giphy.images.original.url
            })
            )
        })
    }
    render(){
        return(
            <div>
                <GifSearch />
                <GifList giphys={this.state.gif}/>
            </div>
        )
    }
}

export default GifListContainer;