"use client"
import React, { useEffect, useState } from 'react'

import SVG from "react-inlinesvg"
import dayjs from 'dayjs';

const userDetails = [
    { title: "First Name", value: "fname" },
    { title: "Last Name", value: "lname" },
    { title: "Email", value: "email" },
    { title: "Password", value: "password" },
];

const Profile = () => {
    const [userData, setUserData] = useState({})
    const [isProfileEdit, setIsProfileEdit] = useState(false);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchUserData();
    }, []);


    async function fetchUserData() {
        setLoading(true);
        try {
            let response = await fetch("http://localhost:3400/data")
            let result = await response.json();
            setUserData(result[0]);
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    }

    // const date = dayjs(userData.createdAt)


    return (
        loading ? (
            <div className='text-center py-4'>
                <SVG src='/assets/icons/loading.svg' className='inline w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600' />
            </div>
        ) : (
            <div className="bg-white dark:bg-gray-700">
                <div className="container p-3 sm:p-5 max-w-7xl mx-auto">
                    <div className="md:flex no-wrap md:-mx-2 ">
                        <div className="w-full md:w-3/12 md:mx-2 shadow-lg">
                            <div className="bg-white dark:bg-gray-800 p-3 border-t-4 border-blue-800 dark:border-black">
                                <h1 className="text-gray-900 dark:text-white font-bold text-xl leading-8 my-1">{userData.fname} {userData.lname}</h1>
                                <ul
                                    className="bg-gray-100 dark:bg-gray-800 dark:text-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li className="flex items-center py-3">
                                        <span>Status</span>
                                        <span className="ml-auto"><span
                                            className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                    </li>
                                    <li className="flex md:block lg:flex items-center py-3">
                                        <p>Member since</p>
                                        {/* <p className="ml-auto"> {date.format("DD MMM ,YYYY")}</p> */}
                                    </li>
                                </ul>
                            </div >
                            <div className="my-4"></div>
                        </div >
                        <div className="w-full md:w-9/12 sm:mx-2 h-64 shadow-lg">
                            <div className="bg-white dark:bg-gray-700 p-3 shadow-sm rounded-sm">
                                <div className="flex justify-between items-center space-x-2 font-semibold text-gray-900 dark:text-white leading-8 sm:mr-8">
                                    <div className='flex'>
                                        <span>
                                            <i className="fa-solid fa-user text-lg px-3"></i>
                                            {/* <svg className='text-lg' height="25" width="25" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 60.671 60.671" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <ellipse style={{ fill: "#010002" }} cx="30.336" cy="12.097" rx="11.997" ry="12.097"></ellipse> <path style={{ fill: "#010002" }} d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9 C48.354,35.818,42.661,30.079,35.64,30.079z"></path> </g> </g> </g></svg> */}
                                        </span>
                                        <span className="tracking-wide">About</span>
                                    </div>
                                    <button>
                                        <i onClick={() => setIsProfileEdit(true)} className="fa-regular fa-pen-to-square text-2xl"></i>
                                    </button>
                                </div>
                                <div className="text-gray-700 dark:text-white">
                                    <div>
                                        {userDetails.map((details, index) => (
                                            <div key={index} className="sm:grid sm:grid-cols-2 flex justify-between">
                                                <div className="sm:px-4 py-2 font-semibold">{details.title} :</div>
                                                {userData[details.value] ? <div className="sm:px-4 py-2">{userData[details.value]}</div> : <p className='px-4 py-2'>Not Added</p>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                {/* <ProfileUpdateModal show={isProfileEdit} setShow={setIsProfileEdit} userData={userData} setUserData={setUserData} /> */}
            </div >)
    )
}

export default Profile;