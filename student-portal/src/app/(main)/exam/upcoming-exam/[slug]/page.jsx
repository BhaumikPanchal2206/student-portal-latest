import React from 'react'

import Link from 'next/link'
import SVG from "react-inlinesvg"

const ExamDetails = () => {
    return (
        <>
            <div className='px-4 py-3'>
                <div className="border-2 border-black dark:border-gray-100 inline-block rounded-full p-1 bg-white dark:bg-gray-800">
                    <Link href="/exam/upcoming-exam" className="overflow-hidden rounded-full cursor-pointer">
                        <SVG src="/assets/icons/left-arrow.svg" className='text-black dark:text-white' />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ExamDetails