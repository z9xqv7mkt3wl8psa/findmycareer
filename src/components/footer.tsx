'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: '#fff',
      padding: '3rem 2rem',
      textAlign: 'center'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '3rem',
        marginBottom: '2rem'
      }}>
        {/* Quick Links */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Quick Links</h3>
          {['Home', 'Faq', 'About Us', 'Business', 'Testimonials'].map((label, i) => (
            <p key={i} style={{ margin: '0.3rem 0' }}>
              <Link href="/" style={{ color: '#ccc', textDecoration: 'none' }}>{label}</Link>
            </p>
          ))}
        </div>

        {/* Other Links */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Other Links</h3>
          {['Privacy Policy', 'Sitemap', 'Disclaimer', 'Terms & Condition', 'Refund & Cancellation Policy'].map((label, i) => (
            <p key={i} style={{ margin: '0.3rem 0' }}>
              <Link href="/" style={{ color: '#ccc', textDecoration: 'none' }}>{label}</Link>
            </p>
          ))}
        </div>

        {/* Contact Info */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Contact Us</h3>
          <p style={{ margin: '0.3rem 0', color: '#ccc' }}>
            support@theglobalscholarship.org
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Follow Us on</h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {/* Replace '#' with real social links */}
            <Link href="#"><span style={{ color: '#ccc' }}>Facebook</span></Link>
            <Link href="#"><span style={{ color: '#ccc' }}>Twitter</span></Link>
            <Link href="#"><span style={{ color: '#ccc' }}>Instagram</span></Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <p style={{ fontSize: '0.85rem', color: '#aaa' }}>
        © {new Date().getFullYear()} Prasunet Pvt. Ltd. Co. | All rights reserved.
      </p>
    </footer>
  );
}

