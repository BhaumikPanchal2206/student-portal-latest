import React from 'react'

import "./styles/style.css"
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Dashboard from "./components/dashboard";
import SignUp from './components/auth/register';
import LogIn from './components/auth/log-in';
import HomeLayout from './components/home/home-layout';
import Announcements from './components/announcements';
import NotFoundPage from './components/not-found';
import Profile from './components/profile';
import SettingPage from './components/settings';
import AttendancePage from './components/attendance';
import Notes from './components/note';
import DoubtPage from './components/doubts';
import ExamLayout from './components/exam/exam-layout';
import ExamFees from './components/exam/exam-fees';
import ExamResult from './components/exam/exam-result';
import UpcomingExam from './components/exam/upcoming-exam';
import ExamDetails from './components/exam/exam-id';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer pauseOnHover={false} autoClose={1000} position="top-left" />
      <Routes>

        {/* Auth Components */}
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />

        {/* After Logged In */}
        <Route path="/" element={<HomeLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="attendance" element={<AttendancePage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="note" element={<Notes />} />
          <Route path="doubts" element={<DoubtPage />} />
          <Route path="exam" element={<ExamLayout />} >
            <Route index element={<ExamFees />} />
            <Route path="exam-fees" element={<ExamFees />} />
            <Route path="result" element={<ExamResult />} />
            <Route path="upcoming-exam" element={<UpcomingExam />} />
            <Route path="upcoming-exam/:examId" element={<ExamDetails />} />
            {/* </Route> */}
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<SettingPage />} />

        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
