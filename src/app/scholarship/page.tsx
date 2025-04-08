'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const scholarships = [
  {
    title: 'INSPIRE Scholarship',
    description: 'Awarded to top Class 12 scorers pursuing science in UG.',
    amount: '₹80,000 per year',
    lastDate: 'July 15, 2025',
    link: 'https://online-inspire.gov.in/',
  },
  {
    title: 'AICTE Pragati',
    description: 'Scholarship for girls in technical education.',
    amount: '₹50,000/year',
    lastDate: 'October 31, 2025',
    link: 'https://www.aicte-india.org/',
  },
  {
    title: 'Vidyadhan',
    description: 'Supports low-income students post Class 10.',
    amount: '₹10,000 – ₹60,000/year',
    lastDate: 'June 10, 2025',
    link: 'https://www.vidyadhan.org/',
  },
  {
    title: 'AICTE Pragati',
    description: 'Scholarship for girls in technical education.',
    amount: '₹50,000/year',
    lastDate: 'October 31, 2025',
    link: 'https://www.aicte-india.org/',
  },
  {
    title: 'SVMCM',
    description: 'Merit-cum-means scholarship for West Bengal students.',
    amount: 'Up to ₹12,000/month',
    lastDate: 'August 30, 2025',
    link: 'https://svmcm.wbhed.gov.in/',
  },
  {
    title: 'NSP Scholarship',
    description: 'For various minority and backward class students.',
    amount: '₹6,000 – ₹25,000/year',
    lastDate: 'September 15, 2025',
    link: 'https://scholarships.gov.in/',
  },
  {
    title: 'AICTE Pragati',
    description: 'Scholarship for girls in technical education.',
    amount: '₹50,000/year',
    lastDate: 'October 31, 2025',
    link: 'https://www.aicte-india.org/',
  },
  {
    title: 'AICTE Pragati',
    description: 'Scholarship for girls in technical education.',
    amount: '₹50,000/year',
    lastDate: 'October 31, 2025',
    link: 'https://www.aicte-india.org/',
  },
  {
    title: 'KVPY',
    description: 'Science scholarship merged with INSPIRE.',
    amount: '₹5,000 – ₹7,000/month',
    lastDate: 'N/A',
    link: 'http://www.kvpy.iisc.ernet.in/',
  },
  {
    title: 'AICTE Pragati',
    description: 'Scholarship for girls in technical education.',
    amount: '₹50,000/year',
    lastDate: 'October 31, 2025',
    link: 'https://www.aicte-india.org/',
  },
];

const categories = [
  'Top Scholarship for Class 10',
  'Top Scholarship for Class 11',
  'Top Scholarship for Class 12',
  'Top Scholarship for ITI',
  'Top Scholarship for Diploma',
  'Top Scholarship for Bachelors',
  'Top Scholarship for Engineering',
  'Top Scholarship for Medical',
  'Top Scholarship for Masters',
  'Top Scholarship for Professional Course',
  'Top Scholarship for PhD',
  'Top Scholarship for Post Doctoral',
  'Top Abroad Scholarships'
];

export default function ScholarshipMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(9); // Start with 10 scholarships visible

  const filteredScholarships = scholarships.filter((s) =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => {
    setVisibleCount((prev) => prev + 9); // Load 10 more scholarships
  };

  const shouldShowLoadMore = filteredScholarships.length > visibleCount; // Show button if more than visibleCount scholarships exist

  useEffect(() => {
    // Add the bending line effect style only on the client-side after the component is mounted
    const style = `
      @keyframes bendLine {
        0% {
          transform: translate(-50%, -50%) scaleX(1);
        }
        50% {
          transform: translate(-50%, -50%) scaleX(1.3);
        }
        100% {
          transform: translate(-50%, -50%) scaleX(1);
        }
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = style;
    document.head.appendChild(styleSheet);
  }, []);

  return (
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          <h1 style={{ fontSize: '2.7rem', fontWeight: 'bold', color: '#1a1a1a', textAlign: 'center' }}>
            Discover Scholarships Across All Education Levels
          </h1>
        </div>

        <p style={{
          textAlign: 'center',
          marginBottom: '2.8rem',
          color: '#555',
          fontSize: '1.1rem',
          maxWidth: '760px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Explore government and private scholarships tailored for Class 10 to PhD, including ITI, medical, engineering, and international opportunities.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2.2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <select style={selectStyle}>
            <option>Select State</option>
            <option>All India</option>
            <option>West Bengal</option>
            <option>Maharashtra</option>
          </select>

          <select style={selectStyle}>
            <option>Select Amount</option>
            <option>₹0 - ₹5,000</option>
            <option>₹5,001 - ₹10,000</option>
            <option>₹10,001 and above</option>
          </select>

          <input
            type="text"
            placeholder="Search Scholarships"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={selectStyle}
          />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
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

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          {categories.map((item, idx) => (
            <Link
              key={idx}
              href={`/scholarship/${item.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                display: 'inline-block',
                margin: '0.4rem 0.8rem',
                padding: '0.5rem 1rem',
                border: '1px solid #ccc',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                color: '#333',
              }}
            >
              {item}
            </Link>
          ))}
        </div>
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
