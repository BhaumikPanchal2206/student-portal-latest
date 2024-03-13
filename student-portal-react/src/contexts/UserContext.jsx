import React, { createContext, useEffect, useState } from 'react'

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem('userData')));
    }, []);


    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserContext