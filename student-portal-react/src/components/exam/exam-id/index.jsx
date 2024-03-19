import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SVG from "react-inlinesvg";
import fetchApi from '../../../utils/helper';
import { API_ENDPOINTS } from '../../../constants/api';
import { toast } from 'react-toastify';

const ExamDetails = () => {
    const [examData, setExamData] = useState({});
    const [loading, setLoading] = useState(false)
    const params = useParams();

    useEffect(() => {
        fetchDoubts();
    }, []);

    const fetchDoubts = async () => {
        setLoading(true);
        try {
            let response = await fetchApi({ url: API_ENDPOINTS.EXAM, isAuthRequired: true, method: "GET" });
            setExamData(response.data.find(ele => ele._id === params.examId));
        } catch (error) {
            toast.error("Error fetching data!");
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="container mx-auto px-4 py-6">

            {
                loading ? (
                    <div className='text-center py-4'>
                        <SVG src='/assets/icons/loading.svg' className='inline w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600' />
                    </div>
                ) : (
                    <>
                        <div className="mb-5 border-2 border-black dark:border-gray-100 inline-block rounded-full p-1 bg-white dark:bg-gray-800">
                            <Link to="/exam/upcoming-exam" className="overflow-hidden rounded-full cursor-pointer">
                                <SVG src="/assets/icons/left-arrow.svg" className='text-black dark:text-white' />
                            </Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                            <div className="mb-4">
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Exam Details</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-lg text-gray-700 dark:text-gray-200"><span className="font-semibold">Standard:</span> {examData.exam_class}</p>
                                    <p className="text-lg text-gray-700 dark:text-gray-200"><span className="font-semibold">Subject:</span> {examData.exam_subject}</p>
                                </div>
                                <div>
                                    <p className="text-lg text-gray-700 dark:text-gray-200"><span className="font-semibold">Date:</span> {examData.exam_date}</p>
                                    <p className="text-lg text-gray-700 dark:text-gray-200"><span className="font-semibold">Time:</span> {examData.exam_time}</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-lg text-gray-700 dark:text-gray-200"><span className="font-semibold">Exam Duration:</span> {examData.exam_duration}</p>
                                    <p className="text-lg text-gray-700 dark:text-gray-200"><span className="font-semibold">Exam Total Marks:</span> {examData.exam_total_marks}</p>
                                    <p className="text-lg text-gray-700 dark:text-gray-200"><span className="font-semibold">Exam Passing Marks:</span> {examData.exam_passing_marks}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default ExamDetails;
