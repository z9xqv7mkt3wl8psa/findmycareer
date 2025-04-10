'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default function InternationalScholarshipsPage() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a365d', marginBottom: '1rem' }}>
          🌍 International Scholarships
        </h1>
        <p style={{ fontSize: '1rem', color: '#4a5568', marginBottom: '2rem' }}>
          Explore exclusive scholarship opportunities available for Indian students aspiring to study abroad. These scholarships aim to support and empower students in pursuing quality education internationally.
        </p>

        {[
          {
            title: 'Aga Khan Foundation International Scholarship',
            desc: 'Supports outstanding students from developing countries who have no other means of financing their studies, enabling them to pursue higher education at institutions of their choice.',
            amount: 'Covers tuition fees and living expenses for the entire duration of the degree course',
            link: 'https://admission.buddy4study.com/scholarship/aga-khan-foundation-international-scholarship',
          },
          {
            title: 'Education Future International Scholarship',
            desc: 'Offered to meritorious Indian students studying overseas at any of the top universities globally.',
            amount: 'Scholarship ranging between ₹2-10 lakh',
            link: 'https://www.buddy4study.com/scholarship/education-future-international-scholarship',
          },
          {
            title: 'Fulbright Scholarships',
            desc: 'Prestigious international academic exchange initiative granting approximately 9,000 merit-based scholarships annually across the United States and over 160 countries.',
            amount: 'Variable financial assistance',
            link: 'https://www.buddy4study.com/article/fulbright-scholarships',
          },
          {
            title: 'National Overseas Scholarship',
            desc: 'The Government of India offers this scholarship to meritorious graduate and postgraduate students to promote education abroad.',
            amount: 'Financial support till completion of education',
            link: 'https://www.buddy4study.com/article/how-to-find-international-scholarships',
          },
          {
            title: 'K.C. Mahindra Scholarship for Post-Graduate Studies Abroad',
            desc: 'Provides loan scholarships (interest-free) to top deserving students for pursuing higher studies at postgraduate level from an international university.',
            amount: 'Up to ₹8,00,000',
            link: 'https://www.buddy4study.com/article/how-to-find-international-scholarships',
          },
        ].map((scholarship, index) => (
          <div
            key={index}
            style={{
              marginBottom: '2rem',
              padding: '1.5rem',
              backgroundColor: '#f7fafc',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
            }}
          >
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2b6cb0' }}>
              {scholarship.title}
            </h2>
            <p style={{ color: '#4a5568', margin: '0.5rem 0' }}>{scholarship.desc}</p>
            <p style={{ color: '#2f855a', fontWeight: 'bold' }}>Award: {scholarship.amount}</p>
            <Link
              href={scholarship.link}
              target="_blank"
              style={{
                display: 'inline-block',
                marginTop: '0.75rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#2b6cb0',
                color: '#fff',
                borderRadius: '4px',
                textDecoration: 'none',
              }}
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
