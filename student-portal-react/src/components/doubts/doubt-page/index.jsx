import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import SVG from "react-inlinesvg"
import AddDoubtForm from '../../shared/pop-up/doubt-add-form'
import fetchApi from '../../../utils/helper'
import { API_ENDPOINTS } from '../../../constants/api'
import { toast } from 'react-toastify'

const DoubtPage = () => {
    const [doubts, setDoubts] = useState([])
    const [show, setShow] = useState(false);
    const userData = JSON.parse(localStorage.getItem('userData'));

    useEffect(() => {
        fetchDoubts();
    }, [])


    const fetchDoubts = async () => {
        try {
            let response = await fetchApi({ url: API_ENDPOINTS.DOUBTS_STUDENT, isAuthRequired: true, method: "GET" })
            setDoubts(response.data)
        } catch (error) {
            toast.error("Error to fetch Doubt list")
        }
    }

    return (
        <>
            {userData.user_role === "student" ? (
                <>
                    <div className='p-4'>
                        <button
                            onClick={() => setShow(true)}
                            className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                            <SVG src="/assets/icons/plus.svg" className='w-4 h-4 inline mr-3' />
                            Add Doubt
                        </button>
                    </div>
                    {show && <AddDoubtForm setShow={setShow} setDoubts={setDoubts} />}

                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                        {doubts.map((ele, index) => (
                            <div key={index} className="w-full mx-auto sm:px-6 lg:px-8 sm:py-6 lg:py-8">
                                <div className="overflow-hidden shadow-md">
                                    <div className="px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 font-bold uppercase">
                                        {ele.dt_topic}
                                    </div>
                                    <div className="p-6 bg-white dark:bg-gray-900 border-b border-gray-200">
                                        {ele.dt_desc}
                                    </div>
                                    <div className="p-6 flex justify-between items-center bg-white dark:bg-gray-900 border-gray-200 text-right">
                                        <div className='flex items-center gap-4'>
                                            <SVG src="/assets/icons/edit.svg" className='cursor-pointer' onClick={() => setShow(true)} />
                                            <i className="fa-solid fa-trash text-red-500 cursor-pointer" onClick={() => setShow(true)}></i>
                                        </div>
                                        {/* <Link className="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 rounded uppercase"
                                            href={`/doubts`}>Show full</Link> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="max-w-2xl mx-auto sm:px-6 lg:px-8 sm:py-6 lg:py-8">
                                <div className="overflow-hidden shadow-md">
                                    <div className="px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 font-bold uppercase">
                                        Topic heading
                                    </div>
                                    <div className="p-6 bg-white dark:bg-gray-900 border-b border-gray-200">
                                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book.
                                    </div>
                                    <div className="p-6 flex justify-between items-center bg-white dark:bg-gray-900 border-gray-200 text-right">
                                        <Link className="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 rounded uppercase"
                                            href="/doubts">Show full</Link>
                                        <button className="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 rounded uppercase"
                                        >Answer</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="max-w-2xl mx-auto sm:px-6 lg:px-8 sm:py-6 lg:py-8">
                                <div className="overflow-hidden shadow-md">
                                    <div className="px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 font-bold uppercase">
                                        Topic heading
                                    </div>
                                    <div className="p-6 bg-white dark:bg-gray-900 border-b border-gray-200">
                                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book.
                                    </div>
                                    <div className="p-6 flex justify-between items-center bg-white dark:bg-gray-900 border-gray-200 text-right">
                                        <div className='flex items-center gap-4'>
                                            <SVG src="/assets/icons/edit.svg" className='cursor-pointer' onClick={() => setShow(true)} />
                                            <i className="fa-solid fa-trash text-red-500 cursor-pointer" onClick={() => setShow(true)}></i>
                                        </div>
                                        <Link className="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 rounded uppercase"
                                            href="/doubts">Show full</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>

    )
}

export default DoubtPage