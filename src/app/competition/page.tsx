'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

const competitions = [
  {
    title: 'National AI Hackathon 2024',
    host: 'Tech Ministry of India',
    type: 'Hackathon',
    mode: 'Hybrid',
    deadline: '2024-08-15',
    eligibility: 'College Students',
    reward: '₹10 Lakhs + Internships',
    level: 'National',
    tags: ['#AI', '#Innovation', '#Tech'],
    participants: 1500,
    status: 'trending'
  },
  {
    title: 'Startup Ideathon Challenge',
    host: 'Startup India',
    type: 'Ideathon',
    mode: 'Online',
    deadline: '2024-07-01',
    eligibility: 'All Students',
    reward: 'Incubation + Funding',
    level: 'Intermediate',
    tags: ['#Startups', '#Business'],
    participants: 800,
    status: 'ending-soon'
  },
  // Add more competition objects here
];

const competitionTypes = [
  'Coding Hackathons',
  'Startup Ideathons',
  'Subject Quizzes',
  'Robotics Contests',
  'Case Competitions',
  'Art Challenges'
];

const rewardTypes = ['Cash', 'Internship', 'Certificate', 'Incubation'];
const modes = ['Online', 'Offline', 'Hybrid'];
const statusFilters = ['All', 'Trending', 'Ending Soon', 'New'];

export default function CompetitionsHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [rewardFilter, setRewardFilter] = useState('');
  const [modeFilter, setModeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  const filteredCompetitions = competitions.filter(comp => {
    const matchesSearch = comp.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !typeFilter || comp.type === typeFilter;
    const matchesReward = !rewardFilter || comp.reward.includes(rewardFilter);
    const matchesMode = !modeFilter || comp.mode === modeFilter;
    const matchesStatus = statusFilter === 'All' || comp.status === statusFilter.toLowerCase().replace(' ', '-');

    return matchesSearch && matchesType && matchesReward && matchesMode && matchesStatus;
  });

  const loadMore = () => setVisibleCount(prev => prev + 5);
  const shouldShowLoadMore = filteredCompetitions.length > visibleCount;

  return (
    <> 
    <Navbar />
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>
            🏆 Discover Exciting Competitions
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            Participate in hackathons, quizzes, and challenges to showcase your skills and win amazing rewards!
          </p>
        </div>

        {/* Filters */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <input
            type="text"
            placeholder="Search competitions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={filterStyle}
          />

          <select style={filterStyle} onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="">All Types</option>
            {competitionTypes.map((type, idx) => (
              <option key={idx} value={type.split(' ')[0]}>{type}</option>
            ))}
          </select>

          <select style={filterStyle} onChange={(e) => setRewardFilter(e.target.value)}>
            <option value="">All Rewards</option>
            {rewardTypes.map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))}
          </select>

          <select style={filterStyle} onChange={(e) => setModeFilter(e.target.value)}>
            <option value="">All Modes</option>
            {modes.map((mode, idx) => (
              <option key={idx} value={mode}>{mode}</option>
            ))}
          </select>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {statusFilters.map((status, idx) => (
              <button
                key={idx}
                onClick={() => setStatusFilter(status)}
                style={{
                  padding: '0.5rem 1rem',
                  background: statusFilter === status ? '#0070f3' : '#f0f0f0',
                  color: statusFilter === status ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer'
                }}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Competition Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {filteredCompetitions.slice(0, visibleCount).map((comp, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                position: 'relative',
                transform: hoveredCard === idx ? 'translateY(-5px)' : 'none',
                transition: 'transform 0.2s ease',
                cursor: 'pointer'
              }}
            >
              {comp.status === 'ending-soon' && (
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  background: '#ff4757',
                  color: 'white',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.8rem'
                }}>
                  ⏳ Ending Soon
                </div>
              )}
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '600' }}>
                {comp.type === 'Hackathon' && '💻 '}
                {comp.type === 'Ideathon' && '💡 '}
                {comp.title}
              </h3>
              <p style={{ color: '#666', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                Hosted by: {comp.host}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {comp.tags.map((tag, idx) => (
                  <span key={idx} style={{
                    background: '#e0f0ff',
                    color: '#0070f3',
                    padding: '0.3rem 0.7rem',
                    borderRadius: '1rem',
                    fontSize: '0.8rem'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                fontSize: '0.9rem'
              }}>
                <div>
                  <div>🏆 {comp.reward}</div>
                  <div>📅 {comp.deadline}</div>
                </div>
                <div>
                  <div>👥 {comp.participants}+</div>
                  <div>🌐 {comp.mode}</div>
                </div>
              </div>
              <button
                onMouseEnter={() => setHoveredButton(idx)}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  background: hoveredButton === idx ? '#005bb5' : '#0070f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'background 0.2s ease'
                }}
              >
                View Details →
              </button>
            </div>
          ))}
        </div>

        {/* Load More */}
        {shouldShowLoadMore && (
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <button
              onClick={loadMore}
              style={{
                padding: '1rem 2rem',
                background: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'background 0.2s ease',
                
              }}
            >
              Load More Competitions
            </button>
          </div>
        )}

        {/* Promote Section */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '1rem',
          padding: '3rem',
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
            Want to host your own competition?
          </h2>
          <p style={{ marginBottom: '2rem', color: '#666' }}>
            List your hackathon, quiz, or challenge to reach thousands of talented students
          </p>
          <button style={{
            padding: '1rem 2.5rem',
            background: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: '500'
          }}>
            Submit Your Competition →
          </button>
        </div>
      </div>
    </Layout>
    </>
  );
}

const filterStyle = {
  padding: '0.6rem 1rem',
  borderRadius: '0.5rem',
  border: '1px solid #ddd',
  minWidth: '180px',
  fontSize: '0.95rem'
};