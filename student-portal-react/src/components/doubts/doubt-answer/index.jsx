import React from 'react'
import { Link } from 'react-router-dom'
import SVG from "react-inlinesvg"


const DoubtAnswer = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
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
                                    {/* <SVG src="/assets/icons/edit.svg" className='cursor-pointer' onClick={() => setShow(true)} />
                                    <i className="fa-solid fa-trash text-red-500 cursor-pointer" onClick={() => setShow(true)}></i> */}
                                </div>
                                <Link className="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 rounded uppercase"
                                    href={`/doubts`}>Show full</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DoubtAnswer