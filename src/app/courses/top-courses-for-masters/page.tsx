'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const mastersCourses = [
  {
    title: 'Master of Computer Science',
    description: 'Advanced degree focusing on computer science, algorithms, software engineering, and artificial intelligence.',
    level: 'Postgraduate',
    subject: 'Computer Science',
    mode: 'Online',
    duration: '1-2 years',
    fee: '₹1,00,000 - ₹5,00,000',
    link: 'https://www.coursera.org/degrees/master-of-computer-science-illinois',
  },
  {
    title: 'Master of Business Administration (MBA)',
    description: 'Prepare for leadership roles in business with a focus on strategy, management, and entrepreneurship.',
    level: 'Postgraduate',
    subject: 'Business & Management',
    mode: 'Hybrid',
    duration: '1-2 years',
    fee: '₹5,00,000 - ₹15,00,000',
    link: 'https://www.edx.org/mba',
  },
  {
    title: 'Master of Data Science',
    description: 'Deep dive into data analysis, machine learning, AI, and big data. A perfect course for aspiring data scientists.',
    level: 'Postgraduate',
    subject: 'Data Science & AI',
    mode: 'Online',
    duration: '1-2 years',
    fee: '₹2,00,000 - ₹8,00,000',
    link: 'https://www.coursera.org/degrees/master-of-data-science-ucsd',
  },
  {
    title: 'Master of Public Health (MPH)',
    description: 'Study advanced public health issues, epidemiology, and health policy to address global health challenges.',
    level: 'Postgraduate',
    subject: 'Health & Medicine',
    mode: 'Online',
    duration: '1-2 years',
    fee: '₹1,50,000 - ₹6,00,000',
    link: 'https://www.edx.org/master-of-public-health',
  },
  {
    title: 'Master of Engineering in Artificial Intelligence',
    description: 'A specialized engineering program that focuses on AI and machine learning with practical applications in engineering.',
    level: 'Postgraduate',
    subject: 'Engineering & AI',
    mode: 'On-Campus',
    duration: '2 years',
    fee: '₹3,00,000 - ₹10,00,000',
    link: 'https://www.udacity.com/course/master-of-engineering-in-artificial-intelligence--nd023',
  },
  {
    title: 'Master of Engineering in Artificial Intelligence',
    description: 'A specialized engineering program that focuses on AI and machine learning with practical applications in engineering.',
    level: 'Postgraduate',
    subject: 'Engineering & AI',
    mode: 'On-Campus',
    duration: '2 years',
    fee: '₹3,00,000 - ₹10,00,000',
    link: 'https://www.udacity.com/course/master-of-engineering-in-artificial-intelligence--nd023',
  },
  {
    title: 'Master of Fine Arts (MFA)',
    description: 'A program for individuals seeking a career in the arts, focusing on creativity, design, and cultural leadership.',
    level: 'Postgraduate',
    subject: 'Arts & Humanities',
    mode: 'On-Campus',
    duration: '2-3 years',
    fee: '₹2,00,000 - ₹6,00,000',
    link: 'https://www.coursera.org/degrees/master-of-fine-arts-university',
  },
];

export default function MastersCourses() {
  const [visibleCount, setVisibleCount] = useState(6); // Initial courses shown (5)
  const [levelFilter, setLevelFilter] = useState(''); // Level filter
  const [subjectFilter, setSubjectFilter] = useState(''); // Subject filter
  const [modeFilter, setModeFilter] = useState(''); // Mode filter
  const [durationFilter, setDurationFilter] = useState(''); // Duration filter
  const [feeFilter, setFeeFilter] = useState(''); // Fee filter
  const [searchTerm, setSearchTerm] = useState(''); // Search filter

  const [filteredCourses, setFilteredCourses] = useState(mastersCourses);

  // Filter function
  const filterCourses = () => {
    let filtered = [...mastersCourses];

    // Filter by level
    if (levelFilter) {
      filtered = filtered.filter(course => course.level === levelFilter);
    }

    // Filter by subject
    if (subjectFilter) {
      filtered = filtered.filter(course => course.subject === subjectFilter);
    }

    // Filter by mode of study
    if (modeFilter) {
      filtered = filtered.filter(course => course.mode === modeFilter);
    }

    // Filter by duration
    if (durationFilter) {
      filtered = filtered.filter(course => course.duration === durationFilter);
    }

    // Filter by fee range
    if (feeFilter) {
      filtered = filtered.filter(course => course.fee === feeFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCourses(filtered);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 3); // Load 3 more courses at a time
  };

  const shouldShowLoadMore = mastersCourses.length > visibleCount;

  return (
    <> 
    <Navbar />
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold', color: '#222' }}>
          Master's Courses for Advanced Skill Development
        </h1>

        <p style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#555', fontSize: '1.1rem' }}>
          Enhance your expertise in various fields with these advanced master's level courses. Perfect for those looking to take their career to the next level.
        </p>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <select style={selectStyle} onChange={(e) => setLevelFilter(e.target.value)} value={levelFilter}>
            <option value="">Select Level of Study</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>

          <select style={selectStyle} onChange={(e) => setSubjectFilter(e.target.value)} value={subjectFilter}>
            <option value="">Select Subject Area</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Business & Management">Business & Management</option>
            <option value="Data Science & AI">Data Science & AI</option>
            <option value="Health & Medicine">Health & Medicine</option>
            <option value="Engineering & AI">Engineering & AI</option>
            <option value="Arts & Humanities">Arts & Humanities</option>
          </select>

          <select style={selectStyle} onChange={(e) => setModeFilter(e.target.value)} value={modeFilter}>
            <option value="">Select Mode of Study</option>
            <option value="Online">Online</option>
            <option value="On-Campus">On-Campus</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          <select style={selectStyle} onChange={(e) => setDurationFilter(e.target.value)} value={durationFilter}>
            <option value="">Select Duration</option>
            <option value="Short Term">Short Term (Up to 3 months)</option>
            <option value="Medium Term">Medium Term (3-6 months)</option>
            <option value="Long Term">Long Term (6+ months)</option>
          </select>

          <select style={selectStyle} onChange={(e) => setFeeFilter(e.target.value)} value={feeFilter}>
            <option value="">Select Fee Range</option>
            <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000</option>
            <option value="₹3,00,000+">₹3,00,000+</option>
          </select>

          <input
            type="text"
            placeholder="Search Courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={selectStyle}
          />
        </div>

        {/* Courses List */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {filteredCourses.slice(0, visibleCount).map((course, index) => (
            <div key={index} style={cardStyle}>
              <h3 style={cardTitle}>{course.title}</h3>
              <p style={cardDescription}>{course.description}</p>
              <p style={cardDetail}><strong>Level:</strong> {course.level}</p>
              <p style={cardDetail}><strong>Subject:</strong> {course.subject}</p>
              <p style={cardDetail}><strong>Mode:</strong> {course.mode}</p>
              <p style={cardDetail}><strong>Duration:</strong> {course.duration}</p>
              <p style={cardDetail}><strong>Fee:</strong> {course.fee}</p>
              <Link href={course.link} target="_blank" style={linkStyle}>
                View Details → 
              </Link>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {shouldShowLoadMore && (
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <div
              onClick={() => { filterCourses(); loadMore(); }}
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
