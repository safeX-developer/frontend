import React, { useState, useEffect } from 'react'
import { Country, State, City } from 'country-state-city'

export default function Register({ isOpen, onRegister }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    country: '',
    state: '',
    city: '',
    address: ''
  })
  
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  
  // Check if form is valid (all fields filled)
  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '')
  }
  
  // Load countries on component mount
  useEffect(() => {
    const allCountries = Country.getAllCountries()
    setCountries(allCountries)
  }, [])
  
  // Load states when country changes
  useEffect(() => {
    if (formData.country) {
      const countryStates = State.getStatesOfCountry(formData.country)
      setStates(countryStates)
      // Reset state and city when country changes
      setFormData(prev => ({ ...prev, state: '', city: '' }))
      setCities([])
    }
  }, [formData.country])
  
  // Load cities when state changes
  useEffect(() => {
    if (formData.country && formData.state) {
      const stateCities = City.getCitiesOfState(formData.country, formData.state)
      setCities(stateCities)
      // Reset city when state changes
      setFormData(prev => ({ ...prev, city: '' }))
    }
  }, [formData.country, formData.state])
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid()) {
      onRegister(formData)
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
                  value={formData.firstName}
                  onChange={handleChange}
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
                  value={formData.lastName}
                  onChange={handleChange}
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
                value={formData.username}
                onChange={handleChange}
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
                value={formData.country}
                onChange={handleChange}
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
                value={formData.state}
                onChange={handleChange}
                required
                disabled={!formData.country}
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
                value={formData.city}
                onChange={handleChange}
                required
                disabled={!formData.state}
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
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-inactive rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: 'var(--background-color)' }}
                placeholder="123 Main St, Apt 4B"
              />
            </div>
          </form>
        </div>
        
        {/* Footer with submit button - Fixed */}
        <div className="sticky bottom-0 bg-[var(--card-color)] px-6 py-4 border-t border-gray-700 rounded-b-lg">
          <button
            onClick={handleSubmit}
            disabled={!isFormValid()}
            className={`w-full px-4 py-2 text-white rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isFormValid() 
                ? 'bg-[var(--sec-color)] hover:bg-[var(--sec1-color)]' 
                : 'bg-gray-600 cursor-not-allowed opacity-70'
            }`}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}