import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fetchApi from '../../../utils/helper';
import { API_ENDPOINTS } from '../../../constants/api';
import { toast } from 'react-toastify';
import SVG from 'react-inlinesvg';
import dayjs from 'dayjs';
import InputComponent from '../../shared/form/input-component';
import CenterPopUp from '../../shared/pop-up/popup-animation/center-fade';
import { Formik } from 'formik';

const UpcomingExam = () => {
    const [examData, setExamData] = useState([]);
    const [loading, setLoading] = useState(false);
    const userData = JSON.parse(localStorage.getItem('userData'));

    useEffect(() => {
        fetchExams();
    }, []);

    const fetchExams = async () => {
        setLoading(true);
        try {
            let response = await fetchApi({ url: userData.user_role === "student" ? API_ENDPOINTS.EXAM : API_ENDPOINTS.EXAM_ALL, isAuthRequired: true, method: "GET" });
            setExamData(response.data);
        } catch (error) {
            toast.error("Error fetching data!");
        } finally {
            setLoading(false);
        }
    };


    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [loadingAddExam, setLoadingAddExam] = useState(false)
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
        setLoadingAddExam(true);
        try {
            let response = await fetchApi({ url: API_ENDPOINTS.EXAM, method: "POST", data: values, isAuthRequired: true });
            if (response.status == 200) {
                toast.success(response.messsge);
                setIsOpen(false);
                fetchExams();
            }
        } catch (error) {
            toast.error("error to add exam");
        } finally {
            setLoadingAddExam(false);
        }
    }

    return (
        <>
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
                                                disabled={loadingAddExam}
                                                type="submit" className={`w-full sm:w-28 rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 bg-indigo-600 hover:bg-indigo-700`}>
                                                {loadingAddExam ? <div className="animate-spin me-2"><i className="fa-solid fa-spinner"></i></div> : "Add Exam"}
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
            {
                loading ? (
                    <div className='text-center py-4'>
                        <SVG src='/assets/icons/loading.svg' className='inline w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600' />
                    </div>
                ) : (
                    <section className="bg-gray-100 dark:bg-gray-700 px-4">
                        <div className="container">
                            <h2>Upcoming Exams</h2>
                            <div className="-mx-4 py-4 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
                                {examData.map((ele, index) => {
                                    const isUpcoming = dayjs(ele.exam_date).isAfter(dayjs(), 'day');
                                    if (isUpcoming) {
                                        return (
                                            <div key={index}>
                                                <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden mb-4">
                                                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                                        <h3>
                                                            <p
                                                                className="font-semibold text-black mb-3 dark:text-white duration-300 text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] block hover:text-primary "
                                                            >
                                                                {ele.exam_subject}
                                                            </p>
                                                        </h3>
                                                        <p className="text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-3">
                                                            Date: {ele.exam_date}
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
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            </div>
                        </div>
                        <div className="container">
                            <h2>Previous Exams</h2>
                            <div className="-mx-4 py-4 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
                                {examData.map((ele, index) => {
                                    const isUpcoming = dayjs(ele.exam_date).isAfter(dayjs(), 'day');
                                    if (!isUpcoming) {
                                        return (
                                            <div key={index}>
                                                <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden mb-4">
                                                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                                        <h3>
                                                            <p
                                                                className="font-semibold text-black mb-3 dark:text-white duration-300 text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] block hover:text-primary "
                                                            >
                                                                {ele.exam_subject}
                                                            </p>
                                                        </h3>
                                                        <p className="text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-3">
                                                            Date: {ele.exam_date}
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
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            </div>
                        </div>
                    </section>
                )
            }
        </>
    );
};

export default UpcomingExam;
