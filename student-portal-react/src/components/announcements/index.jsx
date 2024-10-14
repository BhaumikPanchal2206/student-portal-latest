import React from 'react'

const Announcements = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    return (
        <>
            {userData.user_role === "student" ? (
                <div class="p-4">
                    <h1 class="text-3xl font-bold mb-4 text-center">Ram Navami</h1>
                    <p class="text-lg">Ram Navami is a Hindu festival that celebrates the birth of Lord Rama, one of the ten avatars of Lord Vishnu, who is revered as a major deity in Hinduism. It typically falls on the ninth day (Navami) of the Chaitra month in the Hindu lunar calendar, which usually corresponds to March or April in the Gregorian calendar.</p>
                </div>

            ) : (
                <div></div>
            )}
        </>
    )
}

export default Announcements