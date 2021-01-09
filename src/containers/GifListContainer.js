import React from 'react' 
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  state ={ 
    gifs: []
  }

  render() {
    return (
    <div>
      <GifSearch getGifs={this.getGifs} />
      <GifList gifs={this.state.gifs} />
    </div>
    )
  }


  getGifs = (query = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=ZcHp9hlqFBGWlDvvke96T6KDIHODNkBk&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) )
      })
    })
  }

    componentDidMount() {
      this.getGifs()
    }
}
export default GifListContainer