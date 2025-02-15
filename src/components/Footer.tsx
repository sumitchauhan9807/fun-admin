// icons 
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { RiYoutubeFill } from "react-icons/ri";


export default function Footer() {
    return (
        <footer className="flex flex-col bg-main-pink pt-8">
            <div className="text-white sm:pd-0 md:ml-16 phone:mx-4 w-auto">
                <h2 className="xl:text-8xl font-medium my-4 lg:text-7xl md:text-6xl sm:text-5xl phone:text-4xl">ASK QUESTIONS</h2>
                <span className="flex md:text-4xl lg:text-3xl md:text-2xl font-medium w-3/5">Why this App is important for Married Couples</span>
            </div>
            <div className="w-full flex flex-col items-center my-8">
                <div className="flex items-center my-4">
                    <div className="bg-black p-3 rounded-full mx-2">
                        <FaFacebookF size={20} color="white" />
                    </div>
                    <div className="bg-black p-3 rounded-full mx-2">
                        <FaInstagram size={20} color="white" />
                    </div>
                    <div className="bg-black p-3 rounded-full mx-2">
                        <BsTwitterX size={18} color='white' />
                    </div>
                    <div className="bg-black p-3 rounded-full mx-2">
                        <GrLinkedinOption size={20} color='white' />
                    </div>
                    <div className="bg-black p-3 rounded-full mx-2">
                        <RiYoutubeFill size={20} color='white' />
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="mx-4 phone:text-xs">Privacy policy</span>
                    <span className="mx-4 phone:text-xs">Terms of services</span>
                    <span className="mx-4 phone:text-xs">imprint</span>
                </div>
            </div>
            <div className="text-white bg-black w-full flex justify-center p-4 text-center phone:text-xs">
                © Copyright 2024 Sneaky Paradise. All rights reserved. Powered by Dialogmakers International Ltd.
            </div>
        </footer>
    )
}