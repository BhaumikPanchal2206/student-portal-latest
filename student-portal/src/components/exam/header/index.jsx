"use client"
import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation';

const ExamHeader = () => {
    const pathname = usePathname();

    const header_links = [
        { name: "Result", href: "/exam/result" },
        { name: "Upcoming Exam", href: "/exam/upcoming-exam" },
        { name: "Exam Fees", href: "/exam/exam-fees" },
    ]

    return (
        <>
            <div>
                <div className="antialiased bg-gray-100 dark:bg-gray-900">
                    <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
                        <div className="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row py-2">
                            <nav
                                className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:flex-row">
                                {header_links.map((ele, index) => (
                                    <Link
                                        href={ele.href}
                                        key={index}
                                        className={`${pathname.startsWith(ele.href) && "!text-gray-900 !bg-gray-200"} px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900  hover:bg-gray-200  focus:outline-none focus:shadow-outline`}>
                                        {ele.name}
                                    </Link>
                                ))}
                                {/* <div className="relative" x-data="{ open: true }">
                                    <button className="flex flex-row text-gray-900 bg-gray-200 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark:bg-transparent dark:focus:text-white dark:hover:text-white dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                        <span>More</span>
                                        <svg fill="currentColor" viewBox="0 0 20 20"
                                            // className="{'rotate-180': open, 'rotate-0': !open}"
                                            className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ExamHeader