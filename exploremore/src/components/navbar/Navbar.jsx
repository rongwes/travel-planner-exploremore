"use client"
import Link from 'next/link'
import { AiOutlineHome } from "react-icons/ai"
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [showModal, setShowModal] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleModal = () => setShowModal(prev => !prev)

    useEffect(() => {
        window.onscroll = () => {
            setIsScrolled(window.scrollY === 0 ? false : true)
            return () => (window.onscroll = null)
        }
    }, [])
    return (
        <div className={`fixed z-50 h-16 w-full top-0 left-0 ${isScrolled ? "shadow-md backdrop-blur" : ""}`}>
            <div className="h-full w-2/3 mx-auto flex items-center justify-between">
             <Link href="/" className="flex items-center gap-2 transition-all">
                <h1 className={`${isScrolled ? "text-blue-600" : "text-[#cec7c7]"} text-2xl font-bold`}>
                    ExploreMore 
                </h1>
                <AiOutlineHome
                    size={25}
                    color={`${isScrolled ? "rgb(37 99 235)" : "#cec7c7"}`}
                />
             </Link>   
            </div>
        </div>
    )
}

export default Navbar