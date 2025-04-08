'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const internships = [
  {
    title: 'Software Engineering Intern - Google',
    description: 'As a Software Engineering Intern at Google, you’ll work on challenging projects that impact millions of users worldwide.',
    duration: '12 weeks',
    stipend: '₹80,000/month',
    lastDate: 'May 31, 2025',
    link: 'https://careers.google.com/jobs/results/12345678-software-engineering-intern/',
    type: 'Full-Time',
    isRemote: true,
  },
  {
    title: 'Data Science Intern - Microsoft',
    description: 'Join Microsoft’s Data Science team and help solve real-world problems using data-driven insights.',
    duration: '6 months',
    stipend: '₹60,000/month',
    lastDate: 'April 30, 2025',
    link: 'https://careers.microsoft.com/us/en/job/123456789/data-science-intern',
    type: 'Full-Time',
    isRemote: false,
  },
  {
    title: 'Product Management Intern - Meta',
    description: 'Work on Meta’s flagship products and contribute to their product strategy and development.',
    duration: '10 weeks',
    stipend: '₹70,000/month',
    lastDate: 'June 15, 2025',
    link: 'https://www.metacareers.com/job/12345678/product-management-intern/',
    type: 'Full-Time',
    isRemote: true,
  },
  {
    title: 'UX Design Intern - Apple',
    description: 'Join Apple’s UX design team to help create intuitive, user-friendly designs for innovative products.',
    duration: '3 months',
    stipend: '₹50,000/month',
    lastDate: 'May 20, 2025',
    link: 'https://jobs.apple.com/us/en-us/details/12345678/ux-design-intern',
    type: 'Full-Time',
    isRemote: false,
  },
  {
    title: 'Business Development Intern - Amazon',
    description: 'Help Amazon expand its customer base by analyzing market trends and supporting the business development team.',
    duration: '3 months',
    stipend: '₹40,000/month',
    lastDate: 'May 5, 2025',
    link: 'https://www.amazon.jobs/en/jobs/12345678/business-development-intern',
    type: 'Part-Time',
    isRemote: true,
  },
  {
    title: 'Marketing Intern - Deloitte',
    description: 'Assist Deloitte’s marketing team in research, strategy development, and campaign execution.',
    duration: '4 months',
    stipend: '₹35,000/month',
    lastDate: 'June 10, 2025',
    link: 'https://www2.deloitte.com/us/en/pages/careers/jobs/marketing-internship.html',
    type: 'Part-Time',
    isRemote: true,
  },
];

const internshipCategories = [
  'Top Internships for Engineering',
  'Top Internships for Bachelors',
  'Top Internships for Masters',
];

export default function InternshipHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [durationFilter, setDurationFilter] = useState('');
  const [remoteFilter, setRemoteFilter] = useState('');
  const [visibleCount, setVisibleCount] = useState(5);

  const filteredInternships = internships.filter((internship) => {
    const matchesSearchTerm = internship.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDuration = !durationFilter || internship.duration.includes(durationFilter);
    const matchesRemote = remoteFilter === '' || (remoteFilter === 'Remote' ? internship.isRemote : !internship.isRemote);

    return matchesSearchTerm && matchesDuration && matchesRemote;
  });

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const shouldShowLoadMore = filteredInternships.length > visibleCount;

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
            Discover Top Internships for Every Field
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
          Explore exciting internship opportunities across various fields like engineering, business, design, and more.
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
            onChange={(e) => setDurationFilter(e.target.value)}
            value={durationFilter}
          >
            <option value="">Select Duration</option>
            <option value="3 months">3 months</option>
            <option value="6 months">6 months</option>
            <option value="12 weeks">12 weeks</option>
            <option value="4 months">4 months</option>
          </select>

          <select
            style={selectStyle}
            onChange={(e) => setRemoteFilter(e.target.value)}
            value={remoteFilter}
          >
            <option value="">Remote or On-site</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
          </select>

          <input
            type="text"
            placeholder="Search Internships"
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
          {filteredInternships.slice(0, visibleCount).map((internship, index) => (
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
                {internship.title}
              </h3>
              <p style={{ fontSize: '1rem', marginBottom: '1rem', lineHeight: '1.5', color: '#444' }}>
                {internship.description}
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#0070f3' }}>
                <strong>Stipend:</strong> {internship.stipend}
              </p>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#333' }}>
                <strong>Duration:</strong> {internship.duration} | <strong>Last Date:</strong> {internship.lastDate}
              </p>
              <Link
                href={internship.link}
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
          {internshipCategories.map((category, idx) => (
            <Link
              key={idx}
              href={`/internships/${category.toLowerCase().replace(/\s+/g, '-')}`}
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
