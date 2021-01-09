import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=HTqv2ybTPB3yfjVOG0ozTOrDJ1Eu98Qp&rating=g')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                gifs: data.data
            })
        })
    }

    handleSubmit = (input) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=HTqv2ybTPB3yfjVOG0ozTOrDJ1Eu98Qp&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                gifs: data.data
            })
        })
    }

    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit}/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

}

export default GifListContainer;