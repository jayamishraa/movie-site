import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

function Description() {
    const [movieData, setMovieData] = useState({})
    
    const movieReducer = useSelector(state => state.movieReducer)
    const { searchId } = movieReducer

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGJkMjZkNGVhZTk1YjA2Njc3Y2RhZDQ4ZWQ5YzFiNiIsInN1YiI6IjY0ZWNhMmY2YzNjODkxMDEwMDdlMjZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uWWFZy252PFaNs4hBBN4jw0_gvv9DzZ-vTdyZ_F1Yxo'
        }
      };
      
    const getSearchApiData = async() =>{
        try{
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${searchId}?language=en-US`, options)
            setMovieData(res.data)
    
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getSearchApiData()
    },[])

    console.log(movieData)
    
    return (
        <div className='description'>
            <div>
                <img 
                    className='description-img' 
                    src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} 
                    height='450' 
                    width='auto' 
                    alt='image'
                />
            </div>
            <div className='description-content'>
                <h1>{movieData.original_title}</h1>
                <h4>Genres:   
                    {/* {movieData.genres.map(genre => {
                        return(
                            <>{genre.name}  </>
                        )
                    })} */}
                </h4>
                
                <div>Description: {movieData.overview}</div>
                <div>Language: {movieData.original_language}</div>    
                <div>Popularity: {movieData.popularity} </div>   
                <div>Released on: {movieData.release_date}</div>    
                <div>Ratings: {movieData.vote_average} </div>   
                <div>Release date: {movieData.release_date}</div> 
            </div>
               
        </div>
    )
}

export default Description
