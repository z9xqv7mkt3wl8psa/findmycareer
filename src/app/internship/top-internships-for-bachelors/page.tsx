'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const bachelorsInternships = [
    {
      title: "Summer Internship By NIT Warangal - NIT Warangal",
      link: "https://theglobalscholarship.org/internships/summer-internship-by-nit-warangal?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "11-Apr",
      type: "Today"
    },
    {
      title: "Data Analyst Internship By IIM Udaipur - IIM Udaipur",
      link: "https://theglobalscholarship.org/internships/data-analyst-internship-by-iim-udaipur?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "24-Mar",
      type: "N/A"
    },
    {
      title: "Web Developer Internship By Business Web Solutions - Business Web Solutions",
      link: "https://theglobalscholarship.org/internships/web-developer-internship-by-business-web-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Summer Research Internship By IISER Mohali - IISER Mohali",
      link: "https://theglobalscholarship.org/internships/summer-research-internship-by-iiser-mohali?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Mar",
      type: "N/A"
    },
    {
      title: "Graphic Designing Internship By IIM Udaipur - IIM Udaipur",
      link: "https://theglobalscholarship.org/internships/graphic-designing-internship-by-iim-udaipur?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "24-Mar",
      type: "N/A"
    },
    {
      title: "Internship By Airbus India Pvt Ltd - Airbus India Pvt Ltd",
      link: "https://theglobalscholarship.org/internships/internship-by-airbus-india-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Apr",
      type: "1 day"
    },
    {
      title: "UI And UX developer Internship By Airbus India Pvt Ltd - Airbus India Pvt Ltd",
      link: "https://theglobalscholarship.org/internships/ui-and-ux-developer-internship-by-airbus-india-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Apr",
      type: "1 day"
    },
    {
      title: "QA College Internship By Applied Materials - Applied Materials",
      link: "https://theglobalscholarship.org/internships/qa-college-internship-by-applied-materials?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Apr",
      type: "1 day"
    },
    {
      title: "Graphic Design Internship By KAOAPH - KAOAPH",
      link: "https://theglobalscholarship.org/internships/graphic-design-internship-by-kaoaph?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "02-Apr",
      type: "N/A"
    },
    {
      title: "Optometry Internship By Eye Mantra - Eye Mantra",
      link: "https://theglobalscholarship.org/internships/optometry-internship-by-eye-mantra?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "02-Apr",
      type: "N/A"
    },
    {
      title: "Summer Internship 2025 - NIT Tiruchirappalli",
      link: "https://theglobalscholarship.org/internships/summer-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Remote Internship By HP India - HP India",
      link: "https://theglobalscholarship.org/internships/remote-internship-by-hp-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "02-Apr",
      type: "N/A"
    },
    {
      title: "Internship By PRS India - PRS India",
      link: "https://theglobalscholarship.org/internships/internship-by-prs-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Mar",
      type: "N/A"
    },
    {
      title: "Internship By Next Gen Scientists Foundation - Next Gen Scientists Foundation",
      link: "https://theglobalscholarship.org/internships/internship-by-next-gen-scientists-foundation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Mar",
      type: "N/A"
    },
    {
      title: "Summer Internship By IIITDM Kancheepuram - IIITDM Kancheepuram",
      link: "https://theglobalscholarship.org/internships/summer-internship-by-iiitdm-kancheepuram?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "04-Apr",
      type: "N/A"
    },
    {
      title: "Industrial Trainee Internship By INMOBI India - INMOBI India",
      link: "https://theglobalscholarship.org/internships/industrial-trainee-internship-by-inmobi-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Internships By Jacobs India - Jacobs India",
      link: "https://theglobalscholarship.org/internships/internships-by-jacobs-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "AI Engineer Internship By Viga Entertainment Pvt Ltd - Viga Entertainment Pvt Ltd",
      link: "https://theglobalscholarship.org/internships/ai-engineer-internship-by-viga-entertainment-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Warehouse Internship By PUMA - PUMA",
      link: "https://theglobalscholarship.org/internships/warehouse-internship-by-puma?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Women Startup Program Internship By NSRCEL - NSRCEL",
      link: "https://theglobalscholarship.org/internships/-women-startup-program-internship-by-nsrcel?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Summer Internship By IIIT Delhi - IIIT Delhi",
      link: "https://theglobalscholarship.org/internships/-summer-internship-by-iiit-delhi?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Content Writer Internship By Testbook - Testbook",
      link: "https://theglobalscholarship.org/internships/content-writer-internship-by-testbook?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Generative AI Internship By Airbus India Private Limited - Airbus India Private Limited",
      link: "https://theglobalscholarship.org/internships/generative-ai-internship-by-airbus-india-private-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "IT Internship By DTCC - DTCC",
      link: "https://theglobalscholarship.org/internships/it-internship-by-dtcc?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "AI Scientist Internship By Qure ai - Qure ai",
      link: "https://theglobalscholarship.org/internships/ai-scientist-internship-by-qure-ai?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Apprenticeship By Motorola Solutions - Motorola Solutions",
      link: "https://theglobalscholarship.org/internships/apprenticeship-by-motorola-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "29-Mar",
      type: "N/A"
    },
    {
      title: "Dealer Network And Business Development Internship By Bugatti - Bugatti",
      link: "https://theglobalscholarship.org/internships/dealer-network-and-business-development-internship-by-bugatti?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Accounts Payable Apprenticeship By Bugatti - Bugatti",
      link: "https://theglobalscholarship.org/internships/accounts-payable-apprenticeship-by-bugatti?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Apprenticeship By Itron - Itron",
      link: "https://theglobalscholarship.org/internships/apprenticeship-by-itron?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "29-Mar",
      type: "N/A"
    },
    {
      title: "Software Internship By CME Group - CME Group",
      link: "https://theglobalscholarship.org/internships/software-internship-by-cme-group?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "29-Mar",
      type: "N/A"
    },
    {
      title: "SDE Internship By Bolt Earth - Bolt Earth",
      link: "https://theglobalscholarship.org/internships/sde-internship-by-bolt-earth?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Mar",
      type: "N/A"
    },
    {
      title: "Summer Internship By IIT Dharwad - IIT Dharwad",
      link: "https://theglobalscholarship.org/internships/summer-internship-by-iit-dharwad?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Mar",
      type: "N/A"
    },
    {
      title: "Summer Internship By IIT Tirupati - IIT Tirupati",
      link: "https://theglobalscholarship.org/internships/summer-internship-by-iit-tirupati?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Internships By The Convergence Foundation - The Convergence Foundation",
      link: "https://theglobalscholarship.org/internships/internships-by-the-convergence-foundation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Mar",
      type: "N/A"
    },
    {
      title: "Software Development Internship By Aereo - Aereo",
      link: "https://theglobalscholarship.org/internships/software-development-internship-by-aereo?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Mar",
      type: "N/A"
    },
    {
      title: "Technical Support Internship By IBM India Private Ltd - IBM India Private Ltd",
      link: "https://theglobalscholarship.org/internships/technical-support-internship-by-ibm-india-private-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Mar",
      type: "N/A"
    },
    {
      title: "Internships By Plug Power India - Plug Power India",
      link: "https://theglobalscholarship.org/internships/internships-by-plug-power-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Internships By Scope For Change - Scope For Change",
      link: "https://theglobalscholarship.org/internships/internships-by-scope-for-change?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Marketing Internship By SmartQ - SmartQ",
      link: "https://theglobalscholarship.org/internships/marketing-internship-by-smartq?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Mar",
      type: "N/A"
    },
    {
      title: "Information Security Internship By Rubrik - Rubrik",
      link: "https://theglobalscholarship.org/internships/information-security-internship-by-rubrik?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Mar",
      type: "N/A"
    },
    {
      title: "Software Engineer Internship By Coherent India - Coherent India",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-coherent-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Mar",
      type: "N/A"
    },
    {
      title: "Software Engineering Apprenticeship By Synopsys - Synopsys",
      link: "https://theglobalscholarship.org/internships/software-engineering-apprenticeship-by-synopsys?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Mar",
      type: "N/A"
    },
    {
      title: "Internships By Supra - Toyota Supra",
      link: "https://theglobalscholarship.org/internships/internships-by-supra?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Bhopal Summer Internship By IISER - IISER",
      link: "https://theglobalscholarship.org/internships/bhopal-summer-internship-by-iiser?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "21-Mar",
      type: "N/A"
    },
    {
      title: "SAARC Internship 2025 - The South Asian Association for Regional Cooperation (SAARC)",
      link: "https://theglobalscholarship.org/internships/saarc-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Mar",
      type: "N/A"
    },
    {
      title: "Apprenticeship By Wells Fargo - Wells Fargo",
      link: "https://theglobalscholarship.org/internships/apprenticeship-by-wells-fargo?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Mar",
      type: "N/A"
    },
    {
      title: "Machine Learning Internship By Tower Research Capital 2025 - Tower Research Capital",
      link: "https://theglobalscholarship.org/internships/machine-learning-internship-by-tower-research-capital-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Mar",
      type: "N/A"
    },
    {
      title: "Interim System Engineering Internship By Qualcomm - Qualcomm",
      link: "https://theglobalscholarship.org/internships/interim-system-engineering-internship-by-qualcomm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Mar",
      type: "N/A"
    },
    {
      title: "Automation Internship By General Motors - General Motors",
      link: "https://theglobalscholarship.org/internships/automation-internship-by-general-motors?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Mar",
      type: "N/A"
    },
    {
      title: "People And Culture Internship By Smytten - Smytten",
      link: "https://theglobalscholarship.org/internships/people-and-culture-internship-by-smytten?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Mar",
      type: "N/A"
    },
    {
      title: "Product Management Internship By SuperAGI - SuperAGI",
      link: "https://theglobalscholarship.org/internships/product-management-internship-by-superagi?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Mar",
      type: "N/A"
    },
    {
      title: "Computer Science Internship By SteepGraph - SteepGraph",
      link: "https://theglobalscholarship.org/internships/computer-science-internship-by-steepgraph?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Mar",
      type: "N/A"
    },
    {
      title: "AWX Internship By Harman - Harman",
      link: "https://theglobalscholarship.org/internships/awx-internship-by-harman?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Mar",
      type: "N/A"
    },
    {
      title: "Associate Consultant Internship By Brain And Company India - Brain And Company India",
      link: "https://theglobalscholarship.org/internships/associate-consultant-internship-by-brain-and-company-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "13-Mar",
      type: "N/A"
    },
    {
      title: "Internships By Seagate Technology 2025 - Seagate Technology",
      link: "https://theglobalscholarship.org/internships/internships-by-seagate-technology-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Mar",
      type: "N/A"
    },
    {
      title: "L And D GSSC Internship By Ericsson India - Ericsson India",
      link: "https://theglobalscholarship.org/internships/l-and-d-gssc-internship-by-ericsson-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Mar",
      type: "N/A"
    },
    {
      title: "BS Non Tech Internship By Adobe Technology - Adobe Technology",
      link: "https://theglobalscholarship.org/internships/bs-non-tech-internship-by-adobe-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Mar",
      type: "N/A"
    },
    {
      title: "Quality Assurance Internship By IPE Global India - IPE Global India",
      link: "https://theglobalscholarship.org/internships/quality-assurance-internship-by-ipe-global-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Mar",
      type: "N/A"
    },
    {
      title: "Technical Consulting Internship By SAS India - SAS India",
      link: "https://theglobalscholarship.org/internships/technical-consulting-internship-by-sas-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Mar",
      type: "N/A"
    },
    {
      title: "Data Science Internship By CommerceIQ - CommerceIQ",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-commerceiq?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Mar",
      type: "N/A"
    },
    {
      title: "Summer Research Internships By IIT Gandhinagar - IIT Gandhinagar",
      link: "https://theglobalscholarship.org/internships/summer-research-internships-by-iit-gandhinagar?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Mar",
      type: "N/A"
    },
    {
      title: "Backend Developer Internship By ParallelDots Inc - ParallelDots Inc",
      link: "https://theglobalscholarship.org/internships/backend-developer-internship-by-paralleldots-inc?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Mar",
      type: "N/A"
    },
    {
      title: "Python Developer Internship By Gigafactor Solutions - Gigafactor Solutions",
      link: "https://theglobalscholarship.org/internships/python-developer-internship-by-gigafactor-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Mar",
      type: "N/A"
    },
    {
      title: "Graphic Design Internship By Grapes Worldwide - Grapes Worldwide",
      link: "https://theglobalscholarship.org/internships/graphic-design-internship-by-grapes-worldwide?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Mar",
      type: "N/A"
    },
    {
      title: "Internship By Confederation Of Empowerment Initiatives - Confederation Of Empowerment Initiatives",
      link: "https://theglobalscholarship.org/internships/internship-by-confederation-of-empowerment-initiatives?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "SDE And DevOps Internship By Hireginie - Hireginie",
      link: "https://theglobalscholarship.org/internships/sde-and-devops-internship-by-hireginie?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Creative Writing Internship By Grapes Worldwide - Grapes Worldwide",
      link: "https://theglobalscholarship.org/internships/creative-writing-internship-by-grapes-worldwide?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Internships By SLB India - SLB India",
      link: "https://theglobalscholarship.org/internships/-internships-by-slb-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Mar",
      type: "N/A"
    },
    {
      title: "Software Developer Internship By Appfoster India - Appfoster India",
      link: "https://theglobalscholarship.org/internships/software-developer-internship-by-appfoster-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Consulting Internship By Sattva - Sattva",
      link: "https://theglobalscholarship.org/internships/consulting-internship-by-sattva?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Flutter Developer Internship By Appfoster India - Appfoster India",
      link: "https://theglobalscholarship.org/internships/flutter-developer-internship-by-appfoster-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "C++ And Python Internship By Harman Technology - Harman Technology",
      link: "https://theglobalscholarship.org/internships/c++-and-python-internship-by-harman-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "AI And ML Internship By EY India - EY India",
      link: "https://theglobalscholarship.org/internships/ai-and-ml-internship-by-ey-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Program Manager Internship By Razorpay - Razorpay",
      link: "https://theglobalscholarship.org/internships/program-manager-internship-by-razorpay?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Internships By Odoo India - Odoo India",
      link: "https://theglobalscholarship.org/internships/internships-by-odoo-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Mar",
      type: "N/A"
    },
    {
      title: "Internships By Intel India - Intel India",
      link: "https://theglobalscholarship.org/internships/internships-by-intel-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Mar",
      type: "N/A"
    },
    {
      title: "Business Development Internship By Swiggy - Swiggy",
      link: "https://theglobalscholarship.org/internships/business-development-internship-by-swiggy?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Software Engineer Internship By Intel - Intel India",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-intel?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Instructional Designer Internship By EPICOR - EPICOR",
      link: "https://theglobalscholarship.org/internships/instructional-designer-internship-by-epicor?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Internships By Agrim India - Agrim India",
      link: "https://theglobalscholarship.org/internships/internships-by-agrim-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Mar",
      type: "N/A"
    },
    {
      title: "CoinDCX Internships - CoinDCX",
      link: "https://theglobalscholarship.org/internships/coindcx-internships?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Mar",
      type: "N/A"
    },
    {
      title: "Internships By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/internships-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Mar",
      type: "N/A"
    },
    {
      title: "SURGE Internship By IIT Kanpur - IIT Kanpur",
      link: "https://theglobalscholarship.org/internships/surge-internship-by-iit-kanpur?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Feb",
      type: "N/A"
    },
    {
      title: "Software Engineer Internship By CM.com - CM.com",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-cm.com?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Fund Services Accounting Apprenticeship By Morgan Stanley - Morgan Stanley",
      link: "https://theglobalscholarship.org/internships/fund-services-accounting-apprenticeship-by-morgan-stanley?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Program Manager Internships By Google - Google",
      link: "https://theglobalscholarship.org/internships/program-manager-internships-by-google?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Internships By Nosh - Nosh",
      link: "https://theglobalscholarship.org/internships/internships-by-nosh?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Product Design Internship By Uber India - Uber India",
      link: "https://theglobalscholarship.org/internships/product-design-internship-by-uber-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Internships By ABEX Excellence Pvt Ltd - ABEX Excellence Pvt Ltd",
      link: "https://theglobalscholarship.org/internships/internships-by-abex-excellence-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Internships By CloudRedux - CloudRedux",
      link: "https://theglobalscholarship.org/internships/internships-by-cloudredux?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Accounts Payable Internship By SmartQ - SmartQ",
      link: "https://theglobalscholarship.org/internships/accounts-payable-internship-by-smartq?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Summer Internship By NIT Rourkela - NIT Rourkela",
      link: "https://theglobalscholarship.org/internships/summer-internship-by-nit-rourkela?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Business Analyst Internship By MCKinsey And Company - MCKinsey And Company",
      link: "https://theglobalscholarship.org/internships/business-analyst-internship-by-mckinsey-and-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Internships By BookMyShow - BookMyShow",
      link: "https://theglobalscholarship.org/internships/internships-by-bookmyshow?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Art Internships By Conde Nast India - Conde Nast India",
      link: "https://theglobalscholarship.org/internships/art-internships-by-conde-nast-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Information Technology Internship By Global Industrial - Global Industrial",
      link: "https://theglobalscholarship.org/internships/information-technology-internship-by-global-industrial?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Goldman Sachs Asset And Wealth Management Industrial Internship - Goldman Sachs India",
      link: "https://theglobalscholarship.org/internships/goldman-sachs-asset-and-wealth-management-industrial-internship?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "04-Mar",
      type: "N/A"
    },
    {
      title: "Tata Steel Internship - Tata Group",
      link: "https://theglobalscholarship.org/internships/tata-steel-internship?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "21-Feb",
      type: "N/A"
    },
    {
      title: "Internship By Harman Technology - Harman",
      link: "https://theglobalscholarship.org/internships/internship-by-harman-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "HR Internship By Heart It Out - Heart It Out",
      link: "https://theglobalscholarship.org/internships/hr-internship-by-heart-it-out?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Internship By Ziegler Aerospace India - Ziegler Aerospace India",
      link: "https://theglobalscholarship.org/internships/internship-by-ziegler-aerospace-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "WSAI IITM Summer Internship 2025 - WSAI Madras",
      link: "https://theglobalscholarship.org/internships/wsai-iitm-summer-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Feb",
      type: "N/A"
    },
    {
      title: "Research Internship By Seagate Research Group - Seagate Research Group",
      link: "https://theglobalscholarship.org/internships/research-internship-by-seagate-research-group?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Internships By Jacobs - Jacobs",
      link: "https://theglobalscholarship.org/internships/internships-by-jacobs?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, Aviation",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Oct",
      type: "N/A"
    },
    {
      title: "Embedded Test Internship By Harman - Harman",
      link: "https://theglobalscholarship.org/internships/embedded-test-internship-by-harman?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "22-Jan",
      type: "N/A"
    },
    {
      title: "English Internship By Testbook - Testbook",
      link: "https://theglobalscholarship.org/internships/english-internship-by-testbook?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Backend Software Internship By Digantara - Digantara",
      link: "https://theglobalscholarship.org/internships/backend-software-internship-by-digantara?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Internships By Galvinus - Galvinus",
      link: "https://theglobalscholarship.org/internships/internships-by-galvinus?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Artificial Intelligence Internship By BreakoutAI - BreakoutAI",
      link: "https://theglobalscholarship.org/internships/artificial-intelligence-internship-by-breakoutai?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "13-Feb",
      type: "N/A"
    },
    {
      title: "Data Science Internship By United Airlines - United Airlines",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-united-airlines?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Feb",
      type: "N/A"
    },
    {
      title: "Data Science Internship By Sony Research India - Sony Research India",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-sony-research-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Feb",
      type: "N/A"
    },
    {
      title: "FSSAI Internship 2025 - FSSAI",
      link: "https://theglobalscholarship.org/internships/fssai-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "04-Apr",
      type: "N/A"
    },
    {
      title: "Product Marketing Internship By Peakflo - Peakflo",
      link: "https://theglobalscholarship.org/internships/product-marketing-internship-by-peakflo?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Feb",
      type: "N/A"
    },
    {
      title: "Internship By Department Of Forests And Wildlife Delhi - The Department Of Forests And Wildlife Delhi",
      link: "https://theglobalscholarship.org/internships/internship-by-department-of-forests-and-wildlife-delhi?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Machine Learning Internship By Prodigal - Prodigal",
      link: "https://theglobalscholarship.org/internships/machine-learning-internship-by-prodigal?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Feb",
      type: "N/A"
    },
    {
      title: "Data Engineer Internship By Milliman - Milliman",
      link: "https://theglobalscholarship.org/internships/data-engineer-internship-by-milliman?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Feb",
      type: "N/A"
    },
    {
      title: "Robotics ROS 2 Internship By Acceleration Robotics - Acceleration Robotics",
      link: "https://theglobalscholarship.org/internships/robotics-ros-2-internship-by-acceleration-robotics?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Feb",
      type: "N/A"
    },
    {
      title: "Cyber Security Specialist Internship By Kreativstorm - Kreativstorm",
      link: "https://theglobalscholarship.org/internships/cyber-security-specialist-internship-by-kreativstorm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Feb",
      type: "N/A"
    },
    {
      title: "IT Internship By Johnson Controls - Johnson Controls",
      link: "https://theglobalscholarship.org/internships/it-internship-by-johnson-controls?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Feb",
      type: "N/A"
    },
    {
      title: "Internship By HP India - HP India",
      link: "https://theglobalscholarship.org/internships/internship-by-hp-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Feb",
      type: "N/A"
    },
    {
      title: "Human Resource Internship Infineon Technologies India - Infineon Technologies India",
      link: "https://theglobalscholarship.org/internships/human-resource-internship-infineon-technologies-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Feb",
      type: "N/A"
    },
    {
      title: "Graphic Design Internship By TATA CLiQ - TATA CLiQ",
      link: "https://theglobalscholarship.org/internships/graphic-design-internship-by-tata-cliq?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Feb",
      type: "N/A"
    },
    {
      title: "Quality Assurance Internship By Syfe - Syfe",
      link: "https://theglobalscholarship.org/internships/quality-assurance-internship-by-syfe?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Feb",
      type: "N/A"
    },
    {
      title: "Data Scientist Internship By Ericsson India - Ericsson India",
      link: "https://theglobalscholarship.org/internships/data-scientist-internship-by-ericsson-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Feb",
      type: "N/A"
    },
    {
      title: "Apprenticeships By Volvo India - Volvo Group",
      link: "https://theglobalscholarship.org/internships/apprenticeships-by-volvo-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Feb",
      type: "N/A"
    },
    {
      title: "Internship By UBS India - UBS India",
      link: "https://theglobalscholarship.org/internships/internship-by-ubs-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Feb",
      type: "N/A"
    },
    {
      title: "Human resource Internship By SmartQ - SmartQ",
      link: "https://theglobalscholarship.org/internships/human-resource-internship-by-smartq?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Feb",
      type: "N/A"
    },
    {
      title: "PowerPoint Presentation Internship By SmartQ - SmartQ",
      link: "https://theglobalscholarship.org/internships/powerpoint-presentation-internship-by-smartq?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Feb",
      type: "N/A"
    },
    {
      title: "Supply Chain Internship By Skyworks - Skyworks",
      link: "https://theglobalscholarship.org/internships/supply-chain-internship-by-skyworks?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Feb",
      type: "N/A"
    },
    {
      title: "ML Internship By Tower Research Capital - Tower Research Capital",
      link: "https://theglobalscholarship.org/internships/ml-internship-by-tower-research-capital?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Feb",
      type: "N/A"
    },
    {
      title: "Business Analyst Internship By McKinsey Company - McKinsey And Company",
      link: "https://theglobalscholarship.org/internships/business-analyst-internship-by-mckinsey-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jan",
      type: "N/A"
    },
    {
      title: "Internship By Unbox Robotics - Unbox Robotics",
      link: "https://theglobalscholarship.org/internships/internship-by-unbox-robotics?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jan",
      type: "N/A"
    },
    {
      title: "Graphic Design Internships By Lawctopus - Lawctopus",
      link: "https://theglobalscholarship.org/internships/graphic-design-internships-by-lawctopus?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Customer Service Internship By Avery Dennison - Avery Dennison",
      link: "https://theglobalscholarship.org/internships/customer-service-internship-by-avery-dennison?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Customer Service Internship By Avery Dennison - Avery Dennison",
      link: "https://theglobalscholarship.org/internships/customer-service-internship-by-avery-dennison?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Jan",
      type: "N/A"
    },
    {
      title: "Internships By CEEW The Council - CEEW The Council",
      link: "https://theglobalscholarship.org/internships/internships-by-ceew-the-council?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Human Resources Internship By IPE Global - IPE Global",
      link: "https://theglobalscholarship.org/internships/human-resources-internship-by-ipe-global?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Internships By Brand 4 Brands - Brand 4 Brands",
      link: "https://theglobalscholarship.org/internships/internships-by-brand-4-brands?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Buyer Internship By Ferrari - Ferrari",
      link: "https://theglobalscholarship.org/internships/buyer-internship-by-ferrari?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jan",
      type: "N/A"
    },
    {
      title: "Data Analyst Trainee Internship By SAZ India - SAZ India",
      link: "https://theglobalscholarship.org/internships/data-analyst-trainee-internship-by-saz-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jan",
      type: "N/A"
    },
    {
      title: "Business Development Internship By Travclan - Travclan",
      link: "https://theglobalscholarship.org/internships/business-development-internship-by-travclan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Jan",
      type: "N/A"
    },
    {
      title: "Business Operations Internship By Travclan - Travclan",
      link: "https://theglobalscholarship.org/internships/business-operations-internship-by-travclan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Jan",
      type: "N/A"
    },
    {
      title: "Art Internship By Conde Nast India - Conde Nast India",
      link: "https://theglobalscholarship.org/internships/art-internship-by-conde-nast-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Jan",
      type: "N/A"
    },
    {
      title: "AI Customer Success Internship By Seagate Technology - Seagate Technology",
      link: "https://theglobalscholarship.org/internships/ai-customer-success-internship-by-seagate-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Jan",
      type: "N/A"
    },
    {
      title: "Robotics Internship By VECROS - VECROS",
      link: "https://theglobalscholarship.org/internships/robotics-internship-by-vecros?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Jan",
      type: "N/A"
    },
    {
      title: "Data Science Internship By Websecure AI - Websecure AI",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-websecure-ai?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Jan",
      type: "N/A"
    },
    {
      title: "Finance Internship By Travclan - Travclan",
      link: "https://theglobalscholarship.org/internships/finance-internship-by-travclan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Jan",
      type: "N/A"
    },
    {
      title: "Project Internship By Collins Aerospace RTX - Collins Aerospace RTX",
      link: "https://theglobalscholarship.org/internships/project-internship-by-collins-aerospace-rtx?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, Post Doctoral",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Jan",
      type: "N/A"
    },
    {
      title: "Frontend Internship By CloudSEK - CloudSEK",
      link: "https://theglobalscholarship.org/internships/frontend-internship-by-cloudsek?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Jan",
      type: "N/A"
    },
    {
      title: "Tender Internship By Antino - Antino",
      link: "https://theglobalscholarship.org/internships/tender-internship-by-antino?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Motion Graphic Designer Internship By Antino - Antino",
      link: "https://theglobalscholarship.org/internships/motion-graphic-designer-internship-by-antino?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Finance ACCA Internship By DUPONT - DUPONT",
      link: "https://theglobalscholarship.org/internships/finance-acca-internship-by-dupont-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Business Development Internship By Antino - Antino",
      link: "https://theglobalscholarship.org/internships/business-development-internship-by-antino?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Finance APAY Internship By DUPONT - DUPONT",
      link: "https://theglobalscholarship.org/internships/finance-apay-internship-by-dupont?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Digital Marketing Internship By Nuvoretail Enlytical Technologies Private Limited - Nuvoretail Enlytical Technologies Private Limited",
      link: "https://theglobalscholarship.org/internships/digital-marketing-internship-by-nuvoretail-enlytical-technologies-private-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "GDS MENA Technology Consulting Internship By Ey India - Ey India",
      link: "https://theglobalscholarship.org/internships/gds-mena-technology-consulting-internship-by-ey-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Accounts Payable Apprenticeship By Technip Energies - Technip Energies",
      link: "https://theglobalscholarship.org/internships/accounts-payable-apprenticeship-by-technip-energies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Machine Learning Internship By Micro1 - Micro1",
      link: "https://theglobalscholarship.org/internships/machine-learning-internship-by-micro1?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Product Application Internship By Analog Devices - Analog Devices",
      link: "https://theglobalscholarship.org/internships/product-application-internship-by-analog-devices?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Product Internship By Upraised - Upraised",
      link: "https://theglobalscholarship.org/internships/product-internship-by-upraised?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Software Engineering Internship By Aurva - Aurva",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-aurva?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Scrum Master Internships By Kreativstorm - Kreativstorm",
      link: "https://theglobalscholarship.org/internships/scrum-master-internships-by-kreativstorm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Flutter Internship By FamPay - FamPay",
      link: "https://theglobalscholarship.org/internships/flutter-internship-by-fampay?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "UX Research Internship By Ninjacart - Ninjacart",
      link: "https://theglobalscholarship.org/internships/ux-research-internship-by-ninjacart?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Global Business Services Internship By Kraft Heinz - Kraft Heinz",
      link: "https://theglobalscholarship.org/internships/global-business-services-internship-by-kraft-heinz?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Backend Engineer Internship By Zimyo - Zimyo",
      link: "https://theglobalscholarship.org/internships/backend-engineer-internship-by-zimyo?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "College Internship By Applied Materials - Applied Materials",
      link: "https://theglobalscholarship.org/internships/college-internship-by-applied-materials?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Application Software Engineer Apprenticeship By Oceaneering - Oceaneering",
      link: "https://theglobalscholarship.org/internships/application-software-engineer-apprenticeship-by-oceaneering?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Digital Communications Internship By Teach For India - Teach For India",
      link: "https://theglobalscholarship.org/internships/digital-communications-internship-by-teach-for-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Marketing Internship By Moglix - Moglix",
      link: "https://theglobalscholarship.org/internships/marketing-internship-by-moglix?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Media Sales Internship By NoticeBard - NoticeBard",
      link: "https://theglobalscholarship.org/internships/media-sales-internship-by-noticebard?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Communications And Volunteer Management Internship By Teach For India - Teach For India",
      link: "https://theglobalscholarship.org/internships/communications-and-volunteer-management-internship-by-teach-for-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Fellowship And Recruitment Internship By Teach For India - Teach For India",
      link: "https://theglobalscholarship.org/internships/fellowship-and-recruitment-internship-by-teach-for-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Network Engineer Internship By Kreativstorm - Kreativstorm",
      link: "https://theglobalscholarship.org/internships/network-engineer-internship-by-kreativstorm-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Trade Operation Internship By CoinDCX - CoinDCX",
      link: "https://theglobalscholarship.org/internships/trade-operation-internship-by-coindcx?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Internships By Kreativstorm - Kreativstorm",
      link: "https://theglobalscholarship.org/internships/internships-by-kreativstorm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Jan",
      type: "N/A"
    },
    {
      title: "Growth Internship By CoinDCX - CoinDCX",
      link: "https://theglobalscholarship.org/internships/growth-internship-by-coindcx?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Research Internship By Ericsson - Ericsson",
      link: "https://theglobalscholarship.org/internships/research-internship-by-ericsson?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Software Automation Internship By Carrier - Carrier",
      link: "https://theglobalscholarship.org/internships/software-automation-internship-by-carrier?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Firmware And Embedded Software Internship By Carrier - Carrier",
      link: "https://theglobalscholarship.org/internships/firmware-and-embedded-software-internship-by-carrier?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Product Design Internship By Highspot - Highspot",
      link: "https://theglobalscholarship.org/internships/product-design-internship-by-highspot?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Human Resource Internship By Webvillee Technology Pvt Ltd - Webvillee Technology Pvt Ltd",
      link: "https://theglobalscholarship.org/internships/human-resource-internship-by-webvillee-technology-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Human Resources Internship By Paytm - Paytm",
      link: "https://theglobalscholarship.org/internships/human-resources-internship-by-paytm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Data Management Apprenticeship By S And P Global - S And P Global",
      link: "https://theglobalscholarship.org/internships/data-management-apprenticeship-by-s-and-p-global?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Internships By Heart It Out - Heart It Out",
      link: "https://theglobalscholarship.org/internships/internships-by-heart-it-out?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Jan",
      type: "N/A"
    },
    {
      title: "Business Development Internship By CoinDCX - CoinDCX",
      link: "https://theglobalscholarship.org/internships/business-development-internship-by-coindcx?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Business Development Internship By Webvillee Technology Pvt Ltd - Webvillee Technology Pvt Ltd",
      link: "https://theglobalscholarship.org/internships/business-development-internship-by-webvillee-technology-pvt-ltd-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Java Developer Internship By Kreativestorm - Kreativestorm",
      link: "https://theglobalscholarship.org/internships/-java-developer-internship-by-kreativestorm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Web Development Internship By Applied Materials - Applied Materials",
      link: "https://theglobalscholarship.org/internships/web-development-internship-by-applied-materials?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Design Verification Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/design-verification-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Machine Learning Internship By HyperVerge - HyperVerge",
      link: "https://theglobalscholarship.org/internships/machine-learning-internship-by-hyperverge?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Technical Product Manager Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/technical-product-manager-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Accenture Online Internship Program - The Forage",
      link: "https://theglobalscholarship.org/internships/accenture-online-internship-program?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Full Stack Developer Internship By Techolution - Techolution",
      link: "https://theglobalscholarship.org/internships/full-stack-developer-internship-by-techolution?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Dec",
      type: "N/A"
    },
    {
      title: "Software Engineer Summer Internship 2025 By Coinbase - Coinbase",
      link: "https://theglobalscholarship.org/internships/software-engineer-summer-internship-2025-by-coinbase?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Dec",
      type: "N/A"
    },
    {
      title: "Abhijit Sen Rural Internship 2025 - The National Foundation for India (NFI)",
      link: "https://theglobalscholarship.org/internships/abhijit-sen-rural-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Software Engineer Internship By Dialpad - Dialpad",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-dialpad?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Dec",
      type: "N/A"
    },
    {
      title: "Student Trading Internship By Oracle - Oracle",
      link: "https://theglobalscholarship.org/internships/student-trading-internship-by-oracle?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Dec",
      type: "N/A"
    },
    {
      title: "Legal Internship By Pfizer - Pfizer",
      link: "https://theglobalscholarship.org/internships/legal-internship-by-pfizer?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Dec",
      type: "N/A"
    },
    {
      title: "UX Design Internship By Techolution - Techolution",
      link: "https://theglobalscholarship.org/internships/ux-design-internship-by-techolution?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Dec",
      type: "N/A"
    },
    {
      title: "Muskurahat Foundation Internship 2024 - Muskurahat Foundation",
      link: "https://theglobalscholarship.org/internships/muskurahat-foundation-internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Flight Physics Internship By Airbus - Airbus",
      link: "https://theglobalscholarship.org/internships/flight-physics-internship-by-airbus?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Dec",
      type: "N/A"
    },
    {
      title: "Automation And Digitalization Internship By Rolls Royce - Rolls Royce",
      link: "https://theglobalscholarship.org/internships/automation-and-digitalization-internship-by-rolls-royce?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Dec",
      type: "N/A"
    },
    {
      title: "Product Research Internship By Leap - Leap",
      link: "https://theglobalscholarship.org/internships/product-research-internship-by-leap?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
      type: "N/A"
    },
    {
      title: "IT Cloud Operations Internship By Motorola Solutions - Motorola Solutions",
      link: "https://theglobalscholarship.org/internships/it-cloud-operations-internship-by-motorola-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
      type: "N/A"
    },
    {
      title: "Data Analyst Internship By InnovatexIQ Solutions - InnovatexIQ Solutions",
      link: "https://theglobalscholarship.org/internships/data-analyst-internship-by-innovatexiq-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
      type: "N/A"
    },
    {
      title: "Internship By Comcast - Comcast",
      link: "https://theglobalscholarship.org/internships/internship-by-comcast?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
      type: "N/A"
    },
    {
      title: "Chartered Accountant Internship By HSBC Group - HSBC Group",
      link: "https://theglobalscholarship.org/internships/chartered-accountant-internship-by-hsbc-group?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "13-Dec",
      type: "N/A"
    },
    {
      title: "Compile Internship By McKESSON - McKESSON",
      link: "https://theglobalscholarship.org/internships/compile-internship-by-mckesson?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
      type: "N/A"
    },
    {
      title: "Actuarial Internship By Milliman - Milliman",
      link: "https://theglobalscholarship.org/internships/actuarial-internship-by-milliman?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
      type: "N/A"
    },
    {
      title: "Backend Internship By Control One - Control One",
      link: "https://theglobalscholarship.org/internships/backend-internship-by-control-one?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
      type: "N/A"
    },
    {
      title: "Computer Vision Internship By Control One - Control One",
      link: "https://theglobalscholarship.org/internships/computer-vision-internship-by-control-one?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Tesla Careers - Tesla Careers",
      link: "https://theglobalscholarship.org/internships/internships-by-tesla-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "DC Security Specialist Internship By Amazon - Amazon",
      link: "https://theglobalscholarship.org/internships/dc-security-specialist-internship-by-amazon?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
      type: "N/A"
    },
    {
      title: "Software Internship By Unbox Robotics - Unbox Robotics",
      link: "https://theglobalscholarship.org/internships/software-internship-by-unbox-robotics?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
      type: "N/A"
    },
    {
      title: "Artificial Intelligence Internship By Meta Scifor Technologies - Meta Scifor Technologies",
      link: "https://theglobalscholarship.org/internships/artificial-intelligence-internship-by-meta-scifor-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
      type: "N/A"
    },
    {
      title: "Frontend Developer Internship By VRV Security - VRV Security",
      link: "https://theglobalscholarship.org/internships/frontend-developer-internship-by-vrv-security?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
      type: "N/A"
    },
    {
      title: "Community Internship By WeWork India - WeWork India",
      link: "https://theglobalscholarship.org/internships/community-internship-by-wework-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "Digital Marketing Internship By Pfizer - Pfizer",
      link: "https://theglobalscholarship.org/internships/digital-marketing-internship-by-pfizer-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "Machine Learning Internship By Deccan AI - Deccan AI",
      link: "https://theglobalscholarship.org/internships/machine-learning-internship-by-deccan-ai?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "General Business Management Internship By NTT Data - NTT Data",
      link: "https://theglobalscholarship.org/internships/general-business-management-internship-by-ntt-data?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "Flutter Internship By CRED - CRED",
      link: "https://theglobalscholarship.org/internships/flutter-internship-by-cred?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "System Test Internship By Seagate Technology - Seagate Technology",
      link: "https://theglobalscholarship.org/internships/system-test-internship-by-seagate-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "Grad Internship By Walmart Careers - Walmart Careers",
      link: "https://theglobalscholarship.org/internships/-grad-internship-by-walmart-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "Technical Internship By SAS Careers - SAS Careers",
      link: "https://theglobalscholarship.org/internships/technical-internship-by-sas-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "BISAG N MeitY Internship Scheme 2024 - MeitY",
      link: "https://theglobalscholarship.org/internships/bisag-n-meity-internship-scheme-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "02-Dec",
      type: "N/A"
    },
    {
      title: "SEO Internship By Groww - Groww",
      link: "https://theglobalscholarship.org/internships/seo-internship-by-groww?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Antenna Design Internship By GalaxEye Space - GalaxEye Space",
      link: "https://theglobalscholarship.org/internships/antenna-design-internship-by-galaxeye-space?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "RF Design Internship By GalaxEye Space - GalaxEye Space",
      link: "https://theglobalscholarship.org/internships/rf-design-internship-by-galaxeye-space?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Hilton Careers - Hilton Careers",
      link: "https://theglobalscholarship.org/internships/internships-by-hilton-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Brand Management Team Internship By Bayport - Bayport",
      link: "https://theglobalscholarship.org/internships/brand-management-team-internship-by-bayport?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "Human Resources Internship By SLB Careers - SLB Careers",
      link: "https://theglobalscholarship.org/internships/human-resources-internship-by-slb-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "Research Sciences Internship By Microsoft - Microsoft",
      link: "https://theglobalscholarship.org/internships/research-sciences-internship-by-microsoft?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Apr",
      type: "N/A"
    },
    {
      title: "All Technical Students Short Term Internship 2025 - CERN",
      link: "https://theglobalscholarship.org/internships/all-technical-students-short-term-internship-2025-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "Backend Software Engineering Internship By HappyFox - HappyFox",
      link: "https://theglobalscholarship.org/internships/backend-software-engineering-internship-by-happyfox?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "Product Support Internship By GreytHR Careers - GreytHR Careers",
      link: "https://theglobalscholarship.org/internships/product-support-internship-by-greythr-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Talent Acquisition Internship By Tata CLiQ - TATA CLiQ",
      link: "https://theglobalscholarship.org/internships/talent-acquisition-internship-by-tata-cliq?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Data Mining Internship By Greytip Software - Greytip Software",
      link: "https://theglobalscholarship.org/internships/data-mining-internship-by-greytip-software?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Integration Internship By Gainsight - Gainsight",
      link: "https://theglobalscholarship.org/internships/integration-internship-by-gainsight?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "22-Nov",
      type: "N/A"
    },
    {
      title: "Geoscience And Petrotechnical Internship By SLB Careers - SLB Careers",
      link: "https://theglobalscholarship.org/internships/geoscience-and-petrotechnical-internship-by-slb-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Geoscience And Petrotechnical Internship By SLB Careers - SLB Careers",
      link: "https://theglobalscholarship.org/internships/geoscience-and-petrotechnical-internship-by-slb-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "Data Scientist Internship By Carousell Group - Carousell Group",
      link: "https://theglobalscholarship.org/internships/data-scientist-internship-by-carousell-group?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Technology Internship By SLB Careers - SLB Careers",
      link: "https://theglobalscholarship.org/internships/technology-internship-by-slb-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Data Analytics Internship By Carousell Group - Carousell Group",
      link: "https://theglobalscholarship.org/internships/data-analytics-internship-by-carousell-group?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "IT Technical Internship By Synopsys - Synopsys",
      link: "https://theglobalscholarship.org/internships/it-technical-internship-by-synopsys-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "iOS Internship By Carousell Group - Carousell Group",
      link: "https://theglobalscholarship.org/internships/ios-internship-by-carousell-group?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Loyalty Cold Calling Internship By Paytm Careers - Paytm Careers",
      link: "https://theglobalscholarship.org/internships/loyalty-cold-calling-internship-by-paytm-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Python Developer Internship By Accobridge Solutions - Accobridge Solutions",
      link: "https://theglobalscholarship.org/internships/python-developer-internship-by-accobridge-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Application Developer Internship By Walter P Moore - Walter P Moore",
      link: "https://theglobalscholarship.org/internships/application-developer-internship-by-walter-p-moore?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "N/A",
      type: "N/A"
    },
    {
      title: "Backend Developer Internship By AegisCovenant - AegisCovenant",
      link: "https://theglobalscholarship.org/internships/backend-developer-internship-by-aegiscovenant?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Firmware Design Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/firmware-design-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Software Engineer Internship By Stripe Careers - Stripe Careers",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-stripe-careers-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Interior Design Internship By Chalk Studio - Chalk Studio",
      link: "https://theglobalscholarship.org/internships/interior-design-internship-by-chalk-studio?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Marketing And Strategy Internship By Henkel Careers - Henkel Careers",
      link: "https://theglobalscholarship.org/internships/marketing-and-strategy-internship-by-henkel-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Content Specialist Internship By Revvity - Revvity",
      link: "https://theglobalscholarship.org/internships/content-specialist-internship-by-revvity-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Compiler Software Engineer Internship By D Matrix - D Matrix",
      link: "https://theglobalscholarship.org/internships/compiler-software-engineer-internship-by-d-matrix?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Software Developer Internship By Synopsys - Synopsys",
      link: "https://theglobalscholarship.org/internships/software-developer-internship-by-synopsys?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Internship By Harman - Harman",
      link: "https://theglobalscholarship.org/internships/internship-by-harman?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Machine Learning Internship By CloudSEK Careers - CloudSEK Careers",
      link: "https://theglobalscholarship.org/internships/machine-learning-internship-by-cloudsek-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Dec",
      type: "N/A"
    },
    {
      title: "SDE Internship By CloudSEK Careers - CloudSEK Careers",
      link: "https://theglobalscholarship.org/internships/-sde-internship-by-cloudsek-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Dec",
      type: "N/A"
    },
    {
      title: "Automation Internship By Seagate Group - Seagate Group",
      link: "https://theglobalscholarship.org/internships/automation-internship-by-seagate-group?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Dec",
      type: "N/A"
    },
    {
      title: "SDE Frontend Internship By CloudSEK Careers - CloudSEK Careers",
      link: "https://theglobalscholarship.org/internships/sde-frontend-internship-by-cloudsek-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Dec",
      type: "N/A"
    },
    {
      title: "SDE Backend Internship By CloudSEK Careers - CloudSEK Careers",
      link: "https://theglobalscholarship.org/internships/sde-backend-internship-by-cloudsek-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Dec",
      type: "N/A"
    },
    {
      title: "Content Writing Internship By Sciative Solutions - Sciative Solutions",
      link: "https://theglobalscholarship.org/internships/content-writing-internship-by-sciative-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jan",
      type: "N/A"
    },
    {
      title: "Partnerships Analytics Internship By Razorpay - Razorpay",
      link: "https://theglobalscholarship.org/internships/partnerships-analytics-internship-by-razorpay?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Dec",
      type: "N/A"
    },
    {
      title: "Google STEP Internship 2025 - Google",
      link: "https://theglobalscholarship.org/internships/google-step-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Data Science Internship By Dun And Bradstreet - Dun And Bradstreet",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-dun-and-bradstreet?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Dec",
      type: "N/A"
    },
    {
      title: "Business Internship By LAM Research - LAM Research",
      link: "https://theglobalscholarship.org/internships/business-internship-by-lam-research?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Dec",
      type: "N/A"
    },
    {
      title: "Engineering Internship By GE Healthcare - GE Healthcare",
      link: "https://theglobalscholarship.org/internships/engineering-internship-by-ge-healthcare?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Dec",
      type: "N/A"
    },
    {
      title: "External Internship By Hewlett Packard - Hewlett Packard (HP)",
      link: "https://theglobalscholarship.org/internships/external-internship-by-hewlett-packard?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Dec",
      type: "N/A"
    },
    {
      title: "Fab Engineering Internship By Global Foundries - Global Foundries",
      link: "https://theglobalscholarship.org/internships/fab-engineering-internship-by-global-foundries?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Dec",
      type: "N/A"
    },
    {
      title: "Software Developer Internship By IBM India Private Limited - IBM India Private Limited",
      link: "https://theglobalscholarship.org/internships/software-developer-internship-by-ibm-india-private-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "14-Nov",
      type: "N/A"
    },
    {
      title: "Graduate Internship By Medtronic - Medtronic",
      link: "https://theglobalscholarship.org/internships/graduate-internship-by-medtronic?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
      type: "N/A"
    },
    {
      title: "Experience Design Internship By Tangle Design - Tangle Design",
      link: "https://theglobalscholarship.org/internships/experience-design-internship-by-tangle-design?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Dec",
      type: "N/A"
    },
    {
      title: "Human Resources Internship By Tangle Design - Tangle Design",
      link: "https://theglobalscholarship.org/internships/human-resources-internship-by-tangle-design?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Dec",
      type: "N/A"
    },
    {
      title: "Security Research Internship By Microsoft - Microsoft",
      link: "https://theglobalscholarship.org/internships/security-research-internship-by-microsoft?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Dec",
      type: "N/A"
    },
    {
      title: "Business Development Internship By Tangle Design - Tangle Design",
      link: "https://theglobalscholarship.org/internships/business-development-internship-by-tangle-design?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Dec",
      type: "N/A"
    },
    {
      title: "Security Operations Internship By Microsoft - Microsoft",
      link: "https://theglobalscholarship.org/internships/security-operations-internship-by-microsoft?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Dec",
      type: "N/A"
    },
    {
      title: "Design Internship By Poshmark - Poshmark",
      link: "https://theglobalscholarship.org/internships/design-internship-by-poshmark?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Dec",
      type: "N/A"
    },
    {
      title: "Trading Internship By Oracle Careers - Oracle Careers",
      link: "https://theglobalscholarship.org/internships/trading-internship-by-oracle-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Dec",
      type: "N/A"
    },
    {
      title: "AI And ML Research Internship By SuperKalam - SuperKalam",
      link: "https://theglobalscholarship.org/internships/ai-and-ml-research-internship-by-superkalam?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Dec",
      type: "N/A"
    },
    {
      title: "DevOps Internship By Poshmark - Poshmark",
      link: "https://theglobalscholarship.org/internships/devops-internship-by-poshmark?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Dec",
      type: "N/A"
    },
    {
      title: "QA Manual Testing Internship By Poshmark - Poshmark",
      link: "https://theglobalscholarship.org/internships/qa-manual-testing-internship-by-poshmark?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Dec",
      type: "N/A"
    },
    {
      title: "Video Editing Internship By Groww - Groww",
      link: "https://theglobalscholarship.org/internships/video-editing-internship-by-groww?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Dec",
      type: "N/A"
    },
    {
      title: "Content Writer Internship By SmartCoin - SmartCoin",
      link: "https://theglobalscholarship.org/internships/content-writer-internship-by-smartcoin?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Dec",
      type: "N/A"
    },
    {
      title: "Embedded C Internship By Harman - Harman",
      link: "https://theglobalscholarship.org/internships/embedded-c-internship-by-harman?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Dec",
      type: "N/A"
    },
    {
      title: "Information Security Internship By SmartQ - SmartQ",
      link: "https://theglobalscholarship.org/internships/information-security-internship-by-smartq?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Grapes Worldwide - Grapes Worldwide",
      link: "https://theglobalscholarship.org/internships/internships-by-grapes-worldwide?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Bcwebwise - Bcwebwise",
      link: "https://theglobalscholarship.org/internships/internships-by-bcwebwise?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "TATA Group Cybersecurity IAM Developer - TATA Group",
      link: "https://theglobalscholarship.org/internships/tata-group-cybersecurity-iam-developer?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "TATA Group ESG - TATA Group",
      link: "https://theglobalscholarship.org/internships/tata-group-esg?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "TATA Group Global Internship 2024 - TATA Group",
      link: "https://theglobalscholarship.org/internships/tata-group-global-internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Financial Services Compliance Internship By PhonePe - PhonePe",
      link: "https://theglobalscholarship.org/internships/financial-services-compliance-internship-by-phonepe?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Dec",
      type: "N/A"
    },
    {
      title: "Lean Manufacturing Internship By Mercedes Benz - Mercedes Benz",
      link: "https://theglobalscholarship.org/internships/lean-manufacturing-internship-by-mercedes-benz?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Nov",
      type: "N/A"
    },
    {
      title: "AI Internship By Xerox - Xerox",
      link: "https://theglobalscholarship.org/internships/ai-internship-by-xerox?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Research Internship By Seagate Group - Seagate Group",
      link: "https://theglobalscholarship.org/internships/research-internship-by-seagate-group?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Nov",
      type: "N/A"
    },
    {
      title: "Technology Consulting Internship By Microsoft - Microsoft",
      link: "https://theglobalscholarship.org/internships/technology-consulting-internship-by-microsoft?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "22-Nov",
      type: "N/A"
    },
    {
      title: "ML Internship By Tower Research Capital - Tower Research Capital",
      link: "https://theglobalscholarship.org/internships/ml-internship-by-tower-research-capital?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Nov",
      type: "N/A"
    },
    {
      title: "Application Security Internship By Aspire - Aspire",
      link: "https://theglobalscholarship.org/internships/application-security-internship-by-aspire?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Nov",
      type: "N/A"
    },
    {
      title: "Product Management Internship By Futuristic Labs - Futuristic Labs",
      link: "https://theglobalscholarship.org/internships/product-management-internship-by-futuristic-labs?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Nov",
      type: "N/A"
    },
    {
      title: "ORM Internship By Group Bayport - Bayport",
      link: "https://theglobalscholarship.org/internships/orm-internship-by-group-bayport?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Nov",
      type: "N/A"
    },
    {
      title: "Technical Program Manager Internship By Microsoft India - Microsoft India",
      link: "https://theglobalscholarship.org/internships/technical-program-manager-internship-by-microsoft-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Nov",
      type: "N/A"
    },
    {
      title: "Product Management Internship By Aereo Careers - Aereo Careers",
      link: "https://theglobalscholarship.org/internships/product-management-internship-by-aereo-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "Internship By General Electric Vernova - General Electric Vernova",
      link: "https://theglobalscholarship.org/internships/internship-by-general-electric-vernova?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Nov",
      type: "N/A"
    },
    {
      title: "Human Resources Internship By Paytm - Paytm",
      link: "https://theglobalscholarship.org/internships/human-resources-internship-by-paytm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Nov",
      type: "N/A"
    },
    {
      title: "UX Research Internship By Cash Karo - CashKaro",
      link: "https://theglobalscholarship.org/internships/ux-research-internship-by-cash-karo?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Nov",
      type: "N/A"
    },
    {
      title: "Internships By OML Entertainment Careers - OML Entertainment Careers",
      link: "https://theglobalscholarship.org/internships/internships-by-oml-entertainment-careers-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Oct",
      type: "N/A"
    },
    {
      title: "Human Resources Internship By OML Entertainment Careers - OML Entertainment Careers",
      link: "https://theglobalscholarship.org/internships/human-resources-internship-by-oml-entertainment-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Nov",
      type: "N/A"
    },
    {
      title: "Data Science Internship By Procter And Gamble Careers - Procter And Gamble Careers",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-procter-and-gamble-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "Finance And Accounting Summer Internship By Procter And Gamble - Procter And Gamble",
      link: "https://theglobalscholarship.org/internships/finance-and-accounting-summer-internship--by-procter-and-gamble?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "Marketing And Communication Internship By CACTUS Careers - CACTUS Careers",
      link: "https://theglobalscholarship.org/internships/marketing-and-communication-internship-by-cactus-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "Python Developer Internship By CACTUS Careers - CACTUS Careers",
      link: "https://theglobalscholarship.org/internships/python-developer-internship-by-cactus-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "Graduate Internship By CRISIL Careers - CRISIL Careers",
      link: "https://theglobalscholarship.org/internships/graduate-internship-by-crisil-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "Google Project Management Apprenticeship 2025 - Google",
      link: "https://theglobalscholarship.org/internships/google-project-management-apprenticeship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Oct",
      type: "N/A"
    },
    {
      title: "Operations Associate Apprenticeship Internship By Stripe Careers - Stripe Careers",
      link: "https://theglobalscholarship.org/internships/operations-associate-apprenticeship-internship-by-stripe-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "Winter Research Internship For UG and PG Students 2024 - IIT Dhanbad",
      link: "https://theglobalscholarship.org/internships/winter-research-internship-for-ug-and-pg-students-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Nov",
      type: "N/A"
    },
    {
      title: "Graduate Technical Internship By McAfee - McAfee",
      link: "https://theglobalscholarship.org/internships/graduate-technical-internship-by-mcafee?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
      type: "N/A"
    },
    {
      title: "Nestle Internship Program 2024 - Nestle India",
      link: "https://theglobalscholarship.org/internships/nestle-internship-program-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Oct",
      type: "N/A"
    },
    {
      title: "Institute Of Advanced Study In Science And Technology Winter Internship 2024 - Institute Of Advanced Study In Science And Technology (IASST)",
      link: "https://theglobalscholarship.org/internships/institute-of-advanced-study-in-science-and-technology-winter-internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "24-Oct",
      type: "N/A"
    },
    {
      title: "Analyst Internship By HSBC Careers - HSBC Careers",
      link: "https://theglobalscholarship.org/internships/analyst-internship-by-hsbc-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "19-Oct",
      type: "N/A"
    },
    {
      title: "QA Internship By LeadSquared - LeadSquared",
      link: "https://theglobalscholarship.org/internships/qa-internship-by-leadsquared?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
      type: "N/A"
    },
    {
      title: "Student Internship By Oracle - Oracle",
      link: "https://theglobalscholarship.org/internships/student-internship-by-oracle?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
      type: "N/A"
    },
    {
      title: "Associate Consultant Internship By Bain And Company India - Bain And Company India",
      link: "https://theglobalscholarship.org/internships/associate-consultant-internship-by-bain-and-company-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
      type: "N/A"
    },
    {
      title: "Internship By SatSure Analytics India - SatSure Analytics India",
      link: "https://theglobalscholarship.org/internships/internship-by-satsure-analytics-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "Internship By Ziegler Aerospace India - Ziegler Aerospace India",
      link: "https://theglobalscholarship.org/internships/internship-by-ziegler-aerospace-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, Aviation",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
      type: "N/A"
    },
    {
      title: "IIT Bhubaneswar Winter Internship 2024 - IIT Bhubaneswar",
      link: "https://theglobalscholarship.org/internships/iit-bhubaneswar-winter-internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "07-Nov",
      type: "N/A"
    },
    {
      title: "Winter Internship By MeitY 2024 - Government Of India",
      link: "https://theglobalscholarship.org/internships/winter-internship-by-meity-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Engineering, Medical, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "18-Oct",
      type: "N/A"
    },
    {
      title: "Internships By Websenor Careers 2024 - Websenor Careers",
      link: "https://theglobalscholarship.org/internships/internships-by-websenor-careers-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Nov",
      type: "N/A"
    },
    {
      title: "Software Engineer Internship By Athenahealth - Athenahealth",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-athenahealth-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Nov",
      type: "N/A"
    },
    {
      title: "Product Manager Internship By Salesforce - Salesforce",
      link: "https://theglobalscholarship.org/internships/-product-manager-internship-by-salesforce?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "17-Oct",
      type: "N/A"
    },
    {
      title: "Technical Support Engineering Internship By Microsoft - Microsoft",
      link: "https://theglobalscholarship.org/internships/technical-support-engineering-internship-by-microsoft?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Nov",
      type: "N/A"
    },
    {
      title: "SOC Verification Internship By Rivos Careers - Rivos Careers",
      link: "https://theglobalscholarship.org/internships/soc-verification-internship-by-rivos-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Nov",
      type: "N/A"
    },
    {
      title: "C And Python Programmer Internship By Seagate Technology - Seagate Technology",
      link: "https://theglobalscholarship.org/internships/c-and-python-programmer-internship-by-seagate-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Nov",
      type: "N/A"
    },
    {
      title: "Corporate Quality Internship By Seagate Technology - Seagate Technology",
      link: "https://theglobalscholarship.org/internships/corporate-quality-internship-by-seagate-technology-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Oct",
      type: "N/A"
    },
    {
      title: "Integration Internship By Leucine Careers - Leucine Careers",
      link: "https://theglobalscholarship.org/internships/integration-internship-by-leucine-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "N/A",
      type: "N/A"
    },
    {
      title: "Full Stack Internship By Leucine Careers - Leucine Careers",
      link: "https://theglobalscholarship.org/internships/full-stack-internship-by-leucine-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Oct",
      type: "N/A"
    },
    {
      title: "Internship By Medtronic Careers - Medtronic Careers",
      link: "https://theglobalscholarship.org/internships/internship-by-medtronic-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "Restructuring Internship By Kroll - Kroll",
      link: "https://theglobalscholarship.org/internships/restructuring-internship-by-kroll?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Oct",
      type: "N/A"
    },
    {
      title: "Data Analyst Internship By Nuvoretail Enlytical Technologies - Nuvoretail Enlytical Technologies",
      link: "https://theglobalscholarship.org/internships/data-analyst-internship-by-nuvoretail-enlytical-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "Internships By SmartTQ Careers - SmartTQ Careers",
      link: "https://theglobalscholarship.org/internships/internships-by-smarttq-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "Global Supply Chain Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/global-supply-chain-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Oct",
      type: "N/A"
    },
    {
      title: "Google Software Application Development Apprenticeship 2025 - Google",
      link: "https://theglobalscholarship.org/internships/google-software-application-development-apprenticeship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Oct",
      type: "N/A"
    },
    {
      title: "Google Data Analytics Apprenticeship 2025 - Google",
      link: "https://theglobalscholarship.org/internships/google-data-analytics-apprenticeship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Oct",
      type: "N/A"
    },
    {
      title: "Competition Commission India Internship 2024 - Competition Commission India (CCI)",
      link: "https://theglobalscholarship.org/internships/competition-commission-india-internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, Professional courses",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Nov",
      type: "N/A"
    },
    {
      title: "Customer Success Associate Internship By Engati Careers - Engati Careers",
      link: "https://theglobalscholarship.org/internships/customer-success-associate-internship-by-engati-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Oct",
      type: "N/A"
    },
    {
      title: "iOS Developer Internship By OpeninApp Careers - OpeninApp Careers",
      link: "https://theglobalscholarship.org/internships/ios-developer-internship-by-openinapp-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Oct",
      type: "N/A"
    },
    {
      title: "Customer Success Internship By Engati Careers - Engati Careers",
      link: "https://theglobalscholarship.org/internships/customer-success-internship-by-engati-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Oct",
      type: "N/A"
    },
    {
      title: "Product Internship By Volopay Careers - Volopay Careers",
      link: "https://theglobalscholarship.org/internships/product-internship-by-volopay-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Oct",
      type: "N/A"
    },
    {
      title: "Software Engineer Winter Internship By Rubrik Careers - Rubrik Careers",
      link: "https://theglobalscholarship.org/internships/software-engineer-winter-internship-by-rubrik-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Oct",
      type: "N/A"
    },
    {
      title: "Frontend And Backend Developer Internship By Volopay Careers - Volopay Careers",
      link: "https://theglobalscholarship.org/internships/frontend-and-backend-developer-internship-by-volopay-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Oct",
      type: "N/A"
    },
    {
      title: "Prime Ministers Internship 2024 - The Ministry Of Corporate Affairs, Govt. Of India",
      link: "https://theglobalscholarship.org/internships/prime-ministers-internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "ITI, Diploma, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "UI Front End SheSparks Internship By Adobe Technology - Adobe Technology",
      link: "https://theglobalscholarship.org/internships/ui-front-end-shesparks-internship-by-adobe-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Oct",
      type: "N/A"
    },
    {
      title: "Digital Business Marketing Apprenticeship By Google - Google",
      link: "https://theglobalscholarship.org/internships/digital-business-marketing-apprenticeship-by-google?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Oct",
      type: "N/A"
    },
    {
      title: "College Ambassadors Internship By AERHE Development Federation - AERHE Development Federation",
      link: "https://theglobalscholarship.org/internships/college-ambassadors-internship-by-aerhe-development-federation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Oct",
      type: "N/A"
    },
    {
      title: "FSSAI Internship 2024 - Food Safety & Standards Authority of India",
      link: "https://theglobalscholarship.org/internships/fssai-internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "04-Oct",
      type: "N/A"
    },
    {
      title: "Digital Technology Internship By GE Vernova - GE Vernova",
      link: "https://theglobalscholarship.org/internships/digital-technology-internship-by-ge-vernova?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Medical, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Oct",
      type: "N/A"
    },
    {
      title: "Product Analyst Internship By ShareChat - ShareChat",
      link: "https://theglobalscholarship.org/internships/product-analyst-internship-by-sharechat?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Oct",
      type: "N/A"
    },
    {
      title: "Finance And Legal Internship By HP India - HP India",
      link: "https://theglobalscholarship.org/internships/finance-and-legal-internship-by-hp-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Oct",
      type: "N/A"
    },
    {
      title: "IP Firmware Design Internship By Synopsys Careers - Synopsys Careers",
      link: "https://theglobalscholarship.org/internships/ip-firmware-design-internship-by-synopsys-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Oct",
      type: "N/A"
    },
    {
      title: "Data And Analytics Internship By Harman Samsung Company - Harman Samsung Company",
      link: "https://theglobalscholarship.org/internships/data-and-analytics-internship-by-harman-samsung-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Oct",
      type: "N/A"
    },
    {
      title: "Shell Assessed Internship 2025 - Shell Careers",
      link: "https://theglobalscholarship.org/internships/shell-assessed-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Nov",
      type: "N/A"
    },
    {
      title: "Video Editing Internship By Lawctopus - Lawctopus",
      link: "https://theglobalscholarship.org/internships/video-editing-internship-by-lawctopus?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "07-Nov",
      type: "N/A"
    },
    {
      title: "Graphic Design Internship By Lawctopus - Lawctopus",
      link: "https://theglobalscholarship.org/internships/graphic-design-internship-by-lawctopus?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "Google Project Management Apprenticeship 2024 - Google",
      link: "https://theglobalscholarship.org/internships/google-project-management-apprenticeship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Oct",
      type: "N/A"
    },
    {
      title: "Analytics Internship By Innovaccer Careers - Innovaccer Careers",
      link: "https://theglobalscholarship.org/internships/analytics-internship-by-innovaccer-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Oct",
      type: "N/A"
    },
    {
      title: "Product Design Internship By Innovaccer Careers - Innovaccer Careers",
      link: "https://theglobalscholarship.org/internships/product-design-internship-by-innovaccer-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Oct",
      type: "N/A"
    },
    {
      title: "Technical Writer Internship By Salesforce Careers - Salesforce Careers",
      link: "https://theglobalscholarship.org/internships/technical-writer-internship-by-salesforce-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Oct",
      type: "N/A"
    },
    {
      title: "Technical Internship By Siemens Healthcare Private Limited - Siemens Healthcare Private Limited",
      link: "https://theglobalscholarship.org/internships/technical-internship-by-siemens-healthcare-private-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Oct",
      type: "N/A"
    },
    {
      title: "Research AI Internship By IBM India Private Limited - IBM India Private Limited",
      link: "https://theglobalscholarship.org/internships/research-ai-internship-by-ibm-india-private-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Oct",
      type: "N/A"
    },
    {
      title: "Tata Group Data Visualisation - TATA Group",
      link: "https://theglobalscholarship.org/internships/tata-group-data-visualisation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Newton School Careers - Newton School Careers",
      link: "https://theglobalscholarship.org/internships/-internships-by-newton-school-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Oct",
      type: "N/A"
    },
    {
      title: "Motion Graphics Internship By Groww - Groww",
      link: "https://theglobalscholarship.org/internships/motion-graphics-internship-by-groww?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "16-Oct",
      type: "N/A"
    },
    {
      title: "Software Development Internship By Bag2Bag Careers - Bag2Bag Careers",
      link: "https://theglobalscholarship.org/internships/-software-development-internship-by-bag2bag-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Oct",
      type: "N/A"
    },
    {
      title: "Machine Learning Internship By Tower Research Capital - Tower Research Capital",
      link: "https://theglobalscholarship.org/internships/machine-learning-internship-by-tower-research-capital?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Oct",
      type: "N/A"
    },
    {
      title: "Frontend Developer Internship By Acowale - Acowale",
      link: "https://theglobalscholarship.org/internships/frontend-developer-internship-by-acowale?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Oct",
      type: "N/A"
    },
    {
      title: "Industrial Trainee Internship By LSEG Careers - London Stock Exchange Careers",
      link: "https://theglobalscholarship.org/internships/industrial-trainee-internship-by-lseg-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Oct",
      type: "N/A"
    },
    {
      title: "Internships By Liberin Technologies - Liberin Technologies",
      link: "https://theglobalscholarship.org/internships/internships-by-liberin-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Oct",
      type: "N/A"
    },
    {
      title: "Internships By Penthara Technologies Inc - Penthara Technologies Inc",
      link: "https://theglobalscholarship.org/internships/-internships-by-penthara-technologies-inc?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Oct",
      type: "N/A"
    },
    {
      title: "Internship By GSK Pharma India - GSK Pharma India",
      link: "https://theglobalscholarship.org/internships/internship-by-gsk-pharma-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "Test Engineer Internship By Semtech Careers - Semtech Careers",
      link: "https://theglobalscholarship.org/internships/test-engineer-internship-by-semtech-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "Data Platform Internship By GE Aerospace - GE Aerospace",
      link: "https://theglobalscholarship.org/internships/data-platform-internship-by-ge-aerospace?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "React Internship By Adagrad AI - Adagrad AI",
      link: "https://theglobalscholarship.org/internships/react-internship-by-adagrad-ai?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "Machine Learning Internship By CloudSEK Careers - CloudSEK Careers",
      link: "https://theglobalscholarship.org/internships/machine-learning-internship-by-cloudsek-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "GIT Evergreen External Grad Req Internship By HP - HP India",
      link: "https://theglobalscholarship.org/internships/git-evergreen-external-grad-req-internship-by-hp?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "Google Analytical Consultant BS And MS Internship 2025 - Google",
      link: "https://theglobalscholarship.org/internships/google-analytical-consultant-bs-and-ms-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Oct",
      type: "N/A"
    },
    {
      title: "Internships By Airbus India - Airbus India Private Limited",
      link: "https://theglobalscholarship.org/internships/internships-by-airbus-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Mar",
      type: "N/A"
    },
    {
      title: "Robotics Software Internship By Unbox - Unbox Careers",
      link: "https://theglobalscholarship.org/internships/robotics-software-internship-by-unbox-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "Return To Work Program Internship By Morgan Stanley 2025 - Morgan Stanley",
      link: "https://theglobalscholarship.org/internships/return-to-work-program-internship-by-morgan-stanley-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "Google Application Engineering Summer Internship 2025 - Google",
      link: "https://theglobalscholarship.org/internships/google-application-engineering-summer-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Sep",
      type: "N/A"
    },
    {
      title: "Internships By Meragi Events Careers - Meragi Events Careers",
      link: "https://theglobalscholarship.org/internships/internships-by-meragi-events-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Sep",
      type: "N/A"
    },
    {
      title: "Internships By Meragi Events Careers - Meragi Events Careers",
      link: "https://theglobalscholarship.org/internships/internships-by-meragi-events-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "N/A",
      type: "N/A"
    },
    {
      title: "QA Consultant SheSparks Internship By Adobe Technology - Adobe Technology",
      link: "https://theglobalscholarship.org/internships/qa-consultant-shesparks-internship-by-adobe-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "Data Science Internship By Microsoft For Final Year students - Microsoft",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-microsoft-for-final-year-students-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "Telematics Internship For CSE And EC Graduates By Harman Samsung Company - Harman Samsung Company",
      link: "https://theglobalscholarship.org/internships/-telematics-internship-for-cse-and-ec-graduates-by-harman-samsung-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "Data Science Internship By Meta Scifor Technologies - Meta Scifor Technologies Pvt Ltd.",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-meta-scifor-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Oct",
      type: "N/A"
    },
    {
      title: "Data Engineer Internship By Aspire - Aspire",
      link: "https://theglobalscholarship.org/internships/data-engineer-internship-by-aspire?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Oct",
      type: "N/A"
    },
    {
      title: "Product Support Analyst Internship By PayU Careers - PayU Careers",
      link: "https://theglobalscholarship.org/internships/product-support-analyst-internship-by-payu-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Oct",
      type: "N/A"
    },
    {
      title: "Product Design Internship By Microsoft - Microsoft",
      link: "https://theglobalscholarship.org/internships/product-design-internship-by-microsoft?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Oct",
      type: "N/A"
    },
    {
      title: "Interim Intern OneIT Internship By Qualcomm - Qualcomm",
      link: "https://theglobalscholarship.org/internships/interim-intern-oneit-internship-by-qualcomm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Oct",
      type: "N/A"
    },
    {
      title: "Community Internship By We Work India - We Work India",
      link: "https://theglobalscholarship.org/internships/community-internship-by-we-work-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Oct",
      type: "N/A"
    },
    {
      title: "Information Systems Campus Internship By Dow India - Dow India",
      link: "https://theglobalscholarship.org/internships/information-systems-campus-internship-by-dow-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Oct",
      type: "N/A"
    },
    {
      title: "Pan India Summer Internship By HSBC - HSBC",
      link: "https://theglobalscholarship.org/internships/pan-india-summer-internship-by-hsbc?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Sep",
      type: "N/A"
    },
    {
      title: "Business Operations Internship By MAERSK - MAERSK",
      link: "https://theglobalscholarship.org/internships/business-operations-internship-by-maersk?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Co Op Internship By AMD Careers - AMD Careers",
      link: "https://theglobalscholarship.org/internships/co-op-internship-by-amd-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Boat Accenture Swiggy No Broker And Amazing Opportunities by Event Beep - Event Beep",
      link: "https://theglobalscholarship.org/internships/boat-accenture-swiggy-no-broker-and-amazing-opportunities-by-event-beep?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Marketing Internship By Plutus Business Advisory - Plutus Business Advisory",
      link: "https://theglobalscholarship.org/internships/marketing-internship-by-plutus-business-advisory?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Internships By OpeninApp Careers - OpeninApp Careers",
      link: "https://theglobalscholarship.org/internships/internships-by-openinapp-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Security Assurance Internship By CoinDCX - CoinDCX",
      link: "https://theglobalscholarship.org/internships/security-assurance-internship-by-coindcx?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Marketing Internship By Calix India - Calix India",
      link: "https://theglobalscholarship.org/internships/marketing-internship-by-calix-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Software Internship By Motorola Solutions - Motorola Solutions",
      link: "https://theglobalscholarship.org/internships/-software-internship-by-motorola-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Supply Chain Management Internship By Microsoft - Microsoft",
      link: "https://theglobalscholarship.org/internships/supply-chain-management-internship-by-microsoft?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "DPIIT Internship 2024 - The Department for Promotion of Industry and Internal Trade, India",
      link: "https://theglobalscholarship.org/internships/dpiit-internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Oct",
      type: "N/A"
    },
    {
      title: "Internships By ideaForge India - ideaForge Technology Ltd.",
      link: "https://theglobalscholarship.org/internships/internships-by-ideaforge-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "IT Apprenticeship By SITA - SITA",
      link: "https://theglobalscholarship.org/internships/it-apprenticeship-by-sita?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Data Analyst Internship By BCG - Boston Consulting Group (BCG)",
      link: "https://theglobalscholarship.org/internships/data-analyst-internship-by-bcg?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "AI Engineering Internship By Icertis - Icertis",
      link: "https://theglobalscholarship.org/internships/ai-engineering-internship-by-icertis?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "ALG India Law Offices LLP Internship 2024 - ALG India",
      link: "https://theglobalscholarship.org/internships/alg-india-law-offices-llp-internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Oct",
      type: "N/A"
    },
    {
      title: "QA CoE Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/qa-coe-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Video Editing Internship By Cars24 Careers - Cars24 Careers",
      link: "https://theglobalscholarship.org/internships/video-editing-internship-by-cars24-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Information Technology Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/information-technology-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Business Analyst Internship By Kreativstorm Careers - Kreativstorm Careers",
      link: "https://theglobalscholarship.org/internships/business-analyst-internship-by-kreativstorm-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "FPGA Internship By GalaxEye Space Careers - GalaxEye Space Careers",
      link: "https://theglobalscholarship.org/internships/fpga-internship-by-galaxeye-space-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Python Developer Internship By Kreativstorm Careers - Kreativstorm Careers",
      link: "https://theglobalscholarship.org/internships/python-developer-internship-by-kreativstorm-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Nov",
      type: "N/A"
    },
    {
      title: "Product Management And Technology Consulting Internships By Microsoft Corporation - Microsoft Corporation",
      link: "https://theglobalscholarship.org/internships/-product-management-and-technology-consulting-internships-by-microsoft-corporation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "External Internship By HP India - HP India (Hewlett Packard Enterprise)",
      link: "https://theglobalscholarship.org/internships/external-internship-by-hp-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Quality Engineer Internship By Fynd Careers - Fynd Careers",
      link: "https://theglobalscholarship.org/internships/quality-engineer-internship-by-fynd-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Research Internship By Scnata Careers - Scnata Careers",
      link: "https://theglobalscholarship.org/internships/research-internship-by-scnata-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Google Software Engineering Winter Internship 2025 - Google",
      link: "https://theglobalscholarship.org/internships/google-software-engineering-winter-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Nov",
      type: "N/A"
    },
    {
      title: "RDA Specialist Internship By Gartner India - Gartner India",
      link: "https://theglobalscholarship.org/internships/rda-specialist-internship-by-gartner-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Technical Support And Database Internship By ADP Careers - ADP Careers",
      link: "https://theglobalscholarship.org/internships/technical-support-and-database-internship-by-adp-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Global Supply Chain Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/global-supply-chain-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Artificial Intelligence Internship By NetApp Careers - NetApp Careers",
      link: "https://theglobalscholarship.org/internships/artificial-intelligence-internship-by-netapp-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Internships By Niyo Solutions - Niyo Solutions",
      link: "https://theglobalscholarship.org/internships/internships-by-niyo-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "National Centre for Earth Science Studies Internship 2024 - The Ministry Of Earth Sciences, India",
      link: "https://theglobalscholarship.org/internships/national-centre-for-earth-science-studies-internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "XVigil Product Internship By CloudSek Careers - CloudSek Careers",
      link: "https://theglobalscholarship.org/internships/xvigil-product-internship-by-cloudsek-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "SDE Frontend And Backend Internship By CloudSek Careers - CloudSek Careers",
      link: "https://theglobalscholarship.org/internships/-sde-frontend-and-backend-internship-by-cloudsek-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "Talent Acquisition Operations Internship By Harman Samsung Company - Harman Samsung Company",
      link: "https://theglobalscholarship.org/internships/talent-acquisition-operations-internship-by-harman-samsung-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "Product Manager Internship By IBM - IBM India Private Limited",
      link: "https://theglobalscholarship.org/internships/product-manager-internship-by-ibm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "IIT Bombay Research Internship 2024 - Indian Institute of Technology Bombay (IIT Bombay)",
      link: "https://theglobalscholarship.org/internships/iit-bombay-research-internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Internships By Tangle Design Careers - Tangle Design Careers",
      link: "https://theglobalscholarship.org/internships/internships-by-tangle-design-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Data Center Operations Trainee Internship By Amazon - Amazon",
      link: "https://theglobalscholarship.org/internships/data-center-operations-trainee-internship-by-amazon?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "Software Engineering Internships By Apple - Apple",
      link: "https://theglobalscholarship.org/internships/software-engineering-internships-by-apple?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "Market Researcher Internship By SatSure Analytics India - SatSure Analytics India",
      link: "https://theglobalscholarship.org/internships/market-researcher-internship-by-satsure-analytics-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "Associate Consultant Internship By Brain And Company - Brain And Company",
      link: "https://theglobalscholarship.org/internships/associate-consultant-internship-by-brain-and-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "Design Internship By Teach For India - Teach For India",
      link: "https://theglobalscholarship.org/internships/design-internship-by-teach-for-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "Internships By TravClan Careers - TravClan Careers",
      link: "https://theglobalscholarship.org/internships/internships-by-travclan-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Operations Associate Apprenticeship Internship By Stripe Careers - Stripe Careers",
      link: "https://theglobalscholarship.org/internships/operations-associate-apprenticeship-internship-by-stripe-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "IT EUS Internship By Seagate Technology - Seagate Technology",
      link: "https://theglobalscholarship.org/internships/it-eus-internship-by-seagate-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "Internships By Websenor Careers - Websenor Careers",
      link: "https://theglobalscholarship.org/internships/internships-by-websenor-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Internships By Viga Entertainment Technology - Viga Entertainment Technology",
      link: "https://theglobalscholarship.org/internships/internships-by-viga-entertainment-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Associate Internship By McKinsey And Company - McKinsey And Company",
      link: "https://theglobalscholarship.org/internships/associate-internship-by-mckinsey-and-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "Internship By Ziegler Aerospace India 2024 - Ziegler Aerospace India",
      link: "https://theglobalscholarship.org/internships/internship-by-ziegler-aerospace-india-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Aviation",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Sep",
      type: "N/A"
    },
    {
      title: "WRI India Internships 2024 - World Resources Institute India (WRI)",
      link: "https://theglobalscholarship.org/internships/wri-india-internships-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Scrum Master Internship By Kreativstorm - Kreativstorm",
      link: "https://theglobalscholarship.org/internships/scrum-master-internship-by-kreativstorm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "Internships By Advantage Club Careers - Advantage Club Careers",
      link: "https://theglobalscholarship.org/internships/internships-by-advantage-club-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Internships By Endeavour IT Solution PVT LTD - Endeavour IT Solution PVT LTD",
      link: "https://theglobalscholarship.org/internships/internships-by-endeavour-it-solution-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Human Resources Internship By Ace360Degree Careers - Ace360Degree Careers",
      link: "https://theglobalscholarship.org/internships/human-resources-internship-by-ace360degree-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "Product Design Internship By Juspay - Juspay Careers",
      link: "https://theglobalscholarship.org/internships/product-design-internship-by-juspay?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "BIIC Summer Internship By BARCLAYS - BARCLAYS",
      link: "https://theglobalscholarship.org/internships/biic-summer-internship-by-barclays?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "Offline And Online Stipend Based Internship By ThinkNext - ThinkNext",
      link: "https://theglobalscholarship.org/internships/offline-and-online-stipend-based-internship-by-thinknext?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Sep",
      type: "N/A"
    },
    {
      title: "B Tech Internship By EmaniTech PVT LTD - EmaniTech PVT LTD",
      link: "https://theglobalscholarship.org/internships/b-tech-internship-by-emanitech-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Sep",
      type: "N/A"
    },
    {
      title: "NET Internship By Marcus Evans - Marcus Evans",
      link: "https://theglobalscholarship.org/internships/net-internship-by-marcus-evans?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Sep",
      type: "N/A"
    },
    {
      title: "Software Engineering Internship By Stripe Careers - Stripe Careers",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-stripe-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Sep",
      type: "N/A"
    },
    {
      title: "Trainee Internship By Motorola Solutions - Motorola Solutions",
      link: "https://theglobalscholarship.org/internships/trainee-internship-by-motorola-solutions-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "24-Aug",
      type: "N/A"
    },
    {
      title: "Account Executive Internship By Codelattice Digital Solutions - Codelattice Digital Solutions",
      link: "https://theglobalscholarship.org/internships/account-executive-internship-by-codelattice-digital-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Sep",
      type: "N/A"
    },
    {
      title: "Software Development Internship By Riverbed - Riverbed",
      link: "https://theglobalscholarship.org/internships/software-development-internship-by-riverbed?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Sep",
      type: "N/A"
    },
    {
      title: "Software Engineer Winter Internship By Rubrik - Rubrik Careers",
      link: "https://theglobalscholarship.org/internships/software-engineer-winter-internship-by-rubrik?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Sep",
      type: "N/A"
    },
    {
      title: "Technical DevOps Internship By Synopsys Careers - Synopsys Careers",
      link: "https://theglobalscholarship.org/internships/technical-devops-internship-by-synopsys-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Sep",
      type: "N/A"
    },
    {
      title: "CPU Compiler Internship By Nvidia - Nvidia",
      link: "https://theglobalscholarship.org/internships/cpu-compiler-internship-by-nvidia?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "Technical IT Internship By Synopsys Careers - Synopsys Careers",
      link: "https://theglobalscholarship.org/internships/technical-it-internship-by-synopsys-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "JSW MI Internship - JSW Group",
      link: "https://theglobalscholarship.org/internships/jsw-mi-internship?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Professional courses",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Spacenos Labs - Spacenos Labs",
      link: "https://theglobalscholarship.org/internships/internships-by-spacenos-labs?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Web Development Internship By Business Web Solutions - Business Web Solutions",
      link: "https://theglobalscholarship.org/internships/web-development-internship-by-business-web-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Artificial Intelligence Internship By ATS Company - ATS Company",
      link: "https://theglobalscholarship.org/internships/artificial-intelligence-internship-by-ats-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "College Internship By HP - Hewlett Packard (HP)",
      link: "https://theglobalscholarship.org/internships/college-internship-by-hp?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Lokpal Of India Internship Scheme 2024 - Lokpal Of India",
      link: "https://theglobalscholarship.org/internships/lokpal-of-india-internship-scheme-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Data Science Internship By Procter And Gamble - Procter And Gamble",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-procter-and-gamble?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "ICRO Amrit Internship Program 2024 - Indian Potash Limited (IPL & NPC)",
      link: "https://theglobalscholarship.org/internships/icro-amrit-internship-program-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "National AIDS Control Organisation Internship 2024 - The Ministry of Health & Family Welfare Government of India",
      link: "https://theglobalscholarship.org/internships/national-aids-control-organisation-internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship Of The Inland Waterways Authority Of India 2024 - The Inland Waterways Authority Of India",
      link: "https://theglobalscholarship.org/internships/internship-of-the-inland-waterways-authority-of-india-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Internships By MTAB Technologies Pvt Ltd - MTAB Technologies Pvt Ltd.",
      link: "https://theglobalscholarship.org/internships/internships-by-mtab-technologies-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "IT Asset Management Internship By Analog Devices - Analog Devices Inc.",
      link: "https://theglobalscholarship.org/internships/it-asset-management-internship-by-analog-devices?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Internships By VANCE - VANCE",
      link: "https://theglobalscholarship.org/internships/internships-by-vance?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "CA Internship By HP - HP India",
      link: "https://theglobalscholarship.org/internships/ca-internship-by-hp?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Information Technology Internship Procter And Gamble - Procter & Gamble Careers",
      link: "https://theglobalscholarship.org/internships/information-technology-internship-procter-and-gamble?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Internships By World Health Organization - World Health Organization (WHO)",
      link: "https://theglobalscholarship.org/internships/internships-by-world-health-organization?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Sterile Injectables Design Internship By Pfizer - Pfizer",
      link: "https://theglobalscholarship.org/internships/sterile-injectables-design-internship-by-pfizer?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Software Developer Internship S And P Global - S And P Global Inc.",
      link: "https://theglobalscholarship.org/internships/software-developer-internship-s-and-p-global?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Data Operations Internship By Nova Benefits - Nova Benefits",
      link: "https://theglobalscholarship.org/internships/data-operations-internship-by-nova-benefits?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Finance Trading Internship By Tradeshala - Tradeshala",
      link: "https://theglobalscholarship.org/internships/finance-trading-internship-by-tradeshala?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Internship By KSRTC Puttur Division - The Karnataka State Road Transport Corporation (KSRTC), Puttur Division",
      link: "https://theglobalscholarship.org/internships/internship-by-ksrtc-puttur-division?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Aug",
      type: "N/A"
    },
    {
      title: "Machine Learning Internship By Tower Research Capital - Tower Research Capital",
      link: "https://theglobalscholarship.org/internships/machine-learning-internship-by-tower-research-capital?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Machine Learning Internship By Unified Mentor - Unified Mentor",
      link: "https://theglobalscholarship.org/internships/machine-learning-internship-by-unified-mentor?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Internships By GreedyGame Media Pvt Ltd - GreedyGame Media Pvt. Ltd.",
      link: "https://theglobalscholarship.org/internships/internships-by-greedygame-media-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
      type: "N/A"
    },
    {
      title: "Human Resources Internship By Fresh Prints - Fresh Prints",
      link: "https://theglobalscholarship.org/internships/human-resources-internship-by-fresh-prints?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Artificial Intelligence And Machine Learning Internship By Vastium - Vastium",
      link: "https://theglobalscholarship.org/internships/artificial-intelligence-and-machine-learning-internship-by-vastium?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Graphic Designer Internship By Ting - Ting",
      link: "https://theglobalscholarship.org/internships/graphic-designer-internship-by-ting?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Assessed Internship By Shell Careers - Shell Careers",
      link: "https://theglobalscholarship.org/internships/assessed-internship-by-shell-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "HRBP And Operation Internships By Leap Careers - Leap Careers",
      link: "https://theglobalscholarship.org/internships/hrbp-and-operation-internships-by-leap-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Security Analyst Internship By Concentrix - Concentrix",
      link: "https://theglobalscholarship.org/internships/security-analyst-internship-by-concentrix?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Sep",
      type: "N/A"
    },
    {
      title: "Software Engineer Internship By Trellix SkyHigh Security - Trellix SkyHigh Security",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-trellix-skyhigh-security?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Sep",
      type: "N/A"
    },
    {
      title: "Solutions Architect Internship Gen AI By NVIDIA - NVIDIA",
      link: "https://theglobalscholarship.org/internships/solutions-architect-internship-gen-ai-by-nvidia?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Sep",
      type: "N/A"
    },
    {
      title: "Talent Acquisition Internship By Bhanzu - Bhanzu",
      link: "https://theglobalscholarship.org/internships/talent-acquisition-internship-by-bhanzu?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Sep",
      type: "N/A"
    },
    {
      title: "LLM Internship By Share Ventures - Share Ventures",
      link: "https://theglobalscholarship.org/internships/llm-internship-by-share-ventures?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Sep",
      type: "N/A"
    },
    {
      title: "Internship By Beckman Coulter Diagnostics Danaher - Beckman Coulter Diagnostics Danaher",
      link: "https://theglobalscholarship.org/internships/internship-by-beckman-coulter-diagnostics-danaher?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Sep",
      type: "N/A"
    },
    {
      title: "Ministry Of External Affairs Internship 2024 - The Ministry Of External Affairs, India",
      link: "https://theglobalscholarship.org/internships/ministry-of-external-affairs-internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Aug",
      type: "N/A"
    },
    {
      title: "Internships By Intugine Technologies - Intugine Technologies",
      link: "https://theglobalscholarship.org/internships/internships-by-intugine-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Talent Sourcer Internship By Altair - Altair",
      link: "https://theglobalscholarship.org/internships/talent-sourcer-internship-by-altair?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "HP India Internship - HP India",
      link: "https://theglobalscholarship.org/internships/hp-india-internship?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Java Developer Internship By Deutsche Bank - Deutsche Bank",
      link: "https://theglobalscholarship.org/internships/java-developer-internship-by-deutsche-bank?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Aug",
      type: "N/A"
    },
    {
      title: "Infosys 5th Edition Of Internship 2024 - Infosys",
      link: "https://theglobalscholarship.org/internships/infosys-5th-edition-of--internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "06-Aug",
      type: "N/A"
    },
    {
      title: "Finance And Accounts Internship By Teach For India - Teach For India",
      link: "https://theglobalscholarship.org/internships/finance-and-accounts-internship-by-teach-for-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Professional courses",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Aug",
      type: "N/A"
    },
    {
      title: "Recruitment Internship By Teach For India - Teach For India",
      link: "https://theglobalscholarship.org/internships/recruitment-internship-by-teach-for-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Aug",
      type: "N/A"
    },
    {
      title: "Robotics Software Engineer Internship By HyperHorizon - HyperHorizon",
      link: "https://theglobalscholarship.org/internships/robotics-software-engineer-internship-by-hyperhorizon?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Aug",
      type: "N/A"
    },
    {
      title: "Data Science Internship By Vertoz 2024 - Vertoz",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-vertoz-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Data Mining Internship By vmedulife Software - vmedulife Software",
      link: "https://theglobalscholarship.org/internships/data-mining-internship-by-vmedulife-software?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Internships By InternEZY - InternEZY",
      link: "https://theglobalscholarship.org/internships/internships-by-internezy?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Aug",
      type: "N/A"
    },
    {
      title: "Machine Learning Internship By Feynn Labs - Feynn Labs",
      link: "https://theglobalscholarship.org/internships/machine-learning-internship-by-feynn-labs?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Aug",
      type: "N/A"
    },
    {
      title: "Internships By CoinDCX - CoinDCX",
      link: "https://theglobalscholarship.org/internships/internships-by-coindcx?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Aug",
      type: "N/A"
    },
    {
      title: "Cloud Counselage Remote Internships - Cloud Counselage Pvt. Ltd.",
      link: "https://theglobalscholarship.org/internships/cloud-counselage-remote-internships?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Product Analyst Internship By BCG - Boston Consulting Group (BCG)",
      link: "https://theglobalscholarship.org/internships/product-analyst-internship-by-bcg?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Technical Program Internship By Newton School - Newton School Bangalore",
      link: "https://theglobalscholarship.org/internships/technical-program-internship-by-newton-school?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Generative AI Internship By Wingify Software Pvt Limited - Wingify Software Pvt Limited",
      link: "https://theglobalscholarship.org/internships/generative-ai-internship-by-wingify-software-pvt-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Graphic Design Internship By Lawctopus - Lawctopus",
      link: "https://theglobalscholarship.org/internships/graphic-design-internship-by-lawctopus?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Data Science Internship By NextGen AI Solutions - NextGen AI Solutions",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-nextgen-ai-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Software Developer Internship By Bizongo - Bizongo",
      link: "https://theglobalscholarship.org/internships/software-developer-internship-by-bizongo?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Aug",
      type: "N/A"
    },
    {
      title: "Data Science Internship By Centiro - Centiro",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-centiro?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Aug",
      type: "N/A"
    },
    {
      title: "Content Marketing And QA Internship By GoComet - GoComet",
      link: "https://theglobalscholarship.org/internships/content-marketing-and-qa-internship-by-gocomet?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Aug",
      type: "N/A"
    },
    {
      title: "Office Admin Internship By Pando - Quaking Aspen Pvt Ltd (Pando)",
      link: "https://theglobalscholarship.org/internships/office-admin-internship-by-pando?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Aug",
      type: "N/A"
    },
    {
      title: "Student Internships By Apple - Apple",
      link: "https://theglobalscholarship.org/internships/student-internships-by-apple?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Sep",
      type: "N/A"
    },
    {
      title: "Internships By PUMA - PUMA",
      link: "https://theglobalscholarship.org/internships/internships-by-puma?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Relinns Technologies - Relinns Technologies",
      link: "https://theglobalscholarship.org/internships/internships-by-relinns-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Internship By LERNX 2024 - LERNX",
      link: "https://theglobalscholarship.org/internships/internship-by-lernx-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, Others",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Aug",
      type: "N/A"
    },
    {
      title: "Financial Market Internship By Futures First - Futures First",
      link: "https://theglobalscholarship.org/internships/financial-market-internship-by-futures-first?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Business Analyst Internship By McKinsey And Company - McKinsey & Company",
      link: "https://theglobalscholarship.org/internships/business-analyst-internship-by-mckinsey-and-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Sep",
      type: "N/A"
    },
    {
      title: "Internships By Techolution - Techolution",
      link: "https://theglobalscholarship.org/internships/internships-by-techolution?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "ICPC Internship By Policy Politics And Governance Foundation - Policy Politics And Governance Foundation",
      link: "https://theglobalscholarship.org/internships/icpc-internship-by-policy-politics-and-governance-foundation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Aug",
      type: "N/A"
    },
    {
      title: "Technical Internship By Siemens Healthineers - Siemens Healthcare Private Limited",
      link: "https://theglobalscholarship.org/internships/technical-internship-by-siemens-healthineers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Aug",
      type: "N/A"
    },
    {
      title: "Software Engineer Internship By Kreativstorm - Kreativstorm",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-kreativstorm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Aug",
      type: "N/A"
    },
    {
      title: "Android App Developer Internship By OpeninApp - OpeninApp",
      link: "https://theglobalscholarship.org/internships/android-app-developer-internship-by-openinapp?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Aug",
      type: "N/A"
    },
    {
      title: "Data Science And Analyst Internship By Bright Money - Bright Money",
      link: "https://theglobalscholarship.org/internships/data-science-and-analyst-internship-by-bright-money?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Aug",
      type: "N/A"
    },
    {
      title: "Apprentice By S And P Global - S And P Global",
      link: "https://theglobalscholarship.org/internships/apprentice-by-s-and-p-global?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Campus Internship By IQVIA - IQVIA",
      link: "https://theglobalscholarship.org/internships/campus-internship-by-iqvia?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Aug",
      type: "N/A"
    },
    {
      title: "Aadhar UIDAI Internship By Government Of India - The Unique Identification Authority Of India (UIDAI)",
      link: "https://theglobalscholarship.org/internships/aadhar-uidai-internship-by-government-of-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Data Science Internship By EarnIn - EarnIn",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-earnin?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Aug",
      type: "N/A"
    },
    {
      title: "Python Internship By Harman Samsung Company - Harman Samsung Company",
      link: "https://theglobalscholarship.org/internships/python-internship-by-harman-samsung-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Aug",
      type: "N/A"
    },
    {
      title: "Technology Apprentice By Target - Target",
      link: "https://theglobalscholarship.org/internships/technology-apprentice-by-target?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "16-Aug",
      type: "N/A"
    },
    {
      title: "Business Support Internship By MAERSK - Maersk Training Services India Private Limited",
      link: "https://theglobalscholarship.org/internships/business-support-internship-by-maersk?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Aug",
      type: "N/A"
    },
    {
      title: "Junior Engineer Internship Cornerstone - Cornerstone",
      link: "https://theglobalscholarship.org/internships/junior-engineer-internship-cornerstone?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "18-Jul",
      type: "N/A"
    },
    {
      title: "Analytics CDS PG Internship By Bloom Energy - Bloom Energy",
      link: "https://theglobalscholarship.org/internships/analytics-cds-pg-internship-by-bloom-energy?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Aug",
      type: "N/A"
    },
    {
      title: "DevOps Internship By Syfe - Syfe",
      link: "https://theglobalscholarship.org/internships/devops-internship-by-syfe?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Aug",
      type: "N/A"
    },
    {
      title: "Machine Learning Internship By Spikewell - Spikewell",
      link: "https://theglobalscholarship.org/internships/machine-learning-internship-by-spikewell?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Aug",
      type: "N/A"
    },
    {
      title: "Technical Internship By BCG - Boston Consulting Group (BCG)",
      link: "https://theglobalscholarship.org/internships/technical-internship-by-bcg?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "29-Jul",
      type: "N/A"
    },
    {
      title: "Business Intelligence Internship By Aspire - Aspire App",
      link: "https://theglobalscholarship.org/internships/business-intelligence-internship-by-aspire?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Aug",
      type: "N/A"
    },
    {
      title: "Software Engineer Internship By Kognitos - Kognitos",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-kognitos?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Aug",
      type: "N/A"
    },
    {
      title: "Data Science Internship By Ericsson - Ericsson",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-ericsson?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jul",
      type: "N/A"
    },
    {
      title: "Internship By Marpu Foundation - Marpu Foundation",
      link: "https://theglobalscholarship.org/internships/internship-by-marpu-foundation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Aug",
      type: "N/A"
    },
    {
      title: "Internship By Suvidha Foundation - Suvidha Foundation",
      link: "https://theglobalscholarship.org/internships/internship-by-suvidha-foundation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Stipend To Law Graduates SC ST 2024 - Social Welfare Department Of Karnataka",
      link: "https://theglobalscholarship.org/internships/stipend-to-law-graduates-sc-st-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Strategy Risk Transaction And Regulatory FFC Internship By Deloitte - Deloitte",
      link: "https://theglobalscholarship.org/internships/strategy-risk-transaction-and-regulatory-ffc-internship-by-deloitte?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Aug",
      type: "N/A"
    },
    {
      title: "Internships By Deloitte - Deloitte",
      link: "https://theglobalscholarship.org/internships/internships-by-deloitte?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Application Support And Services Internship By IQVIA - IQVIA",
      link: "https://theglobalscholarship.org/internships/application-support-and-services-internship-by-iqvia?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "18-Jul",
      type: "N/A"
    },
    {
      title: "Cyber Security Internship By AIRBUS - Airbus India Private Limited",
      link: "https://theglobalscholarship.org/internships/cyber-security-internship-by-airbus?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Digital Marketing Internship By TECHASOFT - TECHASOFT",
      link: "https://theglobalscholarship.org/internships/digital-marketing-internship-by-techasoft?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Aug",
      type: "N/A"
    },
    {
      title: "Quality Analyst Internship By Engati - Engati",
      link: "https://theglobalscholarship.org/internships/quality-analyst-internship-by-engati?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Aug",
      type: "N/A"
    },
    {
      title: "Service Technician Internship By John Deere - John Deere",
      link: "https://theglobalscholarship.org/internships/service-technician-internship-by-john-deere?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Customer Experience Internship By Tesla - Tesla",
      link: "https://theglobalscholarship.org/internships/customer-experience-internship-by-tesla?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Internships By Apple 2024 - Apple",
      link: "https://theglobalscholarship.org/internships/internships-by-apple-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Information Technology Internship By P And G - P And G",
      link: "https://theglobalscholarship.org/internships/information-technology-internship-by-p-and-g?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Internships By Razorpay 2024 - Razorpay",
      link: "https://theglobalscholarship.org/internships/internships-by-razorpay-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Aug",
      type: "N/A"
    },
    {
      title: "Product Supply Internship By Procter And Gamble - Procter And Gamble",
      link: "https://theglobalscholarship.org/internships/product-supply-internship-by-procter-and-gamble?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Aug",
      type: "N/A"
    },
    {
      title: "Internships By Nudge Foundation - Nudge Foundation",
      link: "https://theglobalscholarship.org/internships/internships-by-nudge-foundation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Summer Internship By WESCO - WESCO International",
      link: "https://theglobalscholarship.org/internships/summer-internship-by-wesco?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jun",
      type: "N/A"
    },
    {
      title: "Embedded Internship By Techolution - Techolution",
      link: "https://theglobalscholarship.org/internships/embedded-internship-by-techolution?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Campus Software Engineer Internship By JumpTrading - Jump Trading",
      link: "https://theglobalscholarship.org/internships/campus-software-engineer-internship-by-jumptrading?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Software Internship By SEMTECH - SEMTECH",
      link: "https://theglobalscholarship.org/internships/software-internship-by-semtech?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Communications Internship By Teach For India - Teach For India",
      link: "https://theglobalscholarship.org/internships/communications-internship-by-teach-for-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Design And Communications Internship By Teach For India - Teach For India",
      link: "https://theglobalscholarship.org/internships/design-and-communications-internship-by-teach-for-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Key Accounts Manager Internship By Decathlon - Decathlon",
      link: "https://theglobalscholarship.org/internships/key-accounts-manager-internship-by-decathlon?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Apprenticeships By Morgan Stanley - Morgan Stanley",
      link: "https://theglobalscholarship.org/internships/apprenticeships-by-morgan-stanley?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Internships By IIDE - IIDE",
      link: "https://theglobalscholarship.org/internships/internships-by-iide?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Internship By IIM Jammu - IIM Jammu",
      link: "https://theglobalscholarship.org/internships/internship-by-iim-jammu?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, Post Doctoral",
      stipend: "Click on \"View Details\"",
      lastDate: "N/A",
      type: "N/A"
    },
    {
      title: "Python Internship By Primenumber Technologies - Primenumber Technologies",
      link: "https://theglobalscholarship.org/internships/python-internship-by-primenumber-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Jul",
      type: "N/A"
    },
    {
      title: "Data Science Internship By Vertoz - Vertoz",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-vertoz?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Jul",
      type: "N/A"
    },
    {
      title: "Hardware Engineer Internship By IBM 2024 - IBM India Private Limited",
      link: "https://theglobalscholarship.org/internships/hardware-engineer-internship-by-ibm-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "03-Jul",
      type: "N/A"
    },
    {
      title: "Internships By Global Foundries - Global Foundries",
      link: "https://theglobalscholarship.org/internships/internships-by-global-foundries?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Sep",
      type: "N/A"
    },
    {
      title: "TE Internship By TE Connectivity - TE Connectivity Pvt Ltd.",
      link: "https://theglobalscholarship.org/internships/te-internship-by-te-connectivity?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Content Internship By Groww Company - Groww Company",
      link: "https://theglobalscholarship.org/internships/content-internship-by-groww-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Seagate Research Group Internship By Seagate Technology - Seagate Technology",
      link: "https://theglobalscholarship.org/internships/seagate-research-group-internship-by-seagate-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "SDE Internship By INDmoney - INDmoney",
      link: "https://theglobalscholarship.org/internships/sde-internship-by-indmoney?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Full Stack SDE Internship By Cybermind Works Technology - Cybermind Works Technology",
      link: "https://theglobalscholarship.org/internships/full-stack-sde-internship-by-cybermind-works-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Data Scraping Engineer Internship By Stylumia - Stylumia",
      link: "https://theglobalscholarship.org/internships/data-scraping-engineer-internship-by-stylumia?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Research Internship By CRISIL - CRISIL",
      link: "https://theglobalscholarship.org/internships/research-internship-by-crisil?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Data Science Internship By United Airlines - United Airlines",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-united-airlines?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Engineering Internship By Calix - Calix",
      link: "https://theglobalscholarship.org/internships/engineering-internship-by-calix?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Data science Internship By Bizongo - Bizongo",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-bizongo?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Web Development Internship By Cloudseed Technologies - Cloudseed Technologies",
      link: "https://theglobalscholarship.org/internships/web-development-internship-by-cloudseed-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jul",
      type: "N/A"
    },
    {
      title: "Project 39A Internship By NLU Delhi - National Law University Delhi",
      link: "https://theglobalscholarship.org/internships/project-39a-internship-by-nlu-delhi?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jun",
      type: "N/A"
    },
    {
      title: "Data Analytics Internship By Tata CLiQ 2024 - TATA CLiQ",
      link: "https://theglobalscholarship.org/internships/data-analytics-internship-by-tata-cliq-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "19-Jun",
      type: "N/A"
    },
    {
      title: "Internship By FSSAI 2024 - Food Safety & Standards Authority Of India",
      link: "https://theglobalscholarship.org/internships/internship-by-fssai-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "17-Jun",
      type: "N/A"
    },
    {
      title: "Digital Forensic And Incident Response Internship By DFIR - DFIR",
      link: "https://theglobalscholarship.org/internships/digital-forensic-and-incident-response-internship-by-dfir?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "14-Jun",
      type: "N/A"
    },
    {
      title: "Content Manager Internship By NoticeBard - NoticeBard",
      link: "https://theglobalscholarship.org/internships/content-manager-internship-by-noticebard?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Cadence - Cadence",
      link: "https://theglobalscholarship.org/internships/internships-by-cadence?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "22-Jul",
      type: "N/A"
    },
    {
      title: "Internship By Nursery Teacher Training - Nursery Teacher Training Bangalore",
      link: "https://theglobalscholarship.org/internships/internship-by-nursery-teacher-training?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Class 12, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jun",
      type: "N/A"
    },
    {
      title: "Trainee Internship By Harman Samsung Company - Harman Samsung Company",
      link: "https://theglobalscholarship.org/internships/trainee-internship-by-harman-samsung-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "17-Jun",
      type: "N/A"
    },
    {
      title: "Internship By World Wide Technology - World Wide Technology",
      link: "https://theglobalscholarship.org/internships/internship-by-world-wide-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "18-Jun",
      type: "N/A"
    },
    {
      title: "Operational Research Internship By Airbus - Airbus",
      link: "https://theglobalscholarship.org/internships/operational-research-internship-by-airbus?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "18-Jun",
      type: "N/A"
    },
    {
      title: "Software Cloud Trainee Internship By Motorola Solutions - Motorola Solutions",
      link: "https://theglobalscholarship.org/internships/software-cloud-trainee-internship-by-motorola-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Aug",
      type: "N/A"
    },
    {
      title: "AEM Consultant SheSparks Internship By Adobe - Adobe Technology",
      link: "https://theglobalscholarship.org/internships/aem-consultant-shesparks-internship-by-adobe?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "16-Sep",
      type: "N/A"
    },
    {
      title: "Internship By Department Of Justice 2024 - Department of Legal Affairs Ministry of Law & Justice India",
      link: "https://theglobalscholarship.org/internships/internship-by-department-of-justice-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "16-Jun",
      type: "N/A"
    },
    {
      title: "Internship By Spaarks 2024 - Spaarks, OSOS Private Limited",
      link: "https://theglobalscholarship.org/internships/internship-by-spaarks-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "07-Sep",
      type: "N/A"
    },
    {
      title: "Graduate Rotational Internship By The Sparks Foundation - The Sparks Foundation",
      link: "https://theglobalscholarship.org/internships/graduate-rotational-internship-by-the-sparks-foundation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "24-Jun",
      type: "N/A"
    },
    {
      title: "Internships By Mercedes Benz 2024 - Mercedes Benz",
      link: "https://theglobalscholarship.org/internships/internships-by-mercedes-benz-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Internships By Soulpage IT Solutions - Soulpage IT Solutions",
      link: "https://theglobalscholarship.org/internships/internships-by-soulpage-it-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Internships By BCG - Boston Consulting Group (BCG)",
      link: "https://theglobalscholarship.org/internships/internships-by-bcg?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Jul",
      type: "N/A"
    },
    {
      title: "CPG Internship By Milliman - Milliman",
      link: "https://theglobalscholarship.org/internships/cpg-internship-by-milliman?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Oct",
      type: "N/A"
    },
    {
      title: "Web Development Internship By Amiskilled Pvt Ltd - Amiskilled Pvt Ltd",
      link: "https://theglobalscholarship.org/internships/web-development-internship-by-amiskilled-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship By CCI 2024 - Competition Commission Of India",
      link: "https://theglobalscholarship.org/internships/internship-by-cci-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Nov",
      type: "N/A"
    },
    {
      title: "Internship By National Human Rights Commission - National Human Rights Commission Of India",
      link: "https://theglobalscholarship.org/internships/internship-by-national-human-rights-commission?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "26-May",
      type: "N/A"
    },
    {
      title: "Legal Internship By NCT Delhi - Department of Law, Justice & LA, Govt. of NCT of Delhi",
      link: "https://theglobalscholarship.org/internships/legal-internship-by-nct-delhi?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Jun",
      type: "N/A"
    },
    {
      title: "Campus Leaders Program Internship By Lawctopus - Lawctopus",
      link: "https://theglobalscholarship.org/internships/campus-leaders-program-internship-by-lawctopus?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-May",
      type: "N/A"
    },
    {
      title: "Internship By Strategy India - Strategy India",
      link: "https://theglobalscholarship.org/internships/internship-by-strategy-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-May",
      type: "N/A"
    },
    {
      title: "Internships By Exotel - Exotel",
      link: "https://theglobalscholarship.org/internships/internships-by-exotel?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Communications Graduate Internship By CIPC - CIPC",
      link: "https://theglobalscholarship.org/internships/communications-graduate-internship-by-cipc?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-May",
      type: "N/A"
    },
    {
      title: "LP Internship By Olaniwun Ajayi - Olaniwun Ajayi",
      link: "https://theglobalscholarship.org/internships/lp-internship-by-olaniwun-ajayi?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-May",
      type: "N/A"
    },
    {
      title: "Internship By NIT Delhi - National Institute Of Technology Delhi (NIT)",
      link: "https://theglobalscholarship.org/internships/internship-by-nit-delhi?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "28-May",
      type: "N/A"
    },
    {
      title: "Summer Legal Internship By FWS - Frontiers Welfare Society (FWS)",
      link: "https://theglobalscholarship.org/internships/summer-legal-internship-by-fws?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-May",
      type: "N/A"
    },
    {
      title: "Internships By Salesforce - Salesforce Careers",
      link: "https://theglobalscholarship.org/internships/internships-by-salesforce?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Applications Engineering Internships By SYNOPSYS - SYNOPSYS",
      link: "https://theglobalscholarship.org/internships/applications-engineering-internships-by-synopsys?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Internship By Supreme Court Of India - Office of Hon'ble Mr. Justice Vikram Nath | Supreme Court of India",
      link: "https://theglobalscholarship.org/internships/internship-by-supreme-court-of--india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Student Internship By Intel Hyderabad - Intel",
      link: "https://theglobalscholarship.org/internships/student-internship-by-intel-hyderabad?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "19-Jun",
      type: "N/A"
    },
    {
      title: "Nyasarthak Internship By Supreme Court Of India - Supreme Court Of India",
      link: "https://theglobalscholarship.org/internships/nyasarthak-internship-by-supreme-court-of-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Internship By Juris Corp - Juris Corp",
      link: "https://theglobalscholarship.org/internships/internship-by-juris-corp?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jun",
      type: "N/A"
    },
    {
      title: "Social Media Internship By Adhyayan Foundation - Adhyayan Foundation",
      link: "https://theglobalscholarship.org/internships/social-media-internship-by-adhyayan-foundation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Technology Internship By SELCO Foundation - SELCO Foundation",
      link: "https://theglobalscholarship.org/internships/technology-internship-by-selco-foundation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jun",
      type: "N/A"
    },
    {
      title: "Internship By Bihar State Legal Services Authority - Bihar State Legal Services Authority",
      link: "https://theglobalscholarship.org/internships/internship-by-bihar-state-legal-services-authority?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-May",
      type: "N/A"
    },
    {
      title: "MEITY Internship By Digital India - Government Of India",
      link: "https://theglobalscholarship.org/internships/meity-internship-by-digital-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "21-May",
      type: "N/A"
    },
    {
      title: "Next Generation Internship By WACSI - The West Africa Civil Society Institute (WACSI)",
      link: "https://theglobalscholarship.org/internships/next-generation-internship-by-wacsi?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, Professional courses",
      stipend: "Click on \"View Details\"",
      lastDate: "26-May",
      type: "N/A"
    },
    {
      title: "Internship By Bharat Navodaya Abhiyan - Bharat Navodaya Abhiyan (BNA)",
      link: "https://theglobalscholarship.org/internships/internship-by-bharat-navodaya-abhiyan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-May",
      type: "N/A"
    },
    {
      title: "Assessment Internship By Bharat And Associates - Bharat & Associates",
      link: "https://theglobalscholarship.org/internships/assessment-internship-by-bharat-and-associates?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-May",
      type: "N/A"
    },
    {
      title: "Social Entrepreneurship Volunteering Internship By Hamari Pahchan NGO - Hamari Pahchan NGO",
      link: "https://theglobalscholarship.org/internships/social-entrepreneurship-volunteering-internship-by-hamari-pahchan-ngo?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Internship By Shuruwat Foundation - Shuruwat Foundation",
      link: "https://theglobalscholarship.org/internships/internship-by-shuruwat-foundation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "30-May",
      type: "N/A"
    },
    {
      title: "Paid Legal Internship By Propelled - Propelled",
      link: "https://theglobalscholarship.org/internships/paid-legal-internship-by-propelled?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-May",
      type: "N/A"
    },
    {
      title: "Internship By Bhoomika Vihar - Bhoomika Vihar Trust",
      link: "https://theglobalscholarship.org/internships/internship-by-bhoomika-vihar?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Reserve Bank of India Internship - Reserve Bank of India- RBI",
      link: "https://theglobalscholarship.org/internships/-reserve-bank-of-india-internship?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Jun",
      type: "N/A"
    },
    {
      title: "Internship By Jus Corpus Law Journal - Jus Corpus Law Journal",
      link: "https://theglobalscholarship.org/internships/internship-by-jus-corpus-law-journal?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "10-May",
      type: "N/A"
    },
    {
      title: "Internship By WIPO - World Intellectual Property Organization",
      link: "https://theglobalscholarship.org/internships/internship-by-wipo?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "02-Jul",
      type: "N/A"
    },
    {
      title: "Internship By MoEF And CC - Ministry of Environment, Govt. Of India",
      link: "https://theglobalscholarship.org/internships/internship-by-moef-and-cc?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "13-May",
      type: "N/A"
    },
    {
      title: "Internship By Surana And Surana - Surana & Surana",
      link: "https://theglobalscholarship.org/internships/internship-by-surana-and-surana?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Volunteering Internship By Hamari Pahchan - Hamari Pahchan NGO",
      link: "https://theglobalscholarship.org/internships/volunteering-internship-by-hamari-pahchan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Summer Internship By DSLSA - Delhi State Legal Services Authority (DSLSA)",
      link: "https://theglobalscholarship.org/internships/summer-internship-by-dslsa?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-May",
      type: "N/A"
    },
    {
      title: "Internship By Dharmashastra National Law University - Dharmashastra National Law University Jabalapur",
      link: "https://theglobalscholarship.org/internships/internship-by-dharmashastra-national-law-university?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-May",
      type: "N/A"
    },
    {
      title: "Internship By ICMR NIIRNCD - ICMR-NIIRNCD, Jodhpur.",
      link: "https://theglobalscholarship.org/internships/internship-by-icmr-niirncd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship By Supreme Court Of India - Supreme Court Of India(With The Chambers of Justice A. S. Oka)",
      link: "https://theglobalscholarship.org/internships/internship-by-supreme-court-of-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jun",
      type: "N/A"
    },
    {
      title: "Internship By Maheshwari And Companies - Maheshwari & Co. Advocates & Legal Consultants",
      link: "https://theglobalscholarship.org/internships/internship-by-maheshwari-and-companies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship By Corp Legex - Corp Legex",
      link: "https://theglobalscholarship.org/internships/internship-by-corp-legex?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "06-May",
      type: "N/A"
    },
    {
      title: "Cisco Virtual Internships Program 2024 - CISCO & AICTE",
      link: "https://theglobalscholarship.org/internships/cisco-virtual-internships-program-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-May",
      type: "N/A"
    },
    {
      title: "Community Service And Education Internship By TNF - Tamil Nadu Foundation",
      link: "https://theglobalscholarship.org/internships/community-service-and-education-internship-by-tnf?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Jun",
      type: "N/A"
    },
    {
      title: "Internship With Adv Pankaj Rishi Krishnan Singh - Adv Pankaj Rishi Krishnan Singh",
      link: "https://theglobalscholarship.org/internships/internship-with-adv-pankaj-rishi-krishnan-singh?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "Anubhooti Internship By Think India - Think India",
      link: "https://theglobalscholarship.org/internships/anubhooti-internship-by-think-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "14-May",
      type: "N/A"
    },
    {
      title: "Internship By Collin Aerospace RTX - Collin Aerospace RTX",
      link: "https://theglobalscholarship.org/internships/internship-by-collin-aerospace-rtx?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Medical, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jul",
      type: "N/A"
    },
    {
      title: "Internship By AE Corp Judice - AE Corp Judice, Chandigarh",
      link: "https://theglobalscholarship.org/internships/internship-by-ae-corp-judice?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-May",
      type: "N/A"
    },
    {
      title: "Internship With Adv Sumit Goswami - Adv Sumit Goswami",
      link: "https://theglobalscholarship.org/internships/internship-with-adv-sumit-goswami?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-May",
      type: "N/A"
    },
    {
      title: "Virtual Internship By ASBO Legal - ASBO Legal",
      link: "https://theglobalscholarship.org/internships/virtual-internship-by-asbo-legal?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "Internship By Arcum Global - Arcum Global",
      link: "https://theglobalscholarship.org/internships/internship-by-arcum-global?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jun",
      type: "N/A"
    },
    {
      title: "Project Rojgar Sathi Volunteer Internship By ICCHR - Indian Centre for Child and Human Rights (ICCHR)",
      link: "https://theglobalscholarship.org/internships/project-rojgar-sathi-volunteer-internship-by-icchr?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-May",
      type: "N/A"
    },
    {
      title: "Internship By Ramesh Tripathi - Ramesh Tripathi & Associates",
      link: "https://theglobalscholarship.org/internships/internship-by-ramesh-tripathi?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-May",
      type: "N/A"
    },
    {
      title: "Internship By NATO - North Atlantic Treaty Organisation",
      link: "https://theglobalscholarship.org/internships/internship-by-nato?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "29-May",
      type: "N/A"
    },
    {
      title: "Internship By National Law University Delhi - National Law University Delhi",
      link: "https://theglobalscholarship.org/internships/internship-by-national-law-university-delhi?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "Lawbhoomi Internship By Hamari Pahchan NGO - Hamari Pahchan NGO",
      link: "https://theglobalscholarship.org/internships/lawbhoomi-internship-by-hamari-pahchan-ngo?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jun",
      type: "N/A"
    },
    {
      title: "Internship By NBA Legal - NBA Legal",
      link: "https://theglobalscholarship.org/internships/internship-by-nba-legal?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-May",
      type: "N/A"
    },
    {
      title: "Internship By NBA Legal - NBA Legal",
      link: "https://theglobalscholarship.org/internships/internship-by-nba-legal?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Apr",
      type: "N/A"
    },
    {
      title: "Internship By High Court Of Delhi - HMJ Neena Bansal Krishna, High Court of Delhi",
      link: "https://theglobalscholarship.org/internships/internship-by-high-court-of-delhi?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jun",
      type: "N/A"
    },
    {
      title: "Research Assistant Internship With Adv Tariq Khan - Advocate Mr. Tariq Khan",
      link: "https://theglobalscholarship.org/internships/research-assistant-internship-with-adv-tariq-khan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-May",
      type: "N/A"
    },
    {
      title: "Litigation Internship By Internet Freedom Foundation - Internet Freedom Foundation",
      link: "https://theglobalscholarship.org/internships/litigation-internship-by-internet-freedom-foundation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "13-Aug",
      type: "N/A"
    },
    {
      title: "Trade And Investment Law Internship By Govt. Of India - The Ministry of Commerce and Industry(Govt.)",
      link: "https://theglobalscholarship.org/internships/trade-and-investment-law-internship-by-govt.-of-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship By Samyag Legal - Samyag Legal",
      link: "https://theglobalscholarship.org/internships/internship-by-samyag-legal?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Vice Chancellor Internship By University Of Delhi - University Of Delhi",
      link: "https://theglobalscholarship.org/internships/vice-chancellor-internship-by-university-of-delhi?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-May",
      type: "N/A"
    },
    {
      title: "Internship By Ethos Legal Alliance - Ethos Legal Alliance",
      link: "https://theglobalscholarship.org/internships/internship-by-ethos-legal-alliance?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "N/A",
      type: "N/A"
    },
    {
      title: "Virtual Social Internship By Muskurahat Foundation - Muskurahat Foundation",
      link: "https://theglobalscholarship.org/internships/virtual-social-internship-by-muskurahat-foundation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "08-May",
      type: "N/A"
    },
    {
      title: "Internship By Smile Foundation - Smile Foundation",
      link: "https://theglobalscholarship.org/internships/internship-by-smile-foundation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship By GlobalHunt Foundation - GlobalHunt Foundation",
      link: "https://theglobalscholarship.org/internships/internship-by-globalhunt-foundation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship By Oracle - Oracle",
      link: "https://theglobalscholarship.org/internships/internship-by-oracle?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "19-Jun",
      type: "N/A"
    },
    {
      title: "Internship By Permanent Mission Of India - Permanent Mission Of India With UN",
      link: "https://theglobalscholarship.org/internships/internship-by-permanent-mission-of-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By HSBC - HSBC Group",
      link: "https://theglobalscholarship.org/internships/internships-by-hsbc?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-May",
      type: "N/A"
    },
    {
      title: "Fan in Chief RCB - Royal Challengers Bengaluru",
      link: "https://theglobalscholarship.org/internships/fan-in-chief-rcb?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "10-May",
      type: "N/A"
    },
    {
      title: "Internship By Unnathi - Unnathi NGO",
      link: "https://theglobalscholarship.org/internships/-internship-by-unnathi?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Humana - Humana",
      link: "https://theglobalscholarship.org/internships/internships-by-humana?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Medical, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Internships By FedEx - FedEx.",
      link: "https://theglobalscholarship.org/internships/internships-by-fedex?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Internships By JohnSon And JohnSon - JohnSon & JohnSon",
      link: "https://theglobalscholarship.org/internships/internships-by-johnson-and-johnson?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "ISRO Internship - Indian Space Research Organization(ISRO)",
      link: "https://theglobalscholarship.org/internships/isro-internship?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "N/A",
      type: "N/A"
    },
    {
      title: "Internships By United Parcel Service - United Parcel Service",
      link: "https://theglobalscholarship.org/internships/internships-by-united-parcel-service?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "Internships By Citigroup - Citigroup",
      link: "https://theglobalscholarship.org/internships/internships-by-citigroup?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Internships By COMCAST - COMCAST",
      link: "https://theglobalscholarship.org/internships/internships-by-comcast?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Internships By Elevance Health - Elevance Health Group",
      link: "https://theglobalscholarship.org/internships/internships-by-elevance-health?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Social Influencer Internship By Paytm - Paytm",
      link: "https://theglobalscholarship.org/internships/social-influencer-internship-by-paytm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Internship By Karuna Trust - Karuna Trust",
      link: "https://theglobalscholarship.org/internships/internship-by-karuna-trust?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Internship By Intel - Intel",
      link: "https://theglobalscholarship.org/internships/internship-by-intel?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "06-Aug",
      type: "N/A"
    },
    {
      title: "Corporate HR Internship By Travclan - Travclan Company",
      link: "https://theglobalscholarship.org/internships/corporate-hr-internship-by-travclan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "Corporate Finance Internship By Travclan - Travclan Company",
      link: "https://theglobalscholarship.org/internships/corporate-finance-internship-by-travclan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "J P Morgan Internships India - J. P. Morgan",
      link: "https://theglobalscholarship.org/internships/j-p-morgan-internships-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Hospitality Internship By BSB International Pvt Ltd - BSB International PVT LTD",
      link: "https://theglobalscholarship.org/internships/hospitality-internship-by-bsb-international-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Internships By Energeia - Energeia",
      link: "https://theglobalscholarship.org/internships/internships-by-energeia?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Aug",
      type: "N/A"
    },
    {
      title: "Marketing Internship By BSB International Pvt Ltd - BSB International PVT LTD",
      link: "https://theglobalscholarship.org/internships/marketing-internship-by-bsb-international-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Internship By Fundoo Labs - Fundoo Labs",
      link: "https://theglobalscholarship.org/internships/internship-by-fundoo-labs?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Medical, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jun",
      type: "N/A"
    },
    {
      title: "Digital Marketing Internship By EnactOn Technologies - EnactOn Technologies",
      link: "https://theglobalscholarship.org/internships/digital-marketing-internship-by-enacton-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Jun",
      type: "N/A"
    },
    {
      title: "Digital Marketing Internship By SJ Innovation - SJ Innovation AI first Solutions",
      link: "https://theglobalscholarship.org/internships/digital-marketing-internship-by-sj-innovation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Digital Marketing Internship By TYA Business Solutions - TYA Business Solutions",
      link: "https://theglobalscholarship.org/internships/digital-marketing-internship-by-tya-business-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "System Admin Internship By Carifer Technologies - Carifer Technologies",
      link: "https://theglobalscholarship.org/internships/system-admin-internship-by-carifer-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Project Management Internship By Carifer Technologies - Carifer Technologies",
      link: "https://theglobalscholarship.org/internships/project-management-internship-by-carifer-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "PHP Developer Internship By Carifer Technologies - Carifer Technologies",
      link: "https://theglobalscholarship.org/internships/php-developer-internship-by-carifer-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "GIS Analyst Internship By Carifer Technologies - Carifer Technologies",
      link: "https://theglobalscholarship.org/internships/gis-analyst-internship-by-carifer-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Full Stack Developer Internship By Carifer Technologies - Carifer Technologies",
      link: "https://theglobalscholarship.org/internships/full-stack-developer-internship-by-carifer-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Business Analyst Internship By Carifer Technologies - Carifer Technologies",
      link: "https://theglobalscholarship.org/internships/business-analyst-internship-by-carifer-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Digital Marketing Internship By Aabasoft - Aabasoft - 3.2",
      link: "https://theglobalscholarship.org/internships/digital-marketing-internship-by-aabasoft?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Front Developer Internship By Carifer Technologies - Carifer Technologies",
      link: "https://theglobalscholarship.org/internships/front-developer-internship-by-carifer-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Graphic Design Internship By PUMA - PUMA",
      link: "https://theglobalscholarship.org/internships/graphic-design-internship-by-puma?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jun",
      type: "N/A"
    },
    {
      title: "Internships By F5 Technology Company - F5 Technology Company",
      link: "https://theglobalscholarship.org/internships/internships-by-f5-technology-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jun",
      type: "N/A"
    },
    {
      title: "Internship By Quess Winning Together - Quess Winning Together",
      link: "https://theglobalscholarship.org/internships/internship-by-quess-winning-together?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jun",
      type: "N/A"
    },
    {
      title: "Risk Management And Compliance Internship By JPMorgan - JPMorgan Chase & Co.",
      link: "https://theglobalscholarship.org/internships/risk-management-and-compliance-internship-by-jpmorgan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Jul",
      type: "N/A"
    },
    {
      title: "Payments Internship By JPMorgan - JPMorgan Chase & Co.",
      link: "https://theglobalscholarship.org/internships/payments-internship-by-jpmorgan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Jul",
      type: "N/A"
    },
    {
      title: "Markets Internship By JPMorgan - JPMorgan Chase & Co.",
      link: "https://theglobalscholarship.org/internships/markets-internship-by-jpmorgan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Jul",
      type: "N/A"
    },
    {
      title: "Marketing Internship By Tata Group - Tata Group",
      link: "https://theglobalscholarship.org/internships/marketing-internship-by-tata-group?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "Lifestyle Internship By Tata Group - Tata Group",
      link: "https://theglobalscholarship.org/internships/lifestyle-internship-by-tata-group?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "Internships By Red Hat Research - Red Hat Research",
      link: "https://theglobalscholarship.org/internships/internships-by-red-hat-research?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Jun",
      type: "N/A"
    },
    {
      title: "Internships By Applied Materials - Applied Materials Company",
      link: "https://theglobalscholarship.org/internships/internships-by-applied-materials?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Jun",
      type: "N/A"
    },
    {
      title: "Internships By ASM Technologies - ASM Technologies",
      link: "https://theglobalscholarship.org/internships/internships-by-asm-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Swift - Swift",
      link: "https://theglobalscholarship.org/internships/internships-by-swift?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Internships By Hindustan Unilever - Hindustan Unilever",
      link: "https://theglobalscholarship.org/internships/internships-by-hindustan-unilever?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "HR Operations Internship By Swift - Swift",
      link: "https://theglobalscholarship.org/internships/hr-operations-internship-by-swift?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Internship By SBI Life - SBI Life Insurance",
      link: "https://theglobalscholarship.org/internships/internship-by-sbi-life?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship By Nestle - Nestle India",
      link: "https://theglobalscholarship.org/internships/internship-by-nestle?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "R And D Internship By Hindustan Unilever - Hindustan Unilever",
      link: "https://theglobalscholarship.org/internships/r-and-d-internship-by-hindustan-unilever?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Finance Department Internship By Hindustan Unilever - Hindustan Unilever",
      link: "https://theglobalscholarship.org/internships/finance-department-internship-by-hindustan-unilever?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Procurement Logistic Internship By Hindustan Unilever - Hindustan Unilever",
      link: "https://theglobalscholarship.org/internships/procurement-logistic-internship-by-hindustan-unilever?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Homecare Planning Internship By Hindustan Unilever - Hindustan Unilever",
      link: "https://theglobalscholarship.org/internships/homecare-planning-internship-by-hindustan-unilever?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Finance Internship By Hindustan Unilever - Hindustan Unilever",
      link: "https://theglobalscholarship.org/internships/finance-internship-by-hindustan-unilever?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Business Marketing Internship By Hindustan Unilever - Hindustan Unilever",
      link: "https://theglobalscholarship.org/internships/business-marketing-internship-by-hindustan-unilever?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Skin Cleansing Marketing Internship By Hindustan Unilever - Hindustan Unilever",
      link: "https://theglobalscholarship.org/internships/skin-cleansing-marketing-internship-by-hindustan-unilever?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "dCommerce Internship By Hindustan Unilever - Hindustan Unilever",
      link: "https://theglobalscholarship.org/internships/dcommerce-internship-by-hindustan-unilever?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Quality Internship By Hindustan Unilever - Hindustan Unilever",
      link: "https://theglobalscholarship.org/internships/quality-internship-by-hindustan-unilever?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Process Excellent Internship By Hindustan Unilever - Hindustan Unilever",
      link: "https://theglobalscholarship.org/internships/process-excellent-internship-by-hindustan-unilever?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Jun",
      type: "N/A"
    },
    {
      title: "Congresswoman Internship By Alexandria Ocasio Cortez - Alexandria Ocasio-Cortez",
      link: "https://theglobalscholarship.org/internships/congresswoman-internship-by-alexandria-ocasio-cortez?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Summer Internship By International Development Group - International Development Group",
      link: "https://theglobalscholarship.org/internships/summer-internship-by-international-development-group?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Jun",
      type: "N/A"
    },
    {
      title: "Middle Market Banking And Specialized Industries Internship By JPMorgan - JPMorgan Chase & Co.",
      link: "https://theglobalscholarship.org/internships/middle-market-banking-and-specialized-industries-internship-by-jpmorgan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "13-Apr",
      type: "N/A"
    },
    {
      title: "Investment Banking Analyst Internship By JPMorgan - JPMorgan Chase & Co.",
      link: "https://theglobalscholarship.org/internships/investment-banking-analyst-internship-by-jpmorgan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Jul",
      type: "N/A"
    },
    {
      title: "Global Corporate Banking Internship By JPMorgan - JPMorgan Chase & Co.",
      link: "https://theglobalscholarship.org/internships/global-corporate-banking-internship-by-jpmorgan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "N/A",
      type: "N/A"
    },
    {
      title: "Securities Services Leadership Internship By JPMorgan - JPMorgan Chase & Co.",
      link: "https://theglobalscholarship.org/internships/securities-services-leadership-internship-by-jpmorgan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Oct",
      type: "N/A"
    },
    {
      title: "Global Private Bank Analyst Internship By JPMorgan - JPMorgan Chase & Co.",
      link: "https://theglobalscholarship.org/internships/global-private-bank-analyst-internship-by-jpmorgan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Oct",
      type: "N/A"
    },
    {
      title: "Risk Management Analyst Internship By JPMorgan - JPMorgan Chase & Co.",
      link: "https://theglobalscholarship.org/internships/risk-management-analyst-internship-by-jpmorgan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "16-Sep",
      type: "N/A"
    },
    {
      title: "Corporate Client Banking And Specialized Industries Internship By JPMorgan - JPMorgan Chase & Co.",
      link: "https://theglobalscholarship.org/internships/corporate-client-banking-and-specialized-industries-internship-by-jpmorgan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "13-Apr",
      type: "N/A"
    },
    {
      title: "Asset Management Product Summer Analyst Internship By JPMorgan - JPMorgan Chase & Co.",
      link: "https://theglobalscholarship.org/internships/asset-management-product-summer-analyst-internship-by-jpmorgan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Oct",
      type: "N/A"
    },
    {
      title: "Payments Summer Analyst Internship By JPMorgan - JPMorgan Chase & Co.",
      link: "https://theglobalscholarship.org/internships/payments-summer-analyst-internship-by-jpmorgan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "16-Sep",
      type: "N/A"
    },
    {
      title: "Markets Summer Analyst Internship By JPMorgan - JPMorgan Chase & Co.",
      link: "https://theglobalscholarship.org/internships/markets-summer-analyst-internship-by-jpmorgan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, Professional course",
      stipend: "Click on \"View Details\"",
      lastDate: "16-Sep",
      type: "N/A"
    },
    {
      title: "Field Of Training Marketing Internship By Mercedes Benz - Mercedes-Benz",
      link: "https://theglobalscholarship.org/internships/field-of-training-marketing-internship-by-mercedes-benz?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "05-May",
      type: "N/A"
    },
    {
      title: "Human Resources Development Internship By Mercedes Benz - Mercedes-Benz Japan Co., Ltd.",
      link: "https://theglobalscholarship.org/internships/human-resources-development-internship-by-mercedes-benz?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jun",
      type: "N/A"
    },
    {
      title: "Management Consulting Internship By Mercedes Benz - Mercedes-Benz",
      link: "https://theglobalscholarship.org/internships/management-consulting-internship-by-mercedes-benz?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "STR MGMT Leadership Essential Internship By Kroger - Kroger",
      link: "https://theglobalscholarship.org/internships/str-mgmt-leadership-essential-internship-by-kroger?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "26-May",
      type: "N/A"
    },
    {
      title: "Corporate Communications Internship By EMC INSURANCE - EMC INSURANCE",
      link: "https://theglobalscholarship.org/internships/corporate-communications-internship-by-emc-insurance?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "Sales Internship By Fortune Brand Innovations - Fortune Brand Innovations",
      link: "https://theglobalscholarship.org/internships/sales-internship-by-fortune-brand-innovations?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jun",
      type: "N/A"
    },
    {
      title: "Marketing Internship By Fortune Brand Innovations - Fortune Brand Innovations",
      link: "https://theglobalscholarship.org/internships/marketing-internship-by-fortune-brand-innovations?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jun",
      type: "N/A"
    },
    {
      title: "Internships By FOX - FOX",
      link: "https://theglobalscholarship.org/internships/internships-by-fox?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "Internship By NCGG - The National Centre for Good Governance",
      link: "https://theglobalscholarship.org/internships/internship-by-ncgg?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "14-Nov",
      type: "N/A"
    },
    {
      title: "Internship By ONGCF - Oil and Natural Gas Corporation Foundation (ONGCF)",
      link: "https://theglobalscholarship.org/internships/internship-by-ongcf?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-May",
      type: "N/A"
    },
    {
      title: "Internships By Target Corporation - Target Corporation",
      link: "https://theglobalscholarship.org/internships/internships-by-target-corporation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Internships By Dell Technologies - Dell Technologies",
      link: "https://theglobalscholarship.org/internships/internships-by-dell-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Internships By Shell - Shell",
      link: "https://theglobalscholarship.org/internships/internships-by-shell?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Internships By McKesson - McKesson",
      link: "https://theglobalscholarship.org/internships/internships-by-mckesson?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Medical, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Internships By UnitedHealth Group - UnitedHealth Group",
      link: "https://theglobalscholarship.org/internships/internships-by-unitedhealth-group?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Medical, Bachelors, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Exxon Mobil - Exxon Mobil",
      link: "https://theglobalscholarship.org/internships/internships-by-exxon-mobil?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Internships By Walmart - Walmart",
      link: "https://theglobalscholarship.org/internships/internships-by-walmart?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "30-May",
      type: "N/A"
    },
    {
      title: "Web Development Internship By SPIC MACAY - SPIC MACAY",
      link: "https://theglobalscholarship.org/internships/web-development-internship-by-spic-macay?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Sales And Communication Internship by SRVA Education - SRVA Education",
      link: "https://theglobalscholarship.org/internships/sales-and-communication-internship-by-srva-education?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD, PG-Diploma",
      stipend: "Click on \"View Details\"",
      lastDate: "22-Apr",
      type: "N/A"
    },
    {
      title: "Marketing Internship by Jain And Associates - Jain And Associates",
      link: "https://theglobalscholarship.org/internships/marketing-internship-by-jain-and-associates?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Apr",
      type: "N/A"
    },
    {
      title: "Jr Marketing Executive Internship by Tantrayut Telecommunications Private Limited - Tantrayut Telecommunications Private Limited",
      link: "https://theglobalscholarship.org/internships/jr-marketing-executive-internship-by-tantrayut-telecommunications-private-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "Internship by Credkaro Pvt Limited - Credkaro Pvt Limited",
      link: "https://theglobalscholarship.org/internships/internship-by-credkaro-pvt-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Apr",
      type: "N/A"
    },
    {
      title: "Content Writer Internship by Gamewith100 - Gamewith100",
      link: "https://theglobalscholarship.org/internships/content-writer-internship-by-gamewith100?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "24-Apr",
      type: "N/A"
    },
    {
      title: "Customer Success Administrative Internship By SAS India - SAS India",
      link: "https://theglobalscholarship.org/internships/customer-success-administrative-internship-by-sas-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "Internships By EY - Ernst & Young EMEIA Limited (EY)",
      link: "https://theglobalscholarship.org/internships/internships-by-ey?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Internships By IBM - International Business Machine(IBM)",
      link: "https://theglobalscholarship.org/internships/internships-by-ibm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "24-Jun",
      type: "N/A"
    },
    {
      title: "Internships By Microsoft - Microsoft",
      link: "https://theglobalscholarship.org/internships/internships-by-microsoft-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "24-Jul",
      type: "N/A"
    },
    {
      title: "Internships By Accenture - Accenture",
      link: "https://theglobalscholarship.org/internships/internships-by-accenture-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Internships By Google - Google",
      link: "https://theglobalscholarship.org/internships/internships-by-google?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Sales And Marketing Internship by Trupti Enterprises - Trupti Enterprises",
      link: "https://theglobalscholarship.org/internships/sales-and-marketing-internship-by-trupti-enterprises?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "14-Apr",
      type: "N/A"
    },
    {
      title: "HR Internship By Mensen Corporate Solutions - Mensen Corporate Solutions",
      link: "https://theglobalscholarship.org/internships/hr-internship-by-mensen-corporate-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "Leadgen Internship By NoBroker Hood - NoBroker Hood",
      link: "https://theglobalscholarship.org/internships/leadgen-internship-by-nobroker-hood?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "16-Apr",
      type: "N/A"
    },
    {
      title: "Digital Marketing Internship by Market Intel Pro - Market Intel Pro",
      link: "https://theglobalscholarship.org/internships/digital-marketing-internship-by-market-intel-pro?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "17-Apr",
      type: "N/A"
    },
    {
      title: "Frontend Developer Internship by Aurateria - Aurateria",
      link: "https://theglobalscholarship.org/internships/frontend-developer-internship-by-aurateria?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "17-Apr",
      type: "N/A"
    },
    {
      title: "Business Development Internship by Amicco - Amicco",
      link: "https://theglobalscholarship.org/internships/business-development-internship-by-amicco?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "22-Apr",
      type: "N/A"
    },
    {
      title: "Territory Sales Manager Internship by NoBroker Hood - NoBroker Hood",
      link: "https://theglobalscholarship.org/internships/territory-sales-manager-internship-by-nobroker-hood?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "19-Apr",
      type: "N/A"
    },
    {
      title: "Internships By John Deere - John Deere",
      link: "https://theglobalscholarship.org/internships/internships-by-john-deere?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Global 100 Internship By Wipro - Wipro",
      link: "https://theglobalscholarship.org/internships/global-100-internship-by-wipro?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Software Integration Engineer Internship by Intel - Intel",
      link: "https://theglobalscholarship.org/internships/software-integration-engineer-internship-by-intel?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "11-Jul",
      type: "N/A"
    },
    {
      title: "Geo Analytics Internship By World Resources Institute - World Resources Institute",
      link: "https://theglobalscholarship.org/internships/geo-analytics-internship-by-world-resources-institute?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By GE VERNOVA - GE VERNOVA",
      link: "https://theglobalscholarship.org/internships/internships-by-ge-vernova?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Information Technology Internship By ISB - Indian School of Business",
      link: "https://theglobalscholarship.org/internships/information-technology-internship-by-isb?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "SAP Internship By PWC - PWC",
      link: "https://theglobalscholarship.org/internships/sap-internship-by-pwc?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Store Sales Marketing Internship by Tata - Tata group",
      link: "https://theglobalscholarship.org/internships/store-sales-marketing-internship-by-tata-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Greendzine Technologies - Greendzine Technologies",
      link: "https://theglobalscholarship.org/internships/internships-by-greendzine-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Social Media Manger Internship By IC Solution - IC Solution",
      link: "https://theglobalscholarship.org/internships/social-media-manger-internship-by-ic-solution-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "19-Apr",
      type: "N/A"
    },
    {
      title: "Recruiment Internship By Gururo - Gururo",
      link: "https://theglobalscholarship.org/internships/recruiment-internship-by-gururo?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Apr",
      type: "N/A"
    },
    {
      title: "Digital Marketing Internship by Paytm - Paytm",
      link: "https://theglobalscholarship.org/internships/digital-marketing-internship-by-paytm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Financial Control Group Industrial Trainee Internship By Morgan Stanley - Morgan Stanley",
      link: "https://theglobalscholarship.org/internships/financial-control-group-industrial-trainee-internship-by-morgan-stanley?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships by EY - EY",
      link: "https://theglobalscholarship.org/internships/internships-by-ey?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships at J P Morgan - J P Morgan",
      link: "https://theglobalscholarship.org/internships/internships-at-j-p-morgan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Consulting Internships By Deloitte - Deloitte",
      link: "https://theglobalscholarship.org/internships/consulting-internships-by-deloitte?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Internships By BMW - BMW",
      link: "https://theglobalscholarship.org/internships/internships-by-bmw?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Rolls Royce - Rolls-Royce",
      link: "https://theglobalscholarship.org/internships/-internships-by-rolls-royce?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jan",
      type: "N/A"
    },
    {
      title: "Amrit Internship By ICRO - IPL Centre For Rural Outreach",
      link: "https://theglobalscholarship.org/internships/amrit-internship-by-icro?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Class 12, Diploma, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "19-Aug",
      type: "N/A"
    },
    {
      title: "Internships By Bosch - Bosch Company",
      link: "https://theglobalscholarship.org/internships/internships-by-bosch?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, Professional courses",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Internships By Toyota - Toyota Motor Corporation",
      link: "https://theglobalscholarship.org/internships/internships-by-toyota?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Internships By Lamborghini - The luxury automobile manufacturer Lamborghini",
      link: "https://theglobalscholarship.org/internships/internships-by-lamborghini?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "Internships By AICTE - AICTE (YBI Foundation)",
      link: "https://theglobalscholarship.org/internships/internships-by-aicte?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Dropbox - Dropbox",
      link: "https://theglobalscholarship.org/internships/internships-by-dropbox?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Data Analysis Using Python Internship by Shripriti Educational and IT Hub AICTE - AICTE",
      link: "https://theglobalscholarship.org/internships/data-analysis-using-python-internship-by-shripriti-educational-and-it-hub-aicte?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "11-May",
      type: "N/A"
    },
    {
      title: "Frontend Web Development Internship by Shripriti Educational and IT Hub AICTE - AICTE",
      link: "https://theglobalscholarship.org/internships/frontend-web-development-internship-by-shripriti-educational-and-it-hub-aicte?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Apr",
      type: "N/A"
    },
    {
      title: "Internships By NASA Space Research - NASA Space Research",
      link: "https://theglobalscholarship.org/internships/-internships-by-nasa-space-research?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Medical, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "Web Development Internship by Shripriti Educational and IT Hub AICTE - AICTE",
      link: "https://theglobalscholarship.org/internships/web-development-internship-by-shripriti-educational-and-it-hub-aicte?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "29-Jun",
      type: "N/A"
    },
    {
      title: "VLSI Design Engineer Internship by Rudhaa Skillforge Technologies AICTE - AICTE",
      link: "https://theglobalscholarship.org/internships/vlsi-design-engineer-internship-by-rudhaa-skillforge-technologies-aicte?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "02-Sep",
      type: "N/A"
    },
    {
      title: "Internships By Agoda Company - Agoda Company",
      link: "https://theglobalscholarship.org/internships/internships-by-agoda-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Internship By Sports Authority of India - Sports Authority of India",
      link: "https://theglobalscholarship.org/internships/internship-by-sports-authority-of-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Omni Sport Leader Internship By Decathlon - Decathlon India",
      link: "https://theglobalscholarship.org/internships/omni-sport-leader-internship-by-decathlon?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Fundamental Research Internship By Tata Institute - Tata Institute of Fundamental Research",
      link: "https://theglobalscholarship.org/internships/fundamental-research-internship-by-tata-institute?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Groww Company - Groww Company",
      link: "https://theglobalscholarship.org/internships/internships-by-groww-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "21-Jun",
      type: "N/A"
    },
    {
      title: "Internship By Greenpeace India - Greenpeace India",
      link: "https://theglobalscholarship.org/internships/internship-by-greenpeace-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Class 12, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship by Vedantu - Vedantu",
      link: "https://theglobalscholarship.org/internships/internship-by-vedantu-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship By SECI - Solar Energy Corporation of India(SECI)",
      link: "https://theglobalscholarship.org/internships/internship-by-seci?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "19-Aug",
      type: "N/A"
    },
    {
      title: "Internships By Tesla - Tesla",
      link: "https://theglobalscholarship.org/internships/internships-by-tesla-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Operations Internship by Newton School - Newton School",
      link: "https://theglobalscholarship.org/internships/operations-internship-by-newton-school?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Jul",
      type: "N/A"
    },
    {
      title: "Background Verification Internship By DEWII - DEWII",
      link: "https://theglobalscholarship.org/internships/background-verification-internship-by-dewii?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship By Netgear - Netgear",
      link: "https://theglobalscholarship.org/internships/internship-by-netgear?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship By SCO - Supreme Court Observer",
      link: "https://theglobalscholarship.org/internships/internship-by-sco?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Industrial design Internship by Svaya Robotics - svayarobotics",
      link: "https://theglobalscholarship.org/internships/industrial-design-internship-by-svaya-robotics?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "HRBP Internship By ByteDance - ByteDance",
      link: "https://theglobalscholarship.org/internships/hrbp-internship-by-bytedance?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship By Krify Foundation - Krify Software Technologies(Krify Foundation)",
      link: "https://theglobalscholarship.org/internships/internship-by-krify-foundation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Sales Internship By Lateshipment - Lateshipment",
      link: "https://theglobalscholarship.org/internships/sales-internship-by-lateshipment?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Certified Internships by ACTC Studio - ACTC Studio",
      link: "https://theglobalscholarship.org/internships/certified-internships-by-actc-studio?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Content Writer Internship By Zuan Education - Zuan Education",
      link: "https://theglobalscholarship.org/internships/content-writer-internship-by-zuan-education?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Operations Internship by The Show - The Show",
      link: "https://theglobalscholarship.org/internships/operations-internship-by-the-show-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Industrial design Winter Internship by Svaya Robotics - Svaya Robotics",
      link: "https://theglobalscholarship.org/internships/industrial-design-winter-internship-by-svaya-robotics?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Winter Internship By CollegeTips - CollegeTips",
      link: "https://theglobalscholarship.org/internships/winter-internship-by-collegetips?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "PG-Diploma, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Apr",
      type: "N/A"
    },
    {
      title: "MFE Internship By Novozymes - Novozymes",
      link: "https://theglobalscholarship.org/internships/mfe-internship-by-novozymes?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "React UI Developer Internship By f1 studios - f1 studios",
      link: "https://theglobalscholarship.org/internships/-react-ui-developer-internship-by-f1-studios?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Plug Power Inc. - Plug Power In.",
      link: "https://theglobalscholarship.org/internships/internships-by-plug-power-inc.?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Project Management Engineer Internship by Plug Power Inc. - Plug Power Inc.",
      link: "https://theglobalscholarship.org/internships/project-management-engineer-internship-by-plug-power-inc.?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Piping Engineer Internship by Plug Power Inc. - Plug Power Inc.",
      link: "https://theglobalscholarship.org/internships/piping-engineer-internship-by-plug-power-inc.?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Graphic Designer Internship By Roads2Future - Roads2Future",
      link: "https://theglobalscholarship.org/internships/graphic-designer-internship-by-roads2future?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "GIEEE Finance Internship By IEEE - IEEE Careers",
      link: "https://theglobalscholarship.org/internships/gieee-finance-internship-by-ieee?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Content Writer Internship By Nbyula - Nbyula",
      link: "https://theglobalscholarship.org/internships/content-writer-internship-by-nbyula?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "PG-Diploma, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Videographer Internship By Nbyula - Nbyula",
      link: "https://theglobalscholarship.org/internships/videographer-internship-by-nbyula?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Digital Media And Marketer Internship By Nbyula - Nbyula",
      link: "https://theglobalscholarship.org/internships/digital-media-and-marketer-internship-by-nbyula?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship Program Term 1 by Ministry of External Affairs - Ministry of External Affairs",
      link: "https://theglobalscholarship.org/internships/internship-program-term-1-by-ministry-of-external-affairs?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "04-Aug",
      type: "N/A"
    },
    {
      title: "Internship By Indian Institute Of Remote Sensing - Indian Institute of Remote Sensing(IIRS)",
      link: "https://theglobalscholarship.org/internships/internship-by-indian-institute-of-remote-sensing?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Oct",
      type: "N/A"
    },
    {
      title: "InfoSec GRC Internship by CoinDCX - CoinDCX",
      link: "https://theglobalscholarship.org/internships/infosec-grc-internship-by-coindcx?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "HR Data Internship By ALTAIR - ALTAIR ONLY FORWORD",
      link: "https://theglobalscholarship.org/internships/hr-data-internship-by-altair?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Investment Banking M and A Internship by Agentis Capital - Agentis Capital",
      link: "https://theglobalscholarship.org/internships/investment-banking-m-and-a-internship-by-agentis-capital-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Machine Learning Internship By Comcast - Comcast",
      link: "https://theglobalscholarship.org/internships/machine-learning-internship-by-comcast?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Internships By NVIDIA - NVIDIA",
      link: "https://theglobalscholarship.org/internships/internships-by-nvidia?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "22-Apr",
      type: "N/A"
    },
    {
      title: "Internship By Indian School Of Business - Indian School Of Business",
      link: "https://theglobalscholarship.org/internships/internship-by-indian-school-of-business-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Bekar Hughes - Baker Hughes",
      link: "https://theglobalscholarship.org/internships/internships-by-bekar-hughes?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Jio - Jio Careers",
      link: "https://theglobalscholarship.org/internships/internships-by-jio?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Technology Software Architecture Intern The internship opportunity at Data Axle - Data Axle",
      link: "https://theglobalscholarship.org/internships/technology-software-architecture-intern-the-internship-opportunity-at-data-axle?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By UNICEF - UNICEF",
      link: "https://theglobalscholarship.org/internships/internships-by-unicef?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By OurSelfStudy - OurSelfStudy",
      link: "https://theglobalscholarship.org/internships/-internships-by-ourselfstudy-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "This technical consulting internship with SAS India - SAS India",
      link: "https://theglobalscholarship.org/internships/this-technical-consulting-internship-with-sas-india-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "The Customer Lifecycle Management Internship at Mobile Premier League - Mobile Premier League",
      link: "https://theglobalscholarship.org/internships/the-customer-lifecycle-management-internship-at-mobile-premier-league?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Freelance Video Editing And Animation Work internship - Stick & Dot",
      link: "https://theglobalscholarship.org/internships/freelance-video-editing-and-animation-work-internship?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship By IICA - Indian Institute of Corporate Affairs (IICA)",
      link: "https://theglobalscholarship.org/internships/internship-by-iica?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Research Internship by Bigbasket - Bigbasket India",
      link: "https://theglobalscholarship.org/internships/research-internship-by-bigbasket?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Strategy Internship by CarDekho - CarDekho India",
      link: "https://theglobalscholarship.org/internships/strategy-internship-by-cardekho?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By CRISIL Limited - CRISIL Limited",
      link: "https://theglobalscholarship.org/internships/--internships-by-crisil-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters, Professional courses",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Mar",
      type: "N/A"
    },
    {
      title: "Internship By Invest India - Invest India",
      link: "https://theglobalscholarship.org/internships/internship-by-invest-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "All",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Internships By HPE - Hewlett-Packard Enterprise (HPE)",
      link: "https://theglobalscholarship.org/internships/internships-by-hpe?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "The Global Internship Program by Tata Consultancy Services - Tata Consultancy Services India",
      link: "https://theglobalscholarship.org/internships/the-global-internship-program-by-tata-consultancy-services?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Jun",
      type: "N/A"
    },
    {
      title: "Educator Internship By Unacademy - Unacademy",
      link: "https://theglobalscholarship.org/internships/educator-internship-by-unacademy?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship by Tata Group - Tata Group",
      link: "https://theglobalscholarship.org/internships/internship-by-tata-group?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Product Growth Internship By Analytics Vidhya - Analytics Vidhya",
      link: "https://theglobalscholarship.org/internships/product-growth-internship-by-analytics-vidhya?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "Tax Management Internship By EY India - EY India PVT LTD",
      link: "https://theglobalscholarship.org/internships/tax-management-internship-by-ey-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "18-Jul",
      type: "N/A"
    },
    {
      title: "Program Alliance Internship By EY India - EY India PVT LTD",
      link: "https://theglobalscholarship.org/internships/-program-alliance-internship-by-ey-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Aug",
      type: "N/A"
    },
    {
      title: "Devlopment Operation Internship By Teach For India - Teach For India",
      link: "https://theglobalscholarship.org/internships/devlopment-operation-internship-by-teach-for-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
      type: "N/A"
    },
    {
      title: "The Operations Summer Analyst Program at Morgan Stanley - Morgan Stanley India",
      link: "https://theglobalscholarship.org/internships/the-operations-summer-analyst-program-at-morgan-stanley?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-May",
      type: "N/A"
    },
    {
      title: "The Globalink Research Internship by Mitacs - Mitacs",
      link: "https://theglobalscholarship.org/internships/-the-globalink-research-internship-by-mitacs?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Sales Development Internship at Recruit CRM for 2024 - Recruit CRM",
      link: "https://theglobalscholarship.org/internships/-sales-development-internship-at-recruit-crm-for-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters, PG-Diploma",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internship By F5 Company - F5 Technology Company",
      link: "https://theglobalscholarship.org/internships/internship-by-f5-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Internships By Goldman Sachs - Goldman Sachs",
      link: "https://theglobalscholarship.org/internships/internships-by-goldman-sachs?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Bachelors, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    }
  ];


