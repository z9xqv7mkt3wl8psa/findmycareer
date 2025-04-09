'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const scholarships = [
  {
    title: 'DST-INSPIRE Fellowship',
    description: 'A fellowship for PhD students in the field of science and technology, awarded by the Department of Science & Technology.',
    amount: '₹80,000 per month',
    lastDate: 'May 15, 2025',
    link: 'https://www.dst.gov.in/',
  },
  {
    title: 'UGC NET Fellowship',
    description: 'For students qualifying the UGC NET exam, this fellowship offers financial support for research and studies in higher education.',
    amount: '₹31,000 per month (for 2 years), ₹35,000 per month (after 2 years)',
    lastDate: 'May 31, 2025',
    link: 'https://ugc.ac.in/',
  },
  {
    title: 'JRF/SRF Fellowship by CSIR',
    description: 'The Council of Scientific & Industrial Research (CSIR) offers Junior and Senior Research Fellowships for PhD students in science and engineering.',
    amount: '₹31,000 per month (JRF), ₹35,000 per month (SRF)',
    lastDate: 'June 30, 2025',
    link: 'https://www.csir.res.in/',
  },
  {
    title: 'Tata Innovation Fellowship',
    description: 'A fellowship for PhD students pursuing research in biotechnology, health, agriculture, and related fields.',
    amount: '₹1,00,000 per month',
    lastDate: 'July 30, 2025',
    link: 'https://www.dbtindia.gov.in/',
  },
  {
    title: 'Commonwealth PhD Scholarships',
    description: 'A fully funded scholarship program for PhD students from Commonwealth countries to study at UK universities.',
    amount: 'Fully funded (Tuition, Airfare, Living Expenses)',
    lastDate: 'October 15, 2025',
    link: 'https://cscuk.dfid.gov.uk/',
  },
  {
    title: 'Rhodes Scholarship for India',
    description: 'One of the most prestigious scholarships for PhD students, providing funding for full-time postgraduate study at the University of Oxford.',
    amount: 'Fully funded (Tuition, Airfare, Stipend)',
    lastDate: 'July 15, 2025',
    link: 'https://www.rhodeshouse.ox.ac.uk/',
  },
  {
    title: 'Fulbright-Nehru Doctoral Research Fellowship',
    description: 'Aimed at students pursuing PhD research, the fellowship provides funding for research at leading universities in the US.',
    amount: 'Fully funded (Tuition, Travel, and Living Expenses)',
    lastDate: 'July 30, 2025',
    link: 'https://www.usief.org.in/',
  },
  {
    title: 'Gates Cambridge Scholarships',
    description: 'A highly competitive scholarship that covers full tuition and living expenses for students pursuing a PhD at the University of Cambridge.',
    amount: 'Fully funded (Tuition, Living Expenses)',
    lastDate: 'October 15, 2025',
    link: 'https://www.gatescambridge.org/',
  },
];

export default function PhDScholarships() {
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
    <> 
    <Navbar />
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
          Top PhD Scholarships
        </h1>

        <p
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            color: '#555',
            fontSize: '1.1rem',
          }}
        >
          Explore scholarships for students pursuing PhD in various fields. Get financial support for your research journey.
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
    </>
  );
}

const selectStyle = {
  padding: '0.6rem',
  borderRadius: '0.5rem',
  border: '1px solid #ccc',
  minWidth: '180px',
};
