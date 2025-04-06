'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

type Career = {
  title: string;
  stream: 'Science' | 'Commerce' | 'Arts';
  description: string;
  degree: string;
  avgSalary: string;
};

const careers: Career[] = [
  {
    title: 'Software Engineer',
    stream: 'Science',
    description: 'Builds applications and systems in tech companies.',
    degree: 'B.Tech in CSE / B.Sc in CS',
    avgSalary: '₹6-12 LPA',
  },
  {
    title: 'Chartered Accountant',
    stream: 'Commerce',
    description: 'Handles finance, audits, and taxation for firms.',
    degree: 'B.Com + CA',
    avgSalary: '₹7-15 LPA',
  },
  {
    title: 'Psychologist',
    stream: 'Arts',
    description: 'Studies human behavior and helps mental well-being.',
    degree: 'BA + MA in Psychology',
    avgSalary: '₹4-8 LPA',
  },
  {
    title: 'Mechanical Engineer',
    stream: 'Science',
    description: 'Designs and builds mechanical systems.',
    degree: 'B.Tech in Mechanical',
    avgSalary: '₹5-10 LPA',
  },
  {
    title: 'Digital Marketer',
    stream: 'Commerce',
    description: 'Manages online marketing, SEO, and content.',
    degree: 'BBA / B.Com + Digital Cert.',
    avgSalary: '₹4-8 LPA',
  },
  {
    title: 'Graphic Designer',
    stream: 'Arts',
    description: 'Creates visuals and UI/UX for products and brands.',
    degree: 'BA in Design / Fine Arts',
    avgSalary: '₹3-6 LPA',
  },
];

export default function CareersPage() {
  const [selectedStream, setSelectedStream] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const filteredCareers = careers.filter((c) => {
    const streamMatch = selectedStream === 'All' || c.stream === selectedStream;
    const searchMatch = c.title.toLowerCase().includes(search.toLowerCase());
    return streamMatch && searchMatch;
  });

  return (
    <Layout>
      <section style={{ padding: '2rem' }}>
        <h1 style={{ textAlign: 'center' }}>Explore Career Paths</h1>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['All', 'Science', 'Commerce', 'Arts'].map((stream) => (
            <button
              key={stream}
              onClick={() => setSelectedStream(stream)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: selectedStream === stream ? '#0070f3' : '#ccc',
                color: selectedStream === stream ? '#fff' : '#000',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
              }}
            >
              {stream}
            </button>
          ))}
          <input
            type="text"
            placeholder="Search a career..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: '0.5rem',
              minWidth: '200px',
              borderRadius: '0.5rem',
              border: '1px solid #999'
            }}
          />
        </div>

        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {filteredCareers.map((career, idx) => (
            <div key={idx} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '1rem', background: '#f9f9f9' }}>
              <h3>{career.title}</h3>
              <p><strong>Stream:</strong> {career.stream}</p>
              <p>{career.description}</p>
              <p><strong>Recommended Degree:</strong> {career.degree}</p>
              <p><strong>Avg Salary:</strong> {career.avgSalary}</p>
            </div>
          ))}
          {filteredCareers.length === 0 && (
            <p style={{ textAlign: 'center', width: '100%' }}>No careers found. Try a different search or stream.</p>
          )}
        </div>
      </section>
    </Layout>
  );
}
