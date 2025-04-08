'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const bachelorsInternships = [
  {
    title: 'Google Summer of Code (GSoC)',
    description: 'A global program sponsored by Google that offers stipends to university students for working on open-source projects during the summer.',
    stipend: 'Stipend based on the organization',
    type: 'Remote',
    lastDate: 'May 1, 2025',
    link: 'https://summerofcode.withgoogle.com/',
  },
  {
    title: 'Apple Engineering Internship for Undergraduates',
    description: 'Join Apple’s engineering team and work on innovative hardware and software projects in a collaborative environment.',
    stipend: 'Competitive stipend based on location',
    type: 'Onsite',
    lastDate: 'June 30, 2025',
    link: 'https://www.apple.com/careers/us/students/',
  },
  {
    title: 'Microsoft Software Engineering Internship',
    description: 'Work with Microsoft’s engineering team on impactful software development projects across a wide range of technologies.',
    stipend: 'Competitive stipend, varies by location',
    type: 'Onsite',
    lastDate: 'May 15, 2025',
    link: 'https://careers.microsoft.com/us/en/student-internship-program',
  },
  {
    title: 'Facebook Engineering Internship for Undergraduates',
    description: 'Gain hands-on experience in software engineering at one of the world’s leading tech companies.',
    stipend: 'Competitive stipend based on location',
    type: 'Remote',
    lastDate: 'June 15, 2025',
    link: 'https://www.facebook.com/careers/students/engineering-internship/',
  },
  {
    title: 'Amazon Summer Internship for Undergraduates',
    description: 'Join Amazon’s Summer Internship program to work on cutting-edge technology in areas like software development, machine learning, and cloud computing.',
    stipend: 'Competitive stipend (varies by location)',
    type: 'Onsite',
    lastDate: 'April 30, 2025',
    link: 'https://www.amazon.jobs/en/jobs/123456/amazon-summer-internship',
  },
  {
    title: 'NVIDIA Internship for Bachelor’s Students',
    description: 'Work with NVIDIA’s teams to build the next generation of AI, gaming, and high-performance computing technologies.',
    stipend: 'Competitive stipend based on location and experience',
    type: 'Onsite',
    lastDate: 'May 20, 2025',
    link: 'https://www.nvidia.com/en-us/about-nvidia/careers/internships/',
  },
  {
    title: 'Intel Summer Internship for Undergraduates',
    description: 'Join Intel’s internship program and work on projects that impact the future of technology, including AI, semiconductors, and hardware engineering.',
    stipend: 'Competitive stipend based on location',
    type: 'Onsite',
    lastDate: 'May 10, 2025',
    link: 'https://www.intel.com/content/www/us/en/jobs/jobs-at-intel.html',
  },
  {
    title: 'Qualcomm Internship for Bachelor’s Students',
    description: 'Gain hands-on experience in wireless technology, software engineering, and hardware design with Qualcomm’s innovative teams.',
    stipend: 'Competitive stipend based on location and experience',
    type: 'Remote',
    lastDate: 'June 25, 2025',
    link: 'https://www.qualcomm.com/company/careers',
  },
];

export default function BachelorsInternships() {
  const [visibleCount, setVisibleCount] = useState(6); // Initial internships shown (5)
  const [filterType, setFilterType] = useState(''); // Remote or Onsite filter
  const [filterStipendRange, setFilterStipendRange] = useState(''); // Stipend range filter
  const [filteredInternships, setFilteredInternships] = useState(bachelorsInternships);

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
    let filtered = [...bachelorsInternships];

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

  const shouldShowLoadMore = bachelorsInternships.length > visibleCount;

  return (
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold', color: '#222' }}>
          Bachelor's Internships for Students
        </h1>

        <p style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#555', fontSize: '1.1rem' }}>
          Discover exciting internships for Bachelor's students from top tech companies. Gain real-world experience and kickstart your career!
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
