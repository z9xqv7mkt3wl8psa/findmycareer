'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

const hackathons = [
  {
    id: 1,
    title: 'National AI Hackathon 2024',
    host: 'Tech Ministry of India',
    theme: 'AI for Social Good',
    mode: 'Hybrid',
    deadline: '2024-08-15',
    duration: '48 Hours',
    prize: '₹10 Lakhs + Internships',
    level: 'National',
    tags: ['#AI', '#MachineLearning', '#Innovation'],
    participants: 1500,
    status: 'trending',
    description: 'Build innovative AI solutions to solve real-world problems in healthcare, education, and sustainability.',
    eligibility: 'Open to all college students and young professionals',
    registrationLink: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Blockchain Innovation Challenge',
    host: 'Crypto Foundation',
    theme: 'Decentralized Finance',
    mode: 'Online',
    deadline: '2024-07-20',
    duration: '36 Hours',
    prize: '₹5 Lakhs + Incubation',
    level: 'International',
    tags: ['#Blockchain', '#Web3', '#DeFi'],
    participants: 900,
    status: 'new',
    description: 'Create groundbreaking blockchain solutions for financial inclusion and transparency.',
    eligibility: 'Developers aged 18-35 worldwide',
    registrationLink: '#'
  },
  // Add more hackathons as needed
];

const prizeTypes = ['Cash', 'Internship', 'Incubation', 'Swag'];
const modes = ['Online', 'Offline', 'Hybrid'];
const difficultyLevels = ['Beginner', 'Intermediate', 'Advanced'];

export default function HackathonPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [prizeFilter, setPrizeFilter] = useState('');
  const [modeFilter, setModeFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredHackathons = hackathons.filter(hackathon => {
    const matchesSearch = hackathon.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrize = !prizeFilter || hackathon.prize.includes(prizeFilter);
    const matchesMode = !modeFilter || hackathon.mode === modeFilter;
    const matchesLevel = !levelFilter || hackathon.level.includes(levelFilter);

    return matchesSearch && matchesPrize && matchesMode && matchesLevel;
  });

  const loadMore = () => setVisibleCount(prev => prev + 5);
  const shouldShowLoadMore = filteredHackathons.length > visibleCount;

  return (
    <> 
    <Navbar />
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #6e48aa 0%, #9d50bb 100%)',
          borderRadius: '1rem',
          padding: '3rem 2rem',
          marginBottom: '3rem',
          color: 'white',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            🚀 Join the Best Hackathons
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Build, innovate, and compete with the brightest minds in technology
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '1.5rem'
          }}>
            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>
              💻 1000+ Participants Monthly
            </div>
            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>
              🏆 ₹50L+ in Total Prizes
            </div>
          </div>
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
            placeholder="Search hackathons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={filterStyle}
          />

          <select 
            style={filterStyle} 
            onChange={(e) => setPrizeFilter(e.target.value)}
            value={prizeFilter}
          >
            <option value="">All Prize Types</option>
            {prizeTypes.map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))}
          </select>

          <select 
            style={filterStyle} 
            onChange={(e) => setModeFilter(e.target.value)}
            value={modeFilter}
          >
            <option value="">All Modes</option>
            {modes.map((mode, idx) => (
              <option key={idx} value={mode}>{mode}</option>
            ))}
          </select>

          <select 
            style={filterStyle} 
            onChange={(e) => setLevelFilter(e.target.value)}
            value={levelFilter}
          >
            <option value="">All Levels</option>
            {difficultyLevels.map((level, idx) => (
              <option key={idx} value={level}>{level}</option>
            ))}
          </select>
        </div>

        {/* Hackathon Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {filteredHackathons.slice(0, visibleCount).map((hackathon) => (
            <div 
              key={hackathon.id}
              onMouseEnter={() => setHoveredCard(hackathon.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                position: 'relative',
                transform: hoveredCard === hackathon.id ? 'translateY(-5px)' : 'none',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                border: '1px solid #eee',
                cursor: 'pointer'
              }}
            >
              {hackathon.status === 'trending' && (
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
                  🔥 Trending
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#6e48aa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  marginRight: '1rem'
                }}>
                  {hackathon.host.split(' ').map(w => w[0]).join('')}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.2rem' }}>
                    {hackathon.title}
                  </h3>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>
                    Hosted by {hackathon.host}
                  </p>
                </div>
              </div>

              <p style={{ color: '#444', marginBottom: '1rem', fontSize: '0.95rem' }}>
                {hackathon.description}
              </p>

              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                {hackathon.tags.map((tag, idx) => (
                  <span key={idx} style={{
                    background: '#f0e6ff',
                    color: '#6e48aa',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '1rem',
                    fontSize: '0.8rem'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.3rem' }}>🏆 Prize</div>
                  <div style={{ fontWeight: '600' }}>{hackathon.prize}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.3rem' }}>⏳ Deadline</div>
                  <div style={{ fontWeight: '600' }}>{hackathon.deadline}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.3rem' }}>🕒 Duration</div>
                  <div style={{ fontWeight: '600' }}>{hackathon.duration}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.3rem' }}>🌐 Mode</div>
                  <div style={{ fontWeight: '600' }}>{hackathon.mode}</div>
                </div>
              </div>

              <a
                href={hackathon.registrationLink}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '0.8rem',
                  background: hoveredCard === hackathon.id ? '#5d3a9e' : '#6e48aa',
                  color: 'white',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'background 0.2s ease'
                }}
              >
                Register Now
              </a>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {shouldShowLoadMore && (
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <button
              onClick={loadMore}
              style={{
                padding: '1rem 2rem',
                background: '#6e48aa',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#5d3a9e'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#6e48aa'}
            >
              Load More Hackathons
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div style={{
          background: '#f8f4ff',
          borderRadius: '1rem',
          padding: '3rem',
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#6e48aa' }}>
            Want to host your own hackathon?
          </h2>
          <p style={{ marginBottom: '2rem', color: '#666', fontSize: '1.1rem' }}>
            Reach thousands of talented developers and innovators
          </p>
          <button style={{
            padding: '1rem 2.5rem',
            background: '#6e48aa',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: '500',
            transition: 'background 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#5d3a9e'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#6e48aa'}
          >
            List Your Hackathon →
          </button>
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