'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const educationalLoans = [
    {
      "name": "Shree Patan Jain Mandal Education Loan",
      "provider": "Shree Patan Jain Mandal Mumbai",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "United Way Of Baroda Education Loan",
      "provider": "United Way Of Baroda Foundation",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "JITO Education Assistance Foundation Education Loan",
      "provider": "JITO",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "OBC Rights Eduacation Loan",
      "provider": "OBC Rights",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Student Credit Card Free Loan Scheme",
      "provider": "The Department Of Higher Education, Govt. Of West Bengal",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Paras Education Services Education Loan",
      "provider": "Paras Education Services",
      "deadline": "31 December",
      "eligibility": "Engineering, Medical, Professional courses",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Jain Jagruti Charitable Trust Education Loan",
      "provider": "Jain Jagruti Charitable Trust",
      "deadline": "31 December",
      "eligibility": "Engineering, Medical, Bachelors, Masters, Professional courses",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Valor Trust Education Loan",
      "provider": "Valor Trust",
      "deadline": "31 December",
      "eligibility": "Professional courses",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Zalawadi Sabha Charitable Foundation Education Loan",
      "provider": "Zalawadi Sabha Charitable Foundation",
      "deadline": "31 December",
      "eligibility": "Engineering, Masters, PHD, Professional courses",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Edu Trust Education Loan",
      "provider": "Edu Trust",
      "deadline": "31 December",
      "eligibility": "Engineering, Medical, Bachelors, Masters, Professional courses",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Interest Free Loan For Education",
      "provider": "Diay Pakistan Organisation",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Interest Free",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "APGVB Bank Education Loan",
      "provider": "APGVB Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Shri Bhuri Bai Educational Trust Education Loan",
      "provider": "Shri Bhuri Bai Educational Trust",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Educare Education Loan 2025",
      "provider": "Educare",
      "deadline": "31 December",
      "eligibility": "Class 12, Diploma, Engineering, Medical, Bachelors, Masters, Professional courses",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Saraswathi Educational Support Trust Education Loan",
      "provider": "Saraswathi Educational Support Trust",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Punjab Gramin Bank Education Loan",
      "provider": "Punjab Gramin Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Jayoti Vidyapeeth Womens University Education Loan",
      "provider": "Jayoti Vidyapeeth Womens University",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Success Educational Trust Education Loan",
      "provider": "Success Educational Trust",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Suman Ramesh Tulsiani Charitable Trust Education Loan 2025",
      "provider": "Suman Ramesh Tulsiani Charitable Trust",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "RBL Bank Education Loan",
      "provider": "RBL Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Punjab And Sind Bank Education Loan",
      "provider": "Punjab & Sind bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Karnataka Bank Education Loan 2025",
      "provider": "Karnataka Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "UCO Bank Education Loan",
      "provider": "UCO Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Kotak Mahindra Bank Education Loan",
      "provider": "Kotak Mahindra Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Indian Overseas Bank Education Loan",
      "provider": "Indian Overseas Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Bank Of India Education Loan",
      "provider": "Bank Of India",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "City Union Bank Education Loan",
      "provider": "City Union Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "ICICI Bank Education Loan",
      "provider": "ICICI Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Punjab National Bank Education Loan",
      "provider": "Punjab National bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Canara Bank Education Loan",
      "provider": "Canara Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Avanse Education Loan 2025",
      "provider": "Avanse Financial Services LTD",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "HDFC Bank Education Loan",
      "provider": "HDFC Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Central Bank Education Loan",
      "provider": "Central Bank Of India",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Dhanlaxmi Bank Education Loan 2025",
      "provider": "Dhanlaxmi Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Axis Bank Education Loan 2025",
      "provider": "Axis Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Federal Bank Education Loan",
      "provider": "Federal Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "HDFC Credilla Education Loan",
      "provider": "HDFC Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Varthana Educaion Loan",
      "provider": "Varthana",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Saptagiri Grameena Bank Education Loan",
      "provider": "Saptagiri Grameena Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Abhyudaya Bank Education Loan",
      "provider": "Abhyudaya Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Working Professionals Education Loan",
      "provider": "i2iFunding",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Tata Capital Education Loan",
      "provider": "Tata Capital",
      "deadline": "31 December",
      "eligibility": "PG-Diploma, Engineering, Bachelors, Masters, PHD",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Human Welfare Foundation Education Loan",
      "provider": "Human Welfare Foundation",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "HSBC Bank Education Loan",
      "provider": "HSBC Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Auxilo Education Loan",
      "provider": "Auxilo The Next Level Becons",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "South Indian Bank Education Loan",
      "provider": "South Indian Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Karur Vysya Bank Education Loan",
      "provider": "Karur Vysya Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "IndusInd Bank Education Loan",
      "provider": "IndusInd Bank",
      "deadline": "31 December",
      "eligibility": "PG-Diploma, Bachelors, Masters, PHD",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Reliance Finance Educational Loan",
      "provider": "Reliance Finance Limited",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Akola Urban Bank Education Loan",
      "provider": "Akola Urban Coop Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Ahmedabad Mercantile Cooperative Bank Education Loan",
      "provider": "Ahmedabad Mercantile Cooperative Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Spoctree Education Loan",
      "provider": "Spoctree",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "NSKFDC Education Loan",
      "provider": "National Safai Karamcharis Finance & Development Corporation",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "TJSB Bank Education Loan",
      "provider": "TJSB Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "NBCFDC Education Loan",
      "provider": "National Backward Classes Finance & Development Corporation",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "New Swarnima Education Loan",
      "provider": "NSFDC",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Jammu And Kashmir Bank Education Loan",
      "provider": "Jammu & Kashmir Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Yes Bank Education Loan",
      "provider": "Yes Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "TMB Education Loan",
      "provider": "Tamilnad Mercantile Bank Ltd.",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Allahabad Bank Education Loan",
      "provider": "Allahabad Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Saraswat Bank Education Loan",
      "provider": "Saraswat Bank Co-operative LTD.",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Maharashtra Bank Education Loan",
      "provider": "Bank of Maharashtra",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Short Term Education Loan 2025",
      "provider": "The Goa State Scheduled Tribes Finance and Development Corporation Limited",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Bidya Lakshmi Education Loan 2025",
      "provider": "SBI Bank Collaborated With Govt. Of Assam",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Soft Loan For Women Entrepreneurs 2025",
      "provider": "The Kerala Startup Mission",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "IDFC FIRST Bank Education loan",
      "provider": "IDFC First Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "IBA Model Education Loan",
      "provider": "Canara Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Star Education Loan",
      "provider": "Bank Of India",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Micro Finance Education Loan 2025",
      "provider": "West Bengal Minority Development and Finance Corporation",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "HDFC Education Loan",
      "provider": "HDFC Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "West Bengal Education Loan",
      "provider": "West Bengal Minorities' Development and Finance Corporation",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Union Bank Education Loan",
      "provider": "Union Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "IDBI Education Loan 2025",
      "provider": "IDBI Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "SBI Education Loan",
      "provider": "State Bank Of India",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "The CGFSEL Education Loan",
      "provider": "National Credit Guarantee Trustee Company Ltd",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Indian Bank Education Loan",
      "provider": "Indian Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate": "Click on \"View Details\"",
      "link": "Click on \"View Details\""
    }
  ];
  

