'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default function ExpertTalkPage() {
  return (
    <>
      <Navbar />
      <div
        style={{
          padding: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#1a365d',
          }}
        >
          🎙️ Expert Talk Opportunities
        </h1>

        <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#4a5568' }}>
          Engage with professionals and thought leaders through various expert talk events. These sessions provide valuable insights and networking opportunities to enhance your educational and professional journey.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Expert Talk Cards */}
          {[
            {
              title: 'The OpEd Project: Public Talks & Events',
              desc: 'Regularly hosts public talks exploring aspects of voice, identity, and how ideas and words can change the world.',
              link: 'https://www.theopedproject.org/experttalks',
            },
            {
              title: 'Met Expert Talks—The New Art',
              desc: 'Engage with art experts discussing American Photography from 1839–1910 at The Metropolitan Museum of Art.',
              link: 'https://engage.metmuseum.org/events/education/talks/public-programs/met-expert-talks/fy25/met-expert-talks-the-new-art/',
            },
            {
              title: 'Active Learning Classroom Expert Talk',
              desc: 'Presentation by Adam Finkelstein on supporting active learning through classroom design.',
              link: 'https://healthsciedu.umn.edu/learning-opportunities/support-active-learning/resources/expert-talk',
            },
            {
              title: 'TechOlympics Conference',
              desc: 'Annual IT conference connecting high school students with IT professionals and companies.',
              link: 'https://en.wikipedia.org/wiki/TechOlympics',
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              style={{
                textDecoration: 'none',
                backgroundColor: '#edf2f7',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.2s',
                color: '#1a202c',
              }}
            >
              <h3
                style={{
                  marginBottom: '0.5rem',
                  fontSize: '1.2rem',
                  color: '#2b6cb0',
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#4a5568' }}>
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
