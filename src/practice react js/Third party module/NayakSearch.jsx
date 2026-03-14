import React, { useState, useEffect } from 'react';
import { Search, Mic, Camera, X } from 'lucide-react';

const NayakSearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Debouncing logic: Only calls API 300ms after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        fetchSuggestions();
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const fetchSuggestions = async () => {
    try {
      // Replace with your API endpoint for autocomplete
      const res = await fetch(`https://api.yourcustomapi.com/suggest?q=${query}`);
      const data = await res.json();
      console.log(data);
      setSuggestions(data.results || []); // Adjust based on your API structure
      setShowSuggestions(true);
    } catch (err) {
      console.error("Suggestion error:", err);
    }
  };

  return (
    <div className="flex flex-col items-center pt-[15vh] min-h-screen bg-white">
      <h1 className="text-8xl font-bold mb-8 select-none">
        <span className="text-blue-500">N</span>
        <span className="text-red-500">a</span>
        <span className="text-yellow-500">y</span>
        <span className="text-blue-500">a</span>
        <span className="text-green-500">k</span>
      </h1>

      <div className="relative w-full max-w-[584px] px-4 group">
        {/* Search Bar Container */}
        <div className={`flex items-center bg-white border border-gray-200 px-4 py-3 
          ${showSuggestions && suggestions.length > 0 ? 'rounded-t-[24px] shadow-lg border-b-0' : 'rounded-full hover:shadow-md focus-within:shadow-md'}`}>
          
          <Search className="text-gray-400 mr-3" size={20} />
          
          <input
            type="text"
            className="flex-grow focus:outline-none text-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Search Nayak or type a URL"
          />

          {query && (
            <X 
              className="text-gray-500 cursor-pointer mr-3" 
              size={20} 
              onClick={() => setQuery('')} 
            />
          )}
          
          <div className="flex gap-4 border-l pl-3 text-blue-600 border-gray-200">
            <Mic size={20} className="cursor-pointer" />
            <Camera size={20} className="cursor-pointer" />
          </div>
        </div>

        {/* Real-time Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute left-4 right-4 bg-white border border-gray-200 border-t-0 rounded-b-[24px] shadow-lg z-10 pb-4">
            <div className="h-[1px] bg-gray-200 mx-4 mb-2" />
            {suggestions.map((item, index) => (
              <div 
                key={index}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-default"
                onClick={() => setQuery(item.text)}
              >
                <Search className="text-gray-400 mr-4" size={16} />
                <span className="text-gray-800">{item.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Google-style Buttons */}
        <div className={`flex justify-center gap-3 mt-8 ${showSuggestions && suggestions.length > 0 ? 'invisible' : 'visible'}`}>
          <button className="bg-[#f8f9fa] hover:bg-gray-100 border border-transparent hover:border-gray-300 px-5 py-2 rounded text-sm text-gray-800">
            Nayak Search
          </button>
          <button className="bg-[#f8f9fa] hover:bg-gray-100 border border-transparent hover:border-gray-300 px-5 py-2 rounded text-sm text-gray-800">
            I'm Feeling Lucky
          </button>
        </div>
      </div>
    </div>
  );
};

export default NayakSearch;
