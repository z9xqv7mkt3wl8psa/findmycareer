'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const scholarships = [
  {
    title: 'Dr. A.P.J. Abdul Kalam Scholarship for Medical Students',
    description: 'Scholarship for students pursuing MBBS in India. Focuses on meritorious students who require financial assistance.',
    amount: '₹50,000 per year',
    lastDate: 'June 30, 2025',
    link: 'https://www.kalamfoundation.org/',
  },
  {
    title: 'AIIMS MBBS Scholarship',
    description: 'Aimed at providing financial aid for deserving students who secure admission to AIIMS for MBBS program.',
    amount: 'Varies based on merit',
    lastDate: 'May 31, 2025',
    link: 'https://www.aiims.edu/en.html',
  },
  {
    title: 'IIT Roorkee Medical Scholarships',
    description: 'Offered by IIT Roorkee for students pursuing medical research programs or MD/MS.',
    amount: '₹30,000 per month',
    lastDate: 'July 15, 2025',
    link: 'https://www.iitr.ac.in/',
  },
  {
    title: 'Kumar Mangalam Birla Scholarship',
    description: 'Scholarships for meritorious students pursuing undergraduate and postgraduate medical programs.',
    amount: 'Up to ₹2,00,000 per year',
    lastDate: 'June 30, 2025',
    link: 'https://www.adityabirlascholarships.com/',
  },
  {
    title: 'GSK Scholarships for Future Health Leaders',
    description: 'This scholarship offers a chance for medical students to further their education and become leaders in health and medicine.',
    amount: 'Fully Funded (Tuition, living expenses)',
    lastDate: 'August 31, 2025',
    link: 'https://www.gsk.com/en-gb/media/press-releases/gsk-launches-new-health-leaders-scholarship/',
  },
  {
    title: 'Narotam Sekhsaria Foundation Medical Scholarship',
    description: 'A scholarship for Indian students pursuing postgraduate courses in medical fields from top universities abroad.',
    amount: 'Up to ₹20,00,000',
    lastDate: 'May 30, 2025',
    link: 'https://www.nsfoundation.co.in/',
  },
  {
    title: 'Commonwealth Scholarships for Medical Students',
    description: 'For students from Commonwealth countries pursuing medical studies in the UK. Covers tuition, airfare, and living expenses.',
    amount: 'Fully Funded',
    lastDate: 'October 15, 2025',
    link: 'https://cscuk.dfid.gov.uk/',
  },
  {
    title: 'Indian Medical Association (IMA) Scholarship',
    description: 'For students enrolled in MBBS or other medical courses. The scholarship offers financial support for students with excellent academic records.',
    amount: '₹50,000 per year',
    lastDate: 'June 15, 2025',
    link: 'https://www.ima-india.org/',
  },
];

export default function MedicalScholarships() {
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
          Top Scholarships for Medical Students
        </h1>

        <p
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            color: '#555',
            fontSize: '1.1rem',
          }}
        >
          Discover the best scholarships available for students pursuing medical courses to support your studies and research.
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
