import React, { useState } from 'react'

import InputComponent from '../shared/form/input-component'
import { Formik } from 'formik'
import { toast } from 'react-toastify';
import ConfirmationModal from '../shared/pop-up/confirmation-modal'
import fetchApi from '../../utils/helper'
import { API_ENDPOINTS } from '../../constants/api'


const SettingPage = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        cur_password: "",
        new_password: "",
        conf_password: "",
    })
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        let post_data = {
            cur_password: values.cur_password,
            new_password: values.new_password,
        };
        setLoading(true);
        try {
            // console.log("first");
            let res = await fetchApi({ url: API_ENDPOINTS.CHANGE_PASS, method: "POST", data: post_data, isAuthRequired: true })
            if (res.status === 200) {
                toast.success("Password updated successfully")
                setData({
                    cur_password: "",
                    new_password: "",
                    conf_password: "",
                })
            }
        } catch (error) {
            console.log("ERROR")
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className='divide-y-2 divide-blue-600 dark:divide-black'>
                {/* Change password section */}
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='p-6'>
                        <h2 className='text-xl font-bold mb-3'>Change password</h2>
                        <p><i>Update your password associated with your account.</i></p>
                    </div>
                    <Formik
                        initialValues={data}
                        onSubmit={handleSubmit}
                    >
                        {formik => (
                            <form onSubmit={formik.handleSubmit} className="p-6 flex flex-col justify-center col-span-2">
                                <InputComponent formik={formik} type="password" label="Current password" name="cur_password" placeholder="Current Password" />
                                <InputComponent formik={formik} type="password" label="New password" name="new_password" placeholder="New Password" />
                                <InputComponent formik={formik} type="password" label="Confirm password" name="conf_password" placeholder="Confirm Password" />
                                <button type="submit" className="md:w-32 bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-2 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
                                    {loading ? (
                                        <div className="animate-spin me-2"><i className="fa-solid fa-spinner"></i></div>
                                    ) : "Save"}
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>

                {/* Log out other sessions section */}
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='p-6'>
                        <h2 className='text-xl font-bold mb-3'>Log out other sessions</h2>
                        <p><i>Please enter your password to confirm you would like to log out of your other sessions across all of your devices.</i></p>
                    </div>
                    <form className="p-6 flex flex-col justify-center col-span-2">
                        {/* <InputComponent type="password" label="Your password" name="yourpass" id="yourpass" placeholder="Your Password" /> */}
                        <button onClick={() => setShow(true)} type="button" className="md:w-32 bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-2 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
                            Log out
                        </button>
                    </form>
                </div>
            </div>
            <ConfirmationModal show={show} setShow={setShow} type="logout" />
        </>
    )
}

export default SettingPage