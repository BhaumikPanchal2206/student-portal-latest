import React from 'react'

import CenterPopUp from '../popup-animation/center-fade'
import InputComponent from '../../form/input-component';

const AddDoubtForm = ({ setShow }) => {
    return (
        <>
            <CenterPopUp setShow={setShow}>
                <div className="px-10 w-[80%] max-w-full py-8 shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] rounded-lg pointer-events-auto relative flex w-full flex-col border-none bg-white dark:bg-gray-800 bg-clip-padding text-current shadow-lg outline-none">
                    <form className="flex flex-col justify-center">
                        <InputComponent type="text" label="Topic" name="doubtTopic" id="doubtTopic" placeholder="Enter doubt topic" />

                        <div>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                Your Doubt
                            </label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                        </div>
                        
                        <button type="submit" className="w-full bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-2 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
                            Add Doubt
                        </button>
                    </form>
                </div>
            </CenterPopUp>
        </>
    )
}

export default AddDoubtForm