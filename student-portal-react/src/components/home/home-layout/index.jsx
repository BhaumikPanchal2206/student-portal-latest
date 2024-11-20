// React Modules
import React, { useState, useEffect } from 'react';

// constants and interfaces
import Header from '../../header';
import SideBar from '../../side-bar';
import { Outlet } from 'react-router-dom';

const HomeLayout = ({ children }) => {
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        let theme = localStorage.getItem("theme");
        if (theme) {
            if (theme.toLowerCase() === "dark") {
                setIsDark(true);
            } else {
                setIsDark(false);
            }
        } else {
            localStorage.setItem("theme", "light");
        }
    }, [])
    return (
        <>
            <div className={`${isDark ? "dark" : ""}`} >
                <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
                    <Header isDark={isDark} setIsDark={setIsDark} />
                    <SideBar />
                    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeLayout;