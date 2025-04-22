'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const scholarships = [
    {
      name: "Caterpillar Foundation Scholarship 2025",
      provider: "Caterpillar Foundation",
      deadline: "15 April",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering",
      link: "https://gform"
    },
    {
      name: "Huang Leadership Development Scholarship 2025",
      provider: "Greater Kanas City Community Foundation",
      deadline: "13 May",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering",
      link: "https://gform"
    },
    {
      name: "William Lacy Phillips Memorial Scholarship 2025",
      provider: "Phillips",
      deadline: "02 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "Laura Bassi Scholarship 2025",
      provider: "The Laura Bassi",
      deadline: "30 November",
      amount: "Click on \"View Details\"",
      eligibility: "Masters, Post Doctoral",
      link: "https://gform"
    },
    {
      name: "Believe Achieve And Succeed Scholarship 2025",
      provider: "Tre' Whittaker",
      deadline: "22 July",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "Alfred Camp Memorial Scholarship 2025",
      provider: "Fort Lewis College",
      deadline: "11 April",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering",
      link: "https://gform"
    },
    {
      name: "Carole Willis Criminal Justice Reform Scholarship 2025",
      provider: "Charles Willis",
      deadline: "02 May",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "Gilman Scholarship 2025",
      provider: "Gilman",
      deadline: "10 October",
      amount: "Click on \"View Details\"",
      eligibility: "Diploma, Bachelors, Masters",
      link: "https://gform"
    },
    {
      name: "AIFS Generation Study Abroad Scholarship 2025",
      provider: "AIFS",
      deadline: "25 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters",
      link: "https://gform"
    },
    {
      name: "American Dream Scholarship 2025",
      provider: "FVI School of Nursing and Technology",
      deadline: "01 July",
      amount: "Click on \"View Details\"",
      eligibility: "Medical",
      link: "https://gform"
    },
    {
      name: "Robert F Lawson Fund for Careers Scholarship 2025",
      provider: "Lance Lawson",
      deadline: "16 April",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "Deakin University Scholarship 2025",
      provider: "Australian Government (RTP) & Deakin University (DUPR)",
      deadline: "24 August",
      amount: "Click on \"View Details\"",
      eligibility: "Masters, PHD",
      link: "https://gform"
    },
    {
      name: "Google Conference Scholarship 2025",
      provider: "Google",
      deadline: "31 May",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors, Masters",
      link: "https://gform"
    },
    {
      name: "Michaella Neal Memorial Scholarship 2025",
      provider: "Kelley Bevis",
      deadline: "29 June",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "Human Studies Scholarship 2025",
      provider: "George Mason University(GMU)",
      deadline: "31 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "David Mann Memorial Scholarship 2025",
      provider: "Mann Family",
      deadline: "31 July",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "IAHPC Scholarship 2025",
      provider: "IAHPC",
      deadline: "30 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Islamic Development Bank Scholarship 2025",
      provider: "Islamic Development Bank",
      deadline: "30 April",
      amount: "Click on \"View Details\"",
      eligibility: "Masters, PHD",
      link: "https://gform"
    },
    {
      name: "OMNIS Scholarship 2025",
      provider: "Omnis Education",
      deadline: "25 June",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Aziz Foundation Scholarship 2025",
      provider: "Aziz Foundation",
      deadline: "10 June",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "S3G Advisors NextGen Scholarship 2025",
      provider: "Sunil Agarwal",
      deadline: "01 July",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "Skoltech University Scholarship 2025",
      provider: "Skolkovo Institute of Science and Technology (Skoltech), Russia",
      deadline: "07 July",
      amount: "Click on \"View Details\"",
      eligibility: "Masters, PHD",
      link: "https://gform"
    },
    {
      name: "Wellington Doctoral Scholarship 2025",
      provider: "Victoria University of Wellington",
      deadline: "01 July",
      amount: "Click on \"View Details\"",
      eligibility: "PHD",
      link: "https://gform"
    },
    {
      name: "Tongarewa International Scholarship 2025",
      provider: "Te Herenga Waka—Victoria University of Wellington, New Zealand",
      deadline: "01 August",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters",
      link: "https://gform"
    },
    {
      name: "University Of Hamburg Merit Scholarship 2025",
      provider: "University of Hamburg, Germany",
      deadline: "15 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters, PHD",
      link: "https://gform"
    },
    {
      name: "5Rivers Foundation Scholarship 2025",
      provider: "5Rivers Foundation",
      deadline: "31 July",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "CJM Rampelt Family Legacy Scholarship 2025",
      provider: "Cheryl Rampelt",
      deadline: "21 June",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "New Star Scholarship 2025",
      provider: "New Star Scholarship Foundation",
      deadline: "31 May",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "Think Big Scholarship 2025",
      provider: "University of Bristol",
      deadline: "23 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters",
      link: "https://gform"
    },
    {
      name: "Transilvania Academica Scholarship 2025",
      provider: "Foreign (Offered by Transilvania University, Romania)",
      deadline: "25 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters, PHD",
      link: "https://gform"
    },
    {
      name: "SIT Study Abroad Scholarship 2025",
      provider: "The School for International Training (SIT)",
      deadline: "30 June",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Fannie Mae College Scholarship 2025",
      provider: "Fannie Mae",
      deadline: "01 May",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "ReachIvy Scholarship 2025",
      provider: "ReachIvy",
      deadline: "30 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Desire To Inspire Scholarship 2025",
      provider: "Black Man, M.D.",
      deadline: "21 June",
      amount: "Click on \"View Details\"",
      eligibility: "Class 10, Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "Folded Flag Foundation Scholarship 2025",
      provider: "Folded Flag Foundation",
      deadline: "15 April",
      amount: "Click on \"View Details\"",
      eligibility: "All",
      link: "https://gform"
    },
    {
      name: "Hubert Colangelo Literacy Scholarship 2025",
      provider: "Lupe Colangelo",
      deadline: "01 June",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "Atal Bihari Vajpayee General Scholarship 2025",
      provider: "The Embassy of India, Kathmandu",
      deadline: "30 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters, PHD",
      link: "https://gform"
    },
    {
      name: "Fulbright Nehru Doctoral Research Fellowship 2025",
      provider: "United States-India Educational Foundation (USIEF)",
      deadline: "15 July",
      amount: "Click on \"View Details\"",
      eligibility: "PHD",
      link: "https://gform"
    },
    {
      name: "Private Henry Walker Minority Scholarship 2025",
      provider: "Steven Franklin",
      deadline: "15 June",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "Nuclear Medicine Technologist Scholarship 2025",
      provider: "Christan McDonald Leto",
      deadline: "11 September",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "UEL Postgraduate Scholarship 2025",
      provider: "University of East London (UEL), UK",
      deadline: "03 August",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "Poland Government Ulam NAWA Scholarship 2025",
      provider: "Polish National Agency for Academic Exchange (NAWA)",
      deadline: "12 May",
      amount: "Click on \"View Details\"",
      eligibility: "PHD",
      link: "https://gform"
    },
    {
      name: "Upakar Scholarship 2025",
      provider: "Upakar Foundation",
      deadline: "30 April",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors, Masters",
      link: "https://gform"
    },
    {
      name: "Zavalla Students Scholarship 2025",
      provider: "Zavalla Prairie Community Connections",
      deadline: "21 July",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "Future Women In STEM Scholarship 2025",
      provider: "Keisha Durham",
      deadline: "02 December",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "D K Bhave Scholarship 2025",
      provider: "Savitribai Phule Pune University",
      deadline: "30 May",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "Brian Shaw Memorial Scholarship 2025",
      provider: "E CLAMPUS VITUS",
      deadline: "10 June",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "Sewa Fellowship 2025",
      provider: "Sewa International",
      deadline: "05 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Positively Sharon Memorial Scholarship 2025",
      provider: "Leanna Ritchie",
      deadline: "08 July",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "Goldsmiths University International Scholarship 2024 25",
      provider: "Goldsmith University",
      deadline: "26 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters",
      link: "https://gform"
    },
    {
      name: "Seminole State College Foundation Scholarship 2025",
      provider: "Seminole State College Foundation",
      deadline: "15 November",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "New Hampshire Charitable Foundation Scholarship 2025",
      provider: "New Hampshire Charitable Foundation",
      deadline: "11 April",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Masters, PHD",
      link: "https://gform"
    },
    {
      name: "Dr Howard Hochman Zoological Scholarship 2025",
      provider: "DiCicco/Hochman",
      deadline: "31 October",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "Deloitte Scholarship 2025",
      provider: "One Young World",
      deadline: "16 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "HISA Youth Fellowship 2025",
      provider: "The Headway Institute of Strategic Alliance (HISA)",
      deadline: "15 April",
      amount: "Click on \"View Details\"",
      eligibility: "All",
      link: "https://gform"
    },
    {
      name: "Egyptian Public Schools Scholarship 2025",
      provider: "The American University in Cairo",
      deadline: "01 June",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Bower Friend Scholarship 2025",
      provider: "San Francisco State University (SFSU)",
      deadline: "27 April",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "Taylor Journal Scholarship 2025",
      provider: "Taylor Beavers",
      deadline: "01 June",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "Luisa De Vera Buena Memorial Scholarship 2025",
      provider: "Maria Macam & Dmitry Milikovsky",
      deadline: "29 January",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "PMI Academic Scholarship 2025",
      provider: "Project Management Institute",
      deadline: "01 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters, PHD",
      link: "https://gform"
    },
    {
      name: "Nokia Visiting Professor Scholarship 2025",
      provider: "Nokia Foundation",
      deadline: "06 November",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Disability In Social Work Scholarship 2025",
      provider: "Disability & Well-Being In Social Work",
      deadline: "02 June",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Martha Galvez Memorial Scholarship 2025",
      provider: "Cassie Galvez",
      deadline: "28 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Appalachian Region Vocational Scholarship 2025",
      provider: "Daelyn Chaney",
      deadline: "02 January",
      amount: "Click on \"View Details\"",
      eligibility: "Diploma, Engineering, Medical, Bachelors",
      link: "https://gform"
    },
    {
      name: "UCD MBA Regional Excellence Scholarship 2025",
      provider: "Michael Smurfit Graduate Business School",
      deadline: "30 April",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "Helmut Veith Scholarship 2025",
      provider: "Vienna Center for Logic and Algorithms (VCLA) at TU Wien",
      deadline: "30 November",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "Sanctuary Scholarship 2025",
      provider: "Oxford Brookes University, Headington",
      deadline: "25 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters",
      link: "https://gform"
    },
    {
      name: "Gina Colosimo Memorial Scholarship 2025",
      provider: "Jeffrey Craig’s Hair Concepts Inc.",
      deadline: "24 June",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "Jacques Deslauriers Fund Writing Scholarship 2025",
      provider: "Laval University (Universite Laval), Canada",
      deadline: "12 October",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "Khalifa University Scholarship 2025",
      provider: "Khalifa University",
      deadline: "14 April",
      amount: "Click on \"View Details\"",
      eligibility: "PHD",
      link: "https://gform"
    },
    {
      name: "Lancheros Scholarship 2025",
      provider: "Maria Lancheros",
      deadline: "10 May",
      amount: "Click on \"View Details\"",
      eligibility: "Diploma, Bachelors",
      link: "https://gform"
    },
    {
      name: "Oxford Executive Diploma Scholarship 2025",
      provider: "Saïd Business School, University of Oxford",
      deadline: "30 June",
      amount: "Click on \"View Details\"",
      eligibility: "Diploma",
      link: "https://gform"
    },
    {
      name: "Udonis Haslem Foundation BDJ40 Scholarship 2025",
      provider: "Udonis Haslem Foundation",
      deadline: "19 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "Fire And EMS Academy Scholarship 2025",
      provider: "Matt Linton",
      deadline: "06 August",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Australia Scholarship 2025",
      provider: "Australian Government",
      deadline: "30 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters",
      link: "https://gform"
    },
    {
      name: "Lanzhou University President Scholarship 2025",
      provider: "Lanzhou University of Technology, China",
      deadline: "30 June",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters, PHD",
      link: "https://gform"
    },
    {
      name: "Clark Emerging Leaders Scholarship 2025",
      provider: "Lorenzo Clark",
      deadline: "08 July",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "SBW Berlin Scholarship 2025",
      provider: "SBW Berlin",
      deadline: "31 December",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters",
      link: "https://gform"
    },
    {
      name: "University Paris Saclay IDEX Scholarship 2025",
      provider: "University Paris-Saclay",
      deadline: "09 May",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "Valerie Rabb Academic Scholarship 2025",
      provider: "All Val's Children Foundation",
      deadline: "06 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "Give Kids A Chance Scholarship 2025",
      provider: "Maimi Foundation",
      deadline: "27 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Future Lawyers Scholarship 2025",
      provider: "Maimi Foundation",
      deadline: "25 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Alan R Epstein Reach For The Stars Scholarship 2025",
      provider: "Maimi Foundation",
      deadline: "25 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Global Citizenship Scholarship 2025",
      provider: "University of Dundee, UK",
      deadline: "31 July",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters",
      link: "https://gform"
    },
    {
      name: "UCL Global Masters Scholarship 2025",
      provider: "University College London (UCL)",
      deadline: "08 May",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "Professor Barbara Raw Masters Scholarship 2025",
      provider: "Royal Holloway University of London",
      deadline: "12 June",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "Andrew Schultze Memorial Scholarship",
      provider: "Schultze family",
      deadline: "02 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "Cardiovascular and Respiratory Healthcare scholarship",
      provider: "Imperial College London",
      deadline: "31 May",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "SigaLa Education Scholarship",
      provider: "Karina Sigala",
      deadline: "05 July",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "Anne Seagrim Accommodation Scholarship",
      provider: "Imperial College London",
      deadline: "02 May",
      amount: "Click on \"View Details\"",
      eligibility: "Masters, PHD",
      link: "https://gform"
    },
    {
      name: "Vivian Srouji Memorial Scholarship 2025",
      provider: "Srouji Family",
      deadline: "01 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "Kristen Miles Women in Sports Scholarship 2025",
      provider: "Miles Reed Family",
      deadline: "16 July",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Sunshine Legall Scholarship 2025",
      provider: "Shawanda Legall",
      deadline: "01 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "EJS Foundation Minority Scholarship 2025",
      provider: "The EJS Foundation",
      deadline: "02 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Tortuga Study Abroad Scholarship 2025",
      provider: "Tortuga Backpacks",
      deadline: "15 April",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "Ralph J Tarraco Fine Arts Scholarship 2025",
      provider: "UNICO Foundation Inc.",
      deadline: "15 April",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "Dr Michael Paglia Scholarship 2025",
      provider: "Amber Wojcik",
      deadline: "05 June",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Thomas Sisters STEM Promotion Scholarship 2025",
      provider: "Thomas Sisters",
      deadline: "16 April",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "Deadly Scholarship 2025",
      provider: "Federation University",
      deadline: "05 December",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters",
      link: "https://gform"
    },
    {
      name: "Deadly Education Scholarship 2025",
      provider: "Federation University",
      deadline: "05 December",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters",
      link: "https://gform"
    },
    {
      name: "Minority Women In STEM Financial Need Scholarship 2025",
      provider: "Donald Huschle",
      deadline: "16 June",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "The Wander Fund Scholarship 2025",
      provider: "Heidi Hynd",
      deadline: "01 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "Samuel D Hartley Memorial Scholarship 2025",
      provider: "Hartley Family",
      deadline: "16 November",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "Gunvant And Bharati Parekh College Scholarship 2025",
      provider: "Parekh Family Foundation",
      deadline: "01 June",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "Kamal R Jones Memorial Scholarship 2025",
      provider: "Myron Jones",
      deadline: "03 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "William Griggs Memorial Scholarship 2025",
      provider: "William Griggs",
      deadline: "21 June",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "Cade Reddington Be The Light Scholarship 2025",
      provider: "Cade Reddington Memorial Fund",
      deadline: "23 October",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "Hot Jazz Jubilee Music Scholarship 2025",
      provider: "Hot Jazz Jubilee Inc",
      deadline: "16 July",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "Angelia Zeigler Gibbs Book Scholarship 2025",
      provider: "Adrienna Brown",
      deadline: "19 April",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "James Philip Mitton Memorial Scholarship 2025",
      provider: "Felicity Sanders",
      deadline: "21 April",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "Empower Her Scholarship 2025",
      provider: "Empower Her, LLC",
      deadline: "25 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "Unite Foundation Scholarship 2025",
      provider: "Unite Foundation",
      deadline: "20 June",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "FGCU Foundation Scholarship 2025",
      provider: "FGCU Foundation",
      deadline: "01 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "IFMA Foundation Scholarship 2025",
      provider: "IFMA Foundation",
      deadline: "15 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Hunter Dean Temple Art Scholarship 2025",
      provider: "Temple Sales Inc.",
      deadline: "12 June",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Scorenavigator Financial Literacy Scholarship 2025",
      provider: "ScoreNavigator Inc",
      deadline: "07 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "British Council PG Scholarship 2025",
      provider: "The British Council",
      deadline: "30 April",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "Caliber X Scholarship 2025",
      provider: "Caliber X LLC",
      deadline: "16 April",
      amount: "Click on \"View Details\"",
      eligibility: "Class 10",
      link: "https://gform"
    },
    {
      name: "Stephen Phillips Memorial Scholarship 2025",
      provider: "Phillips Memorial Scholarship Fund",
      deadline: "01 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Furniture Workers Willie Rudd Scholarship 2025",
      provider: "Furniture Workers-Communication Workers of America",
      deadline: "30 April",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Masters",
      link: "https://gform"
    },
    {
      name: "Louise Torraco Memorial Scholarship 2025",
      provider: "UNICO Foundation Inc.",
      deadline: "15 April",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering",
      link: "https://gform"
    },
    {
      name: "Margot Bogner Memorial Scholarship 2025",
      provider: "Margot Marie Pickering Bogner Memorial Scholarship Fund",
      deadline: "07 June",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Karnataka Prabuddha Overseas Scholarship 2025",
      provider: "Government Of Karnataka",
      deadline: "30 April",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "David G Sutton Memorial Scholarship",
      provider: "Stacy Mensch",
      deadline: "02 December",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "Vickie Drum Memorial Scholarship",
      provider: "David Cline",
      deadline: "02 June",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Kristinspiration Scholarship",
      provider: "Kristin Printon",
      deadline: "02 June",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Houston Scholarship 2025",
      provider: "The 5 Strong Scholarship Foundation, Inc.",
      deadline: "01 December",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "Nottingham Developing Solutions Scholarship 2025",
      provider: "The University Of Nottingham",
      deadline: "15 September",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering",
      link: "https://gform"
    },
    {
      name: "Ruth Finamore Scholarship 2025",
      provider: "Florida Nurses Association",
      deadline: "01 June",
      amount: "Click on \"View Details\"",
      eligibility: "Medical, Bachelors",
      link: "https://gform"
    },
    {
      name: "Vermell Segars Murphy Memorial Scholarship",
      provider: "Reginald Murphy",
      deadline: "02 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "Julius Quentin Jackson Scholarship",
      provider: "Julius Quentin",
      deadline: "12 April",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "Paul Hagelbarger Memorial Fund Scholarship 2024",
      provider: "Alaska Society of CPAs",
      deadline: "20 November",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering",
      link: "https://gform"
    },
    {
      name: "Coach Doc Ryan Memorial Scholarship",
      provider: "Ryan family",
      deadline: "02 June",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "Jeune Mondestin Scholarship",
      provider: "Eronel Mondestin",
      deadline: "31 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Four Year Harry Wong Scholarship",
      provider: "San Jose State University",
      deadline: "01 May",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "Mark Suren Melkonian Memorial Scholarship",
      provider: "Bryce Hovannisian",
      deadline: "11 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Josh Chapman Memorial Scholarship",
      provider: "Lecza Family",
      deadline: "25 April",
      amount: "Click on \"View Details\"",
      eligibility: "Class 10, Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "State Bank Of India Scholarship 2025",
      provider: "State Bank Of India",
      deadline: "21 April",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering",
      link: "https://gform"
    },
    {
      name: "In My Mothers Name Scholarship",
      provider: "Intention Enterprises LLC",
      deadline: "12 April",
      amount: "Click on \"View Details\"",
      eligibility: "Medical",
      link: "https://gform"
    },
    {
      name: "Cs Get Degrees Scholarship",
      provider: "Todd Edwards",
      deadline: "15 August",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering",
      link: "https://gform"
    },
    {
      name: "Jerrye Chesnes Memorial Scholarship",
      provider: "Chesnes",
      deadline: "02 June",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Sandra West ALS Foundation Scholarship 2024",
      provider: "West Family",
      deadline: "01 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Shelia Matteson Stager Memorial Scholarship",
      provider: "Stager",
      deadline: "11 May",
      amount: "Click on \"View Details\"",
      eligibility: "Medical",
      link: "https://gform"
    },
    {
      name: "Kayla Nicole Monk Memorial Scholarship",
      provider: "Monk Family",
      deadline: "04 November",
      amount: "Click on \"View Details\"",
      eligibility: "Class 10, Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "ServiceScape Scholarship 2025",
      provider: "ServiceScape Incorporated",
      deadline: "30 November",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Bachelors, Masters",
      link: "https://gform"
    },
    {
      name: "Imm Astronomy Scholarship 2024",
      provider: "Gary Imm",
      deadline: "25 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "Ride For Kip Scholarship 2024",
      provider: "AOT racing inc",
      deadline: "27 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "Rodney James Pimentel Memorial Scholarship",
      provider: "RJ Pimentel Memorial Foundation",
      deadline: "01 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 10, Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "East China Normal University Scholarship 2024",
      provider: "China Scholarship Council (CSC)",
      deadline: "15 June",
      amount: "Click on \"View Details\"",
      eligibility: "Masters, Post Doctoral",
      link: "https://gform"
    },
    {
      name: "Thomas Mashig Foundation Trade School Scholarship",
      provider: "The Thomas Mashig Foundation",
      deadline: "16 April",
      amount: "Click on \"View Details\"",
      eligibility: "Class 10, ITI, Diploma",
      link: "https://gform"
    },
    {
      name: "Central South University CSC Scholarship 2025",
      provider: "Chinese Government & Central South University (CSU)",
      deadline: "31 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters, PHD",
      link: "https://gform"
    },
    {
      name: "Quality Temp Staffing Radiology Scholarship",
      provider: "Quality Temp Staffing",
      deadline: "02 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Barry Miller Family First Generation Scholarship",
      provider: "University of Central Florida",
      deadline: "31 October",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "RonranGlee Special Needs Teacher Literary Scholarship",
      provider: "Ronne Gleason",
      deadline: "19 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Edwards Maxwell Scholarship",
      provider: "Amera Edwards",
      deadline: "31 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Camille Donaldson Memorial Scholarship",
      provider: "Maggie Watkins",
      deadline: "16 April",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "Lyndsey Scott Coding Scholarship",
      provider: "Lyndsey Scott",
      deadline: "16 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Tianjin Government Scholarship 2025",
      provider: "Tianjin Municipal Government, China",
      deadline: "31 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters, PHD",
      link: "https://gform"
    },
    {
      name: "Ferak Family Scholarship",
      provider: "Michael Ferak",
      deadline: "06 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "Josh Edwards Memorial Scholarship",
      provider: "Holly Lloyd",
      deadline: "08 July",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "Michele L Durant Scholarship",
      provider: "Heidel",
      deadline: "16 May",
      amount: "Click on \"View Details\"",
      eligibility: "Diploma, Bachelors",
      link: "https://gform"
    },
    {
      name: "Breast Cancer Awareness Scholarship",
      provider: "Elizabeth Mettille",
      deadline: "13 October",
      amount: "Click on \"View Details\"",
      eligibility: "Class 10, Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "Wendell And Gwendolyn Clement Scholarship",
      provider: "Clement",
      deadline: "16 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Diabetes Impact Scholarship 2024",
      provider: "Alexis Book",
      deadline: "02 October",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Danny Russell Law Firm LLC Scholarship",
      provider: "Russell Law Firm, LLC",
      deadline: "31 August",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "CL Proferes Scholarship 2024",
      provider: "Abigail Williams",
      deadline: "01 July",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Organic Formula Shop Single Parent Scholarship 2024",
      provider: "Organic Formula Shop",
      deadline: "06 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Heron Wolf Commercial Real Estate Scholarship",
      provider: "Heron Wolf Staffing",
      deadline: "02 July",
      amount: "Click on \"View Details\"",
      eligibility: "Class 10, Bachelors",
      link: "https://gform"
    },
    {
      name: "University Of Alberta MBA Scholarship 2025",
      provider: "University of Alberta",
      deadline: "01 May",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "Servela Theodore Memorial Scholarship 2024",
      provider: "Theodore Family",
      deadline: "02 November",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10, Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "New Generation Of Latino Leaders Scholarship",
      provider: "Annie Levine",
      deadline: "16 July",
      amount: "Click on \"View Details\"",
      eligibility: "Class 10, Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "Sunshine DC Memorial Scholarship 2024",
      provider: "Latrice Green",
      deadline: "24 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "El Jefe Entrepreneurial Scholarship 2024",
      provider: "Yarish Family",
      deadline: "01 August",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "Tamurais Adventure Scholarship 2024",
      provider: "Tammy Michaels",
      deadline: "01 July",
      amount: "Click on \"View Details\"",
      eligibility: "Medical",
      link: "https://gform"
    },
    {
      name: "Colton Frahm Memorial Scholarship 2024",
      provider: "Deans Family",
      deadline: "17 April",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Diploma",
      link: "https://gform"
    },
    {
      name: "Luis Escobar III Foundation Scholarship 2024",
      provider: "Escobar",
      deadline: "01 May",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering",
      link: "https://gform"
    },
    {
      name: "Falio Leyba Scholarship 2024",
      provider: "Leyba",
      deadline: "16 April",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "Jean Ramirez Scholarship 2024",
      provider: "JR98 Inc",
      deadline: "01 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Aserina Hill Memorial Scholarship",
      provider: "Hill Family",
      deadline: "17 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Krewe de HOU Scholarship",
      provider: "Krewe de Hou Foundation LLC",
      deadline: "26 August",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "Judy Allsup Accounting Scholarship",
      provider: "Fort Lewis College",
      deadline: "11 April",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering",
      link: "https://gform"
    },
    {
      name: "Global Scholarship For International Students 2024",
      provider: "GlobalScholarship",
      deadline: "31 May",
      amount: "Click on \"View Details\"",
      eligibility: "Diploma, Medical, Bachelors, Masters, PHD",
      link: "https://gform"
    },
    {
      name: "French Broad Vignerons Annual Scholarship",
      provider: "French Broad Vignerons of WNC",
      deadline: "11 June",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Christian Myles Pratt Foundation Fine Arts Scholarship",
      provider: "Rakeia Pratt and Family",
      deadline: "13 August",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Steven Penn Bryan Scholarship",
      provider: "Janai Bryan",
      deadline: "17 April",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "Clark Atlanta University Naval ROTC Scholarship",
      provider: "Clark Atlanta University",
      deadline: "01 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "EWU Freshmen Honors Scholarship 2024",
      provider: "Eastern Washington University",
      deadline: "09 September",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Mental Health Empowerment Scholarship 2024",
      provider: "Learner",
      deadline: "21 April",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "Aaron Libson Champion Of Human Rights Scholarship 2024",
      provider: "Ingrid",
      deadline: "02 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "Douglas W Mummert Scholarship 2024",
      provider: "National Academy of Television Arts and Sciences",
      deadline: "17 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Maxwell Tuan Nguyen Memorial Scholarship 2024",
      provider: "Nguyen",
      deadline: "02 August",
      amount: "Click on \"View Details\"",
      eligibility: "Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "Lisa Sanders Scholarship 2024",
      provider: "Lisa Sanders",
      deadline: "16 April",
      amount: "Click on \"View Details\"",
      eligibility: "Class 10, Bachelors",
      link: "https://gform"
    },
    {
      name: "Learner Calculus Scholarship 2024",
      provider: "Learner",
      deadline: "02 August",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Medical",
      link: "https://gform"
    },
    {
      name: "Bob Thompson Memorial Scholarship 2024",
      provider: "Thompson",
      deadline: "31 May",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering",
      link: "https://gform"
    },
    {
      name: "NASE Dependent Scholarship 2024",
      provider: "National Association for the Self-Employed",
      deadline: "30 April",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Masters",
      link: "https://gform"
    },
    {
      name: "Ethel Hayes Destigmatization Of Mental Health Scholarship 2024",
      provider: "Dr.Terence O. Hayes Sr.",
      deadline: "14 June",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Dark And Light Scholarship 2024",
      provider: "Waynika Hall",
      deadline: "14 July",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Jennifer D Hale Memorial Scholarship 2024",
      provider: "Haley burrow",
      deadline: "20 May",
      amount: "Click on \"View Details\"",
      eligibility: "Medical",
      link: "https://gform"
    },
    {
      name: "Dr Soronnadi Nnaji Legacy Scholarship 2024",
      provider: "Nnaji Family",
      deadline: "13 July",
      amount: "Click on \"View Details\"",
      eligibility: "Class 10, Bachelors",
      link: "https://gform"
    },
    {
      name: "France Nokia Scholarship 2024",
      provider: "Nokia Foundation",
      deadline: "17 April",
      amount: "Click on \"View Details\"",
      eligibility: "PHD",
      link: "https://gform"
    },
    {
      name: "Justin Moeller Memorial Scholarship 2024",
      provider: "WorkStream Technology",
      deadline: "09 July",
      amount: "Click on \"View Details\"",
      eligibility: "Class 10, Engineering",
      link: "https://gform"
    },
    {
      name: "Al Luna Memorial Design Scholarship 2024",
      provider: "Luna Family",
      deadline: "16 April",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "Joseph Joshua Searor Memorial Scholarship 2024",
      provider: "Searor",
      deadline: "06 July",
      amount: "Click on \"View Details\"",
      eligibility: "Medical",
      link: "https://gform"
    },
    {
      name: "Vice Chancellors International Scholarship 2024",
      provider: "Griffith University",
      deadline: "30 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors, Masters",
      link: "https://gform"
    },
    {
      name: "Amsterdam Merit Scholarship 2024",
      provider: "The University of Amsterdam",
      deadline: "01 May",
      amount: "Click on \"View Details\"",
      eligibility: "Engineering, Bachelors",
      link: "https://gform"
    },
    {
      name: "Jason David Anderson Memorial Scholarship 2024",
      provider: "Kate Sansone",
      deadline: "19 May",
      amount: "Click on \"View Details\"",
      eligibility: "Medical",
      link: "https://gform"
    },
    {
      name: "Ward Green Scholarship 2024",
      provider: "Ward Green Family",
      deadline: "26 April",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Williams Foundation Trailblazer Scholarship 2024",
      provider: "Williams Foundation",
      deadline: "20 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Kristen McCartney Perseverance Scholarship 2024",
      provider: "Kristen’s Krew",
      deadline: "16 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10, Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "Sean Flynn Memorial Scholarship 2024",
      provider: "Sean Flynn Foundation",
      deadline: "02 October",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "Elijahs Helping Hand Scholarship 2024",
      provider: "Sheehan",
      deadline: "13 May",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Joseph C Lowe Memorial Scholarship",
      provider: "Lowe Family",
      deadline: "02 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12, Bachelors",
      link: "https://gform"
    },
    {
      name: "Joseph A Terbrack ALS Memorial Scholarship",
      provider: "Laura Terbrack",
      deadline: "02 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 7 to 9, Class 10",
      link: "https://gform"
    },
    {
      name: "Faatuai And Fatilua Memorial Scholarship 2024",
      provider: "Fatilua Family",
      deadline: "26 November",
      amount: "Click on \"View Details\"",
      eligibility: "Bachelors",
      link: "https://gform"
    },
    {
      name: "Hispanic Climb To Success Scholarship 2024",
      provider: "Tirado Family",
      deadline: "19 May",
      amount: "Click on \"View Details\"",
      eligibility: "Class 11, Class 12",
      link: "https://gform"
    },
    {
      name: "Harvard University MBA Scholarship 2024",
      provider: "Boustany Foundation",
      deadline: "31 May",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "Trevor Alexander Memorial Tuition Scholarship",
      provider: "Southern Crescent Technical College",
      deadline: "14 May",
      amount: "Click on \"View Details\"",
      eligibility: "Masters",
      link: "https://gform"
    },
    {
      name: "Frank And Patty Skerl Educational Scholarship For Disabled",
      provider: "Skerl Family",
      deadline: "20 April",
      amount: "Click on \"View Details\"",
      eligibility: "Class 10, Bachelors",
      link: "https://gform"
    },
    {
      name: "Abel Visiting Scholarship 2024",
      provider: "International Mathematical Union (IMU)",
      deadline: "30 August",
      amount: "Click on \"View Details\"",
      eligibility: "PHD, Post Doctoral",
      link: "https://gform"
    },
    {
      name: "Harvard Radcliffe Institute Fellowship",
      provider: "Harvard Radcliffe Institute",
      deadline: "31 May",
      amount: "Click on \"View Details\"",
      eligibility: "Masters, PHD",
      link: "https://gform"
    }
  ];

export default function AbroadScholarships() {
  const [visibleCount, setVisibleCount] = useState(6); // Initial scholarships shown (5)
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
          Top Scholarships for Studying Abroad
        </h1>

        <p
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            color: '#555',
            fontSize: '1.1rem',
          }}
        >
          Explore scholarships that provide funding for studying abroad in countries like the US, UK, Germany, Australia, and more.
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
