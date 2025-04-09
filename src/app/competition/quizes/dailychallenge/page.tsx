'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import Link from 'next/link';

type StreamName = 'Engineering' | 'Medical' | 'Commerce' | 'Arts' | 'Science';

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
}

const streams: { id: number; name: StreamName; icon: string }[] = [
  { id: 1, name: 'Engineering', icon: '⚙️' },
  { id: 2, name: 'Medical', icon: '🩺' },
  { id: 3, name: 'Commerce', icon: '💰' },
  { id: 4, name: 'Arts', icon: '🎨' },
  { id: 5, name: 'Science', icon: '🔬' },
];

const dailyQuestions: Record<StreamName, Question[]> = {
  Engineering: [
    {
      id: 1,
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      answer: 1,
      explanation: "Binary search halves the search space with each comparison, resulting in logarithmic time complexity."
    },
    {
      id: 2,
      question: "Which material is commonly used in 3D printing?",
      options: ["PLA", "PVC", "Teflon", "Nylon"],
      answer: 0,
      explanation: "PLA (Polylactic Acid) is the most common material for FDM 3D printing due to its ease of use and biodegradability."
    }
  ],
  Medical: [
    {
      id: 1,
      question: "Which organ produces insulin?",
      options: ["Liver", "Pancreas", "Kidney", "Heart"],
      answer: 1,
      explanation: "The pancreas contains beta cells in the islets of Langerhans that produce insulin."
    }
  ],
  Commerce: [
    {
      id: 1,
      question: "What does ROI stand for in business?",
      options: ["Return on Investment", "Rate of Interest", "Risk of Inflation", "Revenue on Inventory"],
      answer: 0,
      explanation: "ROI measures the gain or loss generated on an investment relative to the amount of money invested."
    }
  ],
  Arts: [
    {
      id: 1,
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      answer: 2,
      explanation: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1506, during the Renaissance period."
    }
  ],
  Science: [
    {
      id: 1,
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      answer: 2,
      explanation: "The symbol Au comes from the Latin word 'aurum', meaning gold."
    }
  ]
};

