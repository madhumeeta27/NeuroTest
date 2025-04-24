import React, { useEffect, useState } from 'react';
import questions from '../data/questions';
import QuestionCard from './QuestionCard';

function TestScreen({ endTest, setResults }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [resultsList, setResultsList] = useState([]);

  useEffect(() => {
    const categories = [1, 2, 3, 4, 5, 6];
    const selected = categories.map(cat => {
      const questionsInCat = questions.filter(q => q.category === cat);
      return questionsInCat[Math.floor(Math.random() * questionsInCat.length)];
    });
    setSelectedQuestions(selected);
  }, []);

  const handleAnswer = () => {
    const now = new Date().toISOString();
    const question = selectedQuestions[currentIndex];
    setResultsList(prev => [...prev, {
      questionNumber: question.id,
      category: question.category,
      timestamp: now,
      prompt: question.prompt,
    }]);

    
   

    if (currentIndex < selectedQuestions.length - 1) {
     
      setCurrentIndex(currentIndex + 1);
    } else {
      setResults(resultsList);
      endTest('results');
    }
  };

  return (
    <div>
      {selectedQuestions.length > 0 && (
        <QuestionCard question={selectedQuestions[currentIndex]} onSubmit={handleAnswer} />
      )}
    </div>
  );
}

export default TestScreen;