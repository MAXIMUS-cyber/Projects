import React from 'react';

function App() {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:max-w-md">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Welcome to My App</h1>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-semibold text-gray-800">Email</label>
            <input type="email" id="email" name="email" className="w-full border-b-2 border-gray-400 focus:border-purple-500 px-4 py-2 focus:outline-none text-lg" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-semibold text-gray-800">Password</label>
            <input type="password" id="password" name="password" className="w-full border-b-2 border-gray-400 focus:border-purple-500 px-4 py-2 focus:outline-none text-lg" required />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg py-3 transition duration-300 ease-in-out hover:from-purple-700 hover:to-pink-700">Login</button>
        </form>
        <div className="mt-8 text-center text-gray-700">
          Don't have an account? <a href="#" className="font-semibold underline">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default App;
