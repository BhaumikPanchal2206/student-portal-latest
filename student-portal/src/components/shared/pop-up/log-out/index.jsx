import React, { useState } from 'react'

import CenterPopUp from '../popup-animation/center-fade';
import InputComponent from '../../form/input-component';
import { toast } from 'react-toastify';
import ConfirmationModal from '../confirmation-modal';

const LogOut = ({ show, setShow }) => {
    const [showPopUp, setShowPopUp] = useState(false);
    return (
        <>
            {show &&
                <CenterPopUp setShow={setShow}>
                    <div className="px-10 w-[80%] max-w-full py-8 shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] rounded-lg pointer-events-auto relative flex w-full flex-col border-none bg-white dark:bg-gray-800 bg-clip-padding text-current shadow-lg outline-none">
                        <form className="flex flex-col justify-center">
                            <InputComponent type="password" label="Your password" name="yourpass" id="yourpass" placeholder="Your Password" />

                            <button onClick={() => setShowPopUp(true)} type="button" className="w-full bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-2 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
                                Log out
                            </button>
                        </form>
                    </div>
                </CenterPopUp>
            }
            <ConfirmationModal show={showPopUp} setShow={setShowPopUp} type="logout" />
        </>
    )
}

export default LogOut;