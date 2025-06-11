'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import MNCCareersSection from '@/components/MNCCareersSection';
import ScholarshipCategories from '@/components/ScholarshipCategories';
import MoreOpportunities from '@/components/MoreOpportunities';
import { allItems, Item } from './data/item';


  
export default function HomePage() {
  const scrollRef = useRef(null); //
  const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [query, setQuery] = useState('');
  
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
const filteredResults = allItems.filter((item: Item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: '#eaf4ff',
          padding: '4rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <div style={{ flex: '1', minWidth: '280px' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#003366', marginBottom: '1rem' }}>
            Discover Scholarships & Opportunities
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#333', maxWidth: '500px', marginBottom: '1.5rem' }}>
            Empower your academic journey with personalized scholarships, curated career guides, and global learning programs.
          </p>
          <Link href="/">
            <button
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Start Exploring
            </button>
          </Link>
        </div>

        <div style={{ flex: '1', textAlign: 'center', minWidth: '280px' }}>
          <img
            src={images[currentImageIndex]}
            alt="Students"
            style={{
              maxWidth: '100%',
              maxHeight: '300px',
              borderRadius: '1rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'opacity 0.5s ease-in-out',
            }}
          />
        </div>
      </section>

    {/* 🔍 Search Section */}
      <section
        style={{
          padding: '3rem 2rem',
          backgroundColor: '#fff',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2rem', color: '#003366', marginBottom: '1rem' }}>
          Search scholarships and other education funding opportunities
        </h2>
        <input
          type="text"
          placeholder="Search scholarships, internships, loans..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            marginTop: '1rem',
            padding: '0.75rem 1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            width: '100%',
            maxWidth: '500px',
          }}
        />
      </section>

      {/* 📋 Search Results Section */}
      {query && (
        <section
          style={{
            padding: '2rem',
            backgroundColor: '#f9f9f9',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredResults.length > 0 ? (
            filteredResults.map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                }}
              >
                <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ marginBottom: '0.75rem' }}>{item.description}</p>

                {/* Type Specific Fields */}
                {item.type === 'Internship' && 'duration' in item && 'stipend' in item && (
                  <>
                    <p><strong>Duration:</strong> {item.duration}</p>
                    <p><strong>Stipend:</strong> {item.stipend}</p>
                    <p><strong>Remote:</strong> {item.isRemote ? 'Yes' : 'No'}</p>
                  </>
                )}

                {item.type === 'Loan' && 'amount' in item && 'interestRate' in item && (
                  <>
                    <p><strong>Amount:</strong> {item.amount}</p>
                    <p><strong>Interest Rate:</strong> {item.interestRate}</p>
                    <p><strong>Eligibility:</strong> {item.eligibility}</p>
                  </>
                )}

                {item.type === 'Scholarship' && 'amount' in item && (
                  <>
                    <p><strong>Amount:</strong> {item.amount}</p>
                  </>
                )}

                <p style={{ marginTop: '0.5rem' }}><strong>Last Date:</strong> {item.lastDate}</p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#0070f3',
                    color: '#fff',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                  }}
                >
                  View Details →</a>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', padding: '2rem' }}>No results found.</p>
          )}
        </section>
      )}
      <ScholarshipCategories />

{/* Sarkari Naukri Section */}
<section
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem',
    padding: '3rem 2rem',
    backgroundColor: '#fff',
  }}
