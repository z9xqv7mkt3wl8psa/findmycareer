'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer'; // ✅ import Footer

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(to right, #0070f3, #00b4d8)',
        padding: '4rem 2rem',
        color: '#fff',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Discover Scholarships & Opportunities</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
          Empower your academic dreams with the latest scholarships, career guidance, and global programs—specially curated for students like you.
        </p>
        <Link href="/guide">
          <button style={{
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            borderRadius: '0.5rem',
            border: 'none',
            backgroundColor: '#fff',
            color: '#0070f3',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Start Exploring
          </button>
        </Link>
      </section>

      {/* Quick Links */}
      <section style={{
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Explore Resources</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          {[ 
            { href: '/careers', label: 'Careers' },
            { href: '/colleges', label: 'Colleges' },
            { href: '/scholarships', label: 'Scholarships' },
            { href: '/stories', label: 'Student Stories' },
            { href: '/connect', label: 'Mentors' },
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{
              backgroundColor: '#f1f1f1',
              padding: '1rem 2rem',
              borderRadius: '1rem',
              textDecoration: 'none',
              color: '#333',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease-in-out'
            }}>
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* About / Info */}
      <section style={{
        backgroundColor: '#f9f9f9',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Why Choose Us?</h2>
        <p style={{
          fontSize: '1.1rem',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          We’re building a bridge between students and their future. Whether it's discovering the right career path or finding scholarships that match your profile, we're here to support every step of the way.
        </p>
      </section>

      <Footer /> {/* ✅ Footer at bottom */}
    </>
  );
}
