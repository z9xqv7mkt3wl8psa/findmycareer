'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default function CollegeLevelScholarshipsPage() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a365d', marginBottom: '1rem' }}>
          🎓 College-Level Scholarships
        </h1>
        <p style={{ fontSize: '1rem', color: '#4a5568', marginBottom: '2rem' }}>
          Explore exclusive scholarship opportunities available for undergraduate students in India. These scholarships aim to support and empower students in pursuing quality higher education.
        </p>

        {[
          {
            title: 'Reliance Foundation Undergraduate Scholarships',
            desc: 'Supports up to 5,000 meritorious undergraduate students on a merit-cum-means basis.',
            amount: 'Up to ₹2,00,000 over the duration of the degree program',
            link: 'https://www.scholarships.reliancefoundation.org/UG_Scholarship.aspx',
          },
          {
            title: 'HDFC Bank Parivartan’s ECSS Programme',
            desc: 'Provides financial assistance to meritorious students from underprivileged backgrounds pursuing professional courses.',
            amount: 'Up to ₹75,000 per year',
            link: 'https://www.buddy4study.com/article/private-scholarships-in-india',
          },
          {
            title: 'Swami Dayanand Education Foundation Merit-cum-Means Scholarships',
            desc: 'Offers scholarships to students pursuing professional courses like engineering, medical, etc.',
            amount: 'Up to ₹50,000 per year',
            link: 'https://www.swamidayanand.org/scholarship-india',
          },
          {
            title: 'Foundation For Excellence Scholarship',
            desc: 'Provides scholarships to students pursuing professional courses in engineering and medicine.',
            amount: 'Covers academic expenses including tuition fees',
            link: 'https://en.wikipedia.org/wiki/Foundation_For_Excellence',
          },
          {
            title: 'National Scholarship Portal - Central Sector Scheme of Scholarships',
            desc: 'Aims to provide financial assistance to meritorious students from low-income families to meet day-to-day expenses while pursuing higher studies.',
            amount: '₹10,000 per annum for the first three years and ₹20,000 per annum for the fourth and fifth year',
            link: 'https://scholarships.gov.in/',
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
