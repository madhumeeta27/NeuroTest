interface QuestionLog {
  questionId: string;
  category: string;
  question: string;
  startTime: string;
  endTime: string;
}

export const exportToCsv = (data: QuestionLog[]) => {
  const headers = ['Question ID', 'Category', 'Question', 'Start Time', 'End Time'];
  const csvContent = [
    headers.join(','),
    ...data.map(row => [
      row.questionId,
      row.category,
      `"${row.question.replace(/"/g, '""')}"`,
      row.startTime,
      row.endTime
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', 'baseline_question_log.csv');
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}; 