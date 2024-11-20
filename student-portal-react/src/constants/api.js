const API_BASE_URL = 'https://student-portal-2-2oaw.onrender.com';

export const API_ENDPOINTS = {
    // Auth
    LOGIN: `${API_BASE_URL}/login`,
    REGISTER: `${API_BASE_URL}/register`,
    CHANGE_PASS: `${API_BASE_URL}/change-pass`,

    // User Data
    USER: `${API_BASE_URL}/user`,

    // Attendance
    ATTENDANCE: `${API_BASE_URL}/attendence`,
    ATTENDANCE_LIST: `${API_BASE_URL}/attendence-list`,

    // Doubts
    DOUBTS_STUDENT: `${API_BASE_URL}/doubts`,       // Student
    DOUBTS_ADMIN: `${API_BASE_URL}/doubtst`,        // Admin

    // Exam
    EXAM: `${API_BASE_URL}/exam`,
    EXAM_ALL: `${API_BASE_URL}/exam-all`,
};