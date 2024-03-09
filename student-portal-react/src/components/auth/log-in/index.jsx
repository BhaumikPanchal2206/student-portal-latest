import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { Formik } from 'formik';
import AuthInput from '../../shared/form/auth-input';
import { logInValidation } from '../../../constants/validation';
import VALUES from '../../../constants/initialValues';
import { toast } from 'react-toastify';
import fetchApi from '../../../utils/helper';
import { API_ENDPOINTS } from '../../../constants/api';

const LogIn = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleSubmit = async (values) => {
        setLoading(false);
        try {
            const response = await fetchApi({ url: API_ENDPOINTS.LOGIN, method: 'POST', data: values });
            if (response.status === 200) {
                localStorage.setItem("auth", response.token);
                localStorage.setItem("userData", JSON.stringify(response.data));
                navigate(response.data.user_role === "admin" ? "/dashboard" : "/dashboard");
                toast.success("Log In Successfully");
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error("Error To Fetch API");
        } finally {
            setLoading(true);
        }
    };

    return (
        <>
            <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
                <section className="flex w-[30rem] flex-col space-y-10">
                    <div className="text-center text-4xl font-medium">Log In</div>
                    <Formik
                        onSubmit={(values) => loading && handleSubmit(values)}
                        initialValues={VALUES.logIn}
                        validationSchema={logInValidation}
                    >
                        {formik => (
                            <form onSubmit={formik.handleSubmit} className='flex w-[30rem] flex-col space-y-10'>
                                <AuthInput formik={formik} name="user_email" placeholder="Email or Username" type="text" />
                                <AuthInput formik={formik} name="user_pass" placeholder="Password" type="password" />
                                <button type='submit' className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
                                    {
                                        loading ? "LOG IN" :
                                            <div className="animate-spin me-2">
                                                <i className="fa-solid fa-spinner">
                                                </i>
                                            </div>
                                    }
                                </button>
                            </form>
                        )}
                    </Formik>
                    <Link
                        to="/log-in"
                        className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
                    >
                        FORGOT PASSWORD?
                    </Link>
                    <p className="text-center text-lg">
                        No account?
                        <Link
                            to="/register"
                            className="ms-1 font-medium text-indigo-500 underline-offset-4 hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                </section>
            </div>
        </>
    )
}

export default LogIn