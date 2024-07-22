import React, { useState, useEffect } from 'react'
import MovieContainer from '../components/MovieContainer'
import axios from 'axios'
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { trending, search } from '../Redux/Actions';


function Home() {
    const dispatch = useDispatch()
    const movieReducer = useSelector(state => state.movieReducer)
    const { trendingApi } = movieReducer
    
    const options = {
      method: 'GET',
      headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGJkMjZkNGVhZTk1YjA2Njc3Y2RhZDQ4ZWQ5YzFiNiIsInN1YiI6IjY0ZWNhMmY2YzNjODkxMDEwMDdlMjZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uWWFZy252PFaNs4hBBN4jw0_gvv9DzZ-vTdyZ_F1Yxo'
        }
      };
   
    const getApiData = async() =>{
      try{
        const res = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        dispatch(trending(res.data.results))

      } catch (err) {
        console.log(err)
      }
    }

    useEffect(() => {
      getApiData()
    },[])

  return (
    <div className='home'>
      <MovieContainer />

      <h3 style={{color: '#fafafa', margin: '20px'}}> Trending now</h3>

      <div className='home-movies'>
        {trendingApi.map(val => {
          const {id, title, poster_path} = val
          return(
            <div className='movie-tile' key={id}>
              <div className='movie-tile-content'> 
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} style={{width: 150}} />
                <h5 style={{color: '#fafafa'}}>{title}</h5>
                <Link to='/detail'>
                  <button onClick={()=> dispatch(search(id))}>details</button>
                </Link>
              </div>
            </div>
          )
        })} 
      </div>
      <Outlet />
    </div>
  )
}

export default Home