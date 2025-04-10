'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default function ForGirlsScholarshipsPage() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a365d', marginBottom: '1rem' }}>
          🎓 Scholarships for Girls
        </h1>
        <p style={{ fontSize: '1rem', color: '#4a5568', marginBottom: '2rem' }}>
          Explore exclusive scholarship opportunities available for girl students in India. These scholarships aim to support and empower girls in pursuing quality education.
        </p>

        {[
          {
            title: 'Kotak Kanya Scholarship',
            desc: 'For meritorious girl students pursuing professional courses (engineering, medicine, architecture, etc.).',
            amount: 'Up to ₹1.5 lakh per year',
            link: 'https://www.buddy4study.com/scholarship/kotak-kanya-scholarship',
          },
          {
            title: 'Legrand Empowering Scholarship Program',
            desc: 'Supports girls pursuing B.Tech., B.E., B.Arch., and other degrees in finance or science.',
            amount: 'Up to ₹1 lakh per year',
            link: 'https://www.buddy4study.com/scholarship/legrand-empowering-scholarship-program',
          },
          {
            title: 'Santoor Women’s Scholarship',
            desc: 'For girls from Andhra Pradesh, Telangana & Karnataka enrolling in full-time degree programs.',
            amount: '₹24,000 per year',
            link: 'https://www.buddy4study.com/scholarship/santoor-womens-scholarship',
          },
          {
            title: 'Begum Hazrat Mahal National Scholarship',
            desc: 'Offered to meritorious minority girls studying from Class 9 to 12.',
            amount: '₹5,000 to ₹6,000 annually',
            link: 'https://www.buddy4study.com/scholarship/begum-hazrat-mahal-national-scholarship-scheme',
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
