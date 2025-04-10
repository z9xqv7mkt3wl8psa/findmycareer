import Link from 'next/link';
import { useState } from 'react';
import { CSSProperties } from 'react';

export default function Navbar() {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [hoveredSubmenuItem, setHoveredSubmenuItem] = useState<string | null>(null);

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

  const handleSubmenuToggle = (path: string | null) => {
    setActiveSubmenu(activeSubmenu === path ? null : path);
  };

  const handleSubmenuItemMouseEnter = (path: string) => {
    setHoveredSubmenuItem(path);
  };

  const handleSubmenuItemMouseLeave = () => {
    setHoveredSubmenuItem(null);
  };

  const dropdownButtonStyles = (isActive: boolean): CSSProperties => ({
    background: 'none',
    border: 'none',
    padding: '0.25rem 0.5rem',
    marginLeft: '0.5rem',
    cursor: 'pointer',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.2s ease-in-out',
  });

  const dropdownIconStyles = (isActive: boolean): CSSProperties => ({
    fontSize: '0.8rem',
    width: '1em',
    height: '1em',
    pointerEvents: 'none',
  });

  const submenuItemStyles = (path: string): CSSProperties => ({
    display: 'block',
    padding: '0.8rem 1.75rem',
    color: '#333',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.15s ease-in-out',
    backgroundColor: hoveredSubmenuItem === path ? '#f9f9f9' : 'transparent', // Conditional background color
  });

  return (
    <nav style={styles.nav}>
      <Link href="/home" style={styles.logo}>
        Student Grow
      </Link>

      <ul style={styles.menu}>
        {navItems.map(({ label, path, subItems }) => (
          <li
            key={path}
            style={{ position: 'relative' }}
          >
            <div style={styles.navItemWrapper}>
              <Link
                href={path}
                style={styles.link}
              >
                {label}
              </Link>
              {subItems && (
                <button
                  onClick={() => handleSubmenuToggle(path)}
                  style={dropdownButtonStyles(activeSubmenu === path)}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={dropdownIconStyles(activeSubmenu === path)}>
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 011.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>

            {subItems && activeSubmenu === path && (
              <ul style={styles.submenu}>
                {subItems.map((sub) => (
                  <li
                    key={sub.path}
                    onMouseEnter={() => handleSubmenuItemMouseEnter(sub.path)}
                    onMouseLeave={handleSubmenuItemMouseLeave}
                  >
                    <Link href={sub.path} style={submenuItemStyles(sub.path)}>
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

const styles: { [key: string]: CSSProperties } = {
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
    gap: '1.5rem',
    margin: 0,
    padding: 0
  },
  navItemWrapper: {
    display: 'flex',
    alignItems: 'center',
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
    top: 'calc(100% + 0.25rem)',
    left: 0,
    backgroundColor: '#fff',
    boxShadow: '0px 8px 16px rgba(0,0,0,0.15)',
    borderRadius: '0.4rem',
    padding: '0.75rem 0',
    zIndex: 1001,
    minWidth: '260px',
    border: '1px solid #e5e5e5',
    marginTop: '0.2rem',
  },
};