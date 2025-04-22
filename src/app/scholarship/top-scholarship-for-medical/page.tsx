'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const scholarships = [
  {
    name: "NHPC Sports Scholarship 2025",
    provider: "National Hydroelectric Power Corporation (NHPC)",
    deadline: "26 March",
    amount: "Click on \"View Details\"",
    eligibility: "All",
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
    name: "Titan Scholarship 2025",
    provider: "Titan Company Limited",
    deadline: "22 January",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors",
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
    name: "Mudita Foundation Scholarship 2025",
    provider: "Mudita Foundation",
    deadline: "31 January",
    amount: "Click on \"View Details\"",
    eligibility: "Medical, Masters",
    link: "https://gform"
  },
  {
    name: "Tata Steel Millennium Scholarships 2024 25",
    provider: "Tata Steel Ltd",
    deadline: "28 February",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Masters, Others",
    link: "https://gform"
  },
  {
    name: "BCPL PURE India Scholarship 2025",
    provider: "PURE India Trust",
    deadline: "25 February",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
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
    name: "MYSY Scholarship 2025",
    provider: "Govt of Gujarat",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Professional courses",
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
    name: "Danish Professional Educational Scholarship 2024 25",
    provider: "Danish Education Trust",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Masters",
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
    name: "Mother Teresa Scholarship 2024",
    provider: "Government Of Kerala",
    deadline: "17 January",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Medical",
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
    name: "Priyadarshni Academy Scholarship 2025",
    provider: "Priyadarshni Academy",
    deadline: "15 February",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Home Nursing Scholarship Scheme 2024",
    provider: "The Directorate of Tribal Welfare, Goa",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
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
    name: "Protean eGov Fresh And Renewal Scholarship 2024",
    provider: "Protean eGov Technologies Limited",
    deadline: "15 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Engineering, Medical, Bachelors, Masters",
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
    name: "Kerala Ayurveda Academy Scholarship 2024",
    provider: "Kerala Ayurveda Academy",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
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
    name: "Kaundinya Education Trust Scholarship 2024",
    provider: "Kaundinya Education Trust",
    deadline: "07 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Masters, PHD",
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
    name: "Jodhpur Association Scholarship 2024",
    provider: "Jodhpur Association Mumbai",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Rahnuma Educational Scholarship 2024",
    provider: "Rahnuma Welfare Society",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "MAHER Fresh And Renewal Scholarship 2024",
    provider: "Meenakshi Academy of Higher Education and Research (MAHER)",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Medical, Bachelors, Masters",
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
    name: "Moeen Memorial Scholarship 2024",
    provider: "Moeen Memorial Welfare Trust",
    deadline: "20 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering, Medical, Others",
    link: "https://gform"
  },
  {
    name: "Nishkam Career Builder Scholarship 2024",
    provider: "Sikh Human Development Foundation",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "Nagaland State Scholarship 2024",
    provider: "Government Of Nagaland",
    deadline: "31 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Diploma, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Shri Shanaishwar Foundation Scholarship 2024",
    provider: "Shri Shanaishwar Foundation",
    deadline: "12 January",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Siddhartha Foundation Scholarship 2024",
    provider: "Siddhartha Foundation",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Butta Foundation Merit Scholarship 2024",
    provider: "Butta Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Sankshema Charitable Trust Renewal Scholarship 2024",
    provider: "Sankshema Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
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
    name: "Renewal KBI Safalta Scholarship 2024",
    provider: "Knorr-Bremse Group",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "ITI, Diploma, Engineering, Medical, Masters",
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
    name: "Lakshadweep Scholarship Scheme 2024",
    provider: "Government of India",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Tripura Post Matric Scholarship For OBC Students 2024",
    provider: "Government of India",
    deadline: "31 January",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Medical, Bachelors, Masters, PHD",
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
    name: "Islamic Research Foundation Scholarship 2024",
    provider: "Islamic Research Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "KSPC Trust Interest Free Loan Scholarship 2024",
    provider: "Kadur Seetharamaiah Parvathamma Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Professional courses",
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
    name: "Vishwakarma Educational Trust Scholarship 2024",
    provider: "Vishwakarma Educational Trust",
    deadline: "09 November",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Masters",
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
    name: "Puja Educational Trust Scholarship 2024",
    provider: "Puja Educational Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
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
    name: "Sri J P Narayanaswami Patishtana Scholarship 2024",
    provider: "Sri J P Narayanaswami Patishtana",
    deadline: "02 December",
    amount: "Click on \"View Details\"",
    eligibility: "Medical, Bachelors, Masters, Professional courses",
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
    name: "M S Ramaiah Charities Trust Scholarship 2024",
    provider: "M S Ramaiah Charities Trust",
    deadline: "15 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters, PHD",
    link: "https://gform"
  },
  {
    name: "Federal Bank Hormis Memorial Foundation Scholarship 2024",
    provider: "The Federal Bank Hormis Memorial Foundation",
    deadline: "18 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
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
    name: "IAN Scholarship 2024",
    provider: "IAN Charitable Foundation",
    deadline: "20 October",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
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
    name: "VKC Charities Loan Scholarship 2024",
    provider: "Vadlamudi Kotaiah Choudary Charities",
    deadline: "28 February",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Professor Ghanashyam Dash Scholarship 2024 For Higher Education",
    provider: "Bansidhar & ILA Panda Foundation",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
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
    name: "Karnataka Arya Vysya Charitable Trust Higher Education Scholarship 2024",
    provider: "Karnataka Arya Vysya Charitable Trust",
    deadline: "07 November",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "Winnie Sun Scholarship 2024 For Girl Child",
    provider: "Lotus Petal Charitable Foundation",
    deadline: "15 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "World Memon Organisation Scholarship 2024",
    provider: "World Memon Organisation (WMO) & Nathani Charitable Trust",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "Dr PS Shankar Medical Scholarship 2024 For 1st Year MBBS Students",
    provider: "Dr. P.S. Shankar Pratishan, a charitable trust",
    deadline: "21 November",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
    link: "https://gform"
  },
  {
    name: "GSK Scholarship For MBBS Students",
    provider: "GlaxoSmithKline Pharmaceuticals Ltd",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
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
    name: "DCT Scholarship 2024",
    provider: "Dempo Charities Trust",
    deadline: "15 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Masters, PHD, Professional courses, Others",
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
    name: "Yuva Bengaluru Trust Scholarship 2024",
    provider: "Yuva Bengaluru Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
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
    name: "Anandam Senapathi Scholarship 2024",
    provider: "SRK Pratiksha Trust",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "AWOO Foundation Scholarship 2024",
    provider: "AWOO Foundation ( Aditya Birla Group)",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
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
    name: "KSF Endowment Fresh And Renewal Scholarship 2024",
    provider: "Krishik Sarvodaya Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Medical, Bachelors, Masters",
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
    name: "Pragati Scholarship 2024",
    provider: "Pragathi, USA",
    deadline: "08 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "Baba Gurbachan Singh Scholarship 2024",
    provider: "Sant Nirankari Charitable Foundation",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Prime Ministers Scholarship Scheme PMSS For Wards Of States OR UTs Police Personnel 2024",
    provider: "The Welfare and Rehabilitation Board, Ministry of Home Affairs, Government of India",
    deadline: "15 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
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
    name: "Mukhyamantri Yuva Swavalamban Yojana 2024",
    provider: "Government Of Gujarat",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors",
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
    name: "OMEIAT Institute Trust Scholarship 2024",
    provider: "OMEIAT Institute Trust",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
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
    name: "JSW UDAAN Fresh And Renewal Scholarship 2024",
    provider: "JSW UDAAN Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "ITI, Diploma, PG-Diploma, Engineering, Medical, Bachelors, Masters",
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
    name: "Kerala E Grantz Scholarship 2024",
    provider: "E Grantz, Government Of Kerala",
    deadline: "15 November",
    amount: "Click on \"View Details\"",
    eligibility: "All",
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
    name: "Shri Paragbhai Desai Wagh Bakri Fresh And Renewal Scholarship 2024",
    provider: "Wagh Foundation",
    deadline: "01 October",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors",
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
    name: "Vahani Scholarship 2024",
    provider: "Vahani Trust",
    deadline: "01 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Haryana State Meritorious Incentive Scheme 2024",
    provider: "Government Of Haryana",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Medical, Bachelors, Masters, Professional courses",
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
    name: "Kalvikaram Scholarship 2024",
    provider: "LMES Foundation",
    deadline: "15 January",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
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
    name: "Harjai Foundation Merit Scholarship 2024",
    provider: "Harjai Foundation",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "Reliance Foundation Scholarship 2024",
    provider: "Reliance Foundation",
    deadline: "15 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters, Professional courses",
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
    name: "Srujanavani Scholarship 2024",
    provider: "Srujanavani Association",
    deadline: "10 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Engineering, Medical, Bachelors, Masters",
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
    name: "The Indusind Foundation Scholarship 2024",
    provider: "The Indusind Foundation",
    deadline: "15 September",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Foundation For Excellence India Trust Scholarship 2024",
    provider: "Foundation For Excellence India Trust",
    deadline: "31 January",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Dr Chittaranjanbhai Patel Higher Education Aid Scheme 2024",
    provider: "Sardardham",
    deadline: "20 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Others",
    link: "https://gform"
  },
  {
    name: "HLL Pratheeksha Scholarship 2024",
    provider: "HLL Lifecare Limited’s Pratheeksha Charitable Society",
    deadline: "24 August",
    amount: "Click on \"View Details\"",
    eligibility: "ITI, Diploma, Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "World Education Mission Scholarships 2024",
    provider: "World Education Mission",
    deadline: "30 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
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
    name: "Post Matric Scholarship For SC Students Manipur 2024",
    provider: "The Ministry of Social Justice & Empowerment, Govt. of India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "ITI, Diploma, Engineering, Medical, Bachelors, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "Mahabir Prasad Singh Foundation Scholarship 2024",
    provider: "Mahabir Prasad Singh Foundation",
    deadline: "16 September",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters, PHD",
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
    name: "ONGC Foundation Scholarship 2024",
    provider: "ONGC Foundation",
    deadline: "15 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Masters",
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
    name: "Saloni Heart Foundation Scholarship 2024",
    provider: "Saloni Heart Foundation",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
    link: "https://gform"
  },
  {
    name: "Vishwa Konkani Scholarship 2024",
    provider: "World Konkani Centre, Mangaluru",
    deadline: "29 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "Lila Poonawalla Foundation Scholarship 2024",
    provider: "Lila Poonawalla Foundation",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
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
    name: "Muktis TSS Scholarship 2024",
    provider: "Mukti Development Society",
    deadline: "15 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Diploma, Engineering, Medical, Bachelors, Masters",
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
    name: "Nirankari Rajmata Scholarship 2024",
    provider: "Sant Nirankari Charitable Foundation",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters, Professional courses",
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
    name: "Satnam Sarab Kalyan Trust Professional Scholarship 2024",
    provider: "Satnam Sarab Kalyan Trust",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "TATA AIG Avanti Fellows Scholarship 2024",
    provider: "TATA AIG General Insurance Company Limited",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "AMP Higher Education Scholarship 2024",
    provider: "Association Of Muslim Professionals",
    deadline: "15 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Professional courses",
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
    name: "Mukhya Mantri Protsahan Yojana 2024",
    provider: "The Department of Higher Education, Himachal Pradesh",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "PG-Diploma, Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship Scheme For SC Students 2024",
    provider: "Government Of Himachal Pradesh",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "Paramparik Scholarship 2024",
    provider: "Paramparik Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
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
    name: "Coal India Limited Merit Scholarship",
    provider: "Eastern Coalfields Limited, Govt. Of India",
    deadline: "31 January",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical",
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
    name: "Dr Ambedkar Medhavi Chhattar Sanshodhit Yojna 2024",
    provider: "Government Of Haryana",
    deadline: "10 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Engineering, Medical, Professional courses",
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
    name: "Shri Brihad Bharatiya Samaj Scholarship 2024",
    provider: "Shri Brihad Bharatiya Samaj",
    deadline: "05 September",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters, Professional courses",
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
    name: "Ishan Uday Special Scholarship Scheme For NER 2024",
    provider: "UGC,Government Of India",
    deadline: "15 November",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Prime Ministers Scholarship Scheme For Ministry Of Railways 2024",
    provider: "The Ministry Of Railways, Govt. Of India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "PM Scholarship Scheme For Central Armed Police Forces And Assam Rifles 2024",
    provider: "The Ministry of Home Affairs, Government of India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "PM Scholarship Scheme For The Wards Of States UTs Police Personnel 2024",
    provider: "The Ministry Of Home Affairs Govt. Of India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "National Higher Education Scholarship For ST Students 2024",
    provider: "Ministry Of Tribal Affairs Govt. Of India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Others",
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
    name: "Veena Upendra Scholarship 2024",
    provider: "Youth Dreamers Foundation",
    deadline: "03 September",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
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
    name: "Max Medical Scholarship 2024",
    provider: "Max Healthcare Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
    link: "https://gform"
  },
  {
    name: "The Hindu Association Scholarship 2024",
    provider: "The Hindu Association",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Others",
    link: "https://gform"
  },
  {
    name: "WBZF Zakat Scholarship 2024",
    provider: "West Bengal Zakat Fund",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "ITI, Engineering, Medical, Bachelors",
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
    name: "JBNSTS Examination Scholarship 2024",
    provider: "Department of Science & Technology and Biotechnology, West Bengal",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical",
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
    name: "IRFI Scholarship 2024",
    provider: "Islamic Research Foundation International, Inc.",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "Bhanu Samaj Trust Scholarship 2024",
    provider: "Shri Katchi Bhanushali Seva Samaj Trust",
    deadline: "15 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters, Others",
    link: "https://gform"
  },
  {
    name: "NEET Gap Year Scholarship 2024",
    provider: "Central Tibetan Administration India",
    deadline: "05 July",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
    link: "https://gform"
  },
  {
    name: "Shri Bhuri Bai Educational Trust Scholarship 2024",
    provider: "Shri Bhuri Bai Educational Trust",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Masters, Others",
    link: "https://gform"
  },
  {
    name: "Vishwa Prakash Mission Charitable Trust Scholarship 2024",
    provider: "Vishwa Prakash Mission Charitable Trust",
    deadline: "07 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "Sashakt Scholarship 2024",
    provider: "Dr Reddy’s Foundation",
    deadline: "30 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Talent Search Examination Scholarship 2024",
    provider: "P M Foundation",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Professional courses",
    link: "https://gform"
  },
  {
    name: "NorthSouth India Scholarship 2024",
    provider: "North South Foundation (NSF)",
    deadline: "31 January",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Others",
    link: "https://gform"
  },
  {
    name: "Swami Dayanand Education Foundation Scholarship 2024",
    provider: "Swami Dayanand Education Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Others",
    link: "https://gform"
  },
  {
    name: "G P Birla Scholarship 2024",
    provider: "G P Birla Education Foundation",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Professional courses",
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
    name: "World Bunts Foundation Trust Education Scholarship 2024",
    provider: "World Bunts Foundation Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "ITI, Diploma, Engineering, Medical, Bachelors, Masters",
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
    name: "Mudita Foundation Scholarship 2024",
    provider: "Mudita Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Medical, Masters",
    link: "https://gform"
  },
  {
    name: "Rajasthani Association Scholarship 2024",
    provider: "Rajasthani Association Tamilnadu",
    deadline: "01 June",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
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
    name: "Vishwa Konkani Scholarship",
    provider: "World Konkani Centre Mangalore",
    deadline: "28 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical",
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
    name: "Prabhu Family Charitable Trust Scholarship",
    provider: "Ajit Prabhu Foundation",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters, Professional courses, Others",
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
    name: "Rajarshri Chhatrapati Shahu Maharaj Fee Reimbursement Scholarship 2024",
    provider: "Government Of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Medical, Bachelors",
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
    name: "Cybage Khushboo Scholarship 2024",
    provider: "Cybage Khushboo Charitable Trust",
    deadline: "15 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Others",
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
    name: "Naik Family Foundation Scholarship",
    provider: "Paragji Naranji & Kusumben Paragji Charitable Foundation(NFF)",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Daylight Educational Charitable Trust Scholarship",
    provider: "Daylight Educational Charitable Trust",
    deadline: "25 June",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Verma Foundation Scholarship Exam 2024",
    provider: "Verma Foundation",
    deadline: "10 December",
    amount: "Click on \"View Details\"",
    eligibility: "Medical, Bachelors",
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
    name: "Biswabina Foundation Fresh And Renewal Scholarship",
    provider: "Biswabina Foundation",
    deadline: "15 September",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Mahaguru Educational Trust Scholarship 2024",
    provider: "Mahaguru Educational Trust",
    deadline: "15 June",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Others",
    link: "https://gform"
  },
  {
    name: "Foundation For Academic Excellence Scholarship",
    provider: "TATA’s and other donors (FAEA)",
    deadline: "10 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Anandham Higher Educational Assistance Scholarship",
    provider: "Anandham Youth Foundation",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "HEST Interest Free Loan Scholarship",
    provider: "Higher Education Support Trust",
    deadline: "15 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Professional courses",
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
    name: "Medicaps University Scholarship Cum Admission Test",
    provider: "Medicaps University",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
    link: "https://gform"
  },
  {
    name: "Krishnadevaraya Aid For Poor Scholarship",
    provider: "Krishnadevaraya Trust",
    deadline: "10 October",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "All India Talent Scholarship",
    provider: "Shri Ram Murti Smarak Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
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
    name: "Khair e Ummat Trust Scholarship",
    provider: "Khair e Ummat Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Rajarshri Chhatrapati Shahu Maharaj Fee Reimbursement Scholarship",
    provider: "Government Of Maharashtra",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
    link: "https://gform"
  },
  {
    name: "Dr B C Rathi Memorial Medical Scholarship",
    provider: "Parkshala Education Under The Tree",
    deadline: "10 July",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
    link: "https://gform"
  },
  {
    name: "Swami Dayanand Education Foundation Scholarship",
    provider: "Swami Dayanand Education Foundation",
    deadline: "24 April",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Others",
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
    name: "JK Tyre Shiksha Sarthi Scholarship",
    provider: "JK Tyre",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "ITI, Diploma, Engineering, Medical, Bachelors",
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
    name: "PEEF Scholarship",
    provider: "The Sindh Educational Endowment Fund",
    deadline: "19 April",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Time Talent Search Scholarship",
    provider: "Triumphant Institute of Management Education PVT. LTD",
    deadline: "13 April",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
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
    name: "IBF Scholarship",
    provider: "Indiabulls Foundation",
    deadline: "12 October",
    amount: "Click on \"View Details\"",
    eligibility: "ITI, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Swargiy Shayamabai Jairamsingh Chouhan scholarship",
    provider: "Rajput Seva Manch",
    deadline: "15 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Professional courses",
    link: "https://gform"
  },
  {
    name: "Chanakya Foundation Scholarship Test",
    provider: "Chanakya Foundation",
    deadline: "13 May",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Medical, Bachelors",
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
    name: "Mahaguru Educational Trust Renewal Scholarship",
    provider: "Mahaguru Educational Trust",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Duffy Nursing Scholarship",
    provider: "Samatva Trust",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
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
    name: "Meet Charitable Trust Scholarship",
    provider: "Meet Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "BCPL PURE India Scholarship",
    provider: "PURE India Trust",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
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
    name: "Sima Khatib Scholarship 2024",
    provider: "Medley Pharmaceuticals Ltd.",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical",
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
    name: "Tamgrads Welfare Trust Scholarship",
    provider: "Tamgrads Welfare Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Professional courses",
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
    name: "Vidyavridhi Medical Scholarship",
    provider: "Yashoda Foundation",
    deadline: "06 January",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
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
    name: "Trust Suvas Scholarship",
    provider: "Suvas Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
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
    name: "KMCEO Scholarship",
    provider: "Kudy Mahanty Children’s Educational Opportunities Charitable trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Sai Vilayatrai Scholarship 2024",
    provider: "Sai Vilayatrai Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Medical, Bachelors, Masters, Professional courses",
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
    name: "Vikash Educational Charitable Trust Scholarship",
    provider: "Vikash Educational Charitable Trust",
    deadline: "05 January",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Indusind Foundation Scholarship",
    provider: "Indusind Foundation",
    deadline: "08 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
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
    name: "Ramanathan Public Charitable Trust Scholarship",
    provider: "Ramanathan Public Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors",
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
    name: "Subhash Chandra Bose Scholarship",
    provider: "Subhash Chandra Bose Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Medical, Bachelors",
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
    name: "State Minority Higher Professional Education Scholarship",
    provider: "Government Of Maharashtra",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Education Fee Reimbursement Scheme 2024",
    provider: "Government Of India",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Medical, Masters",
    link: "https://gform"
  },
  {
    name: "JK Tyre Sarthi Scholarship",
    provider: "JK Tyre",
    deadline: "17 April",
    amount: "Click on \"View Details\"",
    eligibility: "ITI, Diploma, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "VPM Scholarship",
    provider: "Vishwa Prakash Mission Charitable Trust",
    deadline: "15 April",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Kanuri Ananda Kumari Memorial Scholarship",
    provider: "Kanuri Ananda Kumari Memorial And Charitable Trust",
    deadline: "21 August",
    amount: "Click on \"View Details\"",
    eligibility: "Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Nabanna Scholarship",
    provider: "The West Bengal Chief Minister Relief Fund",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "L R Mundra Memorial scholarship 2024",
    provider: "Saini Charitable Education Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Medical, Masters, Post Doctoral",
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
    name: "S J Foundation Scholarship",
    provider: "Sitaram Jindal Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
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
    name: "PMSS Renewal Scholarship",
    provider: "Government Of India",
    deadline: "30 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Danish Professional Education Scholarship 2024",
    provider: "Danish Education Trust",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Combined Counselling Board Scholarship",
    provider: "The Combined Counselling Board",
    deadline: "20 May",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Masters",
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
    name: "Afna Scholarship",
    provider: "Assam Foundation of North America",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Sahu Jain Trust Interest Free Loan Scholarship",
    provider: "Sahu Jain Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Masters",
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
    name: "All India Pre Medical Scholarship Test",
    provider: "Government of India",
    deadline: "15 April",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
    link: "https://gform"
  },
  {
    name: "Prime Ministers Scholarship Scheme for Central Armed Police Forces and Assam Rifles",
    provider: "WARB, Ministry of Home Affairs",
    deadline: "15 November",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "All India Scholarship Entrance Examination",
    provider: "All India Scholarship Entrance Examination",
    deadline: "15 April",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "Central Sector Scheme Of Scholarship",
    provider: "Govenrment of India",
    deadline: "15 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "AMM MURUGAPPA CHETTIAR CENTENARY SCHOLARSHIP",
    provider: "AMM Foundation",
    deadline: "15 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
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
    name: "JC Bose Fellowship",
    provider: "Science & Engineering Research Board",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "SERB Ramanujan Fellowship 2024",
    provider: "Science and Engineering Research Board (SERB)",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Masters",
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


export default function MedicalScholarships() {
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
          Top Scholarships for Medical Students
        </h1>

        <p
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            color: '#555',
            fontSize: '1.1rem',
          }}
        >
          Discover the best scholarships available for students pursuing medical courses to support your studies and research.
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