export default function DailyChallenge() {
  const [selectedStream, setSelectedStream] = useState<StreamName | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  // Timer effect
  useEffect(() => {
    if (!selectedStream || quizCompleted) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setQuizCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedStream, quizCompleted]);

  const startQuiz = (stream: StreamName) => {
    setSelectedStream(stream);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setQuizCompleted(false);
    setTimeLeft(900);
  };

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedStream && selectedOption !== null) {
      // Check if answer is correct
      const currentQ = dailyQuestions[selectedStream][currentQuestion];
      if (selectedOption === currentQ.answer) {
        setScore(score + 1);
      }

      // Move to next question or end quiz
      if (currentQuestion < dailyQuestions[selectedStream].length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  const resetQuiz = () => {
    setSelectedStream(null);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setQuizCompleted(false);
    setTimeLeft(900);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <> 
    <Navbar />
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0984e3' }}>
            🚀 Daily Quiz Challenge
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>
            Test your knowledge and win exciting prizes!
          </p>
        </div>

        {!selectedStream ? (
          /* Stream Selection Screen */
          <div style={{
            background: 'white',
            borderRadius: '1rem',
            padding: '3rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
              Select Your Stream
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {streams.map(stream => (
                <div 
                  key={stream.id}
                  onClick={() => startQuiz(stream.name)}
                  style={{
                    background: '#f8f9fa',
                    borderRadius: '1rem',
                    padding: '2rem 1rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem'
                  }}>
                    {stream.icon}
                  </div>
                  <h3 style={{ fontWeight: '600' }}>{stream.name}</h3>
                </div>
              ))}
            </div>
            <div style={{
              background: '#f8f9fa',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              textAlign: 'left',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <h3 style={{ marginBottom: '0.5rem' }}>📌 Challenge Details:</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>10 random questions from your selected stream</li>
                <li>15 minute time limit</li>
                <li>Instant results with explanations</li>
                <li>Top scorers featured on leaderboard</li>
              </ul>
            </div>
          </div>
        ) : quizCompleted ? (
          /* Results Screen */
          <div style={{
            background: 'white',
            borderRadius: '1rem',
            padding: '3rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              background: score === dailyQuestions[selectedStream].length 
                ? 'linear-gradient(135deg, #00b894, #55efc4)' 
                : score >= dailyQuestions[selectedStream].length / 2 
                  ? 'linear-gradient(135deg, #0984e3, #74b9ff)'
                  : 'linear-gradient(135deg, #ff7675, #d63031)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              color: 'white',
              fontSize: '2.5rem',
              fontWeight: 'bold'
            }}>
              {score}/{dailyQuestions[selectedStream].length}
            </div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
              {score === dailyQuestions[selectedStream].length 
                ? '🎉 Perfect Score!' 
                : score >= dailyQuestions[selectedStream].length / 2 
                  ? '👍 Good Job!' 
                  : 'Keep Practicing!'}
            </h2>
            <p style={{ marginBottom: '2rem', color: '#666' }}>
              You scored {score} out of {dailyQuestions[selectedStream].length} in {selectedStream}
            </p>
            
            <div style={{ 
              background: '#f8f9fa',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>Performance Breakdown:</h3>
              {dailyQuestions[selectedStream].map((q, idx) => (
                <div key={idx} style={{ 
                  marginBottom: '1rem',
                  padding: '1rem',
                  background: idx % 2 === 0 ? 'white' : 'transparent',
                  borderRadius: '0.5rem'
                }}>
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                    Q{idx+1}: {q.question}
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    Correct answer: <span style={{ color: '#00b894', fontWeight: '600' }}>{q.options[q.answer]}</span>
                  </div>
                  {q.explanation && (
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#666',
                      padding: '0.5rem',
                      background: '#f1f1f1',
                      borderRadius: '0.3rem'
                    }}>
                      💡 {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button
                onClick={resetQuiz}
                style={{
                  padding: '1rem 2rem',
                  background: '#0984e3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#0870c0'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#0984e3'}
              >
                Try Another Stream
              </button>
              
              <Link href="/competition/quizes">
                <button
                  style={{
                    padding: '1rem 2rem',
                    background: 'white',
                    color: '#0984e3',
                    border: '2px solid #0984e3',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '1rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f0f7ff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                  }}
                >
                  Back to All Quizzes
                </button>
              </Link>
            </div>
          </div>
        ) : (
          /* Quiz Screen */
          <div style={{
            background: 'white',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid #eee'
            }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: '600' }}>
                {selectedStream} Challenge
              </h2>
              <div style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <div style={{
                  background: '#f0f7ff',
                  color: '#0984e3',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  fontWeight: '600'
                }}>
                  Question {currentQuestion + 1}/{dailyQuestions[selectedStream].length}
                </div>
                <div style={{
                  background: '#fff0f0',
                  color: '#d63031',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  fontWeight: '600'
                }}>
                  ⏱️ {formatTime(timeLeft)}
                </div>
              </div>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                {dailyQuestions[selectedStream][currentQuestion].question}
              </h3>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                {dailyQuestions[selectedStream][currentQuestion].options.map((option, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    style={{
                      padding: '1rem',
                      background: selectedOption === idx ? '#e3f2fd' : '#f8f9fa',
                      border: selectedOption === idx ? '2px solid #0984e3' : '2px solid transparent',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={handleNextQuestion}
              disabled={selectedOption === null}
              style={{
                padding: '1rem 2rem',
                background: selectedOption === null ? '#ccc' : '#0984e3',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: selectedOption === null ? 'not-allowed' : 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'background 0.2s ease',
                width: '100%'
              }}
              onMouseEnter={(e) => {
                if (selectedOption !== null) {
                  e.currentTarget.style.background = '#0870c0';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedOption !== null) {
                  e.currentTarget.style.background = '#0984e3';
                }
              }}
            >
              {currentQuestion === dailyQuestions[selectedStream].length - 1 ? 'Submit Quiz' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </Layout>
    </>
  );
}