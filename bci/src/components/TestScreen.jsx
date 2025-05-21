import React, { useEffect, useState } from 'react';
import questions from '../data/questions1';
import QuestionCard from './QuestionCard';

function TestScreen({ endTest, setResults }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [resultsList, setResultsList] = useState([]);

  useEffect(() => {
    const categories = [1, 3]; // Easy then Hard
    const selected = [];

    categories.forEach(cat => {
      const questionsInCat = questions.filter(q => q.category === cat);
      const shuffled = questionsInCat.sort(() => 0.5 - Math.random());
      selected.push(...shuffled.slice(0, 3)); // 5 questions per category
    });

    // ⚠️ Removed the final shuffle
    setSelectedQuestions(selected);
  }, []);

  const handleAnswer = () => {
    const now = new Date().toISOString();
    const question = selectedQuestions[currentIndex];

    setResultsList(prev => [
      ...prev,
      {
        questionNumber: question.id,
        category: question.category,
        timestamp: now,
        prompt: question.prompt,
      },
    ]);

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
        <QuestionCard
          question={selectedQuestions[currentIndex]}
          onSubmit={handleAnswer}
        />
      )}
    </div>
  );
}

export default TestScreen;
