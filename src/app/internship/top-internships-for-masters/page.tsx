'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

const mastersInternships = [
    {
      title: "NABARD Student Internship 2025 - NABARD",
      link: "https://theglobalscholarship.org/internships/nabard-student-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "07-Apr",
      type: "4 day"
    },
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
      title: "Mechanical Design Internship By Unbox Robotics - Unbox Robotics",
      link: "https://theglobalscholarship.org/internships/mechanical-design-internship-by-unbox-robotics?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Apr",
      type: "1 day"
    },
    {
      title: "Fuel properties Internship By Airbus India Pvt Ltd - Airbus India Pvt Ltd",
      link: "https://theglobalscholarship.org/internships/fuel-properties-internship-by-airbus-india-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Apr",
      type: "1 day"
    },
    {
      title: "Propulsion Internship By Airbus India Pvt Ltd - Airbus India Pvt Ltd",
      link: "https://theglobalscholarship.org/internships/propulsion-internship-by-airbus-india-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters, Aviation",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Apr",
      type: "1 day"
    },
    {
      title: "Multimodal AI Internship By Sony India - Sony India",
      link: "https://theglobalscholarship.org/internships/multimodal-ai-internship-by-sony-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "02-Apr",
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
      title: "Software Development Internship By Synopsys - Synopsys",
      link: "https://theglobalscholarship.org/internships/software-development-internship-by-synopsys?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "02-Apr",
      type: "N/A"
    },
    {
      title: "Summer Research Internship In Petroleum And Energy - The Rajiv Gandhi Institute of Petroleum Technology",
      link: "https://theglobalscholarship.org/internships/summer-research-internship-in-petroleum-and-energy?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Apr",
      type: "1 day"
    },
    {
      title: "Q Daksha Student Internship By IQTI - IQTI",
      link: "https://theglobalscholarship.org/internships/q-daksha-student-internship-by-iqti?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "16-Mar",
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
      title: "Spice Modeling Engineer Internship By Intel India - Intel India",
      link: "https://theglobalscholarship.org/internships/spice-modeling-engineer-internship-by-intel-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
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
      title: "Summer Internship By IIT Mandi - IIT Mandi",
      link: "https://theglobalscholarship.org/internships/summer-internship-by-iit-mandi?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "React Native Internship By Unikwork - Unikwork",
      link: "https://theglobalscholarship.org/internships/react-native-internship-by-unikwork?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "HR Generalist Apprenticeship By Microsoft India - Microsoft India",
      link: "https://theglobalscholarship.org/internships/hr-generalist-apprenticeship-by-microsoft-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "29-Mar",
      type: "N/A"
    },
    {
      title: "Hardware OR Software Internship By IBM India Private LImited - IBM India Private LImited",
      link: "https://theglobalscholarship.org/internships/hardware-or-software-internship-by-ibm-india-private-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, Post Doctoral",
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
      title: "AI And ML Internship By Johnson Controls - Johnson Controls",
      link: "https://theglobalscholarship.org/internships/ai-and-ml-internship-by-johnson-controls?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Mar",
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
      title: "Control System Internship By Genrobotics - Genrobotics",
      link: "https://theglobalscholarship.org/internships/control-system-internship-by-genrobotics?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Mar",
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
      title: "Geospatial Summer Internship By MOODYS India - MOODY'S India",
      link: "https://theglobalscholarship.org/internships/geospatial-summer-internship-by-moodys-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "27-Mar",
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
      title: "Semiconductor Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/semiconductor-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, PHD",
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
      title: "Digital Technology Internship By GE Aerospace - GE Aerospace",
      link: "https://theglobalscholarship.org/internships/digital-technology-internship-by-ge-aerospace?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Mar",
      type: "N/A"
    },
    {
      title: "Electronics Engineering Internship By Global Foundries - Global Foundries",
      link: "https://theglobalscholarship.org/internships/electronics-engineering-internship-by-global-foundries?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
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
      title: "Software Engineering Internship By Fortive India - Fortive India",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-fortive-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Mar",
      type: "N/A"
    },
    {
      title: "SW Internship By Fortive India - Fortive India",
      link: "https://theglobalscholarship.org/internships/sw-internship-by-fortive-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "13-Mar",
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
      title: "Data Science Internship By Vertoz India - Vertoz India",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-vertoz-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Human Resources Internships By Paytm India - Paytm India",
      link: "https://theglobalscholarship.org/internships/human-resources-internships-by-paytm-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Mar",
      type: "N/A"
    },
    {
      title: "Interim Hardware Engineering Internship By Qualcomm India - Qualcomm India",
      link: "https://theglobalscholarship.org/internships/interim-hardware-engineering-internship-by-qualcomm-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "07-Mar",
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
      title: "Spark Internship By Volvo India - Volvo India",
      link: "https://theglobalscholarship.org/internships/spark-internship-by-volvo-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Mar",
      type: "N/A"
    },
    {
      title: "Ride Experience Analyst Internship By Ather Energy - Ather Energy",
      link: "https://theglobalscholarship.org/internships/ride-experience-analyst-internship-by-ather-energy?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Internships By IIT Palakkad - IIT Palakkad",
      link: "https://theglobalscholarship.org/internships/internships-by-iit-palakkad?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "18-Mar",
      type: "N/A"
    },
    {
      title: "Summer Undergraduate Research Exposure Internship By IIT Hyderabad - IIT Hyderabad",
      link: "https://theglobalscholarship.org/internships/summer-undergraduate-research-exposure-internship-by-iit-hyderabad?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Mar",
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
      title: "Interim Engineering Internship By Qualcomm - Qualcomm",
      link: "https://theglobalscholarship.org/internships/interim-engineering-internship-by-qualcomm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
      type: "N/A"
    },
    {
      title: "Product Design Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/product-design-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Hardware Software Summer Internship By IBM India Pvt Ltd - IBM India Pvt Ltd",
      link: "https://theglobalscholarship.org/internships/hardware-software-summer-internship-by-ibm-india-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Computational Designer Internships By Walter P Moore - Walter P Moore",
      link: "https://theglobalscholarship.org/internships/computational-designer-internships-by-walter-p-moore?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
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
      title: "Software Internship By GE Aerospace - GE Aerospace",
      link: "https://theglobalscholarship.org/internships/software-internship-by-ge-aerospace?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, PHD",
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
      title: "Applications Engineering Internship By Synopsys - Synopsys",
      link: "https://theglobalscholarship.org/internships/applications-engineering-internship-by-synopsys?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
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
      title: "Content Writer internship Testbook - Testbook",
      link: "https://theglobalscholarship.org/internships/content-writer-internship-testbook?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Feb",
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
      title: "Cloud Network Engineering Internship By Microsoft India - Microsoft India",
      link: "https://theglobalscholarship.org/internships/cloud-network-engineering-internship-by-microsoft-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Internship By KSRSAC - KSRSAC",
      link: "https://theglobalscholarship.org/internships/internship-by-ksrsac?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Feb",
      type: "N/A"
    },
    {
      title: "Automation Developer Internship By Jacobs - Jacobs",
      link: "https://theglobalscholarship.org/internships/automation-developer-internship-by-jacobs?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Feb",
      type: "N/A"
    },
    {
      title: "Internship By Valeo - Valeo",
      link: "https://theglobalscholarship.org/internships/internship-by-valeo?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
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
      title: "Formal Verification Internship By Synopsys - Synopsys",
      link: "https://theglobalscholarship.org/internships/formal-verification-internship-by-synopsys?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Feb",
      type: "N/A"
    },
    {
      title: "NHRC India Short Term Internship 2025 - National Human Rights Commission, India",
      link: "https://theglobalscholarship.org/internships/nhrc-india-short-term-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "07-Feb",
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
      title: "Data Science Internship By Zeotap - Zeotap",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-zeotap?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Feb",
      type: "N/A"
    },
    {
      title: "Software Engineer Internship By Harman - Harman",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-harman?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "22-Jan",
      type: "N/A"
    },
    {
      title: "Quality Internship By TechnipFMC - TechnipFMC",
      link: "https://theglobalscholarship.org/internships/quality-internship-by-technipfmc?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Research Fellow Internship By Microsoft India - Microsoft India",
      link: "https://theglobalscholarship.org/internships/research-fellow-internship-by-microsoft-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Research And Power Electronics Internship By GE Vernova - GE Vernova",
      link: "https://theglobalscholarship.org/internships/research-and-power-electronics-internship-by-ge-vernova?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Feb",
      type: "N/A"
    },
    {
      title: "Software Developer Internship By Distinction Dev - Distinction Dev",
      link: "https://theglobalscholarship.org/internships/software-developer-internship-by-distinction-dev?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Feb",
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
      title: "Supply Chain Internship By Avery Dennison - Avery Dennison",
      link: "https://theglobalscholarship.org/internships/supply-chain-internship-by-avery-dennison?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Medical Research Internship By 2070Health - 2070Health",
      link: "https://theglobalscholarship.org/internships/medical-research-internship-by-2070health?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Medical, Masters, PHD",
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
      title: "Audit Valuation Support Internship By EY India - EY India",
      link: "https://theglobalscholarship.org/internships/audit-valuation-support-internship-by-ey-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, Professional courses",
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
      title: "MNAND Validation Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/mnand-validation-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "SDV Product Engineering Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/sdv-product-engineering-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Software Developer Internship By IBM India Pvt Ltd - IBM India Pvt Ltd",
      link: "https://theglobalscholarship.org/internships/software-developer-internship-by-ibm-india-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "SSD System Product Engineer Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/ssd-system-product-engineer-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Embedded Software Internship By Carrier - Carrier",
      link: "https://theglobalscholarship.org/internships/embedded-software-internship-by-carrier?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Ansys Simulation Internship By GE Healthcare - GE Healthcare",
      link: "https://theglobalscholarship.org/internships/ansys-simulation-internship-by-ge-healthcare?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "SW CDC Internship By Qualcomm India Private Limited - Qualcomm India Private Limited",
      link: "https://theglobalscholarship.org/internships/sw-cdc-internship-by-qualcomm-india-private-limited-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
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
      title: "Solution Engineer Internship By Bureau - Bureau",
      link: "https://theglobalscholarship.org/internships/solution-engineer-internship-by-bureau?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Project Internship By Rolls Royce - Rolls Royce",
      link: "https://theglobalscholarship.org/internships/project-internship-by-rolls-royce?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Work Based Learning Internship 2025 - Government of India",
      link: "https://theglobalscholarship.org/internships/work-based-learning-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Dec",
      type: "N/A"
    },
    {
      title: "Software Developer Internship By IBM India Private Limited - IBM India Private Limited",
      link: "https://theglobalscholarship.org/internships/software-developer-internship-by-ibm-india-private-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "06-Dec",
      type: "N/A"
    },
    {
      title: "TechVision Internship By Frost And Sullivan - Frost And Sullivan",
      link: "https://theglobalscholarship.org/internships/techvision-internship-by-frost-and-sullivan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
      type: "N/A"
    },
    {
      title: "Engineering Internship By Synopsys - Synopsys",
      link: "https://theglobalscholarship.org/internships/engineering-internship-by-synopsys?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
      type: "N/A"
    },
    {
      title: "Load Estimation And Validation For Chassis Components Internship By Lamborghini - Lamborghini",
      link: "https://theglobalscholarship.org/internships/load-estimation-and-validation-for-chassis-components-internship-by-lamborghini?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
      type: "N/A"
    },
    {
      title: "Load Estimation And Virtual Validation For Chassis Components Internship By Lamborghini - Lamborghini",
      link: "https://theglobalscholarship.org/internships/load-estimation-and-virtual-validation-for-chassis-components-internship-by-lamborghini?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Dec",
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
      title: "Engineering Internship By Rockwell Automation - Rockwell Automation",
      link: "https://theglobalscholarship.org/internships/engineering-internship-by-rockwell-automation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "Student Internship By NIT - National Institute of Technology Tiruchirappalli (NIT Trichy)",
      link: "https://theglobalscholarship.org/internships/student-internship-by-nit?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "02-Dec",
      type: "N/A"
    },
    {
      title: "Internship By GE Healthcare - GE Healthcare",
      link: "https://theglobalscholarship.org/internships/internship-by-ge-healthcare?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "Graduate Internship By Walmart Careers - Walmart Careers",
      link: "https://theglobalscholarship.org/internships/graduate-internship-by-walmart-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Business Analyst Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/business-analyst-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
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
      title: "Analog Design Engineer Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/analog-design-engineer-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Simulation Models Trainee Internship By Airbus Careers - Airbus Careers",
      link: "https://theglobalscholarship.org/internships/simulation-models-trainee-internship-by-airbus-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Computational Designer Internship By Walter P Moore - Walter P Moore",
      link: "https://theglobalscholarship.org/internships/computational-designer-internship-by-walter-p-moore?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Research Internship By GE Vernova Careers - GE Vernova",
      link: "https://theglobalscholarship.org/internships/research-internship-by-ge-vernova-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Software Engineer Internship By Electronic Arts - Electronic Arts",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-electronic-arts?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Dec",
      type: "N/A"
    },
    {
      title: "Content Writer Internship By Testbook Careers - Testbook Careers",
      link: "https://theglobalscholarship.org/internships/content-writer-internship-by-testbook-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Dec",
      type: "N/A"
    },
    {
      title: "Google MBA Internship 2025 - Google",
      link: "https://theglobalscholarship.org/internships/google-mba-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Dec",
      type: "N/A"
    },
    {
      title: "Software Engineering Internship By Aptiv - Aptiv",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-aptiv?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Dec",
      type: "N/A"
    },
    {
      title: "Technical Program Manager Internship By Razorpay - Razorpay",
      link: "https://theglobalscholarship.org/internships/technical-program-manager-internship-by-razorpay-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Dec",
      type: "N/A"
    },
    {
      title: "Intellectual Property Internship By GE Appliances - GE Appliances",
      link: "https://theglobalscholarship.org/internships/intellectual-property-internship-by-ge-appliances?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Dec",
      type: "N/A"
    },
    {
      title: "Embedded Systems Hardware Internship By General Electric - General Electric",
      link: "https://theglobalscholarship.org/internships/embedded-systems-hardware-internship-by-general-electric?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "N/A",
      type: "N/A"
    },
    {
      title: "Technical Internship By Unisys - Unisys",
      link: "https://theglobalscholarship.org/internships/technical-internship-by-unisys?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Dec",
      type: "N/A"
    },
    {
      title: "Hardware Engineering Internship By Microsoft - Microsoft",
      link: "https://theglobalscholarship.org/internships/hardware-engineering-internship-by-microsoft?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Dec",
      type: "N/A"
    },
    {
      title: "Software Engineer Winter Internship By Rubrik - Rubrik",
      link: "https://theglobalscholarship.org/internships/software-engineer-winter-internship-by-rubrik?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Dec",
      type: "N/A"
    },
    {
      title: "Data And Applied Scientist Internship By NetApp - NetApp",
      link: "https://theglobalscholarship.org/internships/data-and-applied-scientist-internship-by-netapp?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
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
      title: "Talent Acquisition Internship By DNV India - DNV India",
      link: "https://theglobalscholarship.org/internships/talent-acquisition-internship-by-dnv-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Dec",
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
      title: "Mechanical Engineering Internship By General Electric - General Electric",
      link: "https://theglobalscholarship.org/internships/mechanical-engineering-internship-by-general-electric?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
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
      title: "Industry Consultants Internship By Dassault Systemes - Dassault Systemes",
      link: "https://theglobalscholarship.org/internships/industry-consultants-internship-by-dassault-systemes?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Nov",
      type: "N/A"
    },
    {
      title: "Research AI Internship By IBM India Private Limited - IBM India Private Limited",
      link: "https://theglobalscholarship.org/internships/research-ai-internship-by-ibm-india-private-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, PHD",
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
      title: "Software Internship By GE Vernova - GE Vernova",
      link: "https://theglobalscholarship.org/internships/software-internship-by-ge-vernova?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Nov",
      type: "N/A"
    },
    {
      title: "Trainee Internship By Motorola Solutions - Motorola Solutions",
      link: "https://theglobalscholarship.org/internships/trainee-internship-by-motorola-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Nov",
      type: "N/A"
    },
    {
      title: "Product Engineering Internship By Facilio - Facilio",
      link: "https://theglobalscholarship.org/internships/product-engineering-internship-by-facilio?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Nov",
      type: "N/A"
    },
    {
      title: "IT Supply Chain Internship By Motorola Solutions - Motorola Solutions",
      link: "https://theglobalscholarship.org/internships/it-supply-chain-internship-by-motorola-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Nov",
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
      title: "Test Solutions Engineer Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/test-solutions-engineer-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Nov",
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
      title: "RBI Research Internship 2024 - Reserve Bank Of India",
      link: "https://theglobalscholarship.org/internships/rbi-research-internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Brand Summer Internship By Procter And Gamble - Procter And Gamble",
      link: "https://theglobalscholarship.org/internships/brand-summer-internship-by-procter-and-gamble?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "Microsoft India Research Fellow Internship - Microsoft",
      link: "https://theglobalscholarship.org/internships/microsoft-india-research-fellow-internship-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
      type: "N/A"
    },
    {
      title: "HIG HGB Design Verification Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/hig-hgb-design-verification-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "Analytics And Insights Internship By Procter And Gamble - Procter And Gamble",
      link: "https://theglobalscholarship.org/internships/analytics-and-insights-internship-by-procter-and-gamble?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "TechVision Internship By Frost And Sullivan - Frost And Sullivan",
      link: "https://theglobalscholarship.org/internships/techvision-internship-by-frost-and-sullivan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
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
      title: "Microelectronics Design Internship By Global Foundries - Global Foundries",
      link: "https://theglobalscholarship.org/internships/microelectronics-design-internship-by-global-foundries?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
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
      title: "Pre Sales Engineering Internship By Motorola Solutions - Motorola Solutions",
      link: "https://theglobalscholarship.org/internships/pre-sales-engineering-internship-by-motorola-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
      type: "N/A"
    },
    {
      title: "DFT Internship By Synopsys Careers - Synopsys Careers",
      link: "https://theglobalscholarship.org/internships/dft-internship-by-synopsys-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
      type: "N/A"
    },
    {
      title: "Test Engineer Internship By Semtech - Semtech",
      link: "https://theglobalscholarship.org/internships/test-engineer-internship-by-semtech?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
      type: "N/A"
    },
    {
      title: "Associate Internship By MCKinsey And Company 2024 - MCKinsey And Company",
      link: "https://theglobalscholarship.org/internships/associate-internship-by-mckinsey-and-company-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
      type: "N/A"
    },
    {
      title: "Business Analyst Internship By MCKinsey And Company 2024 - MCKinsey And Company",
      link: "https://theglobalscholarship.org/internships/business-analyst-internship-by-mckinsey-and-company-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
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
      title: "Solution Area Specialists Internship By Microsoft - Microsoft",
      link: "https://theglobalscholarship.org/internships/solution-area-specialists-internship-by-microsoft?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Oct",
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
      title: "Research Security Internship By IBM India Private Limited - IBM India Private Limited",
      link: "https://theglobalscholarship.org/internships/research-security-internship-by-ibm-india-private-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
      type: "N/A"
    },
    {
      title: "Software Engineering Internship By Calix Systems - Calix Systems",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-calix-systems?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Nov",
      type: "N/A"
    },
    {
      title: "SoC Development Co Op Internship By AMD Careers - AMD Careers",
      link: "https://theglobalscholarship.org/internships/soc-development-co-op-internship-by-amd-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Nov",
      type: "N/A"
    },
    {
      title: "Product Management Internship By Microsoft - Microsoft",
      link: "https://theglobalscholarship.org/internships/product-management-internship-by-microsoft?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Oct",
      type: "N/A"
    },
    {
      title: "AI And ML Data Scientist Internship By Lilly - Lilly",
      link: "https://theglobalscholarship.org/internships/ai-and-ml-data-scientist-internship-by-lilly?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Nov",
      type: "N/A"
    },
    {
      title: "Data Scientist Internship By Henkal - Henkal",
      link: "https://theglobalscholarship.org/internships/data-scientist-internship-by-henkal?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Software Internship By Danaher - Danaher",
      link: "https://theglobalscholarship.org/internships/software-internship-by-danaher?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Oct",
      type: "N/A"
    },
    {
      title: "Software Development Engineer Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/software-development-engineer-internship-by-micron-technology-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Oct",
      type: "N/A"
    },
    {
      title: "Internship By Pfizer Careers - Pfizer Careers",
      link: "https://theglobalscholarship.org/internships/internship-by-pfizer-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Oct",
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
      title: "Software Engineering Internship By Microsoft Corporation - Microsoft",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-microsoft-corporation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Dec",
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
      title: "Product Growth Marketing Internship COSGrid Networks - COSGrid Networks",
      link: "https://theglobalscholarship.org/internships/product-growth-marketing-internship-cosgrid-networks?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Oct",
      type: "N/A"
    },
    {
      title: "Embedded Verification Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/embedded-verification-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Oct",
      type: "N/A"
    },
    {
      title: "NLP Internship By EMPLAY - EMPLAY",
      link: "https://theglobalscholarship.org/internships/nlp-internship-by-emplay?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Oct",
      type: "N/A"
    },
    {
      title: "Memory Verification DEG Design Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/-memory-verification-deg-design-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Oct",
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
      title: "IIM Mumbai General MBA And MBA Supply Chain Internships By Philips Careers - Philips Careers",
      link: "https://theglobalscholarship.org/internships/iim-mumbai-general-mba-and-mba-supply-chain-internships-by-philips-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Oct",
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
      title: "Human Resources Internship By Dun And Bradstreet - Dun And Bradstreet",
      link: "https://theglobalscholarship.org/internships/human-resources-internship-by-dun-and-bradstreet?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Oct",
      type: "N/A"
    },
    {
      title: "Google Student Researcher PHD Internship 2024 - Google",
      link: "https://theglobalscholarship.org/internships/google-student-researcher-phd-internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "11-Oct",
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
      title: "Internships By Autobot Engineers India - Autobot Engineers India",
      link: "https://theglobalscholarship.org/internships/-internships-by-autobot-engineers-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Oct",
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
      title: "Data Scientist Internship By Henkal - Henkal",
      link: "https://theglobalscholarship.org/internships/data-scientist-internship-by-henkal?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Software Engineering Internship 2025 - The Trade Desk Careers",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "VSSC Internship By ISRO 2024 - Indian Space Research Organisation (ISRO)",
      link: "https://theglobalscholarship.org/internships/vssc-internship-by-isro-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "16-Sep",
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
      title: "SIMULIA Industry Consultants Internship By Dassault Systems - Dassault Systems",
      link: "https://theglobalscholarship.org/internships/simulia-industry-consultants-internship-by-dassault-systems?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Product Management Internship By Engati - Engati",
      link: "https://theglobalscholarship.org/internships/product-management-internship-by-engati?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
      type: "N/A"
    },
    {
      title: "Engineering Internship By Wabtec - Wabtec",
      link: "https://theglobalscholarship.org/internships/engineering-internship-by-wabtec?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
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
      title: "Product Management Internship By Syncron - Syncron",
      link: "https://theglobalscholarship.org/internships/product-management-internship-by-syncron?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
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
      title: "Software Internship By GE Healthcare - GE Healthcare",
      link: "https://theglobalscholarship.org/internships/software-internship-by-ge-healthcare?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "GIM MBA Internship By Philips - Philips",
      link: "https://theglobalscholarship.org/internships/gim-mba-internship-by-philips?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
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
      title: "Manage Internship By Ministry Of Agriculture and Farmers - The Ministry of Agriculture & Farmers Welfare, Govt. of India",
      link: "https://theglobalscholarship.org/internships/manage-internship-by-ministry-of-agriculture-and-farmers-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, PHD",
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
      title: "Business Analyst Internship By Rocketium - Rocketium",
      link: "https://theglobalscholarship.org/internships/business-analyst-internship-by-rocketium?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "SEBI Young Professional Internship Program 2024 - Securities & Exchange Board Of India (SEBI)",
      link: "https://theglobalscholarship.org/internships/sebi-young-professional-internship-program-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Design And Development Internship By Danaher - Danaher",
      link: "https://theglobalscholarship.org/internships/design-and-development-internship-by-danaher?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
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
      title: "Product Support Engineering Internship By Facilio - Facilio",
      link: "https://theglobalscholarship.org/internships/product-support-engineering-internship-by-facilio?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Student Research Internship By Google - Google",
      link: "https://theglobalscholarship.org/internships/student-research-internship-by-google?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Aug",
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
      title: "Aviation Research Internship By GE Aerospace - GE Aerospace",
      link: "https://theglobalscholarship.org/internships/aviation-research-internship-by-ge-aerospace?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
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
      title: "Power Electronics Intern FY24 By Garrett - Garrett",
      link: "https://theglobalscholarship.org/internships/power-electronics-intern-fy24-by-garrett?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Mechanical Engineer Internship By Applied Materials - Applied Materials",
      link: "https://theglobalscholarship.org/internships/mechanical-engineer-internship-by-applied-materials?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Production Data Operation Apprenticeship By SymphonyAI - SymphonyAI",
      link: "https://theglobalscholarship.org/internships/production-data-operation-apprenticeship-by-symphonyai?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
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
      title: "Software Engineering Internship By The Trade Desk - The Trade Desk",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-the-trade-desk?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Aug",
      type: "N/A"
    },
    {
      title: "Embedded System Internship By Microchip - Microchip Technology Inc.",
      link: "https://theglobalscholarship.org/internships/embedded-system-internship-by-microchip?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Aug",
      type: "N/A"
    },
    {
      title: "Data Internship By DNV - DNV",
      link: "https://theglobalscholarship.org/internships/data-internship-by-dnv?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Aug",
      type: "N/A"
    },
    {
      title: "Software Engineering Internship By Microsoft 2024 - Microsoft",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-microsoft-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "13-Sep",
      type: "N/A"
    },
    {
      title: "Internships By Sony Research India - Sony Research India",
      link: "https://theglobalscholarship.org/internships/internships-by-sony-research-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "N/A",
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
      title: "Product Management Internship By Engati - Engati",
      link: "https://theglobalscholarship.org/internships/product-management-internship-by-engati?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Aug",
      type: "N/A"
    },
    {
      title: "Summer Internships By Baker Hugs 2025 - Baker Hugs",
      link: "https://theglobalscholarship.org/internships/summer-internships-by-baker-hugs-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Business Transformation Consultant InternShip By IBM - IBM India Private Limited",
      link: "https://theglobalscholarship.org/internships/business-transformation-consultant-internship-by-ibm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "27-Aug",
      type: "N/A"
    },
    {
      title: "Software Engineering Internship By Microsoft - Microsoft",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-microsoft?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jul",
      type: "N/A"
    },
    {
      title: "Software Internship By GE Vernova - GE Vernova",
      link: "https://theglobalscholarship.org/internships/software-internship-by-ge-vernova?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Aug",
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
      title: "Engineering Internships By Qualcomm - Qualcomm India Private Limited",
      link: "https://theglobalscholarship.org/internships/engineering-internships-by-qualcomm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Aug",
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
      title: "Student Internship By NIT Srinagar - SERB - DST, India",
      link: "https://theglobalscholarship.org/internships/student-internship-by-nit-srinagar?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Jul",
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
      title: "Research Engineering Internship By Supra Oracles - Supra Oracles",
      link: "https://theglobalscholarship.org/internships/research-engineering-internship-by-supra-oracles?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Aug",
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
      title: "Software Engineer Internship By Revature India - Revature India",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-revature-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
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
      title: "Speech Recognition Internship By SONY - SONY India",
      link: "https://theglobalscholarship.org/internships/speech-recognition-internship-by-sony?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Jul",
      type: "N/A"
    },
    {
      title: "Google Software Engineering Internship 2025 - Google",
      link: "https://theglobalscholarship.org/internships/google-software-engineering-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Aug",
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
      title: "Non Manufacturing Internship By Micron - Micron FY24",
      link: "https://theglobalscholarship.org/internships/non-manufacturing-internship-by-micron?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Aug",
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
      title: "Cyber Security Internship By Fractal - Fractal",
      link: "https://theglobalscholarship.org/internships/cyber-security-internship-by-fractal?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Aug",
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
      title: "Data Science DT Internship By GE Aerospace - GE Aerospace",
      link: "https://theglobalscholarship.org/internships/data-science-dt-internship-by-ge-aerospace?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Aug",
      type: "N/A"
    },
    {
      title: "AI ML Internship By Pfizer - Pfizer Inc.",
      link: "https://theglobalscholarship.org/internships/ai-ml-internship-by-pfizer?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Tata Consultancy Services India Global Internship Program - Tata Consultancy Services",
      link: "https://theglobalscholarship.org/internships/tata-consultancy-services-india-global-internship-program?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
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
      title: "Software Quality Analyst Internship By Vmedulife Software - Vmedulife Software",
      link: "https://theglobalscholarship.org/internships/software-quality-analyst-internship-by-vmedulife-software?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Internship By Tata Steel 2024 - TATA Steel Downstream Products Limited",
      link: "https://theglobalscholarship.org/internships/internship-by-tata-steel-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters, Professional courses",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
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
      title: "Internships By Adobe Technology - Adobe Technology",
      link: "https://theglobalscholarship.org/internships/internships-by-adobe-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
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
      title: "Technical Internships By Intel - Intel",
      link: "https://theglobalscholarship.org/internships/technical-internships-by-intel?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "18-Aug",
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
      title: "Summer Internship BY IIT Indore - IIT Indore",
      link: "https://theglobalscholarship.org/internships/summer-internship-by-iit-indore?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "10-May",
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
      title: "Internship By AFDB - African Development Bank",
      link: "https://theglobalscholarship.org/internships/internship-by-afdb?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "07-May",
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
      title: "VRITIKA Research Internship By SERB - Science And Engineering Research Board (SERB)",
      link: "https://theglobalscholarship.org/internships/vritika-research-internship-by-serb?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "21-Apr",
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
      title: "The Research Internship By Tata Consultancy Services - Tata Consultancy Services",
      link: "https://theglobalscholarship.org/internships/the-research-internship-by-tata-consultancy-services?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "03-Jul",
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
      title: "Industrial Trainees Internship By Tata Steel - Tata Steel Downstream Products Limited",
      link: "https://theglobalscholarship.org/internships/industrial-trainees-internship-by-tata-steel?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters, Professional courses",
      stipend: "Click on \"View Details\"",
      lastDate: "03-Dec",
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
      title: "Edge Computing Developer Internship by IIT Roorkee - Indian Institute Of Technology (IIT), Roorkee",
      link: "https://theglobalscholarship.org/internships/edge-computing-developer-internship-by-iit-roorkee?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Apr",
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
      title: "Internships By Ferrari - Ferrari",
      link: "https://theglobalscholarship.org/internships/internships-by-ferrari?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
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
      title: "Programming Internship By 5th Generation Technologies - 5th Generation Technologies",
      link: "https://theglobalscholarship.org/internships/programming-internship-by-5th-generation-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
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
      title: "Human Resources Internship by Veradis Technologies - Veradis Technologies",
      link: "https://theglobalscholarship.org/internships/human-resources-internship-by-veradis-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
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
      title: "HR Internship by Corizo - Corizo",
      link: "https://theglobalscholarship.org/internships/hr-internship-by-corizo?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
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
      title: "The NVIDIA Systems Software in Deep Learning Internship - NVIDIA",
      link: "https://theglobalscholarship.org/internships/the-nvidia-systems-software-in-deep-learning-internship?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Masters",
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
      title: "Data Scientist Internship By BCG - Boston Consulting Group",
      link: "https://theglobalscholarship.org/internships/data-scientist-internship-by-bcg?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters, PHD",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
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
      title: "Summer Associate Internship By BRAIN AND COMPANY - BRAIN & COMPANY",
      link: "https://theglobalscholarship.org/internships/summer-associate-internship-by-brain-and-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Masters",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
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

export default function MastersInternships() {
  const [visibleCount, setVisibleCount] = useState(6); // Initial internships shown (5)
  const [filterType, setFilterType] = useState(''); // Remote or Onsite filter
  const [filterStipendRange, setFilterStipendRange] = useState(''); // Stipend range filter
  const [filteredInternships, setFilteredInternships] = useState(mastersInternships);

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
    let filtered = [...mastersInternships];

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

  const shouldShowLoadMore = mastersInternships.length > visibleCount;

  return (
    <> 
    <Navbar />
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold', color: '#222' }}>
          Master's Internships for Students
        </h1>

        <p style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#555', fontSize: '1.1rem' }}>
          Explore internships tailored for master's students in top tech companies. Gain hands-on experience and shape your career.
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
        <strong>Eligibility:</strong> {internship.eligibility || "N/A"}
      </p>
      <p style={cardDetail}>
        <strong>Duration:</strong> {internship.duration || "N/A"}
      </p>
              <p style={cardDetail}>
                <strong>Stipend:</strong> {internship.stipend}
              </p>
              
              <p style={cardDetail}>
                <strong>Last Date:</strong> {internship.lastDate}
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
