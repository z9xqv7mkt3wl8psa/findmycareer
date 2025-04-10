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

      <section style={{ backgroundColor: '#f9f9ff', padding: '2rem' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2rem', color: '#003366', marginBottom: '2rem' }}>
          Education Loan Options for Students
        </h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {loanSchemes.map((scheme, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                padding: '1.25rem',
                borderRadius: '1rem',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 128, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
              }}
            >
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#222' }}>{scheme.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>{scheme.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
