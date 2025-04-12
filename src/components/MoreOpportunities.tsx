'use client';

import Link from 'next/link';
import Image from 'next/image';

const MoreOpportunities = () => {
  const items = [
    { label: 'Education Loan', path: '/opportunities/education-loan' },
    { label: 'Student Funding Solution', path: '/opportunities/student-funding' },
    { label: 'Expert Talk Series', path: '/opportunities/expert-talk' },
    { label: 'Career Guidance', path: '/opportunities/career-guidance' },
    { label: 'Online Degree', path: '/opportunities/online-degree' },
    { label: 'Scholarship Services', path: '/opportunities/scholarship-services' },
    { label: 'College Board', path: '/opportunities/college-board' },
    { label: 'Scholarship Bulletins', path: '/opportunities/scholarship-bulletins' },
  ];

  return (
    <section
      style={{
        backgroundColor: '#eef9ff',
        padding: '3rem 1rem',
      }}
    >
      

      {/* Heading */}
      <h2
        style={{
          textAlign: 'center',
          fontSize: '2.2rem',
          fontWeight: '700',
          marginBottom: '2rem',
          color: '#003366',
        }}
      >
        More <span style={{ color: '#004080' }}>Opportunities</span>
      </h2>

      {/* Grid Items */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {items.map((item, index) => (
          <Link key={index} href={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '2rem 1.5rem',
                borderRadius: '1rem',
                border: '2px solid #cce6ff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '1.1rem',
                minHeight: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
            >
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MoreOpportunities;
