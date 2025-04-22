'use client';

import Layout from '@/components/Layout';

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const mastersLoans = [
    {
      "name": "Propelld Domestic Education Loan 2025",
      "provider": "Propelld",
      "deadline": "10 April",
      "eligibility": "Engineering, Bachelors, Masters",
      "features": "Domestic",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Goa Interest Free Education Loan",
      "provider": "Goa Education Development Corporation (GEDC)",
      "deadline": "28 February",
      "eligibility": "All",
      "features": "Interest Free",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Rotary Club Of Mulund Interest Free Loan 2024",
      "provider": "The Rotary Club Of Mulund",
      "deadline": "25 August",
      "eligibility": "ITI, Diploma, Engineering, Medical, Bachelors, Masters",
      "features": "Interest Free",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "KMDC Foreign University Higher Education Loan 2024",
      "provider": "Karnataka Minorities Development Corporation Limited",
      "deadline": "31 August",
      "eligibility": "Engineering, Masters, PHD, Post Doctoral",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Zeenam Charitable Trust Education Loan",
      "provider": "Zeenam Charitable Trust",
      "deadline": "19 July",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Arivu Vidyabhyasa Education Loan 2024",
      "provider": "Karnataka Minorities Development Corporation Limited",
      "deadline": "31 October",
      "eligibility": "Engineering, Medical, Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Name Of the Scholarship",
      "provider": "1",
      "deadline": "22 May",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "testing nikhil",
      "provider": "Mukhyamantri Kanya Utthan Yojana",
      "deadline": "23 May",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "World Bunts Foundation Trust Education Loan",
      "provider": "World Bunts Foundation Trust",
      "deadline": "31 December",
      "eligibility": "Engineering, Medical, Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Secured or with Collateral Education Loan for the Sweden",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Unsecured or without Collateral Education loan for Sweden",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Secured or without collateral education loan for Dubai",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Secured or with Collateral Education Loan for the Switzerland",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "We Make Scholars Education Loan",
      "provider": "We Make Scholars",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Secured or with Collateral Education Loan for France",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Secured or without collateral education loan for Ireland",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Secured Education Loan for New Zealand",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Secured or with Collateral Education Loan for Germany",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Secured or with collateral loan for the USA",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Secured Education Loan for Australia",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Secured or without collateral education loan for the UK",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Unsecured or without collateral education loan for Dubai",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Unsecured or without Collateral Education loan for Switzerland",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Unsecured Education Loan for Singapore",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Secured or with the collateral loan for Italy",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Unsecured Education Loan for Italy",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Unsecured or without Collateral Education loan for France",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Unsecured or without collateral education loan for Ireland",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Unsecured Education Loan for New Zealand",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Elite Scholars funding to study in the Germany",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Unsecured or without Collateral Education loan for Germany",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "EliteScholars funding to study in the USA",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Unsecured or without collateral loan for the USA",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Unsecured Education Loan for Australia",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Unsecured or without collateral education loan for the UK",
      "provider": "private banks or NBFCs.",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "EliteScholars to Study in Canada",
      "provider": "EliteScholars",
      "deadline": "31 December",
      "eligibility": "Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Dhanlaxmi Bank Education Loan Schemes for studies in India",
      "provider": "Dhanlaxmi Bank",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "HSBC Bank Higher Education Loan India",
      "provider": "HSBC Bank",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Unsecured Education Loan for Canada",
      "provider": "WeMakeScholars",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Gyandhan Study Abroad Education Loan",
      "provider": "Gyandhan",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Punjab and Sind Bank Excellence Education Loan",
      "provider": "Punjab and Sind bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Punjab and Sind Bank Education Loan Scheme for Abroad Studies",
      "provider": "Punjab and Sind bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Yes Bank Education Loan",
      "provider": "Yes Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Yes Bank Education Loan Scheme for Abroad Studies",
      "provider": "Yes Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "UCO Premier Education Loan Scheme to Study Abroad",
      "provider": "UCO Bank",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "UCO Education Loan Scheme to Study Abroad",
      "provider": "UCO Bank",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Bank of India Star Education Loan Studies Abroad",
      "provider": "Bank of India",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Karur Vysya Bank Education Loan",
      "provider": "Karur Vysya Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Incred Education Loan product for Studies in India",
      "provider": "Incred",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Incred Education Loan product for Abroad",
      "provider": "Incred",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Incred Education Loan Schemes for Canada",
      "provider": "Incred",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Incred Education Loan Schemes for US",
      "provider": "Incred",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Indian Bank Education Loan Scheme for Study Abroad",
      "provider": "Indian Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "ICICI bank Abroad Education Loan",
      "provider": "ICICI bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Avanse Education Loan For MBA",
      "provider": "Avanse financial services ltd",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Avanse Education Loan to Study In Germany",
      "provider": "Avanse financial services ltd",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Avanse Education Loan to Study In Australia",
      "provider": "Avanse financial services ltd",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Avanse Education Loan to Study In the UK Canada",
      "provider": "Avanse financial services ltd",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Avanse Education Loan to Study In the USA",
      "provider": "Avanse financial services ltd",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Central Government Interest Subsidy Scheme by HDFC bank",
      "provider": "HDFC Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Model Education Loan Scheme by Bank of Maharashtra",
      "provider": "Bank of Maharashtra",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Vidya Sagar Scheme Education Loan Scheme by Canara bank",
      "provider": "Canara bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "HDFC Credila Higher Studies in Abroad Education Loan",
      "provider": "HDFC Credila",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "HDFC Credila Studies in the USA Education Loan",
      "provider": "HDFC Credila",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Central government Interest Subsidy Scheme by Dhanlaxmi bank",
      "provider": "Dhanlaxmi bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Credit Guarantee Fund Scheme for Educational Loan by Dhanlaxmi Bank",
      "provider": "Dhanlaxmi Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "SBI Skill Loan Scheme For Study in India",
      "provider": "SBI",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "SBI Global ED VANATGE Scheme Education Loan For Study Abroad",
      "provider": "SBI",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Federal Bank Fed Scholars Education Loan for Studies in India",
      "provider": "Federal Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Federal Bank Special Vidya Education Loan for Studies in India",
      "provider": "Federal Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "UCO Aspire Education Loan",
      "provider": "UCO Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Federal Bank Special Vidya Loan for Abroad studies",
      "provider": "Federal Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Federal Bank Federal Career Solution Education Loan Schemes for Abroad studies",
      "provider": "Federal Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Syndicate Bank Education Loan",
      "provider": "Syndicate Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "United Bank Education Loan",
      "provider": "United Bank of India",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Oriental Bank of Commerce Education Loan",
      "provider": "Oriental Bank of Commerce",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Dena Bank Education Loan",
      "provider": "Dena Bank",
      "deadline": "18 April",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Vijaya Bank Education Loan",
      "provider": "Vijaya Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Andhra Bank Education Loan",
      "provider": "Andhra Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Federal Bank Education Loan Schemes for Abroad studies",
      "provider": "Federal Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Aditya Birla Education Loan Scheme to Study in Abroad",
      "provider": "Aditya Birla",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "City Union Bank Education Loan Schemes to study in India",
      "provider": "City Union Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "City Union Bank Education Loan Scheme for Abroad Studies",
      "provider": "City Union Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "CSB Excellence Education Loan",
      "provider": "Catholic Syrian bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Catholic Syrian Bank Education Loan",
      "provider": "Catholic Syrian bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Catholic Syrian Bank Education Loan Schemes for Abroad studies",
      "provider": "Catholic Syrian bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Union Education Skill Development Loan",
      "provider": "Union Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Union Education India Abroad NRI Student",
      "provider": "Union Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "IDBI Skill Loan Scheme",
      "provider": "IDBI Bank",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "IDBI Education loan for Studies in Premier Institutions",
      "provider": "IDBI Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "IDBI Education loan General Offer Studies in India",
      "provider": "IDBI Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "IDBI Education loan for Studies abroad",
      "provider": "IDBI Bank",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Aditya Birla Education Loan",
      "provider": "Aditya Birla Group",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "DCB Bank Education Loan Schemes for Studies in India",
      "provider": "DCB Bank",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "DCB Bank Education Loan Schemes for Abroad Studies",
      "provider": "DCB Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "DBS Bank Education Loan to Study in India",
      "provider": "DBS Bank",
      "deadline": "31 December",
      "eligibility": "Medical, Engineering, Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "DBS Bank Education Loan to Study Abroad",
      "provider": "DBS Bank",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Abhyudaya Vidya Vardhini Educational loan Scheme",
      "provider": "Abhyudaya Bank",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Abhyudaya Bank Education Loan for Vocational Courses",
      "provider": "Abhyudaya Bank",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Abhyudaya Bank Studies in Abroad Educational Loan",
      "provider": "Abhyudaya Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Cent Vidyarthi Educational loan",
      "provider": "Central Bank of India",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "KBL Vidyanidhi Education Loan",
      "provider": "Karnataka Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Skilling Education Loan",
      "provider": "Karnataka Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Star Pradhanmantri Kaushal Rin Yojana",
      "provider": "Bank of India",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Nainital Bank Gyani Education Loan scheme to study in India",
      "provider": "Nainital Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Nainital Bank Education Loan schemes to study Abroad",
      "provider": "Nainital Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Alliance University Education Loan",
      "provider": "Alliance University",
      "deadline": "31 December",
      "eligibility": "Medical, Engineering, Bachelors, Masters, PHD",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "RBL Bank Education Loan to Study in India",
      "provider": "RBL Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "South Indian Bank Education Loan Schemes for India SIB Edsum",
      "provider": "South Indian Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Special Vidya Education Loan",
      "provider": "Federal Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Mahila Samriddhi Yojana For SC",
      "provider": "Ministry of Social justice and Empowerment for Women",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "South Indian Bank Education Loan Schemes for Abroad Studies SIB Global Education Scheme",
      "provider": "South Indian Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters, PHD",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Bandhan Bank Education Loan for India",
      "provider": "Bandhan Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Bandhan Bank Education Loan for Abroad",
      "provider": "Bandhan Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Abhyudaya Cooperative Bank Education Loan",
      "provider": "Abhyudaya Cooperative Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "SBI Scholar Loan For IIT",
      "provider": "State Bank Of India",
      "deadline": "31 December",
      "eligibility": "Engineering, Masters, PHD, PG-Diploma, Post Doctoral",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "IndusInd Bank Education Loan Schemes For Abroad Studies",
      "provider": "IndusInd Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Auxilo Skill Education Loan",
      "provider": "AUXILO",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Auxilo Executive Education Loans",
      "provider": "AUXILO",
      "deadline": "31 December",
      "eligibility": "Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "UCO Education Loan",
      "provider": "UCO Bank",
      "deadline": "31 December",
      "eligibility": "Medical, Engineering, Bachelors, Masters, PHD, PG-Diploma, Post Doctoral",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Auxilo Study Abroad Loan",
      "provider": "AUXILO",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Edufund Education Loans",
      "provider": "Edufund",
      "deadline": "31 December",
      "eligibility": "Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Jan Samarth Educational Loan",
      "provider": "Jan Samarth",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters, PHD",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Model Educational Loan by Vikaspedia",
      "provider": "Vikaspedia",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Baroda Education Loan for EDP being offered by Premier Institutions in India",
      "provider": "Bank of Baroda",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Baroda Education Loan to Students of Premier Institutions",
      "provider": "Bank of Baroda",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Baroda Scholar Education loan",
      "provider": "Bank of Baroda",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Baroda Gyan Education Loan",
      "provider": "Bank of Baroda",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Education Loan by Jain Finance",
      "provider": "Jain Finance",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Central Government Interest Subsidy Scheme Education Loan",
      "provider": "The Ministry of HRD",
      "deadline": "31 December",
      "eligibility": "Engineering, Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "VidyaLoans",
      "provider": "VidyaLoans",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters, PHD",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Tamilnad Mercantile Bank TMB Abroad Education Loan",
      "provider": "Tamilnad Mercantile Bank (TMB)",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "IBA Model Educational Loan Scheme",
      "provider": "Canara Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Vidya Shakthi Education Loan",
      "provider": "Canara Bank",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Vidya Sahay Education Loan",
      "provider": "Canara Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Dhanlaxmi Bank Education Loan",
      "provider": "Dhanlaxmi Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Central Scheme of Interest Subsidy for Education Loans",
      "provider": "Saraswat Bank",
      "deadline": "31 December",
      "eligibility": "Class 10, Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Axis Bank Education Loan",
      "provider": "Axis Bank",
      "deadline": "31 December",
      "eligibility": "Medical, Engineering, Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Maha Scholar Education Loan Scheme",
      "provider": "Bank of Maharashtra",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters, PHD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Bank of India Star Vidya Loan",
      "provider": "Bank of India",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "LIDCOM Education Loan",
      "provider": "The Leather Industries Development Corporation (LIDCOM), Govt. of Maharashtra.",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Skill Education Loan",
      "provider": "National Skill Qualification Framework (NSQF)",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Short Term Education Loan",
      "provider": "The Goa State Scheduled Tribes Finance and Development Corporation Limited",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "National Backward classes Finance Education Loan",
      "provider": "National backward classes finance and development corporation",
      "deadline": "31 December",
      "eligibility": "Medical, Engineering, Bachelors, Masters, PHD, PHARMD, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "PNB Honhaar Education loan",
      "provider": "Punjab National Bank",
      "deadline": "31 December",
      "eligibility": "Primary, Bachelors, Masters, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "PNB Pratibha",
      "provider": "Punjab National Bank",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters, PG-Diploma",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Central Bank of India Education Loan",
      "provider": "Central Bank of India",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "SBI Scholar Loans",
      "provider": "SBI",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Padho Pardesh - Scheme Of Interest Subsidy On Educational Loans For Overseas Studies For The Students Belonging To The Minority Communities",
      "provider": "SBI",
      "deadline": "31 December",
      "eligibility": "Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Ambedkar Central Sector Overseas Education Loan",
      "provider": "SBI",
      "deadline": "12 June",
      "eligibility": "Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "SBI Take over of Education Loans",
      "provider": "SBI",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "SBI Studies Abroad loan",
      "provider": "SBI",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Bank Of Baroda Education Loan 2025",
      "provider": "Bank Of Baroda",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "IDBI Education Loan",
      "provider": "IDBI Bank",
      "deadline": "12 June",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "SBI Education Loan",
      "provider": "State Bank Of India",
      "deadline": "31 December",
      "eligibility": "Bachelors, Masters",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "SBI student loan",
      "provider": "SBI",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "Avanse Education Loans",
      "provider": "Avanse",
      "deadline": "31 December",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    },
    {
      "name": "West Bengal Term Loan",
      "provider": "West Bengal Minority Development and Finance Corporation",
      "deadline": "31 October",
      "eligibility": "All",
      "features": "Standard",
      "amount": "Click on \"View Details\"",
      "interestRate":"click on \"View Details",
      "link": "Click on \"View Details\""
    }
  ];
  

