'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const courses = [
  {
    title: 'Master of Science in Computer Science - MIT',
    description: 'A comprehensive graduate program focused on advanced computer science, including AI, machine learning, and data science.',
    duration: '2 years',
    modeOfStudy: 'On-Campus',
    subjectArea: 'Computer Science',
    fee: '₹1,00,000',
    level: 'Graduate',
    link: 'https://www.eecs.mit.edu/graduate-programs/',
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
    title: 'Bachelor of Technology in Civil Engineering - IIT Delhi',
    description: 'An undergraduate program providing foundational knowledge and skills in civil engineering, with a focus on infrastructure and construction.',
    duration: '4 years',
    modeOfStudy: 'On-Campus',
    subjectArea: 'Engineering',
    fee: '₹80,000',
    level: 'Undergraduate',
    link: 'https://www.iitd.ac.in/',
  },
  {
    title: 'Data Science Specialization - Coursera',
    description: 'An online course series offered by Johns Hopkins University, covering the fundamentals of data science including R programming, statistical analysis, and machine learning.',
    duration: '10 months',
    modeOfStudy: 'Online',
    subjectArea: 'Data Science & AI',
    fee: '₹30,000',
    level: 'Certification',
    link: 'https://www.coursera.org/specializations/jhu-data-science',
  },
  {
    title: 'MBA Program - Harvard Business School',
    description: 'An elite MBA program focusing on leadership, entrepreneurship, and business strategy, with a global perspective.',
    duration: '2 years',
    modeOfStudy: 'On-Campus',
    subjectArea: 'Business & Management',
    fee: '₹15,00,000',
    level: 'Postgraduate',
    link: 'https://www.hbs.edu/mba/',
  },
  {
    title: 'Introduction to Artificial Intelligence - Stanford University',
    description: 'An introductory online course that covers the basics of AI, including algorithms, machine learning, and problem-solving.',
    duration: '3 months',
    modeOfStudy: 'Online',
    subjectArea: 'Computer Science',
    fee: 'Free',
    level: 'Certification',
    link: 'https://www.coursera.org/learn/machine-learning',
  },
  {
    title: 'Introduction to Artificial Intelligence - Stanford University',
    description: 'An introductory online course that covers the basics of AI, including algorithms, machine learning, and problem-solving.',
    duration: '3 months',
    modeOfStudy: 'Online',
    subjectArea: 'Computer Science',
    fee: 'Free',
    level: 'Certification',
    link: 'https://www.coursera.org/learn/machine-learning',
  },
  {
    title: 'Introduction to Artificial Intelligence - Stanford University',
    description: 'An introductory online course that covers the basics of AI, including algorithms, machine learning, and problem-solving.',
    duration: '3 months',
    modeOfStudy: 'Online',
    subjectArea: 'Computer Science',
    fee: 'Free',
    level: 'Certification',
    link: 'https://www.coursera.org/learn/machine-learning',
  },
  {
    title: 'Bachelor of Arts in Psychology - University of California, Berkeley',
    description: 'A flexible and comprehensive program focusing on understanding human behavior, mental processes, and clinical applications.',
    duration: '4 years',
    modeOfStudy: 'On-Campus',
    subjectArea: 'Arts & Humanities',
    fee: '₹1,20,000',
    level: 'Undergraduate',
    link: 'https://eecs.berkeley.edu/',
  },
];

const courseCategories = [
  'Top Courses for Engineering',
  'Top Courses for Bachelors',
  'Top Courses for Masters',
];

export default function CoursesHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');
  const [modeFilter, setModeFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');
  const [feeFilter, setFeeFilter] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredCourses = courses.filter((course) => {
    const matchesSearchTerm = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = !levelFilter || course.level === levelFilter;
    const matchesSubject = !subjectFilter || course.subjectArea === subjectFilter;
    const matchesMode = !modeFilter || course.modeOfStudy === modeFilter;
    const matchesDuration = !durationFilter || course.duration.includes(durationFilter);
    const matchesFee = !feeFilter || course.fee === feeFilter;

    return matchesSearchTerm && matchesLevel && matchesSubject && matchesMode && matchesDuration && matchesFee;
  });

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const shouldShowLoadMore = filteredCourses.length > visibleCount;

  return (
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem',
        }}>
          <h1 style={{ fontSize: '2.7rem', fontWeight: 'bold', color: '#1a1a1a', textAlign: 'center' }}>
            Discover Top Courses to Elevate Your Career
          </h1>
        </div>

        <p style={{
          textAlign: 'center',
          marginBottom: '2.8rem',
          color: '#555',
          fontSize: '1.1rem',
          maxWidth: '760px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          Explore top courses across various disciplines like engineering, business, computer science, and more to help you achieve your academic and career goals.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2.2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <select
            style={selectStyle}
            onChange={(e) => setLevelFilter(e.target.value)}
            value={levelFilter}
          >
            <option value="">Select Level of Study</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Certification">Certification</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>

          <select
            style={selectStyle}
            onChange={(e) => setSubjectFilter(e.target.value)}
            value={subjectFilter}
          >
            <option value="">Select Subject Area</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Data Science & AI">Data Science & AI</option>
            <option value="Business & Management">Business & Management</option>
            <option value="Health & Medicine">Health & Medicine</option>
            <option value="Arts & Humanities">Arts & Humanities</option>
          </select>

          <select
            style={selectStyle}
            onChange={(e) => setModeFilter(e.target.value)}
            value={modeFilter}
          >
            <option value="">Select Mode of Study</option>
            <option value="Online">Online</option>
            <option value="On-Campus">On-Campus</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          <select
            style={selectStyle}
            onChange={(e) => setDurationFilter(e.target.value)}
            value={durationFilter}
          >
            <option value="">Select Duration</option>
            <option value="Short Term">Short Term (Up to 3 months)</option>
            <option value="Medium Term">Medium Term (3-6 months)</option>
            <option value="Long Term">Long Term (6+ months)</option>
          </select>

          <select
            style={selectStyle}
            onChange={(e) => setFeeFilter(e.target.value)}
            value={feeFilter}
          >
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {filteredCourses.slice(0, visibleCount).map((course, index) => (
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
                {course.title}
              </h3>
              <p style={{ fontSize: '1rem', marginBottom: '1rem', lineHeight: '1.5', color: '#444' }}>
                {course.description}
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#0070f3' }}>
                <strong>Duration:</strong> {course.duration}
              </p>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#333' }}>
                <strong>Mode of Study:</strong> {course.modeOfStudy}
              </p>
              <Link
                href={course.link}
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
          {courseCategories.map((category, idx) => (
            <Link
              key={idx}
              href={`/courses/${category.toLowerCase().replace(/\s+/g, '-')}`}
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
