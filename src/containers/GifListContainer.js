import React, { Component } from 'react';

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component{
    state = {
        gif: []
    }

    handleSubmit = input => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=BRzpBD4aq2xAfR8ioC5XHlTZcYyp5Yc2&rating=g`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                gif: data.data
            })
        });
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=BRzpBD4aq2xAfR8ioC5XHlTZcYyp5Yc2&rating=g')
        .then(res => res.json())
        .then(giphys => {
            let gif_arr = giphys.data.slice(0, 3);
            this.setState({
                gif: gif_arr
            })
        })
    }

    render(){
        return(
            <div>
                <GifSearch handlesubmit={this.handleSubmit}/>
                <GifList giphys={this.state.gif}/>
            </div>
        )
    }
}

export default GifListContainer;