>
  {/* Left Side - Image */}
  <div style={{ flex: '1', minWidth: '280px', textAlign: 'center' }}>
    <img
      src="/sarkari-naukri.webp" // 👉 Replace with actual path to your image
      alt="Sarkari Naukri"
      style={{
        maxWidth: '100%',
        borderRadius: '1rem',
        color: '#eef6ff',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    />
    {/* Click Here Button */}
    <a
      href="#"
      style={{
        display: 'inline-block',
        marginTop: '1rem',
        padding: '0.5rem 1.5rem',
        backgroundColor: '#eef6ff',
        color: '#eef6ff',
        borderRadius: '0.5rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        transition: 'background-color 0.3s',
      }}
      onMouseEnter={(e) => {
        const target = e.target as HTMLAnchorElement; // Typecasting the event target to HTMLAnchorElement
        target.style.backgroundColor = '#e07b00';
      }}
      onMouseLeave={(e) => {
        const target = e.target as HTMLAnchorElement; // Typecasting the event target to HTMLAnchorElement
        target.style.backgroundColor = '#ff8c00';
      }}
    >
      Click Here
    </a>
  </div>

  {/* Right Side - Content */}
  <div style={{ flex: '1', minWidth: '280px' }}>
    <h2 style={{ fontSize: '2rem', color: '#c26d00', marginBottom: '1rem' }}>
      Explore <strong>Sarkari Naukri</strong> Opportunities
    </h2>
    <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '1.5rem', maxWidth: '500px' }}>
      Get the latest updates on government job openings across India. Start your journey toward a secure and prestigious career in the public sector.
    </p>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
      }}
    >
      {[
        { title: 'UPSC Civil Services', path: '/sarkari/upsc' },
        { title: 'SSC CHSL Exam', path: '/sarkari/ssc-chsl' },
        { title: 'IBPS Bank PO', path: '/sarkari/ibps-po' },
        { title: 'Railway Group D', path: '/sarkari/railway-group-d' },
        { title: 'Delhi Police Constable', path: '/sarkari/delhi-police' },
        { title: 'DRDO Scientist-B', path: '/sarkari/drdo' },
      ].map((job, index) => (
        <Link key={index} href={job.path}>
          <div
            style={{
              backgroundColor: '#fff',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              fontWeight: '500',
              textAlign: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLDivElement; // Typecasting the event target to HTMLDivElement
              target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLDivElement; // Typecasting the event target to HTMLDivElement
              target.style.transform = 'scale(1)';
            }}
          >
            {job.title}
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
 
<MNCCareersSection />
<MoreOpportunities />


      {/* Partners Section */}
      <section
        style={{
          backgroundColor: '#f5f7ff',
          padding: '3rem 2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        <div style={{ flex: 1, minWidth: '280px' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1rem' }}>
            Our <strong>PARTNERS</strong>
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              '/Partnerzivame.png',
'/Partnervistara.png',
'/Partnerunacademy.png',
'/Partnermicromax.jpg',
'/Partnerlic.png',
'/Partnerhdfc.jpg',
'/Partnerhcltech.jpg',
'/Partnerforcemotors.png',
'/Partnerflipkart.jpg',
'/Partnerclovia.png',
'/Partnerbyjus.png',
'/Partnerbob.jpg',
'/Partnerairindia.jpg',

              
            ].map((src, index) => (
              <img
  key={index}
  src={src}
  alt={`Partner logo ${index + 1}`}
  style={{
    width: '100%',
    maxWidth: '80px',
    height: 'auto',
    objectFit: 'contain',
    padding: '0.5rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  }}
/>

            ))}
          </div>
        </div>

        <div style={{ flex: 1, minWidth: '280px' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1rem' }}>
            Become Our <strong>PARTNER</strong>
          </h2>
          <p style={{ color: '#444', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            As a trusted partner of over 200+ esteemed corporates and foundations, we empower students through education.
            Our services include Scholarship Management Services (SMS), Scholar Tracking System (STS), mentorship programs,
            and flexible education loan solutions to support your journey at every step.
          </p>
          <button
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Become a PARTNER
          </button>
        </div>
      </section>
{/* Featured Scholarships Section */}
<section style={{ padding: '3rem 2rem', backgroundColor: '#fff' }}>
  <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#333', marginBottom: '2rem' }}>
    Featured <strong>Scholarships</strong>
  </h2>

  <div
    id="scrollable-scholarships"
    className="scroll-container"
    style={{
      display: 'flex',
      overflowX: 'auto',
      gap: '1.5rem',
      paddingBottom: '1rem',
      scrollBehavior: 'smooth',
      cursor: 'grab',
      position: 'relative',
    }}
  >
    <style jsx>{`
      .scholarship-card {
        transition: background-color 0.3s, color 0.3s, transform 0.3s;
        flex: 0 0 260px;
      }
      .scholarship-card:hover {
        background-color: #f97316 !important;
        color: white !important;
        transform: translateY(-5px);
      }
      .scholarship-card:hover .view-btn {
        background-color: white !important;
        color: #f97316 !important;
      }
      .scroll-container::-webkit-scrollbar {
        height: 6px;
      }
      .scroll-container::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        transition: opacity 0.3s;
      }
      .scroll-container::-webkit-scrollbar-track {
        background: transparent;
      }
      .scroll-container.hide-scrollbar::-webkit-scrollbar-thumb {
        background: transparent;
      }
    `}</style>

    {[
      {
        logo: '/scholarshipkindcircle.png',
        title: 'KIND CIRCLE SCHOLARSHIP FOR MERITORIOUS STUDENTS ',
        deadline: '31-Dec-2025',
        link: '/featurescholarship/KINDCIRCLE'
      },
      {
        logo: '/scholarshipcollegeboard.jpg',
        title: 'COLLEGE BOARD 90% FEE WAIVER PROGRAM',
        deadline: '16-Apr-2025',
        link: '/featurescholarship/Collegeboard'
      },
      {
        logo: '/scholarshipiet.png',
        title: 'Institution of Engineering and Technology (IET) India Scholarship  ',
        deadline: '31-May-2025',
        link: '/featurescholarship/IET'
      },
      {
        logo: '/scholarshipsbi.jpg',
        title: 'SBIF Asha Scholarship Program for Overseas Education ',
        deadline: '30-Apr-2025',
        link: '/featurescholarship/SBIFAshaScholarship'
      },
      {
        logo: '/scholarshipflipkart.jpg',
        title: 'FLIPKART FOUNDATION SCHOLARSHIP PROGRAM ',
        deadline: '16-Apr-2025',
        link: '/featurescholarship/FLIPKARTFOUNDATION'
      },
      {
        logo: '/scholarshipalstom.jpg',
        title: 'Alstom India Scholarship Award 2024-25',
        deadline: '04-May-2025',
        link: '/featurescholarship/Alstom'
      }
    ].map((scholarship, index) => (
      <div
        key={index}
        className="scholarship-card"
        style={{
          backgroundColor: '#fff',
          borderRadius: '1rem',
          padding: '1.5rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          color: '#333',
        }}
      >
        <div style={{ marginBottom: '1rem' }}>
          <img src={scholarship.logo} alt="Logo" style={{ maxHeight: '30px' }} />
        </div>
        <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>{scholarship.title}</p>
        <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
          Deadline Date <strong>{scholarship.deadline}</strong>
        </p>
        <a href={scholarship.link}>
          <button
            className="view-btn"
            style={{
              backgroundColor: '#f97316',
              color: '#fff',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          >
            View Detail
          </button>
        </a>
      </div>
    ))}

    {/* Cloned items for seamless loop */}
    {[
      {
  logo: 'https://www.buddy4study.com/page/bharti-airtel-scholarship?cuid=fb_BHRSP1_20240716_1',
  title: 'Bharti Airtel Scholarship Program 2025-26',
  deadline: '31-Jul-2025',
  link: '/featurescholarship/BhartiAirtelScholarship'
},
{
  logo: 'https://www.buddy4study.com/page/toefl-global-scholar-challenge',
  title: 'Global Scholar Challenge – Powered by TOEFL (3rd Edition)',
  deadline: '20-Aug-2025',
  link: '/featurescholarship/TOEFLGlobalChallenge'
},
{
  logo: 'https://admission.buddy4study.com/scholarship/rau-sports-scholarships',
  title: 'RAU Sports Scholarships 2025-26',
  deadline: '11-Jun-2025',
  link: '/featurescholarship/RAUSports'
},
{
  logo: 'https://www.buddy4study.com/scholarship/ayush-scholarship-scheme',
  title: 'AYUSH Scholarship Scheme 2025-26',
  deadline: '16-Jun-2025',
  link: '/featurescholarship/AYUSHScholarship'
},
{
  logo: 'https://www.buddy4study.com/scholarship/mtcp-scholarship',
  title: 'MTCP Scholarship 2025',
  deadline: '18-Jun-2025',
  link: '/featurescholarship/MTCPScholarship'
},
{
  logo: 'https://www.buddy4study.com/page/mirae-asset-foundation-scholarship-program',
  title: 'Mirae Asset Scholarship Program (UG & PG)',
  deadline: '30-Jun-2025',
  link: '/featurescholarship/MiraeAssetScholarshipUGPG'
},
{
  logo: 'https://admission.buddy4study.com/scholarship/national-overseas-scholarship-for-st-students',
  title: 'National Overseas Scholarship Scheme for ST Students 2025-26',
  deadline: '30-Jun-2025',
  link: '/featurescholarship/NOS_ST'
},
{
  logo: 'https://www.buddy4study.com/scholarship/national-overseas-scholarship-scheme-for-sc',
  title: 'National Overseas Scholarship Scheme for SC Students 2025-26',
  deadline: '30-Jun-2025',
  link: '/featurescholarship/NOS_SC'
},
{
  logo: 'https://www.buddy4study.com/article/ffe-scholarship',
  title: 'Foundation for Excellence (FFE) Scholarship 2025',
  deadline: '31-Jan-2025',
  link: '/featurescholarship/FFEScholarship'
}


    ].map((scholarship, index) => (
      <div
        key={`clone-${index}`}
        className="scholarship-card"
        style={{
          backgroundColor: '#fff',
          borderRadius: '1rem',
          padding: '1.5rem',
          boxShadow: '0 4px 12px rgba(116, 104, 104, 0.1)',
          color: '#333',
        }}
      >
        <div style={{ marginBottom: '1rem' }}>
          <img src={scholarship.logo} alt="Logo" style={{ maxHeight: '30px' }} />
        </div>
        <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>{scholarship.title}</p>
        <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
          Deadline Date <strong>{scholarship.deadline}</strong>
        </p>
        <a href={scholarship.link}>
          <button
            className="view-btn"
            style={{
              backgroundColor: '#f97316',
              color: '#fff',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          >
            View Detail
          </button>
        </a>
      </div>
    ))}
  </div>
</section>

<section style={{ backgroundColor: '#f9f9f9', padding: '3rem 1rem' }}>
  <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '600', marginBottom: '2.5rem' }}>
    Steps To Follow For Getting <strong style={{ color: '#000' }}>A SCHOLARSHIP</strong>
  </h2>

  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    }}
  >
    {/* Step 1 */}
    <div
      style={{
        flex: '0 0 300px',
        background: '#fff',
        borderRadius: '1rem',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <img src="/book.gif" alt="Register" style={{ height: '60px', marginBottom: '1rem' }} />
      <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>
        Register and Create Your Profile<br />on Student Grow
      </h3>
      <p style={{ fontSize: '0.9rem', color: '#555' }}>
        Share a few quick details and register instantly! Unlock personalized loan options, expert guidance, and education support.
      </p>
    </div>

    {/* Step 2 */}
    <div
      style={{
        flex: '0 0 300px',
        background: '#fff',
        borderRadius: '1rem',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <img src="/ring.gif" alt="Search" style={{ height: '60px', marginBottom: '1rem' }} />
      <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>
        Search Scholarship
      </h3>
      <p style={{ fontSize: '0.9rem', color: '#555' }}>
        Sign up for personalized scholarship alerts tailored to your profile and never miss an opportunity that matches your academic goals!
      </p>
    </div>

    {/* Step 3 */}
    <div
      style={{
        flex: '0 0 300px',
        background: '#fff',
        borderRadius: '1rem',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <img src="/join.gif" alt="Apply" style={{ height: '60px', marginBottom: '1rem' }} />
      <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>
        Apply for Scholarships
      </h3>
      <p style={{ fontSize: '0.9rem', color: '#555' }}>
        Explore over 10,000 scholarships tailored to your needs and eligibility. Find options that match your academic goals and financial situation.
      </p>
      <button
        style={{
          marginTop: '1.5rem',
          backgroundColor: '#3b82f6',
          color: '#fff',
          border: 'none',
          padding: '0.6rem 1.5rem',
          borderRadius: '0.5rem',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Register Now
      </button>
    </div>
  </div>
</section>

<section style={{ padding: '3rem 1rem', backgroundColor: '#f9f9f9' }}>
  <div
    style={{
      maxWidth: '900px',
      margin: '0 auto',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
    }}
  >
    {/* Header */}
    <div style={{ backgroundColor: '#e0f0ff', padding: '1rem 2rem' }}>
  <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#2c2c2c' }}>
    Notice Board – <span style={{ fontWeight: '500' }}>For Students</span>
  </h2>
</div>


    {/* Notice List */}
    <div style={{ padding: '1.5rem 2rem', maxHeight: '260px', overflowY: 'auto' }}>
      {[
        {
  date: '31 July, 2025',
  text: 'Apply now for Bharti Airtel Scholarship Program 2025-26 – 100% fee support for 1st-year Tech & Engineering students from top 50 NIRF-ranked colleges.',
  link: 'https://www.buddy4study.com/scholarship/bharti-airtel-scholarship-program'
},
{
  date: '20 August, 2025',
  text: 'Participate in the Global Scholar Challenge – Powered by TOEFL (3rd Edition) and win total prize money worth ₹1.3 lakh. Open to final-year students and professionals with 2 years’ experience.',
  link: 'https://www.buddy4study.com/scholarship/global-scholar-challenge-powered-by-toefl'
},
{
  date: '30 June, 2025',
  text: 'Apply for Mirae Asset Scholarship Program 2025 – Get up to ₹50,000 financial support for UG and PG studies. Deadline approaching soon!',
  link: 'https://www.buddy4study.com/page/mirae-asset-scholarship-program'
},
{
  date: '30 June, 2025',
  text: 'Get 90% fee waiver with nurtr Nurturing Minds with Chess Program – for school or college students aged 5 to 25.',
  link: 'https://www.buddy4study.com/scholarship/nurtr-nurturing-minds-with-chess-program-90-fee-waiver'
},
{
  date: '30 June, 2025',
  text: 'Apply for Buddy4Study Psychometric Test – Get a detailed career report and certificate. Open for Class 10 passouts and above.',
  link: 'https://www.buddy4study.com/scholarship/buddy4study-psychometric-test'
},
{
  date: '30 June, 2025',
  text: 'Buddy4Study Scholarship Support Programme 2025–26 is live – win up to ₹1,00,000 per annum. For students from Class 10 to 1st-year UG.',
  link: 'https://www.buddy4study.com/scholarship/buddy4study-scholarship-support-programme'
},
{
  date: '30 June, 2025',
  text: 'Apply for NIIT University Scholarship-cum-Admission Seat Programme 2025–26 – Get up to 100% tuition fee waiver. For Class 12 passed students.',
  link: 'https://www.buddy4study.com/scholarship/niit-university-scholarship-cum-admission-seat-programme'
},
{
  date: '15 July, 2025',
  text: 'Mohan T Advani Centennial Scholarship 2025–26 is open – Engineering & Architecture students can win up to ₹1,00,000.',
  link: 'https://www.buddy4study.com/scholarship/mohan-t-advani-centennial-scholarship-programme-engineering-architecture'
},
{
  date: '15 July, 2025',
  text: 'Mohan T Advani Centennial Scholarship 2025–26 for Diploma Students – Get ₹40,000 or 90% of annual fees.',
  link: 'https://www.buddy4study.com/scholarship/mohan-t-advani-centennial-scholarship-programme-diploma'
},
{
  date: '31 July, 2025',
  text: 'Satya Scholarship Program 2025 – 100% tuition fee coverage for 1st-year UG/integrated masters students from Ludhiana district.',
  link: 'https://www.buddy4study.com/scholarship/satya-scholarship-program'
},
{
  date: '31 July, 2025',
  text: 'Raman Kant Munjal Scholarship 2025-26 – Get up to ₹5.5 lakh for finance-related undergraduate courses.',
  link: 'https://www.buddy4study.com/scholarship/raman-kant-munjal-scholarship'
},
      ].map((notice, index) => (
        <div key={index} style={{ marginBottom: '1.5rem' }}>
          {/* Date + Icon */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#007bff',
                transform: 'rotate(45deg)',
                marginRight: '10px',
              }}
            ></div>
            <p style={{ fontWeight: '600', margin: 0 }}>{notice.date}</p>
          </div>

          {/* Notice Text */}
          <p style={{ margin: 0, lineHeight: '1.5' }}>
            <a
              href={notice.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#333',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#007bff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
            >
              {notice.text}
            </a>
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


<section style={{ backgroundColor: '#fff', padding: '3rem 2rem' }}>
  <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#003366', marginBottom: '2rem' }}>
    Meet <strong>Our Scholars</strong>
  </h2>

  <div
    id="scrollable-scholars"
    className="scroll-container"
    style={{
      display: 'flex',
      overflowX: 'auto',
      gap: '1.5rem',
      paddingBottom: '1rem',
      scrollBehavior: 'smooth',
      cursor: 'grab',
      position: 'relative',
    }}
  >
    <style jsx>{`
      .scholar-card {
        flex: 0 0 300px;
        background-color: #f0f8ff;
        border-radius: 1rem;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
        padding: 1.5rem;
        transition: transform 0.3s ease, background-color 0.3s;
      }

      .scholar-card:hover {
        transform: translateY(-5px);
        background-color: #d1e7ff !important;
      }

      .scroll-container::-webkit-scrollbar {
        height: 6px;
      }

      .scroll-container::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 3px;
      }

      .scroll-container::-webkit-scrollbar-track {
        background: transparent;
      }
    `}</style>

    {[
      {
        name: "Somaraju Hemanth Abhiram",
        scholarship: "SBIF Asha Scholarship",
        amount: "10,000",
        education: "Class 12",
        aspiration: "To become a Software Engineer",
        story:
          "Growing up with limited financial resources and basic educational facilities wasn't easy.",
      },
      {
        name: "Divyaben Patel",
        scholarship: "Corteva Agriscience Scholarship",
        amount: "50,000",
        education: "PhD",
        aspiration: "To become a Plant Breeder",
        story:
          "Navigating the complexities of pursuing a PhD while relying on agricultural income has been my reality.",
      },
      {
        name: "Sumita Mondal",
        scholarship: "LIC HFL Vidyadhan Scholarship",
        amount: "25,000",
        education: "B.A. in History",
        aspiration: "To become a Teacher",
        story:
          "For years, our farm has endured the onslaught of scorching sun and erratic rainfall.",
      },
      {
        name: "Arpita Negi",
        scholarship: "OakNorth STEM Scholarship",
        amount: "30,000",
        education: "BSc",
        aspiration: "To become a Data Scientist",
        story:
          "Growing up, I've witnessed the hard work my father puts into managing a small general store.",
      },
      {
        name: "Soubhagini Sahoo",
        scholarship: "PARAS Scholarship Programme",
        amount: "15,000",
        education: "B.Sc. in Physics (Hons.)",
        aspiration: "To become a Teacher",
        story:
          "My family of six relies on my father's income from our small farm.",
      },
      {
        name: "Neelakshi",
        scholarship: "U-Go Scholarship Program",
        amount: "40,000",
        education: "B.Sc.",
        aspiration: "To become a Nursing Officer",
        story:
          "At the tender age of three, I endured the devastating loss of my father.",
      },
      {
        name: "Tanishka Vinodiya",
        scholarship: "Kotak Junior Scholarship",
        amount: "36,000",
        education: "Class 12",
        aspiration: "To become a Data Scientist",
        story:
          "Squeezed into a one-bedroom apartment with seven other family members.",
      },
      {
        name: "Rahul Kumar",
        scholarship: "Nikon Scholarship Program",
        amount: "1,00,000",
        education: "B.Sc. in Film and TV Production",
        aspiration: "To become a Cinematographer",
        story:
          "The world has always mesmerised me with its captivating beauty.",
      },
      {
        name: "Pranjal Kesarwani",
        scholarship: "Piaggio Shiksha Se Samriddhi",
        amount: "13,144",
        education: "BA (English) Honors",
        aspiration: "To secure a Government Job",
        story:
          "Pranjal's world crumbled in 2020 when his mother succumbed to a brain hemorrhage.",
      },
      {
        name: "Yashna Nathwani",
        scholarship: "Kotak Shiksha Nidhi Scholarship",
        amount: "7,50,000",
        education: "MBA Tech",
        aspiration: "To become a Business Manager",
        story:
          "A tragedy struck my family like a thunderbolt in 2021 when my father succumbed to COVID-19.",
      },
    ].map((scholar, index) => (
      <div key={index} className="scholar-card">
        <h3 style={{ fontSize: '1.1rem', color: '#003366', marginBottom: '0.5rem' }}>{scholar.name}</h3>
        <p style={{ fontSize: '0.95rem', color: '#444', marginBottom: '0.25rem' }}><strong>Scholarship:</strong> {scholar.scholarship}</p>
        <p style={{ fontSize: '0.95rem', color: '#444', marginBottom: '0.25rem' }}><strong>Amount:</strong> ₹{scholar.amount}</p>
        <p style={{ fontSize: '0.95rem', color: '#444', marginBottom: '0.25rem' }}><strong>Education:</strong> {scholar.education}</p>
        <p style={{ fontSize: '0.95rem', color: '#444', marginBottom: '0.25rem' }}><strong>Aspiration:</strong> {scholar.aspiration}</p>
        <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '1rem' }}>{scholar.story}</p>
      </div>
    ))}
  </div>
</section>

{/* Combined Scroll Control Script */}
<script dangerouslySetInnerHTML={{
  __html: `
    // Track scroll state
    const scrollStates = new Map();
    
    // Initialize all scrollable sections
    function initAutoScroll() {
      initScrollSection('scrollable-scholarships');
      initScrollSection('scrollable-scholars');
    }
    
    // Clean up all scroll animations
    function cleanupAutoScroll() {
      scrollStates.forEach(state => {
        cancelAnimationFrame(state.animationId);
      });
      scrollStates.clear();
    }
    
    // Initialize a scrollable section
    function initScrollSection(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      
      const state = {
        scrollSpeed: 1,
        isAutoScrolling: true,
        isUserScrolling: false,
        lastScrollTime: 0,
        animationId: null,
        scrollDirection: 1,
        touchStartX: 0,
        scrollLeft: 0
      };
      
      scrollStates.set(containerId, state);
      
      const getScrollWidth = () => container.scrollWidth - container.clientWidth;
      
      const autoScroll = () => {
        if (!state.isAutoScrolling || state.isUserScrolling) {
          state.animationId = requestAnimationFrame(autoScroll);
          return;
        }
        
        const maxScroll = getScrollWidth();
        const currentScroll = container.scrollLeft;
        
        if (currentScroll >= maxScroll) {
          container.scrollLeft = 0;
        } else if (currentScroll <= 0 && state.scrollDirection < 0) {
          container.scrollLeft = maxScroll - 1;
        }
        
        container.scrollLeft += state.scrollSpeed * state.scrollDirection;
        state.animationId = requestAnimationFrame(autoScroll);
      };
      
      // Start auto scroll
      state.animationId = requestAnimationFrame(autoScroll);
      
      // Touch event handlers
      container.addEventListener('touchstart', (e) => {
        state.isUserScrolling = true;
        state.isAutoScrolling = false;
        state.touchStartX = e.touches[0].pageX;
        state.scrollLeft = container.scrollLeft;
      }, { passive: false });
      
      container.addEventListener('touchend', () => {
        state.isUserScrolling = false;
        // Resume auto-scroll after 2 seconds of inactivity
        setTimeout(() => {
          if (!state.isUserScrolling) {
            state.isAutoScrolling = true;
          }
        }, 2000);
      }, { passive: true });
      
      container.addEventListener('touchmove', (e) => {
        if (!state.isUserScrolling) return;
        e.preventDefault();
        const touchX = e.touches[0].pageX;
        const walk = (touchX - state.touchStartX) * 1.5;
        container.scrollLeft = state.scrollLeft - walk;
      }, { passive: false });
      
      // Mouse event handlers
      container.addEventListener('mousedown', (e) => {
        state.isUserScrolling = true;
        state.isAutoScrolling = false;
        state.touchStartX = e.pageX;
        state.scrollLeft = container.scrollLeft;
      });
      
      container.addEventListener('mouseleave', () => {
        state.isUserScrolling = false;
        setTimeout(() => {
          if (!state.isUserScrolling) {
            state.isAutoScrolling = true;
          }
        }, 2000);
      });
      
      container.addEventListener('mouseup', () => {
        state.isUserScrolling = false;
        setTimeout(() => {
          if (!state.isUserScrolling) {
            state.isAutoScrolling = true;
          }
        }, 2000);
      });
      
      container.addEventListener('mousemove', (e) => {
        if (!state.isUserScrolling) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - state.touchStartX) * 2;
        container.scrollLeft = state.scrollLeft - walk;
      });
      
      // Wheel event (for trackpads)
      container.addEventListener('wheel', (e) => {
        state.isUserScrolling = true;
        state.isAutoScrolling = false;
        clearTimeout(state.scrollTimeout);
        state.scrollTimeout = setTimeout(() => {
          state.isUserScrolling = false;
          state.isAutoScrolling = true;
        }, 2000);
      }, { passive: true });
    }
    
    // Initialize on page load
    document.addEventListener('DOMContentLoaded', initAutoScroll);
    
    // Handle page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        cleanupAutoScroll();
      } else {
        initAutoScroll();
      }
    });
    
    // Handle SPA navigation
    let currentURL = window.location.href;
    setInterval(() => {
      if (window.location.href !== currentURL) {
        currentURL = window.location.href;
        cleanupAutoScroll();
        setTimeout(initAutoScroll, 500);
      }
    }, 200);
  `
}} />
      <Footer />


    </>
  );
}
