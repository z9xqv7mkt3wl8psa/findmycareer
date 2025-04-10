'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

export default function CareerGuidancePage() {
  return (
    <>
      <Navbar />
      <div
        style={{
          padding: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#1a365d',
          }}
        >
          🛤️ Career Guidance Resources
        </h1>

        <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#4a5568' }}>
          Explore various resources and programs designed to assist students in making informed career choices. From mentorship opportunities to assessment tools, these resources aim to guide you towards a fulfilling career path.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Career Guidance Cards */}
          {[
            {
              title: 'Mentorship Programs',
              desc: 'Connect with experienced professionals who can provide guidance and insights into your desired career field.',
              link: '/mentorship-programs',
            },
            {
              title: 'Online Assessment Tools',
              desc: 'Utilize online assessments to understand your strengths, interests, and suitable career options.',
              link: '/assessment-tools',
            },
            {
              title: 'Career Counseling Services',
              desc: 'Seek personalized advice from career counselors to navigate your career planning process effectively.',
              link: '/career-counseling',
            },
            {
              title: 'Internship Opportunities',
              desc: 'Gain practical experience and enhance your skills through various internship programs.',
              link: '/internship-opportunities',
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              style={{
                textDecoration: 'none',
                backgroundColor: '#edf2f7',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.2s',
                color: '#1a202c',
              }}
            >
              <h3
                style={{
                  marginBottom: '0.5rem',
                  fontSize: '1.2rem',
                  color: '#2b6cb0',
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#4a5568' }}>
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
