'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default function StudentFundingPage() {
  return (
    <>
      <Navbar />
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
          🎓 Student Funding Opportunities
        </h1>

        <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#4a5568' }}>
          Explore various funding options available to support your educational journey. From scholarships to education loans and grants, there are many ways to ease your financial burden.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Funding Cards */}
          {[
            {
              title: 'Merit-Based Scholarships',
              desc: 'For students with excellent academic achievements.',
              link: '/scholarships/merit-based',
            },
            {
              title: 'Need-Based Grants',
              desc: 'For students with financial need and limited resources.',
              link: '/grants/need-based',
            },
            {
              title: 'Education Loans',
              desc: 'Low-interest loans available for higher studies.',
              link: '/loans/education',
            },
            {
              title: 'International Study Aid',
              desc: 'Funding support for studying abroad programs.',
              link: '/aid/international-study',
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
