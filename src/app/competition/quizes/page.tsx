'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const quizzes = [
  {
    id: 1,
    title: 'Tech Trivia Challenge',
    host: 'Tech Education Foundation',
    subject: 'Technology',
    duration: '30 mins',
    questions: 20,
    prize: '₹50,000 + Certification',
    level: 'Intermediate',
    participants: 850,
    status: 'live',
    startTime: '2024-07-15T19:00:00',
    endTime: '2024-07-15T20:30:00',
    registered: true,
    progress: 65, // percentage of people who completed
    image: '/tech-quiz.jpg'
  },
  {
    id: 2,
    title: 'Science Olympiad Quiz',
    host: 'National Science Council',
    subject: 'Science',
    duration: '45 mins',
    questions: 25,
    prize: '₹1 Lakh Scholarship',
    level: 'Advanced',
    participants: 1200,
    status: 'upcoming',
    startTime: '2024-07-20T15:00:00',
    endTime: '2024-07-20T16:45:00',
    registered: false,
    progress: 0,
    image: '/science-quiz.jpg'
  },
  
  // Add more quizzes
];

const leaderboard = [
  { rank: 1, name: 'Aarav Sharma', score: 980, avatar: '/avatar1.jpg' },
  { rank: 2, name: 'Priya Patel', score: 950, avatar: '/avatar2.jpg' },
  { rank: 3, name: 'Rahul Verma', score: 930, avatar: '/avatar3.jpg' },
  { rank: 4, name: 'Neha Gupta', score: 910, avatar: '/avatar4.jpg' },
  { rank: 5, name: 'Vikram Singh', score: 890, avatar: '/avatar5.jpg' },
   {rank: 6, name: 'Priya Patel', score: 950, avatar: '/avatar2.jpg' },
  { rank: 7, name: 'Rahul Verma', score: 930, avatar: '/avatar3.jpg' },
  { rank: 8, name: 'Neha Gupta', score: 910, avatar: '/avatar4.jpg' },
];

