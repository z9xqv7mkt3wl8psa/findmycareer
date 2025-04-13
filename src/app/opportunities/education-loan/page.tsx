'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default function EducationLoanPage() {
  const loanSchemes = [
    {
      title: 'Collateral-Free Education Loan',
      description: 'Up to ₹40 lakh for studies in India or abroad. Flexible repayment and competitive interest rates.',
    },
    {
      title: 'IDFC FIRST Bank Loan',
      description: 'Loans from ₹1 lakh to ₹40 lakh. No collateral required. Interest rates start from 9% per annum.',
    },
    {
      title: 'PNB Education Loan Scheme',
      description: 'For undergraduate and postgraduate programs. Interest rates from 8.2%. Covers tuition, hostel, and other expenses.',
    },
    {
      title: 'Axis Bank International Loan',
      description: 'Loans up to ₹75 lakh for higher studies abroad. Available for medicine, engineering, management, and more.',
    },
    {
      title: 'Avanse Abroad Education Loan',
      description: 'Loans from ₹10 lakh to ₹2 crore for studies in the US, UK, Canada, and more. Covers tuition and living expenses.',
    },
    {
      title: 'Domestic Loan for UG/PG Students',
      description: 'Funding support up to ₹10 lakh for students in Indian colleges and universities. Simple process and fast disbursal.',
    },
  ];

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

      <section style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Education Loan Options for Students
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {loanSchemes.map((scheme, index) => (
            <div key={index} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '1rem', boxShadow: '0 4px 8px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{scheme.title}</h3>
              <p>{scheme.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
