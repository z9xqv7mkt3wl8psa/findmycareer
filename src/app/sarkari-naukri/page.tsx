'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

// ---------------------- Interfaces ----------------------

interface CategorizedItem {
  title: string;
  description?: string;
  location?: string;
  lastDate?: string;
  date?: string;
  link: string;
  type?: string;
  category: 'result' | 'admit-card' | 'latest-jobs' | 'certificate' | 'important';
}

// ---------------------- Data ----------------------

const categorizedItems: CategorizedItem[] = [
  {
    title: 'SSC CGL 2025 - Staff Selection Commission',
    description: 'Apply for Group B and C posts.',
    location: 'Pan India',
    lastDate: 'May 15, 2025',
    link: 'https://ssc.nic.in/',
    type: 'Full-Time',
    category: 'latest-jobs',
  },
  {
    title: 'UPSC CSE Prelims 2025 Result Out',
    date: 'April 10, 2025',
    link: 'https://www.upsc.gov.in/',
    category: 'result',
  },
  {
    title: 'CBSE Class 10th Board Results 2025 Declared',
    date: 'April 5, 2025',
    link: 'https://cbseresults.nic.in/',
    category: 'result',
  },
  {
    title: 'UP Police Admit Card Released',
    date: 'April 12, 2025',
    link: 'https://uppolice.gov.in/',
    category: 'admit-card',
  },
  {
    title: 'Railway RRB Group D Recruitment',
    description: '10th Pass Eligible.',
    location: 'All Zones',
    lastDate: 'May 30, 2025',
    link: 'https://www.rrbcdg.gov.in/',
    type: 'Full-Time',
    category: 'latest-jobs',
  },
  {
    title: 'IBPS Clerk 2025',
    description: 'Hiring clerks for banks.',
    location: 'Across India',
    lastDate: 'June 10, 2025',
    link: 'https://www.ibps.in/',
    type: 'Full-Time',
    category: 'latest-jobs',
  },
  {
    title: 'Certificate Verification for Assam TET',
    date: 'April 1, 2025',
    link: 'https://ssa.assam.gov.in/',
    category: 'certificate',
  },
  {
    title: 'Important Update: UPSC Interview Schedule',
    date: 'April 8, 2025',
    link: 'https://www.upsc.gov.in/',
    category: 'important',
  },
  {
    title: 'SSC CHSL 2024 Final Result Announced',
    date: 'March 29, 2025',
    link: 'https://ssc.nic.in/',
    category: 'result',
  },
  {
    title: 'Delhi Police Admit Card for Constable 2025',
    date: 'April 7, 2025',
    link: 'https://delhipolice.gov.in/',
    category: 'admit-card',
  },
  {
    title: 'SSC CGL 2025 - Staff Selection Commission',
    description: 'Apply for Group B and C posts.',
    location: 'Pan India',
    lastDate: 'May 15, 2025',
    link: 'https://ssc.nic.in/',
    type: 'Full-Time',
    category: 'latest-jobs',
  },
  {
    title: 'UPSC CSE Prelims 2025 Result Out',
    date: 'April 10, 2025',
    link: 'https://www.upsc.gov.in/',
    category: 'result',
  },
  {
    title: 'CBSE Class 10th Board Results 2025 Declared',
    date: 'April 5, 2025',
    link: 'https://cbseresults.nic.in/',
    category: 'result',
  },
  {
    title: 'UP Police Admit Card Released',
    date: 'April 12, 2025',
    link: 'https://uppolice.gov.in/',
    category: 'admit-card',
  },
  {
    title: 'Railway RRB Group D Recruitment',
    description: '10th Pass Eligible.',
    location: 'All Zones',
    lastDate: 'May 30, 2025',
    link: 'https://www.rrbcdg.gov.in/',
    type: 'Full-Time',
    category: 'latest-jobs',
  },
  {
    title: 'IBPS Clerk 2025',
    description: 'Hiring clerks for banks.',
    location: 'Across India',
    lastDate: 'June 10, 2025',
    link: 'https://www.ibps.in/',
    type: 'Full-Time',
    category: 'latest-jobs',
  },
  {
    title: 'Certificate Verification for Assam TET',
    date: 'April 1, 2025',
    link: 'https://ssa.assam.gov.in/',
    category: 'certificate',
  },
  {
    title: 'Certificate Verification for Assam TET',
    date: 'April 1, 2025',
    link: 'https://ssa.assam.gov.in/',
    category: 'certificate',
  },
  {
    title: 'Important Update: UPSC Interview Schedule',
    date: 'April 8, 2025',
    link: 'https://www.upsc.gov.in/',
    category: 'important',
  },
  {
    title: 'SSC CHSL 2024 Final Result Announced',
    date: 'March 29, 2025',
    link: 'https://ssc.nic.in/',
    category: 'result',
  },
  {
    title: 'Delhi Police Admit Card for Constable 2025',
    date: 'April 7, 2025',
    link: 'https://delhipolice.gov.in/',
    category: 'admit-card',
  },
  
];

