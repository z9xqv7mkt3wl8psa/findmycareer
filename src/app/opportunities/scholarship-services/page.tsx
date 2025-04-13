'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default function ScholarshipServicesPage() {
  return (
    <>
      <Navbar />
       {/* Buddy4Study Banner Section */}
       <div style={{ width: '100%', overflow: 'hidden' }}>
        <img
          src="/oppurtunitiesbackground2.jpg" // Make sure image.png is placed in the 'public/images' folder
          alt="Buddy4Study Education Loan Banner"
          style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
        />
      </div>
      <div
        style={{
          padding: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#1a365d',
          }}
        >
          🎓 Scholarship Services
        </h1>

        <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#4a5568' }}>
          Explore various scholarship opportunities available to students in India. These platforms and programs offer financial assistance to support your educational journey.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Scholarship Service Cards */}
          {[
            {
              title: 'National Scholarship Portal',
              desc: 'A one-stop portal by the Government of India for various scholarships offered by central and state governments.',
              link: 'https://scholarships.gov.in/',
            },
            {
              title: 'Vidyasaarathi Scholarship Portal',
              desc: 'An online platform facilitating various educational scholarships provided by corporates and industries.',
              link: 'https://www.vidyasaarathi.co.in/',
            },
            {
              title: 'SBIF Asha Scholarship Program',
              desc: 'A scholarship program by SBI Foundation aiming to provide financial assistance to meritorious students from low-income families.',
              link: 'https://www.sbifashascholarship.org/',
            },
            {
              title: 'Foundation For Excellence',
              desc: 'Provides scholarships to academically talented and economically underprivileged students in India.',
              link: 'https://ffe.org/',
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              style={{
                textDecoration: 'none',
                backgroundColor: '#edf2f7',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.2s',
                color: '#1a202c',
              }}
            >
              <h3
                style={{
                  marginBottom: '0.5rem',
                  fontSize: '1.2rem',
                  color: '#2b6cb0',
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#4a5568' }}>
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
