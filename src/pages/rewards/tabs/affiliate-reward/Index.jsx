import React, { useState } from 'react';
import { ContentCopy, QrCode2 } from '@mui/icons-material';
import { toast } from 'sonner';
import { useApp } from '../../../../context/app.context';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AffiliateReward() {
     const { user } = useApp();

    const referralLink = `${window.location.origin }/?ref=${user?.referralCode}`;
    const handleCopy = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success("copped")
        } catch (err) {
            toast.error('Failed to copy to clipboard');
        }
    };

    const generateQRCode = (text) => {
        return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
    };

    // Check if user is not available
    if (!user) {
        return (
            <div className="bg-[var(--background-color)] rounded-lg p-6 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <p className="text-white text-lg">
                        Ooops!!, Connect to your wallet to participate in referral bonuses
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[var(--background-color)] rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-white font-semibold text-lg">Refer a friend to earn</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left side - Link and Code */}
                <div className="lg:col-span-2 space-y-4">
                    {/* Referral Link */}
                    <div className="bg-[var(--background-color)] rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="text-white font-medium">Referral Link</h4>
                        </div>
                        <div className="card mb-3 flex items-center justify-between rounded-md p-2 border border-gray-600">
                            <p className="text-gray-300 text-sm break-all">{referralLink}</p>
                            <button
                                onClick={() => handleCopy(referralLink, 'Link')}
                                className="flex items-center space-x-1  text-white px-3 py-1 rounded-md text-sm hover:bg-opacity-90 transition-colors"
                            >
                                <ContentCopy className="w-2 h-2 text-gray-300" />
                            </button>
                        </div>

                        <div className="card flex items-center justify-between rounded-md p-2 border border-gray-600">
                            <p className="text-gray-300 text-sm break-all">{user?.referralCode}</p>
                            <button
                                onClick={() => handleCopy(user?.referralCode, 'Code')}
                                className="flex items-center space-x-1  text-white px-3 py-1 rounded-md text-sm hover:bg-opacity-90 transition-colors"
                            >
                                <ContentCopy className="w-2 h-2 text-gray-300" />
                            </button>
                        </div>
                    </div>

                    {/* Stats or Info */}
                    <div className="bg-[var(--background-color)] rounded-lg p-4">
                        <h4 className="text-white font-medium mb-3">How it works</h4>
                        <div className="space-y-2 text-sm text-gray-300">
                            <p className="flex items-center">
                                <span className="w-2 h-2 bg-[var(--sec-color)] rounded-full mr-2"></span>
                                Share your referral link or code with friends
                            </p>
                            <p className="flex items-center">
                                <span className="w-2 h-2 bg-[var(--sec-color)] rounded-full mr-2"></span>
                                They sign up using your link or code
                            </p>
                            <p className="flex items-center">
                                <span className="w-2 h-2 bg-[var(--sec-color)] rounded-full mr-2"></span>
                                You both earn rewards when they complete tasks
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right side - QR Code */}
                <div className="lg:col-span-1">
                    <div className=" rounded-lg p-4 text-center sticky top-4">     
                        <div className="bg-white rounded-lg p-4 inline-block mb-4">
                            <img 
                                src={generateQRCode(referralLink)} 
                                alt="Referral QR Code"
                                className="w-40 h-40"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
