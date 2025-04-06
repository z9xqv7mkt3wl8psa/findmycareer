'use client';
import Layout from '@/components/Layout';
import StreamQuiz from '@/components/StreamQuiz';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Layout>
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Confused About Your Future?
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          We’ve been there. Let’s walk together through the choices, careers, colleges, and paths after 12th—so you don’t walk it alone.
        </p>
        <Link href="/guide">
          <button
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '0.4rem',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Start Your Journey
          </button>
        </Link>
      </section>

      <section>
        <h2 style={{ textAlign: 'center', margin: '2rem 0 1rem' }}>Find Your Stream</h2>
        <StreamQuiz />
      </section>

      <section style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h2>Explore More</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '1.5rem'
        }}>
          <Link href="/careers" style={linkCardStyle}>Careers</Link>
          <Link href="/colleges" style={linkCardStyle}>Colleges</Link>
          <Link href="/stories" style={linkCardStyle}>Student Stories</Link>
          <Link href="/connect" style={linkCardStyle}>Mentors</Link>
        </div>
      </section>
    </Layout>
  );
}

const linkCardStyle: React.CSSProperties = {
  backgroundColor: '#f5f5f5',
  padding: '1.2rem 2rem',
  borderRadius: '0.8rem',
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease-in-out',
  display: 'inline-block'
};
