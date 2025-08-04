import { useState, useRef } from 'react';


export default function Security() {
    const [email, setEmail] = useState('');
    const [twoFAEnabled, setTwoFAEnabled] = useState(false);
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = useRef([]);


    const handleSecuritySubmit = (e) => {
        e.preventDefault();
        if (email) {
            setShowVerificationModal(true);
        } else {
            alert("Please fill in your email");
        }
    };

    function handleInputChange(e, index) {
    const val = e.target.value;
    if (isNaN(val)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = val;
    setOtp(updatedOtp);
    if (val !== "" && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();}
    }
    function handleKeyDown(e, index) {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
    inputRefs.current[index - 1].focus();}
    }
    function handleVerifyOtp() {
    if (otp.some(digit => digit === "")) {
        alert("Please enter all 4 digits");
        return;
    }

    console.log("OTP entered:", otp.join(""));
    setShowVerificationModal(false);
    setOtp(["", "", "", ""]);
    }






  return (
    <section className="relative space-y-6 min-h-[500px]">
        <div className="group">
            <h2 className="text-2xl font-bold text-center">Security</h2>
            <p className="text-gray-400 text-center">Secure your account and change Mail here</p>

            <div className="max-w-lg mx-auto w-full mt-6">
            <label className="block text-sm font-medium mb-1">New Email</label>
            <input
                type="email"
                placeholder="eg joe123@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-none rounded px-4 py-2 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            </div>

            <div className="max-w-lg mx-auto w-full mt-6">
            <label className="block text-sm font-medium">2FA</label>
            <div className="flex items-center justify-between">
                <p className="text-gray-400 text-sm mb-2">Allow two factor authentication</p>
                <input
                type="checkbox"
                checked={twoFAEnabled}
                onChange={() => setTwoFAEnabled(!twoFAEnabled)}
                className="form-checkbox h-5 w-5 text-orange-500 rounded-full focus:ring-orange-500"
                />
            </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-0 w-full flex justify-center">
            <button
            onClick={handleSecuritySubmit}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg w-[439px] h-[55px]"
            >
            Verify
            </button>
        </div>

        {showVerificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-[#1c2434] p-8 rounded-xl text-center w-96 shadow-lg">
                <h2 className="text-white text-2xl font-bold mb-2">Verify code</h2>
                <p className="text-gray-400 mb-6">Enter the code sent to your email.</p>
                <div className="flex justify-center gap-2 mb-4">
                    {[0, 1, 2, 3].map((i) => (
                        <input
                            key={i}
                            type="text"
                            maxLength="1"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={otp[i]}
                            className="w-12 h-12 text-center text-white bg-[#2d3748] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            onKeyDown={(e) => handleKeyDown(e, i)}
                            onChange={(e) => handleInputChange(e, i)}
                            ref={(el) => (inputRefs.current[i] = el)}
                        />                 
                    ))}
                </div>
                <p className="text-sm text-gray-400 mb-4">
                    Didn’t receive any code?{' '}
                    <button className="text-orange-500 underline">Resend code</button>
                </p>
                <button 
                onClick={handleVerifyOtp}
                className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-md font-semibold">
                    Verify
                </button>
            </div>
        </div>
        )}


    </section>

    
  );
}
