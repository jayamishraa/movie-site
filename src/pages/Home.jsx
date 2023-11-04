import React, { useState } from 'react'
import MovieContainer from '../components/MovieContainer'
import axios from 'axios'

function Home() {
    // const [movie, getMovie] = useState([])

    // React.useEffect(()=>{
    //     axios.get('https://www.themoviedb.org/tv')
    //     .then(response => console.log(response))
        
    // }, [])

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer 2dbd26d4eae95b06677cdad48ed9c1b6'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

  return (
    <div className='home'>
        <MovieContainer />
    </div>
  )
}

export default Home