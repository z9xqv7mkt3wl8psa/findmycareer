'use client';

import Link from 'next/link';

const ScholarshipCategories = () => {
  const categories = [
    { label: 'For Girls', path: '/categories/for-girls' },
    { label: 'Sports Talent', path: '/categories/sports-talent' },
    { label: 'College Level', path: '/categories/college-level' },
    { label: 'SC/ST/OBC/DNT', path: '/categories/reserved' },
    { label: 'International', path: '/categories/international' },
    { label: 'Talent Based', path: '/categories/talent-based' },
    { label: 'Minorities', path: '/categories/minorities' },
    { label: 'Merit Based', path: '/categories/merit-based' },
    { label: 'School Level', path: '/categories/school-level' },
  ];

  return (
    <section
      style={{
        backgroundColor: '#eafff2',
        padding: '4rem 2rem',
        borderRadius: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1300px',
        margin: '0 auto',
        gap: '2rem',
      }}
    >
      {/* Left Image */}
      <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
        <img
          src="/scholarshipgirl1.jpg" // Use your uploaded image in /public
          alt="Scholarship Opportunities"
          style={{
            width: '100%',
            maxWidth: '400px',
            borderRadius: '1rem',
            boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
            transform: 'rotate(-2deg)',
          }}
        />
      </div>

      {/* Right Text + Grid */}
      <div style={{ flex: 2, minWidth: '300px' }}>
        <h2 style={{ fontSize: '2rem', color: '#003366' }}>
          Popular Scholarship <span style={{ color: '#00b386' }}>Categories</span>
        </h2>
        <p style={{ margin: '1rem 0', fontSize: '1.1rem', color: '#444' }}>
          Explore scholarships based on your background, talents, and academic level. Find the right opportunity for you!
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
            marginTop: '1.5rem',
          }}
        >
          {categories.map((category, index) => (
            <Link key={index} href={category.path} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  textAlign: 'center',
                  fontWeight: 500,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {category.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipCategories;
