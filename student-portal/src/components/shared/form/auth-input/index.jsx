"use client"
import React, { useState } from 'react'

const AuthInput = ({ formik, name, placeholder, type }) => {
    const [show, setShow] = useState(false);
    const { handleChange, handleBlur, values, errors, touched } = formik;

    return (
        <div>
            <div className="relative w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input
                    type={show ? 'text' : type}
                    id={name}
                    name={name}
                    onChange={handleChange}
                    onFocus={handleBlur}
                    value={values[name]}
                    placeholder={placeholder}
                    className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                />
                {type === "password" && (
                    <i className={`fa-solid ${show ? 'fa-eye' : 'fa-eye-slash'} absolute right-4 top-0 text-2xl cursor-pointer`} onClick={() => setShow(pre => !pre)}></i>
                )}
            </div>
            {touched[name] && errors[name] && (
                <p className="text-md text-red-600">{errors[name]}</p>
            )}
        </div>
    )
}

export default AuthInput