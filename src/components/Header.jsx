import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dropdown, sidebar } from '../Redux/Actions';


function Header() {

  const dispatch = useDispatch()
  const initialReducer = useSelector(state => state.initialReducer)
  const {isDropdown, isSidebar} = initialReducer

  const setDropdown = () => {
    dispatch(dropdown(!isDropdown))
  }
  const setSidebar = () => {
    dispatch(sidebar(!isSidebar))
  }

  return (
    <div className="header">
        <i class="fa-solid fa-bars" onClick={setSidebar}></i>
        <div>Movie-Site</div>
        <div onClick={setDropdown}>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-angle-down"></i>
        </div>
    </div>

  )
}

export default Header