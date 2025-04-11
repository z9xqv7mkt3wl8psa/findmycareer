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
      minHeight: '50vh',
    }}
  >
    {[
      { label: 'For Girls', path: '/categories/for-girls' },
      { label: 'Sports Talent', path: '/categories/sports-talent' },
      { label: 'College Level', path: '/categories/college-level' },
      { label: 'SC/ST/OBC/DNT', path: '/categories/reserved' },
      { label: 'International', path: '/categories/international' },
      { label: 'Talent Based', path: '/categories/talent-based' },
      { label: 'Minorities', path: '/categories/minorities' },
      { label: 'Merit Based', path: '/categories/merit-based' },
      { label: 'School Level', path: '/categories/school-level' },
    ].map((category, index) => (
      <Link key={index} href={category.path} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div
          style={{
            backgroundColor: '#fff',
            padding: '1rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            
            fontWeight: '500',
            cursor: 'pointer',
            
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.05)';
           
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
           
          }}
        >
          {category.label}
        </div>
      </Link>
    ))}
  </div>
</section>



{/* More Opportunities Section */}
<section
  style={{
    backgroundImage: 'url("/oppurtunitiesbackground2.jpg")', // make sure the image is inside your public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '2rem',
    minHeight: '80vh',
  }}
>
<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
  <h2
    style={{
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#fff',
      background: 'linear-gradient(90deg, #e91e63, #2196f3)',
      padding: '0.6rem 1.2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    }}
  >
    More Opportunities
  </h2>
</div>


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
      { label: 'Education Loan', path: '/opportunities/education-loan' },
      { label: 'Student Funding Solution', path: '/opportunities/student-funding' },
      { label: 'Expert Talk Series', path: '/opportunities/expert-talk' },
      { label: 'Career Guidance', path: '/opportunities/career-guidance' },
      { label: 'Online Degree', path: '/opportunities/online-degree' },
      { label: 'Scholarship Services', path: '/opportunities/scholarship-services' },
      { label: 'College Board', path: '/opportunities/college-board' },
      { label: 'Scholarship Bulletins', path: '/opportunities/scholarship-bulletins' },
    ].map((item, index) => (
      <Link key={index} href={item.path}>
        <div
          style={{
            padding: '1rem',
            backgroundColor: '#ffffffcc',
            borderRadius: '8px',
            textAlign: 'center',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          {item.label}
        </div>
      </Link>
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
      },
      {
        logo: '/scholarshipcollegeboard.jpg',
        title: 'COLLEGE BOARD 90% FEE WAIVER PROGRAM',
        deadline: '16-Apr-2025',
      },
      {
        logo: '/scholarshipiet.png',
        title: 'Institution of Engineering and Technology (IET) India Scholarship  ',
        deadline: '31-May-2025',
      },
      {
        logo: '/scholarshipsbi.jpg',
        title: 'SBIF Asha Scholarship Program for Overseas Education ',
        deadline: '30-Apr-2025',
      },
      {
        logo: '/scholarshipflipkart.jpg',
        title: 'FLIPKART FOUNDATION SCHOLARSHIP PROGRAM ',
        deadline: '16-Apr-2025',
      },
      {
        logo: '/scholarshipalstom.jpg',
        title: 'Alstom India Scholarship Award 2024-25',
        deadline: '04-May-2025',
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
        logo: '/scholarshipkindcircle.png',
        title: 'KIND CIRCLE SCHOLARSHIP FOR MERITORIOUS STUDENTS ',
        deadline: '31-Dec-2025',
      },
      {
        logo: '/scholarshipcollegeboard.jpg',
        title: 'COLLEGE BOARD 90% FEE WAIVER PROGRAM',
        deadline: '16-Apr-2025',
      },
      {
        logo: '/scholarshipiet.png',
        title: 'Institution of Engineering and Technology (IET) India Scholarship  ',
        deadline: '31-May-2025',
      },
      {
        logo: '/scholarshipsbi.jpg',
        title: 'SBIF Asha Scholarship Program for Overseas Education ',
        deadline: '30-Apr-2025',
      },
      {
        logo: '/scholarshipflipkart.jpg',
        title: 'FLIPKART FOUNDATION SCHOLARSHIP PROGRAM ',
        deadline: '16-Apr-2025',
      },
      {
        logo: '/scholarshipalstom.jpg',
        title: 'Alstom India Scholarship Award 2024-25',
        deadline: '04-May-2025',
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
          date: '31 May, 2025',
          text: 'Apply now for the prestigious Institution of Engineering and Technology (IET) India Scholarship Awards 2025 – empowering future engineers with merit-based financial support.',
          link: 'https://www.buddy4study.com/scholarship/iet-india-scholarship-awards',
        },
        {
          date: '4 May, 2025',
          text: "Applications are open for Alstom India Scholarship 2024–25: Phase-III. Students pursuing ITI/Diploma, general graduation, or professional graduation in STEM can apply by May 4, 2025!",
          link: 'https://www.buddy4study.com/page/alstom-india-scholarship',
        },
        {
          date: '16 April, 2025',
          text: "Applications are open for Flipkart Foundation Scholarship 2024–25! Children of Kirana Store Owners pursuing 1st-year UG STEM at government colleges in India can apply by 16 April 2025.",
          link: 'https://www.buddy4study.com/page/flipkart-foundation-scholarship',
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
