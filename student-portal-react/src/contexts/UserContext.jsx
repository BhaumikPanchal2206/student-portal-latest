import React, { createContext, useEffect, useState } from 'react'

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
    const [userData, setUserData] = useState({});

    // // console.log(a)
    
    // useEffect(() => {
    //     let a = JSON.parse(localStorage.getItem('userData'))
    //     setUserData(a);
    //     // console.log(JSON.parse(localStorage.getItem('userData')))
    // }, []);
    // // console.log(userData)


    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserContext