import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#f5f5f5',
      borderBottom: '1px solid #ddd'
    }}>
      <div>
        <Link href="/" style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
          FindMyCareer
        </Link>
      </div>

      <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0 }}>
        <li><Link href="/quiz" style={{ textDecoration: 'none', color: '#333' }}>Quiz</Link></li>
        <li><Link href="/careers" style={{ textDecoration: 'none', color: '#333' }}>Careers</Link></li>
        <li><Link href="/stories" style={{ textDecoration: 'none', color: '#333' }}>Stories</Link></li>
        <li><Link href="/colleges" style={{ textDecoration: 'none', color: '#333' }}>Colleges</Link></li>
        <li><a href="/guide" style={{ textDecoration: 'none', color: '#333' }}>Guide Me</a></li>
        <li><a href="/connect">Connect</a></li>

      </ul>
    </nav>
  );
}
