import React from 'react'

import { Link, useLocation } from 'react-router-dom'

const ExamHeader = () => {
    const location = useLocation();

    const header_links = [
        // { name: "Result", href: "/exam/result" },
        { name: "Upcoming Exam", href: "/exam/upcoming-exam" },
        // { name: "Exam Fees", href: "/exam/exam-fees" },
    ]

    return (
        <>
            <div className="antialiased bg-gray-100 dark:bg-gray-900">
                <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
                    <div className="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row py-2">
                        <nav className="flex flex-col md:flex-row">
                            {header_links.map((ele, index) => (
                                <Link
                                    to={ele.href}
                                    key={index}
                                    className={`${location.pathname.startsWith(ele.href) && "!text-gray-900 !bg-gray-200"} px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900  hover:bg-gray-200  focus:outline-none focus:shadow-outline`}>
                                    {ele.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ExamHeader