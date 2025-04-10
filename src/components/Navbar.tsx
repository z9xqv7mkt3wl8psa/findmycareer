'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);

  const navItems = [
    {
      label: 'Scholarship',
      path: '/scholarship',
      subItems: [
        'Top Scholarship for Class 10',
        'Top Scholarship for Class 11',
        'Top Scholarship for Class 12',
        'Top Scholarship for ITI',
        'Top Scholarship for Diploma',
        'Top Scholarship for Bachelors',
        'Top Scholarship for Engineering',
        'Top Scholarship for Medical',
        'Top Scholarship for Masters',
        'Top Scholarship for Professional Course',
        'Top Scholarship for PhD',
        'Top Scholarship for Post Doctoral',
        'Top Abroad Scholarships'
      ].map(title => ({
        label: title,
        path: `/scholarship/${title.toLowerCase().replace(/\s+/g, '-')}`
      }))
    },
    {
      label: 'Internship',
      path: '/internship',
      subItems: [
        'Top Internships for Engineering',
        'Top Internships for Bachelors',
        'Top Internships for Masters',
      ].map(title => ({
        label: title,
        path: `/internship/${title.toLowerCase().replace(/\s+/g, '-')}`
      }))
    },
    {
      label: 'Educational Loan',
      path: '/loan',
      subItems: [
        'Top Educational Loan for Engineering',
        'Top Educational Loan for Bachelors',
        'Top Educational Loan for Masters',
      ].map(title => ({
        label: title,
        path: `/loan/${title.toLowerCase().replace(/\s+/g, '-')}`
      }))
    },
    {
      label: 'Courses',
      path: '/courses',
      subItems: [
        {
          label: 'Top Courses for Engineering',
          path: '/courses/top-courses-for-engineering',
          subItems: [
            {
              label: 'DSA',
              path: '/courses/top-courses-for-engineering/dsa'
            },
            {
              label: 'Core Courses',
              path: '/courses/top-courses-for-engineering/core-courses'
            }
          ]
        },
        {
          label: 'Top Courses for Bachelors',
          path: '/courses/top-courses-for-bachelors'
        },
        {
          label: 'Top Courses for Masters',
          path: '/courses/top-courses-for-masters'
        }
      ]
    },
    {
      label: 'Competition',
      path: '/competition',
      subItems: [
        'Hackathon',
        'Quizez',
      ].map(title => ({
        label: title,
        path: `/competition/${title.toLowerCase().replace(/\s+/g, '-')}`
      }))
    },
    { label: 'Careers', path: '/careers' },
    {
      label: 'Colleges',
      path: '/colleges',
      subItems: [
        'National Colleges',
        'Abroad Colleges',
      ].map(title => ({
        label: title,
        path: `/colleges/${title.toLowerCase().replace(/\s+/g, '-')}`
      }))
    },
  ];

  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.logo}>Student Grow</Link>
      <ul style={styles.menu}>
        {navItems.map(({ label, path, subItems }) => (
          <li
            key={path}
            style={styles.menuItem}
            onMouseEnter={() => setActiveMenu(path)}
            onMouseLeave={(e) => {
              const related = e.relatedTarget as HTMLElement;
              if (!e.currentTarget.contains(related)) setActiveMenu(null);
            }}
          >
            <Link href={path} style={styles.link}>{label}</Link>

            {subItems && activeMenu === path && (
              <ul style={{
                ...styles.submenu,
                left: label === 'Colleges' ? 'auto' : 0,
                right: label === 'Colleges' ? 0 : 'auto'
              }}>
                {subItems.map((sub) => (
                  <li
                    key={sub.path || sub.label}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setHoveredSubItem(sub.label)}
                    onMouseLeave={() => setHoveredSubItem(null)}
                  >
                    <Link href={sub.path} style={styles.submenuItem}>
                      {sub.label}
                    </Link>

                    {/* Show nested submenu only when hovered */}
                    {sub.subItems && hoveredSubItem === sub.label && (
                      <ul style={{ ...styles.submenu, top: 0, left: '100%' }}>
                        {sub.subItems.map((nested) => (
                          <li key={nested.path}>
                            <Link href={nested.path} style={styles.submenuItem}>
                              {nested.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Global style for hover effect */}
      <style jsx global>{`
        a:hover {
          background-color: #f5f5f5 !important;
        }
      `}</style>
    </nav>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e5e5',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#2c3e50',
    textDecoration: 'none',
  },
  menu: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0,
  },
  menuItem: {
    position: 'relative',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 500,
    color: '#34495e',
    padding: '0.5rem 0',
    display: 'block',
  },
  submenu: {
    position: 'absolute',
    top: '100%',
    backgroundColor: '#fff',
    boxShadow: '0px 8px 16px rgba(0,0,0,0.15)',
    borderRadius: '0.4rem',
    padding: '0.5rem 0',
    zIndex: 1001,
    minWidth: '240px',
    listStyle: 'none',
    border: '1px solid #e5e5e5',
  },
  submenuItem: {
    display: 'block',
    padding: '0.6rem 1rem',
    color: '#333',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease-in-out',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
