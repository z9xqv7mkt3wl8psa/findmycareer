'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default function TalentBasedScholarshipsPage() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a365d', marginBottom: '1rem' }}>
          🌟 Talent-Based Scholarships
        </h1>
        <p style={{ fontSize: '1rem', color: '#4a5568', marginBottom: '2rem' }}>
          Explore exclusive scholarship opportunities available for students with exceptional talents in various fields such as music, art, sports, and more. These scholarships aim to support and empower talented individuals in pursuing their passions and education.
        </p>

        {[
          {
            title: 'All India Talent Scholarship',
            desc: 'Scholarship for scholars enrolled in research work at reputed universities and institutes in disciplines like Management, Engineering & Technology, Economics, Law, Humanities, Medicine, and Fundamental Sciences.',
            amount: 'Variable financial assistance',
            link: 'https://theglobalscholarship.org/scholarships/all-india-talent-scholarship?source=main',
          },
          {
            title: 'Mahindra All India Talent Scholarship (MAITS)',
            desc: 'Scholarship for students who have passed SSC/HSC or equivalent examinations with more than 60% marks and are pursuing a diploma course.',
            amount: 'Variable financial assistance',
            link: 'https://www.kcmet.org/what-we-do-scholarship-grants.aspx',
          },
          {
            title: 'All India Talent Based Scholarships Award',
            desc: 'Awarded to students selected through All India Talent Search Examination, with contributions from various sponsors and philanthropic establishments.',
            amount: 'Variable financial assistance',
            link: 'https://www.buddy4study.com/scholarship/all-india-talent-scholarships-award',
          },
          {
            title: 'National Talent Search Exam (NTSE)',
            desc: 'Scholarship program to identify and nurture talented students, providing financial assistance for their education.',
            amount: '₹500 per month for Class XI onwards; for Ph.D., as per UGC norms',
            link: 'https://www.indiascienceandtechnology.gov.in/nurturing-minds/scholarships/school/national-talent-search-exam-ntse',
          },
          {
            title: 'Khelo India Youth Games',
            desc: 'Annual national level multidisciplinary grassroot games in India for under-17 and under-21 students, with scholarships for top performers.',
            amount: '₹500,000 annually for 8 years',
            link: 'https://kheloindia.gov.in/',
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