// ---------------------- Components ----------------------

const TrendingTicker = ({ updates }: { updates: CategorizedItem[] }) => {
  const chunked = [];
  const chunkSize = 3;

  for (let i = 0; i < updates.length; i += chunkSize) {
    chunked.push(updates.slice(i, i + chunkSize));
  }

  return (
    <div style={{ marginBottom: '2rem' }}>
      {chunked.map((line, idx) => (
        <div key={idx} style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          backgroundColor: '#fff8e1',
          borderBottom: '1px solid #ffe082',
          padding: '0.5rem',
          fontSize: '0.95rem',
          color: '#b85c00',
        }}>
          <div style={{
            display: 'inline-block',
            animation: `${idx % 2 === 0 ? 'ticker-left' : 'ticker-right'} ${20 + idx * 5}s linear infinite`
          }}>
            {line.map((item, i) => (
              <span key={i} style={{ marginRight: '3rem', fontWeight: 600 }}>
                <Link href={item.link} style={{ color: '#b85c00' }}>{item.title}</Link>
              </span>
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes ticker-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        @keyframes ticker-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

const CategoryBox = ({
  title,
  items,
  limit = 4,
  query,
}: {
  title: string;
  items: CategorizedItem[];
  limit?: number;
  query: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  const getHighlightedText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase()
        ? <span key={i} style={{ backgroundColor: 'yellow', fontWeight: 'bold' }}>{part}</span>
        : part
    );
  };

  return (
    <div style={{
      background: '#fff',
      padding: '1.5rem',
      borderRadius: '1rem',
      boxShadow: '0 0 12px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '260px',
      margin: '0.5rem',
      border: '2px solid #0070f3',
    }}>
      <h2 style={{
        marginBottom: '1rem',
        fontSize: '1.5rem',
        color: '#333',
        borderBottom: '2px solid #0070f3',
        display: 'inline-block',
      }}>
        {getHighlightedText(title, query)}
      </h2>

      <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', flex: 1 }}>
        {(expanded ? items : items.slice(0, limit)).map((item, idx) => (
          <li key={idx} style={{ marginBottom: '0.6rem' }}>
            <Link href={item.link} target="_blank" style={{ color: '#0070f3', fontWeight: 500 }}>
              {getHighlightedText(item.title, query)}
            </Link>
            {item.date && (
              <span style={{ color: '#888', marginLeft: '0.5rem', fontSize: '0.85rem' }}>
                ({item.date})
              </span>
            )}
          </li>
        ))}
      </ul>

      {items.length > limit && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            marginTop: '1rem',
            background: 'transparent',
            color: '#0070f3',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'underline',
            alignSelf: 'flex-start',
          }}>
          {expanded ? 'View Less ▲' : 'View More ▼'}
        </button>
      )}
    </div>
  );
};

// ---------------------- Page ----------------------

export default function SarkariNaukariHub() {
  const [query, setQuery] = useState('');

  // Filter items based on query
  const filteredItems = categorizedItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  // Function to check if a category has any item matching the search query
  const hasMatchInCategory = (items: CategorizedItem[], query: string) => {
    return items.some(item => item.title.toLowerCase().includes(query.toLowerCase()));
  };

  // Sorting categories based on whether they contain search results
  const categories = [
    'result',
    'admit-card',
    'latest-jobs',
    'certificate',
    'important',
  ];

  // Reorder categories to bring those with search matches to the top
  const sortedCategories = categories.sort((a, b) => {
    const aHasMatch = hasMatchInCategory(categorizedItems.filter(i => i.category === a), query);
    const bHasMatch = hasMatchInCategory(categorizedItems.filter(i => i.category === b), query);
    return bHasMatch ? 1 : aHasMatch ? -1 : 0;
  });

  return (
    <>
      <Navbar />
      <Layout>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#1a1a1a',
          textAlign: 'center',
          marginBottom: '2rem',
        }}>
          Government Job Updates & Announcements
        </h1>

        {/* Trending Ticker */}
        <TrendingTicker updates={filteredItems.slice(0, 9)} />

        <section style={{
          padding: '3rem 2rem',
          backgroundColor: '#fff',
          textAlign: 'center',
          marginBottom: '3rem',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          borderRadius: '8px',
        }}>
          <h2 style={{ fontSize: '2rem', color: '#003366', marginBottom: '1rem' }}>
            Search for Government Jobs & Announcements
          </h2>
          <input
            type="text"
            placeholder="Search scholarships, internships, loans..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              marginTop: '1rem',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              width: '100%',
              maxWidth: '500px',
            }}
          />
        </section>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {/* Display Category Boxes */}
          {sortedCategories.map((category) => (
            <CategoryBox
              key={category}
              title={category.charAt(0).toUpperCase() + category.slice(1)}
              items={categorizedItems.filter(item => item.category === category)}
              query={query}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}
