import React, { useState } from 'react'

const AttendancePage = () => {
    const [selectStudent, setSelectStudent] = useState([false, false, false, false, false]);
    const data1 = [
        { text: "select className", value: 1 },
        { text: "9", value: 9 },
        { text: "10", value: 10 },
        { text: "11", value: 11 },
        { text: "12", value: 12 },
    ];

    const data2 = [
        { text: "select Division", value: 1 },
        { text: "A", value: "A" },
        { text: "B", value: "B" },
        { text: "C", value: "C" },
        { text: "D", value: "D" },
    ];

    return (
        <>
            {/* For student */}
            <div className='p-4'>
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
                        <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                            <td className='px-4 py-3'>11-01-2024</td>
                            <td className='px-4 py-3'>Present</td>
                            <td className='px-4 py-3'>6:10 PM</td>
                            <td className='px-4 py-3'>8:35 PM</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                            <td className='px-4 py-3'>10-01-2024</td>
                            <td className='px-4 py-3'>Present</td>
                            <td className='px-4 py-3'>6:10 PM</td>
                            <td className='px-4 py-3'>8:35 PM</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                            <td className='px-4 py-3'>09-01-2024</td>
                            <td className='px-4 py-3'>Present</td>
                            <td className='px-4 py-3'>6:10 PM</td>
                            <td className='px-4 py-3'>8:35 PM</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                            <td className='px-4 py-3'>08-01-2024</td>
                            <td className='px-4 py-3'>Present</td>
                            <td className='px-4 py-3'>6:10 PM</td>
                            <td className='px-4 py-3'>8:35 PM</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            {/* for admin */}
            <div className='p-4'>
                <form action="">
                    <div className='flex justify-between items-center mb-5'>
                        <div className="flex flex-col md:flex-row">
                            <div className="">
                                <select className=" p-2 rounded bg-white dark:bg-gray-800 ">
                                    {data1.map((ele, index) => (
                                        <option key={index} value={ele.value}>{ele.text}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="pt-6 md:pt-0 md:pl-6">
                                <select className=" p-2 rounded bg-white dark:bg-gray-800"  >
                                    {data2.map((ele, index) => (
                                        <option key={index} value={ele.value}>{ele.text}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <button type="button" className="bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-2 px-8 rounded-lg mt-2 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
                                Check
                            </button>
                        </div>
                    </div>
                </form>

                <table className="w-full text-left">
                    <thead>
                        <tr className="text-xs font-semibold tracking-wide  text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            <th className="px-4 py-3 w-10 text-center">
                                <span onClick={() => selectStudent.every(ele => ele) ? setSelectStudent(selectStudent.map(ele => false)) : setSelectStudent(selectStudent.map(ele => true))} className='cursor-pointer'>select all</span>
                            </th>
                            <th className="px-4 py-3">{"first name".toUpperCase()}</th>
                            <th className="px-4 py-3">{"last name".toUpperCase()}</th>
                            <th className="px-4 py-3">{"Roll no.".toUpperCase()}</th>
                            <th className="px-4 py-3">{"className".toUpperCase()}</th>
                            <th className="px-4 py-3">{"Division".toUpperCase()}</th>
                            {/* <th className="px-4 py-3">{"present".toUpperCase()}</th>
                            <th className="px-4 py-3">{"absent".toUpperCase()}</th> */}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        {[1, 2, 3, 4, 5].map((ele, index) => (
                            <tr
                                key={index}
                                className={`bg-gray-50 cursor-pointer dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400 ${""}`}
                                onClick={() => setSelectStudent(pre => {
                                    let a = [...pre];
                                    a[index] = !a[index];
                                    return a;
                                })}
                            >
                                <td className='px-4 py-3 text-center'>
                                    <input type="checkbox" checked={selectStudent[index]} id='click' name="" />
                                </td>
                                <td className='px-4 py-3'>Bhaumik</td>
                                <td className='px-4 py-3'>Panchal</td>
                                <td className='px-4 py-3'>01</td>
                                <td className='px-4 py-3'>10</td>
                                <td className='px-4 py-3'>A</td>
                                {/* <td className='px-4 py-3'>present</td>
                                <td className='px-4 py-3'>absent</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex py-3 justify-end gap-5">
                    <button className="bg-blue-500 hover:bg-blue-700 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-800 font-bold py-2 px-6 rounded">Present</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded">Absent</button>
                </div>

            </div>
        </>
    )
}

export default AttendancePage