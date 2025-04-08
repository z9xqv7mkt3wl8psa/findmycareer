'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';


  
export default function HomePage() {
  const scrollRef = useRef(null); //
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
              '/scholarship2.jpg',
              '/scholarship2.jpg',
              '/scholarship2.jpg',
              '/scholarship2.jpg',
              '/scholarship2.jpg',
              '/scholarship2.jpg',
              '/scholarship2.jpg',
              '/scholarship2.jpg',
              '/scholarship2.jpg',
              '/scholarship2.jpg',
              '/scholarship2.jpg',
              '/scholarship2.jpg',
              '/scholarship2.jpg',
              '/scholarship2.jpg',
              '/scholarship2.jpg',
              
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
        logo: '/scholarship1.png',
        title: 'KIND CIRCLE SCHOLARSHIP FOR MERITORIOUS STUDENTS 2025–26',
        deadline: '2025-12-31',
      },
      {
        logo: '/scholarship2.jpg',
        title: 'COLLEGE BOARD 90% FEE WAIVER PROGRAM',
        deadline: '2025-04-16',
      },
      {
        logo: '/scholarship3.jpg',
        title: 'COLLEGE BOARD 50% FEE WAIVER PROGRAM',
        deadline: '2025-04-16',
      },
      {
        logo: '/scholarship4.jpg',
        title: 'INTERNATIONAL MERIT SCHOLARSHIP',
        deadline: '2025-06-10',
      },
      {
        logo: '/scholarship5.jpg',
        title: 'FLIPKART FOUNDATION SCHOLARSHIP PROGRAM 2024–25',
        deadline: '2025-09-30',
      },
      {
        logo: '/scholarship6.jpg',
        title: 'GOOGLE GIRLS SCHOLARSHIP 2025',
        deadline: '2025-11-01',
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
      </div>
    ))}

    {/* Add cloned items for seamless looping */}
    {[
      {
        logo: '/scholarship1.png',
        title: 'KIND CIRCLE SCHOLARSHIP FOR MERITORIOUS STUDENTS 2025–26',
        deadline: '2025-12-31',
      },
      {
        logo: '/scholarship2.jpg',
        title: 'COLLEGE BOARD 90% FEE WAIVER PROGRAM',
        deadline: '2025-04-16',
      },
      {
        logo: '/scholarship3.jpg',
        title: 'COLLEGE BOARD 50% FEE WAIVER PROGRAM',
        deadline: '2025-04-16',
      },
      {
        logo: '/scholarship4.jpg',
        title: 'INTERNATIONAL MERIT SCHOLARSHIP',
        deadline: '2025-06-10',
      },
      {
        logo: '/scholarship5.jpg',
        title: 'FLIPKART FOUNDATION SCHOLARSHIP PROGRAM 2024–25',
        deadline: '2025-09-30',
      },
      {
        logo: '/scholarship6.jpg',
        title: 'GOOGLE GIRLS SCHOLARSHIP 2025',
        deadline: '2025-11-01',
      }
    ].map((scholarship, index) => (
      <div
        key={`clone-${index}`}
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
      </div>
    ))}
  </div>

  {/* ✅ Smooth Auto Scroll + Drag Scroll + Fade Scrollbar Script */}
  <script dangerouslySetInnerHTML={{
    __html: `
      const container = document.getElementById('scrollable-scholarships');
      let scrollSpeed = 1;
      let isPaused = false;
      let isDown = false;
      let startX;
      let scrollLeft;
      let animationId;
      let scrollDirection = 1; // 1 for right, -1 for left

      // Get the full scrollable width
      const getScrollWidth = () => {
        return container.scrollWidth - container.clientWidth;
      };

      const smoothScroll = () => {
        if (isPaused || isDown) {
          animationId = requestAnimationFrame(smoothScroll);
          return;
        }

        const maxScroll = getScrollWidth();
        const currentScroll = container.scrollLeft;
        
        // Reverse direction when reaching either end
        if (currentScroll >= maxScroll) {
          // When reaching the end, instantly (but invisibly) jump back to start
          container.scrollLeft = 0;
        } else if (currentScroll <= 0 && scrollDirection < 0) {
          // When scrolling left and reaching start, jump to near end
          container.scrollLeft = maxScroll - 1;
        }
        
        container.scrollLeft += scrollSpeed * scrollDirection;
        animationId = requestAnimationFrame(smoothScroll);
      };

      // Start auto scroll when the page loads
      animationId = requestAnimationFrame(smoothScroll);

      // Pause on hover
      container.addEventListener('mouseenter', () => isPaused = true);
      container.addEventListener('mouseleave', () => isPaused = false);

      // Drag Scroll
      container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      });
      
      container.addEventListener('mouseleave', () => isDown = false);
      container.addEventListener('mouseup', () => isDown = false);
      
      container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
      });

      // Show/hide scrollbar on scroll
      let scrollTimeout;
      container.addEventListener('scroll', () => {
        container.classList.remove('hide-scrollbar');
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          container.classList.add('hide-scrollbar');
        }, 800);
      });

      // Clean up animation frame when component unmounts
      window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationId);
      });
    `}}
  />
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
        Register and Create Your Profile<br />on Buddy4Study
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
    <div style={{ backgroundColor: '#c0c6cd', padding: '1rem 2rem' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#2c2c2c' }}>
        Notice Board – <span style={{ fontWeight: '500' }}>For Students</span>
      </h2>
    </div>

    {/* Content */}
    <div style={{ padding: '1.5rem 2rem', maxHeight: '260px', overflowY: 'auto' }}>
      {/* Notice 1 */}
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ fontWeight: '700', marginBottom: '0.25rem' }}>31 May, 2025</p>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
          <span style={{ color: '#000' }}>
            Apply to India’s top UGC-approved universities through Buddy4Study’s Online Degree Scholarship Support Programme
          </span>{' '}
          and get up to <strong>15% scholarship</strong> on your first-semester fee.
        </p>
      </div>

      {/* Notice 2 */}
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ fontWeight: '700', marginBottom: '0.25rem' }}>4 May, 2025</p>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
          Applications are open for Alstom India Scholarship 2024–25: Phase-III. Students pursuing ITI/Diploma,
          general graduation, or professional graduation in STEM can apply by May 4, 2025!
        </p>
      </div>

      {/* Notice 3 */}
      <div>
        <p style={{ fontWeight: '700', marginBottom: '0.25rem', color: '#8b00cc' }}>16 April, 2025</p>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#5c17bd' }}>
          Applications are open for Flipkart Foundation Scholarship 2024-25!
          Children of Kirana Store Owners pursuing 1st-year UG STEM at government colleges in India can apply by 16 April 2025.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Meet Our Scholars Section */}
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
        flex: 0 0 260px;
        background-color: #f0f8ff;
        border-radius: 1rem;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
        padding: 1.5rem;
        text-align: center;
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
        name: 'Riya Sharma',
        course: 'B.Tech Computer Science',
        university: 'IIT Delhi',
        photo: '/boyimage.jpg',
      },
      {
        name: 'Arjun Mehta',
        course: 'MBBS',
        university: 'AIIMS Delhi',
        photo: '/boyimage.jpg',
      },
      {
        name: 'Meena Patel',
        course: 'BA Economics',
        university: 'Delhi University',
        photo: '/boyimage.jpg',
      },
      {
        name: 'Sahil Khan',
        course: 'B.Sc Physics',
        university: 'IISc Bangalore',
        photo: '/boyimage.jpg',
      },
      {
        name: 'Nikita Roy',
        course: 'MCA',
        university: 'NIT Trichy',
        photo: '/boyimage.jpg',
      }
    ].map((scholar, index) => (
      <div key={index} className="scholar-card">
        <img
          src={scholar.photo}
          alt={scholar.name}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '1rem',
            border: '2px solid #0070f3',
          }}
        />
        <h3 style={{ fontSize: '1.1rem', color: '#003366', marginBottom: '0.5rem' }}>{scholar.name}</h3>
        <p style={{ fontSize: '0.95rem', color: '#444', marginBottom: '0.25rem' }}>{scholar.course}</p>
        <p style={{ fontSize: '0.85rem', color: '#666' }}>{scholar.university}</p>
      </div>
    ))}

    {/* Add cloned items for seamless looping */}
    {[
      {
        name: 'Riya Sharma',
        course: 'B.Tech Computer Science',
        university: 'IIT Delhi',
        photo: '/boyimage.jpg',
      },
      {
        name: 'Arjun Mehta',
        course: 'MBBS',
        university: 'AIIMS Delhi',
        photo: '/boyimage.jpg',
      },
      {
        name: 'Meena Patel',
        course: 'BA Economics',
        university: 'Delhi University',
        photo: '/boyimage.jpg',
      },
      {
        name: 'Sahil Khan',
        course: 'B.Sc Physics',
        university: 'IISc Bangalore',
        photo: '/boyimage.jpg',
      },
      {
        name: 'Nikita Roy',
        course: 'MCA',
        university: 'NIT Trichy',
        photo: '/boyimage.jpg',
      }
    ].map((scholar, index) => (
      <div key={`clone-${index}`} className="scholar-card">
        <img
          src={scholar.photo}
          alt={scholar.name}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '1rem',
            border: '2px solid #0070f3',
          }}
        />
        <h3 style={{ fontSize: '1.1rem', color: '#003366', marginBottom: '0.5rem' }}>{scholar.name}</h3>
        <p style={{ fontSize: '0.95rem', color: '#444', marginBottom: '0.25rem' }}>{scholar.course}</p>
        <p style={{ fontSize: '0.85rem', color: '#666' }}>{scholar.university}</p>
      </div>
    ))}
  </div>

  {/* ✅ Smooth Auto Scroll + Drag Scroll + Fade Scrollbar Script */}
  <script dangerouslySetInnerHTML={{
    __html: `
      const scholarsContainer = document.getElementById('scrollable-scholars');
      let scrollSpeedScholars = 1;
      let isPausedScholars = false;
      let isDownScholars = false;
      let startXScholars;
      let scrollLeftScholars;
      let animationIdScholars;
      let scrollDirectionScholars = 1;

      // Get the full scrollable width
      const getScrollWidthScholars = () => {
        return scholarsContainer.scrollWidth - scholarsContainer.clientWidth;
      };

      const smoothScrollScholars = () => {
        if (isPausedScholars || isDownScholars) {
          animationIdScholars = requestAnimationFrame(smoothScrollScholars);
          return;
        }

        const maxScroll = getScrollWidthScholars();
        const currentScroll = scholarsContainer.scrollLeft;
        
        // Reverse direction when reaching either end
        if (currentScroll >= maxScroll) {
          // When reaching the end, instantly (but invisibly) jump back to start
          scholarsContainer.scrollLeft = 0;
        } else if (currentScroll <= 0 && scrollDirectionScholars < 0) {
          // When scrolling left and reaching start, jump to near end
          scholarsContainer.scrollLeft = maxScroll - 1;
        }
        
        scholarsContainer.scrollLeft += scrollSpeedScholars * scrollDirectionScholars;
        animationIdScholars = requestAnimationFrame(smoothScrollScholars);
      };

      // Start auto scroll when the page loads
      animationIdScholars = requestAnimationFrame(smoothScrollScholars);

      // Pause on hover
      scholarsContainer.addEventListener('mouseenter', () => isPausedScholars = true);
      scholarsContainer.addEventListener('mouseleave', () => isPausedScholars = false);

      // Drag Scroll
      scholarsContainer.addEventListener('mousedown', (e) => {
        isDownScholars = true;
        scholarsContainer.classList.add('active');
        startXScholars = e.pageX - scholarsContainer.offsetLeft;
        scrollLeftScholars = scholarsContainer.scrollLeft;
      });
      
      scholarsContainer.addEventListener('mouseleave', () => isDownScholars = false);
      scholarsContainer.addEventListener('mouseup', () => isDownScholars = false);
      
      scholarsContainer.addEventListener('mousemove', (e) => {
        if (!isDownScholars) return;
        e.preventDefault();
        const x = e.pageX - scholarsContainer.offsetLeft;
        const walk = (x - startXScholars) * 2;
        scholarsContainer.scrollLeft = scrollLeftScholars - walk;
      });

      // Show/hide scrollbar on scroll
      let scrollTimeoutScholars;
      scholarsContainer.addEventListener('scroll', () => {
        scholarsContainer.classList.remove('hide-scrollbar');
        clearTimeout(scrollTimeoutScholars);
        scrollTimeoutScholars = setTimeout(() => {
          scholarsContainer.classList.add('hide-scrollbar');
        }, 800);
      });

      // Clean up animation frame when component unmounts
      window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationIdScholars);
      });
    `}}
  />
</section>
      <Footer />
    </>
  );
}