export default function BachelorsInternships() {
  const [visibleCount, setVisibleCount] = useState(6); // Initial internships shown (5)
  const [filterType, setFilterType] = useState(''); // Remote or Onsite filter
  const [filterStipendRange, setFilterStipendRange] = useState(''); // Stipend range filter
  const [filteredInternships, setFilteredInternships] = useState(bachelorsInternships);

  // Handle Remote/Onsite filter change
  const handleFilterTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterType(value);
    filterInternships(value, filterStipendRange);
  };

  // Handle stipend range filter change
  const handleFilterStipendChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterStipendRange(value);
    filterInternships(filterType, value);
  };

  const filterInternships = (type: string, stipend: string) => {
    let filtered = [...bachelorsInternships];

    // Filter by type (Remote or Onsite)
    if (type) {
      filtered = filtered.filter((internship) => internship.type === type);
    }

    // Filter by stipend range
    if (stipend) {
      filtered = filtered.filter((internship) => {
        const stipendAmount = parseInt(internship.stipend.replace(/[^\d]/g, '')) || 0;
        const [min, max] = stipend.split('-').map(Number);
        return stipendAmount >= min && stipendAmount <= max;
      });
    }

    setFilteredInternships(filtered);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12); // Load 3 more internships at a time
  };

  const shouldShowLoadMore = bachelorsInternships.length > visibleCount;

  return (
    <> 
    <Navbar />
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold', color: '#222' }}>
          Bachelor's Internships for Students
        </h1>

        <p style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#555', fontSize: '1.1rem' }}>
          Discover exciting internships for Bachelor's students from top tech companies. Gain real-world experience and kickstart your career!
        </p>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
          <select style={selectStyle} onChange={handleFilterTypeChange} value={filterType}>
            <option value="">Select Type (Remote/Onsite)</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>

          <select style={selectStyle} onChange={handleFilterStipendChange} value={filterStipendRange}>
            <option value="">Select Stipend Range</option>
            <option value="0-5000">0 - 5,000</option>
            <option value="5000-10000">5,000 - 10,000</option>
            <option value="10000-20000">10,000 - 20,000</option>
          </select>
        </div>

        {/* Internships List */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
  {filteredInternships.slice(0, visibleCount).map((internship, index) => (
    <div key={index} style={cardStyle}>
      <h3 style={cardTitle}>{internship.title}</h3>
      

      <p style={cardDetail}>
        <strong>Stipend:</strong> {internship.stipend || "N/A"}
      </p>
      
      <p style={cardDetail}>
        <strong>Last Date:</strong> {internship.lastDate || "N/A"}
      </p>
      <p style={cardDetail}>
        <strong>Duration:</strong> {internship.duration || "N/A"}
      </p>
      {/*<p style={cardDetail}>
        <strong>Remote:</strong> {internship.isRemote ? "Yes" : "No"}
      </p>*/}
      <p style={cardDetail}>
        <strong>Eligibility:</strong> {internship.eligibility || "N/A"}
      </p>

      <Link href={internship.link} target="_blank" style={linkStyle}>
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

const cardTitle = {
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
