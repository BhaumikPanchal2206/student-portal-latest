import { Outlet } from "react-router-dom";
import ExamHeader from "../header";

const ExamLayout = () => {
    return (
        <>
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default ExamLayout;