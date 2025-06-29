import React, { useState } from 'react';

const DulalExHistory = () => {
  const [exCount, setExCount] = useState(3);

  const handleIncrease = () => {
    setExCount(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (exCount > 0) {
      setExCount(prev => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">💔 Dulal's Ex Counter</h1>
        <p className="text-xl font-semibold text-gray-700 mb-6">
          Total Exes: <span className="text-4xl text-pink-600">{exCount}</span>
        </p>

        <div className="flex justify-center gap-6">
          <button
            onClick={handleDecrease}
            className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition-all"
          >
            - Decrease
          </button>
          <button
            onClick={handleIncrease}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition-all"
          >
            + Increase
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-500 italic">
          This tracker is completely unofficial (but highly accurate 😉)
        </p>
      </div>
    </div>
  );
};

export default DulalExHistory;
