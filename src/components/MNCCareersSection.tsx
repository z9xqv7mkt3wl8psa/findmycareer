'use client';

import Link from 'next/link';

const MNCCareersSection = () => {
  const companies = [
    { title: 'Google Careers', path: '/mnc/google' },
    { title: 'Microsoft Careers', path: '/mnc/microsoft' },
    { title: 'Amazon Jobs', path: '/mnc/amazon' },
    { title: 'Apple Jobs', path: '/mnc/apple' },
    { title: 'Tesla Careers', path: '/mnc/tesla' },
    { title: 'IBM Jobs', path: '/mnc/ibm' },
  ];

  return (
    <section
      style={{
        padding: '5rem 2rem',
        background: '#f0f8ff',
        borderRadius: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '3rem',
        minHeight: '600px',
        maxWidth: '1300px',
        margin: '0 auto',
      }}
    >
      {/* Left Text Content */}
      <div style={{ flex: 1, minWidth: '300px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111' }}>
          Careers in <span style={{ color: '#7e22ce' }}>Top MNCs</span>
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#555', margin: '1.5rem 0' }}>
          Explore exciting job opportunities in some of the top multinational companies across the world. Discover roles that inspire you and launch your global career.
        </p>
        <a
          href="/mnc"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#7e22ce',
            color: '#fff',
            fontWeight: '600',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            textDecoration: 'none',
            transition: 'background 0.3s',
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLAnchorElement;
            target.style.backgroundColor = '#5b1aa3';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLAnchorElement;
            target.style.backgroundColor = '#7e22ce';
          }}
        >
          Visit MNC Careers →
        </a>
      </div>

      {/* Right Image with CTA */}
      <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
        <img
          src="/carrerimg.jpg" // Make sure this image exists in /public
          alt="Multinational Companies Jobs"
          style={{
            width: '100%',
            height: '300px', // 🔼 Increased height
            objectFit: 'cover', // Ensures it fills the height nicely without distortion
            borderRadius: '1.25rem',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
          }}
        />

        
      </div>

      {/* Company Links Grid */}
      <div
        style={{
          width: '100%',
          marginTop: '3rem',
        }}
      >
        <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#007bff' }}>
          Featured MNC Job Portals
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {companies.map((job, index) => (
            <Link key={index} href={job.path}>
              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  fontWeight: '500',
                  textAlign: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLDivElement;
                  target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLDivElement;
                  target.style.transform = 'scale(1)';
                }}
              >
                {job.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MNCCareersSection;
