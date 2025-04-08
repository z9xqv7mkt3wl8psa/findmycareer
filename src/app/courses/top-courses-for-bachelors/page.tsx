'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const extracurricularCourses = [
  {
    title: 'Data Science Specialization',
    description: 'Learn data science with Python and R. Master statistical analysis, machine learning, and data visualization.',
    level: 'Beginner - Advanced',
    subject: 'Data Science',
    mode: 'Online',
    duration: '3-6 months',
    fee: '₹15,000 - ₹40,000',
    link: 'https://www.coursera.org/specializations/jhu-data-science',
  },
  {
    title: 'Web Development Bootcamp',
    description: 'Complete web development course including HTML, CSS, JavaScript, Node.js, and more, to help you become a full-stack developer.',
    level: 'Beginner - Intermediate',
    subject: 'Web Development',
    mode: 'Online',
    duration: '3 months',
    fee: '₹10,000 - ₹30,000',
    link: 'https://www.udemy.com/course/the-web-developer-bootcamp/',
  },
  {
    title: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
    description: 'Learn machine learning with real-world projects in Python and R. From linear regression to deep learning.',
    level: 'Intermediate - Advanced',
    subject: 'Machine Learning',
    mode: 'Online',
    duration: '4-6 months',
    fee: '₹12,000 - ₹35,000',
    link: 'https://www.udemy.com/course/machinelearning/',
  },
  {
    title: 'Graphic Design Masterclass',
    description: 'Learn graphic design from the basics to advanced techniques using tools like Photoshop, Illustrator, and InDesign.',
    level: 'Beginner - Intermediate',
    subject: 'Design',
    mode: 'Online',
    duration: '2-3 months',
    fee: '₹10,000 - ₹25,000',
    link: 'https://www.udemy.com/course/graphic-design-masterclass-everything-you-need-to-know/',
  },
  {
    title: 'Graphic Design Masterclass',
    description: 'Learn graphic design from the basics to advanced techniques using tools like Photoshop, Illustrator, and InDesign.',
    level: 'Beginner - Intermediate',
    subject: 'Design',
    mode: 'Online',
    duration: '2-3 months',
    fee: '₹10,000 - ₹25,000',
    link: 'https://www.udemy.com/course/graphic-design-masterclass-everything-you-need-to-know/',
  },
  {
    title: 'Digital Marketing Specialization',
    description: 'Master digital marketing through this specialization, including SEO, social media marketing, and content marketing.',
    level: 'Beginner - Advanced',
    subject: 'Marketing',
    mode: 'Online',
    duration: '3-6 months',
    fee: '₹18,000 - ₹50,000',
    link: 'https://www.coursera.org/specializations/digital-marketing',
  },
  {
    title: 'Graphic Design Masterclass',
    description: 'Learn graphic design from the basics to advanced techniques using tools like Photoshop, Illustrator, and InDesign.',
    level: 'Beginner - Intermediate',
    subject: 'Design',
    mode: 'Online',
    duration: '2-3 months',
    fee: '₹10,000 - ₹25,000',
    link: 'https://www.udemy.com/course/graphic-design-masterclass-everything-you-need-to-know/',
  },
  {
    title: 'AI for Everyone',
    description: 'An introduction to artificial intelligence, its applications, and its impact on the world.',
    level: 'Beginner',
    subject: 'Artificial Intelligence',
    mode: 'Online',
    duration: '1 month',
    fee: 'Free - ₹5,000',
    link: 'https://www.coursera.org/learn/ai-for-everyone',
  },
];

export default function ExtracurricularCourses() {
  const [visibleCount, setVisibleCount] = useState(6); // Initial courses shown (5)
  const [levelFilter, setLevelFilter] = useState(''); // Level filter
  const [subjectFilter, setSubjectFilter] = useState(''); // Subject filter
  const [modeFilter, setModeFilter] = useState(''); // Mode filter
  const [durationFilter, setDurationFilter] = useState(''); // Duration filter
  const [feeFilter, setFeeFilter] = useState(''); // Fee filter
  const [searchTerm, setSearchTerm] = useState(''); // Search filter

  const [filteredCourses, setFilteredCourses] = useState(extracurricularCourses);

  // Filter function
  const filterCourses = () => {
    let filtered = [...extracurricularCourses];

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

  const shouldShowLoadMore = extracurricularCourses.length > visibleCount;

  return (
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold', color: '#222' }}>
          Skill Enhancement Courses
        </h1>

        <p style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#555', fontSize: '1.1rem' }}>
          Explore a wide range of skill-building courses to enhance your career prospects and personal development.
        </p>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <select style={selectStyle} onChange={(e) => setLevelFilter(e.target.value)} value={levelFilter}>
            <option value="">Select Level of Study</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <select style={selectStyle} onChange={(e) => setSubjectFilter(e.target.value)} value={subjectFilter}>
            <option value="">Select Subject Area</option>
            <option value="Data Science">Data Science</option>
            <option value="Web Development">Web Development</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
            <option value="AI">Artificial Intelligence</option>
          </select>

          <select style={selectStyle} onChange={(e) => setModeFilter(e.target.value)} value={modeFilter}>
            <option value="">Select Mode of Study</option>
            <option value="Online">Online</option>
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
