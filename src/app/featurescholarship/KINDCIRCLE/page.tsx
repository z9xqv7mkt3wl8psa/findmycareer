import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

const KindCircleScholarshipPage = () => {
  return (
    <div>
      <Navbar />

      {/* Banner */}
      <section style={{ width: '100%', marginBottom: '0' }}>
        <img
          src="/featurescholarshipkindcircle.png"
          alt="Kind Circle Scholarship 2025-26"
          style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
        />
      </section>

      {/* Tabs Section */}
      <div style={{ backgroundColor: '#f3f4f6', padding: '1rem 0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {[
          { label: 'About Program', color: '#f97316', href: '#about-program' },
          { label: 'Eligibility', color: '#2563eb', href: '#eligibility' },
          { label: 'Benefits', color: '#1e40af', href: '#benefits' },
          { label: 'Documents', color: '#1e3a8a', href: '#documents' },
          { label: 'Apply Now', color: '#1d4ed8', href: 'https://www.buddy4study.com/page/kind-circle-scholarship' },
        ].map((tab, idx) => (
          <a key={idx} href={tab.href} target={tab.label === 'Apply Now' ? '_blank' : '_self'} rel={tab.label === 'Apply Now' ? 'noopener noreferrer' : undefined} style={{ textDecoration: 'none' }}>
            <button style={{ backgroundColor: tab.color, color: '#fff', padding: '0.5rem 1.2rem', borderRadius: '0.375rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
              {tab.label}
            </button>
          </a>
        ))}
      </div>

      {/* Alert Bar */}
      <div style={{ backgroundColor: 'red', color: 'white', padding: '0.5rem 1rem', textAlign: 'center', fontWeight: 'bold' }}>
        ⚠️ ALERT : SCHOLARSHIP FRAUD PREVENTION! PROTECT YOURSELF—<a href="#" style={{ color: '#ffff00', textDecoration: 'underline' }}>CLICK HERE</a> FOR ESSENTIAL GUIDELINES AND IMPORTANT DETAILS.
      </div>

      {/* Content Section */}
      <section style={{ padding: '3rem 2rem', backgroundColor: '#fff' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#003366', marginBottom: '2rem' }}>
          Kind Circle Scholarship for Meritorious Students 2025-26
        </h1>

        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
          {/* About the Program */}
          <h2 id="about-program" style={{ color: '#003366', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            About <span style={{ color: '#f59e0b' }}>The Program</span>
          </h2>
          <p>
            <strong>Kind Circle Scholarship for Meritorious Students 2025-26</strong> is an initiative to support academically meritorious students from underprivileged sections of society to build a foundation for their bright future.
          </p>
          <p>
            Applications are invited from students studying in Class 1 up to those pursuing postgraduate courses who are facing financial constraints in their pursuit of continuing their education.
          </p>

          {/* Eligibility */}
          <h2 id="eligibility" style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '0.5rem' }}>Eligibility</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Students from Class 1 to postgraduate level enrolled in any Indian school or college</li>
            <li>Annual family income below INR 6 lakh</li>
            <li>At least 75% marks in the previous academic year</li>
            <li><strong>Deadline:</strong> 31-Dec-2025</li>
          </ul>

          {/* Benefits */}
          <h2 id="benefits" style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '0.5rem' }}>Benefits</h2>
          <p>
            The scholarship award varies based on the candidate's needs and will be determined after their interview. The minimum scholarship amount is INR 6,000.
          </p>

          {/* Documents */}
          <h2 id="documents" style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '0.5rem' }}>Documents</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Marksheet of last qualifying examination</li>
            <li>Family income certificate</li>
            <li>Any government ID proof</li>
            <li>School/college ID card/bonafide certificate</li>
            <li>Current year's fee receipt</li>
          </ul>

          {/* How to Apply */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '0.5rem' }}>How to Apply?</h2>
          <ol style={{ paddingLeft: '1.5rem' }}>
            <li>Click on the 'Apply Now' button.</li>
            <li>Log in or register to start your application.</li>
            <li>Fill in your details and upload the requested documents.</li>
            <li>Submit your application.</li>
          </ol>

          {/* Apply Now Button */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href="https://www.buddy4study.com/page/kind-circle-scholarship"
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

          {/* Contact Info */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Contact Us</h2>
          <p>
            <strong>Phone:</strong> +91-11-430-92248 (Ext. 370) (Monday to Friday - 10:00 AM to 06:00 PM IST)<br />
            <strong>Email:</strong> <a href="mailto:info@buddy4study.com" className="text-blue-600 underline">info@buddy4study.com</a>
          </p>

          {/* Disclaimer */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Disclaimer</h2>
          <p>
            <strong>Source of Information:</strong> Buddy4Study app compiles details on scholarships/fellowships from government websites and private scholarship sources. Links to the official sources accompany each listing detail pages.<br />
            <strong>Non-affiliation:</strong> The Buddy4Study app is not associated with any government entity in India or elsewhere. When featuring government scholarships, we rely on publicly accessible information from central and state government websites in India.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KindCircleScholarshipPage;
