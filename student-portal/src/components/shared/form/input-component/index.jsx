"use client"
import React, { useState } from 'react'

const InputComponent = ({ label, name, id, placeholder, type }) => {
    const [show, setShow] = useState(false)
    return (
        <div className='relative'>
            <div className="flex flex-col mb-2">
                <label htmlFor={id}>{label}</label>
                <input type={show ? "text" : type} name={name} id={id} placeholder={placeholder} className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
            </div>
            {type === "password" && (
                <i className={`fa-solid ${show ? 'fa-eye' : 'fa-eye-slash'} absolute right-4 top-11 text-2xl cursor-pointer`} onClick={() => setShow(pre => !pre)}></i>
            )}
        </div>
    )
}

export default InputComponent