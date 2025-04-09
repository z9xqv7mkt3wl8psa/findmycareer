'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const skillEnhancementCourses = [
  {
    title: 'Certified Python Programming Bootcamp',
    description: 'Learn Python from scratch with real-world applications in data science, machine learning, and web development.',
    level: 'Beginner to Advanced',
    subject: 'Programming',
    mode: 'Online',
    duration: '6 weeks',
    fee: '₹15,000',
    link: 'https://www.example.com/courses/python-programming',
  },
  {
    title: 'Machine Learning Specialization',
    description: 'Master machine learning algorithms, neural networks, and deep learning techniques in this comprehensive program.',
    level: 'Intermediate to Advanced',
    subject: 'Data Science',
    mode: 'Online',
    duration: '8 weeks',
    fee: '₹20,000',
    link: 'https://www.example.com/courses/machine-learning-specialization',
  },
  {
    title: 'Machine Learning Specialization',
    description: 'Master machine learning algorithms, neural networks, and deep learning techniques in this comprehensive program.',
    level: 'Intermediate to Advanced',
    subject: 'Data Science',
    mode: 'Online',
    duration: '8 weeks',
    fee: '₹20,000',
    link: 'https://www.example.com/courses/machine-learning-specialization',
  },
  {
    title: 'Certified Data Scientist Course',
    description: 'Learn data science concepts, tools, and techniques, and become proficient in Python, R, and SQL for data analysis.',
    level: 'Intermediate',
    subject: 'Data Science',
    mode: 'Online',
    duration: '12 weeks',
    fee: '₹25,000',
    link: 'https://www.example.com/courses/data-scientist',
  },
  {
    title: 'Complete Web Development Bootcamp',
    description: 'Master web development with hands-on experience in HTML, CSS, JavaScript, React, and Node.js.',
    level: 'Beginner to Advanced',
    subject: 'Web Development',
    mode: 'Online',
    duration: '10 weeks',
    fee: '₹18,000',
    link: 'https://www.example.com/courses/web-development',
  },
  {
    title: 'IoT and Smart Devices Development',
    description: 'Explore the world of IoT (Internet of Things) and learn how to build connected devices and systems.',
    level: 'Intermediate',
    subject: 'IoT Engineering',
    mode: 'Online',
    duration: '6 weeks',
    fee: '₹12,000',
    link: 'https://www.example.com/courses/iot-smart-devices',
  },
  {
    title: 'Certified Ethical Hacking Course',
    description: 'Learn the tools and techniques used by ethical hackers to protect networks, systems, and data from cyber threats.',
    level: 'Intermediate to Advanced',
    subject: 'Cybersecurity',
    mode: 'Online',
    duration: '8 weeks',
    fee: '₹22,000',
    link: 'https://www.example.com/courses/ethical-hacking',
  },
];

export default function SkillEnhancementCourses() {
  const [visibleCount, setVisibleCount] = useState(6); // Initial courses shown (5)
  const [levelFilter, setLevelFilter] = useState(''); // Level filter
  const [subjectFilter, setSubjectFilter] = useState(''); // Subject filter
  const [modeFilter, setModeFilter] = useState(''); // Mode filter
  const [durationFilter, setDurationFilter] = useState(''); // Duration filter
  const [feeFilter, setFeeFilter] = useState(''); // Fee filter
  const [searchTerm, setSearchTerm] = useState(''); // Search filter

  const [filteredCourses, setFilteredCourses] = useState(skillEnhancementCourses);

  // Filter function
  const filterCourses = () => {
    let filtered = [...skillEnhancementCourses];

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

  const shouldShowLoadMore = skillEnhancementCourses.length > visibleCount;

  return (
    <> 
    <Navbar />
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold', color: '#222' }}>
          Top Engineering Skill Enhancement Courses
        </h1>

        <p style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#555', fontSize: '1.1rem' }}>
          Explore top skill enhancement courses to boost your engineering expertise. Learn practical skills that make you stand out!
        </p>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <select style={selectStyle} onChange={(e) => setLevelFilter(e.target.value)} value={levelFilter}>
            <option value="">Select Level of Study</option>
            <option value="Beginner to Advanced">Beginner to Advanced</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <select style={selectStyle} onChange={(e) => setSubjectFilter(e.target.value)} value={subjectFilter}>
            <option value="">Select Subject Area</option>
            <option value="Programming">Programming</option>
            <option value="Data Science">Data Science</option>
            <option value="Web Development">Web Development</option>
            <option value="IoT Engineering">IoT Engineering</option>
            <option value="Cybersecurity">Cybersecurity</option>
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
            <option value="Free">Free</option>
            <option value="₹10,000 - ₹50,000">₹10,000 - ₹50,000</option>
            <option value="₹50,000+">₹50,000+</option>
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
