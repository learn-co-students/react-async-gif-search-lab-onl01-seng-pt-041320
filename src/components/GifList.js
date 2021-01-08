import React from 'react'

const GifList = props =>
  <ul>
    {props.gifs.map(gif => (
      <li><img alt={gif.title} src={gif.images.original.url} /></li>
    ))}
</ul>

export default GifList