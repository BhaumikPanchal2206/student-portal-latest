import { Outlet } from "react-router-dom";
import ExamHeader from "../header";

const ExamLayout = () => {
    return (
        <>
            <ExamHeader />
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default ExamLayout;