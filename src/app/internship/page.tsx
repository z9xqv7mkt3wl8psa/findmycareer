'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const internships = [
  {
    title: "Flight Physics Learning gamification Internship By Airbus India Pvt Ltd - Airbus India Pvt Ltd",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Aviation",
    stipend: "Click on \"View Details\"",
    lastDate: "05-May",
    type: "New"
  },
  {
    title: "Cybersecurity Internship By Airbus India Pvt Ltd - Airbus India Pvt Ltd",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "New"
  },
  {
    title: "Technical IT Internship By Synopsys - Synopsys",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Diploma, Engineering",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "New"
  },
  {
    title: "Google Network Operations Residency Internship - Google",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "New"
  },
  {
    title: "Graduate Apprenticeship By Volvo India - Volvo India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "New"
  },
  {
    title: "Apprenticeship By IIM Lucknow - IIM Lucknow",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "23-Apr",
    type: "New"
  },
  {
    title: "IndicWiki Project Summer Internship 2025 - IIIT Hyderabad",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "New"
  },
  {
    title: "Data Science Internship By ALLEN Digital - ALLEN Digital",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Grad Internship By Walmart Global Tech India - Walmart Global Tech India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Data Analyst Internship By Dun And Bradstreet - Dun And Bradstreet",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Internship By Infineon Technologies India - Infineon Technologies India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Procurement Operations Internship By Guidewire - Guidewire",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Business Development Internship By Harman Technology - Harman Technology",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "UI And UX Development Internship By Airbus India Pvt Ltd - Airbus India Pvt Ltd",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Internships By ALLEN Digital - ALLEN Digital",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "10-May",
    type: "N/A"
  },
  {
    title: "Talent Acquisition Apprenticeship By Innovaccer Analytics India - Innovaccer Analytics India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Events Marketing Internship By Innovaccer Analytics India - Innovaccer Analytics India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Platform Engineering Apprenticeship By Innovaccer Analytics India - Innovaccer Analytics India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Hardware Engineer Internship By Micron Technology - Micron Technology",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Nestle Internship 2025 - Nestle India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Management Internship By Siemens India - Siemens India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Summer Internship By ABV IIITM Gwalior - ABV IIITM Gwalior",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Class 12",
    stipend: "Click on \"View Details\"",
    lastDate: "15-Apr",
    type: "4 day"
  },
  {
    title: "Communications And Content Writing Internship By Guidewire - Guidewire",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Embedded Software Internship By Texas Instruments - Texas Instruments",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Synthesis Software Development Internship By Synopsys - Synopsys",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Systems In Service Engineering Internship By Airbus India Pvt Ltd - Airbus India Pvt Ltd",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "AI Internship By HP India - HP India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Masters, PHD",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Social Media Marketing Internship By Cactus India - Cactus India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "23-Apr",
    type: "N/A"
  },
  {
    title: "Automation Engineer Internship By Guidewire Software - Guidewire Software",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "23-Apr",
    type: "N/A"
  },
  {
    title: "Structural Analyst Internship By Intel India - Intel India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "23-Apr",
    type: "N/A"
  },
  {
    title: "Summer Internship By NIT Warangal - NIT Warangal",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "11-Apr",
    type: "Today"
  },
  {
    title: "Internship By Walmart India - Walmart India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "23-Apr",
    type: "N/A"
  },
  {
    title: "Summer Internship By IIT Goa - IIT Goa",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "15-Apr",
    type: "4 day"
  },
  {
    title: "Internships By EXLY India - EXLY India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Information Technology Internship By Hilton India - Hilton India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Interim Engineering Internship By Qualcomm India Pvt Ltd - Qualcomm India Pvt Ltd",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Aircraft Structure Repair Engineer Internship By Airbus India Pvt Ltd - Airbus India Pvt Ltd",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Aviation",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Performance PNP Internship By Intel India - Intel India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "IDRBT Summer Internship 2025 - IDRBT",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "15-Apr",
    type: "4 day"
  },
  {
    title: "Internships By Micron Technology 2025 - Micron Technology",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Recruiter Internship By Firebolt - Firebolt",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Investment Banking Internship By Plutus Business Advisory - Plutus Business Advisory",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "CS Internship By Parallel Wireless - Parallel Wireless",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "AI Research Internship By General Electric - General Electric",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Masters, PHD",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Student Internship By Intel India - Intel India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Satyendra Nath Bose Summer Internship 2025 - NIT Silchar",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "15-Apr",
    type: "4 day"
  },
  {
    title: "Design Student Internship By Cannon Design India - Cannon Design India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Data Science Internship By Henkal - Henkal",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Data Analyst Internship By IQVIA - IQVIA",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Internship By Bahwan CyberTek Group - Bahwan CyberTek Group",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Summer Internship By Baxter - Baxter",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Tuberculosis Internship By PTAH India - PTAH India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Data Scientist Internship By SATSURE India - SATSURE India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Software Engineer Internship By Fortanix - Fortanix",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "TA Internship By OML Entertainment - OML Entertainment",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Coordinator Internship By Heart it Out - Heart it Out",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "19-Apr",
    type: "N/A"
  },
  {
    title: "Design Internship By Fortanix - Fortanix",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Finance Internship By ACCA - ACCA",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Engineering Internship By LAM Research - LAM Research",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Market Research Internship By Dun And Bradstreet - Dun And Bradstreet",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Sports Authority Of India Internship 2025 - Sports Authority of India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Dec",
    type: "N/A"
  },
  {
    title: "National Museum Internship Programme 2025 - National Museum Delhi",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "10-Oct",
    type: "N/A"
  },
  {
    title: "Internship By Ministry Of Women And Child Development - The Ministry Of Women And Child Development, India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "10-Jun",
    type: "N/A"
  },
  {
    title: "PM Internship Scheme 2025 - Government Of India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Diploma, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "15 AprilExtended Date",
    type: "4 day"
  },
  {
    title: "Data Analyst Internship By Arrise India - Arrise India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "22-Apr",
    type: "N/A"
  },
  {
    title: "Internships By Brand 4 Brands 2025 - Brand 4 Brands",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "31-May",
    type: "N/A"
  },
  {
    title: "Structural Engineer Internship By Walter P Moore - Walter P Moore",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "31-May",
    type: "N/A"
  },
  {
    title: "Water Resources Engineering Internship By Walter P Moore - Walter P Moore",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering",
    stipend: "Click on \"View Details\"",
    lastDate: "31-May",
    type: "N/A"
  },
  {
    title: "Diagnostics Engineering Internship By Walter P Moore - Walter P Moore",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "31-May",
    type: "N/A"
  },
  {
    title: "Google Program Manager Internship - Google",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "31-May",
    type: "N/A"
  },
  {
    title: "Summer Internship By IIT Indore - IIT Indore",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "ISRO Internship 2025 - The Indian Space Research Organisation (ISRO), India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters, PHD",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Internships By Frost And Sullivan - Frost And Sullivan",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "25-Apr",
    type: "N/A"
  },
  {
    title: "Business Development Representative Internship By Siemens India - Siemens India Pvt Ltd",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Internships By SySpree Digital Pvt Ltd - SySpree Digital Pvt Ltd",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "31-May",
    type: "N/A"
  },
  {
    title: "Apprenticeships By Citi India - Citi India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Diploma, Bachelors, Professional courses",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Electronics Engineering Internship By SatSure India - SatSure India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Ethics And Compliance Internship By PhonePe India - PhonePe India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "20-Apr",
    type: "N/A"
  },
  {
    title: "Operations Associate Apprenticeship By Stripe India - Stripe India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "31-May",
    type: "N/A"
  },
  {
    title: "Internships By SatSure Analytics India - SatSure Analytics India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "07-May",
    type: "N/A"
  },
  {
    title: "Internships By AICTE India - All India Council for Technical Education (AICTE)",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "All",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Dec",
    type: "N/A"
  },
  {
    title: "Student Internships By Oracle India - Oracle India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Aug",
    type: "N/A"
  },
  {
    title: "TCS Research Internship - Tata Consultancy Services India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Masters, PHD",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Dec",
    type: "N/A"
  },
  {
    title: "Psychology Internship By Heart It Out - Heart It Out",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "15-Apr",
    type: "4 day"
  },
  {
    title: "Internships By Lamborghini 2025 - Lamborghini",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "15-Apr",
    type: "4 day"
  },
  {
    title: "Internship By Ministry Of Panchayati Raj India - The Ministry Of Panchayati Raj India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors, Masters, PHD",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Mar",
    type: "N/A"
  },
  {
    title: "Internships By Greenpeace India - Greenpeace India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Dec",
    type: "N/A"
  },
  {
    title: "Computational Designer Internship By Walter P Moore - Walter P Moore",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "31-May",
    type: "N/A"
  },
  {
    title: "Application Developer Internship By Walter P Moore - Walter P Moore",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "31-May",
    type: "N/A"
  },
  {
    title: "Internships By CITIC CLSA India - CITIC CLSA India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Internships By Digital Folks - Digital Folks",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Dec",
    type: "N/A"
  },
  {
    title: "Internships By Marriott - Marriott",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "31-May",
    type: "N/A"
  },
  {
    title: "ER Research Internship By Adobe Technology - Adobe Technology",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "PHD",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Jun",
    type: "N/A"
  },
  {
    title: "Internship By ShopClues - ShopClues",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Dec",
    type: "N/A"
  },
  {
    title: "Internships By Razorpay - Razorpay Careers",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "30-Apr",
    type: "N/A"
  },
  {
    title: "Internships By Meragi Events - Meragi Events Careers",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "N/A",
    type: "N/A"
  },
  {
    title: "Internships By Eye Mantra - Eye Mantra",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Medical, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Dec",
    type: "N/A"
  },
  {
    title: "Internships By EY India PVT LTD - EY India PVT LTD",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Dec",
    type: "N/A"
  },
  {
    title: "Internships By Testbook - Testbook",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "All",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Dec",
    type: "N/A"
  },
  {
    title: "SECI Internship 2025 - Solar Energy Corporation of India (SECI)",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Masters, PHD",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Dec",
    type: "N/A"
  },
  {
    title: "Internships By Analytics Vidhya - Analytics Vidhya",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Jul",
    type: "N/A"
  },
  {
    title: "Internships By NASA - National Aeronautics And Space Administration (NASA)",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Medical, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "16-May",
    type: "N/A"
  },
  {
    title: "Internships By Amazon - Amazon",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors, Masters, PHD",
    stipend: "Click on \"View Details\"",
    lastDate: "10-May",
    type: "N/A"
  },
  {
    title: "Internship By WWF India - WWF India",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Dec",
    type: "N/A"
  },
  {
    title: "Internships By Unbox Robotics - Unbox Robotics",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Dec",
    type: "N/A"
  },
  {
    title: "Internship By NITI Aayog - NITI Aayog",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters, PHD",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Dec",
    type: "N/A"
  },
  {
    title: "Hyundai Motor India Internship - Hyundai",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Masters",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Dec",
    type: "N/A"
  },
  {
    title: "Internships By Synopsys - Synopsys",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors, Professional courses",
    stipend: "Click on \"View Details\"",
    lastDate: "25-Apr",
    type: "N/A"
  },
  {
    title: "Internships By EyeROV Technologies - EyeROV (IROV Technologies)",
    link: "https://forms.gle/EXAMPLE",
    duration: "Click on \"View Details\"",
    isRemote: false,
    eligibility: "Engineering, Bachelors",
    stipend: "Click on \"View Details\"",
    lastDate: "31-Aug",
    type: "N/A"
  }
];

