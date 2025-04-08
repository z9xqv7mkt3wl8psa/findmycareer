'use client';

import { useState } from 'react';

type Stream = 'Science' | 'Commerce' | 'Arts';

const quizQuestions = [
  {
    question: 'Which topic excites you the most?',
    options: ['Quantum physics', 'Global economy', 'Human psychology'],
    weights: [2, 1, 0],
  },
  {
    question: 'Which describes you better?',
    options: ['Logical & Analytical', 'Business-minded & Social', 'Creative & Expressive'],
    weights: [2, 1, 0],
  },
  {
    question: 'Preferred weekend activity?',
    options: ['Building a robot', 'Managing a mock stock portfolio', 'Shooting a short film'],
    weights: [2, 1, 0],
  },
  {
    question: 'What would you enjoy more?',
    options: ['Solving a math theorem', 'Pitching a business idea', 'Writing a poem'],
    weights: [2, 1, 0],
  },
  {
    question: 'How do you express yourself?',
    options: ['Through inventions', 'Through strategy', 'Through art'],
    weights: [2, 1, 0],
  },
];

const streamScores: Stream[] = ['Arts', 'Commerce', 'Science'];

const careerPaths: Record<Stream, string[]> = {
  Science: [
    'AI & Data Science',
    'Medical/MBBS',
    'Mechanical or Civil Engineering',
    'Physics or Space Science',
    'Cybersecurity Expert',
  ],
  Commerce: [
    'Finance & Accounting (CA)',
    'Business Analytics',
    'Entrepreneurship',
    'E-Commerce & Digital Marketing',
    'Hotel Management',
  ],
  Arts: [
    'Psychologist / Therapist',
    'Civil Services',
    'Graphic Designer / Animator',
    'Mass Communication',
    'Historian / Archeologist',
  ],
};

export default function StreamQuiz() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [streamResult, setStreamResult] = useState<Stream | null>(null);

  const handleOptionClick = (optionIndex: number) => {
    const nextAnswers = [...answers, optionIndex];
    if (nextAnswers.length === quizQuestions.length) {
      const totalScore = nextAnswers.reduce((acc, option, idx) => acc + quizQuestions[idx].weights[option], 0);
      const streamIndex = totalScore >= 9 ? 2 : totalScore >= 5 ? 1 : 0;
      setStreamResult(streamScores[streamIndex]);
    } else {
      setAnswers(nextAnswers);
    }
  };

  const currentQuestion = quizQuestions[answers.length];

  return (
    <div style={{ padding: '2rem', maxWidth: '650px', margin: 'auto' }}>
      {!streamResult && currentQuestion && (
        <>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{currentQuestion.question}</h2>
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(idx)}
              style={{
                background: '#111',
                color: '#fff',
                border: 'none',
                padding: '1rem',
                margin: '0.5rem 0',
                borderRadius: '0.6rem',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#333'}
              onMouseOut={(e) => e.currentTarget.style.background = '#111'}
            >
              {option}
            </button>
          ))}
        </>
      )}

      {streamResult && (
        <div style={{ textAlign: 'center' }}>
          <h2>Your Suggested Stream: <span style={{ color: '#0070f3' }}>{streamResult}</span></h2>
          <p>Based on your preferences, you may explore:</p>
          <ul style={{ marginTop: '1rem', textAlign: 'left' }}>
            {careerPaths[streamResult].map((career, i) => (
              <li key={i}>🎯 {career}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
