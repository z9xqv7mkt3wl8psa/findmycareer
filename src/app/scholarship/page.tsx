'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const scholarships = [
  {
    name: "IET India Scholarship 2025",
    provider: "IET India",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering",
    link: "https://gform"
  },
  {
    name: "IBMR Common Admission Test 2025",
    provider: "IBMR College, Bangalore",
    deadline: "01 May",
    amount: "Click on \"View Details\"",
    eligibility: "PG-Diploma, Masters",
    link: "https://gform"
  },
  {
    name: "FOSSEE Summer Fellowship 2025",
    provider: "FOSSEE",
    deadline: "15 April",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Nisvartha Foundation Scholarship 2025",
    provider: "Nisvartha Foundation",
    deadline: "15 April",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "The Mindler Scholarship And Talent Hunt 2025",
    provider: "Mindler Education Private Limited",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "IBF Scholarship 2025",
    provider: "Indiabulls Foundation",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Doon School Scholarship Entrance Exam 2025",
    provider: "The Doon School",
    deadline: "15 April",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9",
    link: "https://gform"
  },
  {
    name: "Sima Khatib Scholarship 2025",
    provider: "Medley Pharmaceuticals Ltd.",
    deadline: "31 October",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Masters",
    link: "https://gform"
  },
  {
    name: "Yuva Unstoppable Scholarship 2025",
    provider: "Yuva Unstoppable",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Shree Jadva Meghji Varsani Education Trust Scholarship 2025",
    provider: "Shree Jadva Meghji Varsani Education Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Diploma, Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "JM Sethia Merit Scholarship 2025",
    provider: "JMS Charitable Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Adhyyan Scholarship Test 2025",
    provider: "Adhyyan Defence Academy",
    deadline: "15 April",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Delhi Scholarship For SC ST OBC Minorities 2025",
    provider: "Department for the Welfare of SC/ST, Government of NCT of Delhi",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Motion Open Scholarship Test 2025",
    provider: "Motion",
    deadline: "30 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "AR Education And Charitable Trust Scholarship 2025",
    provider: "AR Education And Charitable Trust",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12, Diploma, Engineering, Medical, Professional courses",
    link: "https://gform"
  },
  {
    name: "Ladli Foundation Fellowship 2025",
    provider: "Ladli Foundation",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Masters",
    link: "https://gform"
  },
  {
    name: "ALLEN Online Scholarship Test 2025",
    provider: "ALLEN Career Institute Pvt. Ltd.",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10",
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
    name: "Awanish Kumar Dev Memorial Scholarship 2025",
    provider: "Awanish Kumar Dev Memorial Trust",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "PG-Diploma",
    link: "https://gform"
  },
  {
    name: "SBI Youth For India Fellowship 2025",
    provider: "State Bank Of India",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Apni Shala Fellowship 2025",
    provider: "Apni Shala",
    deadline: "28 April",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "EY Scholarship 2025",
    provider: "EY India PVT LTD",
    deadline: "15 April",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Madhya Pradesh Khiladi Protsahan Yojana 2025",
    provider: "Government Of Madhya Pradesh",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Advaita Bodhi Foundation Scholarship 2025",
    provider: "Advaita Bodhi Foundation",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Nehru Sidhant Kender Trust Merit Scholarship 2025",
    provider: "NEHRU SIDHANT KENDER TRUST",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Chhattisgarh Zakat Foundation Scholarship 2024 25",
    provider: "Chhattisgarh Zakat Foundation",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Yashasvi Women Education And Skill Development Scheme 2025",
    provider: "JSP Foundation",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Somaiya Vidyavihar Scholarship 2025",
    provider: "Somaiya Vidyavihar University",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Hongirana Scholarship 2025",
    provider: "Hongirana Charitable Trust",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "WBZF Zakat Scholarship 2025",
    provider: "West Bengal Zakat Fund",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "ITI, Diploma, Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Nirman Shramik Kalyan Yojana Scholarship 2025",
    provider: "Government Of Odisha",
    deadline: "30 May",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "ICCR Scholarship 2025",
    provider: "The Embassy Of India",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "PHD",
    link: "https://gform"
  },
  {
    name: "Shri Kushal Guru Jain Charitable Trust Scholarship 2025",
    provider: "Shri Kushal Guru Jain Charitable Trust",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Shriram Automall Education Scholarship 2025",
    provider: "Shriram Automall India Limited",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Samaritan Help Mission Scholarship 2025",
    provider: "Samaritan Help Mission",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "KMCEO Trust Scholarship 2025",
    provider: "KMCEO Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Virat Kohli Foundation Scholarship 2025",
    provider: "Virat Kohli Foundation",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "KSPC Trust Interest Free Loan Scholarship 2025",
    provider: "Kadur Seetharamaiah Parvathamma Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "AMM Murugappa Chettiar Centenary Scholarship 2025",
    provider: "AMM Foundation",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Bunts Sangha Interest Free Loan Scholarship 2025",
    provider: "Bunts Sangha Bangalore",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Masters",
    link: "https://gform"
  },
  {
    name: "Nachiappan Foundation Scholarship 2025",
    provider: "Nachiappan Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "SPCT Vishwavidya Scholarship 2025",
    provider: "Sri Pratyaksha Charitable Trust",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Engineering, Bachelors, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "Youth Dreamers Foundation Scholarship 2025",
    provider: "Youth Dreamers Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Padala Charitable Trust Scholarship 2025",
    provider: "Padala Charitable Trust",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Maa Foundation Sports Scholarship 2025",
    provider: "Maa Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Dr BR Ambedkar Scholarship 2025",
    provider: "Government Of India",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Uttar Pradesh Post Matric Scholarship 2025",
    provider: "Government Of Uttar Pradesh",
    deadline: "19 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Dr Moni Bhaumik Educational Foundation Scholarship 2025",
    provider: "Dr. Moni Bhaumik Educational Foundation",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Tamil Nadu Foundation Scholarship 2025",
    provider: "Tamil Nadu Foundation",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Vivo For Education Scholarship 2025",
    provider: "Vivo Mobile India Pvt Ltd",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "PG-Diploma, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Pragnya Scholarship 2025",
    provider: "EDUCAIT Na Hi Jnanena Sadrusham Trust",
    deadline: "30 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Lalit Kala Akademi Scholarship 2025",
    provider: "Lalit Kala Akademi",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Subhash Chandra Bose Scholarship 2025",
    provider: "Subhash Chandra Bose Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Jai Krishna Girls Scholarship 2025",
    provider: "Chetak Foundation",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Merit Cum Poverty Scholarship",
    provider: "Government Of Kerala",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Oberoi Educational Trust Scholarship 2025",
    provider: "Oberoi Educational Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors",
    link: "https://gform"
  },
  {
    name: "Sultan Chand Foundation Merit Cum Means Scholarship 2025",
    provider: "Sultan Chand Foundation",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "FFE Cognizant Outreach Scholarship 2025",
    provider: "FFE & Cognizant Pvt Ltd.",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Manjrekar Foundation Scholarship 2025",
    provider: "Manjrekar Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Swami Vivekananda Merit Cum Means Fresh And Renewal Scholarship 2025",
    provider: "Government Of West Bengal",
    deadline: "30 April",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering, Medical, Bachelors, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "Smile Scholarship 2025",
    provider: "Lilly Foundation",
    deadline: "30 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Rahnuma Scholarship 2025",
    provider: "Rahnuma Welfare Society",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "D Y Uppar Educational And Social Foundation Merit Scholarship 2025",
    provider: "D Y Uppar Educational And Social Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12, Others",
    link: "https://gform"
  },
  {
    name: "Asraya Education Trust Scholarship 2025",
    provider: "Asraya Education Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "Ummeed Educational And Charitable Trust Scholarship 2025",
    provider: "Ummeed Educational And Charitable Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "RVG Educational Foundation Scholarship 2025",
    provider: "RVG Educational Foundation",
    deadline: "15 October",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "Kalvikaram Scholarship 2024 25",
    provider: "LMES Foundation",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Sadhana Scholarship 2025",
    provider: "Smile Welfare Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Engineering, Medical, Others",
    link: "https://gform"
  },
  {
    name: "Krishnadevaraya Aid For Poor Scholarship 2025",
    provider: "Krishnadevaraya Trust",
    deadline: "30 October",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "Sanjeevani Charitable Trust Scholarship 2025",
    provider: "Sanjeevani Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Yogi Nareyana Education Trust Scholarship 2025",
    provider: "Yogi Nareyana Education Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters, PHD",
    link: "https://gform"
  },
  {
    name: "Daylight Educational Charitable Trust Scholarship 2025",
    provider: "Daylight Educational & Charitable Trust",
    deadline: "25 June",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Mercy Cops Charitable Trust Scholarship 2025",
    provider: "Mercy Cops Charitable Trust",
    deadline: "30 November",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Sambhava Foundation Scholarship 2025",
    provider: "Sambhava Foundation",
    deadline: "15 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Nirmaan Scholarship 2025",
    provider: "Nirmaan Organization",
    deadline: "15 August",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 11, Class 12, Engineering, Bachelors, Masters, Others",
    link: "https://gform"
  },
  {
    name: "L R Mundra Memorial Scholarship 2025",
    provider: "Saini Charitable Education Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Medical, Masters, Post Doctoral",
    link: "https://gform"
  },
  {
    name: "Prabhu Family Charitable Trust Scholarship 2025",
    provider: "Ajit Prabhu Foundation",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters, Professional courses, Others",
    link: "https://gform"
  },
  {
    name: "Dhrithi Foundation Fresh And Renewal Scholarship 2025",
    provider: "Dhrithi Foundation",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Yashasvi Women Education And Skill Development Scholarship 2025",
    provider: "JSP Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Aalayam Foundation Scholarship 2025",
    provider: "Aalayam Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Shri Shanaishwar Foundation Scholarship 2025",
    provider: "Shri Shanaishwar Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Yuva Bengaluru Trust Scholarship 2025",
    provider: "Yuva Bengaluru Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "Friends Educational And Charitable Trust Scholarship 2025",
    provider: "Friends Educational And Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10",
    link: "https://gform"
  },
  {
    name: "World Bunts Foundation Trust Education Scholarship 2025",
    provider: "World Bunts Foundation Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "ITI, Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "HEST Interest Free Loan Scholarship 2025",
    provider: "Higher Education Support Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Acadamics Scholarship 2025",
    provider: "Assam Foundation",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Hansa Agarwal Fashion Scholarship 2025",
    provider: "Think sharp foundation",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Success Educational Trust Scholarship 2025",
    provider: "Success Educational Trust",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Aaghaz Foundation Scholarship 2025",
    provider: "Aaghaz Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Saraswathi Support Scholarship 2025",
    provider: "Saraswati Educational Support Trust",
    deadline: "10 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Khair e Ummat Trust Scholarship 2025",
    provider: "Khair e Ummat Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "AshaRatna Scholarship 2025",
    provider: "Ratna Nidhi Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Bright Academy Computer Education Scholarship 2025",
    provider: "Full Moon Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "Dr B C Rathi Memorial Medical Scholarship 2025",
    provider: "Parkshala Education Under The Tree",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
    link: "https://gform"
  },
  {
    name: "Sathya Unar Charitable Trust Scholarship 2025",
    provider: "Sathya Unar Charitable Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Sudha Opportunity Scholarship 2025",
    provider: "Pragati Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Chaitanya Charitable Trust Scholarship 2025",
    provider: "Chaitanya Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Trust Suvas Scholarship 2025",
    provider: "Suvas Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Alokdhara Foundation Scholarship 2025",
    provider: "Alokdhara Foundation",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Duffy Nursing Scholarship 2025",
    provider: "Samatva Trust",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
    link: "https://gform"
  },
  {
    name: "Samatva Individual Scholarship 2025",
    provider: "Samatva Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "Prem Ashram Charitable Trust Scholarship 2025",
    provider: "Prem Ashram Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Amanat Foundation Trust Scholarship 2025",
    provider: "Amanat Foundation Trust",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Sri Badrika Ashram Emerging Youth Scholarship 2025",
    provider: "Sri Badrika Ashram Cum Charitable & Welfare Society",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "Meet Charitable Trust Scholarship 2025",
    provider: "Meet Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Astitva Foundation Scholarship 2025",
    provider: "Astitva Foundation",
    deadline: "20 May",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "ERD Foundation Scholarship 2025",
    provider: "ERD Foundation",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters, PHD",
    link: "https://gform"
  },
  {
    name: "Syed Abdurahman Bafaky Thangal Trust Scholarship 2025",
    provider: "Syed Abdurahman Bafaky Thangal Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "Tamgrads Welfare Trust Scholarship 2025",
    provider: "Tamgrads Welfare Trust",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Professional courses",
    link: "https://gform"
  },
  {
    name: "TAF Fellowship 2025",
    provider: "The Antara Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Vidyavridhi Medical Scholarship 2025",
    provider: "Yashoda Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Medical",
    link: "https://gform"
  },
  {
    name: "IIP Foundation Scholarship 2025",
    provider: "IIP Foundation",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 10, Class 12",
    link: "https://gform"
  },
  {
    name: "JM Chaudhari Charitable Trust Bright Student Scholarship 2025",
    provider: "Late Sheth Shri Jivanlal Madhabhai Chaudhary Charitable Trust",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Shraman Foundation Scholarship 2025",
    provider: "Shraman Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering",
    link: "https://gform"
  },
  {
    name: "Sai Vilayatrai Scholarship 2025",
    provider: "Sai Vilayatrai Charitable Trust",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Medical, Bachelors, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "Double Hand NGO Scholarship 2025",
    provider: "Double Hand NGO",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "V G Charitable Trust Scholarship 2025",
    provider: "V G Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Ramanathan Public Charitable Trust Scholarship 2025",
    provider: "Ramanathan Public Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors",
    link: "https://gform"
  },
  {
    name: "New Vardhaman Educational Trust Scholarship 2025",
    provider: "New Vardhaman Educational Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Indian Institute Of Astrophysics Post Doctoral Fellowship 2025",
    provider: "The Indian Institute of Astrophysics (IIA)",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "PHD, Post Doctoral",
    link: "https://gform"
  },
  {
    name: "Deepam Scholarship 2025",
    provider: "Deepam Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Shree Maheshwari Foundation Higher Education Scholarship 2025",
    provider: "Shree Maheshwari Foundation",
    deadline: "30 September",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Fisheries E Grants Scholarship 2025",
    provider: "Government Of Kerala",
    deadline: "31 May",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "Peacock Scholarship 2025",
    provider: "Saraswati Global School",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11",
    link: "https://gform"
  },
  {
    name: "Sun Foundation Merit Cum Means Scholarship 2025",
    provider: "Sun Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Kanuri Ananda Kumari Memorial Scholarship 2025",
    provider: "Kanuri Ananda Kumari Memorial Charitable Trust",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Nabanna Scholarship 2025",
    provider: "The West Bengal Chief Minister Relief Fund",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Mani Mann Fellowship 2025",
    provider: "Sanskriti Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "SMJV General Scholarship 2025",
    provider: "Shri Mahavira Jaina Vidyalaya",
    deadline: "31 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Diploma, Bachelors",
    link: "https://gform"
  },
  {
    name: "NC Parikh Family Charitable Trust Gujarati Scholarship 2025",
    provider: "NC Parikh Family Charitable Trust",
    deadline: "30 July",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Vikash Educational Charitable Trust Scholarship 2025",
    provider: "Vikash Educational Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Combined Counselling Board Scholarship 2025",
    provider: "CCB (Combined Counselling Board)",
    deadline: "20 May",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Big Dream Scholarship 2025 By StockGro",
    provider: "StockGro",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Menda Foundation Scholarship 2025",
    provider: "Menda Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "All India Medical Scholarship Entrance Test 2025",
    provider: "AIMSET Educational Foundation",
    deadline: "15 June",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12",
    link: "https://gform"
  },
  {
    name: "Rahbar Foundation Scholarship 2025",
    provider: "Rahbar Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Nishkam Sewa Bharti Trust Scholarship 2025",
    provider: "Nishkam Sewa Bharti Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Naveen Jindal Yashasvi Scholarship 2025",
    provider: "Naveen Jindal Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Diploma, Bachelors, Others",
    link: "https://gform"
  },
  {
    name: "Dream India Educational Scholarship 2025",
    provider: "Dream India",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "Kalakriti Fellowship 2025",
    provider: "Sanskriti Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "UMMEED Scholarship 2025",
    provider: "Dr. Majeed Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors",
    link: "https://gform"
  },
  {
    name: "Dadabhai Naoroji Loan Scholarship 2025",
    provider: "Areez Khambatta Benevolent Trust (AKBT) Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Masters",
    link: "https://gform"
  },
  {
    name: "The Goa Hindu Association Scholarship 2025",
    provider: "The Goa Hindu Association",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Bachelors, Others",
    link: "https://gform"
  },
  {
    name: "Samoon Foundation Scholarship 2025",
    provider: "Samoon Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "YRP Foundation Scholarship 2025",
    provider: "YRP Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Ayaan Foundation Scholarship 2025",
    provider: "Ayaan Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical",
    link: "https://gform"
  },
  {
    name: "Harsh And Payal Hada Foundation Scholarship 2025",
    provider: "Harsh And Payal Hada Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 11, Class 12, Engineering, Medical, Bachelors, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "Prabha Dutt Fellowship 2025",
    provider: "Sanskriti Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters, PHD",
    link: "https://gform"
  },
  {
    name: "Geddes Scholarship 2025",
    provider: "Sanskriti Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Bachelors, Masters, PHD",
    link: "https://gform"
  },
  {
    name: "Sanskriti Madhobi Chatterji Memorial Fellowship 2025",
    provider: "Sanskriti Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Ohm Jyoti Trust Scholarship 2025",
    provider: "Ohm Jyoti Education Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12, Diploma, Engineering, Medical, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "Canara Bank Scholarship 2025",
    provider: "Canara Bank",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Masters, PHD, Professional courses",
    link: "https://gform"
  },
  {
    name: "Sitaram Jindal Foundation Scholarship 2025",
    provider: "Sitaram Jindal Foundation",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Hope Scholarship 2025",
    provider: "CETA GALAXY Charitable Trust",
    deadline: "15 July",
    amount: "Click on \"View Details\"",
    eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
    link: "https://gform"
  },
  {
    name: "HWA Scholarship 2025",
    provider: "Hira Foundation Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "Muslim Education Trust Scholarship 2025",
    provider: "Muslim Education Trust",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Medical, Masters, Professional courses",
    link: "https://gform"
  },
  {
    name: "SMRATA Charitable Trust Scholarship 2025",
    provider: "SMRATA Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "Class 1 to 6, Class 7 to 9, Class 10, Class 11, Class 12, Bachelors, Masters",
    link: "https://gform"
  },
  {
    name: "TCK Foundation Scholarship 2025",
    provider: "TCK Foundation",
    deadline: "30 June",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering, Bachelors",
    link: "https://gform"
  },
  {
    name: "R D Sethna Loan Scholarship 2025",
    provider: "RD Sethna Scholarship Fund",
    deadline: "31 August",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "OM Charitable Trust Educational Scholarship 2025",
    provider: "OM Charitable Trust",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "All India Youth Scholarship Entrance Examination 2025",
    provider: "AIYSEE",
    deadline: "15 April Extended Date",
    amount: "Click on \"View Details\"",
    eligibility: "Class 12",
    link: "https://gform"
  },
  {
    name: "Ajivasan Trust Scholarship 2024 25",
    provider: "Ajivasan Trust",
    deadline: "15 May",
    amount: "Click on \"View Details\"",
    eligibility: "All",
    link: "https://gform"
  },
  {
    name: "IIAS Fellowship 2024",
    provider: "Indian Institute of Advanced Study Shimla",
    deadline: "31 December",
    amount: "Click on \"View Details\"",
    eligibility: "PHD",
    link: "https://gform"
  },
  {
    name: "WISE Post Doctoral Fellowship 2024",
    provider: "Department of Science and Technology",
    deadline: "08 September",
    amount: "Click on \"View Details\"",
    eligibility: "PHD",
    link: "https://gform"
  },
  {
    name: "CSIR Bhatnagar Fellowship",
    provider: "Council of Scientific and Industrial Research",
    deadline: "07 September",
    amount: "Click on \"View Details\"",
    eligibility: "Engineering",
    link: "https://gform"
  }
];



