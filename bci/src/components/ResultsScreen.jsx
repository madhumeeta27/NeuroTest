import React from 'react';
import { unparse } from 'papaparse';

function ResultsScreen({ results }) {
  const downloadCSV = () => {
    // Ensure only desired fields are included in the CSV
    const formattedResults = results.map((res, index) => ({
      QuestionNumber: index + 1,
      Category: res.category,
      Question: res.prompt,

      Timestamp: res.timestamp
    }));

    const csv = unparse(formattedResults);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'test_results.csv');
    link.click();
  };

  return (
    <div className="mt-10 max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-6">✅ Test Completed!</h2>

      <button
        className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded mb-6"
        onClick={downloadCSV}
      >
        Download CSV
      </button>
      </div>
  );
}

export default ResultsScreen;