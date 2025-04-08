'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const scholarships = [
  {
    title: 'Fulbright Program',
    description: 'A prestigious program offering scholarships to students from all disciplines to study in the United States.',
    amount: 'Full tuition, living expenses, airfare, and more',
    lastDate: 'May 15, 2025',
    link: 'https://foreign.fulbrightonline.org/',
  },
  {
    title: 'Chevening Scholarship',
    description: 'A UK government global scholarship program aimed at students pursuing a Master’s degree in the United Kingdom.',
    amount: 'Full tuition, living allowance, and airfare',
    lastDate: 'November 1, 2025',
    link: 'https://www.chevening.org/',
  },
  {
    title: 'DAAD Scholarship',
    description: 'A German scholarship program for international students to pursue undergraduate, graduate, and postgraduate courses in Germany.',
    amount: 'Varies (full or partial funding)',
    lastDate: 'July 31, 2025',
    link: 'https://www.daad.de/en/',
  },
  {
    title: 'Erasmus Mundus Joint Master Degrees',
    description: 'Scholarships for students who want to pursue Master’s degrees at various universities in Europe.',
    amount: 'Full tuition, travel allowance, and living expenses',
    lastDate: 'October 31, 2025',
    link: 'https://eacea.ec.europa.eu/erasmus-plus/funding/erasmus-mundus-joint-master-degrees_en',
  },
  {
    title: 'Australia Awards Scholarships',
    description: 'Australian government scholarships for students from developing countries to pursue undergraduate or postgraduate education in Australia.',
    amount: 'Full tuition, living expenses, and airfare',
    lastDate: 'April 30, 2025',
    link: 'https://www.dfat.gov.au/aid/where-we-fund/australia-awards',
  },
  {
    title: 'Rhodes Scholarship',
    description: 'A prestigious international scholarship that allows students to study at the University of Oxford.',
    amount: 'Full tuition, living expenses, and travel allowance',
    lastDate: 'October 1, 2025',
    link: 'https://www.rhodeshouse.ox.ac.uk/',
  },
  {
    title: 'Hubert H. Humphrey Fellowship Program',
    description: 'A non-degree program for experienced professionals who want to enhance their leadership skills at a US university.',
    amount: 'Full tuition, living expenses, and travel allowance',
    lastDate: 'September 15, 2025',
    link: 'https://www.humphreyfellowship.org/',
  },
  {
    title: 'Commonwealth Scholarships',
    description: 'Scholarships for students from Commonwealth countries to pursue a Master’s or PhD in the UK.',
    amount: 'Full tuition, airfare, and living allowance',
    lastDate: 'December 15, 2025',
    link: 'http://cscuk.dfid.gov.uk/',
  },
];

export default function AbroadScholarships() {
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
          Top Scholarships for Studying Abroad
        </h1>

        <p
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            color: '#555',
            fontSize: '1.1rem',
          }}
        >
          Explore scholarships that provide funding for studying abroad in countries like the US, UK, Germany, Australia, and more.
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
