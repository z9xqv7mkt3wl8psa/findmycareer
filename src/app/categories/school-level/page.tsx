'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default function SchoolLevelScholarshipsPage() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a365d', marginBottom: '1rem' }}>
          🎓 School-Level Scholarships
        </h1>
        <p style={{ fontSize: '1rem', color: '#4a5568', marginBottom: '2rem' }}>
          Discover various scholarship opportunities available for school students in India. These scholarships aim to support and encourage students at the school level to excel in their academic pursuits.
        </p>

        {[
          {
            title: 'National Means-cum-Merit Scholarship Scheme (NMMSS)',
            desc: 'Provides financial assistance to meritorious students from economically weaker sections to prevent dropouts at Class VIII and encourage them to continue their education at the secondary stage.',
            amount: '₹12,000 per annum',
            link: 'https://dsel.education.gov.in/scheme/nmmss',
          },
          {
            title: 'National Talent Search Examination (NTSE)',
            desc: 'A national-level scholarship program to identify and nurture talented students. It provides financial assistance to selected students for their education.',
            amount: '₹1,250 per month for Class XI and XII; ₹2,000 per month for undergraduate and postgraduate studies.',
            link: 'https://ncert.nic.in/national-talent-examination.php',
          },
          {
            title: 'Kishore Vaigyanik Protsahan Yojana (KVPY)',
            desc: 'A scholarship program funded by the Department of Science and Technology, Government of India, to encourage students to take up research careers in Science.',
            amount: 'Fellowship of ₹5,000 to ₹7,000 per month and an annual contingency grant.',
            link: 'http://www.kvpy.iisc.ernet.in/main/index.htm',
          },
          {
            title: 'PM CARES for Children Scheme',
            desc: 'Provides comprehensive support for children who have lost both parents due to COVID-19, including a scholarship allowance for their education.',
            amount: '₹20,000 per annum per child, comprising a monthly allowance of ₹1,000 and an annual academic allowance of ₹8,000.',
            link: 'https://pmcaresforchildren.in/scholarship',
          },
          {
            title: 'Swami Dayanand Scholarship for Academic Excellence',
            desc: 'Offers scholarships to meritorious students who have studied in government or aided schools and are entering their first year of college.',
            amount: 'Variable financial assistance.',
            link: 'https://www.swamidayanand.org/scholarship-india',
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
