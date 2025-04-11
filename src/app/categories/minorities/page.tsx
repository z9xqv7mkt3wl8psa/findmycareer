'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default function MinorityScholarshipsPage() {
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
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a365d', marginBottom: '1rem' }}>
          🏫 Scholarships for Minority Students
        </h1>
        <p style={{ fontSize: '1rem', color: '#4a5568', marginBottom: '2rem' }}>
          Explore exclusive scholarship opportunities available for students belonging to minority communities in India. These scholarships aim to support and empower minority students in pursuing quality education.
        </p>

        {[
          {
            title: 'Pre-Matric Scholarship for Minorities',
            desc: 'Provides financial assistance to minority students studying in Class 1 to 10 to encourage them to continue their education.',
            amount: 'Admission fee up to ₹500 per annum and maintenance allowance up to ₹600 per month',
            link: 'https://www.buddy4study.com/article/ultimate-guide-to-minority-scholarships-in-india-pre-matric-scholarships',
          },
          {
            title: 'Post-Matric Scholarship for Minorities',
            desc: 'Offers financial support to minority students pursuing education from Class 11 to PhD level.',
            amount: 'Admission and tuition fee up to ₹7,000 per annum and maintenance allowance up to ₹1,200 per month',
            link: 'https://www.buddy4study.com/article/post-matric-scholarship-for-minorities',
          },
          {
            title: 'Merit-cum-Means Scholarship for Professional and Technical Courses',
            desc: 'Aims to support minority students pursuing professional or technical courses at undergraduate or postgraduate levels.',
            amount: 'Course fee up to ₹20,000 per annum and maintenance allowance up to ₹1,000 per month',
            link: 'https://www.buddy4study.com/article/merit-cum-means-scholarship-for-minorities',
          },
          {
            title: 'Begum Hazrat Mahal National Scholarship',
            desc: 'Scholarship for meritorious girl students belonging to minority communities, studying in Class 9 to 12.',
            amount: 'Up to ₹12,000 per annum',
            link: 'https://www.buddy4study.com/article/begum-hazrat-mahal-national-scholarship',
          },
          {
            title: 'Maulana Azad National Fellowship',
            desc: 'Fellowship for minority students to pursue MPhil and PhD courses.',
            amount: 'Fellowship amount as per UGC norms',
            link: 'https://www.buddy4study.com/article/maulana-azad-national-fellowship',
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
