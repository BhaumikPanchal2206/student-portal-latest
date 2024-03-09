import React from 'react'

const dashboard_greet = {
    "first": [
        { title: "Class", description: <>12 <sup> th</sup></> },
        { title: "Division", description: "B" },
    ],
    second: [
        { title: "Enrollment Number", description: "2204030102106" },
        { title: <>Attendance<div>(last month)</div></>, description: "80%" },
    ]
}

const ExamResult = () => {
    return (
        <div className='py-2 px-3'>
            <section className="text-gray-600 dark:text-white body-font pt-10">
                <div className="mx-auto">
                    <div className="p-5 bg-white dark:bg-gray-800 flex items-center !mx-auto border-b  mb-10 border-gray-200 dark:border-gray-800 rounded-lg sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                            <img
                                alt=''
                                src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h1 className="text-black dark:text-gray-100 text-lg md:text-2xl title-font font-bold mb-2">Welcome , Bhaumik Panchal</h1>
                            <div className='lg:flex items-center sm:text-center font-bold text-gray-800'>
                                {Object.keys(dashboard_greet).map((ele, index) => (
                                    <div key={index} className='w-full sm:flex items-center'>
                                        {dashboard_greet[ele].map((item, i) => (
                                            <div key={index} className="w-full md:w-1/2 lg:w-full xl:w-1/4 mb-4 mx-auto">
                                                <h2 className="text-gray-500 dark:text-gray-100">
                                                    {item.title}
                                                </h2>
                                                <p className='dark:text-gray-100'>{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <table className="w-full text-left">
                <thead>
                    <tr className="text-xs font-semibold tracking-wide  text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                        <th className="px-4 py-3">{"date".toUpperCase()}</th>
                        <th className="px-4 py-3">{"subject".toUpperCase()}</th>
                        <th className="px-4 py-3">{"marks.".toUpperCase()}</th>
                        <th className="px-4 py-3">{"total".toUpperCase()}</th>
                        <th className="px-4 py-3">{"pass/fail".toUpperCase()}</th>
                        <th className="px-4 py-3">{"percentage".toUpperCase()}</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    {[1, 2, 3, 4, 5].map((ele, index) => (
                        <tr
                            key={index}
                            className={`bg-gray-50 cursor-pointer dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-200 ${""}`}
                        >
                            <td className='px-4 py-3'>15-1-2023</td>
                            <td className='px-4 py-3'>English</td>
                            <td className='px-4 py-3'>72</td>
                            <td className='px-4 py-3'>100</td>
                            <td className='px-4 py-3'>pass</td>
                            <td className='px-4 py-3'>72%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ExamResult