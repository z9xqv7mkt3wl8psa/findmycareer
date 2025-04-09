import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [submenuVisible, setSubmenuVisible] = useState<string | null>(null);

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
        'Top Courses for Engineering',
        'Top Courses for Bachelors',
        'Top Courses for Masters',
      ].map(title => ({
        label: title,
        path: `/courses/${title.toLowerCase().replace(/\s+/g, '-')}`
      }))
    },
    
    {
      label: 'Competition',
      path: '/competition',
      subItems: [
        'Hackathon',
        'Quizes',
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
    
    { label: 'Guide Me', path: '/' },
  ];

  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.logo}>
        Student Grow
      </Link>

      <ul style={styles.menu}>
        {navItems.map(({ label, path, subItems }) => (
          <li
            key={path}
            style={{ position: 'relative' }}
            onMouseEnter={() => setSubmenuVisible(path)}
            onMouseLeave={() => setSubmenuVisible(null)}
          >
            <Link
              href={path}
              style={{
                ...styles.link,
                color: hovered === path ? '#0070f3' : '#34495e'
              }}
              onMouseEnter={() => setHovered(path)}
              onMouseLeave={() => setHovered(null)}
            >
              {label}
            </Link>

            {subItems && submenuVisible === path && (
              <ul style={styles.submenu}>
                {subItems.map((sub) => (
                  <li key={sub.path}>
                    <Link href={sub.path} style={styles.submenuItem}>
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
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
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#2c3e50',
    textDecoration: 'none'
  },
  menu: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0
  },
  link: {
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.3s'
  },
  submenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '0.4rem',
    padding: '0.5rem 0',
    zIndex: 1001,
    minWidth: '240px'
  },
  submenuItem: {
    display: 'block',
    padding: '0.5rem 1rem',
    color: '#333',
    textDecoration: 'none',
    whiteSpace: 'nowrap'
  }
};
