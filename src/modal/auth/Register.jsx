import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import { useApp } from "../../context/app.context";

function Register({ isOpen }) {
  const { register } = useApp();
  
  // Single state object for all form fields
  const [inputInfo, setInputInfo] = useState({
    firstName: '',
    lastName: '',
    username: '',
    country: '',
    state: '',
    city: '',
    address: '',
    email: '',
    referredBy: ''
  });
  
  const [load, setLoad] = useState(false);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Check if form is valid (all required fields filled)
  const isFormValid = () => {
    const { firstName, lastName, username, country, state, city, address, email } = inputInfo;
    return firstName.trim() !== '' &&
           lastName.trim() !== '' &&
           username.trim() !== '' &&
           country.trim() !== '' &&
           state.trim() !== '' &&
           city.trim() !== '' &&
           address.trim() !== '' &&
           email.trim() !== '';
  };
  
  // Load countries on component mount
  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);
  
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
        setInputInfo(prev => ({
          ...prev,
          referredBy: inviteCode
        }));
        console.log('Referral code detected:', inviteCode);
      } else {
        // Check if we have a stored referral code
        const storedCode = localStorage.getItem('referralCode');
        if (storedCode) {
          setInputInfo(prev => ({
            ...prev,
            referredBy: storedCode
          }));
          console.log('Using stored referral code:', storedCode);
        }
      }
    };
    
    parseReferralCode();
  }, []);
  
  // Load states when country changes
  useEffect(() => {
    if (inputInfo.country) {
      const countryStates = State.getStatesOfCountry(inputInfo.country);
      setStates(countryStates);
      // Reset state and city when country changes
      setInputInfo(prev => ({
        ...prev,
        state: '',
        city: ''
      }));
      setCities([]);
    }
  }, [inputInfo.country]);
  
  // Load cities when state changes
  useEffect(() => {
    if (inputInfo.country && inputInfo.state) {
      const stateCities = City.getCitiesOfState(inputInfo.country, inputInfo.state);
      setCities(stateCities);
      // Reset city when state changes
      setInputInfo(prev => ({
        ...prev,
        city: ''
      }));
    }
  }, [inputInfo.country, inputInfo.state]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setLoad(true);
      // Call the register function with the form data
      register(inputInfo);
    }
  };
  
  if (!isOpen) return null;
  
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
                  value={inputInfo.firstName}
                  onChange={handleInputChange}
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
                  value={inputInfo.lastName}
                  onChange={handleInputChange}
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
                value={inputInfo.username}
                onChange={handleInputChange}
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
                value={inputInfo.country}
                onChange={handleInputChange}
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
                value={inputInfo.state}
                onChange={handleInputChange}
                required
                disabled={!inputInfo.country}
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
                value={inputInfo.city}
                onChange={handleInputChange}
                required
                disabled={!inputInfo.state}
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
                value={inputInfo.address}
                onChange={handleInputChange}
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
                value={inputInfo.email}
                onChange={handleInputChange}
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
                value={inputInfo.referredBy}
                onChange={handleInputChange}
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
          >
            {load ? "Loading..." : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
