import React from 'react'

import { Link } from 'react-router-dom'
import SVG from "react-inlinesvg"

const links = {
    "Main": [
        { name: "Dashboard", href: "/dashboard", svg_icon: <SVG src='/assets/icons/home.svg' /> },
        { name: "Exam", href: "/exam/result", svg_icon: <SVG src='/assets/icons/board.svg' /> },
        { name: "Doubts", href: "/doubts/doubt", svg_icon: <SVG src='/assets/icons/message.svg' /> },
        { name: "Attendance", href: "/attendance", svg_icon: <SVG src='/assets/icons/notification.svg' /> },
        { name: "Notes", href: "/notes", svg_icon: <i className="fa-solid fa-note-sticky"></i> },
    ],
    "Settings": [
        { name: "Profile", href: "/profile", svg_icon: <SVG src='/assets/icons/user.svg' /> },
        { name: "Settings", href: "/settings", svg_icon: <SVG src='/assets/icons/setting.svg' /> },
    ]
}

// const main_links = [
//     { name: "Dashboard", href: "/dashboard", svg_icon: <SVG src='/assets/icons/home.svg' /> },
//     { name: "Board", href: "/board", svg_icon: <SVG src='/assets/icons/board.svg' /> },
//     { name: "Message", href: "/message", svg_icon: <SVG src='/assets/icons/message.svg' /> },
//     { name: "Notification", href: "/notification", svg_icon: <SVG src='/assets/icons/notification.svg' /> },
// ]

// const setting_link = [
//     { name: "Profile", href: "/profile", svg_icon: <SVG src='/assets/icons/user.svg' /> },
//     { name: "Settings", href: "/setting", svg_icon: <SVG src='/assets/icons/setting.svg' /> },
// ]

const SideBar = () => {
    return (
        <div>
            <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 Header">
                <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                    <ul>
                        {Object.keys(links).map((ele, index) => (
                            <div key={index} className='flex flex-col py-4 space-y-1'>
                                <li className="px-5 hidden md:block">
                                    <div className="flex flex-row items-center h-8">
                                        <div className="text-sm font-light tracking-wide text-gray-400 uppercase">{ele}</div>
                                    </div>
                                </li>
                                {links[ele].map((value, index) => (
                                    <li key={index}>
                                        <Link to={value.href} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                            <span className="inline-flex justify-center items-center ml-4">
                                                {value.svg_icon}
                                            </span>
                                            <span className="ml-2 text-sm tracking-wide truncate">{value.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        ))}
                        {/* <li className="px-5 hidden md:block">
                            <div className="flex flex-row items-center h-8">
                                <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
                            </div>
                        </li>
                        {main_links.map((ele, index) => (
                            <l={index}>
                                <Link to={ele.href} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        {ele.svg_icon}
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">{ele.name}</span>
                                </Link>
                            </l=>
                        ))} */}

                        {/* <li>
                            <Link to="/" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <SVG src='/assets/icons/home.svg' />
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <SVG src='/assets/icons/board.svg' />
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Board</span>
                                <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">New</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <SVG src='/assets/icons/message.svg' />
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Messages</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <SVG src='/assets/icons/notification.svg' />
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Notifications</span>
                                <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
                            </Link>
                        </li> */}

                        {/* <li className="px-5 hidden md:block">
                            <div className="flex flex-row items-center mt-5 h-8">
                                <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
                            </div>
                        </li>
                        {setting_link.map((ele, index) => (
                            <l={index}>
                                <Link to={ele.href} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        {ele.svg_icon}
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">{ele.name}</span>
                                </Link>
                            </l=>
                        ))} */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar;