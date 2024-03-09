import React from 'react'

const CenterPopUp = ({ children, setShow }) => {
    return (
        <>
            <div className={`fixed inset-[-1px] flex items-center justify-center p-5 z-[99]`}>
                <div onClick={() => setShow(false)} className={`absolute inset-[-1px] animate-[modalOverlayAnimation_0.2s_ease-in-out] bg-[rgba(0,9,26,0.80)] blur-[1px] [animation-fill-mode:forwards]`}></div>
                <div className="animate-[modalDialogAnimation_0.2s_ease-in-out] [animation-fill-mode:forwards] pointer-events-none relative w-auto translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] transform-none opacity-100">
                    {children}
                </div>
            </div>
        </>
    )
}

export default CenterPopUp