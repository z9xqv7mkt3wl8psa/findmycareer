'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const scholarships = [
  {
    title: 'PMSSS (Prime Minister’s Special Scholarship Scheme)',
    description: 'Aimed at ITI students who belong to Jammu & Kashmir and are pursuing diploma/degree courses in various fields.',
    amount: '₹30,000/year',
    lastDate: 'July 31, 2025',
    link: 'https://www.aicte-india.org/schemes/pmsss',
  },
  {
    title: 'National Apprenticeship Promotion Scheme (NAPS)',
    description: 'Scholarship for ITI students pursuing apprenticeship training across various industries.',
    amount: 'Varies (Based on employer)',
    lastDate: 'Ongoing',
    link: 'https://www.apprenticeship.gov.in/',
  },
  {
    title: 'Sitaram Jindal Foundation Scholarship',
    description: 'Scholarship for economically disadvantaged students pursuing ITI courses in various trades.',
    amount: '₹20,000/year',
    lastDate: 'August 31, 2025',
    link: 'http://www.sitaramjindalfoundation.org/',
  },
  {
    title: 'ITI Scholarships - National Handicapped Finance and Development Corporation (NHFDC)',
    description: 'For differently-abled students pursuing ITI courses, providing financial assistance for education.',
    amount: 'Varies (Based on need)',
    lastDate: 'June 30, 2025',
    link: 'https://nhfdc.nic.in/',
  },
  {
    title: 'Fellowship for ITI Students - Ministry of Skill Development and Entrepreneurship',
    description: 'Supports ITI students from economically weaker backgrounds who are pursuing courses in trades related to industry growth.',
    amount: '₹15,000/year',
    lastDate: 'July 15, 2025',
    link: 'https://www.msde.gov.in/',
  },
  {
    title: 'Narotam Sekhsaria Foundation Scholarship',
    description: 'For ITI students with outstanding skills and financial need, primarily for those in specialized trades.',
    amount: '₹25,000/year',
    lastDate: 'August 31, 2025',
    link: 'https://www.nsf.org.in/',
  },
  {
    title: 'Indian Oil Corporation Limited (IOCL) Scholarship',
    description: 'Scholarships for ITI students pursuing trade courses in petroleum and energy sectors.',
    amount: '₹10,000/year',
    lastDate: 'August 15, 2025',
    link: 'https://www.iocl.com/',
  },
  {
    title: 'Shankar Bhatnagar Scholarship',
    description: 'Provides scholarships to ITI students from financially underprivileged backgrounds to support their vocational education.',
    amount: '₹15,000/year',
    lastDate: 'July 31, 2025',
    link: 'http://www.sbf.org.in/',
  },
];

export default function ITIScholarships() {
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
          Top Scholarships for ITI Students
        </h1>

        <p
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            color: '#555',
            fontSize: '1.1rem',
          }}
        >
          Discover the best scholarships available for ITI students to support your vocational training and development.
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
