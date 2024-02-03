import ExamHeader from "@/components/exam/header";


const RootLayout = ({ children }) => {
    return (
        <>
            <div>
                <ExamHeader />
                <div>
                    {children}
                </div>
            </div>
        </>
    );
}

export default RootLayout;