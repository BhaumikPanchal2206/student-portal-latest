"use client"
import React from 'react'

import Link from 'next/link'
import AuthInput from '@/components/shared/form/auth-input';
import { Formik } from 'formik';
import VALUES from "@/constants/initialValues.js"
import { logInValidation } from "@/constants/validation.js"

const LogIn = () => {


    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <>
            <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
                <section className="flex w-[30rem] flex-col space-y-10">
                    <div className="text-center text-4xl font-medium">Log In</div>
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={VALUES.logIn}
                        validationSchema={logInValidation}
                    >
                        {formik => (
                            <form onSubmit={formik.handleSubmit} className='flex w-[30rem] flex-col space-y-10'>
                                <AuthInput formik={formik} name="user_email" placeholder="Email or Username" type="text" />
                                <AuthInput formik={formik} name="user_pass" placeholder="Password" type="password" />
                                <button type='submit' className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
                                    LOG IN
                                </button>
                            </form>
                        )}
                    </Formik>
                    <Link
                        href="/log-in"
                        className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
                    >
                        FORGOT PASSWORD?
                    </Link>
                    <p className="text-center text-lg">
                        No account?
                        <Link
                            href="/register"
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