import React, { useContext, useEffect, useState } from 'react'
import fetchApi from '../../utils/helper';
import { API_ENDPOINTS } from '../../constants/api';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';

const data1 = [
    { text: "select className", value: 1 },
    { text: "9", value: 9 },
    { text: "10", value: 10 },
];

const data2 = [
    { text: "select Division", value: 1 },
    { text: "A", value: "A" },
    { text: "B", value: "B" },
    { text: "C", value: "C" },
    { text: "D", value: "D" },
];

const AttendancePage = () => {
    const [selectStudent, setSelectStudent] = useState([]);
    const userData = JSON.parse(localStorage.getItem('userData'));
    const [className, setClassName] = useState("");
    const [studentData, setStudentData] = useState([])

    useEffect(() => {
        fetchStudentData();
    }, [])

    const fetchStudentData = async () => {
        try {
            if (userData.user_role === "student") {
                const response = await fetchApi({ url: API_ENDPOINTS.ATTENDANCE, method: 'GET', isAuthRequired: true });
                setStudentData(response.data)
            }
        } catch (error) {
            toast.error("Error to fetch student data")
        }
    }

    const handelChangeClass = async (e) => {
        setClassName(e.target.value)
        try {
            const response = await fetchApi({ url: API_ENDPOINTS.ATTENDANCE_LIST, method: 'POST', isAuthRequired: true, data: { user_class: e.target.value } });
            setStudentData(response.data)
        } catch (error) {
            toast.error("Error to fetch attendance list")
        }
    }

    const handleAttendance = async (present) => {
        let date = dayjs();
        try {
            const response = await fetchApi({
                url: API_ENDPOINTS.ATTENDANCE, method: 'POST', isAuthRequired: true,
                data: {
                    atten_date: date.format("DD/MM/YY"),
                    stud_ids: present === "present" ? selectStudent.map(ele => ({ ...ele, isPresent: true })) : selectStudent
                }
            });
        } catch (error) {
            toast.error("Error to add attendacne")
        }
    }

    return (
        <>
            {userData.user_role === "student" ? (
                studentData.length === 0 ? (
                    <div>No data added</div>
                ) : (
                    <div className='p-4'>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                        <th className="px-4 py-3">{"Date".toUpperCase()}</th>
                                        <th className="px-4 py-3">{"Attendance".toUpperCase()}</th>
                                        <th className="px-4 py-3">{"Punch In Time".toUpperCase()}</th>
                                        <th className="px-4 py-3">{"Punch Out Time".toUpperCase()}</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                    {studentData.reverse().map((ele, index) => (
                                        <tr key={index} className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                            <td className='px-4 py-3'>{ele.atten_date}</td>
                                            <td className='px-4 py-3'>{ele.atten_isPresent ? "Present" : "Absent"}</td>
                                            <td className='px-4 py-3'>6:00 PM</td>
                                            <td className='px-4 py-3'>8:00 PM</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            ) : (
                <>
                    <form action="">
                        <div className='block sm:flex justify-between items-center mb-5'>
                            <div className="flex flex-col md:flex-row">
                                <div>
                                    <select onChange={handelChangeClass} className=" p-2 rounded bg-white dark:bg-gray-800 w-full ">
                                        {data1.map((ele, index) => (
                                            <option key={index} value={ele.value}>{ele.text}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                    {
                        className ? (
                            studentData.length > 0 ? (
                                <div className='p-4'>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="text-xs font-semibold tracking-wide  text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                                    <th className="px-4 py-3 w-10 text-center">
                                                        <span
                                                            onClick={() => selectStudent.length === studentData.length ?
                                                                setSelectStudent([]) :
                                                                setSelectStudent(studentData.map(ele => ({
                                                                    id: ele._id, isPresent: false
                                                                })))} className='cursor-pointer'>
                                                            select all
                                                        </span>
                                                    </th>
                                                    <th className="px-4 py-3">{"first name".toUpperCase()}</th>
                                                    <th className="px-4 py-3">{"last name".toUpperCase()}</th>
                                                    <th className="px-4 py-3">{"Roll no.".toUpperCase()}</th>
                                                    <th className="px-4 py-3">{"className".toUpperCase()}</th>
                                                    {/* <th className="px-4 py-3">{"present".toUpperCase()}</th>
                                                <th className="px-4 py-3">{"absent".toUpperCase()}</th> */}
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                                {studentData.map((ele, index) => (
                                                    <tr
                                                        key={index}
                                                        className={`bg-gray-50 cursor-pointer dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400 ${""}`}
                                                        onClick={() => {
                                                            setSelectStudent(pre => {
                                                                let a = [...pre];
                                                                if (pre.find(e => e.id === ele._id)) {
                                                                    a = pre.filter(e => e.id !== ele._id)
                                                                } else {
                                                                    a.push({ id: ele._id, isPresent: false })
                                                                }
                                                                return a;
                                                            })
                                                        }}
                                                    >
                                                        <td className='px-4 py-3 text-center'>
                                                            <input type="checkbox" checked={selectStudent.findIndex((e) => e.id === ele._id) === -1 ? false : true} id='click' name="" />
                                                        </td>
                                                        <td className='px-4 py-3'>{ele.user_fname}</td>
                                                        <td className='px-4 py-3'>{ele.user_lname}</td>
                                                        <td className='px-4 py-3'>{index + 1}</td>
                                                        <td className='px-4 py-3'>{ele.user_class}</td>
                                                        {/* <td className='px-4 py-3'>present</td>
                                                    <td className='px-4 py-3'>absent</td> */}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="flex py-3 justify-end gap-5">
                                        <button
                                            onClick={() => handleAttendance("present")}
                                            className="bg-blue-500 hover:bg-blue-700 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-800 font-bold py-2 px-6 rounded">
                                            Present
                                        </button>
                                        <button
                                            onClick={() => handleAttendance("absent")}
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded">
                                            Absent
                                        </button>
                                    </div>

                                </div>
                            ) : (
                                <div>Please Enter the class</div>
                            )
                        ) : (
                            <div>Please Enter the class</div>
                        )
                    }
                </>
            )}
        </>

    )
}

export default AttendancePage