import React from 'react'

import { toast } from 'react-toastify'
import InputComponent from '../shared/form/input-component'
import { Formik } from 'formik'


const SettingPage = () => {
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
                        initialValues={{
                            currpass: "",
                            newpass: "",
                            confpass: "",
                        }}
                    >
                        {formik => (
                            <form className="p-6 flex flex-col justify-center col-span-2">
                                <InputComponent formik={formik} type="password" label="Current password" name="currpass" placeholder="Current Password" />
                                <InputComponent formik={formik} type="password" label="New password" name="newpass" placeholder="New Password" />
                                <InputComponent formik={formik} type="password" label="Confirm password" name="confpass" placeholder="Confirm Password" />
                                <button type="button" className="md:w-32 bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-2 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
                                    Save
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
                        <button onClick={() => toast.success("Logged out")} type="button" className="md:w-32 bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-2 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
                            Log out
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SettingPage