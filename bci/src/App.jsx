import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import TestScreen from './components/TestScreen';
import ResultsScreen from './components/ResultsScreen';

function App() {
  const [screen, setScreen] = useState('start');
  const [results, setResults] = useState([]);

  return (
    <div className="p-4 text-center">
      {screen === 'start' && <StartScreen startTest={() => setScreen('test')} />}
      {screen === 'test' && <TestScreen endTest={setScreen} setResults={setResults} />}
      {screen === 'results' && <ResultsScreen results={results} />}
    </div>
  );
}
export default App;