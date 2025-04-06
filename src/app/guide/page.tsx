'use client';
import { useState } from 'react';
import Layout from '@/components/Layout';
import { useRouter } from 'next/navigation';

export default function GuidePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    interest: '',
    subject: '',
    strength: '',
    goal: '',
    budget: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.setItem('careerForm', JSON.stringify(form));
    }
    router.push('/guide/result');
  };
  

  return (
    <Layout>
      <section style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
        <h1>Find Your Perfect Path</h1>
        <p style={{ marginBottom: '1rem' }}>
          Answer a few questions and we'll suggest a stream, degree, and career path that fits you.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label>
            Your Interest Area:
            <select name="interest" value={form.interest} onChange={handleChange}>
              <option value="">Select</option>
              <option value="tech">Technology</option>
              <option value="bio">Biology / Medicine</option>
              <option value="commerce">Commerce & Business</option>
              <option value="design">Design / Arts</option>
              <option value="law">Law / Civics</option>
            </select>
          </label>

          <label>
            Favorite Subject in School:
            <input name="subject" value={form.subject} onChange={handleChange} />
          </label>

          <label>
            Your Strength:
            <input name="strength" value={form.strength} onChange={handleChange} />
          </label>

          <label>
            Future Goal:
            <input name="goal" value={form.goal} onChange={handleChange} />
          </label>

          <label>
            Annual Budget (approx):
            <input name="budget" value={form.budget} onChange={handleChange} placeholder="e.g. ₹1.5L" />
          </label>

          <button type="submit" style={{ padding: '0.8rem', background: '#333', color: '#fff', borderRadius: '8px' }}>
            Show Me My Path
          </button>
        </form>
      </section>
    </Layout>
  );
}
