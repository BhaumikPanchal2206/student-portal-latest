import { Outlet } from "react-router-dom";
import DoubtHeader from "../header";

const DoubtLayout = () => {
    return (
        <>
            <DoubtHeader />
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default DoubtLayout;