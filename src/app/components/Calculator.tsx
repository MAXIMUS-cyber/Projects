'use client';
import { useState } from "react";
import React from "react";

const Calculator = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
  };

  function calculateSum(){
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)
    const res = n1 + n2
    setResult(res.toString())
  }
  return (
    <main className={`bg-gradient-to-r ${isDarkMode ?"from-gray-800 via-gray-700 to-gray-600" : "from-purple-500 via-pink-500 to-red-500"} min-h-screen flex items-center justify-center`}>
      <div className={`bg-white ${isDarkMode ? "via-gray-700" : ""} p-8 rounded-lg shadow-lg w-full md:max-w-md`}>
        <h1 className={`text-4xl font-bold mb-6 text-center ${isDarkMode ? "text-white" : "text-gray-800"}`}>Calculator</h1>
        <div className="flex flex-col">
          <label htmlFor="num1" className={`text-lg font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>Number 1</label>
          <input
            type="number"
            id="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className={`w-full border-b-2 border-gray-400 focus:border-purple-500 px-4 py-2 focus:outline-none text-lg ${isDarkMode ? "dark:bg-gray-700" : ""}`}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="num2" className={`text-lg font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>Number 2</label>
          <input
            type="number"
            id="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className={`w-full border-b-2 border-gray-400 focus:border-purple-500 px-4 py-2 focus:outline-none text-lg ${isDarkMode ? "dark:bg-gray-700" : ""}`}
            required
          />
        </div>
        <button
          onClick={calculateSum}
          className={`w-full bg-gradient-to-r ${isDarkMode ? "from-gray-600 to-gray-500" : "from-purple-600 to-pink-600"} text-white font-semibold rounded-lg py-3 mt-6 transition duration-300 ease-in-out hover:${isDarkMode ? "from-gray-700 to-gray-600" : "from-purple-700 to-pink-700"}`}
        >
          Calculate Sum
        </button>
        <div className={`mt-6 text-center ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          {result}
        </div>
      </div>
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={toggleDarkMode}
          className={`text-lg cursor-pointer ${
            isDarkMode ? "text-yellow-500" : "text-gray-800"
          }`}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </main>
  );
};

export default Calculator;
