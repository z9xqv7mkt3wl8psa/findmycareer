'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

// ---------------------- Interfaces ----------------------

interface Job {
  title: string;
  description: string;
  location: string;
  lastDate: string;
  link: string;
  type: string;
}

interface Bulletin {
  title: string;
  date: string;
  link: string;
}

// ---------------------- Data ----------------------

const jobs: Job[] = [
  {
    title: 'SSC CGL 2025 - Staff Selection Commission',
    description: 'Apply for Group B and C posts in various Ministries and Departments of Government of India.',
    location: 'Pan India',
    lastDate: 'May 15, 2025',
    link: 'https://ssc.nic.in/',
    type: 'Full-Time',
  },
  {
    title: 'UPSC Civil Services 2025',
    description: 'Join Indian Administrative, Foreign, Police Services and more through UPSC CSE 2025.',
    location: 'Pan India',
    lastDate: 'April 25, 2025',
    link: 'https://www.upsc.gov.in/',
    type: 'Full-Time',
  },
  {
    title: 'UPSC Civil Services 2025',
    description: 'Join Indian Administrative, Foreign, Police Services and more through UPSC CSE 2025.',
    location: 'Pan India',
    lastDate: 'April 25, 2025',
    link: 'https://www.upsc.gov.in/',
    type: 'Full-Time',
  },
  {
    title: 'UPSC Civil Services 2025',
    description: 'Join Indian Administrative, Foreign, Police Services and more through UPSC CSE 2025.',
    location: 'Pan India',
    lastDate: 'April 25, 2025',
    link: 'https://www.upsc.gov.in/',
    type: 'Full-Time',
  },
  {
    title: 'UPSC Civil Services 2025',
    description: 'Join Indian Administrative, Foreign, Police Services and more through UPSC CSE 2025.',
    location: 'Pan India',
    lastDate: 'April 25, 2025',
    link: 'https://www.upsc.gov.in/',
    type: 'Full-Time',
  },
  {
    title: 'Railway RRB Group D Recruitment',
    description: 'Indian Railways hiring for various Group D posts. 10th Pass Eligible.',
    location: 'All Zones',
    lastDate: 'May 30, 2025',
    link: 'https://www.rrbcdg.gov.in/',
    type: 'Full-Time',
  },
  {
    title: 'IBPS Clerk 2025',
    description: 'Institute of Banking Personnel Selection hiring clerks for various nationalized banks.',
    location: 'Across India',
    lastDate: 'June 10, 2025',
    link: 'https://www.ibps.in/',
    type: 'Full-Time',
  },
];

const bulletins: Bulletin[] = [
  {
    title: 'CBSE Class 10th Board Results 2025 Declared',
    date: 'April 5, 2025',
    link: 'https://cbseresults.nic.in/',
  },
  {
    title: 'UPSC CSE Prelims 2025 Result Out',
    date: 'April 10, 2025',
    link: 'https://www.upsc.gov.in/',
  },
  {
    title: 'SSC CHSL 2024 Final Result Announced',
    date: 'March 29, 2025',
    link: 'https://ssc.nic.in/',
  },
];

// ---------------------- Page Component ----------------------

export default function SarkariNaukariHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const shouldShowLoadMore = filteredJobs.length > visibleCount;

  return (
    <>
      <Navbar />
      <Layout>
        <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>

          {/* ------------------ Notice Board ------------------ */}
          <div style={{
            background: '#fff8e1',
            padding: '2rem',
            borderRadius: '1rem',
            marginBottom: '3rem',
            border: '2px dashed #e0a800',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
            position: 'relative'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#b85c00',
              borderBottom: '2px solid #ffd54f',
              display: 'inline-block'
            }}>
              📌 Notice Board
            </h2>

            <ul style={{ listStyle: 'none', padding: 0 }}>
              {bulletins.map((notice, idx) => (
                <li key={idx} style={{
                  background: '#fff',
                  marginBottom: '1rem',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
                  borderLeft: '5px solid #ffc107',
                  transform: `rotate(${(Math.random() * 2 - 1).toFixed(2)}deg)`
                }}>
                  <Link href={notice.link} target="_blank" style={{
                    textDecoration: 'none',
                    color: '#d17b00',
                    fontWeight: 'bold',
                    fontSize: '1.05rem'
                  }}>
                    📄 {notice.title}
                  </Link>
                  <div style={{ fontSize: '0.85rem', color: '#555' }}>{notice.date}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------ Header ------------------ */}
          <h1 style={{ fontSize: '2.7rem', fontWeight: 'bold', color: '#1a1a1a', textAlign: 'center' }}>
            Latest Government Jobs & Exam Announcements
          </h1>

          <p style={{
            textAlign: 'center',
            margin: '1rem 0 2.5rem',
            color: '#555',
            fontSize: '1.1rem',
            maxWidth: '760px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Find the latest Sarkari Naukri updates, board exam results, competitive exams, and more.
          </p>

          {/* ------------------ Search ------------------ */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <input
              type="text"
              placeholder="Search Government Jobs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={selectStyle}
            />
          </div>

          {/* ------------------ Job Cards ------------------ */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            {filteredJobs.slice(0, visibleCount).map((job, index) => (
              <div key={index} style={{
                background: '#fff',
                borderRadius: '1rem',
                padding: '1.8rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                border: '1px solid #eee',
                transition: 'transform 0.3s ease',
              }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.7rem', fontWeight: '600' }}>{job.title}</h3>
                <p style={{ fontSize: '1rem', marginBottom: '1rem', color: '#444' }}>{job.description}</p>
                <p style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#0070f3' }}><strong>Location:</strong> {job.location}</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#333' }}><strong>Last Date:</strong> {job.lastDate}</p>
                <Link href={job.link} target="_blank" style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#0070f3',
                  color: '#fff',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                }}>
                  View Details →
                </Link>
              </div>
            ))}
          </div>

          {/* ------------------ Load More ------------------ */}
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
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

// ---------------------- Styles ----------------------

const selectStyle: React.CSSProperties = {
  padding: '0.6rem',
  borderRadius: '0.5rem',
  border: '1px solid #ccc',
  minWidth: '300px',
  fontSize: '1rem',
};
