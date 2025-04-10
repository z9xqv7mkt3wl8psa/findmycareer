'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer'; // ✅ make sure this matches your actual filename

export default function SportsTalentScholarshipsPage() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a365d', marginBottom: '1rem' }}>
          🏆 Sports Talent Scholarships
        </h1>
        <p style={{ fontSize: '1rem', color: '#4a5568', marginBottom: '2rem' }}>
          Discover scholarships designed to support and encourage talented sportspersons in India. These scholarships provide financial assistance, training, and other benefits to help athletes achieve their goals.
        </p>

        {[
          {
            title: 'NHPC Sports Scholarship Scheme 2025',
            desc: 'Offered by NHPC Limited, this scholarship supports young, talented, and emerging sportspersons across 16 sports disciplines.',
            amount: 'Monthly stipend up to ₹14,000',
            link: 'https://www.buddy4study.com/scholarship/nhpc-sports-scholarship-scheme-2025',
          },
          {
            title: 'AAI Sports Scholarship Scheme in India 2023-24',
            desc: 'Initiated by the Sports Control Board, Airports Authority of India, this scholarship aims to enhance sporting standards by encouraging youth talent.',
            amount: 'Monthly stipend up to ₹16,000',
            link: 'https://www.buddy4study.com/scholarship/aai-sports-scholarship-scheme-in-india',
          },
          {
            title: 'ONGC Sports Scholarship Scheme 2023-24',
            desc: 'Provided by the Corporate Sports Division of ONGC, this scholarship offers financial assistance to young talented sportspersons with potential to excel.',
            amount: 'Monthly stipend between ₹15,000 to ₹30,000',
            link: 'https://www.buddy4study.com/scholarship/ongc-sports-scholarship-scheme',
          },
          {
            title: 'Anjum Chopra Sports Scholarship 2024',
            desc: 'Offered by PUSH Sports, this scholarship supports women cricketers aged 14 to 25 years playing for state teams.',
            amount: '₹1 lakh per annum and other benefits',
            link: 'https://www.buddy4study.com/scholarship/anjum-chopra-scholarship',
          },
          {
            title: 'Sports Global Excellence Scholarship 2025',
            desc: 'Provided by the University of Gloucestershire, this scholarship supports high-performing student-athletes pursuing UG or PG programs.',
            amount: 'Tuition fee waiver up to £7,500 (approximately ₹8,24,217)',
            link: 'https://www.buddy4study.com/scholarship/sports-global-excellence-scholarship',
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
