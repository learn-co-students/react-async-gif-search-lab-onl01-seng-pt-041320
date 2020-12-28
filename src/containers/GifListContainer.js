import React, { Component } from 'react';

class GifListContainer extends Component{
    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=BRzpBD4aq2xAfR8ioC5XHlTZcYyp5Yc2')
    }
    render(){
        return(
            <div></div>
        )
    }
}

export default GifListContainer