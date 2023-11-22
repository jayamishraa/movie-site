import React from 'react'

function MovieTile({id}, {title}) {
  return (
      <div className='movie-tile'>
        {title}
    </div>
  )
}

export default MovieTile
