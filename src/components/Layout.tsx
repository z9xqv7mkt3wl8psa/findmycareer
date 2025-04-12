'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <main>{children}</main>

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
            <h3 style={{ 
              marginBottom: '1.5rem', 
              fontSize: '1.2rem',
              borderBottom: '2px solid #4299e1',
              paddingBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span></span> Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: 'Home', icon: '' },
                { label: 'Scholarships', icon: '' },
                { label: 'Courses', icon: '' },
                { label: 'Education Loans', icon: '' },
                { label: 'Competitions', icon: '' },
                { label: 'About Us', icon: '' }
              ].map((item, i) => (
                <li key={i} style={{ margin: '0.8rem 0' }}>
                  <Link href="/" style={{ 
                    color: '#ebf8ff', 
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'color 0.2s'
                  }}>
                    <span>{item.icon}</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 style={{ 
              marginBottom: '1.5rem', 
              fontSize: '1.2rem',
              borderBottom: '2px solid #4299e1',
              paddingBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span></span> Resources
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: 'Blog', icon: '' },
                { label: 'FAQs', icon: '' },
                { label: 'Testimonials', icon: '' },
                { label: 'Success Stories', icon: '' },
                { label: 'Application Tips', icon: '' }
              ].map((item, i) => (
                <li key={i} style={{ margin: '0.8rem 0' }}>
                  <Link href="/" style={{ 
                    color: '#ebf8ff', 
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'color 0.2s'
                  }}>
                    <span>{item.icon}</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{ 
              marginBottom: '1.5rem', 
              fontSize: '1.2rem',
              borderBottom: '2px solid #4299e1',
              paddingBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span></span> Legal
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: 'Privacy Policy', icon: '' },
                { label: 'Terms & Conditions', icon: '' },
                { label: 'Disclaimer', icon: '' },
                { label: 'Refund Policy', icon: '' },
                { label: 'Sitemap', icon: '' }
              ].map((item, i) => (
                <li key={i} style={{ margin: '0.8rem 0' }}>
                  <Link href="/" style={{ 
                    color: '#ebf8ff', 
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'color 0.2s'
                  }}>
                    <span>{item.icon}</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 style={{ 
              marginBottom: '1.5rem', 
              fontSize: '1.2rem',
              borderBottom: '2px solid #4299e1',
              paddingBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span></span> Contact Us
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ margin: '0.8rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span></span> support@prasunet.com
              </li>
              <li style={{ margin: '0.8rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span></span> www.prasunet.com
              </li>
              <li style={{ margin: '0.8rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span></span> Prasunet Pvt. Ltd. Co.
              </li>
            </ul>

            <h3 style={{ 
              margin: '2rem 0 1.5rem', 
              fontSize: '1.2rem',
              borderBottom: '2px solid #4299e1',
              paddingBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span></span> Follow Us
            </h3>
            <div style={{ 
              display: 'flex', 
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              {[
                { name: 'Facebook', icon: '', color: '#4267B2' },
                { name: 'Twitter', icon: '', color: '#1DA1F2' },
                { name: 'Instagram', icon: '', color: '#E1306C' },
                { name: 'LinkedIn', icon: '', color: '#0077B5' },
                { name: 'YouTube', icon: '', color: '#FF0000' }
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
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'transform 0.2s'
                  }}
                >
                  <span>{social.icon}</span> {social.name}
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
            Empowering students worldwide to achieve their educational dreams 🌍✨
          </p>
        </div>
      </footer>
    </>
  );
}