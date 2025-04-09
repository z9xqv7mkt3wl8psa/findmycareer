'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

const mastersInternships = [
  {
    title: 'Google Cloud Internship for Masters Students',
    description: 'Join Google Cloud’s team and work on exciting projects to transform industries using cloud computing technologies.',
    stipend: 'Competitive stipend based on location and experience',
    type: 'Onsite',
    lastDate: 'June 15, 2025',
    link: 'https://cloud.google.com/blog/topics/inside-google/announcing-google-cloud-internship-programs-for-undergrad-and-masters-students',
  },
  {
    title: 'Amazon Web Services (AWS) Internship for Masters Students',
    description: 'Work on high-impact projects in the cloud computing field and contribute to building scalable solutions.',
    stipend: 'Competitive stipend (varies by location)',
    type: 'Remote',
    lastDate: 'July 5, 2025',
    link: 'https://www.amazon.jobs/en/jobs/1234567/aws-internship-master',
  },
  {
    title: 'Microsoft Data Science Internship for Masters Students',
    description: 'Work with Microsoft’s data science team to analyze complex data sets and create machine learning models for real-world applications.',
    stipend: 'Stipend based on location and work experience',
    type: 'Onsite',
    lastDate: 'May 25, 2025',
    link: 'https://careers.microsoft.com/us/en/student-internship-program',
  },
  {
    title: 'IBM Research Internship for Masters Students',
    description: 'Contribute to cutting-edge research in AI, quantum computing, and more by collaborating with IBM scientists and researchers.',
    stipend: 'Competitive stipend based on experience and location',
    type: 'Onsite',
    lastDate: 'August 10, 2025',
    link: 'https://www.ibm.com/employment/research-internships/',
  },
  {
    title: 'Facebook AI Research Internship',
    description: 'Work on innovative AI research and contribute to developing new technologies to power Facebook’s machine learning models.',
    stipend: 'Stipend based on location and experience',
    type: 'Remote',
    lastDate: 'June 30, 2025',
    link: 'https://www.facebook.com/careers/students/ai-internship/',
  },
  {
    title: 'Tesla Autonomous Driving Internship',
    description: 'Join Tesla’s team to work on research and development for autonomous driving systems.',
    stipend: 'Competitive stipend based on location',
    type: 'Onsite',
    lastDate: 'May 18, 2025',
    link: 'https://www.tesla.com/careers/internships',
  },
  {
    title: 'Intel Master’s Internship in Engineering',
    description: 'Gain hands-on experience in hardware and software engineering in one of the world’s leading tech companies.',
    stipend: 'Competitive stipend, based on location',
    type: 'Onsite',
    lastDate: 'July 15, 2025',
    link: 'https://www.intel.com/content/www/us/en/jobs/jobs-at-intel.html',
  },
  {
    title: 'Qualcomm Engineering Internship for Masters Students',
    description: 'Work with Qualcomm’s engineering teams to develop next-generation wireless technologies.',
    stipend: 'Competitive stipend based on location and experience',
    type: 'Remote',
    lastDate: 'June 20, 2025',
    link: 'https://www.qualcomm.com/company/careers',
  },
];

export default function MastersInternships() {
  const [visibleCount, setVisibleCount] = useState(6); // Initial internships shown (5)
  const [filterType, setFilterType] = useState(''); // Remote or Onsite filter
  const [filterStipendRange, setFilterStipendRange] = useState(''); // Stipend range filter
  const [filteredInternships, setFilteredInternships] = useState(mastersInternships);

  // Handle Remote/Onsite filter change
  const handleFilterTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterType(value);
    filterInternships(value, filterStipendRange);
  };

  // Handle stipend range filter change
  const handleFilterStipendChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterStipendRange(value);
    filterInternships(filterType, value);
  };

  const filterInternships = (type: string, stipend: string) => {
    let filtered = [...mastersInternships];

    // Filter by type (Remote or Onsite)
    if (type) {
      filtered = filtered.filter((internship) => internship.type === type);
    }

    // Filter by stipend range
    if (stipend) {
      filtered = filtered.filter((internship) => {
        const stipendAmount = parseInt(internship.stipend.replace(/[^\d]/g, '')) || 0;
        const [min, max] = stipend.split('-').map(Number);
        return stipendAmount >= min && stipendAmount <= max;
      });
    }

    setFilteredInternships(filtered);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3); // Load 3 more internships at a time
  };

  const shouldShowLoadMore = mastersInternships.length > visibleCount;

  return (
    <> 
    <Navbar />
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold', color: '#222' }}>
          Master's Internships for Students
        </h1>

        <p style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#555', fontSize: '1.1rem' }}>
          Explore internships tailored for master's students in top tech companies. Gain hands-on experience and shape your career.
        </p>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
          <select style={selectStyle} onChange={handleFilterTypeChange} value={filterType}>
            <option value="">Select Type (Remote/Onsite)</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>

          <select style={selectStyle} onChange={handleFilterStipendChange} value={filterStipendRange}>
            <option value="">Select Stipend Range</option>
            <option value="0-5000">0 - 5,000</option>
            <option value="5000-10000">5,000 - 10,000</option>
            <option value="10000-20000">10,000 - 20,000</option>
          </select>
        </div>

        {/* Internships List */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {filteredInternships.slice(0, visibleCount).map((internship, index) => (
            <div key={index} style={cardStyle}>
              <h3 style={cardTitle}>{internship.title}</h3>
              <p style={cardDescription}>{internship.description}</p>
              <p style={cardDetail}>
                <strong>Stipend:</strong> {internship.stipend}
              </p>
              <p style={cardDetail}>
                <strong>Type:</strong> {internship.type}
              </p>
              <p style={cardDetail}>
                <strong>Last Date:</strong> {internship.lastDate}
              </p>
              <Link href={internship.link} target="_blank" style={linkStyle}>
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
    </>
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
