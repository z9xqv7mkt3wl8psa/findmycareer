'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const scholarships = [
  {
    title: 'INSPIRE Scholarship',
    description: 'Awarded to top 1% Class 10 scorers who pursue science in Class 11 & 12.',
    amount: '₹80,000 per year',
    lastDate: 'July 15, 2025',
    link: 'https://online-inspire.gov.in/',
  },
  {
    title: 'NTSE (National Talent Search Exam)',
    description: 'National-level exam for Class 10 students offering scholarships up to PhD level.',
    amount: '₹1,250/month (Class 11-12), ₹2,000/month (UG & PG)',
    lastDate: 'May 31, 2025',
    link: 'https://ncert.nic.in/national-talent-examination.php',
  },
  {
    title: 'Aditya Birla Scholarship',
    description: 'Scholarship for meritorious students of Class 11-12 pursuing studies in science, commerce, or arts.',
    amount: 'Varies (based on merit)',
    lastDate: 'July 31, 2025',
    link: 'https://www.adityabirlascholarships.com/',
  },
  {
    title: 'Siemens India Scholarship Program',
    description: 'For Class 11 students pursuing science subjects. Supports future engineers and scientists.',
    amount: '₹50,000/year',
    lastDate: 'July 31, 2025',
    link: 'https://www.siemens.com/in/en/company/siemens-in-india/scholarship-program.htm',
  },
  {
    title: 'SBI Youth for India Fellowship',
    description: 'Aimed at Class 11 students interested in social work and community development.',
    amount: '₹20,000 per month',
    lastDate: 'June 30, 2025',
    link: 'https://www.sbi.co.in/web/sbi-foundation/india-initiative/youth-for-india',
  },
  {
    title: 'KVPY (Kishore Vaigyanik Protsahan Yojana)',
    description: 'A national-level scholarship program for Class 11 students who want to pursue careers in science and research.',
    amount: '₹5,000 – ₹7,000/month',
    lastDate: 'August 31, 2025',
    link: 'http://www.kvpy.iisc.ernet.in/',
  },
  // Additional scholarship data for "Load More"
  {
    title: 'UGC Scholarship for SC/ST Students',
    description: 'For students from SC/ST backgrounds pursuing education after Class 11.',
    amount: '₹2,000/month',
    lastDate: 'August 31, 2025',
    link: 'https://ugc.ac.in/',
  },
  {
    title: 'National Fellowship for OBC Students',
    description: 'For OBC students pursuing higher education beyond Class 11.',
    amount: '₹10,000/month',
    lastDate: 'September 15, 2025',
    link: 'https://www.ugc.ac.in/',
  },
];

export default function Class11Scholarships() {
  const [visibleCount, setVisibleCount] = useState(5); // Initial scholarships shown (5)
  const [filterCriteria, setFilterCriteria] = useState('');
  const [filteredScholarships, setFilteredScholarships] = useState(scholarships);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterCriteria(value);

    if (value === 'amount') {
      setFilteredScholarships([
        ...filteredScholarships.sort((a, b) => {
          const aAmount = parseInt(a.amount.replace(/[^\d]/g, '')) || 0;
          const bAmount = parseInt(b.amount.replace(/[^\d]/g, '')) || 0;
          return bAmount - aAmount;
        }),
      ]);
    } else if (value === 'date') {
      setFilteredScholarships([
        ...filteredScholarships.sort((a, b) => new Date(a.lastDate).getTime() - new Date(b.lastDate).getTime()),
      ]);
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
          Top Scholarships for Class 11 Students
        </h1>

        <p
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            color: '#555',
            fontSize: '1.1rem',
          }}
        >
          Discover government and private scholarships you can apply for after Class 11 to support your education.
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
