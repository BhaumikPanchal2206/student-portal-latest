import React from 'react'

const ConfirmationModal = ({ show, setShow, type }) => {
    const values = {
        "logout": {
            desc: "Are you sure you want to log out?",
        }
    }

    return (
        <>
            {show && <div className={`fixed inset-[-1px] flex items-center justify-center p-5 z-[99]`}>
                <div onClick={() => setShow(false)} className={`absolute inset-[-1px] animate-[modalOverlayAnimation_0.2s_ease-in-out] bg-[rgba(0,9,26,0.80)] blur-[1px] [animation-fill-mode:forwards]`}></div>
                <div className="animate-[modalDialogAnimation_0.2s_ease-in-out] [animation-fill-mode:forwards] pointer-events-none relative w-auto translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] transform-none opacity-100">
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
                                onClick={() => setShow(false)}
                                className="inline-flex items-center gap-4 px-10 py-0 text-2xl text-white rounded-full sm:text-xl font-roboto bg-blue-500"
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default ConfirmationModal