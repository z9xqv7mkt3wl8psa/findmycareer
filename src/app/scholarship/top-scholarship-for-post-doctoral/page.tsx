'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const scholarships = [
  {
    title: 'DST-INSPIRE Faculty Fellowship',
    description: 'A fellowship aimed at post-doctoral researchers interested in pursuing a career in teaching and research in India.',
    amount: '₹1,00,000 per month',
    lastDate: 'June 30, 2025',
    link: 'https://www.dst.gov.in/',
  },
  {
    title: 'Marie Curie Fellowships',
    description: 'A prestigious post-doctoral fellowship program that offers funding for research in Europe in various fields of science and technology.',
    amount: '€50,000 per year',
    lastDate: 'September 30, 2025',
    link: 'https://ec.europa.eu/',
  },
  {
    title: 'Post-Doctoral Fellowship Program by UGC',
    description: 'The University Grants Commission (UGC) offers fellowships for post-doctoral research in various fields in India.',
    amount: '₹47,000 per month',
    lastDate: 'July 15, 2025',
    link: 'https://ugc.ac.in/',
  },
  {
    title: 'DAAD Postdoctoral Fellowships',
    description: 'Germany’s DAAD (German Academic Exchange Service) offers fellowships for post-doctoral researchers from various disciplines.',
    amount: 'Fully funded (Tuition, Airfare, Living Expenses)',
    lastDate: 'August 31, 2025',
    link: 'https://www.daad.de/',
  },
  {
    title: 'JSPS Postdoctoral Fellowship for Foreign Researchers',
    description: 'The Japan Society for the Promotion of Science (JSPS) offers post-doctoral fellowships to researchers from overseas to work in Japan.',
    amount: '¥200,000 per month',
    lastDate: 'May 31, 2025',
    link: 'https://www.jsps.go.jp/',
  },
  {
    title: 'Newton International Fellowship',
    description: 'For researchers from developing countries to undertake post-doctoral research in the UK. The fellowship covers living costs, travel, and research expenses.',
    amount: '£2,000/month',
    lastDate: 'June 15, 2025',
    link: 'https://www.newtonfund.ac.uk/',
  },
  {
    title: 'Humboldt Research Fellowship for Postdoctoral Researchers',
    description: 'Germany offers this fellowship to post-doctoral researchers from all disciplines to conduct research in Germany.',
    amount: '€2,500 per month',
    lastDate: 'July 31, 2025',
    link: 'https://www.humboldt-foundation.de/',
  },
  {
    title: 'Tata Trusts Post-Doctoral Fellowship',
    description: 'A fellowship program by Tata Trusts to support post-doctoral researchers working in fields such as healthcare, education, and science.',
    amount: '₹1,00,000 per month',
    lastDate: 'August 15, 2025',
    link: 'https://www.tatatrusts.org/',
  },
];

export default function PostDoctoralScholarships() {
  const [visibleCount, setVisibleCount] = useState(5); // Initial scholarships shown (5)
  const [filterCriteria, setFilterCriteria] = useState('');
  const [filteredScholarships, setFilteredScholarships] = useState(scholarships);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterCriteria(value);

    if (value === 'amount') {
      setFilteredScholarships([ ...filteredScholarships.sort((a, b) => {
        const aAmount = parseInt(a.amount.replace(/[^\d]/g, '')) || 0;
        const bAmount = parseInt(b.amount.replace(/[^\d]/g, '')) || 0;
        return bAmount - aAmount;
      })]);
    } else if (value === 'date') {
      setFilteredScholarships([ ...filteredScholarships.sort((a, b) => new Date(a.lastDate).getTime() - new Date(b.lastDate).getTime()) ]);
    } else {
      setFilteredScholarships(scholarships); // Reset to original order
    }
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3); // Load 3 more scholarships at a time
  };

  const shouldShowLoadMore = scholarships.length > visibleCount;

  return (
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: 'bold',
            color: '#222',
          }}
        >
          Top Post-Doctoral Fellowships
        </h1>

        <p
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            color: '#555',
            fontSize: '1.1rem',
          }}
        >
          Explore fellowships for post-doctoral researchers in various fields of science, technology, and humanities.
        </p>

        {/* Sort By Dropdown */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2.5rem',
            justifyContent: 'center',
          }}
        >
          <select
            style={selectStyle}
            onChange={handleFilterChange}
            value={filterCriteria}
          >
            <option value="">Sort By</option>
            <option value="amount">Amount</option>
            <option value="date">Last Date</option>
          </select>
        </div>

        {/* Scholarships List */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredScholarships.slice(0, visibleCount).map((scholarship, index) => (
            <div
              key={index}
              style={{
                background: '#ffffff',
                borderRadius: '1rem',
                padding: '1.8rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                border: '1px solid #eee',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.7rem', fontWeight: '600', color: '#1a1a1a' }}>
                {scholarship.title}
              </h3>
              <p style={{ fontSize: '1rem', marginBottom: '1rem', lineHeight: '1.5', color: '#444' }}>
                {scholarship.description}
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#0070f3' }}>
                <strong>Amount:</strong> {scholarship.amount}
              </p>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#333' }}>
                <strong>Last Date:</strong> {scholarship.lastDate}
              </p>
              <Link
                href={scholarship.link}
                target="_blank"
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#0070f3',
                  color: '#fff',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                }}
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {shouldShowLoadMore && (
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <div
              onClick={loadMore}
              style={{
                margin: '3rem auto 2rem',
                width: '100px',
                height: '20px',
                background: '#0070f3',
                borderRadius: '15px',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.3s ease',
                boxShadow: '0 -2px 10px rgba(0,0,0,0.2)',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '4px',
                  background: '#fff',
                  borderRadius: '999px',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: 'bendLine 1s ease-out forwards',
                }}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

const selectStyle = {
  padding: '0.6rem',
  borderRadius: '0.5rem',
  border: '1px solid #ccc',
  minWidth: '180px',
};
