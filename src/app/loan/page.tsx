'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const educationalLoans = [
  {
    title: 'SBI Education Loan - Engineering',
    description: 'State Bank of India offers loans for engineering students with flexible repayment terms and competitive interest rates.',
    amount: 'Up to ₹20 lakhs',
    interestRate: '8.5% p.a.',
    eligibility: 'Indian students, Engineering courses',
    lastDate: 'Open throughout the year',
    link: 'https://www.sbi.co.in/web/personal-banking/education-loan',
    type: 'Full-Time',
  },
  {
    title: 'HDFC Bank Education Loan - Bachelors',
    description: 'HDFC provides education loans for bachelors with minimal documentation and low processing fees.',
    amount: 'Up to ₹40 lakhs',
    interestRate: '9.5% p.a.',
    eligibility: 'Indian students, Undergraduate courses',
    lastDate: 'Open throughout the year',
    link: 'https://www.hdfcbank.com/personal/borrow/popular-loans/education-loans',
    type: 'Full-Time',
  },
  {
    title: 'Punjab National Bank Education Loan - Masters',
    description: 'PNB offers education loans for Masters courses, including MBA, MS, and more, with a special scheme for women.',
    amount: 'Up to ₹30 lakhs',
    interestRate: '9.25% p.a.',
    eligibility: 'Indian students, Postgraduate courses',
    lastDate: 'Open throughout the year',
    link: 'https://www.pnbindia.in/education-loan-scheme.html',
    type: 'Full-Time',
  },
  {
    title: 'Bank of Baroda Education Loan - Engineering',
    description: 'Bank of Baroda provides loans for engineering students at competitive interest rates with flexible repayment options.',
    amount: 'Up to ₹15 lakhs',
    interestRate: '8.75% p.a.',
    eligibility: 'Indian students, Engineering courses',
    lastDate: 'Open throughout the year',
    link: 'https://www.bankofbaroda.in/education-loan.htm',
    type: 'Full-Time',
  },
  {
    title: 'ICICI Bank Education Loan - Bachelors',
    description: 'ICICI offers a wide range of education loans for bachelors with quick disbursal and competitive interest rates.',
    amount: 'Up to ₹25 lakhs',
    interestRate: '10.5% p.a.',
    eligibility: 'Indian students, Undergraduate courses',
    lastDate: 'Open throughout the year',
    link: 'https://www.icicibank.com/loans/education-loan.page',
    type: 'Full-Time',
  },
  {
    title: 'Axis Bank Education Loan - Masters',
    description: 'Axis Bank provides education loans for students pursuing a master’s degree with attractive features and flexible repayment plans.',
    amount: 'Up to ₹40 lakhs',
    interestRate: '8.9% p.a.',
    eligibility: 'Indian students, Postgraduate courses',
    lastDate: 'Open throughout the year',
    link: 'https://www.axisbank.com/education-loan',
    type: 'Full-Time',
  },
];

const loanCategories = [
  'Top Educational Loan for Engineering',
  'Top Educational Loan for Bachelors',
  'Top Educational Loan for Masters',
];

export default function EducationalLoanHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [amountFilter, setAmountFilter] = useState('');
  const [interestRateFilter, setInterestRateFilter] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredLoans = educationalLoans.filter((loan) => {
    const matchesSearchTerm = loan.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAmount = !amountFilter || loan.amount.includes(amountFilter);
    const matchesInterestRate = !interestRateFilter || loan.interestRate.includes(interestRateFilter);

    return matchesSearchTerm && matchesAmount && matchesInterestRate;
  });

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const shouldShowLoadMore = filteredLoans.length > visibleCount;

  return (
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          <h1 style={{ fontSize: '2.7rem', fontWeight: 'bold', color: '#1a1a1a', textAlign: 'center' }}>
            Discover Top Educational Loans for Every Course
          </h1>
        </div>

        <p style={{
          textAlign: 'center',
          marginBottom: '2.8rem',
          color: '#555',
          fontSize: '1.1rem',
          maxWidth: '760px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Explore the best educational loan options across engineering, bachelors, and masters programs.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2.2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <select
            style={selectStyle}
            onChange={(e) => setAmountFilter(e.target.value)}
            value={amountFilter}
          >
            <option value="">Select Loan Amount</option>
            <option value="Up to ₹20 lakhs">Up to ₹20 lakhs</option>
            <option value="Up to ₹30 lakhs">Up to ₹30 lakhs</option>
            <option value="Up to ₹40 lakhs">Up to ₹40 lakhs</option>
          </select>

          <select
            style={selectStyle}
            onChange={(e) => setInterestRateFilter(e.target.value)}
            value={interestRateFilter}
          >
            <option value="">Select Interest Rate</option>
            <option value="8.5%">8.5% p.a.</option>
            <option value="9.25%">9.25% p.a.</option>
            <option value="10.5%">10.5% p.a.</option>
          </select>

          <input
            type="text"
            placeholder="Search Loans"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={selectStyle}
          />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {filteredLoans.slice(0, visibleCount).map((loan, index) => (
            <div
              key={index}
              style={{
                background: '#ffffff',
                borderRadius: '1rem',
                padding: '1.8rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                border: '1px solid #eee',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.7rem', fontWeight: '600', color: '#1a1a1a' }}>
                {loan.title}
              </h3>
              <p style={{ fontSize: '1rem', marginBottom: '1rem', lineHeight: '1.5', color: '#444' }}>
                {loan.description}
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#0070f3' }}>
                <strong>Loan Amount:</strong> {loan.amount}
              </p>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#333' }}>
                <strong>Interest Rate:</strong> {loan.interestRate} | <strong>Eligibility:</strong> {loan.eligibility}
              </p>
              <Link
                href={loan.link}
                target="_blank"
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#0070f3',
                  color: '#fff',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                }}
              >
                View Details → 
              </Link>
            </div>
          ))}
        </div>

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

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          {loanCategories.map((category, idx) => (
            <Link
              key={idx}
              href={`/loan/${category.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                display: 'inline-block',
                margin: '0.4rem 0.8rem',
                padding: '0.5rem 1rem',
                border: '1px solid #ccc',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                color: '#333',
              }}
            >
              {category}
            </Link>
          ))}
        </div>
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
