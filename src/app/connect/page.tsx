'use client';
import Layout from '@/components/Layout';

export default function ConnectPage() {
  return (
    <Layout>
      <section style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Talk to a Mentor 🤝
        </h1>
        <p style={{ marginBottom: '2rem' }}>
          We’ve guided students from confusion to clarity — and you’re next. Choose how you'd like to connect with us.
        </p>

        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem' }}>
          <li style={linkBox}>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
              📱 Talk on WhatsApp
            </a>
          </li>
          <li style={linkBox}>
            <a href="mailto:support@prasunet.com">📧 Email a Mentor</a>
          </li>
          <li style={linkBox}>
            <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer">
              📅 Book a 1:1 Call
            </a>
          </li>
          <li style={linkBox}>
            <a href="https://discord.gg/yourdiscordlink" target="_blank" rel="noopener noreferrer">
              👥 Join our Discord Community
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

const linkBox: React.CSSProperties = {
  marginBottom: '1rem',
  backgroundColor: '#f1f1f1',
  padding: '1rem',
  borderRadius: '0.6rem',
  transition: '0.3s',
  textAlign: 'center',
};

