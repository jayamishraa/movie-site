import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { search } from '../Redux/Actions';

function TopRated() {
    const dispatch = useDispatch()
    const [discoverData, setDiscoverData] = useState([])

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGJkMjZkNGVhZTk1YjA2Njc3Y2RhZDQ4ZWQ5YzFiNiIsInN1YiI6IjY0ZWNhMmY2YzNjODkxMDEwMDdlMjZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uWWFZy252PFaNs4hBBN4jw0_gvv9DzZ-vTdyZ_F1Yxo'
        }
    };
    
    const getDiscoverApi = async() => {
        try{
            const res = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
            setDiscoverData(res.data.results)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=> {
        getDiscoverApi()
    },[])

    return (
        <div className='home-movies'>

            {discoverData.map(val => {
                const {id, title, poster_path} = val
                return(
                    <div className='movie-tile'>
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
        <Outlet />
      </div>
    )
}

export default TopRated
