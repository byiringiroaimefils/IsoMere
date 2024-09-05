import { useState } from 'react';
import NavBar from "../NavBar";
import Footer from '../Pages/Footer';

export default function Subscribe() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscription submitted:', { email });
    };

    return (
        <>
            <NavBar />
            <div className="container mt-20 mx-auto px-4 max-w-4xl">
                <h1 className="text-3xl font-bold text-center mb-8">Subscription</h1>
                <form onSubmit={handleSubmit} className=" px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                        >
                            Subscribe Now
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}