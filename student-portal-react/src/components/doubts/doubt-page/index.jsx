import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import SVG from "react-inlinesvg"
import AddDoubtForm from '../../shared/pop-up/doubt-add-form'
import fetchApi from '../../../utils/helper'
import { API_ENDPOINTS } from '../../../constants/api'
import { toast } from 'react-toastify'
import ConfirmationModal from '../../shared/pop-up/confirmation-modal'
import TeacherAnswerDoubt from '../../shared/pop-up/teacher-answer-doubt'

const DoubtPage = () => {
    const [doubts, setDoubts] = useState([]);
    const [showTeacherAnswerPopUp, setShowTeacherAnswerPopUp] = useState(false)
    const [clickableDoubt, setClickableDoubt] = useState({})
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [deleteId, setDeleteId] = useState("")
    const [isEdit, setIsEdit] = useState("")
    const userData = JSON.parse(localStorage.getItem('userData'));

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

    const handleDeleteDoubt = async () => {
        try {
            let res = await fetchApi({ url: API_ENDPOINTS.DOUBTS_STUDENT, isAuthRequired: true, method: "DELETE", data: { _id: deleteId } })
            let response = await fetchApi({ url: API_ENDPOINTS.DOUBTS_STUDENT, isAuthRequired: true, method: "GET" })
            setDoubts(response.data)
        } catch (error) {
            toast.error("Error to delete Doubt list")
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
                    {show && <AddDoubtForm isEdit={isEdit} setShow={setShow} setDoubts={setDoubts} />}

                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                        {doubts.map((ele, index) => (
                            !ele.dt_isAnswerd &&
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
                                            <SVG src="/assets/icons/edit.svg" className='cursor-pointer' onClick={() => {
                                                setIsEdit(ele._id)
                                                setShow(true)
                                            }} />
                                            <i className="fa-solid fa-trash text-red-500 cursor-pointer" onClick={() => {
                                                setDeleteId(ele._id)
                                                setShowDelete(true)
                                            }}></i>
                                        </div>
                                        {/* <Link className="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 rounded uppercase"
                                            href={`/doubts`}>Show full</Link> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ConfirmationModal show={showDelete} setShow={setShowDelete} type={"deleteDoubt"} handleSubmit={handleDeleteDoubt} />
                </>
            ) : (
                <>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                        {doubts.map((ele, index) => (
                            !ele.dt_isAnswerd &&
                            <div key={index} className="w-full mx-auto sm:px-6 lg:px-8 sm:py-6 lg:py-8">
                                <div className="overflow-hidden shadow-md">
                                    <div className="px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 font-bold uppercase">
                                        {ele.dt_topic}
                                    </div>
                                    <div className="p-6 bg-white dark:bg-gray-900 border-b border-gray-200">
                                        {ele.dt_desc}
                                    </div>
                                    <div onClick={() => {
                                        setShowTeacherAnswerPopUp(true)
                                        setClickableDoubt(ele);
                                    }} className="p-6 flex justify-between items-center bg-white dark:bg-gray-900 border-gray-200 text-right">
                                        <button className="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 rounded uppercase"
                                        >Answer</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <TeacherAnswerDoubt doubt={clickableDoubt} show={showTeacherAnswerPopUp} setShow={setShowTeacherAnswerPopUp} />
                </>
            )}
        </>

    )
}

export default DoubtPage