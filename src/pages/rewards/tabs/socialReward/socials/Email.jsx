import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../../../../context/app.context';
import { toast } from 'sonner';
import { useReward } from '../../../context/api';

export default function EmailComponents({email, close}) {
    const { user, api } = useApp()
    const { fetchDailyTaskData } = useReward()
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    const [load, setLoading] = useState(false)

  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; 
    for (let i = 0; i < index; i++) {
      if (!otp[i]) return; 
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      setTimeout(() => {
        inputRefs.current[index + 1]?.focus();
      }, 10);
    }
    if (value && index === 5) {
      handleOtpSubmit(newOtp);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpSubmit = async(otpData = otp) => {
    const otpString = otpData.join('');
    if(!user) return
    setLoading(true)
    const response = await api.verifyEmail(user?.userId, otpString)
    if(response.success){
        fetchDailyTaskData()
        toast.success(response?.message)
    }
    else{
        toast.error(response?.message)
    }
    setLoading(false)
    close()
    setOtp(['', '', '', '', '', '']);
  };


  const closeModal = () => {
    setOtp(['', '', '', '', '', '']);
    close()
  };

  return (
    <>

    <div 
        className="fixed inset-0 flex items-center justify-center z-5098"
          style={{ background: 'var(--backdrop)' }}
        >
          <div 
            className="rounded-lg p-8 shadow-2xl max-w-md w-full mx-4"
            style={{ 
              background: 'var(--card-color)',
              border: '1px solid var(--border)'
            }}
          >
            <h2 
              className="text-2xl font-bold text-center mb-2 font-nunito"
              style={{ color: 'var(--active-text)' }}
            >
              Email Verification
            </h2>
            <p className="text-center mb-6 font-nunito"
              style={{ color: 'var(--text-color)' }} >
              Enter the 6-digit code sent to your email <br /> {email}
            </p>
            
            <div className="flex justify-center space-x-3 mb-6">
              {otp.map((digit, index) => {
                // Check if this input should be disabled (sequential entry)
                const isDisabled = index > 0 && otp.slice(0, index).some(d => !d);
                
                return (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    disabled={isDisabled}
                    className="w-12 h-12 text-center text-xl font-bold border-2 rounded-lg focus:outline-none transition-all font-nunito"
                    style={{
                      background: digit 
                        ? 'var(--card-primary-color)' 
                        : isDisabled 
                          ? 'var(--inactive-btn)' 
                          : 'var(--background)',
                      borderColor: digit 
                        ? 'var(--green-700-normal)' 
                        : isDisabled 
                          ? 'var(--border)' 
                          : 'var(--border)',
                      color: isDisabled ? 'var(--text-color)' : 'var(--active-text)',
                      borderWidth: '2px',
                      cursor: isDisabled ? 'not-allowed' : 'text',
                      opacity: isDisabled ? 0.5 : 1
                    }}
                    onFocus={(e) => {
                      if (!digit && !isDisabled) {
                        e.target.style.borderColor = 'var(--primary-color)';
                      }
                    }}
                    onBlur={(e) => {
                      if (!digit && !isDisabled) {
                        e.target.style.borderColor = 'var(--border)';
                      }
                    }}
                  />
                );
              })}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={closeModal}
                className="flex-1 px-4 py-2 border rounded font-nunito font-semibold transition-colors"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-color)',
                  background: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--inactive-btn)';
                  e.target.style.color = 'var(--active-text)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'var(--text-color)';
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => handleOtpSubmit()}
                disabled={otp.some(digit => !digit)}
                className="flex-1 px-4 py-2 rounded font-nunito font-semibold transition-colors disabled:cursor-not-allowed"
                style={{
                  background: otp.some(digit => !digit) ? 'var(--inactive-btn)' : 'var(--sec-color)',
                  color: otp.some(digit => !digit) ? 'var(--text-color)' : 'var(--active-text)'
                }}
                onMouseEnter={(e) => {
                  if (!otp.some(digit => !digit)) {
                    e.target.style.background = 'var(--sec1-color)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!otp.some(digit => !digit)) {
                    e.target.style.background = 'var(--sec-color)';
                  }
                }}
              >
                {load ? "Loading..." : `Verify`}
              </button>
            </div>
          </div>
        </div>

    </>
  );
}
