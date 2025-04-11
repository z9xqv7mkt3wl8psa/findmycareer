import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

const CollegeBoardFeeWaiverPage = () => {
  return (
    <div>
      <Navbar />

      {/* Banner */}
      <section style={{ width: '100%', marginBottom: '0' }}>
        <img
          src="/featurescholarshipcollegeboard.jpg"
          alt="College Board 90% Fee Waiver Program"
          style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
        />
      </section>

      {/* Tabs Section */}
      <div style={{ backgroundColor: '#f3f4f6', padding: '1rem 0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {[
          { label: 'About Program', color: '#f97316', href: '#about-program' },
          { label: 'Eligibility', color: '#2563eb', href: '#eligibility' },
          { label: "FAQ's", color: '#1e40af', href: '#faqs' },
          { label: 'Contact Details', color: '#1e3a8a', href: '#contact' },
          { label: 'Apply Now', color: '#1d4ed8', href: 'https://www.buddy4study.com/page/college-board-90-percent-fee-waiver-program' },
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

      {/* Main Content */}
      <section style={{ padding: '3rem 2rem', backgroundColor: '#fff' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#003366', marginBottom: '2rem' }}>
          College Board 90% Fee Waiver Program
        </h1>

        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
          {/* About the Program */}
          <h2 id="about-program" style={{ color: '#003366', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            About <span style={{ color: '#f59e0b' }}>The Program</span>
          </h2>
          <p>
            The <strong>College Board 90% Fee Waiver Program</strong> offers eligible Indian students up to 90% discount on SAT registration fees. This initiative is designed to make standardized testing more affordable and accessible for deserving students aspiring for higher education globally.
          </p>
          <p>
            The program also offers opportunities for full-tuition scholarships at top Indian universities through the India Global Alliance.
          </p>

          {/* Eligibility */}
          <h2 id="eligibility" style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '0.5rem' }}>Eligibility</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Applicants must be residents of India.</li>
            <li>Must be in Class 11 or 12 at the time of applying.</li>
            <li>Annual family income should be below ₹8,00,000.</li>
            <li>Should plan to pursue undergraduate studies in India or abroad.</li>
          </ul>

          {/* Benefits */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem' }}>Benefits</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Up to 90% fee waiver for SAT registration.</li>
            <li>Full-tuition scholarships at participating Indian universities via India Global Alliance.</li>
            <li>Access to international education opportunities with reduced cost barriers.</li>
          </ul>

          {/* Documents Required */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem' }}>Documents Required</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Income certificate or affidavit</li>
            <li>Identity proof (Aadhaar card, school ID, etc.)</li>
            <li>Latest mark sheets</li>
          </ul>

          {/* Application Steps */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem' }}>How to Apply?</h2>
          <ol style={{ paddingLeft: '1.5rem' }}>
            <li>Visit the official program page on Buddy4Study.</li>
            <li>Click on "Apply Now".</li>
            <li>Register on the platform and complete the application form.</li>
            <li>Upload the required documents.</li>
            <li>Submit your application before the deadline.</li>
          </ol>

          {/* FAQs */}
          <h2 id="faqs" style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem' }}>FAQs</h2>
          <p><strong>Q: Is this program applicable only for Indian universities?</strong></p>
          <p>A: No, this program helps students pursuing UG education in India and abroad. Fee waivers are specifically for SAT registration.</p>
          <p><strong>Q: Can students in Class 10 apply?</strong></p>
          <p>A: No, only Class 11 and 12 students are eligible.</p>

          {/* Contact Section */}
          <h2 id="contact" style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem' }}>Contact Us</h2>
          <p>
            <strong>Email:</strong> <a href="mailto:collegeboard@buddy4study.com">collegeboard@buddy4study.com</a><br />
            <strong>Phone:</strong> +91-11-430-92248 (Mon–Fri, 10 AM – 6 PM IST)
          </p>

          {/* Disclaimer */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem' }}>Disclaimer</h2>
          <p>
            <strong>Source:</strong> All details provided here are based on official information from Buddy4Study.<br />
            <strong>Note:</strong> This portal is not affiliated with College Board or Buddy4Study.
          </p>

          {/* Apply Now Button */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href="https://www.buddy4study.com/page/college-board-90-percent-fee-waiver-program"
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

export default CollegeBoardFeeWaiverPage;
