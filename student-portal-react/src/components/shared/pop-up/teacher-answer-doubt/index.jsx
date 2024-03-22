import React, { useEffect, useState } from 'react'
import CenterPopUp from '../popup-animation/center-fade'
import { Formik } from 'formik'
import InputComponent from '../../form/input-component'
import fetchApi from '../../../../utils/helper'
import { API_ENDPOINTS } from '../../../../constants/api'
import { toast } from 'react-toastify'

const TeacherAnswerDoubt = ({ show, setShow, doubt, isEdit, setDoubts }) => {
    const [loading, setLoading] = useState(true)
    const [currentData, setCurrentData] = useState({ dt_answer: "" })

    useEffect(() => {
        isEdit !== "" && checkIsedit();
    }, [isEdit])

    const checkIsedit = async () => {
        if (isEdit !== "") {
            let res = await fetchApi({ url: API_ENDPOINTS.DOUBTS_ADMIN, method: "GET", isAuthRequired: true })
            let a = res.data.find(ele => ele._id === isEdit)
            setCurrentData({ dt_id: a._id, dt_isAnswerd: true, dt_answer: a.dt_answer })
        }
    }


    const handleAnswer = async (values) => {
        let method = isEdit !== "" ? "PUT" : "POST"
        setLoading(false)
        let post_data = {
            dt_id: doubt._id,
            dt_isAnswerd: true,
            ...values
        }
        try {
            let response = await fetchApi({ url: API_ENDPOINTS.DOUBTS_ADMIN, isAuthRequired: true, method: method, data: post_data })
            let res = await fetchApi({ url: API_ENDPOINTS.DOUBTS_ADMIN, isAuthRequired: true, method: "GET" })
            // console.log(res.data)
            setDoubts(res.data)
        } catch (error) {
            toast.error("Error to answer the doubt")
        } finally {
            setLoading(true);
            setShow(false);
        }
    }

    return (
        <>
            {show && <CenterPopUp setShow={setShow} width="w-full">
                <div className="px-10 w-[80%] max-w-full py-8 shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] rounded-lg pointer-events-auto relative flex w-full flex-col border-none bg-white dark:bg-gray-800 bg-clip-padding text-current shadow-lg outline-none">
                    <div>
                        <div class="mb-4">Doubt Topic :- <span class="font-bold">{doubt.dt_topic}</span></div>
                        <div class="mb-4">Doubt Description :- <span class="font-bold">{doubt.dt_desc}</span></div>
                    </div>
                    <Formik
                        initialValues={currentData}
                        enableReinitialize
                        onSubmit={handleAnswer}
                    >
                        {formik => (
                            <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center">
                                <InputComponent formik={formik} type="text" label="Answer" name="dt_answer" placeholder="Enter Your answer" />

                                <button disabled={!loading} type="submit" className="w-full bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-2 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
                                    {
                                        loading ? "Add Answer" :
                                            <div className="animate-spin me-2">
                                                <i className="fa-solid fa-spinner">
                                                </i>
                                            </div>
                                    }

                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </CenterPopUp>}
        </>
    )
}

export default TeacherAnswerDoubt