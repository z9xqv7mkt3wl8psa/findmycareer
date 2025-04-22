'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const scholarships = [
  {
    name: "Gurukripa Scholarship Cum Admission Test 2025",
    provider: "Gurukripa Career Institute",
    deadline: "05 April",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Physics Wallah Scholarship Test 2025",
    provider: "PWSAT",
    deadline: "25 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "NHPC Sports Scholarship 2025",
    provider: "National Hydroelectric Power Corporation (NHPC)",
    deadline: "26 March",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Udhayam Charitable Trust Scholarship 2025",
    provider: "Udhayam Charitable Trust",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12",
    link: "https://gform"
  },
  {
    name: "Akash Instant Admission Cum Scholarship Test 2025",
    provider: "Akash Medical And JEE Foundation",
    deadline: "10 April",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship 2025",
    provider: "Government Of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Maharashtra Post Matric Scholarship For Persons With Disability",
    provider: "Government Of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Godabarisha Vidyarthi Protsahana Yojana",
    provider: "Government Of Odisha",
    deadline: "02 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, ITI, Diploma",
    link: "https://gform"
  },
  {
    name: "Maharashtra Post Matric Scholarship 2025",
    provider: "Government Of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "E Kalyan Jharkhand Scholarship 2024 25",
    provider: "Government Of Jharkhand",
    deadline: "20 March",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Government Vidyaniketan Scholarship 2025",
    provider: "Government Of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, ITI, Diploma, Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Tripura Post Matric Scholarship 2025",
    provider: "Government Of India",
    deadline: "28 February",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering, Medical, Bachelors, Masters, PHD",
    link: "https://gform"
  },
  {
    name: "JSW Umeed Scholarship 2025",
    provider: "JSW Foundation",
    deadline: "09 March",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Eklavya The Warrior Scholarship Test 2025",
    provider: "Eklavya Bright Commerce Classes (BCC)",
    deadline: "27 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12",
    link: "https://gform"
  },
  {
    name: "DLF Cares Education Scholarship 2025",
    provider: "DLF CARES NURTURING LIVES",
    deadline: "20 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Aikyashree Post Matric Fresh And Renewal Scholarship 2025",
    provider: "Government Of West Bengal",
    deadline: "28 February",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Abhyaas Scholarship Aptitude Test 2025",
    provider: "Abhyaas",
    deadline: "28 February",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Shilpi Foundation Scholarship 2025",
    provider: "Shilpi Foundation",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12, Engineering, Bachelors, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "Dronacharya 2 Diagnostic And Scholarship Exam 2025",
    provider: "FIITJEE",
    deadline: "05 February",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Gurukripa Scholarship Cum Admission Test",
    provider: "Gurukripa Career Institute",
    deadline: "07 February",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Dhaan Merit Scholarship 2025",
    provider: "Sourashtra Dhaan Organization",
    deadline: "28 February",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "Durga Foundation Scholarship 2025",
    provider: "Durga Foundation",
    deadline: "02 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering, Medical, Others",
    link: "https://gform"
  },
  {
    name: "Shree Patan Jain Mandal Annual Merit Prize 2024 25",
    provider: "Shree Patan Jain Mandal Mumbai",
    deadline: "20 February",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "National Information Technology Exam 2025",
    provider: "NICE Foundation",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Chhattisgarh Post Matric Scholarship 2025",
    provider: "Government Of Chhattisgarh",
    deadline: "17 February",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "IIT Genius Scholarship Test 2025",
    provider: "FIITJEE",
    deadline: "05 February",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Shiksha Sahayog Scholarship 2025",
    provider: "Government Of Chhattisgarh",
    deadline: "31 January",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Vidvatta Scholarship 2025",
    provider: "KC Pullaiah Foundation",
    deadline: "28 February",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Karnataka Post Matric Scholarship 2025",
    provider: "Government Of Karnataka",
    deadline: "10 March",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Karnataka Labour Children Scholarship 2025",
    provider: "Labour Welfare Board Karntaka",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Kanthari Scholarship For Social Change 2025",
    provider: "Braille Without Borders Charitable Trust",
    deadline: "10 January",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "All India Scholarship Entrance Examination 2025",
    provider: "AISEE, Government of India",
    deadline: "15 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12",
    link: "https://gform"
  },
  {
    name: "Medha Charitable Trust Sampurna Siksha Scholarship Examination 2025",
    provider: "Medha Charitable Trust",
    deadline: "31 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "Junior Merit Scholarship 2025",
    provider: "Government Of Odisha",
    deadline: "27 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Pathani Samanta Mathematics Talent Scholarship 2025",
    provider: "Government Of Odisha",
    deadline: "16 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Rabiya Masood Foundation Scholarship 2025",
    provider: "Rabiya Masood Foundation",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "VidyaSamunnathi Scholarship 2025",
    provider: "Kerala State Welfare Corporation for Forward Communities Ltd",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Anjali Scholarship 2024 25",
    provider: "Swabhiman Organization",
    deadline: "10 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, ITI, Diploma, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Odisha Pre And Post Matric Scholarship 2025",
    provider: "Government Of Odisha",
    deadline: "15 March",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "KSTWWFB Scholarship And Laptop Scheme",
    provider: "KSTWWFB, Govt. Of Kerala",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "LPU Scholarship 2025",
    provider: "LPU University",
    deadline: "25 January",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Oberoi Educational Trust Scholarship",
    provider: "Oberoi Educational Trust",
    deadline: "30 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Goa Merit Based Scholarship 2024",
    provider: "Government Of Goa",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12, Diploma",
    link: "https://gform"
  },
  {
    name: "National Means Cum Merit Scholarship 2025",
    provider: "Govenrment of India",
    deadline: "10 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "BC Jindal Vidya Scholarship 2024",
    provider: "Jindal India Thermal Power Ltd (JITPL)",
    deadline: "10 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "LIC Golden Jubilee Scholarship 2024",
    provider: "Golden Jubilee Foundation",
    deadline: "22 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, ITI, Diploma, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Karunyathinte Deepthi Zweet Scholarship 2024",
    provider: "ZMART Foundation",
    deadline: "15 January",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Asraya Education Trust Scholarship 2024",
    provider: "Asraya Education Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "Vidyabharati Foundation Silver Jubilee Scholarship By IBMR College",
    provider: "IBMR College, Hubballi",
    deadline: "15 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Bachelors, Others",
    link: "https://gform"
  },
  {
    name: "Hyderabad Institute Of Excellence Scholarship 2025",
    provider: "Hyderabad Institute",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12",
    link: "https://gform"
  },
  {
    name: "OPGC Pratibha Bruti Scholarship 2024",
    provider: "Odisha Power Generation Corporation (OPGC)",
    deadline: "15 February",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Propel Scholarship 2024",
    provider: "INDIAN OIL PETRONAS PRIVATE LIMITED (IPPL)",
    deadline: "28 February",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Bhoomi IAS Scholarship 2024",
    provider: "Bhoomi IAS",
    deadline: "05 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Bhoomi IAS Scholarship 2024",
    provider: "Bhoomi IAS",
    deadline: "05 November",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "GENIUS Scholarship Exam 2025",
    provider: "SAM Global University",
    deadline: "08 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "D Y Uppar Educational And Social Foundation Merit Scholarship 2024",
    provider: "Shri D.Y Uppar Educational and Social Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12, Others",
    link: "https://gform"
  },
  {
    name: "TMB Foundation Scholarship 2024",
    provider: "TMB Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Patni Education Trust Scholarship 2024",
    provider: "The Patni Education Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Page Scholarship 2024",
    provider: "Page Industries Limited",
    deadline: "21 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, ITI, Diploma",
    link: "https://gform"
  },
  {
    name: "Dakshana Scholarship Test 2025",
    provider: "Dakshana",
    deadline: "10 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12",
    link: "https://gform"
  },
  {
    name: "Jodhpur Association Scholarship 2024",
    provider: "Jodhpur Association Mumbai",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Peace Of Mind Foundation Scholarship 2024",
    provider: "Peace Of Mind Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Vinod Handa Scholarship 2024",
    provider: "Epsilon Carbon Pvt Ltd",
    deadline: "12 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Moeen Memorial Scholarship 2024",
    provider: "Moeen Memorial Welfare Trust",
    deadline: "20 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering, Medical, Others",
    link: "https://gform"
  },
  {
    name: "SAAKAAR Scholarship 2024",
    provider: "Tech Mahindra Ltd.",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Diploma, Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Education Scholarship Scheme For Army Personnel",
    provider: "ESSA",
    deadline: "15 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Diploma, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "VVT Scholarship Admission Test 2024",
    provider: "VVT Educational Services Pvt. Ltd.",
    deadline: "14 November",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Baal Vikas Foundation Scholarship 2024",
    provider: "Baal Vikas Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Habeeb Educare Scholarship 2024",
    provider: "MSF Kerala",
    deadline: "15 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "SUHRID MLA Scholarship 2024",
    provider: "Transformation & Development Department, Assam",
    deadline: "15 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Bansal Open Opportunity And Scholarship Test 2025",
    provider: "Bansal Classes Private Limited",
    deadline: "09 November",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Lakshadweep Scholarship Scheme 2024",
    provider: "Government of India",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "BrightMinds Scholarship Test 2024",
    provider: "Lukmaan IAS",
    deadline: "14 November",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Nishkam Sewa Bharti Trust Scholarship 2024",
    provider: "Nishkam Sewa Bharti Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "RICE Talent Scholarship Test 2024",
    provider: "RiceSmart",
    deadline: "14 November",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "UP Pre And Post Matric Scholarship 2024",
    provider: "The Ministry of Social Welfare, Government of Uttar Pradesh",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Sujnananidhi Scholarship 2024",
    provider: "Shri Kshetra Dharmasthala Rural Development Project, Dharmasthala",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Extramarks Smart Scholarship Test 2024",
    provider: "Extramarks",
    deadline: "24 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Ruma Devi Gulab Ben Akshara Scholarship 2025",
    provider: "Ruma Devi Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Shri Kushal Guru Jain Charitable Trust Scholarship 2024",
    provider: "Shri Kushal Guru Jain Charitable Trust",
    deadline: "20 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "AdiMahesh Foundation Scholarship 2024",
    provider: "The AdiMahesh Seva Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12, Diploma, PG-Diploma, Engineering, Bachelors, Masters, PHD",
    link: "https://gform"
  },
  {
    name: "NextGen Foundation Scholarship 2024",
    provider: "NextGen Foundation",
    deadline: "28 February",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12, Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Guruji Education Foundation Scholarship 2024",
    provider: "Guruji Education Foundation",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Shri Akhil Bharatvarshiya Sadhumargi Jain Sangh Scholarship 2024",
    provider: "Shri Akhil Bharatvarshiya Sadhumargi Jain Sangh",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "YCF Scholarship For Children Of Hindi Film Industry Members",
    provider: "The Yash Chopra Foundation",
    deadline: "28 February",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Zidni Imla Charitable Trust Scholarship 2024",
    provider: "Zidni Imla Charitable Trust",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering, Medical, Bachelors, Masters, PHD",
    link: "https://gform"
  },
  {
    name: "Muslim Education Foundation Scholarship 2024",
    provider: "Muslim Education Foundation",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Shri Samprada Singh Renewal Scholarship 2024",
    provider: "Alkem Foundation",
    deadline: "09 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Diploma, Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Gururayaru Foundation Scholarship 2024",
    provider: "Gururayaru Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Fatima Charitable Foundation Scholarship 2024",
    provider: "Fatima Charitable Foundation",
    deadline: "20 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering, Medical, Bachelors, Others",
    link: "https://gform"
  },
  {
    name: "Mercy Cops Charitable Trust Scholarship 2024",
    provider: "Mercy Cops Charitable Trust",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "PMMS Mizoram State Post Matric Merit Scholarship For Scheduled Tribes Students 2024",
    provider: "Government Of Mizoram",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Avasar Foundation Post Matric Scholarship 2024",
    provider: "Avasar Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "NTS National Talent Search Scholarship Exam 2024",
    provider: "Association of Muslim Professionals (AMP)",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Pathani Samanta Mathematics Talent Scholarship 2024",
    provider: "Government of Odisha",
    deadline: "20 November",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Dr Hodophile Foundation Scholarship 2024",
    provider: "Dr Hodophile Foundation",
    deadline: "30 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Energy Youth Foundation Free Scholarship Test 2024",
    provider: "Energy Youth Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12, Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "Vijayalakshmi R L Jalappa Foundation Scholarship 2024",
    provider: "Vijayalakshmi R L Jalappa Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, ITI, Diploma, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Yuva Unstoppable Scholarship 2024",
    provider: "Yuva Unstoppable",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Sri Rag Foundation Scholarship 2024",
    provider: "Sri Rag Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Sachavi Charitable Trust Scholarship 2024",
    provider: "Sachavi Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Gagan Bharari Shiksha Yojana Scheme 2024",
    provider: "Government Of Goa",
    deadline: "15 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Sunny Vinayak Nimhan Scholarship 2024",
    provider: "Sunny Vinayak Nimhan",
    deadline: "15 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Arvind Foundation Fresh And Renewal Scholarship 2024",
    provider: "Arvind Foundation",
    deadline: "15 November",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12, ITI, Diploma, Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Hindustan Olympiad Scholarship Exam 2024",
    provider: "Hindustan Olympiad",
    deadline: "20 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Sadhana Scholarship 2024",
    provider: "Smile Welfare Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Engineering, Medical, Others",
    link: "https://gform"
  },
  {
    name: "Aalayam Foundation Scholarship 2024",
    provider: "Aalayam Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "SBIF Asha Scholarship 2024",
    provider: "SBI Foundation",
    deadline: "15 November",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Bazm e Niswan Scholarship 2024",
    provider: "Bazm-e-Niswan Charitable Trust",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Bhumi Cognizant Scholarship 2024",
    provider: "Bhumi in collaboration with Cognizant Technology Solutions India Private Limited",
    deadline: "15 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, ITI, Diploma, Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Sage IT Scholarship 2024",
    provider: "Sage IT",
    deadline: "29 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "VI Scholarship For Teachers 2024",
    provider: "Vodafone Idea Foundation",
    deadline: "25 September",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Santosh Academia Talent Scholarship Examination 2024",
    provider: "Santosh Academia",
    deadline: "26 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "E Kalyan Pre And Post Matric Scholarship 2024",
    provider: "Government Of Jharkhand",
    deadline: "30 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Bharathi Cement Fresh And Renewal Scholarship 2024",
    provider: "Bharathi Cement Corporation Private Limited (BCCPL)",
    deadline: "15 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, ITI, Diploma, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Pre And Post matric National Scholarship 2024",
    provider: "Government Of India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship For Students Of The Wards Of Beedi LSDM Workers 2024",
    provider: "The Ministry of Labour, Government Of India",
    deadline: "15 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, ITI, Diploma, Engineering, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "All India Pre Medical Scholarship Test 2025",
    provider: "Scholarship and Admission Eligibility Testing Agency (SAET Agency)",
    deadline: "31 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12",
    link: "https://gform"
  },
  {
    name: "Digital Bharati Covid Scholarship 2024",
    provider: "Digital Bharati",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Kerala E Grantz Scholarship 2024",
    provider: "E Grantz, Government Of Kerala",
    deadline: "15 November",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Gurukripa National Scholarship Exam For Undergraduate Students",
    provider: "Gurukripa Career Institute Pvt Ltd",
    deadline: "29 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Special Free Scholarship 2024",
    provider: "Dr O. P. Bhalla Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Advaita Bodhi Foundation Scholarship 2024",
    provider: "Advaita Bodhi Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "PM Yasasvi Pre And Post Matric Scholarship For Sikkim 2024",
    provider: "Government Of India",
    deadline: "10 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Umbrella Meghalaya Scholarship 2024",
    provider: "Government Of Meghalaya",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Sainik School Scholarship Scheme Himachal Pradesh",
    provider: "The Department Of Higher Education, Himachal Pradesh",
    deadline: "15 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "All India Engineering Entrance Scholarship Examination 2024",
    provider: "Scholarship and Admission Eligibility Testing Agency (SAET Agency)",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12",
    link: "https://gform"
  },
  {
    name: "MENIIT Talent Search Examination Scholarship 2024",
    provider: "MENIIT MADE EASY Group",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Karnataka Prize Money Scholarship 2024",
    provider: "Government Of Karnataka",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12, Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "National Income And Merit Based Scholarship Scheme 2024",
    provider: "The Ministry of Education, Government of India",
    deadline: "05 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "LSFI Scholarship 2024",
    provider: "Life Science Foundation India",
    deadline: "10 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Bachelors, Masters, PHD, Post Doctoral",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship For OBC EBC And DNT Students Haryana 2024",
    provider: "Government Of Haryana",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Medical, Bachelors, Masters, PHD",
    link: "https://gform"
  },
  {
    name: "Mukhya Mantri Vidyarthi Kalyan Yojana Himachal Pradesh 2024",
    provider: "The Department of Education, Government of India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Karnataka State Post Matric Scholarship 2024",
    provider: "Government Of Karnataka",
    deadline: "01 January",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Career Development Fresh And Renewal Scholarship 2024",
    provider: "Sakal India Foundation",
    deadline: "15 February",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Physics Wallah PW Scholarship Test 2024",
    provider: "Physics Wallah",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Karnataka Labour Children Scholarship 2024",
    provider: "Labour Welfare Board Karntaka",
    deadline: "05 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, ITI, Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "NSDL Shiksha Sahyog Scholarship 2024",
    provider: "National Securities Depository Ltd.",
    deadline: "12 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, PG-Diploma, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Srujanavani Scholarship 2024",
    provider: "Srujanavani Association",
    deadline: "10 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Petronet Top 10 scholarship 2024",
    provider: "Petronet LNG Ltd.",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 12",
    link: "https://gform"
  },
  {
    name: "Biju Yuva Sashaktikaran Yojana Laptop Assistance Scheme For Meritorious Students 2024",
    provider: "Government Of Odisha",
    deadline: "23 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12",
    link: "https://gform"
  },
  {
    name: "Nirman Shramik Kalyan Yojana Scholarship For Children Of Construction Workers 2024",
    provider: "Government Of Odisha",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Padala Charitable Trust Scholarship 2024",
    provider: "Padala Charitable Trust",
    deadline: "20 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Goa Students With Disabilities Scholarship 2024",
    provider: "The Department for Empowerment of Persons with Disabilities, Government of Goa",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Vidya Deevige Scholarship 2024",
    provider: "Bunts’ Sangha Bangalore",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Diploma, Engineering",
    link: "https://gform"
  },
  {
    name: "Dr Ambedkar Post Matric Scholarship For EBC Students Andaman And Nicobar 2024",
    provider: "Government Of Andaman Nicobar",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "PM Yasasvi Pre And Post Matric Scholarship For OBC Students Andaman And Nicobar 2024",
    provider: "The Ministry of Social Justice & Empowerment, India",
    deadline: "30 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pre And Post Matric Scholarship For SC And ST Students Meghalaya",
    provider: "The Department of Education, Government of Meghalaya.",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship For SC And OBC Students Manipur 2024",
    provider: "The Ministry of Social Justice & Empowerment, Govt. of India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Aikyashree West Bengal State Scholarship 2024",
    provider: "The West Bengal Minorities’ Development & Finance Corporation",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "National Level Scholarship Exam 2024",
    provider: "Swadhayay Bharat Foundation",
    deadline: "10 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "JK Lakshmi Vidya Fresh And Renewal Scholarship 2024",
    provider: "JK Lakshmi Cement Limited",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, ITI, Engineering",
    link: "https://gform"
  },
  {
    name: "GSB Sabha Education Merit Scholarship 2024",
    provider: "Gowd Saraswat Brahman Sabha, Mumbai",
    deadline: "04 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Vidyanidhi And Higher Education Scholarship 2024",
    provider: "Gowd Saraswat Brahman Sabha, Mumbai",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "H And P Mahindrakar Charitable Trust Scholarship 2024",
    provider: "Shri Hanamantrao & Smt Parvatibai Mahindrakar Charitable Trust",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Himachal Pradesh Scholarship For Disabled Students 2024",
    provider: "Government Of Himachal Pradesh",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Help The Blind Foundation Scholarship 2024",
    provider: "Help The Blind Foundation",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Jilla Merit Award 2024",
    provider: "Government Of Kerala",
    deadline: "26 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, ITI, Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "PM Yasasvi Post Matric Scholarship For EBC And OBC Students DNHDD 2024",
    provider: "The Ministry of Social Justice & Empowerment, India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship To SC And ST Students DNHDD 2024",
    provider: "The Ministry Of Social Justice and Empowerment, India.",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "PM YASASVI Post Matric Scholarship For OBC EBC And DNT Students Chandigarh 2024",
    provider: "The Ministry of Social Justice & Empowerment, Government of India",
    deadline: "15 November",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship For Transgender Students Chandigarh 2024",
    provider: "Government Of Chandigarh",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship For SC Chandigarh 2024",
    provider: "The Ministry of Social Justice and Empowerment, India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pre And Post Matric Scholarship To SC ST And OBC Students Assam 2024",
    provider: "The Ministry of Tribal Affairs, India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship For ST Students Goa 2024",
    provider: "The Department of Tribal Welfare, Govt. Of Goa",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Schaeffler India Social Innovator Fellowship 2024",
    provider: "Schaeffler India",
    deadline: "15 August",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Kalki Krishnamurthy Memorial Trust Scholarship 2024",
    provider: "Kalki Krishnamurthy Memorial Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Masters",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship For SC Students Puducherry 2024",
    provider: "Government Of Puducherry",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship For ST Students Puducherry 2024",
    provider: "Government Of India",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Opportunity Cost To Parents Of SC Girl Students Scholarship Puducherry 2024",
    provider: "Government of Puducherry",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship For OBC EBC And DNT Students 2024",
    provider: "The Ministry Of Social Justice and Empowerment, Himachala Pradesh",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, ITI, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship Scheme For ST Students 2024",
    provider: "Government Of India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors, Others",
    link: "https://gform"
  },
  {
    name: "Kerala Snehapoorvam Scholarship 2024",
    provider: "Kerala Social Security Mission (KSSM)",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Swami Vivekananda Merit Cum Means Scholarship 2024",
    provider: "Govenrment Of West Bengal",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Yashasvi Women Education And Skill Development Scheme Scholarship 2024",
    provider: "JSP Foundation",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "SMRATA TRUST SCHOLARSHIP 2024",
    provider: "SMRATA TRUST",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Dr Ambedkar Medhavi Chhattar Sanshodhit Yojna 2024",
    provider: "Government Of Haryana",
    deadline: "10 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Engineering, Medical, Professional courses",
    link: "https://gform"
  },
  {
    name: "Muskaan Scholarship 2024",
    provider: "Valvoline Cummins Pvt Ltd",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "ISKCON GITA SCHOLARSHIP TEST 2024",
    provider: "ISKCON",
    deadline: "02 August",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "NCPEDP Bajaj Finserv Scholarship For Students With Disabilities 2024",
    provider: "Bajaj Finserv With NCPEDP",
    deadline: "05 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Nilaya Scholarship 2024",
    provider: "Nilaya Foundation",
    deadline: "13 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Diploma, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Pre And Post Matric Scholarship For Education To The Wards Of Beedi Cine IOMC LSDM Workers 2024",
    provider: "The Department Of Labour & Employment, Govt. Of India",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Central Sector Scholarship Of Top Class Education For Post Matric Students 2024",
    provider: "The Department Of Social Justice & Empowerment, Govt. Of India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "National Means Cum Merit Scholarship 2024",
    provider: "Government Of India",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Top Class Education For Students With Disabilities 2024",
    provider: "Department Of Empowerment Of Person With Disabilities, Govt. Of India",
    deadline: "15 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pre And Post Matric Scholarship For Person With Disabilities 2024",
    provider: "Department Of Empowerment Of Person With Disabilities Govt. Of India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pre Matric And Simon Sing Horo Special Post Matric Scholarship 2024",
    provider: "Tea Tribes and Adivasi Welfare Department Assam",
    deadline: "15 August",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "WomensLeaders India Fellowship 2024",
    provider: "Reliance Foundation",
    deadline: "28 July",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Sunil Dutt Scholarship 2024",
    provider: "Nargis Dutt Foundation",
    deadline: "15 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Medical, Masters",
    link: "https://gform"
  },
  {
    name: "Banishree Scholarship 2024",
    provider: "Government Of Odisha",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Help A Child Scholarship 2024",
    provider: "Somaiya Vidyavihar Trust & Godavari Biorefineries Ltd",
    deadline: "18 July",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Alambana Foundation Scholarship 2024",
    provider: "Alambana Foundation",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Motion Open Scholarship Test 2024",
    provider: "Motion Education Foundation",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering",
    link: "https://gform"
  },
  {
    name: "Samoon Foundation Scholarship",
    provider: "Samoon Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "YRP Foundation Scholarship",
    provider: "YRP Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Ayaan Foundation Scholarship 2024",
    provider: "Ayaan Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering, Medical, Others",
    link: "https://gform"
  },
  {
    name: "Central Sanskrit University Scholarship 2024",
    provider: "Central Sanskrit University Delhi",
    deadline: "15 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters, PHD",
    link: "https://gform"
  },
  {
    name: "Bombay Community Public Trust Scholarship 2024",
    provider: "Bombay Community Public Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Arya Pragati Scholarship 2024",
    provider: "Pragati Organization",
    deadline: "15 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12",
    link: "https://gform"
  },
  {
    name: "MESCO Trust Scholarship 2024",
    provider: "MESCO Trust",
    deadline: "15 July",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Shamanur Shivashankarappa Scholarship 2024",
    provider: "Dr Shamanur Shivashankarappa Janakalyana Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, ITI, Diploma, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Kerala Vidyakiranam Scholarship 2024",
    provider: "Government Of Kerala",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "PREF Merit Scholarship 2024",
    provider: "Pradeep Richa Educare Foundation",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Kotak Junior Scholarship 2024",
    provider: "Kotak Education Foundation",
    deadline: "05 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Shree Jadva Meghji Varsani Education Trust Scholarship 2024",
    provider: "Shree Jadva Meghji Varsani Education Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Diploma, Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "Keki Putlan Mehta Benevolent Trust Scholarship 2024",
    provider: "Keki Putlan Mehta Benevolent Trust",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "National Scholarship Exam 2024",
    provider: "NICE Foundation",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "HETS STAR Scholarship Test",
    provider: "Orage Digital Pvt. Ltd",
    deadline: "10 June",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12",
    link: "https://gform"
  },
  {
    name: "Arcelor Mittal Nippon Steel Beti Padhao Fresh And Renewal Scholarship 2024",
    provider: "ArcelorMittal Nippon Steel India",
    deadline: "31 January",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "DLF Scholarship 2024",
    provider: "DLF CARES NURTURING LIVES",
    deadline: "16 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "GSF Shiksha Avsar Scholarship 2024",
    provider: "Global Schools Foundation",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Gold Heart Foundation Siragugal Scholarship",
    provider: "Gold Heart Foundation",
    deadline: "01 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Engineering",
    link: "https://gform"
  },
  {
    name: "Mahesh Foundation Scholarship",
    provider: "Mahesh Foundation",
    deadline: "29 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Aaghaz Foundation Scholarship",
    provider: "Aaghaz Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Geethanand Foundation Scholarship",
    provider: "Geethanand Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Dhrithi Foundation Fresh And Renewal Scholarship",
    provider: "Dhrithi Foundation",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Nirmaan Scholarship 2024",
    provider: "Nirmaan Organization",
    deadline: "20 November",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Engineering, Bachelors, Masters, Others",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship For Persons With Disability 2024",
    provider: "Government Of Maharashtra",
    deadline: "15 June",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship To VJNT Students Scholarship 2024",
    provider: "Government Of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship To SBC Students Scholarship 2024",
    provider: "Government Of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors, Masters, PHD",
    link: "https://gform"
  },
  {
    name: "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship 2024",
    provider: "Government Of Maharashtra",
    deadline: "15 June",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Nisvartha Foundation Scholarship 2024",
    provider: "Nisvartha Foundation",
    deadline: "25 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Brahmana Seva Trust Scholarship",
    provider: "Brahmana Seva Trust",
    deadline: "15 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Sri Vidya Charitable Scholarship",
    provider: "Sri Vidya Charitable Organisation",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Vidyadhan Scholarship 2024",
    provider: "Sarojini Damodaran Foundation",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Sambhavam IAS Coaching Scholarship 2024",
    provider: "Diya Delhi & Sood Charity Foundation",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Samuel Foundation Scholarship",
    provider: "The Samuel Foundation",
    deadline: "19 June",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Kerala Plus 1 Scholarship",
    provider: "Sarojini Damodaran Foundation",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Surya Scholarship Scheme 2024",
    provider: "Surya Foundation",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Puja Educational And Welfare Trust Scholarship",
    provider: "Puja Educational And Welfare Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12",
    link: "https://gform"
  },
  {
    name: "Sarada Kalyan Bhandar Scholarship",
    provider: "Sarada Kalyan Bhandar Trust",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "Veda Foundation Scholarship",
    provider: "Veda Foundation",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, ITI, Diploma, Bachelors, Masters, Others",
    link: "https://gform"
  },
  {
    name: "Bhumi Cognizant Scholarship Program",
    provider: "Bhumi NGO & Cognizant",
    deadline: "14 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, ITI, Diploma, Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Uttar Pradesh 11th Program Scholarship",
    provider: "Sarojini Damodaran Foundation",
    deadline: "15 June",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Everest Scholarship",
    provider: "Team Everest NGO",
    deadline: "06 July",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "MahaDBT Scholarship",
    provider: "Government of Maharashtra",
    deadline: "15 June",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Government Vidyaniketan Scholarship 2024",
    provider: "Government Of Maharashtra",
    deadline: "15 June",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Bihar Post Matric Scholarship 2024",
    provider: "Government Of Bihar",
    deadline: "15 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Telangana Intermediate Scholarship",
    provider: "Sarojini Damodaran Foundation",
    deadline: "16 June",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Student Shiksha Scholarship 2024",
    provider: "Student Shiksha Foundation",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12",
    link: "https://gform"
  },
  {
    name: "Virat Kohli Foundation Scholarship",
    provider: "Virat Kohli Foundation",
    deadline: "30 May",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "AshaRatna Scholarship",
    provider: "Ratna Nidhi Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship",
    provider: "Government Of Maharashtra",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Assistance To Meritorious Students Scholarship 2024",
    provider: "Government Of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Bright Academy Computer Education Scholarship",
    provider: "Full Moon Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Bihar Plus 2 Scholarship",
    provider: "Sarojini Damodaran Foundation",
    deadline: "15 June",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Bihar Plus-2 Scholarship",
    provider: "Sarojini Damodaran Foundation",
    deadline: "15 April",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Brahmin Educational Service Trust Scholarship",
    provider: "Brahmin Educational Service Trust",
    deadline: "03 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Andhra Pradesh Intermediate Scholarship",
    provider: "Sarojini Damodaran Foundation",
    deadline: "25 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Pratigya Scholarship",
    provider: "Pratigya Educational Initiative Society",
    deadline: "02 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Hand In Hand Indias Shiksha Mitra Scholarship 2024",
    provider: "Hand in Hand India NGO",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "HOPE Scholarship",
    provider: "CETA GALAXY CHARITABLE TRUST",
    deadline: "15 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Sudha Opportunity Scholarship",
    provider: "Pragati Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Zakat Scholarship",
    provider: "West Bengal Zakat Fund",
    deadline: "10 June",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "SAMBHAVAM IAS Coaching Scholarship",
    provider: "Sood Charity Foundation",
    deadline: "21 April",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Kiran Foundation Scholarship",
    provider: "Kiran Foundation",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Jains India Trust Scholarship 2024",
    provider: "Jains India Trust",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Smile Scholarship",
    provider: "Lily Foundation",
    deadline: "30 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Gomantak Maratha Samaj Scholarship",
    provider: "Gomantak Maratha Samaj Goa",
    deadline: "08 August",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Advaita Bodhi Foundation Scholarship",
    provider: "Advaita Bodhi Foundation",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Nisvartha Foundation Scholarship",
    provider: "Nisvartha Foundation",
    deadline: "10 June",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Amanat Foundation Trust Scholarship",
    provider: "Amanat Foundation Trust",
    deadline: "20 May",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Sewa Fellowship",
    provider: "Sewa International",
    deadline: "14 April",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "MSR Sahayata Scholarship",
    provider: "MSR Charitable Trust",
    deadline: "18 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Meet Charitable Trust Scholarship",
    provider: "Meet Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Nehru Sidhant Kender Trust Merit Scholarship",
    provider: "NEHRU SIDHANT KENDER TRUST",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Chaitanya Charitable Trust Scholarship",
    provider: "Chaitanya Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Arya Vysya Charitable And Education Foundation Scholarship",
    provider: "Arya Vysya Charitable And Education Foundation",
    deadline: "13 November",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Success Educational Trust Scholarship",
    provider: "Success Educational Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Mega Vedantu Scholarship Admission Test",
    provider: "Vedantu Innovations Private Limited",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "HWA Scholarship",
    provider: "HWA Charitable Foundation",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "iQuanta CAT Scholarship Test",
    provider: "Indrajeet’s Iquanta EDU Services PVT LTD",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Suman Ramesh Tulsiani Charitable Trust Scholarship",
    provider: "Suman Ramesh Tulsiani Charitable Trust",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Goonj Setu Fellowship",
    provider: "Goonj NGO Trust",
    deadline: "22 April",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "IIP Foundation Scholarship",
    provider: "IIP Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12",
    link: "https://gform"
  },
  {
    name: "Trust Suvas Scholarship",
    provider: "Suvas Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Rahbar Foundation Scholarship",
    provider: "Rahbar Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Alba Foundation Scholarship",
    provider: "Alba Foundation",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Hand In Hand Indias Shiksha Mitra Scholarship",
    provider: "Hand in Hand India NGO",
    deadline: "18 April",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, ITI, Diploma, PG-Diploma, Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "R NET Scholarship Cum Entrance Test",
    provider: "Reliable Institute Kota",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Yashasvi Women Education And Skill Development Scheme",
    provider: "JSP Foundation",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Vedantu Scholarship Test",
    provider: "Vedantu Innovations Pvt. Limited",
    deadline: "10 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Double Hand NGO Scholarship",
    provider: "Double Hand NGO",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Life Foundation Scholarship",
    provider: "Life Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Ashok Leyland And TVS Scholarship",
    provider: "Ashok Leyland & TVS",
    deadline: "20 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Nilaya Scholarship",
    provider: "Nilaya Foundation",
    deadline: "06 June",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Diploma, Engineering",
    link: "https://gform"
  },
  {
    name: "Hongirana Scholarship",
    provider: "Hongirana Charitable Trust",
    deadline: "15 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "Sarthak Welfare Foundation Scholarship",
    provider: "Sarthak Welfare Foundation",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "SRI Chaitanya Scholarship Test",
    provider: "Sri Chaitanya Education Institutions",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "MBRDI Education Scholarship",
    provider: "Mercedes Benz Research & Development India",
    deadline: "22 October",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pragnya Scholarship",
    provider: "EDUCAIT Na Hi Jnanena Sadrusham Trust",
    deadline: "15 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Saksham Scholarship For Drivers Children",
    provider: "Mahindra Finance",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "New Vardhaman Educational Trust Scholarship",
    provider: "Vardhaman Educational Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Mirae Asset Foundation Scholarship",
    provider: "Mirae Asset Foundation",
    deadline: "26 June",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Deepam Scholarship",
    provider: "Deepam Trust",
    deadline: "05 January",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Laxmi Charities Scholarship 2024",
    provider: "Laxmi Charities",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Reimbursement Of Tuition Fee For SC ST OBC Minorities For Delhi",
    provider: "Government Of India",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Shriram Automall Education Scholarship",
    provider: "Shriram Automall India Limited",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Instant Admission Cum Scholarship Test",
    provider: "Aakash Educational Services Limited",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "VidyaSamunnathi Scholarship",
    provider: "Kerala State Welfare Corporation for Forward Communities Ltd",
    deadline: "07 June",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Sanskriti Madhobi Chatterji Memorial Fellowship",
    provider: "Sanskriti Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Harsh And Payal Hada Foundation Scholarship",
    provider: "Harsh and Payal Hada Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering, Medical, Bachelors, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "Merit Scholarship For EBC Students 2024",
    provider: "Government Of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Open Merit Scholarship 2024",
    provider: "Government of Maharashtra",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "PBISE Pre-Board International Scholarship Examination",
    provider: "BITS-Pilani Dubai Campus",
    deadline: "20 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12",
    link: "https://gform"
  },
  {
    name: "ADTU CST Common Scholarship Exam",
    provider: "Assam Down Town University",
    deadline: "27 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "S J Foundation Scholarship",
    provider: "Sitaram Jindal Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "SMJV General Scholarship",
    provider: "Shri Mahavira Jaina Vidyalaya",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "NC Parikh Family Charitable Trust Gujarati Scholarship",
    provider: "Green Acres Academy",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pragati Scholarship",
    provider: "Epsilon Foundation",
    deadline: "17 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Nirman Shramik Kalyan Yojana",
    provider: "Labour & ESI Department Of Odisha",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "OM Charitable Trust Educational Scholarship",
    provider: "OM Charitable Trust",
    deadline: "15 November",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Menda Foundation Scholarship",
    provider: "Menda Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Ohm Jyoti Trust Scholarship",
    provider: "Ohm Jyoti Education Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12, Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Lalit Kala Akademi Scholarship",
    provider: "Lalit Kala Akademy",
    deadline: "15 April",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "All India Medical Scholarship Entrance Test",
    provider: "AIMSET Educational Foundation",
    deadline: "28 April",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12",
    link: "https://gform"
  },
  {
    name: "Nilam Patel Bahushrut Foundation Scholarship 2024",
    provider: "Nilam Patel Bahushrut Foundation",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Madhya Pradesh Khiladi Protsahan Yojana",
    provider: "Government of Madhya Pradesh",
    deadline: "21 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Padala Charitable Trust Scholarship",
    provider: "Padala Charitable Trust",
    deadline: "30 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "All India Youth Scholarship Entrance Examination",
    provider: "AIYSEE",
    deadline: "20 April",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12",
    link: "https://gform"
  },
  {
    name: "Odisha State Scholarship",
    provider: "Government of Odisha",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "Haryan Post Matric Scholarship",
    provider: "Government of Haryana",
    deadline: "19 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Anjum Chopra Scholarship",
    provider: "Push Sports",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Merit Scholarships for Economically Backward Class Students",
    provider: "Maharashtra Government",
    deadline: "15 June",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "JC Bose Fellowship",
    provider: "Science & Engineering Research Board",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship To SBC Students",
    provider: "Government of Maharashtra",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors, Masters, PHD",
    link: "https://gform"
  },
  {
    name: "Rajarshri Chhatrapati Shahu Maharaj Merit Scholarship 2024",
    provider: "Government Of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Sitaram Jindal Foundation Scholarship",
    provider: "Sitaram Jindal Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  }
];