export default function QuizzesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [timeRemaining, setTimeRemaining] = useState<Record<number, string>>({});

  const [activeTab, setActiveTab] = useState('quizzes');

  // Calculate time remaining for live quizzes
  useEffect(() => {
    const timer = setInterval(() => {
    const newTimeRemaining: Record<number, string> = {}; 
      quizzes.forEach(quiz => {
        if (quiz.status === 'live') {
          const endTime = new Date(quiz.endTime).getTime();
          const now = new Date().getTime();
          const distance = endTime - now;
          
          if (distance < 0) {
            quiz.status = 'completed';
          } else {
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            newTimeRemaining[quiz.id] = `${Math.floor(hours)}h ${Math.floor(minutes)}m ${Math.floor(seconds)}s`;
          }
        }
      });
      setTimeRemaining(newTimeRemaining);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = !subjectFilter || quiz.subject === subjectFilter;
    const matchesLevel = !levelFilter || quiz.level === levelFilter;
    const matchesStatus = statusFilter === 'all' || quiz.status === statusFilter;

    return matchesSearch && matchesSubject && matchesLevel && matchesStatus;
  });

  const subjects = [...new Set(quizzes.map(q => q.subject))];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const statuses = ['all', 'upcoming', 'live', 'completed'];

  return (
    <> 
    <Navbar />
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #00b894 0%, #55efc4 100%)',
          borderRadius: '1rem',
          padding: '3rem 2rem',
          marginBottom: '3rem',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>
            🧠 Test Your Knowledge
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem', position: 'relative', zIndex: 2 }}>
            Challenge yourself with exciting quizzes and climb the leaderboard!
          </p>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '200px',
            height: '200px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            transform: 'translate(30%, -30%)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '150px',
            height: '150px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            transform: 'translate(-30%, 30%)'
          }}></div>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #ddd',
          marginBottom: '2rem'
        }}>
          <button
            onClick={() => setActiveTab('quizzes')}
            style={{
              padding: '0.8rem 1.5rem',
              background: activeTab === 'quizzes' ? '#00b894' : 'transparent',
              color: activeTab === 'quizzes' ? 'white' : '#333',
              border: 'none',
              borderTopLeftRadius: '0.5rem',
              borderTopRightRadius: '0.5rem',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'all 0.2s ease'
            }}
          >
            All Quizzes
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            style={{
              padding: '0.8rem 1.5rem',
              background: activeTab === 'leaderboard' ? '#00b894' : 'transparent',
              color: activeTab === 'leaderboard' ? 'white' : '#333',
              border: 'none',
              borderTopLeftRadius: '0.5rem',
              borderTopRightRadius: '0.5rem',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'all 0.2s ease'
            }}
          >
            Live Leaderboard
          </button>
        </div>

        {activeTab === 'quizzes' ? (
          <>
            {/* Filters */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              <input
                type="text"
                placeholder="Search quizzes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={filterStyle}
              />

              <select 
                style={filterStyle} 
                onChange={(e) => setSubjectFilter(e.target.value)}
                value={subjectFilter}
              >
                <option value="">All Subjects</option>
                {subjects.map((subject, idx) => (
                  <option key={idx} value={subject}>{subject}</option>
                ))}
              </select>

              <select 
                style={filterStyle} 
                onChange={(e) => setLevelFilter(e.target.value)}
                value={levelFilter}
              >
                <option value="">All Levels</option>
                {levels.map((level, idx) => (
                  <option key={idx} value={level}>{level}</option>
                ))}
              </select>

              <select 
                style={filterStyle} 
                onChange={(e) => setStatusFilter(e.target.value)}
                value={statusFilter}
              >
                {statuses.map((status, idx) => (
                  <option key={idx} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Quiz Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {filteredQuizzes.map((quiz) => (
                <div 
                  key={quiz.id}
                  style={{
                    background: 'white',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  <div style={{
                    height: '150px',
                    background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${quiz.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    {quiz.status === 'live' && (
                      <div style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        background: '#ff4757',
                        color: 'white',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        🔴 LIVE {timeRemaining[quiz.id] && `- ${timeRemaining[quiz.id]}`}
                      </div>
                    )}
                    <div style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      color: 'white',
                      fontWeight: '600',
                      fontSize: '1.2rem'
                    }}>
                      {quiz.title}
                    </div>
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span style={{
                        background: '#dfe6e9',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '1rem',
                        fontSize: '0.8rem'
                      }}>
                        {quiz.subject}
                      </span>
                      <span style={{
                        background: '#ffeaa7',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '1rem',
                        fontSize: '0.8rem'
                      }}>
                        {quiz.level}
                      </span>
                    </div>

                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      <div>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>🏆 Prize</div>
                        <div style={{ fontWeight: '600' }}>{quiz.prize}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>⏱️ Duration</div>
                        <div style={{ fontWeight: '600' }}>{quiz.duration}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>❓ Questions</div>
                        <div style={{ fontWeight: '600' }}>{quiz.questions}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>👥 Participants</div>
                        <div style={{ fontWeight: '600' }}>{quiz.participants}</div>
                      </div>
                    </div>

                    {/* Progress bar */}
                    {quiz.status === 'live' && quiz.progress > 0 && (
                      <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                          <span style={{ fontSize: '0.8rem' }}>Completion Rate</span>
                          <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>{quiz.progress}%</span>
                        </div>
                        <div style={{
                          height: '8px',
                          background: '#dfe6e9',
                          borderRadius: '4px',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${quiz.progress}%`,
                            height: '100%',
                            background: 'linear-gradient(90deg, #00b894, #55efc4)',
                            borderRadius: '4px'
                          }}></div>
                        </div>
                      </div>
                    )}

                    <button style={{
                      width: '100%',
                      padding: '0.8rem',
                      background: quiz.registered ? '#55efc4' : '#00b894',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      fontWeight: '500',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = quiz.registered ? '#48cfad' : '#009975'}
                    onMouseLeave={(e) => e.currentTarget.style.background = quiz.registered ? '#55efc4' : '#00b894'}
                    >
                      {quiz.registered ? 'Enter Quiz' : 'Register Now'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Leaderboard Tab */
          <div style={{
            background: 'white',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            marginBottom: '3rem'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
              🏆 Current Leaderboard
              <span style={{
                marginLeft: 'auto',
                fontSize: '0.9rem',
                background: '#ffeaa7',
                padding: '0.3rem 0.8rem',
                borderRadius: '1rem'
              }}>
                Updated every 5 minutes
              </span>
            </h2>
            
            <div style={{ marginBottom: '1.5rem' }}>
              {leaderboard.map((user, index) => (
                <div key={user.rank} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1rem',
                  background: index % 2 === 0 ? '#f8f9fa' : 'white',
                  borderRadius: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: `url(${user.avatar}) center/cover`,
                    marginRight: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }}>
                    {!user.avatar && user.name.charAt(0)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600' }}>{user.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>Rank #{user.rank}</div>
                  </div>
                  <div style={{
                    background: '#00b894',
                    color: 'white',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '1rem',
                    fontWeight: '600'
                  }}>
                    {user.score} pts
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <button style={{
                padding: '0.8rem 1.5rem',
                background: 'transparent',
                color: '#00b894',
                border: '2px solid #00b894',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#00b894';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#00b894';
              }}
              >
                Create your profile to get listed →
              </button>
            </div>
          </div>
        )}

        {/* Daily Challenge Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0984e3 0%, #74b9ff 100%)',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '3rem',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Daily Quiz Challenge</h2>
            <p style={{ marginBottom: '1.5rem' }}>Test your knowledge with today's special quiz!</p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1.5rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '0.8rem 1.2rem',
                borderRadius: '0.5rem'
              }}>
                <div style={{ fontSize: '0.8rem' }}>Questions</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>10</div>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '0.8rem 1.2rem',
                borderRadius: '0.5rem'
              }}>
                <div style={{ fontSize: '0.8rem' }}>Time Limit</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>15 mins</div>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '0.8rem 1.2rem',
                borderRadius: '0.5rem'
              }}>
                <div style={{ fontSize: '0.8rem' }}>Top Prize</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>₹5,000</div>
              </div>
            </div>
            <Link href="/competition/quizes/dailychallenge" passHref>
  <div
    style={{
      padding: '1rem 2rem',
      background: 'white',
      color: '#0984e3',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '1rem',
      textAlign: 'center',
      transition: 'transform 0.2s ease'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
  >
    Start Today's Challenge
  </div>
</Link>

          </div>
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%'
          }}></div>
        </div>
      </div>
    </Layout>
    </>
  );
}

const filterStyle = {
  padding: '0.7rem 1rem',
  borderRadius: '0.5rem',
  border: '1px solid #ddd',
  minWidth: '180px',
  fontSize: '0.95rem',
  backgroundColor: 'white'
};