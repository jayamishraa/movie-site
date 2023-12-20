import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Sidebar() {

  const initialReducer = useSelector(state => state.initialReducer)
  const {isSidebar} = initialReducer

  return (
    <div className={isSidebar ? "sidebar" : "sidebar toggle-off"}>
      <span>
        <Link to='/' style={{color:'white'}}>
          <i class="fa-solid fa-house"></i>
        </Link>
      </span>

        {/* <i class="fa-solid fa-magnifying-glass"></i>
        <div>Movies</div> */}
      <span>
        <Link to='/discover' style={{color:'white', textDecoration: 'none'}}>
          <div>Discover</div>
        </Link>
      </span>
        {/* <i class="fa-solid fa-bell"></i> */}
    </div>
  )
}

export default Sidebar