export default function MastersLoans() {
  const [visibleCount, setVisibleCount] = useState(12); // Initial loans shown (5)
  const [filterAmount, setFilterAmount] = useState(''); // Loan Amount filter
  const [filterInterest, setFilterInterest] = useState(''); // Interest Rate filter
  const [filteredLoans, setFilteredLoans] = useState(mastersLoans);

  // Handle Loan Amount filter change
  const handleFilterAmountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterAmount(value);
    filterLoans(value, filterInterest);
  };

  // Handle Interest Rate filter change
  const handleFilterInterestChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterInterest(value);
    filterLoans(filterAmount, value);
  };

  const filterLoans = (amount: string, interest: string) => {
    let filtered = [...mastersLoans];

    // Filter by loan amount range
    if (amount) {
      const [min, max] = amount.split('-').map(Number);
      filtered = filtered.filter((loan) => {
        const amount = parseInt(loan.amount.replace(/[^\d]/g, '')) || 0;
        return amount >= min && amount <= max;
      });
    }

    // Filter by interest rate range
    if (interest) {
      const [min, max] = interest.split('-').map(Number);
      filtered = filtered.filter((loan) => {
        const interestRate = parseFloat(loan.interestRate.replace(/[^\d.]/g, '')) || 0;
        return interestRate >= min && interestRate <= max;
      });
    }

    setFilteredLoans(filtered);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12); // Load 3 more loans at a time
  };

  const shouldShowLoadMore = mastersLoans.length > visibleCount;

  return (
    <> 
    <Navbar />
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold', color: '#222' }}>
          Top Educational Loans for Masters
        </h1>

        <p style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#555', fontSize: '1.1rem' }}>
          Explore the best educational loans available for master's degree students.
        </p>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
          <select style={selectStyle} onChange={handleFilterAmountChange} value={filterAmount}>
            <option value="">Select Loan Amount Range</option>
            <option value="0-10000000">Up to ₹10,00,000</option>
            <option value="10000000-20000000">₹10,00,000 - ₹20,00,000</option>
            <option value="20000000-30000000">₹20,00,000 - ₹30,00,000</option>
          </select>

          <select style={selectStyle} onChange={handleFilterInterestChange} value={filterInterest}>
            <option value="">Select Interest Rate Range</option>
            <option value="9-10">9% - 10%</option>
            <option value="10-12">10% - 12%</option>
            <option value="12-15">12% - 15%</option>
          </select>
        </div>

        {/* Loans List */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {filteredLoans.slice(0, visibleCount).map((loan, index) => (
            <div key={index} style={cardStyle}>
              <h3 style={cardname}>{loan.name}</h3>
              <p style={cardDescription}>
                <strong>Provider:</strong> {loan.provider}
              </p>
              <p style={cardDescription}>
                <strong>Deadline:</strong> {loan.deadline}
              </p>
              <p style={cardDescription}>
                <strong>Features:</strong> {loan.features}
              </p>
              <p style={cardDetail}>
                <strong>Loan Amount:</strong> {loan.amount}
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: '#555' }}>
                <strong>Interest Rate:</strong> {loan.interestRate}
              </p>
              
              <p style={cardDetail}>
                <strong>Eligibility:</strong> {loan.eligibility}
              </p>
              <Link href={loan.link} target="_blank" style={linkStyle}>
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

const cardStyle = {
  background: '#ffffff',
  borderRadius: '1rem',
  padding: '1.8rem',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
  border: '1px solid #eee',
  transition: 'transform 0.3s ease',
};

const cardname = {
  fontSize: '1.3rem',
  marginBottom: '0.7rem',
  fontWeight: '600',
  color: '#1a1a1a',
};

const cardDescription = {
  fontSize: '1rem',
  marginBottom: '1rem',
  lineHeight: '1.5',
  color: '#444',
};

const cardDetail = {
  fontSize: '0.95rem',
  marginBottom: '0.4rem',
  color: '#0070f3',
};

const linkStyle = {
  display: 'inline-block',
  padding: '0.5rem 1rem',
  backgroundColor: '#0070f3',
  color: '#fff',
  borderRadius: '0.5rem',
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontWeight: '500',
};
