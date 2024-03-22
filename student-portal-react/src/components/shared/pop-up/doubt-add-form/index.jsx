import React, { useEffect, useState } from 'react'

import CenterPopUp from '../popup-animation/center-fade'
import InputComponent from '../../form/input-component';
import { Field, Formik } from 'formik';
import fetchApi from '../../../../utils/helper';
import { API_ENDPOINTS } from '../../../../constants/api';
import { toast } from 'react-toastify';

const AddDoubtForm = ({ setShow, setDoubts, isEdit }) => {
    const [currentData, setCurrentData] = useState({ dt_topic: "", dt_desc: "" })
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        isEdit !== "" && checkIsedit();
    }, [isEdit])

    const checkIsedit = async () => {
        console.log("first")
        if (isEdit !== "") {
            let res = await fetchApi({ url: API_ENDPOINTS.DOUBTS_STUDENT, method: "GET", isAuthRequired: true })
            let a = res.data.find(ele => ele._id === isEdit)
            setCurrentData({ _id: a._id, dt_topic: a.dt_topic, dt_desc: a.dt_desc })
        }
    }

    const handleAddDoubt = async (values) => {
        let method = isEdit !== "" ? "PUT" : "POST"
        setLoading(false);
        try {
            let response = await fetchApi({ url: API_ENDPOINTS.DOUBTS_STUDENT, method: method, isAuthRequired: true, data: values })
            let res = await fetchApi({ url: API_ENDPOINTS.DOUBTS_STUDENT, method: "GET", isAuthRequired: true })
            setDoubts(res.data);
            setShow(false);
            toast.success("Doubts Added Ssuccessfully!")
        } catch (error) {
            toast.error("Error to fetch Student doubt")
        } finally {
            setLoading(true);
        }
    }

    return (
        <>
            <CenterPopUp setShow={setShow} width="w-full">
                <div className="px-10 w-[80%] max-w-full py-8 shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] rounded-lg pointer-events-auto relative flex w-full flex-col border-none bg-white dark:bg-gray-800 bg-clip-padding text-current shadow-lg outline-none">
                    <Formik
                        initialValues={currentData}
                        enableReinitialize
                        onSubmit={handleAddDoubt}
                    >
                        {formik => (
                            <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center">
                                <InputComponent formik={formik} type="text" label="Topic" name="dt_topic" placeholder="Enter doubt topic" />

                                <div>
                                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                        Your Doubt
                                    </label>
                                    {/* <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea> */}
                                    <Field
                                        {...formik}
                                        raws="4"
                                        placeholder="Your message..."
                                        name="dt_desc"
                                        id="dt_desc"
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        as={"textarea"} />
                                </div>

                                <button type="submit" className="w-full bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-2 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
                                    {
                                        loading ? "Add Doubt" :
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
            </CenterPopUp>
        </>
    )
}

export default AddDoubtForm