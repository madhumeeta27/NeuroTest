import React, { useEffect, useState } from 'react';

function QuestionCard({ question, onSubmit }) {
  const [seconds, setSeconds] = useState(10);
  const [enabled, setEnabled] = useState(false);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    setSeconds(1);
    setEnabled(false);
    setAnswer('');
    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setEnabled(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [question]);

  const handleSubmit = () => {
    const timestamp = new Date().toISOString();
    onSubmit({ 
      answer, 
      timestamp, 
      category: question.category, 
      questionText: question.prompt 
    });
  };

  return (
    <div className="border rounded p-4 shadow w-full max-w-md mx-auto mt-6">
      <h2 className="mb-4 font-semibold text-lg">Category {question.category}</h2>
      <p className="mb-4">{question.prompt}</p>
      <p className="mb-2">Time remaining: {seconds}s</p>
      
      <textarea
        className="w-full border rounded p-2 mb-4"
        rows={4}
        placeholder="Type your answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button 
        disabled={!enabled} 
        onClick={handleSubmit} 
        className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Submit Answer
      </button>
    </div>
  );
}

export default QuestionCard;
