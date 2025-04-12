'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Types
type NavSubItem = {
  label: string;
  path: string;
  subItems?: NavSubItem[];
};

type NavItem = {
  label: string;
  path: string;
  subItems?: NavSubItem[];
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle mobile detection on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems: NavItem[] = [
    {
      label: 'Scholarship',
      path: '/scholarship',
      subItems: [
        { label: 'All Scholarships', path: '/scholarship' },
        ...[
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
      ]
    },
    {
      label: 'Internship',
      path: '/internship',
      subItems: [
        { label: 'All Internships', path: '/internship' },
        ...[
          'Top Internships for Engineering',
          'Top Internships for Bachelors',
          'Top Internships for Masters',
        ].map(title => ({
          label: title,
          path: `/internship/${title.toLowerCase().replace(/\s+/g, '-')}`
        }))
      ]
    },
    {
      label: 'Educational Loan',
      path: '/loan',
      subItems: [
        { label: 'All Loans', path: '/loan' },
        ...[
          'Top Educational Loan for Engineering',
          'Top Educational Loan for Bachelors',
          'Top Educational Loan for Masters',
        ].map(title => ({
          label: title,
          path: `/loan/${title.toLowerCase().replace(/\s+/g, '-')}`
        }))
      ]
    },
    {
      label: 'Sarkari Naukri',
      path: '/sarkari-naukri'
    },
    {
      label: 'Competition',
      path: '/competition',
      subItems: [
        { label: 'All Competitions', path: '/competition' },
        ...['Hackathon', 'Quizes'].map(title => ({
          label: title,
          path: `/competition/${title.toLowerCase()}`
        }))
      ]
    },
    {
      label: 'Colleges',
      path: '/colleges',
      subItems: [
        { label: 'All Colleges', path: '/colleges' },
        ...['National Colleges', 'Abroad Colleges'].map(title => ({
          label: title,
          path: `/colleges/${title.toLowerCase().replace(/\s+/g, '-')}`
        }))
      ]
    },
  ];

  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.logo}>Student Grow</Link>

      {/* Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="hamburger"
      >
        ☰
      </button>

      <ul style={{ ...styles.menu, display: menuOpen || !isMobile ? 'flex' : 'none' }} className="menu-list">
        {navItems.map(({ label, path, subItems }) => (
          <li
            key={path}
            style={styles.menuItem}
            onMouseEnter={() => !isMobile && setActiveMenu(path)}
            onMouseLeave={() => !isMobile && setActiveMenu(null)}
          >
            {subItems ? (
              <span
                onClick={(e) => {
                  if (isMobile) {
                    e.preventDefault();
                    setActiveMenu(activeMenu === path ? null : path);
                  } else {
                    window.location.href = path;
                  }
                }}
                style={{ ...styles.link, cursor: 'pointer' }}
              >
                {label}
              </span>
            ) : (
              <Link href={path} style={styles.link}>{label}</Link>
            )}

            {subItems && activeMenu === path && (
              <ul style={{
                ...styles.submenu,
                left: label === 'Colleges' ? 'auto' : 0,
                right: label === 'Colleges' ? 0 : 'auto'
              }}>
                {subItems.map((sub) => (
                  <li
                    key={sub.path}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => !isMobile && setHoveredSubItem(sub.label)}
                    onMouseLeave={() => !isMobile && setHoveredSubItem(null)}
                  >
                    <Link href={sub.path} style={styles.submenuItem}>{sub.label}</Link>

                    {sub.subItems?.length && hoveredSubItem === sub.label && (
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

      <style jsx global>{`
        .hamburger {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }

          .menu-list {
            flex-direction: column;
            width: 100%;
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
          }
        }

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
    alignItems: 'center'
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
