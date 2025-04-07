'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import NoticeBoard from '@/components/NoticeBoard'; // NEW

export default function HomePage() {
  const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
          <Link href="/guide">
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

      {/* Search Section */}
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
          placeholder="Search scholarships..."
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

      {/* Stats Section */}
      <section
        style={{
          backgroundColor: '#f9f9f9',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          textAlign: 'center',
        }}
      >
        {[
          { label: 'Scholarships', value: '15,000+' },
          { label: 'Students', value: '9,762,739+' },
          { label: 'Students Helped', value: '94,861+' },
          { label: 'Fund Managed', value: '₹349Cr' },
        ].map((stat, index) => (
          <div key={index} style={{ margin: '1rem' }}>
            <h3 style={{ fontSize: '2rem', color: '#003366' }}>{stat.value}</h3>
            <p style={{ fontSize: '1rem', color: '#666' }}>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Categories Section */}
      <section style={{ backgroundColor: '#eef6ff', padding: '2rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '1.5rem', color: '#003366' }}>
          Popular Scholarship <strong>Categories</strong>
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {[
            'For Girls',
            'Sports Talent',
            'College Level',
            'SC/ST/OBC/DNT',
            'International',
            'Talent Based',
            'Minorities',
            'Merit Based',
            'School Level',
          ].map((category, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '0.75rem',
                textAlign: 'center',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                fontWeight: '500',
              }}
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* More Opportunities Section */}
      <section style={{ backgroundColor: '#f9f9ff', padding: '2rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '1.5rem', color: '#333' }}>
          More <strong>Opportunities</strong>
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {[
            'Education Loan',
            'Student Funding Solution',
            'Expert Talk Series',
            'Career Guidance',
            'Online Degree',
            'Scholarship Services',
            'College Board',
            'Scholarship Bulletins',
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '0.75rem',
                textAlign: 'center',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                fontWeight: '500',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

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
              '/logos/sbi.png',
              '/logos/lg.png',
              '/logos/kotak.png',
              '/logos/hdfc.png',
              '/logos/infosys.png',
              '/logos/tata.png',
              '/logos/colgate.png',
              '/logos/aditya.png',
              '/logos/dxc.png',
              '/logos/virtusa.png',
              '/logos/schaeffler.png',
              '/logos/loreal.png',
              '/logos/mahindra.png',
              '/logos/gsk.png',
              '/logos/legrand.png',
              '/logos/reliance.png',
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Partner ${index + 1}`}
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
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

      {/* Steps Section */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-2xl font-bold text-center mb-10">
          Steps To Follow For Getting <span className="text-blue-700">A SCHOLARSHIP</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {[
            {
              icon: '/icons/book.png',
              title: 'Register and Create Your Profile on Buddy4Study',
              desc: 'Share a few quick details and register instantly! Unlock personalized loan options, expert guidance, and education support.',
            },
            {
              icon: '/icons/bell.png',
              title: 'Search Scholarship',
              desc: 'Get alerts tailored to your profile and never miss a chance that matches your academic goals!',
            },
            {
              icon: '/icons/join.png',
              title: 'Apply for Scholarships',
              desc: 'Explore over 10,000 scholarships that match your eligibility and financial situation.',
            },
          ].map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
              <img src={step.icon} alt={step.title} className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Register Now
          </button>
        </div>
      </section>

      
  <NoticeBoard />


      <Footer />
    </>
  );
}
