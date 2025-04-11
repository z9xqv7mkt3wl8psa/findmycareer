import React from 'react';
import Navbar from '@/components/Navbar'; // Adjust the path as needed
import Footer from '@/components/footer';

const IETIndiaScholarshipPage = () => {
  return (
    <div>
      <Navbar />

      {/* Banner */}
      <section style={{ width: '100%', marginBottom: '0' }}>
        <img
          src="/featurescholarshipiet.png"
          alt="IET India Scholarship Award 2025"
          style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
        />
      </section>

      {/* Tabs Section (like Buddy4Study) */}
      <div style={{ backgroundColor: '#f3f4f6', padding: '1rem 0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
  {[
    { label: 'About Program', color: '#f97316', href: '#about-program' },
    { label: 'Scholarships', color: '#2563eb', href: '#scholarships' },
    { label: "FAQ's", color: '#1e40af', href: '#faqs' },
    { label: 'Contact Details', color: '#1e3a8a', href: '#contact' },
    { label: 'Apply Now', color: '#1d4ed8', href: 'https://www.buddy4study.com/page/iet-india-scholarship-awards' },
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
    IET India Scholarship Award 2025
  </h1>

  <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
    
    {/* About the Program */}
    <h2 style={{ color: '#003366', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
      About <span style={{ color: '#f59e0b' }}>The Program</span>
    </h2>
    <p>
      The <strong>IET India Scholarship Award</strong> is one of India's most prestigious scholarship programs for undergraduate engineering students.
      Established by the Institution of Engineering and Technology (IET), it aims to identify and support the next generation of engineering leaders
      in India by recognising their creativity, innovation, leadership, and academic excellence.
    </p>
    <p>
      Now in its 9th edition, the program is open to undergraduate engineering students across all years (1st to 4th year), offering a total
      scholarship fund of INR 10,00,000. Applications are entirely free of cost, making this opportunity even more accessible to all eligible candidates.
    </p>

    {/* About the IET */}
    <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '0.5rem' }}>About the IET</h2>
    <p>
      The Institution of Engineering and Technology (IET), one of the world’s largest professional societies for engineers, is headquartered in the UK.
      It collaborates with industry, academia, and government to advance engineering and technology, supporting engineers at every stage of their careers
      in its mission to engineer a better world.
    </p>
    <p>
      In India, IET focuses on Future Technologies, Mobility & Transport, and the Future of Work. Its esteemed Honorary Fellows include Shri Ratan Tata, N. R. Narayana Murthy,
      and other leaders in science and technology.
    </p>
    {/* Eligibility Section */}
<h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Eligibility</h2>
<ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
  <li>Open for students studying in the 1st, 2nd, 3rd, or 4th year of a full-time regular undergraduate engineering program (in any field) approved by AICTE/UGC.</li>
  <li>Applicants must have cleared all credit courses in a single attempt.</li>
  <li>Applicants must have scored a minimum of 60% marks in aggregate (or 6.0 CGPA on a 10-point scale) in the semesters cleared so far.</li>
  <li>There is no age limit for the applicants.</li>
  <li>Applications are entirely free of cost.</li>
</ul>

<p style={{ fontStyle: 'italic', backgroundColor: '#f3f4f6', padding: '1rem', borderLeft: '4px solid #003366' }}>
  <strong>Note:</strong> Application is open for all IET members and non-members and for all branches of engineering as recognised by the AICTE/UGC. Also, lateral entry students joining a B.Tech. program in the 2nd year can apply too.
</p>

      


      

      

      {/* Benefits Section */}
<section className="mb-6">
  <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Benefits</h2>

  <h3 className="mt-2 font-semibold">Regional Round:</h3>
  <ul className="list-disc ml-5 space-y-1">
    <li>Winner: ₹60,000 + Trophy + Certificate + 1-year IET Membership</li>
    <li>Runner-up: ₹40,000 + Trophy + Certificate + 1-year IET Membership</li>
  </ul>

  <h3 className="mt-4 font-semibold">National Finals:</h3>
  <ul className="list-disc ml-5 space-y-1">
    <li>Winner: ₹3,00,000 + Trophy + Certificate + 1-year IET Membership</li>
    <li>1st Runner-up: ₹1,70,000 + Trophy + Certificate + 1-year IET Membership</li>
    <li>2nd Runner-up: ₹1,50,000 + Trophy + Certificate + 1-year IET Membership</li>
  </ul>

  <p style={{ fontStyle: 'italic', backgroundColor: '#f3f4f6', padding: '1rem', borderLeft: '4px solid #003366', marginTop: '1rem' }}>
    <strong>Note:</strong> National winners receive prize money only for the national level but certificates for both levels.
  </p>
</section>

{/* Documents Section */}
<section className="mb-6">
  <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Documents</h2>
  <p>No documents required during application.</p>
</section>

{/* How to Apply Section */}
<section className="mb-6">
  <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>How to Apply?</h2>
  <ol className="list-decimal ml-5 mt-2 space-y-1">
    <li>Click the ‘Apply Now’ button.</li>
    <li>Login or register on <a href="https://www.buddy4study.com/" target="_blank" className="text-blue-600 underline">Buddy4Study</a>.</li>
    <li>Redirected to IET India Scholarship Award 2025 page.</li>
    <li>Fill and submit registration form.</li>
    <li>Login again and complete application with personal and academic details.</li>
    <li>Submit the application.</li>
  </ol>
</section>

{/* Selection Process Section */}
<section className="mb-6">
  <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Selection Process (4 Stages)</h2>

  <h3 className="mt-2 font-semibold">Stage 1: Online Application & Evaluation</h3>
  <ul className="list-disc ml-5 space-y-1">
    <li>Shortlisting based on eligibility and online application scoring.</li>
    <li>Scoring Weightage:
      <ul className="list-disc ml-5 mt-1">
        <li>Academics – 52%</li>
        <li>Extra & Co-Curricular – 20%</li>
        <li>Professional – 13%</li>
        <li>Outreach – 10%</li>
        <li>IET Membership – 15%</li>
      </ul>
    </li>
    <li>STEM test for shortlisted students.</li>
    <li>Top 10 percentile per region proceed to Stage 2.</li>
  </ul>

  <p style={{ fontStyle: 'italic', backgroundColor: '#f3f4f6', padding: '1rem', borderLeft: '4px solid #003366', marginTop: '1rem' }}>
    <strong>Note:</strong> The STEM test evaluates students’ conceptual understanding across core engineering domains.
  </p>

  <h3 className="mt-4 font-semibold">Stage 2: Online Test</h3>
  <ul className="list-disc ml-5 space-y-1">
    <li>50 MCQs on Physics, Chemistry, Math, Mech, Electrical, ECE, CSE.</li>
    <li>Top 30 students per region move to Stage 3.</li>
    <li>Results by <strong>15th July 2025</strong>.</li>
  </ul>

  <h3 className="mt-4 font-semibold">Stage 3: Regional Rounds</h3>
  <p className="mt-2">In-person presentations on region-specific challenges. Regional centers:</p>
  <ul className="list-disc ml-5 space-y-1">
    <li>North: Delhi</li>
    <li>East & Northeast: Kolkata</li>
    <li>West: Mumbai</li>
    <li>South 1: Bangalore (KA, TS, KL)</li>
    <li>South 2: Chennai (TN, AP, Pondy)</li>
  </ul>
  <p className="mt-2">Only regional winners move to finals.</p>

  <h3 className="mt-4 font-semibold">Stage 4: National Finals</h3>
  <ul className="list-disc ml-5 space-y-1">
    <li>Held on <strong>15th September 2025</strong> in Bangalore.</li>
    <li>Final presentations + possible Group Discussion.</li>
  </ul>
</section>

{/* Contact Section */}
<section className="mb-6">
  <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Contact Us</h2>
  <p className="mt-2">
    <strong>Phone:</strong> +91 9513222559 (Mon–Fri, 10 AM – 6 PM IST)<br />
    <strong>Email:</strong> <a href="mailto:scholarships@theiet.in" className="text-blue-600 underline">scholarships@theiet.in</a>
  </p>
</section>

{/* Disclaimer Section */}
<section>
  <h2 style={{ color: '#003366', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Disclaimer</h2>
  <p className="mt-2">
    <strong>Source of Information:</strong> Buddy4Study compiles scholarship data from official government/private sources.<br />
    <strong>Non-affiliation:</strong> Buddy4Study is not affiliated with any government entity. It uses public data from official sites.
  </p>
</section>

    


    {/* Apply Now Button */}
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <a
        href="https://www.buddy4study.com/page/iet-india-scholarship-awards"
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

export default IETIndiaScholarshipPage;
