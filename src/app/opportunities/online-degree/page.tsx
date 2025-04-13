'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default function OnlineDegreePage() {
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
          🎓 Online Degree Opportunities
        </h1>

        <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#4a5568' }}>
          Explore various online degree programs offered by recognized institutions. These programs provide flexibility and quality education to help you advance your career.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Online Degree Cards */}
          {[
            {
              title: 'Amity University Online',
              desc: 'Offers UGC-approved online UG and PG degree programs with expert faculty.',
              link: 'https://amityonline.com/',
            },
            {
              title: 'Shoolini University Online',
              desc: 'Provides Pay-After-Placement online degrees, ensuring career security.',
              link: 'https://shoolini.online/',
            },
            {
              title: 'Manav Rachna Online',
              desc: 'Enroll in UGC-approved online degree courses with 200+ hiring partners.',
              link: 'https://manavrachnaonline.com/',
            },
            {
              title: 'Coursera - Indian University Degrees',
              desc: 'Earn degrees from top Indian universities through Coursera\'s online platform.',
              link: 'https://www.coursera.org/degrees/top-indian',
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
