import React from 'react'
import { useSelector } from "react-redux";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";


function Main() {
    const initialReducer = useSelector(state => state.initialReducer)
    const { isDropdown, isSidebar } = initialReducer
    return (
        <div className='Main'>
            <Header />
            { isDropdown && <Dropdown />}
            { isSidebar && <Sidebar />}
            <div className={isSidebar ? "dynamic-container" : "dynamic-container-expanded"}> </div>
            <Outlet />
        </div> 
    )
}

export default Main;
