const Payment = () => {

    const paymentMethods = [
        { logo: "/download.jpg", description: "861651", type: "Mobile Money", },
        { logo: "/equity.png", description: "4012100866538", type: "Equity" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
                {/* Header Card */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8">
                        <h2 className="text-3xl font-bold text-white text-center mb-2">Premium Subscription</h2>
                        <p className="text-blue-100 text-center">Access all premium features and content</p>
                    </div>

                    <div className="p-8">
                        <div className="flex justify-between items-center mb-8 bg-blue-50 p-4 rounded-xl">
                            <div>
                                <p className="text-sm text-gray-500">Monthly subscription</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Payment Method</h3>
                            {paymentMethods.map((method) => (
                                <div
                                    className="flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 border-gray-200 hover:border-blue-200"
                                >
                                    <div className="flex items-center flex-1 space-x-4">
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center `}>
                                            <img
                                                src={method.logo}
                                                alt={`${method.type} logo`}
                                                className="w-8 h-8 object-contain"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-gray-800">{method.type}</p>
                                            <p className="text-sm text-gray-500">{method.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="w-full mt-8 py-4 px-6 rounded-xl font-semibold text-white shadow-sm transition-all duration-300  bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        >
                            Pay Now
                        </button>

                        <div className="mt-6 flex items-center justify-center space-x-4">
                            <div className="flex items-center text-gray-500">
                                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                Secure Payment
                            </div>
                            <div className="flex items-center text-gray-500">
                                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                SSL Encrypted
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment for Entier Year */}

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">What's Included</h3>
                    <div className="space-y-4">
                    <span className="text-xl font-bold text-gray-900">$0.50</span>
                        {[
                            "Unlimited access to all stories",
                            "Ad-free reading experience",
                            "Exclusive content",
                            "Priority support",
                            "Monthly newsletter"
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center text-gray-700">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                            </div>
                        ))}
                    </div>

                    <br />
                    {/* Payment for Entier Year */}

                    <div className="space-y-4">
                    <span className="text-xl font-bold text-gray-900">$1.50</span>
                        {[
                            "Unlimited access to all stories",
                            "Ad-free reading experience",
                            "Exclusive content",
                            "Priority support",
                            "Monthly newsletter"
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center text-gray-700">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
