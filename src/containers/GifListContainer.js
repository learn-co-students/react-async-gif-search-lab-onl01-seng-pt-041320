import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  state = {
    gifs: []
  }

  componentDidMount(){
    this.fetchGifs()
  }

  fetchGifs = query => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=cgPqe19Oclhw8TjwctMnPN5lL1d7T9mp&rating=g`)
      .then(res => res.json())
      .then(data => this.setState({gifs: data.data.slice(0, 3)}))
  }

  submitHandler = query => {
    this.fetchGifs(query)
  }

  render(){
    return(
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch submitHandler={this.submitHandler}/>
      </div>
    )
  }
}