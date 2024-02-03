"use client"
import React, { useEffect } from 'react'

import { useRouter } from 'next/navigation'

const Exam = () => {
    const router = useRouter();
    
    useEffect(() => {
        router.push("/exam/result");
    }, [])

    return (
        <>
            Exam Result Pending
        </>
    )
}

export default Exam