const categories = [
  'Top Scholarship for Class 10',
  'Top Scholarship for Class 11',
  'Top Scholarship for Class 12',
  'Top Scholarship for ITI',
  'Top Scholarship for Diploma',
  'Top Scholarship for Bachelors',
  'Top Scholarship for Engineering',
  'Top Scholarship for Medical',
  'Top Scholarship for Masters',
  'Top Scholarship for Professional Course',
  'Top Scholarship for PhD',
  'Top Scholarship for Post Doctoral',
  'Top Abroad Scholarships'
];

export default function ScholarshipMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(12); // Start with 10 scholarships visible

  const filteredScholarships = scholarships.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12); // Load 10 more scholarships
  };

  const shouldShowLoadMore = filteredScholarships.length > visibleCount; // Show button if more than visibleCount scholarships exist

  useEffect(() => {
    // Add the bending line effect style only on the client-side after the component is mounted
    const style = `
      @keyframes bendLine {
        0% {
          transform: translate(-50%, -50%) scaleX(1);
        }
        50% {
          transform: translate(-50%, -50%) scaleX(1.3);
        }
        100% {
          transform: translate(-50%, -50%) scaleX(1);
        }
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = style;
    document.head.appendChild(styleSheet);
  }, []);

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
              Discover Scholarships Across All Education Levels
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
            Explore government and private scholarships tailored for Class 10 to PhD, including ITI, medical, engineering, and international opportunities.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2.2rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <select style={selectStyle}>
              <option>Select State</option>
              <option>All India</option>
              <option>West Bengal</option>
              <option>Maharashtra</option>
            </select>

            <select style={selectStyle}>
              <option>Select Amount</option>
              <option>₹0 - ₹5,000</option>
              <option>₹5,001 - ₹10,000</option>
              <option>₹10,001 and above</option>
            </select>

            <input
              type="text"
              placeholder="Search Scholarships"
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
            {categories.map((item, idx) => (
              <Link
                key={idx}
                href={`/scholarship/${item.toLowerCase().replace(/\s+/g, '-')}`}
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
                {item}
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