import React, { useState, useEffect } from 'react'
import MovieContainer from '../components/MovieContainer'
import axios from 'axios'
// import MovieTile from '../components/MovieTile';

function Home() {
    const [movie, getMovie] = useState([])

    const options = {
          method: 'GET',
          headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGJkMjZkNGVhZTk1YjA2Njc3Y2RhZDQ4ZWQ5YzFiNiIsInN1YiI6IjY0ZWNhMmY2YzNjODkxMDEwMDdlMjZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uWWFZy252PFaNs4hBBN4jw0_gvv9DzZ-vTdyZ_F1Yxo'
            }
          };
    React.useEffect(()=>{
      fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then(response => response.json())
      .then(response => getMovie(response.results))
      .catch(err => console.error(err));
    }, [])
    
        
          // fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
          //   .then(response => response.json())
          //   .then(response => console.log(response.results))
          //   .catch(err => console.error(err));
        
        
        // const options = {
        //   headers: {
        //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGJkMjZkNGVhZTk1YjA2Njc3Y2RhZDQ4ZWQ5YzFiNiIsInN1YiI6IjY0ZWNhMmY2YzNjODkxMDEwMDdlMjZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uWWFZy252PFaNs4hBBN4jw0_gvv9DzZ-vTdyZ_F1Yxo'
        //   }
        // };
        
        // React.useEffect(async ()=> {
        //   try{
        //     const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        //     getMovie(response.data.results)
        //   } catch (err) {
        //     console.log(err)
        //   }
        // })

  return (
    <div className='home'>
        <MovieContainer />

        <h3 style={{color: '#fafafa'}}> Trending now</h3>
        <div className='home-movies'>
          {movie.map(val => {
            const {id, title, poster_path} = val
            return(
              // <div>
              //   <MovieTile
              //     key={id}
              //     title={title}
                  // img={poster_path} 
              //   />
              // </div>
            <div className='movie-tile'>
              <div className='movie-tile-content'> 
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} style={{width: 150}} />
                <h5 style={{color: '#fafafa'}}>{title}</h5>
              </div>
            </div>
            )
          })} 
        </div>

    </div>
  )
}

export default Home