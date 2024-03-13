import React from 'react'

import CenterPopUp from '../popup-animation/center-fade'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const ConfirmationModal = ({ show, setShow, type }) => {
    const navigate = useNavigate();
    const values = {
        "logout": {
            desc: "Are you sure you want to log out?",
        }
    }

    const handleOperation = async () => {
        //     if (type === "logOut") {
        localStorage.removeItem("userData");
        localStorage.removeItem("auth");
        navigate("/logIn");
        toast.success("Log Out Successfully");
        navigate("/log-in")
        //     } else {
        //         await handleSubmit(data);
        //     }
        setShow(false);
    }

    return (
        <>
            {show &&
                <CenterPopUp setShow={setShow} width="w-auto">
                    <div className="px-10 w-[80%] max-w-full py-8 shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] rounded-3xl pointer-events-auto relative flex w-full flex-col border-none bg-white dark:bg-gray-800 bg-clip-padding text-current shadow-lg outline-none">
                        <div className="flex items-center justify-center flex-shrink-0 rounded-t-md">
                            <h5 className="text-lg leading-normal text-center font-roboto">
                                {values[type].desc}
                            </h5>
                        </div>
                        <div className="flex justify-center gap-2 md:gap-5 mt-5">
                            <button
                                onClick={() => setShow(false)}
                                className="inline-flex items-center gap-3 px-10 py-2 text-2xl border border-black rounded-3xl"
                            >
                                No
                            </button>
                            <button
                                onClick={handleOperation}
                                className="inline-flex items-center gap-4 px-10 py-0 text-2xl text-white rounded-full sm:text-xl font-roboto bg-blue-500"
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </CenterPopUp >
            }
        </>
    )
}

export default ConfirmationModal