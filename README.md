# EEG Baseline Test Application

A React-based web application for conducting baseline EEG tests through a series of cognitive questions. The application tracks response times and generates detailed logs for analysis.

## Features

- Interactive question interface
- Three question categories: Remembering, Analyzing, and Problem Solving
- Automatic timing of question responses
- CSV export of test results
- Clean, responsive UI using Tailwind CSS
- TypeScript support for type safety

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd eeg-baseline-test
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
  ├── components/     # React components
  │   └── Question.tsx
  ├── utils/         # Utility functions
  │   └── csvExport.ts
  ├── data/          # Data files
  │   └── questions.json
  ├── App.tsx        # Main application component
  ├── index.tsx      # Application entry point
  └── index.css      # Global styles
```

## Test Flow

1. Questions are displayed one at a time
2. User clicks "Start Question" to begin answering
3. After answering, user clicks "Next Question" to proceed
4. After the final question, a CSV file is automatically downloaded containing:
   - Question ID
   - Category
   - Question text
   - Start time
   - End time

## CSV Output Format

The generated CSV file (`baseline_question_log.csv`) contains the following columns:
- Question ID
- Category
- Question
- Start Time (HH:MM:SS)
- End Time (HH:MM:SS)

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- HTML5
- CSS3

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.