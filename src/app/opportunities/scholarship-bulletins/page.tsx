'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default function ScholarshipBulletinsPage() {
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
          📰 Scholarship Bulletins
        </h1>

        <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#4a5568' }}>
          Stay updated with the latest scholarship opportunities through Buddy4Study's Monthly Scholarship Bulletins. These bulletins provide curated information about scholarships, application procedures, eligibility criteria, and more.
        </p>

        <div
          style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            backgroundColor: '#f7fafc',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
          }}
        >
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#2b6cb0',
            }}
          >
            📥 Download Latest Bulletins
          </h2>
          <p style={{ color: '#4a5568' }}>
            Access the most recent scholarship bulletins to find financial support for your education. These bulletins are updated regularly to provide you with the latest information.
          </p>
          <Link
            href="https://www.buddy4study.com/scholarship-bulletin"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#2b6cb0',
              color: '#ffffff',
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            Download Now
          </Link>
        </div>

        <div
          style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            backgroundColor: '#f7fafc',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
          }}
        >
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#2b6cb0',
            }}
          >
            📬 Subscribe for Monthly Updates
          </h2>
          <p style={{ color: '#4a5568' }}>
            Never miss out on scholarship opportunities. Subscribe to receive monthly bulletins directly in your inbox, keeping you informed about new and upcoming scholarships.
          </p>
          <Link
            href="https://www.buddy4study.com/newsletter"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#2b6cb0',
              color: '#ffffff',
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            Subscribe Now
          </Link>
        </div>

        <div
          style={{
            padding: '1.5rem',
            backgroundColor: '#f7fafc',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
          }}
        >
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#2b6cb0',
            }}
          >
            🏫 Partner with Buddy4Study
          </h2>
          <p style={{ color: '#4a5568' }}>
            If you are a corporate, foundation, school, college, or NGO representative interested in partnering with Buddy4Study to support students, connect with us to explore collaboration opportunities.
          </p>
          <Link
            href="https://www.buddy4study.com/scholarship-bulletin"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#2b6cb0',
              color: '#ffffff',
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            Become a Partner
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
