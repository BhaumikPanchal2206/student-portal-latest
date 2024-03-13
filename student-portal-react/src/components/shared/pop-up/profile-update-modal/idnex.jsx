import React, { useState } from 'react'
import CenterPopUp from '../popup-animation/center-fade'
import InputComponent from '../../form/input-component'
import { Formik } from 'formik'
import VALUES from '../../../../constants/initialValues'
import { updateProfileValidation } from '../../../../constants/validation'
import AuthInput from '../../form/auth-input'
import fetchApi from '../../../../utils/helper'
import { API_ENDPOINTS } from '../../../../constants/api'
import { toast } from 'react-toastify'

const ProfileUpdateModal = ({ show, setShow, userData, setUserData }) => {
    const [loading, setLoading] = useState(false)


    const handleSubmit = async (values) => {
        setLoading(true)
        let data = {
            user_fname: values.user_fname,
            user_lname: values.user_lname,
            user_email: userData.user_email,
            user_phone: String(values.user_phone),
            user_dob: values.user_dob
        }
        try {
            let response = await fetchApi({ url: API_ENDPOINTS.USER, data, isAuthRequired: true, method: "PUT" })
            if (response.status === 200) {
                localStorage.setItem("userData", JSON.stringify(values));
                setUserData(values);
                setShow(false);
            }
        } catch (error) {
            toast.error("Error while fetching user data")
        }
        setLoading(false);
    }


    return (
        <>
            {
                show &&
                <CenterPopUp setShow={setShow} width="w-full">
                    <div className="px-10 w-[80%] max-w-full py-8 shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] rounded-3xl pointer-events-auto relative flex w-full flex-col border-none bg-white dark:bg-gray-800 bg-clip-padding text-current shadow-lg outline-none">
                        <Formik
                            initialValues={userData}
                            validationSchema={updateProfileValidation}
                            enableReinitialize
                            onSubmit={(values) => handleSubmit(values)}
                        >
                            {formik => (
                                <form action="" onSubmit={formik.handleSubmit} >
                                    <div>
                                        <InputComponent formik={formik} label="First Name" name="user_fname" id="user_fname" placeholder="Enter Your First Name" type="text" />
                                        <InputComponent formik={formik} label="Last Name" name="user_lname" id="user_lname" placeholder="Enter Your Last Name" type="text" />
                                        <div className='relative'>
                                            <div className="flex flex-col mb-2">
                                                <div>Email</div>
                                                <div className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-700 text-gray-500 dark:text-gray-300 font-semibold focus:border-blue-500 focus:outline-none" >
                                                    {userData.user_email}
                                                </div>
                                            </div>
                                        </div>
                                        <InputComponent formik={formik} label="Mobile Number" name="user_phone" id="user_phone" placeholder="Enter Your Mobile Number" type="number" />
                                        <InputComponent formik={formik} label="Date Of Birth" name="user_dob" id="user_dob" placeholder="Enter Your BirthDate" type="date" />
                                    </div>
                                    <div className="py-3 sm:flex sm:flex-row-reverse">
                                        <button disabled={loading} type="submit" className={`w-full sm:w-28 rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 bg-indigo-600 hover:bg-indigo-700`}>
                                            {/* {loading ? <div className="animate-spin me-2"><i className="fa-solid fa-spinner"></i></div> : "Edit"} */}
                                            Edit
                                        </button>
                                        <button type="button" onClick={() => setShow(false)} className={`mt-3 w-full sm:w-28 inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover-bg-gray-50 sm:mt-0`}>Cancel</button>
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

export default ProfileUpdateModal