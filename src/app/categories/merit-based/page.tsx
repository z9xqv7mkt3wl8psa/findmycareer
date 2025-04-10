'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default function MeritBasedScholarshipsPage() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a365d', marginBottom: '1rem' }}>
          🏆 Merit-Based Scholarships
        </h1>
        <p style={{ fontSize: '1rem', color: '#4a5568', marginBottom: '2rem' }}>
          Explore exclusive scholarship opportunities available for students who have demonstrated exceptional academic achievements. These scholarships aim to reward and support meritorious students in pursuing quality education.
        </p>

        {[
          {
            title: 'National Means-cum-Merit Scholarship Scheme (NMMSS)',
            desc: 'Provides financial assistance to meritorious students from economically weaker sections to prevent dropouts at Class VIII and encourage them to continue their education at the secondary stage.',
            amount: '₹12,000 per annum',
            link: 'https://dsel.education.gov.in/scheme/nmmss',
          },
          {
            title: 'Swami Dayanand Merit-cum-Means Scholarships',
            desc: 'Offers financial assistance to meritorious students pursuing professional courses such as engineering, medical, and architecture in India.',
            amount: 'Up to ₹50,000 per annum',
            link: 'https://www.buddy4study.com/page/swami-dayanand-merit-india-scholarships',
          },
          {
            title: 'Reliance Foundation Undergraduate Scholarships',
            desc: 'Supports meritorious students for their undergraduate education, empowering them to continue their studies without financial burden.',
            amount: 'Up to ₹2,00,000 over the duration of the degree programme',
            link: 'https://www.scholarships.reliancefoundation.org/UG_Scholarship.aspx',
          },
          {
            title: 'Kind Circle Scholarship for Meritorious Students',
            desc: 'An initiative to support academically meritorious students from underprivileged sections of society to build a foundation for their bright future.',
            amount: 'Variable financial assistance',
            link: 'https://www.buddy4study.com/page/kind-circle-scholarship-for-meritorious-students',
          },
          {
            title: 'College Board India Scholars Program',
            desc: 'Provides up to 100% tuition fee scholarships at leading universities in India for students who perform exceptionally well on the SAT.',
            amount: 'Up to 100% tuition fee waiver',
            link: 'https://www.buddy4study.com/collegeboard',
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
