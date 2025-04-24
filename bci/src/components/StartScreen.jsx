import React from 'react';

function StartScreen({ startTest }) {
  return (
    <div>
      <h1 className="text-2xl mb-4">Welcome to the Bloom's Taxonomy Test</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={startTest}>Take Test</button>
    </div>
  );
}

export default StartScreen;