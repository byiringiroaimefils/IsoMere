import React from 'react';
import Fotter from "./Pages/Footer"
import { SignInButton } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';

const BabyStoryLanding = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 flex flex-col font-serif">
            <header className="flex justify-between items-center p-4">
                <div className="flex items-center">
                    <div className="">
                        <img src='BabyStoryLogo.png' alt="" className='h-14 ' />
                    </div>
                    <span className="font-bold text-2xl translate-x-[-16px]">IsoMere</span>
                </div>
                <nav className='space-x-5 mr-10'>
                    {/* <button className="mr-2 bg-transparent border-none text-blue-500">Sign in</button> */}
                    <SignInButton mode='modal' redirectUrl='/Home' >
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
                            Sign In
                        </button>
                    </SignInButton>
                    
                    <SignInButton mode='modal' redirectUrl='/Home' >
                        <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-full">
                            Create Account
                        </button>
                    </SignInButton>
                </nav>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center text-center px-4 translate-y-36">
                <h1 className="text-3xl font-bold mb-4">
                    Train your children with <span className="text-blue-500">IsoMere</span>
                </h1>
                <h2 className="text-3xl font-semibold mb-6 ">
                    by Enhancing reading through Stories and Proverbs
                </h2>
                <p className="max-w-5xl mb-8 text-gray-600">
                    Our children must excel in reading short stories, Proverbs, and grow in the holy spirit through stories.
                    It is also crucial to call them to be disciples of Jesus, as a child must read and understand the significant
                    events that occurred in the past.
                </p><br />
                <div className="space-x-6">

                    <Link to="/Home" className='mr-2 '>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Get started</button>
                    </Link>
                    <Link to="/subscribe" className='mr-2 '>
                        <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-full">Subscription</button>
                    </Link>
                </div>
            </main> <br /><br />
            <div className='mt-72'>

                <Fotter />
            </div>
        </div>
    );
};

export default BabyStoryLanding;
