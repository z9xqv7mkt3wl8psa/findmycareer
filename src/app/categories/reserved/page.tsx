'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default function ReservedCategoryScholarshipsPage() {
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
          🎓 Scholarships for Reserved Categories (SC/ST/OBC/DNT)
        </h1>
        <p style={{ fontSize: '1rem', color: '#4a5568', marginBottom: '2rem' }}>
          Explore exclusive scholarship opportunities available for students belonging to Scheduled Castes (SC), Scheduled Tribes (ST), Other Backward Classes (OBC), and De-Notified Tribes (DNT) in India. These scholarships aim to support and empower students from reserved categories in pursuing quality education.
        </p>

        {[
          {
            title: 'Post-Matric Scholarship for SC/ST/OBC Students',
            desc: 'Provides financial assistance to SC/ST/OBC students pursuing post-matriculation or post-secondary education.',
            amount: 'Variable financial assistance',
            link: 'https://www.buddy4study.com/scholarships/sc-st-obc-dnt',
          },
          {
            title: 'National Overseas Scholarship Scheme for SC/DNT Students',
            desc: 'Offers financial help to selected candidates willing to pursue a Master’s degree or PhD programme abroad.',
            amount: 'Covers tuition fees, living expenses, and other costs',
            link: 'https://www.buddy4study.com/article/national-overseas-scholarship-scheme-for-sc-dnts-and-low-income-students',
          },
          {
            title: 'Merit Scholarship for SC/ST/OBC Students, Delhi',
            desc: 'Provides financial assistance to SC, ST, and OBC category students pursuing UG/PG degree or diploma courses in Delhi.',
            amount: 'Up to ₹24,000 per annum',
            link: 'https://www.buddy4study.com/scholarship/merit-scholarship-for-sc-st-obc-students-delhi',
          },
          {
            title: 'Post-Matric Scholarships for OBC Students in India',
            desc: 'Financial assistance for OBC students pursuing post-matriculation education.',
            amount: 'Variable financial assistance',
            link: 'https://www.buddy4study.com/article/post-matric-scholarships-for-obc-students-in-india',
          },
          {
            title: 'SC ST OBC Scholarship',
            desc: 'Offers suitable financial assistance to SC/ST/OBC candidates at both pre-matric and post-matric levels of study.',
            amount: 'Variable financial assistance',
            link: 'https://www.buddy4study.com/article/sc-st-obc-scholarship',
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
