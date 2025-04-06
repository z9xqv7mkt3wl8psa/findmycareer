'use client';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';

interface FormData {
  interest: string;
  subject: string;
  strength: string;
  goal: string;
  budget: string;
}

export default function GuideResultPage() {
  const [data, setData] = useState<FormData | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('careerForm');
      if (saved) setData(JSON.parse(saved));
    }
  }, []);

  const getRecommendation = (form: FormData) => {
    if (!form) return null;

    if (form.interest === 'tech') {
      return {
        stream: 'Science',
        degree: 'B.Tech in Computer Science',
        colleges: 'IIT Hyderabad, IIIT Delhi, VIT Vellore',
        career: 'Software Developer, AI/ML Engineer, Cybersecurity Analyst',
        reason: 'Because your interest in technology and logical thinking fits the engineering stream best.'
      };
    } else if (form.interest === 'bio') {
      return {
        stream: 'Science (Biology)',
        degree: 'B.Sc in Biology / MBBS / BPT',
        colleges: 'AIIMS, BHU, CMC Vellore',
        career: 'Doctor, Biologist, Physiotherapist',
        reason: 'You show interest in life sciences and care-driven professions.'
      };
    } else if (form.interest === 'commerce') {
      return {
        stream: 'Commerce',
        degree: 'B.Com / BBA / CA',
        colleges: 'SRCC, NMIMS, Christ University',
        career: 'Chartered Accountant, Investment Banker, Business Analyst',
        reason: 'Your strength lies in numbers, finance, and business thinking.'
      };
    } else if (form.interest === 'design') {
      return {
        stream: 'Arts & Design',
        degree: 'B.Des / BA in Fine Arts',
        colleges: 'NID, Pearl Academy, Symbiosis',
        career: 'UX Designer, Animator, Creative Director',
        reason: 'Your creative mind is suited for a design-based career.'
      };
    } else if (form.interest === 'law') {
      return {
        stream: 'Humanities',
        degree: 'BA LLB / B.A. Pol Sci',
        colleges: 'NLU Delhi, NALSAR Hyderabad',
        career: 'Lawyer, Civil Servant, Political Analyst',
        reason: 'Your reasoning and communication suggest a career in public service or law.'
      };
    }

    return {
      stream: 'General',
      degree: 'B.A. / B.Sc / Any',
      colleges: 'Local or Tier-2 Colleges',
      career: 'Open to multiple fields',
      reason: 'We need more info to guide you better.'
    };
  };

  const recommendation = data ? getRecommendation(data) : null;

  return (
    <Layout>
      <section style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
        <h1>Your Ideal Career Path 🚀</h1>

        {recommendation ? (
          <div style={{ background: '#f9f9f9', borderRadius: '1rem', padding: '2rem', marginTop: '2rem' }}>
            <p><strong>📚 Stream:</strong> {recommendation.stream}</p>
            <p><strong>🎓 Suggested Degree:</strong> {recommendation.degree}</p>
            <p><strong>🏫 Top Colleges:</strong> {recommendation.colleges}</p>
            <p><strong>💼 Career Options:</strong> {recommendation.career}</p>
            <p style={{ marginTop: '1rem' }}><strong>🧠 Why this fits you:</strong><br />{recommendation.reason}</p>
          </div>
        ) : (
          <p>Loading your recommendation...</p>
        )}
      </section>
    </Layout>
  );
}
