"use client"
import React, { createRef, useState } from 'react'

import Link from 'next/link'
import AuthInput from '@/components/shared/form/auth-input';
import { useRouter } from 'next/navigation';
import { Formik } from 'formik';
import VALUES from "@/constants/initialValues.js"
import { registrationValidation } from "@/constants/validation.js"

const SignUp = () => {
    const router = useRouter();
    const [otp, setOTP] = useState(new Array(4).fill(""));
    const otpInputs = Array.from({ length: 4 }, () => createRef());
    const [showOTP, setShowOTP] = useState(false);
    const [userEmail, setUserEmail] = useState("")

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/\D/g, "");
        const newValue = value.charAt(value.length - 1);
        setOTP((prevOTP) => {
            const newOTP = [...prevOTP];
            newOTP[index] = newValue;
            if (newValue !== "" && index < otpInputs.length - 1)
                otpInputs[index + 1].current.focus();
            return newOTP;
        });
    };

    const handleBackSpace = (e, index) => {
        if (e.key === "Backspace") {
            if (index === otpInputs.length - 1 && otp[index] !== "") {
                setOTP((pre) => {
                    const oldOTP = [...pre];
                    oldOTP[index] = "";
                    return oldOTP;
                });
                return;
            }
            if (index > 0) {
                otpInputs[index - 1].current.focus();
            }
        }
    };

    const handleSubmit = (values) => {
        setShowOTP(pre => !pre);
        setUserEmail(values.user_email);
    }

    const handleOTPSubmit = (e) => {
        e.preventDefault();
        console.log(otp.join(""))
    }

    return (
        <>
            <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
                {showOTP ? (
                    <section className="flex w-[30rem] flex-col space-y-10 mx-auto">
                        <div className="text-center text-4xl font-medium">Email Verification</div>
                        <div className="text-center text-sm font-medium text-gray-400">
                            We have sent a code to your email
                            <span className='ps-1'>
                                {userEmail.slice(0, 3) + "***" + userEmail.slice(userEmail.indexOf("@"))}
                            </span>
                        </div>

                        <form onSubmit={handleOTPSubmit} action="" method="post" className="mx-auto">
                            <div className="flex justify-between w-full max-w-xs mx-auto space-x-1 mb-6">
                                {otp.map((digit, index) => (
                                    <div key={index} className="w-16 h-16">
                                        <input
                                            key={index}
                                            id={`otp-${index + 1}`}
                                            type="text"
                                            max={9}
                                            value={digit}
                                            onChange={(e) => handleChange(e, index)}
                                            ref={otpInputs[index]}
                                            onKeyDown={(e) => handleBackSpace(e, index)}
                                            className="w-full h-full flex items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-gray-700 focus:bg-gray-800 focus:ring-1 ring-blue-700"
                                            placeholder=""
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col space-y-5">
                                <div>
                                    <button type='submit' className="flex items-center justify-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                        Verify Account
                                    </button>
                                </div>
                                <div className="flex items-center justify-center text-sm font-medium space-x-1 text-gray-500">
                                    <p>Didn&apos;t receive the code?</p>
                                    <button
                                        type='button'
                                        className="flex items-center text-blue-600"
                                        href="http://"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Resend
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                ) : (
                    <section className="flex w-[30rem] flex-col space-y-10">
                        <div className="text-center text-4xl font-medium">Register</div>
                        <Formik
                            onSubmit={handleSubmit}
                            initialValues={VALUES.register}
                            validationSchema={registrationValidation}
                        >
                            {formik => (
                                <form onSubmit={formik.handleSubmit} className='flex w-[30rem] flex-col space-y-10'>
                                    <AuthInput formik={formik} name="user_fname" placeholder="Enter your first name" type="text" />
                                    <AuthInput formik={formik} name="user_lname" placeholder="Enter your last name" type="text" />
                                    <AuthInput formik={formik} name="user_email" placeholder="Enter your email" type="email" />
                                    <AuthInput formik={formik} name="user_pass" placeholder="Enter password" type="password" />
                                    <AuthInput formik={formik} name="user_confirmPassword" placeholder="confirm password" type="password" />
                                    <button type='submit' className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
                                        REGISTER
                                    </button>
                                </form>
                            )}
                        </Formik>
                        <div className="text-center text-lg">
                            Already exist?
                            <Link
                                href="/log-in"
                                className="ms-1 font-medium text-indigo-500 underline-offset-4 hover:underline"
                            >
                                log in
                            </Link>
                        </div>
                    </section>
                )}
            </div>
        </>
    )
}

export default SignUp