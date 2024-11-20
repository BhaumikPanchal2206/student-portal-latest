import React, { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'
import CenterPopUp from '../../shared/pop-up/popup-animation/center-fade';
import { Formik } from 'formik';
import InputComponent from '../../shared/form/input-component';
import fetchApi from '../../../utils/helper';
import { API_ENDPOINTS } from '../../../constants/api';
import { toast } from 'react-toastify';

const ExamHeader = () => {
    const location = useLocation();
    const userData = JSON.parse(localStorage.getItem('userData'));
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const [newExamAdd, setNewExamAdd] = useState({
        exam_subject: "",
        exam_time: "",
        exam_duration: "",
        exam_class: "",
        exam_date: "",
        exam_total_marks: 0,
        exam_passing_marks: 0
    })

    const header_links = [
        // { name: "Result", href: "/exam/result" },
        { name: "Exam", href: "/exam/upcoming-exam" },
        // { name: "Exam Fees", href: "/exam/exam-fees" },
    ]

    const handleAddExam = async (values) => {
        setLoading(true);
        try {
            let response = await fetchApi({ url: API_ENDPOINTS.EXAM, method: "POST", data: values, isAuthRequired: true });
            if (response.status == 200) {
                toast.success(response.messsge);
            }
        } catch (error) {
            toast.error("error to add exam");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="antialiased bg-gray-100 dark:bg-gray-900">
                <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
                    <div className="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row py-2">
                        <nav className="flex flex-col md:flex-row justify-between w-full p-3">
                            <div>
                                {header_links.map((ele, index) => (
                                    <Link
                                        to={ele.href}
                                        key={index}
                                        className={`${location.pathname.startsWith(ele.href) && "!text-gray-900 !bg-gray-200"} px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900  hover:bg-gray-200  focus:outline-none focus:shadow-outline`}>
                                        {ele.name}
                                    </Link>
                                ))}
                            </div>
                            {userData.user_role === "teacher" && <div>
                                <button onClick={() => {
                                    setIsOpen(true);
                                    setNewExamAdd({
                                        exam_subject: "",
                                        exam_time: "",
                                        exam_duration: "",
                                        exam_class: "",
                                        exam_date: "",
                                        exam_total_marks: 0,
                                        exam_passing_marks: 0
                                    })
                                }} className="bg-blue-500 dark:bg-gray-100 text-white dark:text-gray-800 py-2 px-4 rounded">
                                    Add New Exam
                                </button>
                            </div>}

                        </nav>
                    </div>
                </div>
            </div>

            {isOpen &&
                <CenterPopUp setShow={setIsOpen} width="w-full">
                    <div className="px-10 w-[80%] max-w-full py-8 shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] rounded-3xl pointer-events-auto relative flex w-full flex-col border-none bg-white dark:bg-gray-800 bg-clip-padding text-current shadow-lg outline-none">
                        <Formik
                            initialValues={newExamAdd}
                            // validationSchema={updateProfileValidation}
                            enableReinitialize
                            onSubmit={(values) => handleAddExam(values)}
                        >
                            {formik => (
                                <form action="" onSubmit={formik.handleSubmit} >
                                    <div>
                                        <InputComponent formik={formik} label="exam subject" name="exam_subject" id="exam_subject" placeholder="Enter exam subject" type="text" />
                                        <InputComponent formik={formik} label="exam time" name="exam_time" id="exam_time" placeholder="Enter exam time" type="text" />
                                        <InputComponent formik={formik} label="exam duration" name="exam_duration" id="exam_duration" placeholder="Enter exam duration" type="text" />
                                        <select name="exam_class" onChange={formik.handleChange} className="p-2 rounded bg-white w-full border border-gray-300 my-4">
                                            <option value="select class">select class</option>
                                            {/* {data1.map((ele, index) => ( */}
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            {/* // ))} */}
                                        </select>
                                        {/* <InputComponent formik={formik} label="exam class" name="exam_class" id="exam_class" placeholder="Enter exam class" type="text" /> */}
                                        <InputComponent formik={formik} label="exam date" name="exam_date" id="exam_date" placeholder="Enter exam date" type="date" />
                                        <InputComponent formik={formik} label="exam total marks" name="exam_total_marks" id="exam_total_marks" placeholder="Enter exam total marks" type="number" />
                                        <InputComponent formik={formik} label="exam passing marks" name="exam_passing_marks" id="exam_passing_marks" placeholder="Enter exam passing marks" type="number" />
                                    </div>
                                    <div className="py-3 sm:flex sm:flex-row-reverse">
                                        <button
                                            disabled={loading}
                                            type="submit" className={`w-full sm:w-28 rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 bg-indigo-600 hover:bg-indigo-700`}>
                                            {loading ? <div className="animate-spin me-2"><i className="fa-solid fa-spinner"></i></div> : "Add Exam"}
                                        </button>
                                        <button type="button" onClick={() => setIsOpen(false)} className={`mt-3 w-full sm:w-28 inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover-bg-gray-50 sm:mt-0`}>Cancel</button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </CenterPopUp>
            }
        </>
    )
}

export default ExamHeader