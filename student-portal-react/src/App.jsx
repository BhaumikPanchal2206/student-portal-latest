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
import DoubtPage from './components/doubts/doubt-page';
import ExamLayout from './components/exam/exam-layout';
import ExamFees from './components/exam/exam-fees';
import ExamResult from './components/exam/exam-result';
import UpcomingExam from './components/exam/upcoming-exam';
import ExamDetails from './components/exam/exam-id';
import UserContext from './contexts/UserContext';
import ProtectedRoute from './components/protected';
import DoubtLayout from './components/doubts/doubt-layout';
import DoubtAnswer from './components/doubts/doubt-answer';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <UserContext>
      <BrowserRouter>
        <ToastContainer pauseOnHover={false} autoClose={1000} position="top-left" />
        <Routes>

          {/* Auth Components */}
          {/* <Route path="/" element={<ProtectedRoute />}> */}
            <Route index element={<LogIn />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/register" element={<SignUp />} />
          {/* </Route> */}

          {/* After Logged In */}
          {/* <Route path="/" element={<ProtectedRoute />}> */}
            <Route path="/" element={<HomeLayout />} >
              <Route index element={<Dashboard />} />
              <Route path="announcements" element={<Announcements />} />
              <Route path="attendance" element={<AttendancePage />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="note" element={<Notes />} />
              <Route path="doubts" element={<DoubtLayout />}>
                <Route path="doubt" element={<DoubtPage />} />
                <Route path="answer" element={<DoubtAnswer />} />
              </Route>
              <Route path="exam" element={<ExamLayout />} >
                <Route index element={<ExamFees />} />
                <Route path="exam-fees" element={<ExamFees />} />
                <Route path="result" element={<ExamResult />} />
                <Route path="upcoming-exam" element={<UpcomingExam />} />
                <Route path="upcoming-exam/:examId" element={<ExamDetails />} />
              </Route>
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<SettingPage />} />
              {/* <Route path="notes" element={<Notes />} /> */}
            </Route>
          {/* </Route> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