const internshipCategories = [
  'Top Internships for Engineering',
  'Top Internships for Bachelors',
  'Top Internships for Masters',
];

export default function InternshipHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [durationFilter, setDurationFilter] = useState('');
  const [remoteFilter, setRemoteFilter] = useState('');
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredInternships = internships.filter((internship) => {
    const matchesSearchTerm = internship.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDuration = !durationFilter || internship.duration.includes(durationFilter);
    const matchesRemote = remoteFilter === '' || (remoteFilter === 'Remote' ? internship.isRemote : !internship.isRemote);

    return matchesSearchTerm && matchesDuration && matchesRemote;
  });

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const shouldShowLoadMore = filteredInternships.length > visibleCount;

  return (
    <> 
    <Navbar />
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          <h1 style={{ fontSize: '2.7rem', fontWeight: 'bold', color: '#1a1a1a', textAlign: 'center' }}>
            Discover Top Internships for Every Field
          </h1>
        </div>

        <p style={{
          textAlign: 'center',
          marginBottom: '2.8rem',
          color: '#555',
          fontSize: '1.1rem',
          maxWidth: '760px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Explore exciting internship opportunities across various fields like engineering, business, design, and more.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2.2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <select
            style={selectStyle}
            onChange={(e) => setDurationFilter(e.target.value)}
            value={durationFilter}
          >
            <option value="">Select Duration</option>
            <option value="3 months">3 months</option>
            <option value="6 months">6 months</option>
            <option value="12 weeks">12 weeks</option>
            <option value="4 months">4 months</option>
          </select>

          <select
            style={selectStyle}
            onChange={(e) => setRemoteFilter(e.target.value)}
            value={remoteFilter}
          >
            <option value="">Remote or On-site</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
          </select>

          <input
            type="text"
            placeholder="Search Internships"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={selectStyle}
          />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {filteredInternships.slice(0, visibleCount).map((internship, index) => (
            <div
              key={index}
              style={{
                background: '#ffffff',
                borderRadius: '1rem',
                padding: '1.8rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                border: '1px solid #eee',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.7rem', fontWeight: '600', color: '#1a1a1a' }}>
                {internship.title}
              </h3>
               {/* <p style={{ fontSize: '1rem', marginBottom: '1rem', lineHeight: '1.5', color: '#444' }}>
                {internship.description}
              </p> */}
              <p style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#0070f3' }}>
                <strong>eligibility:</strong> {internship.eligibility}
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#0070f3' }}>
                <strong>Stipend:</strong> {internship.stipend}
              </p>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#333' }}>
                <strong>Duration:</strong> {internship.duration} | <strong>Last Date:</strong> {internship.lastDate}
              </p>
              <Link
                href={internship.link}
                target="_blank"
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#0070f3',
                  color: '#fff',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                }}
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>

        {shouldShowLoadMore && (
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <div
              onClick={loadMore}
              style={{
                margin: '3rem auto 2rem',
                width: '100px',
                height: '20px',
                background: '#0070f3',
                borderRadius: '15px',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.3s ease',
                boxShadow: '0 -2px 10px rgba(0,0,0,0.2)',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '4px',
                  background: '#fff',
                  borderRadius: '999px',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: 'bendLine 1s ease-out forwards',
                }}
              />
            </div>
          </div>
        )}

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          {internshipCategories.map((category, idx) => (
            <Link
              key={idx}
              href={`/internship/${category.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                display: 'inline-block',
                margin: '0.4rem 0.8rem',
                padding: '0.5rem 1rem',
                border: '1px solid #ccc',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                color: '#333',
              }}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
    </>
  );
}

const selectStyle = {
  padding: '0.6rem',
  borderRadius: '0.5rem',
  border: '1px solid #ccc',
  minWidth: '180px',
};
