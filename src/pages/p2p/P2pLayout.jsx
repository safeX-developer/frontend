import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BuyPage from './BuyPage';
import SellPage from './SellPage';

export default function P2pLayout() {
    const [paymentMe, setPaymentMe] = useState(0);
    const [selectCountry, setSelectCountry] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState("NGN");
    const [tab, setTab] = useState(0);
    const [methods, setMethods] = useState([
        {active: true, name: "All Payment Methods"},
        {active: false, name: "FPS"},
        {active: false, name: "Bank Transfer"},
        {active: false, name: "Cash in Person"},
        {active: false, name: "PayMe"},
        {active: false, name: "PayPal"},
        {active: false, name: "NETELLER"},
        {active: false, name: "Swish"},
        {active: false, name: "Skrill"},
        {active: false, name: "Livi Bank"},
        {active: false, name: "A-Bank"},
        {active: false, name: "Privat Bank"},
        {active: false, name: "Wise"},
    ]);

    const countries = [
        { code: "NGN", name: "Nigeria", abbr: "NG" },
        { code: "USD", name: "United States", abbr: "US" },
        { code: "GBP", name: "United Kingdom", abbr: "GB" }
    ];

    const [activeMethod, setActiveMethod] = useState(methods[0]);
    const navigate = useNavigate();
    const location = useLocation();

    // Check URL params on component mount and when location changes
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const tradeParam = searchParams.get('trade');
        
        if (tradeParam === 'sell') {
            setTab(1);
        } else {
            setTab(0);
        }
    }, [location.search]);

    const handleSelectActiveMethod = (e = {}) => {
        setActiveMethod(e);
        const updatedMethods = methods.map(element => ({
            ...element,
            active: element.name === e.name
        }));
        setMethods(updatedMethods);
    };

    const handleTabs = (event = 0) => {
        setTab(event);
        navigate(`?trade=${event ? "sell" : "buy"}`);
    };

    const showPaymentMethod = (event = 0) => {
        setPaymentMe(event);
    };

    const handleClose = () => {
        setPaymentMe(0);
    };

    const selectCurrency = (currency) => {
        setSelectedCurrency(currency);
        setSelectCountry(false);
    };

    // Function to get a color based on country code
    const getCountryColor = (code) => {
        const colors = {
            "NG": "#008751", // Nigeria green
            "US": "#3C3B6E", // US navy blue
            "GB": "#012169"  // UK blue
        };
        return colors[code] || "#555";
    };

    return (
        <div className="rounded-lg">
            <div className="mt-0">
                {/* Header section containing both Buy/Sell Switch and Search/Filter */}
                <div className="flex items-center justify-between bg-[var(--background-color)] px-1 pt-4 pb-6 rounded-t-lg border-b border-border sticky top-8 z-10">
                    {/* Buy/Sell Switch */}
                    <div className="flex-shrink-0">
                        <div className="flex gap-2 p-1 bg-[var(--card-color)] rounded-lg overflow-hidden">
                            <button  
                                onClick={() => handleTabs(0)}
                                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                                    tab === 0 
                                    ? 'bg-green-600 text-white' 
                                    : 'text-[var(--text-color)] hover:bg-[rgba(255,255,255,0.05)]'
                                }`}
                            >
                                Buy
                            </button>
                            <button 
                                onClick={() => handleTabs(1)}
                                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                                    tab === 1 
                                    ? 'bg-red-700 text-white' 
                                    : 'text-[var(--text-color)] hover:bg-[rgba(255,255,255,0.05)]'
                                }`}
                            >
                                Sell
                            </button>
                        </div>
                    </div>

                    {/* Search and Filter Section */}
                    <div className="flex items-center gap-4">
                        {/* Amount Input and Currency Selector */}
                        <div className="flex px-[10px] rounded bg-[var(--card-color)]">
                            <input placeholder="Enter Amount" className="w-[120px] h-10  border-none text-white outline-none focus:ring-0 bg-transparent"
                                type="text" />
                            <div  className="relative w-[100px] h-10 flex items-center justify-between cursor-pointer"
                                onClick={() => setSelectCountry(!selectCountry)}>
                                <div className="flex items-center">
                                    <span className="text-white font-medium">{selectedCurrency}</span>
                                </div>
                                <svg className="w-4 h-4 text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M8.77701 10.6106L11.8139 6.51324C12.1281 6.08933 12.0349 5.49409 11.6058 5.18373C11.4407 5.06435 11.2415 5 11.0369 5H4.96304C4.43117 5 4 5.4259 4 5.95128C4 6.15336 4.06515 6.35019 4.186 6.51324L7.22293 10.6106C7.53712 11.0345 8.13972 11.1266 8.56887 10.8162C8.64851 10.7586 8.7187 10.6893 8.77701 10.6106Z"></path>
                                </svg>
                                
                                {/* Country Dropdown */}
                                {selectCountry && (
                                    <div className="absolute top-full right-0 mt-1 w-[200px] bg-[var(--card-color)] border border-border rounded-md shadow-lg z-20">
                                        <div className="p-2">

                                            <div className="max-h-[200px] overflow-y-auto">
                                                {countries.map((country) => (
                                                    <div 
                                                        key={country.code}
                                                        className="flex items-center gap-3 p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-md cursor-pointer"
                                                        onClick={() => selectCurrency(country.code)}>
                                                        <div 
                                                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                                            style={{ backgroundColor: getCountryColor(country.abbr) }}
                                                        >
                                                            {country.abbr}
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-white text-sm">{country.name}</span>
                                                            <span className="text-gray-400 text-xs">{country.code}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Payment Method Selector */}
                        <div className="relative">
                            <div 
                                onClick={() => showPaymentMethod(1)} 
                                className="flex items-center justify-between px-4 py-[10px] bg-[var(--card-color)] rounded-md cursor-pointer w-[270px]"
                            >
                                <span className="text-text text-sm font-medium">{activeMethod?.name}</span>
                                <span className="ml-2 text-gray-400">
                                    <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M8.77701 10.6106L11.8139 6.51324C12.1281 6.08933 12.0349 5.49409 11.6058 5.18373C11.4407 5.06435 11.2415 5 11.0369 5H4.96304C4.43117 5 4 5.4259 4 5.95128C4 6.15336 4.06515 6.35019 4.186 6.51324L7.22293 10.6106C7.53712 11.0345 8.13972 11.1266 8.56887 10.8162C8.64851 10.7586 8.7187 10.6893 8.77701 10.6106Z"></path>
                                    </svg>
                                </span>
                            </div>
                            
                            {/* Payment Method Dropdown */}
                            {paymentMe ? (
                                <div className="absolute top-full left-[-60px] mt-1 w-[350px] bg-[var(--card-color)] border border-border rounded-md shadow-lg z-20">
                                    <div className="p-3">
                                        <div className="bg-[rgba(255,255,255,0.05)] p-3 rounded-md mb-3 text-xs text-white">
                                            <div className="flex items-start gap-2">
                                                <svg className="w-4 h-4 mt-0.5 text-blue-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                                                </svg>
                                                <span>Check with the advertiser for accepted payment methods before proceeding with payments.</span>
                                            </div>
                                        </div>
                                        
                                        <div className="max-h-[200px] overflow-y-auto">
                                            <div className="grid grid-cols-2 gap-1">
                                                {methods.map((method) => (
                                                    <div 
                                                        key={method.name}
                                                        className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${method.active ? 'bg-[rgba(0,80,255,0.1)] text-primary' : 'hover:bg-[rgba(255,255,255,0.05)]'}`}
                                                        onClick={() => handleSelectActiveMethod(method)}
                                                    >
                                                        <span className="text-sm truncate">{method.name}</span>
                                                        {method.active && (
                                                            <svg className="w-5 h-5 flex-shrink-0 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                                                            </svg>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="flex justify-end mt-3 pt-3 border-t border-border">
                                            <button 
                                                onClick={handleClose}
                                                className="px-4 py-2 bg-[var(--primary-color)] text-white text-sm font-medium rounded-md hover:bg-[#0045e5] transition-colors"
                                            >
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>

                {/* Content Area - Conditionally render BuyPage or SellPage based on tab */}
                <div className=" overflow-hidden">
                   {tab === 0 ? <BuyPage /> : <SellPage />}
                </div>
            </div>
        </div>
    );
}