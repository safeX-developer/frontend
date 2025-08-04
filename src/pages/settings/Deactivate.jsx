import React from 'react'

export default function Deactivate() {
  return (
    <>
    <section>
        <div className="h-screen flex items-center justify-center bg-[#1E2633] text-white px-4">
            <div className="max-w-md w-full space-y-6 p-6 rounded-2xl bg-[#1B2230] shadow-lg">
                <h2 className="text-center text-2xl font-semibold">Security</h2>
                <p className="text-center text-gray-400 text-sm">
                Secure your account and change Mail here
                </p>
                <div>
                    <label htmlFor="reasons" className="block text-sm mb-2">
                        Reasons
                    </label>
                    <textarea
                        id="reasons"
                        rows="4"
                        className="w-full rounded-md bg-[#121924] p-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-600"
                        placeholder="Let us know why you are deactivating your account..."
                    />
                </div>
                <button
                type="button"
                className="w-full py-3 rounded-md bg-[#E53958] hover:bg-[#c72f49] transition-colors"
                >
                Deactivate Account
                </button>
            </div>
        </div>
    </section>
    </>
  )
}
