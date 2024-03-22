import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SVG from "react-inlinesvg"
import fetchApi from '../../../utils/helper'
import { API_ENDPOINTS } from '../../../constants/api'
import { toast } from 'react-toastify'
import TeacherAnswerDoubt from '../../shared/pop-up/teacher-answer-doubt'


const DoubtAnswer = () => {
    const [doubts, setDoubts] = useState([]);
    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit] = useState("");
    const [editedDoubt, setEditedDoubt] = useState({})
    const userData = JSON.parse(localStorage.getItem('userData'))

    useEffect(() => {
        fetchDoubts();
    }, [])


    const fetchDoubts = async () => {
        if (userData.user_role === "student") {
            try {
                let response = await fetchApi({ url: API_ENDPOINTS.DOUBTS_STUDENT, isAuthRequired: true, method: "GET" })
                setDoubts(response.data)
            } catch (error) {
                toast.error("Error to fetch Doubt list")
            }
        } else {
            try {
                let response = await fetchApi({ url: API_ENDPOINTS.DOUBTS_ADMIN, isAuthRequired: true, method: "GET" })
                setDoubts(response.data)
            } catch (error) {
                toast.error("Error to fetch Doubt list")
            }
        }
    }

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                {doubts.map((ele, index) => (
                    ele.dt_isAnswerd &&
                    <div key={index} className="w-full mx-auto sm:px-6 lg:px-8 sm:py-6 lg:py-8">
                        <div className="overflow-hidden shadow-md">
                            <div className='p-6 pb-0 border-b border-gray-200'>
                                <div class="mb-2">Doubt Topic :- <span class="font-bold">{ele.dt_topic}</span></div>
                                <div class="mb-2">Doubt Description :- <span class="font-bold">{ele.dt_desc}</span></div>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-900 border-b border-gray-200">
                                <h1 className='font-bold text-lg pb-2'>Answer:-</h1>
                                {ele.dt_answer}
                            </div>
                            {
                                userData.user_role === "teacher" &&
                                <div className="p-6 flex justify-between items-center bg-white dark:bg-gray-900 border-gray-200 text-right">
                                    <div className='flex items-center gap-4'>
                                        <SVG src="/assets/icons/edit.svg" className='cursor-pointer' onClick={() => {
                                            setIsEdit(ele._id)
                                            setShow(true)
                                            setEditedDoubt(ele)
                                        }} />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                ))}
            </div>
            <TeacherAnswerDoubt show={show} setShow={setShow} isEdit={isEdit} doubt={editedDoubt} setDoubts={setDoubts} />
        </>
    )
}

export default DoubtAnswer