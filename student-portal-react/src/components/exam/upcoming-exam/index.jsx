import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import fetchApi from '../../../utils/helper';
import { API_ENDPOINTS } from '../../../constants/api';
import { toast } from 'react-toastify';
import SVG from 'react-inlinesvg'

const UpcomingExam = () => {
    const [examData, setExamData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchDoubts();
    }, [])


    const fetchDoubts = async () => {
        setLoading(true)
        try {
            let response = await fetchApi({ url: API_ENDPOINTS.EXAM, isAuthRequired: true, method: "GET" })
            // let abc = await fetchApi({ url: API_ENDPOINTS.EXAM_ALL, isAuthRequired: true, method: "GET" })
            // console.log(abc)
            setExamData(response.data);
        } catch (error) {
            toast.error("Error to fetch Data!")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {
                loading ? (
                    <div className='text-center py-4'>
                        <SVG src='/assets/icons/loading.svg' className='inline w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600' />
                    </div>
                ) : (
                    <section className=" bg-gray-100 dark:bg-gray-700 px-4">
                        <div className="container">
                            <div className="-mx-4 py-4 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
                                {examData.map((ele, index) => (
                                    <div key={index} >
                                        <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden mb-4">
                                            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                                <h3>
                                                    <p
                                                        href="javascript:void(0)"
                                                        className="font-semibold text-black mb-3 dark:text-white duration-300 text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] block hover:text-primary "
                                                    >
                                                        {ele.exam_subject}
                                                    </p>
                                                </h3>
                                                <p className="text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-3">
                                                    Date :- {ele.exam_date}
                                                </p>
                                                <Link
                                                    to={`/exam/upcoming-exam/${ele._id}`}
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
                )
            }
        </>
    )
}

export default UpcomingExam