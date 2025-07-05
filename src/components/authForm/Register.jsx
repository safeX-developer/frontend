import React, { useState, useEffect } from 'react'
import { Country, State, City } from 'country-state-city'
import { prepareContractCall } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { contract } from "../../context/AppContext"

export default function Register({ isOpen }) {
  const { mutate: sendTransaction } = useSendTransaction();
  
  // Individual state for each form field
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [referredBy, setReferredBy] = useState('')
  const [load, setLoad] = useState(false)
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  
  // Check if form is valid (all fields filled)
  const isFormValid = () => {
    return firstName.trim() !== '' && lastName.trim() !== '' && username.trim() !== '' && 
           country.trim() !== '' && state.trim() !== '' && city.trim() !== '' && 
           address.trim() !== '' && email.trim() !== ''
  }
  
  // Load countries on component mount
  useEffect(() => {
    const allCountries = Country.getAllCountries()
    setCountries(allCountries)
  }, [])
  
  // Check for referral code in URL on initial load
  useEffect(() => {
    // Parse URL for referral code
    const parseReferralCode = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const inviteCode = urlParams.get('invite');
      
      if (inviteCode) {
        // Store in localStorage
        localStorage.setItem('referralCode', inviteCode);
        // Update state
        setReferredBy(inviteCode);
        console.log('Referral code detected:', inviteCode);
      } else {
        // Check if we have a stored referral code
        const storedCode = localStorage.getItem('referralCode');
        if (storedCode) {
          setReferredBy(storedCode);
          console.log('Using stored referral code:', storedCode);
        }
      }
    };
    
    parseReferralCode();
  }, []);
  
  // Load states when country changes
  useEffect(() => {
    if (country) {
      const countryStates = State.getStatesOfCountry(country)
      setStates(countryStates)
      // Reset state and city when country changes
      setState('')
      setCity('')
      setCities([])
    }
  }, [country])
  
  // Load cities when state changes
  useEffect(() => {
    if (country && state) {
      const stateCities = City.getCitiesOfState(country, state)
      setCities(stateCities)
      // Reset city when state changes
      setCity('')
    }
  }, [country, state])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid()) {
      setLoad(true)
      const transaction = prepareContractCall({
        contract,
        method:
          "function register(string country, string state, string username, string firstName, string lastName, string city, string email, string referredBy) returns (bool)",
        params: [
          country,
          state,
          username,
          firstName,
          lastName,
          city,
          email,
          referredBy,
        ],
      });
      sendTransaction(transaction);
    }
  }
  
  if (!isOpen) return null
  
  return (
    <div 
      className="fixed inset-0 z-99999 flex items-center justify-center overflow-y-auto"
      style={{ backgroundColor: 'var(--backdrop, rgba(0, 0, 0, 0.75))' }}
    >
      <div 
        className="relative w-full max-w-md my-8 mx-auto rounded-lg shadow-xl"
        style={{ 
          backgroundColor: 'var(--card-color)',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)'
        }}
      >
        
        {/* Header - Fixed */}
        <div className="sticky top-0 bg-[var(--card-color)] px-6 py-4 border-b border-gray-700 rounded-t-lg">
          <h2 className="text-xl font-semibold text-white">Create Your Account</h2>
        </div>
        
        {/* Scrollable form content */}
        <div className="px-6 py-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name fields - side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border-inactive rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ backgroundColor: 'var(--background-color)' }}
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border-inactive rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ backgroundColor: 'var(--background-color)' }}
                  placeholder="Doe"
                />
              </div>
            </div>
            
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-3 py-2 border-inactive rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: 'var(--background-color)' }}
                placeholder="johndoe123"
              />
            </div>
            
            {/* Country dropdown */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className="w-full px-3 py-2 border-inactive rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: 'var(--background-color)' }}
              >
                <option value="">Select Country</option>
                {countries.map(country => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            
            {/* State dropdown */}
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-300 mb-1">
                State/Province
              </label>
              <select
                id="state"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                disabled={!country}
                className="w-full px-3 py-2 border-inactive rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                style={{ backgroundColor: 'var(--background-color)' }}
              >
                <option value="">Select State</option>
                {states.map(state => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            
            {/* City dropdown */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">
                City
              </label>
              <select
                id="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                disabled={!state}
                className="w-full px-3 py-2 border-inactive rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                style={{ backgroundColor: 'var(--background-color)' }}
              >
                <option value="">Select City</option>
                {cities.map(city => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full px-3 py-2 border-inactive rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: 'var(--background-color)' }}
                placeholder="123 Main St, Apt 4B"
              />
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border-inactive rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: 'var(--background-color)' }}
                placeholder="john@example.com"
              />
            </div>
            
            {/* Referred By */}
            <div>
              <label htmlFor="referredBy" className="block text-sm font-medium text-gray-300 mb-1">
                Referred By (Optional)
              </label>
              <input
                type="text"
                id="referredBy"
                name="referredBy"
                value={referredBy}
                onChange={(e) => setReferredBy(e.target.value)}
                className="w-full px-3 py-2 border-inactive rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: 'var(--background-color)' }}
                placeholder="Referral code"
              />
            </div>
          </form>
        </div>
        
        {/* Footer with submit button - Fixed */}
        <div className="sticky bottom-0 bg-[var(--card-color)] px-6 py-4 border-t border-gray-700 rounded-b-lg">
          <button
            onClick={handleSubmit}
            disabled={!isFormValid() || load}
            className={`w-full px-4 py-2 text-white rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isFormValid() 
                ? 'bg-[var(--sec-color)] hover:bg-[var(--sec1-color)]' 
                : 'bg-gray-600 cursor-not-allowed opacity-70'
            }`}
          > {load ? "Loading..." : "Register"}
          </button>
        </div>
      </div>
    </div>
  )
}