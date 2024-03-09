import React, { useState } from 'react'

import SVG from "react-inlinesvg"
import ConfirmationModal from '../shared/pop-up/confirmation-modal';
import LogOut from '../shared/pop-up/log-out';

const Header = ({ isDark, setIsDark }) => {
    const [show, setShow] = useState(false);


    return (
        <>
            <div className="fixed w-full flex items-center justify-between h-14 text-white z-10 bg-blue-800">
                <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
                    <img
                        alt=''
                        className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
                        src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
                    />
                    <span className="hidden md:block">Bhaumik Panchal</span>
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
            {/* <ConfirmationModal show={show} setShow={setShow} type="logout" /> */}
            <LogOut show={show} setShow={setShow} />
        </>
    )
}

export default Header