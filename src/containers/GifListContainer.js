import React, { Component } from 'react';
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component
{
    state = 
    {
        gifs: []
    }

    fetchGifs = (query = "dolphin") =>
    {
        const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`

        fetch(url)
            .then(resp => resp.json())
            .then(gifs => this.gifMapper(gifs))
    }

    gifMapper = (arrayOfGifs) =>
    {
        const gifArray = arrayOfGifs.data.map(gif => 
        {
            return gif.images.original.url;
        }).slice(0,3);

        this.setState(
        {
            gifs: gifArray
        });
    }

    componentDidMount()
    {
        this.fetchGifs();
    }

    render()
    {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

export default GifListContainer;