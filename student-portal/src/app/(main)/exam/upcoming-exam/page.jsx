import React from 'react'

import Link from 'next/link'

const UpcomingExam = () => {
    return (
        <>
            <section className=" bg-gray-100 dark:bg-gray-700 px-4">
                <div className="container">
                    <div className="-mx-4 py-4 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((_, index) => (
                            <div key={index} >
                                <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden mb-4">
                                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                        <h3>
                                            <p
                                                href="javascript:void(0)"
                                                className="font-semibold text-black mb-3 dark:text-white duration-300 text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] block hover:text-primary "
                                            >
                                                English Exam
                                            </p>
                                        </h3>
                                        <p className="text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-3">
                                            Date:-25-02-2023
                                        </p>
                                        <Link
                                            href={`/exam/upcoming-exam/abc`}
                                            className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-black dark:text-gray-100 font-medium hover:border-primary hover:bg-primary hover:text-white transition"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default UpcomingExam