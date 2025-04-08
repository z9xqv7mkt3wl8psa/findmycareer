'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const bachelorsLoans = [
  {
    title: 'HDFC Education Loan for Bachelors',
    description: 'HDFC offers loans with low interest rates for bachelor degree students. Covers tuition fees, hostel fees, and other expenses.',
    loanAmount: 'Up to ₹7,50,000',
    interestRate: '10.5% - 12.5% p.a.',
    repaymentPeriod: 'Up to 15 years',
    eligibility: 'Indian citizens, age between 16-35 years',
    link: 'https://www.hdfc.com/education-loans',
  },
  {
    title: 'SBI Education Loan for Bachelors',
    description: 'The SBI education loan is designed for students pursuing a bachelor’s degree, offering easy processing and flexible repayment options.',
    loanAmount: 'Up to ₹20,00,000',
    interestRate: '9.9% - 11% p.a.',
    repaymentPeriod: 'Up to 15 years',
    eligibility: 'Indian citizens, age between 18-35 years',
    link: 'https://www.sbi.co.in/education-loan',
  },
  {
    title: 'ICICI Bank Education Loan for Bachelors',
    description: 'ICICI offers education loans for bachelor students with fast approval and attractive interest rates.',
    loanAmount: 'Up to ₹10,00,000',
    interestRate: '10.25% - 12.75% p.a.',
    repaymentPeriod: 'Up to 15 years',
    eligibility: 'Indian citizens, age between 18-35 years',
    link: 'https://www.icicibank.com/education-loan/bachelors',
  },
  {
    title: 'Axis Bank Education Loan for Bachelors',
    description: 'Axis Bank provides educational loans for bachelor degree students with competitive rates and easy repayment plans.',
    loanAmount: 'Up to ₹15,00,000',
    interestRate: '10.5% - 12% p.a.',
    repaymentPeriod: 'Up to 15 years',
    eligibility: 'Indian citizens, age between 18-35 years',
    link: 'https://www.axisbank.com/education-loan',
  },
  {
    title: 'Punjab National Bank (PNB) Education Loan for Bachelors',
    description: 'PNB offers low-interest education loans for bachelor students with easy documentation and fast processing.',
    loanAmount: 'Up to ₹8,00,000',
    interestRate: '9.65% - 10.75% p.a.',
    repaymentPeriod: 'Up to 15 years',
    eligibility: 'Indian citizens, age between 18-35 years',
    link: 'https://www.pnbindia.in/education-loans.html',
  },
  {
    title: 'Bank of Baroda Education Loan for Bachelors',
    description: 'Bank of Baroda offers education loans to bachelor students with flexible terms and low interest rates.',
    loanAmount: 'Up to ₹10,00,000',
    interestRate: '9.50% - 11.50% p.a.',
    repaymentPeriod: 'Up to 15 years',
    eligibility: 'Indian citizens, age between 18-35 years',
    link: 'https://www.bankofbaroda.in/education-loan',
  },
];

export default function BachelorsLoans() {
  const [visibleCount, setVisibleCount] = useState(6); // Initial loans shown (5)
  const [filterAmount, setFilterAmount] = useState(''); // Loan Amount filter
  const [filterInterest, setFilterInterest] = useState(''); // Interest Rate filter
  const [filteredLoans, setFilteredLoans] = useState(bachelorsLoans);

  // Handle Loan Amount filter change
  const handleFilterAmountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterAmount(value);
    filterLoans(value, filterInterest);
  };

  // Handle Interest Rate filter change
  const handleFilterInterestChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterInterest(value);
    filterLoans(filterAmount, value);
  };

  const filterLoans = (amount: string, interest: string) => {
    let filtered = [...bachelorsLoans];

    // Filter by loan amount range
    if (amount) {
      const [min, max] = amount.split('-').map(Number);
      filtered = filtered.filter((loan) => {
        const loanAmount = parseInt(loan.loanAmount.replace(/[^\d]/g, '')) || 0;
        return loanAmount >= min && loanAmount <= max;
      });
    }

    // Filter by interest rate range
    if (interest) {
      const [min, max] = interest.split('-').map(Number);
      filtered = filtered.filter((loan) => {
        const interestRate = parseFloat(loan.interestRate.replace(/[^\d.]/g, '')) || 0;
        return interestRate >= min && interestRate <= max;
      });
    }

    setFilteredLoans(filtered);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3); // Load 3 more loans at a time
  };

  const shouldShowLoadMore = bachelorsLoans.length > visibleCount;

  return (
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold', color: '#222' }}>
          Top Educational Loans for Bachelors
        </h1>

        <p style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#555', fontSize: '1.1rem' }}>
          Explore the best educational loans available for bachelor's degree students.
        </p>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
          <select style={selectStyle} onChange={handleFilterAmountChange} value={filterAmount}>
            <option value="">Select Loan Amount Range</option>
            <option value="0-5000000">Up to ₹5,00,000</option>
            <option value="5000000-10000000">₹5,00,000 - ₹10,00,000</option>
            <option value="10000000-15000000">₹10,00,000 - ₹15,00,000</option>
          </select>

          <select style={selectStyle} onChange={handleFilterInterestChange} value={filterInterest}>
            <option value="">Select Interest Rate Range</option>
            <option value="9-10">9% - 10%</option>
            <option value="10-12">10% - 12%</option>
            <option value="12-15">12% - 15%</option>
          </select>
        </div>

        {/* Loans List */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {filteredLoans.slice(0, visibleCount).map((loan, index) => (
            <div key={index} style={cardStyle}>
              <h3 style={cardTitle}>{loan.title}</h3>
              <p style={cardDescription}>{loan.description}</p>
              <p style={cardDetail}>
                <strong>Loan Amount:</strong> {loan.loanAmount}
              </p>
              <p style={cardDetail}>
                <strong>Interest Rate:</strong> {loan.interestRate}
              </p>
              <p style={cardDetail}>
                <strong>Repayment Period:</strong> {loan.repaymentPeriod}
              </p>
              <p style={cardDetail}>
                <strong>Eligibility:</strong> {loan.eligibility}
              </p>
              <Link href={loan.link} target="_blank" style={linkStyle}>
                View Details → 
              </Link>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {shouldShowLoadMore && (
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <div
              onClick={loadMore}
              style={{
                margin: '3rem auto 2rem',
                width: '100px',
                height: '20px',
                background: '#0070f3',
                borderRadius: '15px',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.3s ease',
                boxShadow: '0 -2px 10px rgba(0,0,0,0.2)',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '4px',
                  background: '#fff',
                  borderRadius: '999px',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: 'bendLine 1s ease-out forwards',
                }}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

const selectStyle = {
  padding: '0.6rem',
  borderRadius: '0.5rem',
  border: '1px solid #ccc',
  minWidth: '180px',
};

const cardStyle = {
  background: '#ffffff',
  borderRadius: '1rem',
  padding: '1.8rem',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
  border: '1px solid #eee',
  transition: 'transform 0.3s ease',
};

const cardTitle = {
  fontSize: '1.3rem',
  marginBottom: '0.7rem',
  fontWeight: '600',
  color: '#1a1a1a',
};

const cardDescription = {
  fontSize: '1rem',
  marginBottom: '1rem',
  lineHeight: '1.5',
  color: '#444',
};

const cardDetail = {
  fontSize: '0.95rem',
  marginBottom: '0.4rem',
  color: '#0070f3',
};

const linkStyle = {
  display: 'inline-block',
  padding: '0.5rem 1rem',
  backgroundColor: '#0070f3',
  color: '#fff',
  borderRadius: '0.5rem',
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontWeight: '500',
};