const loanCategories = [
  'Top Educational Loan for Engineering',
  'Top Educational Loan for Bachelors',
  'Top Educational Loan for Masters',
];

export default function EducationalLoanHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [amountFilter, setAmountFilter] = useState('');
  const [interestRateFilter, setInterestRateFilter] = useState('');
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredLoans = educationalLoans.filter((loan) => {
    const matchesSearchTerm = loan.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAmount = !amountFilter || loan.amount.includes(amountFilter);
    const matchesInterestRate = !interestRateFilter || loan.interestRate.includes(interestRateFilter);
      return matchesSearchTerm && matchesAmount && matchesInterestRate;
    

    
  });

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const shouldShowLoadMore = filteredLoans.length > visibleCount;

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
            Discover Top Educational Loans for Every Course
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
          Explore the best educational loan options across engineering, bachelors, and masters programs.
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
            onChange={(e) => setAmountFilter(e.target.value)}
            value={amountFilter}
          >
            <option value="">Select Loan Amount</option>
            <option value="Up to ₹20 lakhs">Up to ₹20 lakhs</option>
            <option value="Up to ₹30 lakhs">Up to ₹30 lakhs</option>
            <option value="Up to ₹40 lakhs">Up to ₹40 lakhs</option>
          </select>

          <select
            style={selectStyle}
            onChange={(e) => setInterestRateFilter(e.target.value)}
            value={interestRateFilter}
          >
            <option value="">Select Interest Rate</option>
            <option value="8.5%">8.5% p.a.</option>
            <option value="9.25%">9.25% p.a.</option>
            <option value="10.5%">10.5% p.a.</option>
          </select>

          <input
            type="text"
            placeholder="Search Loans"
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
          {filteredLoans.slice(0, visibleCount).map((loan, index) => (
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
                {loan.name}
              </h3>
              <p style={{ fontSize: '1rem', marginBottom: '0.4rem', color: '#555' }}>
                <strong>Provider:</strong> {loan.provider}
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#555' }}>
                <strong>Eligibility:</strong> {loan.eligibility}
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#555' }}>
                <strong>Interest Rate:</strong> {loan.interestRate}
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#555' }}>
                <strong>Deadline:</strong> {loan.deadline}
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#555' }}>
                <strong>Features:</strong> {loan.features}
              </p>

              <p style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#0070f3' }}>
                <strong>Loan Amount:</strong> {loan.amount}
              </p>
              
              <Link
                href={loan.link}
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
          {loanCategories.map((category, idx) => (
            <Link
              key={idx}
              href={`/loan/${category.toLowerCase().replace(/\s+/g, '-')}`}
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
