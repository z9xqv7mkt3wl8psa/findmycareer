'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

type College = {
  name: string;
  stream: 'Science' | 'Commerce' | 'Arts';
  state: string;
  type: 'Government' | 'Private';
  fees: string;
  rank: number;
  avgPackage: string;
};

const colleges: College[] = [
  {
    name: 'IIT Delhi',
    stream: 'Science',
    state: 'Delhi',
    type: 'Government',
    fees: '₹2.2L / year',
    rank: 2,
    avgPackage: '₹18 LPA',
  },
  {
    name: 'SRCC',
    stream: 'Commerce',
    state: 'Delhi',
    type: 'Government',
    fees: '₹50K / year',
    rank: 1,
    avgPackage: '₹9 LPA',
  },
  {
    name: 'St. Xavier’s Mumbai',
    stream: 'Arts',
    state: 'Maharashtra',
    type: 'Private',
    fees: '₹60K / year',
    rank: 5,
    avgPackage: '₹4.5 LPA',
  },
  {
    name: 'VIT Vellore',
    stream: 'Science',
    state: 'Tamil Nadu',
    type: 'Private',
    fees: '₹1.9L / year',
    rank: 12,
    avgPackage: '₹7.5 LPA',
  },
  {
    name: 'Christ University',
    stream: 'Commerce',
    state: 'Karnataka',
    type: 'Private',
    fees: '₹1.5L / year',
    rank: 8,
    avgPackage: '₹5.2 LPA',
  },
];

export default function CollegesPage() {
  const [stream, setStream] = useState<string>('All');
  const [state, setState] = useState<string>('All');

  const filtered = colleges.filter((c) => {
    const matchStream = stream === 'All' || c.stream === stream;
    const matchState = state === 'All' || c.state === state;
    return matchStream && matchState;
  });

  const allStates = ['All', ...new Set(colleges.map((c) => c.state))];
  const allStreams = ['All', 'Science', 'Commerce', 'Arts'];

  return (
    <Layout>
      <section style={{ padding: '2rem' }}>
        <h1 style={{ textAlign: 'center' }}>Top Indian Colleges</h1>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
          <select onChange={(e) => setStream(e.target.value)} value={stream}>
            {allStreams.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <select onChange={(e) => setState(e.target.value)} value={state}>
            {allStates.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {filtered.map((college, idx) => (
            <div key={idx} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '1rem', background: '#fff' }}>
              <h3>{college.name}</h3>
              <p><strong>Stream:</strong> {college.stream}</p>
              <p><strong>State:</strong> {college.state}</p>
              <p><strong>Type:</strong> {college.type}</p>
              <p><strong>Fees:</strong> {college.fees}</p>
              <p><strong>Rank:</strong> #{college.rank}</p>
              <p><strong>Avg Package:</strong> {college.avgPackage}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
