'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1a365d',
      color: '#fff',
      padding: '3rem 2rem',
      marginTop: '3rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        textAlign: 'left'
      }}>
        {/* Quick Links */}
        <div>
          <h3 style={headingStyle}>Quick Links</h3>
          <ul style={listStyle}>
            {['Home', 'Scholarships', 'Courses', 'Education Loans', 'Competitions', 'About Us'].map((label, i) => (
              <li key={i} style={itemStyle}>
                <Link href="/" style={linkStyle}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 style={headingStyle}>Resources</h3>
          <ul style={listStyle}>
            {['Blog', 'FAQs', 'Testimonials', 'Success Stories', 'Application Tips'].map((label, i) => (
              <li key={i} style={itemStyle}>
                <Link href="/" style={linkStyle}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 style={headingStyle}>Legal</h3>
          <ul style={listStyle}>
            {['Privacy Policy', 'Terms & Conditions', 'Disclaimer', 'Refund Policy', 'Sitemap'].map((label, i) => (
              <li key={i} style={itemStyle}>
                <Link href="/" style={linkStyle}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 style={headingStyle}>Contact Us</h3>
          <ul style={listStyle}>
            <li style={itemStyle}>prasunetcompany@gmail.com</li>
            <li style={itemStyle}>www.prasunet.com</li>
            <li style={itemStyle}>Prasunet Pvt. Ltd. Co.</li>
          </ul>

          <h3 style={{ ...headingStyle, margin: '2rem 0 1.5rem' }}>Follow Us</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { name: 'Facebook', color: '#4267B2' },
              { name: 'Twitter', color: '#1DA1F2' },
              { name: 'Instagram', color: '#E1306C' },
              { name: 'LinkedIn', color: '#0077B5' },
              { name: 'YouTube', color: '#FF0000' }
            ].map((social, i) => (
              <Link
                key={i}
                href="#"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  backgroundColor: social.color,
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  transition: 'transform 0.2s'
                }}
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        marginTop: '3rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid #4299e1',
        textAlign: 'center',
        fontSize: '0.9rem',
        color: '#a0aec0'
      }}>
        <p>
          © {new Date().getFullYear()} Student Grow | Prasunet Pvt. Ltd. Co. | All rights reserved.
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          Empowering students worldwide to achieve their educational dreams
        </p>
      </div>
    </footer>
  );
}

const headingStyle = {
  marginBottom: '1.5rem',
  fontSize: '1.2rem',
  borderBottom: '2px solid #4299e1',
  paddingBottom: '0.5rem'
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0
};

const itemStyle = {
  margin: '0.8rem 0'
};

const linkStyle = {
  color: '#ebf8ff',
  textDecoration: 'none',
  transition: 'color 0.2s'
};
