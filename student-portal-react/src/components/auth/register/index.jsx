import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthInput from '../../shared/form/auth-input';
import { registrationValidation } from '../../../constants/validation';
import VALUES from '../../../constants/initialValues';

import { Formik } from 'formik';
import fetchApi from '../../../utils/helper';
import { toast } from 'react-toastify';
import { API_ENDPOINTS } from '../../../constants/api';
import { UserDataContext } from '../../../contexts/UserContext';

const data1 = [
    { text: "Select Class", value: 1 },
    { text: "9", value: 9 },
    { text: "10", value: 10 },
];

const SignUp = () => {
    const { setUserData } = useContext(UserDataContext);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        setLoading(false);
        const postData = {
            user_fname: values.user_fname,
            user_lname: values.user_lname,
            user_email: values.user_email,
            user_pass: values.user_pass,
            user_class: values.user_class,
            user_phone: String(values.user_phone),
        };
        try {
            const response = await fetchApi({ url: API_ENDPOINTS.REGISTER, method: 'POST', data: postData });
            if (response.status === 200) {
                localStorage.setItem("auth", response.token);
                localStorage.setItem("userData", JSON.stringify(response.data));
                navigate("/dashboard");
                setUserData(response.data);
                toast.success("Registration Successful");
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
            <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-100 text-gray-800">
                <section className="flex w-[30rem] flex-col space-y-10">
                    <div className="text-center text-4xl font-medium">Register</div>
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={VALUES.register}
                        validationSchema={registrationValidation}
                    >
                        {formik => (
                            <form onSubmit={formik.handleSubmit} className="flex w-full px-3 flex-col space-y-10">
                                <AuthInput formik={formik} name="user_fname" placeholder="Enter your first name" type="text" />
                                <AuthInput formik={formik} name="user_lname" placeholder="Enter your last name" type="text" />
                                <AuthInput formik={formik} name="user_phone" placeholder="Enter your Mobile Number" type="number" />
                                <AuthInput formik={formik} name="user_email" placeholder="Enter your email" type="email" />
                                <select
                                    value={formik.values.user_class}
                                    onChange={formik.handleChange}
                                    id="user_class"
                                    name="user_class"
                                    className="p-2 rounded bg-gray-200 w-full border border-gray-300"
                                >
                                    {data1.map((ele, index) => (
                                        <option key={index} value={ele.value}>{ele.text}</option>
                                    ))}
                                </select>
                                <AuthInput formik={formik} name="user_pass" placeholder="Enter password" type="password" />
                                <AuthInput formik={formik} name="user_confirmPassword" placeholder="Confirm password" type="password" />
                                <button
                                    type="submit"
                                    className="transform rounded-sm bg-indigo-600 text-white py-2 font-bold duration-300 hover:bg-indigo-500"
                                >
                                    {loading ? "REGISTER" : (
                                        <div className='inline-block text-center'>
                                            <div className="animate-spin me-2">
                                                <i className="fa-solid fa-spinner"></i>
                                            </div>
                                        </div>
                                    )}
                                </button>
                            </form>
                        )}
                    </Formik>
                    <div className="text-center text-lg">
                        Already have an account?
                        <Link
                            to="/log-in"
                            className="ms-1 font-medium text-indigo-500 underline-offset-4 hover:underline"
                        >
                            Log In
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SignUp;