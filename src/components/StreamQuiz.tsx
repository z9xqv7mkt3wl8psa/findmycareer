'use client';

import { useState } from 'react';

type Stream = 'Science' | 'Commerce' | 'Arts';

const quizQuestions = [
  {
    question: 'Which activity sounds most interesting to you?',
    options: ['Solving puzzles', 'Analyzing market trends', 'Creating art or writing'],
    weights: [1, 0, -1], // Science > Commerce > Arts
  },
  {
    question: 'Which subject did you enjoy the most?',
    options: ['Math/Biology', 'Economics/Business', 'History/Literature'],
    weights: [1, 0, -1],
  },
  {
    question: 'What kind of job do you imagine yourself in?',
    options: ['Engineer, Doctor', 'Manager, CA', 'Writer, Designer'],
    weights: [1, 0, -1],
  },
  {
    question: 'Do you prefer working with numbers and data?',
    options: ['Yes', 'Sometimes', 'No'],
    weights: [1, 0, -1],
  },
  {
    question: 'How do you prefer to solve problems?',
    options: ['Analytically and logically', 'Through creative thinking', 'Using a mix of approaches'],
    weights: [1, -1, 0],
  },
];

const streamScores: Record<string, Stream> = {
  '0': 'Science',
  '1': 'Commerce',
  '2': 'Arts',
};

const careerPaths: Record<Stream, string[]> = {
  Science: [
    'B.Tech in Computer Science (AI/ML)',
    'B.Tech in Mechanical or Civil',
    'B.Sc in Physics/Chemistry/Maths',
    'B.Sc Agriculture or Nursing',
    'MBBS or NEET pathway',
  ],
  Commerce: [
    'B.Com with CA or CS',
    'BBA in Marketing/Finance',
    'Bachelor in Business Analytics',
    'Hotel Management',
    'Entrepreneurship & Startups',
  ],
  Arts: [
    'BA in Psychology or Sociology',
    'BA in English Literature or Political Science',
    'Bachelor in Journalism or Mass Comm',
    'Bachelor in Design or Fine Arts',
    'UPSC/State PCS Prep Track',
  ],
};

export default function StreamQuiz() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [streamResult, setStreamResult] = useState<Stream | null>(null);

  // Handle option selection and scoring
  const handleOptionClick = (optionIndex: number) => {
    const nextAnswers = [...answers, optionIndex];
    if (nextAnswers.length === quizQuestions.length) {
      const finalScore = nextAnswers.reduce((acc, curr, idx) => {
        acc[curr] += quizQuestions[idx].weights[curr];
        return acc;
      }, [0, 0, 0]);
      
      const maxIndex = finalScore.indexOf(Math.max(...finalScore));
      setStreamResult(streamScores[maxIndex.toString()]);
    } else {
      setAnswers(nextAnswers);
    }
  };

  const currentQuestion = quizQuestions[answers.length];

  return (
    <div style={{ padding: '2rem', maxWidth: '650px', margin: 'auto' }}>
      {!streamResult && currentQuestion && (
        <>
          <h2>{currentQuestion.question}</h2>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              style={{
                display: 'block',
                margin: '1rem 0',
                padding: '0.75rem',
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '0.4rem',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'left',
                transition: 'background-color 0.3s',
              }}
            >
              {option}
            </button>
          ))}
        </>
      )}

      {streamResult && (
        <div style={{ textAlign: 'center' }}>
          <h2>Your Ideal Stream: {streamResult}</h2>
          <p>Based on your choices, here are some recommended degree paths:</p>
          <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
            {careerPaths[streamResult].map((career, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem' }}>👉 {career}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
