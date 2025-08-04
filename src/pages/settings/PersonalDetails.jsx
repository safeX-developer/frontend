import React from 'react'

export default function PersonalDetails() {


  return (
    <>
    <section className="relative space-y-6 min-h-[500px]">
                <div className="join" style={{
                alignItems: 'center',
                width: '400',
                height: '129',
                angle: '0 deg',
                opacity: '1',
                gap: '8px',
                left: '90px',
                }}>
               
                </div>
                    <h2 className="text-2xl font-bold text-center">Profile Details</h2>
                    <p className="text-gray-400 text-center">Setup your personal details--</p>
                    <div className="flex justify-center">
                      
                        <img
                            src="https://i.pravatar.cc/100"
                            alt="Profile"
                            className="w-24 h-24 rounded-full border-4 border-gray-700"
                        />
                    </div>
                

                <form className="w-full space-y-4 max-w-lg mx-auto">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full name<span style={{color: 'orange'}}>*</span></label>
                        <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border border-none rounded px-4 py-2 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Username<span style={{color: 'orange'}}>*</span></label>
                        <input
                        type="text"
                        placeholder="Username"
                        className="w-full border border-none rounded px-4 py-2 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full border border-none rounded px-4 py-2 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email<span style={{color: 'orange'}}>*</span></label>
                        <input
                        type="email"
                        placeholder="eg joe123@gmail.com"
                        className="w-full border border-none rounded px-4 py-2 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Address</label>
                        <input
                        type="text"
                        placeholder="Address"
                        className="w-full border border-none rounded px-4 py-2 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"/>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded" 
                            style={{
                                width: '439px',
                                height: '55px',
                                angle: '0 deg',
                                opacity: '1',
                                left: '177px',
                                top: '794px',
                                borderRadius: '8px',
                                paddingTop: '16px',
                                paddingRight: '24px',
                                paddingBottom: '16px',
                                paddingLeft: '24px',
                                gap: '10px',

                            }}>
                            Save Changes
                        </button>
                    </div>
                </form>
                
            </section>
    </>
  )
}
