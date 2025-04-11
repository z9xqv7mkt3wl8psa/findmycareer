import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

const SBIFAshaScholarshipPage = () => {
  return (
    <div>
      <Navbar />

      {/* Banner */}
      <section style={{ width: '100%', marginBottom: '0' }}>
        <img
          src="/featurescholarshipsbiasha.jpg"
          alt="SBIF Asha Scholarship Program for Overseas Education 2024-25"
          style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
        />
      </section>

      {/* Tabs Section */}
      <div style={{ backgroundColor: '#f3f4f6', padding: '1rem 0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {[
          { label: 'About Program', color: '#0d9488', href: '#about-program' },
          { label: 'Eligibility', color: '#2563eb', href: '#eligibility' },
          { label: 'Documents', color: '#1d4ed8', href: '#documents' },
          { label: 'How to Apply', color: '#1e40af', href: '#how-to-apply' },
          { label: "FAQ's", color: '#312e81', href: '#faqs' },
          { label: 'Contact', color: '#1e3a8a', href: '#contact' },
          { label: 'Apply Now', color: '#0f766e', href: 'https://www.sbifashascholarship.org/' },
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

      {/* Alert */}
      <div style={{ backgroundColor: 'red', color: 'white', padding: '0.5rem 1rem', textAlign: 'center', fontWeight: 'bold' }}>
        ⚠️ ALERT: BEWARE OF SCHOLARSHIP FRAUD! STAY SAFE — <a href="#" style={{ color: '#ffff00', textDecoration: 'underline' }}>READ SAFETY GUIDELINES</a>
      </div>

      {/* Content */}
      <section style={{ padding: '3rem 2rem', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
          <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#0f172a', marginBottom: '2rem' }}>
            SBIF Asha Scholarship Program for Overseas Education 2024-25
          </h1>

          {/* About */}
          <h2 id="about-program" style={{ color: '#0f172a', fontSize: '1.5rem', marginBottom: '1rem' }}>
            About <span style={{ color: '#0d9488' }}>The Program</span>
          </h2>
          <p>
            The SBIF Asha Scholarship Program for Overseas Education 2024-25 is an initiative of the SBI Foundation under its Integrated Learning Mission (ILM),
            aimed at supporting meritorious SC/ST students from low-income families. This scholarship helps students pursuing a master’s or above course
            at top-ranked international universities by providing financial assistance of up to INR 20 lakh per year.
          </p>

          <h3 style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>About SBI Foundation</h3>
          <p>
            SBI Foundation, the CSR arm of State Bank of India, works across India focusing on Education, Rural Development, Healthcare, and more.
            It operates in over 28 States and Union Territories, aiming to uplift the underprivileged and drive sustainable development.
          </p>

          {/* Eligibility */}
          <h2 id="eligibility" style={{ color: '#0f172a', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Eligibility</h2>
          <ul>
            <li>Must be an Indian national from SC/ST category.</li>
            <li>Pursuing a master's or higher degree abroad or have received an offer letter.</li>
            <li>Minimum 75% marks in the previous academic year.</li>
            <li>Annual family income not exceeding INR 6,00,000.</li>
            <li>Preference to applicants with income below INR 3,00,000.</li>
            <li>Only students enrolled in top global universities (as per QS/Times rankings) are eligible.</li>
          </ul>

          {/* Benefits */}
          <h2 style={{ color: '#0f172a', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Benefits</h2>
          <p>Up to INR 20,00,000 or 50% of course-related expenses, whichever is lower.</p>

          {/* Documents */}
          <h2 id="documents" style={{ color: '#0f172a', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Documents Required</h2>
          <ul>
            <li>Passport size photo, Aadhaar, Passport</li>
            <li>10th, 12th, Graduation, and Master's mark sheets</li>
            <li>Offer letter, IELTS/TOEFL scorecard</li>
            <li>Institute fee receipt, fee structure</li>
            <li>Income proof, bank passbook, caste certificate</li>
            <li>SOP, GRE/GMAT certificate, Visa (if applicable)</li>
            <li>Scholarship/loan documents, orphan/disability certificates (if applicable)</li>
          </ul>

          {/* How to Apply */}
          <h2 id="how-to-apply" style={{ color: '#0f172a', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>How to Apply</h2>
          <ol>
            <li>Visit <a href="https://www.sbifashascholarship.org/" target="_blank" rel="noopener noreferrer">www.sbifashascholarship.org</a>.</li>
            <li>Click ‘Apply Now’ and log in/register on Buddy4Study.</li>
            <li>Fill the form and upload required documents.</li>
            <li>Preview and submit the application.</li>
          </ol>

          {/* FAQs */}
          <h2 id="faqs" style={{ color: '#0f172a', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>FAQ's</h2>
          <p>
            Selection involves multiple stages:
            <ul>
              <li>Initial shortlisting based on academic and financial background</li>
              <li>Telephonic interviews and document verification</li>
            </ul>
          </p>

          {/* Contact */}
          <h2 id="contact" style={{ color: '#0f172a', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Contact</h2>
          <p>
            <strong>Phone:</strong> 011-430-92248 (Ext: 303)<br />
            <strong>Email:</strong> <a href="mailto:sbiashascholarship@buddy4study.com">sbiashascholarship@buddy4study.com</a><br />
            <em>Available Mon–Fri, 10 AM to 6 PM IST</em>
          </p>

          {/* Disclaimer */}
          <h2 style={{ color: '#0f172a', fontSize: '1.5rem', marginTop: '2rem' }}>Disclaimer</h2>
          <p>
            <strong>Source of Information:</strong> Buddy4Study compiles scholarship details from verified sources.<br />
            <strong>Non-affiliation:</strong> Buddy4Study is not affiliated with any government entity and uses publicly accessible information.
          </p>

          {/* Apply Button */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href="https://www.sbifashascholarship.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#0d9488',
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

export default SBIFAshaScholarshipPage;
