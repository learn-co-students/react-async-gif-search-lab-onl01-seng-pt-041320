import React from 'react';

class GifList extends React.Component {
    render() {
        const gifs = this.props.gifs.slice(0, 3)
        return (
                <ul>
                    {gifs.map(gif => <li key={gif.id}><img src={gif.images.original.url} alt={gif.title} /></li>)}
                </ul>
        )
    }
}

export default GifList;