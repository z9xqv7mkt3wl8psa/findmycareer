'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const scholarships = [
  {
    name: "ASAT Maha Avasar Scholarship Admission Test 2025",
    provider: "ALLEN Kota",
    deadline: "05-Apr",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Gurukripa Scholarship Cum Admission Test 2025",
    provider: "Gurukripa Career Institute",
    deadline: "05-Apr",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Physics Wallah Scholarship Test 2025",
    provider: "PWSAT",
    deadline: "25-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "NHPC Sports Scholarship 2025",
    provider: "National Hydroelectric Power Corporation (NHPC)",
    deadline: "26-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Udhayam Charitable Trust Scholarship 2025",
    provider: "Udhayam Charitable Trust",
    deadline: "31-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12",
    link: "https://gform"
  },
  {
    name: "Maharashtra Pre Matric Scholarship 2025",
    provider: "Government Of Maharashtra",
    deadline: "31-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Maharshi Vithhal Ramaji Shinde Scholarship 2025",
    provider: "Government Of Maharashtra",
    deadline: "31-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Akash Instant Admission Cum Scholarship Test 2025",
    provider: "Akash Medical And JEE Foundation",
    deadline: "10-Apr",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Maharashtra Post Matric Scholarship For Persons With Disability",
    provider: "Government Of Maharashtra",
    deadline: "31-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Maharashtra Post Matric Scholarship 2025",
    provider: "Government Of Maharashtra",
    deadline: "31-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pre Matric Scholarship To Children of Engaged in Unclean Occupation 2025",
    provider: "Government Of Maharashtra",
    deadline: "31-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "E Kalyan Jharkhand Scholarship 2024 25",
    provider: "Government Of Jharkhand",
    deadline: "20-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "JSW Umeed Scholarship 2025",
    provider: "JSW Foundation",
    deadline: "09-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "DLF Cares Education Scholarship 2025",
    provider: "DLF CARES NURTURING LIVES",
    deadline: "20-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Aikyashree Post Matric Fresh And Renewal Scholarship 2025",
    provider: "Government Of West Bengal",
    deadline: "28-Feb",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Abhyaas Scholarship Aptitude Test 2025",
    provider: "Abhyaas",
    deadline: "28-Feb",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Karnataka Pre Matric Scholarship 2025",
    provider: "Government Of Karnataka",
    deadline: "31-Jan",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Dronacharya 2 Diagnostic And Scholarship Exam 2025",
    provider: "FIITJEE",
    deadline: "05-Feb",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Gurukripa Scholarship Cum Admission Test",
    provider: "Gurukripa Career Institute",
    deadline: "07-Feb",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Dhaan Merit Scholarship 2025",
    provider: "Sourashtra Dhaan Organization",
    deadline: "28-Feb",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "Shree Patan Jain Mandal Annual Merit Prize 2024 25",
    provider: "Shree Patan Jain Mandal Mumbai",
    deadline: "20-Feb",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "National Information Technology Exam 2025",
    provider: "NICE Foundation",
    deadline: "31-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Chhattisgarh Post Matric Scholarship 2025",
    provider: "Government Of Chhattisgarh",
    deadline: "17-Feb",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "IIT Genius Scholarship Test 2025",
    provider: "FIITJEE",
    deadline: "05-Feb",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Shiksha Sahayog Scholarship 2025",
    provider: "Government Of Chhattisgarh",
    deadline: "31-Jan",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Vidvatta Scholarship 2025",
    provider: "KC Pullaiah Foundation",
    deadline: "28-Feb",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Karnataka Post Matric Scholarship 2025",
    provider: "Government Of Karnataka",
    deadline: "10-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Karnataka Labour Children Scholarship 2025",
    provider: "Labour Welfare Board Karntaka",
    deadline: "31-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Kanthari Scholarship For Social Change 2025",
    provider: "Braille Without Borders Charitable Trust",
    deadline: "10-Jan",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Rabiya Masood Foundation Scholarship 2025",
    provider: "Rabiya Masood Foundation",
    deadline: "31-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "VidyaSamunnathi Scholarship 2025",
    provider: "Kerala State Welfare Corporation for Forward Communities Ltd",
    deadline: "31-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Odisha Pre And Post Matric Scholarship 2025",
    provider: "Government Of Odisha",
    deadline: "15-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "KSTWWFB Scholarship And Laptop Scheme",
    provider: "KSTWWFB, Govt. Of Kerala",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "LPU Scholarship 2025",
    provider: "LPU University",
    deadline: "25-Jan",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Oberoi Educational Trust Scholarship",
    provider: "Oberoi Educational Trust",
    deadline: "30-Jan",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Goa Merit Based Scholarship 2024",
    provider: "Government Of Goa",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12, Diploma",
    link: "https://gform"
  },
  {
    name: "National Means Cum Merit Scholarship 2025",
    provider: "Govenrment of India",
    deadline: "10-Jan",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "BC Jindal Vidya Scholarship 2024",
    provider: "Jindal India Thermal Power Ltd (JITPL)",
    deadline: "10-Jan",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Goa Pre Matric Scholarship 2024",
    provider: "The Directorate of Tribal Welfare, Goa",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Protean eGov Fresh And Renewal Scholarship 2024",
    provider: "Protean eGov Technologies Limited",
    deadline: "15-Jan",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Joseph Mundassery Scholarship 2024",
    provider: "The Department of Minority Welfare, Government of Kerala",
    deadline: "07-Jan",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Karunyathinte Deepthi Zweet Scholarship 2024",
    provider: "ZMART Foundation",
    deadline: "15-Jan",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "OPGC Pratibha Bruti Scholarship 2024",
    provider: "Odisha Power Generation Corporation (OPGC)",
    deadline: "15-Feb",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Bhoomi IAS Scholarship 2024",
    provider: "Bhoomi IAS",
    deadline: "05-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Bhoomi IAS Scholarship 2024",
    provider: "Bhoomi IAS",
    deadline: "05-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "D Y Uppar Educational And Social Foundation Merit Scholarship 2024",
    provider: "Shri D.Y Uppar Educational and Social Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12, Others",
    link: "https://gform"
  },
  {
    name: "Alvas Academic Scholarship Examination 2024",
    provider: "Alva’s Education Foundation",
    deadline: "20-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10",
    link: "https://gform"
  },
  {
    name: "Global Talent Search Scholarship Exam 2025",
    provider: "Global Study Point Career Institute",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "NTR GEST Girls Merit Scholarship Test 2025",
    provider: "NTR Junior & Degree College For Women",
    deadline: "04-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10",
    link: "https://gform"
  },
  {
    name: "Patni Education Trust Scholarship 2024",
    provider: "The Patni Education Trust",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "New Step Scholarship Test 2024",
    provider: "New Step",
    deadline: "20-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "ALLEN SHARP Scholarship Test 2024",
    provider: "ALLEN Career Institute Pvt. Ltd",
    deadline: "01-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11",
    link: "https://gform"
  },
  {
    name: "Jodhpur Association Scholarship 2024",
    provider: "Jodhpur Association Mumbai",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Peace Of Mind Foundation Scholarship 2024",
    provider: "Peace Of Mind Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Vinod Handa Scholarship 2024",
    provider: "Epsilon Carbon Pvt Ltd",
    deadline: "12-Jan",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "SAAKAAR Scholarship 2024",
    provider: "Tech Mahindra Ltd.",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Diploma, Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Education Scholarship Scheme For Army Personnel",
    provider: "ESSA",
    deadline: "15-Jan",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Diploma, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "VVT Scholarship Admission Test 2024",
    provider: "VVT Educational Services Pvt. Ltd.",
    deadline: "14-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Baal Vikas Foundation Scholarship 2024",
    provider: "Baal Vikas Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Habeeb Educare Scholarship 2024",
    provider: "MSF Kerala",
    deadline: "15-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "SUHRID MLA Scholarship 2024",
    provider: "Transformation & Development Department, Assam",
    deadline: "15-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Bansal Open Opportunity And Scholarship Test 2025",
    provider: "Bansal Classes Private Limited",
    deadline: "09-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Big Bang Edge Scholarship Test 2024",
    provider: "FIITJEE",
    deadline: "15-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11",
    link: "https://gform"
  },
  {
    name: "Lakshadweep Scholarship Scheme 2024",
    provider: "Government of India",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "BrightMinds Scholarship Test 2024",
    provider: "Lukmaan IAS",
    deadline: "14-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Nishkam Sewa Bharti Trust Scholarship 2024",
    provider: "Nishkam Sewa Bharti Trust",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "RICE Talent Scholarship Test 2024",
    provider: "RiceSmart",
    deadline: "14-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "UP Pre And Post Matric Scholarship 2024",
    provider: "The Ministry of Social Welfare, Government of Uttar Pradesh",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Sujnananidhi Scholarship 2024",
    provider: "Shri Kshetra Dharmasthala Rural Development Project, Dharmasthala",
    deadline: "31-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Extramarks Smart Scholarship Test 2024",
    provider: "Extramarks",
    deadline: "24-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Ruma Devi Gulab Ben Akshara Scholarship 2025",
    provider: "Ruma Devi Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Shri Kushal Guru Jain Charitable Trust Scholarship 2024",
    provider: "Shri Kushal Guru Jain Charitable Trust",
    deadline: "20-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Manav Rachna Scholarship Test 2024",
    provider: "Manav Rachna Vidyanatariksha Organisation (MRIS)",
    deadline: "15-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Guruji Education Foundation Scholarship 2024",
    provider: "Guruji Education Foundation",
    deadline: "30-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Shri Akhil Bharatvarshiya Sadhumargi Jain Sangh Scholarship 2024",
    provider: "Shri Akhil Bharatvarshiya Sadhumargi Jain Sangh",
    deadline: "30-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Karnataka Pre Matric Scholarship 2024",
    provider: "Government of Karnataka",
    deadline: "30-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Muslim Education Foundation Scholarship 2024",
    provider: "Muslim Education Foundation",
    deadline: "30-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Shri Samprada Singh Renewal Scholarship 2024",
    provider: "Alkem Foundation",
    deadline: "09-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Diploma, Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Gururayaru Foundation Scholarship 2024",
    provider: "Gururayaru Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Mercy Cops Charitable Trust Scholarship 2024",
    provider: "Mercy Cops Charitable Trust",
    deadline: "30-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Avasar Foundation Post Matric Scholarship 2024",
    provider: "Avasar Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "NTS National Talent Search Scholarship Exam 2024",
    provider: "Association of Muslim Professionals (AMP)",
    deadline: "30-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Dr Hodophile Foundation Scholarship 2024",
    provider: "Dr Hodophile Foundation",
    deadline: "30-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Energy Youth Foundation Free Scholarship Test 2024",
    provider: "Energy Youth Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12, Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "Yuva Unstoppable Scholarship 2024",
    provider: "Yuva Unstoppable",
    deadline: "30-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Sri Rag Foundation Scholarship 2024",
    provider: "Sri Rag Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Sachavi Charitable Trust Scholarship 2024",
    provider: "Sachavi Charitable Trust",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Gagan Bharari Shiksha Yojana Scheme 2024",
    provider: "Government Of Goa",
    deadline: "15-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "TALENTEX Scholarship Exam 2025",
    provider: "TALENTEX",
    deadline: "15-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Online Foundation Scholarship Test 2024",
    provider: "TIME Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Dr Kalams Mighty Minds Scholarship 2024",
    provider: "Mighty Me",
    deadline: "15-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Sunny Vinayak Nimhan Scholarship 2024",
    provider: "Sunny Vinayak Nimhan",
    deadline: "15-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Hindustan Olympiad Scholarship Exam 2024",
    provider: "Hindustan Olympiad",
    deadline: "20-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Aalayam Foundation Scholarship 2024",
    provider: "Aalayam Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "SBIF Asha Scholarship 2024",
    provider: "SBI Foundation",
    deadline: "15-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Sage IT Scholarship 2024",
    provider: "Sage IT",
    deadline: "29-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "VI Scholarship For Teachers 2024",
    provider: "Vodafone Idea Foundation",
    deadline: "25-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Santosh Academia Talent Scholarship Examination 2024",
    provider: "Santosh Academia",
    deadline: "26-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "E Kalyan Pre And Post Matric Scholarship 2024",
    provider: "Government Of Jharkhand",
    deadline: "30-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Bharathi Cement Fresh And Renewal Scholarship 2024",
    provider: "Bharathi Cement Corporation Private Limited (BCCPL)",
    deadline: "15-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, ITI, Diploma, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "I BAST Instant Byjus Aptitude And Scholarship Test 2024",
    provider: "Byju’s",
    deadline: "30-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Pre And Post matric National Scholarship 2024",
    provider: "Government Of India",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Digital Bharati Covid Scholarship 2024",
    provider: "Digital Bharati",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Kerala E Grantz Scholarship 2024",
    provider: "E Grantz, Government Of Kerala",
    deadline: "15-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Gurukripa National Scholarship Exam For Undergraduate Students",
    provider: "Gurukripa Career Institute Pvt Ltd",
    deadline: "29-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Special Free Scholarship 2024",
    provider: "Dr O. P. Bhalla Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Advaita Bodhi Foundation Scholarship 2024",
    provider: "Advaita Bodhi Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "PM Yasasvi Pre And Post Matric Scholarship For Sikkim 2024",
    provider: "Government Of India",
    deadline: "10-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Umbrella Meghalaya Scholarship 2024",
    provider: "Government Of Meghalaya",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Sainik School Scholarship Scheme Himachal Pradesh",
    provider: "The Department Of Higher Education, Himachal Pradesh",
    deadline: "15-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "MENIIT Talent Search Examination Scholarship 2024",
    provider: "MENIIT MADE EASY Group",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "National Income And Merit Based Scholarship Scheme 2024",
    provider: "The Ministry of Education, Government of India",
    deadline: "05-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Mukhya Mantri Vidyarthi Kalyan Yojana Himachal Pradesh 2024",
    provider: "The Department of Education, Government of India",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Karnataka State Post Matric Scholarship 2024",
    provider: "Government Of Karnataka",
    deadline: "01-Jan",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Physics Wallah PW Scholarship Test 2024",
    provider: "Physics Wallah",
    deadline: "30-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Karnataka Labour Children Scholarship 2024",
    provider: "Labour Welfare Board Karntaka",
    deadline: "05-Jan",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, ITI, Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "NSDL Shiksha Sahyog Scholarship 2024",
    provider: "National Securities Depository Ltd.",
    deadline: "12-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, PG-Diploma, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Petronet Top 10 scholarship 2024",
    provider: "Petronet LNG Ltd.",
    deadline: "30-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 12",
    link: "https://gform"
  },
  {
    name: "Nirman Shramik Kalyan Yojana Scholarship For Children Of Construction Workers 2024",
    provider: "Government Of Odisha",
    deadline: "30-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Goa Students With Disabilities Scholarship 2024",
    provider: "The Department for Empowerment of Persons with Disabilities, Government of Goa",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Vidya Deevige Scholarship 2024",
    provider: "Bunts’ Sangha Bangalore",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Diploma, Engineering",
    link: "https://gform"
  },
  {
    name: "Dr Ambedkar Post Matric Scholarship For EBC Students Andaman And Nicobar 2024",
    provider: "Government Of Andaman Nicobar",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "PM Yasasvi Pre And Post Matric Scholarship For OBC Students Andaman And Nicobar 2024",
    provider: "The Ministry of Social Justice & Empowerment, India",
    deadline: "30-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pre Matric Scholarship For Engaged In Occupations Involving Cleaning And Prone To Health Hazards Punjab 2024",
    provider: "The Department of Social Justice and Empowerment, India",
    deadline: "28-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Pre Matric Scholarship For SC Students Punjab 2024",
    provider: "The Department Of Education, Govt. Of Punjab",
    deadline: "28-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Pre And Post Matric Scholarship For SC And ST Students Meghalaya",
    provider: "The Department of Education, Government of Meghalaya.",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship For SC And OBC Students Manipur 2024",
    provider: "The Ministry of Social Justice & Empowerment, Govt. of India",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pre Matric Scholarship For SC And OBC Students Manipur 2024",
    provider: "The Ministry of Social Justice & Empowerment, Govt. of India",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Aikyashree West Bengal State Scholarship 2024",
    provider: "The West Bengal Minorities’ Development & Finance Corporation",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "National Level Scholarship Exam 2024",
    provider: "Swadhayay Bharat Foundation",
    deadline: "10-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "JK Lakshmi Vidya Fresh And Renewal Scholarship 2024",
    provider: "JK Lakshmi Cement Limited",
    deadline: "30-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, ITI, Engineering",
    link: "https://gform"
  },
  {
    name: "GSB Sabha Education Merit Scholarship 2024",
    provider: "Gowd Saraswat Brahman Sabha, Mumbai",
    deadline: "04-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Vidyanidhi And Higher Education Scholarship 2024",
    provider: "Gowd Saraswat Brahman Sabha, Mumbai",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Himachal Pradesh Scholarship For Disabled Students 2024",
    provider: "Government Of Himachal Pradesh",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Virtual National Talent Search Scholarship Examination 2024",
    provider: "Motion Education Pvt. Ltd",
    deadline: "08-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10",
    link: "https://gform"
  },
  {
    name: "Muktis TSS Scholarship 2024",
    provider: "Mukti Development Society",
    deadline: "15-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Help The Blind Foundation Scholarship 2024",
    provider: "Help The Blind Foundation",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "PM Yasasvi Pre Matric Scholarship For EBC And OBC Students DNHDD 2024",
    provider: "The Ministry of Social Justice & Empowerment, India",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "PM Yasasvi Post Matric Scholarship For EBC And OBC Students DNHDD 2024",
    provider: "The Ministry of Social Justice & Empowerment, India",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pre Matric Scholarship To SC And ST Students DNHDD 2024",
    provider: "Government Of India",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship To SC And ST Students DNHDD 2024",
    provider: "The Ministry Of Social Justice and Empowerment, India.",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pre Matric Scholarship For SC Students Of Chandigarh 2024",
    provider: "The Ministry of Social Justice & Empowerment, India",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "PM YASASVI Post Matric Scholarship For OBC EBC And DNT Students Chandigarh 2024",
    provider: "The Ministry of Social Justice & Empowerment, Government of India",
    deadline: "15-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship For Transgender Students Chandigarh 2024",
    provider: "Government Of Chandigarh",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship For SC Chandigarh 2024",
    provider: "The Ministry of Social Justice and Empowerment, India",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "PM YASASVI Pre Matric Scholarship For OBC EBC And DNT Students Chandigarh 2024",
    provider: "The Ministry of Social Justice & Empowerment, Government of India",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Pre And Post Matric Scholarship To SC ST And OBC Students Assam 2024",
    provider: "The Ministry of Tribal Affairs, India",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pre Matric Scholarship For Needy ST Students Assam 2024",
    provider: "The Ministry of Tribal Affairs, Govt. Of Assam",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship For ST Students Goa 2024",
    provider: "The Department of Tribal Welfare, Govt. Of Goa",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pre Matric Scholarship For Needy ST Students Goa 2024",
    provider: "The Ministry of Tribal Affairs, Govt. Of Goa",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Schaeffler India Social Innovator Fellowship 2024",
    provider: "Schaeffler India",
    deadline: "15-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pre Matric Scholarship For SC Students Puducherry 2024",
    provider: "Government Of India",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Opportunity Cost To Parents Of SC Girl Students Scholarship Puducherry 2024",
    provider: "Government of Puducherry",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Pre Matric Scholarship For 6th To 10th SC Students Puducherry 2024",
    provider: "Government of Puducherry",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Pre Matric Scholarship For Needy ST Students Puducherry 2024",
    provider: "Government Of Puducherry",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Maharishi Balmiki Chatravriti Yojana 2024",
    provider: "The Department of Education, Himachal Pradesh",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10",
    link: "https://gform"
  },
  {
    name: "Pre Matric Scholarship Scheme For Guardians Engaged In Unclean Occupation 2024",
    provider: "Government Of India",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Pre Matric Scholarship Scheme For OBC EBC And DNT Students 2024",
    provider: "The Ministry of Social Justice & Empowerment, Government of India",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Pre Matric Scholarship Scheme For SC And ST Students 2024",
    provider: "The Ministry of Tribal Affairs, Government of India",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Kerala Snehapoorvam Scholarship 2024",
    provider: "Kerala Social Security Mission (KSSM)",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Swami Vivekananda Merit Cum Means Scholarship 2024",
    provider: "Govenrment Of West Bengal",
    deadline: "31-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Blink Scholarship 2024",
    provider: "BlinkScholar Company",
    deadline: "27-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Narayana Scholastic Aptitude Test 2024",
    provider: "Narayana Foundation",
    deadline: "30-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11",
    link: "https://gform"
  },
  {
    name: "Yashasvi Women Education And Skill Development Scheme Scholarship 2024",
    provider: "JSP Foundation",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "SMRATA TRUST SCHOLARSHIP 2024",
    provider: "SMRATA TRUST",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Muskaan Scholarship 2024",
    provider: "Valvoline Cummins Pvt Ltd",
    deadline: "31-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "ISKCON GITA SCHOLARSHIP TEST 2024",
    provider: "ISKCON",
    deadline: "02-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "NCPEDP Bajaj Finserv Scholarship For Students With Disabilities 2024",
    provider: "Bajaj Finserv With NCPEDP",
    deadline: "05-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Nilaya Scholarship 2024",
    provider: "Nilaya Foundation",
    deadline: "13-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Diploma, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Pre And Post Matric Scholarship For Education To The Wards Of Beedi Cine IOMC LSDM Workers 2024",
    provider: "The Department Of Labour & Employment, Govt. Of India",
    deadline: "30-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Central Sector Scholarship Of Top Class Education For Post Matric Students 2024",
    provider: "The Department Of Social Justice & Empowerment, Govt. Of India",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "National Means Cum Merit Scholarship 2024",
    provider: "Government Of India",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Top Class Education For Students With Disabilities 2024",
    provider: "Department Of Empowerment Of Person With Disabilities, Govt. Of India",
    deadline: "15-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pre And Post Matric Scholarship For Person With Disabilities 2024",
    provider: "Department Of Empowerment Of Person With Disabilities Govt. Of India",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pre Matric And Simon Sing Horo Special Post Matric Scholarship 2024",
    provider: "Tea Tribes and Adivasi Welfare Department Assam",
    deadline: "15-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "WomensLeaders India Fellowship 2024",
    provider: "Reliance Foundation",
    deadline: "28-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Banishree Scholarship 2024",
    provider: "Government Of Odisha",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Help A Child Scholarship 2024",
    provider: "Somaiya Vidyavihar Trust & Godavari Biorefineries Ltd",
    deadline: "18-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Alambana Foundation Scholarship 2024",
    provider: "Alambana Foundation",
    deadline: "30-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Samoon Foundation Scholarship",
    provider: "Samoon Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "YRP Foundation Scholarship",
    provider: "YRP Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "ALLENs Talent Encouragement Scholarship Exam 2024",
    provider: "ALLEN Career Institute Pvt. Ltd.",
    deadline: "15-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Central Sanskrit University Scholarship 2024",
    provider: "Central Sanskrit University Delhi",
    deadline: "15-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters, PHD",
    link: "https://gform"
  },
  {
    name: "Friends Educational And Charitable Trust Scholarship 2024",
    provider: "Friends Educational And Charitable Trust",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "MESCO Trust Scholarship 2024",
    provider: "MESCO Trust",
    deadline: "15-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Kerala Vidyakiranam Scholarship 2024",
    provider: "Government Of Kerala",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "SOF Girl Child Scholarship 2024",
    provider: "Science Olympiad Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "All India Mathematics Genius Award Scholarship 2024",
    provider: "APJEDU",
    deadline: "31-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10",
    link: "https://gform"
  },
  {
    name: "Shree Jadva Meghji Varsani Education Trust Scholarship 2024",
    provider: "Shree Jadva Meghji Varsani Education Trust",
    deadline: "31-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Diploma, Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "Keki Putlan Mehta Benevolent Trust Scholarship 2024",
    provider: "Keki Putlan Mehta Benevolent Trust",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "National Scholarship Exam 2024",
    provider: "NICE Foundation",
    deadline: "30-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "Arcelor Mittal Nippon Steel Beti Padhao Fresh And Renewal Scholarship 2024",
    provider: "ArcelorMittal Nippon Steel India",
    deadline: "31-Jan",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "DLF Scholarship 2024",
    provider: "DLF CARES NURTURING LIVES",
    deadline: "16-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Gold Heart Foundation Siragugal Scholarship",
    provider: "Gold Heart Foundation",
    deadline: "01-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Engineering",
    link: "https://gform"
  },
  {
    name: "Mahesh Foundation Scholarship",
    provider: "Mahesh Foundation",
    deadline: "29-May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Aaghaz Foundation Scholarship",
    provider: "Aaghaz Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Geethanand Foundation Scholarship",
    provider: "Geethanand Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Vidyaanidhi Trust Scholarship",
    provider: "The Rotary Vidyaanidhi Trust",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Dhrithi Foundation Fresh And Renewal Scholarship",
    provider: "Dhrithi Foundation",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Nirmaan Scholarship 2024",
    provider: "Nirmaan Organization",
    deadline: "20-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Engineering, Bachelors, Masters, Others",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship For Persons With Disability 2024",
    provider: "Government Of Maharashtra",
    deadline: "15-Jun",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship To VJNT Students Scholarship 2024",
    provider: "Government Of Maharashtra",
    deadline: "31-Mar",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Brahmana Seva Trust Scholarship",
    provider: "Brahmana Seva Trust",
    deadline: "15-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Sri Vidya Charitable Scholarship",
    provider: "Sri Vidya Charitable Organisation",
    deadline: "30-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Sambhavam IAS Coaching Scholarship 2024",
    provider: "Diya Delhi & Sood Charity Foundation",
    deadline: "30-Jun",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Samuel Foundation Scholarship",
    provider: "The Samuel Foundation",
    deadline: "19-Jun",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Surya Scholarship Scheme 2024",
    provider: "Surya Foundation",
    deadline: "31-May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Puja Educational And Welfare Trust Scholarship",
    provider: "Puja Educational And Welfare Trust",
    deadline: "31-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12",
    link: "https://gform"
  },
  {
    name: "Everest Scholarship",
    provider: "Team Everest NGO",
    deadline: "06-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "MahaDBT Scholarship",
    provider: "Government of Maharashtra",
    deadline: "15-Jun",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Student Shiksha Scholarship 2024",
    provider: "Student Shiksha Foundation",
    deadline: "30-Jun",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12",
    link: "https://gform"
  },
  {
    name: "Virat Kohli Foundation Scholarship",
    provider: "Virat Kohli Foundation",
    deadline: "30-May",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "ISA Admission Cum Scholarship Test",
    provider: "Indo Science Academy ISA",
    deadline: "31-May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11",
    link: "https://gform"
  },
  {
    name: "AshaRatna Scholarship",
    provider: "Ratna Nidhi Charitable Trust",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Bright Academy Computer Education Scholarship",
    provider: "Full Moon Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Defence Services Academician Scholarship",
    provider: "SOF Science Olympiad Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "ISTSE Scholarship Exam",
    provider: "Educational Excellentia",
    deadline: "15-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Pratigya Scholarship",
    provider: "Pratigya Educational Initiative Society",
    deadline: "02-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Hand In Hand Indias Shiksha Mitra Scholarship 2024",
    provider: "Hand in Hand India NGO",
    deadline: "31-May",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "HOPE Scholarship",
    provider: "CETA GALAXY CHARITABLE TRUST",
    deadline: "15-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Sudha Opportunity Scholarship",
    provider: "Pragati Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Zakat Scholarship",
    provider: "West Bengal Zakat Fund",
    deadline: "10-Jun",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "SAMBHAVAM IAS Coaching Scholarship",
    provider: "Sood Charity Foundation",
    deadline: "21-Apr",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Kiran Foundation Scholarship",
    provider: "Kiran Foundation",
    deadline: "30-Apr",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Jains India Trust Scholarship 2024",
    provider: "Jains India Trust",
    deadline: "31-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Smile Scholarship",
    provider: "Lily Foundation",
    deadline: "30-May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Gomantak Maratha Samaj Scholarship",
    provider: "Gomantak Maratha Samaj Goa",
    deadline: "08-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Advaita Bodhi Foundation Scholarship",
    provider: "Advaita Bodhi Foundation",
    deadline: "31-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Amanat Foundation Trust Scholarship",
    provider: "Amanat Foundation Trust",
    deadline: "20-May",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Sewa Fellowship",
    provider: "Sewa International",
    deadline: "14-Apr",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Meet Charitable Trust Scholarship",
    provider: "Meet Charitable Trust",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Nehru Sidhant Kender Trust Merit Scholarship",
    provider: "NEHRU SIDHANT KENDER TRUST",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Chaitanya Charitable Trust Scholarship",
    provider: "Chaitanya Charitable Trust",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Bihar Merit Talent Examination Scholarship",
    provider: "HELPING EDUCATIONAL FOUNDATION",
    deadline: "30-Apr",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "Arya Vysya Charitable And Education Foundation Scholarship",
    provider: "Arya Vysya Charitable And Education Foundation",
    deadline: "13-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Success Educational Trust Scholarship",
    provider: "Success Educational Trust",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Mega Vedantu Scholarship Admission Test",
    provider: "Vedantu Innovations Private Limited",
    deadline: "31-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "HWA Scholarship",
    provider: "HWA Charitable Foundation",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "iQuanta CAT Scholarship Test",
    provider: "Indrajeet’s Iquanta EDU Services PVT LTD",
    deadline: "31-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Suman Ramesh Tulsiani Charitable Trust Scholarship",
    provider: "Suman Ramesh Tulsiani Charitable Trust",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Goonj Setu Fellowship",
    provider: "Goonj NGO Trust",
    deadline: "22-Apr",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "IIP Foundation Scholarship",
    provider: "IIP Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12",
    link: "https://gform"
  },
  {
    name: "Trust Suvas Scholarship",
    provider: "Suvas Charitable Trust",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Yashasvi Women Education And Skill Development Scheme",
    provider: "JSP Foundation",
    deadline: "30-Jun",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Vedantu Scholarship Test",
    provider: "Vedantu Innovations Pvt. Limited",
    deadline: "10-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Double Hand NGO Scholarship",
    provider: "Double Hand NGO",
    deadline: "31-May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Nilaya Scholarship",
    provider: "Nilaya Foundation",
    deadline: "06-Jun",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Diploma, Engineering",
    link: "https://gform"
  },
  {
    name: "Hongirana Scholarship",
    provider: "Hongirana Charitable Trust",
    deadline: "15-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "SRI Chaitanya Scholarship Test",
    provider: "Sri Chaitanya Education Institutions",
    deadline: "30-Sep",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "MBRDI Education Scholarship",
    provider: "Mercedes Benz Research & Development India",
    deadline: "22-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Pragnya Scholarship",
    provider: "EDUCAIT Na Hi Jnanena Sadrusham Trust",
    deadline: "15-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Saksham Scholarship For Drivers Children",
    provider: "Mahindra Finance",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "New Vardhaman Educational Trust Scholarship",
    provider: "Vardhaman Educational Trust",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Mirae Asset Foundation Scholarship",
    provider: "Mirae Asset Foundation",
    deadline: "26-Jun",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Deepam Scholarship",
    provider: "Deepam Trust",
    deadline: "05-Jan",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Ramaanya Talent Scholarship Examination",
    provider: "Ramayana Foundation",
    deadline: "10-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11",
    link: "https://gform"
  },
  {
    name: "Reimbursement Of Tuition Fee For SC ST OBC Minorities For Delhi",
    provider: "Government Of India",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Peacock Scholarship",
    provider: "Saraswati Global School",
    deadline: "31-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11",
    link: "https://gform"
  },
  {
    name: "Shriram Automall Education Scholarship",
    provider: "Shriram Automall India Limited",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Instant Admission Cum Scholarship Test",
    provider: "Aakash Educational Services Limited",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "VidyaSamunnathi Scholarship",
    provider: "Kerala State Welfare Corporation for Forward Communities Ltd",
    deadline: "07-Jun",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Sanskriti Madhobi Chatterji Memorial Fellowship",
    provider: "Sanskriti Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "S J Foundation Scholarship",
    provider: "Sitaram Jindal Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "NC Parikh Family Charitable Trust Gujarati Scholarship",
    provider: "Green Acres Academy",
    deadline: "31-Jul",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Nirman Shramik Kalyan Yojana",
    provider: "Labour & ESI Department Of Odisha",
    deadline: "31-May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "OM Charitable Trust Educational Scholarship",
    provider: "OM Charitable Trust",
    deadline: "15-Nov",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Menda Foundation Scholarship",
    provider: "Menda Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Lalit Kala Akademi Scholarship",
    provider: "Lalit Kala Akademy",
    deadline: "15-Apr",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Nilam Patel Bahushrut Foundation Scholarship 2024",
    provider: "Nilam Patel Bahushrut Foundation",
    deadline: "31-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Madhya Pradesh Khiladi Protsahan Yojana",
    provider: "Government of Madhya Pradesh",
    deadline: "21-Oct",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Odisha State Scholarship",
    provider: "Government of Odisha",
    deadline: "31-May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "Haryan Post Matric Scholarship",
    provider: "Government of Haryana",
    deadline: "19-Aug",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Anjum Chopra Scholarship",
    provider: "Push Sports",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "JC Bose Fellowship",
    provider: "Science & Engineering Research Board",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Sitaram Jindal Foundation Scholarship",
    provider: "Sitaram Jindal Foundation",
    deadline: "31-Dec",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  }
];

export default function Class10Scholarships() {
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
          Top Scholarships for Class 10 Students
        </h1>

        <p
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            color: '#555',
            fontSize: '1.1rem',
          }}
        >
          Discover government and private scholarships you can apply for after Class 10 to support your education.
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