export default function Class12Scholarships() {
  const [visibleCount, setVisibleCount] = useState(12); // Initial scholarships shown (5)
  const [filterCriteria, setFilterCriteria] = useState('');
  const [filteredScholarships, setFilteredScholarships] = useState(scholarships);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterCriteria(value);

    if (value === 'amount') {
      setFilteredScholarships([ ...filteredScholarships.sort((a, b) => {
        const aAmount = parseInt(a.amount.replace(/[^\d]/g, '')) || 0;
        const bAmount = parseInt(b.amount.replace(/[^\d]/g, '')) || 0;
        return bAmount - aAmount;
      })]);
    } else if (value === 'date') {
      setFilteredScholarships([ ...filteredScholarships.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()) ]);
    } else {
      setFilteredScholarships(scholarships); // Reset to original order
    }
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12); // Load 3 more scholarships at a time
  };

  const shouldShowLoadMore = scholarships.length > visibleCount;

  return (
    <> 
    <Navbar />
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: 'bold',
            color: '#222',
          }}
        >
          Top Scholarships for Class 12 Students
        </h1>

        <p
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            color: '#555',
            fontSize: '1.1rem',
          }}
        >
          Discover government and private scholarships you can apply for after Class 12 to support your education.
        </p>

        {/* Sort By Dropdown */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2.5rem',
            justifyContent: 'center',
          }}
        >
          <select
            style={selectStyle}
            onChange={handleFilterChange}
            value={filterCriteria}
          >
            <option value="">Sort By</option>
            <option value="amount">Amount</option>
            <option value="date">Last Date</option>
          </select>
        </div>

        {/* Scholarships List */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredScholarships.slice(0, visibleCount).map((scholarship, index) => (
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
                {scholarship.name}
              </h3>
              <p style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#555' }}>
                <strong>Provider:</strong> {scholarship.provider}
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: '#555' }}>
                <strong>Eligibility:</strong> {scholarship.eligibility}
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#0070f3' }}>
                <strong>Amount:</strong> {scholarship.amount}
              </p>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#333' }}>
                <strong>Last Date:</strong> {scholarship.deadline}
              </p>
              <Link
                href={scholarship.link}
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

        {/* Load More Button */}
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
