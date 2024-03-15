import React from 'react'

const Announcements = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    return (
        <>
            {userData.user_role === "student" ? (
                <div></div>
            ) : (
                <div></div>
            )}
        </>
    )
}

export default Announcements