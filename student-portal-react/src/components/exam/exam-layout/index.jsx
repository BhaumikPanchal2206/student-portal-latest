import { Outlet } from "react-router-dom";
import ExamHeader from "../header";

const ExamLayout = () => {
    return (
        <>
            <div>
                <ExamHeader />
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default ExamLayout;