import React, { useContext, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import SVG from "react-inlinesvg"
import ConfirmationModal from '../shared/pop-up/confirmation-modal';
// import LogOut from '../shared/pop-up/log-out';

const Header = ({ isDark, setIsDark }) => {
    const [show, setShow] = useState(false);
    const userData = JSON.parse(localStorage.getItem('userData'))
    const navigate = useNavigate();

    const handleSubmit = () =>{
        localStorage.removeItem("userData");
        localStorage.removeItem("expiry");
        localStorage.removeItem("auth");   
    }
    
    return (
        <>
            <div className="fixed w-full flex items-center justify-between h-14 text-white z-10 bg-blue-800">
                <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
                    <img
                        alt=''
                        className="hidden md:block w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
                        src="/assets/images/dummy-image.jpg"
                    />
                    <span className="hidden md:block">{userData.user_fname} {userData.user_lname}</span>
                    <div className='block md:hidden relative bg-gray-100 dark:bg-gray-900 w-9 h-9 sm:w-11 sm:h-11 rounded-full text-gray-800 dark:text-gray-100 text-lg sm:text-xl'>
                        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{userData.user_fname.charAt(0).toUpperCase() + userData.user_lname.charAt(0).toUpperCase()}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
                    <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
                        <button className="outline-none focus:outline-none">
                            <SVG src='/assets/icons/search.svg' />
                        </button>
                        <input
                            type="search"
                            name=""
                            id=""
                            placeholder="Search"
                            className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
                        />
                    </div>
                    <ul className="flex items-center">
                        <li>
                            <button
                                onClick={() => {
                                    setIsDark((pre) => !pre)
                                    localStorage.setItem("theme", isDark ? "light" : "dark")
                                }}
                                aria-hidden="true"
                                className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
                            >
                                {isDark ? <SVG src='/assets/icons/star.svg' /> : <SVG src='/assets/icons/night.svg' />}
                            </button>
                        </li>
                        <li>
                            <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700" />
                        </li>
                        <li>
                            <div
                                onClick={() => setShow(true)}
                                className="flex items-center mr-4 hover:text-blue-100 cursor-pointer">
                                <span className="inline-flex mr-1">
                                    <SVG src='/assets/icons/logout.svg' />
                                </span>
                                Logout
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <ConfirmationModal show={show} setShow={setShow} type="logout" handleSubmit={handleSubmit}  />
        </>
    )
}

export default Header