import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

const AlstomIndiaScholarshipPage = () => {
  return (
    <div>
      <Navbar />

      {/* Banner */}
      <section style={{ width: '100%', marginBottom: '0' }}>
        <img
          src="/featurescholarshipalstom.jpg"
          alt="Alstom India Scholarship 2024-25"
          style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
        />
      </section>

      {/* Tabs Section */}
      <div style={{ backgroundColor: '#f3f4f6', padding: '1rem 0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {[
          { label: 'About Program', color: '#f97316', href: '#about-program' },
          { label: 'Scholarships', color: '#2563eb', href: '#scholarships' },
          { label: "FAQ's", color: '#1e40af', href: '#faqs' },
          { label: 'Contact Details', color: '#1e3a8a', href: '#contact' },
          { label: 'Apply Now', color: '#1d4ed8', href: 'https://www.buddy4study.com/page/alstom-india-scholarship' },
        ].map((tab, idx) => (
          <a
            key={idx}
            href={tab.href}
            target={tab.label === 'Apply Now' ? '_blank' : '_self'}
            rel={tab.label === 'Apply Now' ? 'noopener noreferrer' : undefined}
            style={{ textDecoration: 'none' }}
          >
            <button
              style={{
                backgroundColor: tab.color,
                color: '#fff',
                padding: '0.5rem 1.2rem',
                borderRadius: '0.375rem',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {tab.label}
            </button>
          </a>
        ))}
      </div>

      {/* Alert Bar */}
      <div style={{ backgroundColor: 'red', color: 'white', padding: '0.5rem 1rem', textAlign: 'center', fontWeight: 'bold' }}>
        ⚠️ ALERT : SCHOLARSHIP FRAUD PREVENTION! PROTECT YOURSELF—<a href="#" style={{ color: '#ffff00', textDecoration: 'underline' }}>CLICK HERE</a> FOR ESSENTIAL GUIDELINES AND IMPORTANT DETAILS.
      </div>

      <section style={{ padding: '3rem 2rem', backgroundColor: '#fff' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#003366', marginBottom: '2rem' }}>
          Alstom India Scholarship 2024-25
        </h1>

        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>

          {/* About Program */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            About <span style={{ color: '#f59e0b' }}>The Program</span>
          </h2>
          <p>
            The <strong>Alstom India Scholarship</strong> is a CSR initiative by Alstom India aimed at supporting meritorious and underprivileged students across India
            pursuing diploma, ITI, or undergraduate degrees in STEM fields. This program helps them continue their education without financial barriers.
          </p>
          <p>
            The scholarship supports students from various locations including Bihar, Delhi, Jharkhand, Madhya Pradesh, Tamil Nadu, and West Bengal.
          </p>

          {/* Eligibility */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Eligibility</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Students from Bihar, Delhi, Jharkhand, Madhya Pradesh, Tamil Nadu, and West Bengal.</li>
            <li>Pursuing diploma/ITI, general graduation or professional graduation courses like B.E., B.Tech., MBBS, BDS, etc.</li>
            <li>Must have scored at least 60% marks in previous academic year.</li>
            <li>Annual family income must be ≤ ₹6,00,000.</li>
            <li>Only students in 1st/2nd/3rd year of diploma/ITI or 1st/2nd/3rd/4th year of graduation are eligible.</li>
          </ul>

          {/* Benefits */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Benefits</h2>
          <p>Selected students will receive a scholarship up to ₹75,000 based on their current level of study and actual annual academic expenses.</p>

          {/* Documents */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Documents</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Marksheet of the previous academic year</li>
            <li>Government-issued identity proof</li>
            <li>Proof of admission/bonafide certificate</li>
            <li>Fee receipt</li>
            <li>Bank account details</li>
            <li>Income certificate</li>
            <li>Passport-size photograph</li>
          </ul>

          {/* How to Apply */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>How to Apply?</h2>
          <ol style={{ paddingLeft: '1.5rem' }}>
            <li>Click on ‘Apply Now’ button.</li>
            <li>Register/Login to Buddy4Study portal.</li>
            <li>Fill application form and upload documents.</li>
            <li>Submit the application.</li>
          </ol>

          {/* Contact Details */}
          <h2 id="contact" style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Contact Details</h2>
          <p>
            <strong>For technical assistance:</strong><br />
            Phone: +91-11-430-92248 (Ext: 323) (Monday to Friday – 10:00 AM to 6 PM)<br />
            Email: <a href="mailto:alstom@buddy4study.com" style={{ color: '#2563eb', textDecoration: 'underline' }}>alstom@buddy4study.com</a>
          </p>

          {/* Disclaimer */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Disclaimer</h2>
          <p>
            <strong>Source of Information:</strong> Data provided as per details available on Buddy4Study.<br />
            <strong>Non-affiliation:</strong> This site is not officially affiliated with Alstom India. Users should visit official sources for verification.
          </p>

          {/* Apply Now Button */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href="https://www.buddy4study.com/page/alstom-india-scholarship"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#f97316',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AlstomIndiaScholarshipPage;
