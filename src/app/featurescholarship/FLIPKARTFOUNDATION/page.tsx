import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

const FlipkartFoundationScholarshipPage = () => {
  return (
    <div>
      <Navbar />

      {/* Banner */}
      <section style={{ width: '100%', marginBottom: '0' }}>
        <img
          src="/featurescholarshipflipkart.jpg"
          alt="Flipkart Foundation Scholarship 2024-25"
          style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
        />
      </section>

      {/* Tabs Section */}
      <div style={{ backgroundColor: '#f3f4f6', padding: '1rem 0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {[
          { label: 'About Program', color: '#f97316', href: '#about-program' },
          { label: 'Eligibility', color: '#2563eb', href: '#eligibility' },
          { label: 'FAQ\'s', color: '#1e40af', href: '#faqs' },
          { label: 'Contact Details', color: '#1e3a8a', href: '#contact' },
          { label: 'Apply Now', color: '#1d4ed8', href: 'https://www.buddy4study.com/page/flipkart-foundation-scholarship-program' },
        ].map((tab, idx) => (
          <a key={idx} href={tab.href} target={tab.label === 'Apply Now' ? '_blank' : '_self'} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{ backgroundColor: tab.color, color: '#fff', padding: '0.5rem 1.2rem', borderRadius: '0.375rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
              {tab.label}
            </button>
          </a>
        ))}
      </div>

      {/* Alert Bar */}
      <div style={{ backgroundColor: 'red', color: 'white', padding: '0.5rem 1rem', textAlign: 'center', fontWeight: 'bold' }}>
        ⚠️ ALERT: SCHOLARSHIP FRAUD PREVENTION! PROTECT YOURSELF—<a href="#" style={{ color: '#ffff00', textDecoration: 'underline' }}>CLICK HERE</a> FOR ESSENTIAL GUIDELINES AND IMPORTANT DETAILS.
      </div>

      <section style={{ padding: '3rem 2rem', backgroundColor: '#fff' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#003366', marginBottom: '2rem' }}>
          Flipkart Foundation Scholarship Program 2024-25
        </h1>

        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
          {/* About the Program */}
          <h2 id="about-program" style={{ color: '#003366', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            About <span style={{ color: '#f59e0b' }}>The Program</span>
          </h2>
          <p>
            Flipkart Group is committed to strengthening the retail sector including the Kirana Stores which form a significant part. As part of our endeavour,
            the Flipkart Foundation is supporting a scholarship for children of Kirana Store Owners to make them future-ready.
          </p>
          <p>
            The <strong>Flipkart Foundation Scholarship 2024-25</strong> is an initiative aimed at supporting deserving, financially disadvantaged students, with
            a strong emphasis on empowering meritorious and underprivileged female students. Aligned with goals emphasising affordable education and gender
            equality, the program aims to enable access to higher education and promote empowerment.
          </p>
          <p>
            Under this program, first-year students enrolled in professional STEM (Science, Technology, Engineering, Math) undergraduate programs and children
            of Kirana Store Owners (KSOs) in the academic year 2024-25 will receive a fixed scholarship of INR 50,000.
          </p>

          {/* About the Company */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem' }}>About the Company</h2>
          <p>
            The Flipkart Foundation is the philanthropic arm of the Flipkart Group, dedicated to driving inclusive growth and sustainable development across
            India. Launched to create a meaningful impact.
          </p>

          {/* Eligibility */}
          <h2 id="eligibility" style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem' }}>Eligibility</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Applicants must be currently studying in the 1st year of professional undergraduate STEM courses at government colleges in India.</li>
            <li>One parent must be a Kirana Store Owner (KSO).</li>
            <li>Applicants must have scored at least 60% in their Class 12 exams.</li>
            <li>The annual family income should not exceed INR 5 lakh from all sources.</li>
            <li>Children of employees of Flipkart Group and Buddy4Study are not eligible to apply.</li>
          </ul>

          {/* Benefits */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem' }}>Benefits</h2>
          <p>A fixed scholarship of INR 50,000</p>
          <p style={{ fontStyle: 'italic', backgroundColor: '#f3f4f6', padding: '1rem', borderLeft: '4px solid #003366' }}>
            <strong>Note:</strong> The scholarship fund may be utilized to cover academic-related expenses like tuition fees, exam fees, hostel fees, books, stationery, travel, data, food and lodging, etc.
          </p>

          {/* Documents */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem' }}>Documents Required</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Recent passport-size photograph</li>
            <li>College admission proof</li>
            <li>Class 12 mark sheet</li>
            <li>Family income proof</li>
            <li>Proof of Kirana Store Owner</li>
            <li>Proof of identity</li>
            <li>Disability certificate (if applicable)</li>
            <li>Payment receipts of educational expenses</li>
            <li>Student’s Bank passbook</li>
          </ul>

          {/* How to Apply */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem' }}>How to Apply</h2>
          <ol style={{ paddingLeft: '1.5rem' }}>
            <li>Click the ‘Apply Now’ button.</li>
            <li>Login/Register on Buddy4Study.</li>
            <li>Navigate to the Flipkart Foundation Scholarship 2024-25 application page.</li>
            <li>Start the application process.</li>
            <li>Fill in all details and upload documents.</li>
            <li>Accept terms, preview, and submit.</li>
          </ol>

          {/* FAQs */}
          <h2 id="faqs" style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem' }}>FAQ’s</h2>
          <p>
            The selection process involves multiple stages:
          </p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Initial shortlisting based on eligibility</li>
            <li>Telephonic/video interviews</li>
            <li>Document verification</li>
            <li>Physical verification</li>
            <li>Final selection</li>
          </ul>

          {/* Contact Details */}
          <h2 id="contact" style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem' }}>Contact Us</h2>
          <p>
            📞 011-430-92248 (Ext-364)<br />
            📧 <a href="mailto:flipkartfoundationscholarship@buddy4study.com" style={{ color: '#1d4ed8' }}>flipkartfoundationscholarship@buddy4study.com</a><br />
            (Monday to Friday - 10:00 AM to 06:00 PM IST)
          </p>

          {/* Disclaimer */}
          <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem' }}>Disclaimer</h2>
          <p>
            <strong>Source of Information:</strong> Buddy4Study app compiles details from official government/private sources.<br />
            <strong>Non-affiliation:</strong> The Buddy4Study app is not affiliated with any government entity. It uses public data from official sites.
          </p>

          {/* Apply Now Button */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href="https://www.buddy4study.com/page/flipkart-foundation-scholarship-program"
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

export default FlipkartFoundationScholarshipPage;
