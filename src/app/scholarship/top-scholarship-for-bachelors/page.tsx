'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const scholarships = [
  {
    name: "UPSC Classic Academy Scholarship 2025",
    provider: "Classic IAS Academy",
    deadline: "03 April",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Education Concession To Children Of Ex Servicemen 2025",
    provider: "Government Of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Hindi Scholarship 2025",
    provider: "KENDRIYA HINDI SANSTHAN, AGRA",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Open Merit Scholarship 2025",
    provider: "Government Of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Dr Panjabrao Deshmukh Scholarship 2025",
    provider: "The Directorate of Art, Government of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Professional courses",
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
    name: "Central Sector Top Class Education Scholarship 2025",
    provider: "Government Of India",
    deadline: "10 March",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "KBI Safalta Scholarship 2025",
    provider: "Knorr Bremse India Pvt Ltd",
    deadline: "05 March",
    amount: "Click on \"View Details\"",
    eligibility: "ITI, Diploma, Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "MaolKeki Memorial Scholarship 2025",
    provider: "St. Stephen’s College Delhi",
    deadline: "08 February",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "RBL Bank Shiksha Scholarship 2024 25",
    provider: "RBL Bank",
    deadline: "28 February",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Anant Merit Scholarship 2025",
    provider: "Anant Education Initiative",
    deadline: "10 March",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Civil Service Fee Reimbursement 2025",
    provider: "Government Of Kerala",
    deadline: "10 February",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
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
    name: "Mina Swaminathan Media Fellowship 2025",
    provider: "MSSRF",
    deadline: "22 January",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Anant Fellowship 2025",
    provider: "Anant National University",
    deadline: "20 March",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Medha Charitable Trust Sampurna Siksha Scholarship Examination 2025",
    provider: "Medha Charitable Trust",
    deadline: "31 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Bachelors",
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
    name: "Teach For India Fellowship 2025",
    provider: "Teach For India",
    deadline: "02 February",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Inlaks Fellowship 2025",
    provider: "Inlaks Shivdasani Foundation",
    deadline: "03 January",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Vyasakabi Fakirmohan Bhasabruti Scholarship Scheme",
    provider: "Higher Education Department, Odisha",
    deadline: "22 January",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
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
    name: "Provident Housing Scholarship 2024",
    provider: "Provident Housing",
    deadline: "18 January",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Bhumi Fellowship 2025",
    provider: "Bhumi Fellow Organization",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Oberoi Educational Trust Scholarship",
    provider: "Oberoi Educational Trust",
    deadline: "30 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Ch Muhammed Koya Fresh & Renewal Scholarship 2024",
    provider: "Government Of Kerala",
    deadline: "03 February",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "Special Incentive Fund For Minority Students",
    provider: "Government Of Karnataka",
    deadline: "25 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Gagan Bharari Shiksha Yojana 2024",
    provider: "The Directorate of Tribal Welfare, Goa",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
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
    name: "Hivision Foundation Scholarship 2024",
    provider: "Hivision Foundation",
    deadline: "20 January",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Others",
    link: "https://gform"
  },
  {
    name: "Joseph Mundassery Scholarship 2024",
    provider: "The Department of Minority Welfare, Government of Kerala",
    deadline: "07 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Bachelors, Masters",
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
    name: "Samaritan Help Mission Scholarship 2024",
    provider: "Samaritan Help Mission (SHM)",
    deadline: "15 January",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Agni Siragugal Educational Trust Scholarship 2024",
    provider: "Agni Siragugal Educational Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Tirthankar Aadinath Educational Trust Scholarship 2024",
    provider: "Tirthankar Aadinath Educational Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters, Professional courses",
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
    name: "Somaiya Vidyavihar Scholarship 2024",
    provider: "Somaiya Vidyavihar University",
    deadline: "07 November",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "LAMP Fellowship 2025",
    provider: "PRS Legislative Research, India",
    deadline: "21 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters",
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
    name: "Gandhi Fellowship 2025",
    provider: "Piramal Foundation",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Durga Foundation Scholarship 2024",
    provider: "Durga Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Professional courses, Others",
    link: "https://gform"
  },
  {
    name: "Anbu Suzh Ulagu Foundation Scholarship 2024",
    provider: "Anbu Suzh Ulagu Foundation",
    deadline: "25 November",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
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
    name: "J And A Bharat Keval Shanti Scholarship 2024",
    provider: "J&A Bharat HSE Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, PG-Diploma, Engineering, Bachelors",
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
    name: "Mukhyamantri Atyant Pichhda Varg Civil Seva Protsahan Yojana",
    provider: "Government Of Bihar",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "SAAKAAR Scholarship 2024",
    provider: "Tech Mahindra Ltd.",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Diploma, Engineering, Bachelors, Masters",
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
    name: "Education Scholarship Scheme For Army Personnel",
    provider: "ESSA",
    deadline: "15 January",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Diploma, Bachelors, Masters",
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
    name: "Design Scholarship Test 2024",
    provider: "MIT Institute of Design Indore, Avantika University",
    deadline: "14 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Sanjeevani Charitable Trust Scholarship 2024",
    provider: "Sanjeevani Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters",
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
    name: "KSPC Trust Interest Free Loan Scholarship 2024",
    provider: "Kadur Seetharamaiah Parvathamma Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Youth Dreamers Foundation Scholarship 2024",
    provider: "Youth Dreamers Foundation",
    deadline: "15 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
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
    name: "Hakeem Abdul Hameed Scholarship 2024",
    provider: "Hamdard National Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Bachelors, Professional courses",
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
    name: "Vidyadhan All India Undergraduate Scholarship 2024",
    provider: "Sarojini Damodaran Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
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
    name: "Dr APJ Abdul Kalam Young Research Fellowship 2024",
    provider: "TERRE Policy Centre",
    deadline: "15 February",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters, PHD",
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
    name: "Arunkumar And Ramniklal Mehta Scholarship 2024",
    provider: "The Rosy Blue Foundation",
    deadline: "20 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters",
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
    name: "Prof Siddique Hassan Memorial UG And PG Scholarship 2024",
    provider: "Human Welfare Foundation",
    deadline: "25 October",
    amount: "Click on \"View Details\"",
    eligibility: "PG-Diploma, Bachelors, Masters",
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
    name: "VKC Charities Loan Scholarship 2024",
    provider: "Vadlamudi Kotaiah Choudary Charities",
    deadline: "28 February",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
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
    name: "Professor Ghanashyam Dash Scholarship 2024 For Higher Education",
    provider: "Bansidhar & ILA Panda Foundation",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "B Pharm Scholarship 2024 For Meritorious Girls Students",
    provider: "Smile Foundation & MSD",
    deadline: "12 January",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Naveen Jindal Yashasvi Scholarship 2024",
    provider: "Naveen Jindal Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Bachelors, Others",
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
    name: "VidyaVikas Renewal Scholarship 2024",
    provider: "Eaton India Foundation",
    deadline: "06 November",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Telangana ePASS Post Matric Scholarship 2024",
    provider: "Government Of Telangana",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters",
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
    name: "Astral Foundation Renewal Scholarship 2024",
    provider: "Astral Foundation",
    deadline: "02 November",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Bachelors",
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
    name: "Hope For Deprived Foundation Scholarship 2024",
    provider: "Hope For Deprived Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Saksham Fresh And Renewal Scholarship 2024",
    provider: "PVH Arvind Fashions Pvt Limited",
    deadline: "15 November",
    amount: "Click on \"View Details\"",
    eligibility: "ITI, Diploma, PG-Diploma, Engineering, Bachelors, Masters",
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
    name: "KSF Endowment Fresh And Renewal Scholarship 2024",
    provider: "Krishik Sarvodaya Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Viksit Bharat Fellowship 2024",
    provider: "BlueKraft Digital Foundation",
    deadline: "01 November",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
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
    name: "Baba Gurbachan Singh Scholarship 2024",
    provider: "Sant Nirankari Charitable Foundation",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "INSPIRE Scholarship 2024",
    provider: "This Department of Science and Technology, Govt. of India",
    deadline: "15 October",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
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
    name: "Gaud Saraswat Brahman Scholarship 2024",
    provider: "GSB Scholarship League",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters, Professional courses",
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
    name: "Narayan Singhania Memorial Scholarship 2024",
    provider: "Jaidayal Singhania Foundation",
    deadline: "15 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Vivo For Education Fresh And Renewal Scholarship 2024",
    provider: "Vivo Delhi, Jharkhand & Gujarat State Distributor",
    deadline: "15 January",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, PG-Diploma, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "PM Yasasvi Central Sector Scheme Of Top Class Education In College For OBC EBC And DNT For UG And PG Students",
    provider: "The Ministry of Social Justice and Empowerment, Government of India",
    deadline: "15 November",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
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
    name: "Azim Premji Scholarship 2024",
    provider: "Azim Premji Foundation",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Bachelors",
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
    name: "Post Matric Scholarship For Students Of The Wards Of Beedi LSDM Workers 2024",
    provider: "The Ministry of Labour, Government Of India",
    deadline: "15 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, ITI, Diploma, Engineering, Bachelors, Professional courses",
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
    name: "Umbrella Meghalaya Scholarship 2024",
    provider: "Government Of Meghalaya",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
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
    name: "KARM Law Fellowship 2024",
    provider: "KARM Trust",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Can Foundation Scholarship 2024",
    provider: "Can Foundation",
    deadline: "26 August",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Vahani Scholarship 2024",
    provider: "Vahani Trust",
    deadline: "01 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Stovec Industries Ltd Scholarship 2024",
    provider: "Stovec Industries Ltd",
    deadline: "20 September",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Post Matric Scholarship To Lower Income Group Students 2024",
    provider: "Government Of Haryana",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
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
    name: "Mukhya Mantri Vidyarthi Kalyan Yojana Himachal Pradesh 2024",
    provider: "The Department of Education, Government of India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Bachelors, Masters",
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
    name: "O P Jindal Engineering And Management Scholarship 2024",
    provider: "O.P. Jindal Group",
    deadline: "17 September",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Digjyoti Scholarship 2024",
    provider: "Digjyoti Educational Charitable Trust",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Professional courses",
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
    name: "TSS Sameer Aatmanirbhar Scholarship 2024",
    provider: "TSS Aatmanirbhar",
    deadline: "13 September",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
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
    name: "Santoor Womens Scholarship 2024",
    provider: "Wipro Consumer Care and Wipro Cares",
    deadline: "15 October",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Hyundai Hope Scholarship 2024 For IIT UPSC and CLAT Students",
    provider: "Hyundai Motor India Foundation",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Scholarship To Meritorious Students Possessing Mathematics Physics 2024",
    provider: "Government Of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "State Minority Scholarship For Pursuing Higher Professional Education Scholarship 2024",
    provider: "Government Of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Bachelors",
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
    name: "Delhi Higher And Technical Education Support Scholarship 2024",
    provider: "The Delhi Higher Education Aid Trust",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Thirupuvanam Foundation Scholarship 2024",
    provider: "Thirupuvanam Foundation",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Grant Of Additional Scholarship To OBC Students For Pursuing Higher Studies In Andaman And Nicobar 2024",
    provider: "The Department of Social Welfare, Andaman and Nicobar",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters, PHD, Post Doctoral, Professional courses",
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
    name: "BPL Scholarship Scheme For College Students Chhattisgarh",
    provider: "The Department Of Higher Education, Govt. Of Chhattisgarh",
    deadline: "15 September",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
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
    name: "Stovec Industries Ltd Renewal Scholarship 2024",
    provider: "Stovec Industries Ltd",
    deadline: "27 September",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Bachelors",
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
    name: "NIF Book Fellowship 2024",
    provider: "The New India Foundation",
    deadline: "19 September",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Smt Tummalapalli Annapurnamma Students Home Trust Scholarship 2024",
    provider: "Smt Tummalapalli Annapurnamma Students Home Trust",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Professional courses",
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
    name: "RR Kabel Star Scholarship 2024",
    provider: "RR Kabel",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters",
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
    name: "Mukherjee Fellowship 2024",
    provider: "Governance Foundation",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters, PHD, Post Doctoral",
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
    name: "AMP Higher Education Scholarship 2024",
    provider: "Association Of Muslim Professionals",
    deadline: "15 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Redington Foundation Sahayog Scholarship 2024",
    provider: "Redington Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
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
    name: "Grant Of Adhoc Merit Grant To SC Students Puducherry 2024",
    provider: "Government Of Puducherry",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
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
    name: "Kalpana Chawla Chatravriti Yojana 2024",
    provider: "The Government of Himachal Pradesh",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters, Professional courses",
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
    name: "Indira Gandhi Utkrisht Chatravriti Yojana 2024",
    provider: "The Department of Education, Government of Himachal Pradesh",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Technical Education Scholarship Scheme For Degree Level 2024",
    provider: "The Department of Technical Education, Himachal Pradesh",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters",
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
    name: "Rizvi Family Scholarship 2024",
    provider: "Youth Dreamers Foundation(Managed By Syed Rizvi)",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Your Space Scholarship 2024",
    provider: "Government Of Pan India",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Smt Kanak Aggarwal NAAS Girls Scholarship 2024",
    provider: "Crystal Crop Protection Ltd & National Academy of Agricultural Sciences",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Aditya Birla Scholarship 2024",
    provider: "Aditya Birla Group",
    deadline: "20 January",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
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
    name: "Maa Foundation Scholarship 2024",
    provider: "Maa Foundation",
    deadline: "31 January",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters, Others",
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
    name: "NEC Merit Scholarship For Higher Professional Courses 2024",
    provider: "The North Eastern Council, Govt, Of India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Bachelors, Masters, PHD",
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
    name: "AICTE Pragati Scholarship Scheme For Girls 2024",
    provider: "AICTE, Govt. Of India",
    deadline: "15 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "AICTE Saksham Scholarship Scheme For Specially Abled Student 2024",
    provider: "AICTE, Govt. Of India",
    deadline: "15 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Bachelors",
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
    name: "Pradhan Mantri Uchchatar Shiksha Protsahan Central Sector Scheme Of Scholarship 2024",
    provider: "Department Of Higher Education Govt. Of India",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters, Professional courses",
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
    name: "Masai Sonu Sood Scholarship 2024",
    provider: "MASAI",
    deadline: "02 July",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Central Sanskrit University Scholarship 2024",
    provider: "Central Sanskrit University Delhi",
    deadline: "15 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters, PHD",
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
    name: "Teach For India Fellowship",
    provider: "Teach For India",
    deadline: "08 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Bhanu Samaj Trust Scholarship 2024",
    provider: "Shri Katchi Bhanushali Seva Samaj Trust",
    deadline: "15 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters, Others",
    link: "https://gform"
  },
  {
    name: "PM YASASVI Scholarship 2024 Young Achievers Scholarship Award Scheme for Vibrant India",
    provider: "The Ministry of Social Justice and Empowerment Of India",
    deadline: "17 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Aviation",
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
    name: "Haryana Merit Cum Means Scholarship 2024",
    provider: "Government Of Haryana",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "WEnyan Scholarship 2024",
    provider: "BASF Chemicals India Pvt. Ltd.",
    deadline: "15 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "EDEN IAS UPSC Civil Services Scholarship 2024",
    provider: "EDEN IAS Academy",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "National Scholarship Exam 2024",
    provider: "NICE Foundation",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Diploma, Bachelors",
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
    name: "Ahimsa Fellowship 2024",
    provider: "Ahimsa",
    deadline: "08 July",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Swami Vivekananda Scholarship For Academic Excellence 2024",
    provider: "Government Of Rajasthan",
    deadline: "15 January",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters, PHD, Post Doctoral",
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
    name: "Prabhu Family Charitable Trust Scholarship",
    provider: "Ajit Prabhu Foundation",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters, Professional courses, Others",
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
    name: "The Dalai Lama Trust Scholarship",
    provider: "The Dalai Lama Trust",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
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
    name: "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna 2024",
    provider: "Government Of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Bachelors, Masters",
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
    name: "Scholarship For Minority Students Pursuing Higher And Professional Courses 2024",
    provider: "Government Of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Bachelors",
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
    name: "Maharashtra Government Open Merit Scholarship 2024",
    provider: "Government Of Maharashtra",
    deadline: "15 June",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "RVG Educational Foundation Scholarship",
    provider: "RVG Educational Foundation",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "Sri Badrika Ashram Emerging Youth Scholarship",
    provider: "Sri Badrika Ashram Cum Charitable & Welfare Society",
    deadline: "25 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Bachelors",
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
    name: "Naik Family Foundation Scholarship",
    provider: "Paragji Naranji & Kusumben Paragji Charitable Foundation(NFF)",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Professional courses",
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
    name: "UMMEED Scholarship",
    provider: "Dr. Majeed Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Sathya Unar Charitable Trust Scholarship",
    provider: "Sathya Unar Charitable Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Hansa Agarwal Fashion Scholarship 2024",
    provider: "Think sharp foundation",
    deadline: "30 August",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Bachelors, Masters",
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
    name: "Mahaguru Educational Trust Scholarship 2024",
    provider: "Mahaguru Educational Trust",
    deadline: "15 June",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Others",
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
    name: "Anant Fellowship 2024",
    provider: "Anant National University",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Jamia Millia Islamia UPSC Scholarship",
    provider: "Jamia Millia Islamia",
    deadline: "19 June",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Fortune IAS Academy Scholarship Test",
    provider: "Fortune IAS Academy",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Saraswathi Support Scholarship",
    provider: "Saraswati Educational Support Trust",
    deadline: "10 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
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
    name: "Chanakya Merit Cum Means Scholarship",
    provider: "Chanakya University",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters",
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
    name: "Brahmin Educational Service Trust Scholarship",
    provider: "Brahmin Educational Service Trust",
    deadline: "03 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "India Fellowship",
    provider: "India Fellow",
    deadline: "20 June",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "AMEEE Scholarship Entrance Examination",
    provider: "Indraprasth Aerospace And Knowledge Park",
    deadline: "30 May",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Bachelors",
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
    name: "ANBU SCHOLARSHIP",
    provider: "ANBU Foundation",
    deadline: "10 September",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters",
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
    name: "PM IAS UPSC Scholarship Exam",
    provider: "PM IAS Organisation",
    deadline: "18 May",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Dr Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Scholarship",
    provider: "Government Of Maharashtra",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Bachelors, Masters, Professional courses",
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
    name: "FOSSEE Summer Fellowship",
    provider: "Free/Libre and Open Source Software for Education(FOSSEE)",
    deadline: "25 April",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Prema Ashram Charitable Trust Scholarship",
    provider: "Prema Ashram Charitable Trust",
    deadline: "02 July",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Human Resource Development Cell Scholarship",
    provider: "Human Resource Development Cell",
    deadline: "15 July",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters, PHD",
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
    name: "Alokdhara Foundation Scholarship",
    provider: "Alokdhara Foundation",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Fourth UPSC Scholarship Exam",
    provider: "Hamro Swabhiman Trust",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "The Mindler Scholarship and Talent Hunt",
    provider: "Mindler Education Private Limited",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Higher Education Scholarship",
    provider: "People's Foundation",
    deadline: "01 April",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters",
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
    name: "BCPL PURE India Scholarship",
    provider: "PURE India Trust",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Free Coaching For IAS IPS And PCS Scholarship Test",
    provider: "Satnam Sarab Kalyan Trust",
    deadline: "20 April",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Yogi Nareyana Education Trust Scholarship",
    provider: "Yogi Nareyana Education Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters, PHD",
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
    name: "JM Sethia Merit Scholarship 2024",
    provider: "JMS Charitable Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters, PHD",
    link: "https://gform"
  },
  {
    name: "Generation Google Scholarship APAC 2024",
    provider: "Google",
    deadline: "23 April",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Astitva Foundation Scholarship",
    provider: "Astitva Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "ERD Foundation Scholarship",
    provider: "ERD Foundation",
    deadline: "10 August",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters, PHD",
    link: "https://gform"
  },
  {
    name: "SYED ABDURAHMAN BAFAKY THANGAL TRUST SCHOLARSHIP",
    provider: "SYED ABDURAHMAN BAFAKY THANGAL TRUST",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "UPSC Civil Services Scholarship",
    provider: "EDEN IAS",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Muskurahat Fellowship",
    provider: "Muskurahat Foundation",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "TAF Fellowship",
    provider: "The Antara Foundation",
    deadline: "15 May",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
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
    name: "JM Chaudhari Charitable Trust Bright Student Scholarship",
    provider: "Late Sheth Shri Jivanlal Madhabhai Chaudhary Charitable Trust",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
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
    name: "The 400 Dreams All India Scholarship Test",
    provider: "Lukmaan IAS",
    deadline: "27 April",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "KMCEO Scholarship",
    provider: "Kudy Mahanty Children’s Educational Opportunities Charitable trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "SBI Youth For India Fellowship",
    provider: "State Bank of India",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Dream India Educational Scholarship",
    provider: "Dream India",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
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
    name: "Krittika Fellowship",
    provider: "Kutchina Foundation",
    deadline: "10 November",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Sri Raghavendra Education Society Scholarship",
    provider: "Sri Raghavendra Education Society",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "Bhumi X Cognizant Foundation Scholarship",
    provider: "Bhumi X Cognizant Foundation",
    deadline: "26 June",
    amount: "Click on \"View Details\"",
    eligibility: "ITI, Diploma, Engineering, Bachelors",
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
    name: "MP Gaon Ki Beti Scholarship",
    provider: "Government Of Madhya Pradesh",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Shree Maheshwari Foundation Higher Education Scholarship",
    provider: "Maheshwari Foundation",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
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
    name: "Fisheries E Grants Scholarship",
    provider: "Government Of Kerala",
    deadline: "03 May",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Bachelors, Masters",
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
    name: "V-SAT Scholarship",
    provider: "Vignan’s University",
    deadline: "15 April",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Sun Foundation Merit Cum Means Scholarship",
    provider: "Sun Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
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
    name: "MGI Scholarship Test",
    provider: "Minerva Group Of Institutions",
    deadline: "05 May",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Bhumi Fellowship",
    provider: "Bhumi Fellows Organization",
    deadline: "15 April",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Kalakriti Fellowship",
    provider: "Sanskriti Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Jai Krishna Girls Scholarship",
    provider: "Chetak Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Pt Vasant Thakar Memorial Fellowship",
    provider: "Sanskriti Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Mani Mann Fellowship",
    provider: "Sanskriti Foundation",
    deadline: "05 January",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Bachelors",
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
    name: "Geddes Scholarship",
    provider: "Sanskriti Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters, PHD",
    link: "https://gform"
  },
  {
    name: "Prabha Dutt Fellowship",
    provider: "Sanskriti Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters, PHD",
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
    name: "Malabar Charitable Trust Scholarship For Girls",
    provider: "Malabar Charitable Trust",
    deadline: "10 October",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Haryana Consolidated Stipend Scheme For SC Students",
    provider: "Government Of Haryana",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
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
    name: "Big Dream Scholarship 2024 By StockGro",
    provider: "The StackGro Trading & Investment Education Platform",
    deadline: "05 January",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
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
    name: "Nilam Patel Bahushrut Foundation Scholarship 2024",
    provider: "Nilam Patel Bahushrut Foundation",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Bachelors, Masters",
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
    name: "IICSR Achala Scholarship",
    provider: "IICSR",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
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
    name: "Danish Siddiqui Journalism Scholarship",
    provider: "Danish Siddiqui Foundation",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Prime Ministers Scholarship Scheme for Central Armed Police Forces and Assam Rifles",
    provider: "WARB, Ministry of Home Affairs",
    deadline: "15 November",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Jawaharlal Nehru University scholarship 2024",
    provider: "Government of Maharashtra",
    deadline: "31 March",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulk Shishyavrutti Scholarship",
    provider: "Government of Maharashtra",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
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
    name: "Haryan Post Matric Scholarship",
    provider: "Government of Haryana",
    deadline: "19 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Gopabandhu Fellowship",
    provider: "Centre for Youth and Social Development",
    deadline: "25 August",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Haryana Post matric Scholarship 2024",
    provider: "Govt of Haryana",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
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
    name: "Post Matric Scholarship To SBC Students",
    provider: "Government of Maharashtra",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors, Masters, PHD",
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

export default function BachelorsScholarships() {
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
          Top Scholarships for Bachelors Students
        </h1>

        <p
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            color: '#555',
            fontSize: '1.1rem',
          }}
        >
          Explore scholarships available for undergraduate students to help fund your studies in various fields.
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
