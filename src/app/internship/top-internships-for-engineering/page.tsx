'use client';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const engineeringInternships = [
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
      title: "Semiconductor Internship By NXP - NXP",
      link: "https://theglobalscholarship.org/internships/semiconductor-internship-by-nxp?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Apr",
      type: "1 day"
    },
    {
      title: "Internship By Valeo - Valeo",
      link: "https://theglobalscholarship.org/internships/internship-by-valeo?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Apr",
      type: "1 day"
    },
    {
      title: "Aviation Internship By GE Aerospace - GE Aerospace",
      link: "https://theglobalscholarship.org/internships/aviation-internship-by-ge-aerospace?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Apr",
      type: "1 day"
    },
    {
      title: "Technology Internship By S And P Global - S And P Global",
      link: "https://theglobalscholarship.org/internships/technology-internship-by-s-and-p-global?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Supply Chain CoE Internship By Carrier India - Carrier India",
      link: "https://theglobalscholarship.org/internships/supply-chain-coe-internship-by-carrier-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "02-Apr",
      type: "N/A"
    },
    {
      title: "EID Internship By GE Healthcare - GE Healthcare",
      link: "https://theglobalscholarship.org/internships/eid-internship-by-ge-healthcare?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "SDE Frontend Internship By Nutrabay - Nutrabay",
      link: "https://theglobalscholarship.org/internships/sde-frontend-internship-by-nutrabay?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "IT Service Support Internship By Logitech India - Logitech India",
      link: "https://theglobalscholarship.org/internships/-it-service-support-internship-by-logitech-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Engineering",
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
      title: "Software Engineering Internship By Epiq - Epiq",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-epiq?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Data Science And Analytics Internship By Carrier - Carrier",
      link: "https://theglobalscholarship.org/internships/data-science-and-analytics-internship-by-carrier?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Engineering Internship By WorkSpan - WorkSpan",
      link: "https://theglobalscholarship.org/internships/engineering-internship-by-workspan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Mar",
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
      title: "Mechanical Engineering Internship By Genrobotics - Genrobotics",
      link: "https://theglobalscholarship.org/internships/mechanical-engineering-internship-by-genrobotics?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Mar",
      type: "N/A"
    },
    {
      title: "Technical Engineer Internship By HackerEarth - HackerEarth",
      link: "https://theglobalscholarship.org/internships/technical-engineer-internship-by-hackerearth?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Software Internship By Crowdstrike - Crowdstrike",
      link: "https://theglobalscholarship.org/internships/software-internship-by-crowdstrike?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "27-Mar",
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
      title: "Engineering Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/engineering-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "27-Mar",
      type: "N/A"
    },
    {
      title: "ENG Project Internship By Rubrik - Rubrik",
      link: "https://theglobalscholarship.org/internships/eng-project-internship-by-rubrik?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Electrical College Internship By Applied Materials - Applied Materials",
      link: "https://theglobalscholarship.org/internships/electrical-college-internship-by-applied-materials?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Developer Internship By Harman Technology - Harman Technology",
      link: "https://theglobalscholarship.org/internships/developer-internship-by-harman-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Mar",
      type: "N/A"
    },
    {
      title: "Summer Internship By IIT Vadodara - IIT Vadodara",
      link: "https://theglobalscholarship.org/internships/summer-internship-by-iit-vadodara?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Mar",
      type: "N/A"
    },
    {
      title: "Connectivity Software Internship By Harman Technology - Harman Technology",
      link: "https://theglobalscholarship.org/internships/connectivity-software-internship-by-harman-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "CSE Summer Internship IIT Guwahati 2025 - IIT Guwahati",
      link: "https://theglobalscholarship.org/internships/cse-summer-internship-iit-guwahati-2025-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Mar",
      type: "N/A"
    },
    {
      title: "Biomedical Engineering Internship By GE Healthcare - GE Healthcare",
      link: "https://theglobalscholarship.org/internships/biomedical-engineering-internship-by-ge-healthcare?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Mar",
      type: "N/A"
    },
    {
      title: "Firmware Internship By Seagate Technology - Seagate Technology",
      link: "https://theglobalscholarship.org/internships/firmware-internship-by-seagate-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Mar",
      type: "N/A"
    },
    {
      title: "Embedded Software Developer Internship By MHTECHIN - MHTECHIN",
      link: "https://theglobalscholarship.org/internships/embedded-software-developer-internship-by-mhtechin?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Mar",
      type: "N/A"
    },
    {
      title: "Apprenticeship By Volvo India - Volvo India",
      link: "https://theglobalscholarship.org/internships/apprenticeship-by-volvo-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "18-Mar",
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
      title: "Software Engineer Internship By ClearFeed - ClearFeed",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-clearfeed?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Mar",
      type: "N/A"
    },
    {
      title: "Electrical Engineering Internship By GE Healthcare - GE Healthcare",
      link: "https://theglobalscholarship.org/internships/electrical-engineering-internship-by-ge-healthcare?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Summer Internship By IIT Guwahati 2025 - IIT Guwahati",
      link: "https://theglobalscholarship.org/internships/summer-internship-by-iit-guwahati-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Mar",
      type: "N/A"
    },
    {
      title: "Summer Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/summer-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Software Internship By Rapyuta Robotics - Rapyuta Robotics",
      link: "https://theglobalscholarship.org/internships/software-internship-by-rapyuta-robotics?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Engineering Internship By Harman Technology - Harman Technology",
      link: "https://theglobalscholarship.org/internships/engineering-internship-by-harman-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Feb",
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
      title: "ASIC Digital Design Internship By Synopsys - Synopsys",
      link: "https://theglobalscholarship.org/internships/asic-digital-design-internship-by-synopsys?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "AI Engineer Internship By Viga Entertainment Technology - Viga Entertainment Technology",
      link: "https://theglobalscholarship.org/internships/ai-engineer-internship-by-viga-entertainment-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
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
      title: "Testing And Validation Engineering Internship By Rolls Royce - Rolls Royce",
      link: "https://theglobalscholarship.org/internships/testing-and-validation-engineering-internship-by-rolls-royce?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Frontend Engineer Internship By Peakflo - Peakflo",
      link: "https://theglobalscholarship.org/internships/frontend-engineer-internship-by-peakflo?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Full Stack Developer Internship By Tata CLiQ - Tata CLiQ",
      link: "https://theglobalscholarship.org/internships/full-stack-developer-internship-by-tata-cliq?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "System Test Internship By Harman - Harman",
      link: "https://theglobalscholarship.org/internships/system-test-internship-by-harman?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jan",
      type: "N/A"
    },
    {
      title: "Semester Long FOSSEE Internship 2025 By IIT Bombay - IIT Bombay",
      link: "https://theglobalscholarship.org/internships/semester-long-fossee-internship-2025-by-iit-bombay?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "27-Jan",
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
      title: "Campus Internship By IQVIA - IQVIA",
      link: "https://theglobalscholarship.org/internships/campus-internship-by-iqvia?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Technical Engineer Internship By Synopsys - Synopsys",
      link: "https://theglobalscholarship.org/internships/technical-engineer-internship-by-synopsys?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Feb",
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
      title: "Java Python And C Internship By Harman - Harman",
      link: "https://theglobalscholarship.org/internships/java-python-and-c-internship-by-harman?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "22-Jan",
      type: "N/A"
    },
    {
      title: "Hardware Testing And Validation Internship By Maxwell Energy Systems - Maxwell Energy Systems",
      link: "https://theglobalscholarship.org/internships/hardware-testing-and-validation-internship-by-maxwell-energy-systems?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Feb",
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
      title: "Embedded Systems And Electronics Internship By Acceleration Robotics - Acceleration Robotics",
      link: "https://theglobalscholarship.org/internships/embedded-systems-and-electronics-internship-by-acceleration-robotics?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Technology Consultant Apprenticeship By Microsoft India - Microsoft India",
      link: "https://theglobalscholarship.org/internships/technology-consultant-apprenticeship-by-microsoft-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Technology Specialist Apprenticeship By Microsoft - Microsoft",
      link: "https://theglobalscholarship.org/internships/technology-specialist-apprenticeship-by-microsoft?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Software Internship By Accio Robotics - Accio Robotics",
      link: "https://theglobalscholarship.org/internships/software-internship-by-accio-robotics?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Supply Chain Internship By NOSH - NOSH",
      link: "https://theglobalscholarship.org/internships/supply-chain-internship-by-nosh?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
      type: "N/A"
    },
    {
      title: "Robotics Software Internship By Unbox Robotics - Unbox",
      link: "https://theglobalscholarship.org/internships/robotics-software-internship-by-unbox-robotics?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Feb",
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
      title: "Customer Experience Engineering Internship By Microsoft - Microsoft",
      link: "https://theglobalscholarship.org/internships/customer-experience-engineering-internship-by-microsoft?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jan",
      type: "N/A"
    },
    {
      title: "Manufacturing Engineering Internship By Ferrari - Ferrari",
      link: "https://theglobalscholarship.org/internships/manufacturing-engineering-internship-by-ferrari?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jan",
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
      title: "Internship By Regal Rexnord India - Regal Rexnord India",
      link: "https://theglobalscholarship.org/internships/internship-by-regal-rexnord-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "IT Support Internship By Demandbase - Demandbase",
      link: "https://theglobalscholarship.org/internships/it-support-internship-by-demandbase?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Backend Engineering Internship By FamPay - FamPay",
      link: "https://theglobalscholarship.org/internships/backend-engineering-internship-by-fampay?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Compiler Software Engineer Internship By McKesson - McKesson",
      link: "https://theglobalscholarship.org/internships/compiler-software-engineer-internship-by-mckesson?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jan",
      type: "N/A"
    },
    {
      title: "Content Internship By Groww - Groww",
      link: "https://theglobalscholarship.org/internships/content-internship-by-groww?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "Cyber Defence Analyst Internship By Groww - Groww",
      link: "https://theglobalscholarship.org/internships/cyber-defence-analyst-internship-by-groww?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jan",
      type: "N/A"
    },
    {
      title: "GRC Internship By Groww - Groww",
      link: "https://theglobalscholarship.org/internships/grc-internship-by-groww?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "R And D Embedded Electronics Internship By ideaForge - ideaForge",
      link: "https://theglobalscholarship.org/internships/r-and-d-embedded-electronics-internship-by-ideaforge?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Software Engineering Internship By Carrier - Carrier",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-carrier?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Software Engineering Internship By Highspot - Highspot",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-highspot?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Firmware Engineer Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/firmware-engineer-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Platform Engineer Internship By CSG - CSG",
      link: "https://theglobalscholarship.org/internships/platform-engineer-internship-by-csg?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Technical Engineering Internship By Synopsys - Synopsys",
      link: "https://theglobalscholarship.org/internships/technical-engineering-internship-by-synopsys?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Summer Internship By Fractal - Fractal",
      link: "https://theglobalscholarship.org/internships/summer-internship-by-fractal?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "16-Dec",
      type: "N/A"
    },
    {
      title: "Frontend Engineering Internship By Codingal - Codingal",
      link: "https://theglobalscholarship.org/internships/frontend-engineering-internship-by-codingal?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Mar",
      type: "N/A"
    },
    {
      title: "Data Engineering Internship By PayU - PayU",
      link: "https://theglobalscholarship.org/internships/data-engineering-internship-by-payu?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Winter Internship By Anna University - Anna University",
      link: "https://theglobalscholarship.org/internships/winter-internship-by-anna-university?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "22-Dec",
      type: "N/A"
    },
    {
      title: "Data Analytics Internship By GE Appliances - GE Appliances",
      link: "https://theglobalscholarship.org/internships/data-analytics-internship-by-ge-appliances?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Software Development Engineer Internship By Autodesk - Autodesk",
      link: "https://theglobalscholarship.org/internships/software-development-engineer-internship-by-autodesk?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Engineering Internship By VIAVI - VIAVI",
      link: "https://theglobalscholarship.org/internships/engineering-internship-by-viavi?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Data Science Internship By Shadi.com - Shadi.com",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-shadi.com?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Mechanical Engineering Internship By Wabtec - Wabtec",
      link: "https://theglobalscholarship.org/internships/mechanical-engineering-internship-by-wabtec?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Technical Internship By Synopsys - Synopsys",
      link: "https://theglobalscholarship.org/internships/technical-internship-by-synopsys?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Jan",
      type: "N/A"
    },
    {
      title: "Engineering Internship By Regal Rexnord - Regal Rexnord",
      link: "https://theglobalscholarship.org/internships/engineering-internship-by-regal-rexnord?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Technology Internship By Booking Holdings - Booking Holdings",
      link: "https://theglobalscholarship.org/internships/technology-internship-by-booking-holdings?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Mechanical Design Engineer Internship By Apple - Apple",
      link: "https://theglobalscholarship.org/internships/mechanical-design-engineer-internship-by-apple?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Dec",
      type: "N/A"
    },
    {
      title: "Android HMI Engineering Internship By Harman - Harman",
      link: "https://theglobalscholarship.org/internships/android-hmi-engineering-internship-by-harman?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Dec",
      type: "N/A"
    },
    {
      title: "Structural Design Internship By Airbus - Airbus",
      link: "https://theglobalscholarship.org/internships/structural-design-internship-by-airbus?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Security Engineer Cloud Infrastructure Internship By Poshmark - Poshmark",
      link: "https://theglobalscholarship.org/internships/security-engineer-cloud-infrastructure-internship-by-poshmark?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
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
      title: "Exposure Modelling Summer Internship By Moodys - Moodys",
      link: "https://theglobalscholarship.org/internships/exposure-modelling-summer-internship-by-moodys?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Engineering Internship By Crio Do - Crio Do",
      link: "https://theglobalscholarship.org/internships/engineering-internship-by-crio-do?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
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
      title: "Scribe Design Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/scribe-design-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Software Engineering ML Internship By Apple - Apple",
      link: "https://theglobalscholarship.org/internships/software-engineering-ml-internship-by-apple?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Mechanical Engineering Internship By Rolls Royce - Rolls Royce",
      link: "https://theglobalscholarship.org/internships/mechanical-engineering-internship-by-rolls-royce?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Dec",
      type: "N/A"
    },
    {
      title: "Audio Visual Engineer Internship By WeWork India - WeWork India",
      link: "https://theglobalscholarship.org/internships/audio-visual-engineer-internship-by-wework-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
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
      title: "Product Engineer Internship By Crio Do - Crio Do",
      link: "https://theglobalscholarship.org/internships/product-engineer-internship-by-crio-do?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "MaskTech Systems Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/masktech-systems-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Software Engineering Internship By Rockwell Automation - Rockwell Automation",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-rockwell-automation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Web Development Software Engineer Internship By Poshmark - Poshmark",
      link: "https://theglobalscholarship.org/internships/web-development-software-engineer-internship-by-poshmark?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Software Engineer Internship By Applied Materials - Applied Materials",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-applied-materials?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "Software Development Engineer Internship By CoinSwitch - CoinSwitch",
      link: "https://theglobalscholarship.org/internships/software-development-engineer-internship-by-coinswitch?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "Industrial Inspection Technology Internship By GE Aviation - GE Aviation",
      link: "https://theglobalscholarship.org/internships/industrial-inspection-technology-internship-by-ge-aviation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "Electric Vehicles Internship By Websecure AI - Websecure AI",
      link: "https://theglobalscholarship.org/internships/electric-vehicles-internship-by-websecure-ai?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Dec",
      type: "N/A"
    },
    {
      title: "Aerodynamics Internship By Airbus Careers - Airbus Careers",
      link: "https://theglobalscholarship.org/internships/aerodynamics-internship-by-airbus-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Internships By IBM India Private Limited - IBM India Private Limited",
      link: "https://theglobalscholarship.org/internships/-internships-by-ibm-india-private-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, PHD, Professional courses",
      stipend: "Click on \"View Details\"",
      lastDate: "06-Dec",
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
      title: "Operations Internship By SLB Careers - SLB Careers",
      link: "https://theglobalscholarship.org/internships/operations-internship-by-slb-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
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
      title: "Information Technology Internship By SLB Careers - SLB Careers",
      link: "https://theglobalscholarship.org/internships/information-technology-internship-by-slb-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Software Engineer Summer Internship By Nbyula Careers - Nbyula Careers",
      link: "https://theglobalscholarship.org/internships/software-engineer-summer-internship-by-nbyula-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Dec",
      type: "N/A"
    },
    {
      title: "Functional Verification Technical Internship By Synopsys - Synopsys",
      link: "https://theglobalscholarship.org/internships/functional-verification-technical-internship-by-synopsys?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Product Development Engineer Internship By Razorpay - Razorpay",
      link: "https://theglobalscholarship.org/internships/product-development-engineer-internship-by-razorpay?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Quant Internship By CME Group - CME Group",
      link: "https://theglobalscholarship.org/internships/quant-internship-by-cme-group?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Digital Technology Internship By General Electric - General Electric",
      link: "https://theglobalscholarship.org/internships/digital-technology-internship-by-general-electric?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Nov",
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
      title: "Software Development Internship By NXP Semiconductors - NXP Semiconductors",
      link: "https://theglobalscholarship.org/internships/software-development-internship-by-nxp-semiconductors?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Engineering Internship By GE Vernova - GE Vernova",
      link: "https://theglobalscholarship.org/internships/engineering-internship-by-ge-vernova?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Internship By QUALITROL - QUALITROL",
      link: "https://theglobalscholarship.org/internships/internship-by-qualitrol?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Nov",
      type: "N/A"
    },
    {
      title: "Product Management Internship By INDmoney - INDmoney",
      link: "https://theglobalscholarship.org/internships/product-management-internship-by-indmoney?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Nov",
      type: "N/A"
    },
    {
      title: "Embedded Engineer Internship By Futuristic Labs - Futuristic Labs",
      link: "https://theglobalscholarship.org/internships/embedded-engineer-internship-by-futuristic-labs?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Power Electronics Internship By General Electric - General Electric",
      link: "https://theglobalscholarship.org/internships/power-electronics-internship-by-general-electric?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Nov",
      type: "N/A"
    },
    {
      title: "Enterprise Applications Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/enterprise-applications-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Software Engineer Summer Internship By Coinbase - Coinbase",
      link: "https://theglobalscholarship.org/internships/software-engineer-summer-internship-by-coinbase?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Systems And Machine Learning Research Internship By IISc - IISC",
      link: "https://theglobalscholarship.org/internships/systems-and-machine-learning-research-internship-by-iisc?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Oct",
      type: "N/A"
    },
    {
      title: "IOCL Winter Internship 2024 - Indian Oil Corporation Ltd (IOCL)",
      link: "https://theglobalscholarship.org/internships/iocl-winter-internship-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
      type: "N/A"
    },
    {
      title: "DT Internship By GE Aviation - GE Aviation",
      link: "https://theglobalscholarship.org/internships/dt-internship-by-ge-aviation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "Summer Mechanical Internship By Baxter Careers - Baxter Careers",
      link: "https://theglobalscholarship.org/internships/summer-mechanical-internship-by-baxter-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "Data Science Internship By GE Aviation - GE Aviation",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-ge-aviation?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Software Engineering Internship By McAfee - McAfee",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-mcafee?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "Computer Science Engineering Internship By Wabtec Careers - Wabtec Careers",
      link: "https://theglobalscholarship.org/internships/computer-science-engineering-internship-by-wabtec-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
      type: "N/A"
    },
    {
      title: "Software Engineer Internship By Kreativstorm 2024 - Kreativstorm",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-kreativstorm-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Nov",
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
      title: "Summer Systems Internship By Baxter - Baxter",
      link: "https://theglobalscholarship.org/internships/summer-systems-internship-by-baxter?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "FOSSEE Winter Internship 2024 - Free/Libre and Open Source Software for Education (FOSSEE)",
      link: "https://theglobalscholarship.org/internships/fossee-winter-internship-2024-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Oct",
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
      title: "Google Hardware Engineering Internship 2025 - Google",
      link: "https://theglobalscholarship.org/internships/google-hardware-engineering-internship-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Nov",
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
      title: "Telematics Internship By Harman Samsung Company - Harman Samsung Company",
      link: "https://theglobalscholarship.org/internships/telematics-internship-by-harman-samsung-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Nov",
      type: "N/A"
    },
    {
      title: "Renewable Energy Internship By ICF Careers - ICF Careers",
      link: "https://theglobalscholarship.org/internships/renewable-energy-internship-by-icf-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Nov",
      type: "N/A"
    },
    {
      title: "Silicon Engineering Internship By Microsoft - Microsoft",
      link: "https://theglobalscholarship.org/internships/silicon-engineering-internship-by-microsoft?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Apr",
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
      title: "Engineering Internship By Wabtec Careers - Wabtec Careers",
      link: "https://theglobalscholarship.org/internships/engineering-internship-by-wabtec-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Oct",
      type: "N/A"
    },
    {
      title: "Software Development Engineer Internship By HackerRank Careers - HackerRank Careers",
      link: "https://theglobalscholarship.org/internships/software-development-engineer-internship-by-hackerrank-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Oct",
      type: "N/A"
    },
    {
      title: "Research Quantum Internship By IBM India Private Limited - IBM India Private Limited",
      link: "https://theglobalscholarship.org/internships/research-quantum-internship-by-ibm-india-private-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Mechanical Engineering Internship By Valeo Careers - Valeo Careers",
      link: "https://theglobalscholarship.org/internships/mechanical-engineering-internship-by-valeo-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Data Analytics Internship By GE Appliances - GE Appliances",
      link: "https://theglobalscholarship.org/internships/-data-analytics-internship-by-ge-appliances?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Oct",
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
      title: "Software Engineering Internship By The Trade Desk - The Trade Desk",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-the-trade-desk?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Engineering Internship By LAM Research - LAM Research",
      link: "https://theglobalscholarship.org/internships/engineering-internship-by-lam-research?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Oct",
      type: "N/A"
    },
    {
      title: "Big Data Engineer Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/big-data-engineer-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Oct",
      type: "N/A"
    },
    {
      title: "MaskTech Systems Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/masktech-systems-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Oct",
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
      title: "Software Engineering Internship By MSCI - MSCI",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-msci?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Acceleration Center Products And Technology Internship By PwC 2025 - PwC",
      link: "https://theglobalscholarship.org/internships/acceleration-center-products-and-technology-internship-by-pwc-2025?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Oct",
      type: "N/A"
    },
    {
      title: "Acceleration Center Products And Technology Internship By PwC 2025 - PwC",
      link: "https://theglobalscholarship.org/internships/acceleration-center-products-and-technology-internship-by-pwc-2025-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
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
      title: "Data Science Engineer Internship By Micron Technology - Micron Technology",
      link: "https://theglobalscholarship.org/internships/data-science-engineer-internship-by-micron-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Oct",
      type: "N/A"
    },
    {
      title: "GIS Engineer Internship By Edgemap Software Private Limited - Edgemap Software Private Limited",
      link: "https://theglobalscholarship.org/internships/gis-engineer-internship-by-edgemap-software-private-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Mechanical And Electrical Engineering Internship By Wabtec - Wabtec",
      link: "https://theglobalscholarship.org/internships/mechanical-and-electrical-engineering-internship-by-wabtec?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Oct",
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
      title: "Software Engineering Research Internship By IBM India Private Limited - IBM India Private Limited",
      link: "https://theglobalscholarship.org/internships/software-engineering-research-internship-by-ibm-india-private-limited?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Oct",
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
      title: "Product Engineering Internship By Wabtec - Wabtec",
      link: "https://theglobalscholarship.org/internships/product-engineering-internship-by-wabtec?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "DT Internship By GE Aerospace - GE Aerospace",
      link: "https://theglobalscholarship.org/internships/dt-internship-by-ge-aerospace?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "Remote Monitoring Internship By Clean Inspire Energy - Clean Inspire Energy",
      link: "https://theglobalscholarship.org/internships/remote-monitoring-internship-by-clean-inspire-energy?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
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
      title: "DT Internship By GE Appliances - GE Appliances",
      link: "https://theglobalscholarship.org/internships/dt-internship-by-ge-appliances?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Oct",
      type: "N/A"
    },
    {
      title: "Embedded C Kernel Internship By Harman Samsung Company - Harman Samsung Company",
      link: "https://theglobalscholarship.org/internships/embedded-c-kernel-internship-by-harman-samsung-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "05-Oct",
      type: "N/A"
    },
    {
      title: "Technology Services Internship By We Work India - We Work India",
      link: "https://theglobalscholarship.org/internships/technology-services-internship-by-we-work-india?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Mechanical Engineering Internship By Wabtec - Wabtec Corporation",
      link: "https://theglobalscholarship.org/internships/mechanical-engineering-internship-by-wabtec?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Information Technology Internship By Hilton Careers - Hilton Careers",
      link: "https://theglobalscholarship.org/internships/information-technology-internship-by-hilton-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Data Analytics VIT Vellore Internship By Uber Careers - Uber Careers",
      link: "https://theglobalscholarship.org/internships/data-analytics-vit-vellore-internship-by-uber-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "QA Engineering Internship By Sense Careers - Sense Careers",
      link: "https://theglobalscholarship.org/internships/qa-engineering-internship-by-sense-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Graduate Internship By ABB Careers - ABB Careers",
      link: "https://theglobalscholarship.org/internships/graduate-internship-by-abb-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Sep",
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
      title: "IIIT Hyderabad Software Engineering Internship By Atlassian - Atlassian",
      link: "https://theglobalscholarship.org/internships/iiit-hyderabad-software-engineering-internship-by-atlassian?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "06-Sep",
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
      title: "Data Science Internship By United Airlines - United Airlines",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-united-airlines?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Functional Verification Internship By Synopsys Careers - Synopsys Careers",
      link: "https://theglobalscholarship.org/internships/functional-verification-internship-by-synopsys-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Sep",
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
      title: "Design Engineering Internship By Cadence Design Systems - Cadence Design Systems (CDS)",
      link: "https://theglobalscholarship.org/internships/design-engineering-internship-by-cadence-design-systems?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Customer Success Internship By Rocketlane Careers - Rocketlane Careers",
      link: "https://theglobalscholarship.org/internships/customer-success-internship-by-rocketlane-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Software Engineer Internship By Zeotap Careers - Zeotap Careers",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-zeotap-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Sep",
      type: "N/A"
    },
    {
      title: "Hardware Internship By Valeo Careers - Valeo Careers",
      link: "https://theglobalscholarship.org/internships/hardware-internship-by-valeo-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Sep",
      type: "N/A"
    },
    {
      title: "Lab Testing Internship By Harman Samsung Company - Harman Samsung Company",
      link: "https://theglobalscholarship.org/internships/lab-testing-internship-by-harman-samsung-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Sep",
      type: "N/A"
    },
    {
      title: "Information Technology Internship By Aveva Careers - Aveva Careers",
      link: "https://theglobalscholarship.org/internships/information-technology-internship-by-aveva-careers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Sep",
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
      title: "Software Developer Internship By Aveva - Aveva Careers",
      link: "https://theglobalscholarship.org/internships/software-developer-internship-by-aveva?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
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
      title: "Apprentice Application Internship By TRUMPF Pvt Ltd - TRUMPF (India) Pvt Ltd",
      link: "https://theglobalscholarship.org/internships/apprentice-application-internship-by-trumpf-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Diploma, Engineering",
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
      title: "Full Stack Engineering Internship By Vance - Vance",
      link: "https://theglobalscholarship.org/internships/full-stack-engineering-internship-by-vance?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "System Testing Internship By Irdeto - Irdeto",
      link: "https://theglobalscholarship.org/internships/system-testing-internship-by-irdeto?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Electrical Quality Control Internship By GE Vernova - GE Vernova",
      link: "https://theglobalscholarship.org/internships/electrical-quality-control-internship-by-ge-vernova?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Sep",
      type: "N/A"
    },
    {
      title: "Data Science Internship By Bureau - Bureau",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-bureau?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
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
      title: "DevOps And Cybersecurity Internship By GoComet - GoComet",
      link: "https://theglobalscholarship.org/internships/devops-and-cybersecurity-internship-by-gocomet?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Aug",
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
      title: "Software Engineering Intern By Poshmark - Poshmark Careers",
      link: "https://theglobalscholarship.org/internships/software-engineering-intern-by-poshmark?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "22-Aug",
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
      title: "Artificial Intelligence Inshipship By Uptitude - Uptitude Cloud Private Limited",
      link: "https://theglobalscholarship.org/internships/artificial-intelligence-inshipship-by-uptitude?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Aug",
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
      title: "Hardware Engineering Internship By Google - Google",
      link: "https://theglobalscholarship.org/internships/hardware-engineering-internship-by-google?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "13-Aug",
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
      title: "Software Engineer Internship By Allvue Systems - Allvue Systems",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-allvue-systems?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Design Engineering Internship By Cadence Design System - Cadence Design Systems",
      link: "https://theglobalscholarship.org/internships/design-engineering-internship-by-cadence-design-system?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Data Science Internship By iNeuron - iNeuron",
      link: "https://theglobalscholarship.org/internships/data-science-internship-by-ineuron?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Aug",
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
      title: "Software Engineer Internship By Zeotap - Zeotap",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-zeotap?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Aug",
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
      title: "Software Engineering Internship By Salesforce - Salesforce, Inc.",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-salesforce?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "11-Aug",
      type: "N/A"
    },
    {
      title: "Aviation Digital Technology Internship By GE Aerospace - GE Aerospace",
      link: "https://theglobalscholarship.org/internships/aviation-digital-technology-internship-by-ge-aerospace?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Aug",
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
      title: "Product Analyst Internship By DIGITAP - DIGITAP",
      link: "https://theglobalscholarship.org/internships/product-analyst-internship-by-digitap?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-Aug",
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
      title: "Data Management Internship By DNV - DNV Bangalore",
      link: "https://theglobalscholarship.org/internships/data-management-internship-by-dnv?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Aug",
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
      title: "Backend Engineering Internship By Epifi Technologies - Epifi Technologies",
      link: "https://theglobalscholarship.org/internships/backend-engineering-internship-by-epifi-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
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
      title: "Software Engineer Internship By Cyncly - Cyncly",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-cyncly?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Associate Cloud Engineer Internship By BalckBerry - BalckBerry",
      link: "https://theglobalscholarship.org/internships/associate-cloud-engineer-internship-by-balckberry?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Aug",
      type: "N/A"
    },
    {
      title: "Research And Development Internship By ZOHO - ZOHO Company",
      link: "https://theglobalscholarship.org/internships/research-and-development-internship-by-zoho?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "12-Aug",
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
      title: "Validation Engineering Internship By Intel - Intel",
      link: "https://theglobalscholarship.org/internships/validation-engineering-internship-by-intel?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "02-Jul",
      type: "N/A"
    },
    {
      title: "Data Center And Artificial Intelligence Internship Group By Intel - Intel",
      link: "https://theglobalscholarship.org/internships/data-center-and-artificial-intelligence-internship-group-by-intel?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Jul",
      type: "N/A"
    },
    {
      title: "Embedded Software Engineer Internship By HyperHorizon - HyperHorizon",
      link: "https://theglobalscholarship.org/internships/embedded-software-engineer-internship-by-hyperhorizon?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Jul",
      type: "N/A"
    },
    {
      title: "Internships By AIRBUS 2024 - AIRBUS Careers",
      link: "https://theglobalscholarship.org/internships/internships-by-airbus-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
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
      title: "Wireless Communication Engineer Internship By Oracle - Oracle",
      link: "https://theglobalscholarship.org/internships/wireless-communication-engineer-internship-by-oracle-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jun",
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
      title: "Data Sciences Internship By Target Company - Target Company",
      link: "https://theglobalscholarship.org/internships/data-sciences-internship-by-target-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Sep",
      type: "N/A"
    },
    {
      title: "Software Engineering Internship By Harman Samsung Company - Harman Samsung Company",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-harman-samsung-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
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
      title: "Robotics Validation Internship By UNBOX - UNBOX Pvt Ltd",
      link: "https://theglobalscholarship.org/internships/robotics-validation-internship-by-unbox?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "10-Oct",
      type: "N/A"
    },
    {
      title: "Software Development Engineer Internship By Razorpay 2024 - Razorpay Software Private Limited",
      link: "https://theglobalscholarship.org/internships/software-development-engineer-internship-by-razorpay-2024?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Sep",
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
      title: "Software Engineer Internship By INDmoney - INDmoney",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-indmoney?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
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
      title: "Machine Learning Engineer Internship By Marvell - Marvell",
      link: "https://theglobalscholarship.org/internships/machine-learning-engineer-internship-by-marvell?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Data Science And AI Engineer Internship By Frost And Sullivan - Frost & Sullivan",
      link: "https://theglobalscholarship.org/internships/data-science-and-ai-engineer-internship-by-frost-and-sullivan?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
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
      title: "BTech MTech Internship By Philips - Philips",
      link: "https://theglobalscholarship.org/internships/btech-mtech-internship-by-philips?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "QA Tester Internship By Twinleaves - Twinleaves",
      link: "https://theglobalscholarship.org/internships/qa-tester-internship-by-twinleaves?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
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
      title: "Power Plus Trainee Internship By Hitachi Energy - Hitachi Energy",
      link: "https://theglobalscholarship.org/internships/power-plus-trainee-internship-by-hitachi-energy?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, Medical",
      stipend: "Click on \"View Details\"",
      lastDate: "17-Jun",
      type: "N/A"
    },
    {
      title: "Technical Internship By Keysight Technologies - Keysight Technologies",
      link: "https://theglobalscholarship.org/internships/technical-internship-by-keysight-technologies?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jul",
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
      title: "Internships By Danaher - Danaher",
      link: "https://theglobalscholarship.org/internships/internships-by-danaher?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
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
      title: "Software Development Engineering Internship By Zluri - Zluri Company",
      link: "https://theglobalscholarship.org/internships/software-development-engineering-internship-by-zluri?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
      type: "N/A"
    },
    {
      title: "Software Engineer Internship By IBM - International Business Machines (IBM)",
      link: "https://theglobalscholarship.org/internships/software-engineer-internship-by-ibm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "17-Jun",
      type: "N/A"
    },
    {
      title: "Software Engineering Internship By Thomson Reuters - Thomson Reuters",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-thomson-reuters?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
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
      title: "Information Technology Internship By SARB - South African Reserve Bank",
      link: "https://theglobalscholarship.org/internships/information-technology-internship-by-sarb?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "30-May",
      type: "N/A"
    },
    {
      title: "GET STEP Internship By Maruti Suzuki - Maruti Suzuki",
      link: "https://theglobalscholarship.org/internships/get-step-internship-by-maruti-suzuki?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Internships By Harman Samsung Company - Harman Samsung Company",
      link: "https://theglobalscholarship.org/internships/internships-by-harman-samsung-company?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Generative AI Internship By S And P Global - S & P Global",
      link: "https://theglobalscholarship.org/internships/generative-ai-internship-by-s-and-p-global?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Aerospace And Defence Internship By National Instruments - National Instruments",
      link: "https://theglobalscholarship.org/internships/aerospace-and-defence-internship-by-national-instruments?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
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
      title: "Technical Internship By Siemens Healthneers - Siemens Healthcare Private Limited",
      link: "https://theglobalscholarship.org/internships/technical-internship-by-siemens-healthneers?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
      type: "N/A"
    },
    {
      title: "Interim Engineering Intern By Qualcomm - Qualcomm India Private Limited",
      link: "https://theglobalscholarship.org/internships/interim-engineering-intern-by-qualcomm?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "17-Jun",
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
      title: "Internship By IIT Patna - IIT Patna",
      link: "https://theglobalscholarship.org/internships/internship-by-iit-patna?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "20-May",
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
      title: "Cloud Engineering Internship By Motorola Solutions - Motorola Solutions",
      link: "https://theglobalscholarship.org/internships/cloud-engineering-internship-by-motorola-solutions-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "23-Jun",
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
      title: "Engineering Internship By Qualcomm PVT LTD - Qualcomm India PVT LTD",
      link: "https://theglobalscholarship.org/internships/engineering-internship-by-qualcomm-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "22-Jul",
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
      title: "Research Internship By IIIT Bangalore - IIIT Bangalore",
      link: "https://theglobalscholarship.org/internships/research-internship-by-iiit-bangalore?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Apr",
      type: "N/A"
    },
    {
      title: "Insurance Assessment Internship By IIIT Guwahati - IIIT Guwahati",
      link: "https://theglobalscholarship.org/internships/insurance-assessment-internship-by-iiit-guwahati?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "28-Apr",
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
      title: "Data Engineering Internship By Intel - Intel",
      link: "https://theglobalscholarship.org/internships/data-engineering-internship-by-intel?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-May",
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
      title: "Graduate Internship By Intel - Intel",
      link: "https://theglobalscholarship.org/internships/graduate-internship-by-intel?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-May",
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
      title: "Technical Internship By Vedam Labs - Vedam Labs",
      link: "https://theglobalscholarship.org/internships/technical-internship-by-vedam-labs?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Aug",
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
      title: "Research Internship By Rethinking The Future - Rethinking The Future",
      link: "https://theglobalscholarship.org/internships/research-internship-by-rethinking-the-future?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "15-Jul",
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
      title: "Software Engineering Internship By Nbyula - Nbyula",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-nbyula?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
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
      title: "LPSC Internship By ISRO - Indian Space Research Organisation(ISRO)",
      link: "https://theglobalscholarship.org/internships/lpsc-internship-by-isro?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering, PHD",
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
      title: "Project Coordination Development S Class Internship By Mercedes Benz - Mercedes-Benz AG",
      link: "https://theglobalscholarship.org/internships/project-coordination-development-s-class-internship-by-mercedes-benz?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Jun",
      type: "N/A"
    },
    {
      title: "Project Coordination Development S Class And EVA2 Internship By Mercedes Benz - Mercedes-Benz",
      link: "https://theglobalscholarship.org/internships/project-coordination-development-s-class-and-eva2-internship-by-mercedes-benz?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Jun",
      type: "N/A"
    },
    {
      title: "Gasoline Engine Development Internship By Mercedes Benz - Mercedes-Benz AG",
      link: "https://theglobalscholarship.org/internships/gasoline-engine-development-internship-by-mercedes-benz?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "25-Jun",
      type: "N/A"
    },
    {
      title: "Software Engineering Internship By Fortune Brand Innovations - Fortune Brand Innovations",
      link: "https://theglobalscholarship.org/internships/software-engineering-internship-by-fortune-brand-innovations?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Internships By Philips - Philips",
      link: "https://theglobalscholarship.org/internships/internships-by-philips?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "30-Jun",
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
      title: "Graphic Design Internship By Hike - Hike",
      link: "https://theglobalscholarship.org/internships/graphic-design-internship-by-hike?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
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
      title: "Market Research And Analysis Internship By VEMC - Vijay Engineering & Machinery Co.",
      link: "https://theglobalscholarship.org/internships/market-research-and-analysis-internship-by-vemc?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "14-Apr",
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
      title: "ICE Internship By Mercedes Benz - Mercedes Benz",
      link: "https://theglobalscholarship.org/internships/ice-internship-by-mercedes-benz?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
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
      title: "Figma UI UX Design Internship by Shripriti Educational and IT HUB AICTE - AICTE",
      link: "https://theglobalscholarship.org/internships/figma-ui-ux-design-internship-by-shripriti-educational-and-it-hub-aicte?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "15-May",
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
      title: "Internship by Cadence Design Systems - Cadence Design Systems",
      link: "https://theglobalscholarship.org/internships/internship-by-cadence-design-systems?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "22-Jul",
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
      title: "Internships By Apple - Apple",
      link: "https://theglobalscholarship.org/internships/internships-by-apple?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Research Internship by GE Vernova - GE Vernova",
      link: "https://theglobalscholarship.org/internships/research-internship-by-ge-vernova?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
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
      title: "Data Scientist Internship By Sequentia - Sequentia",
      link: "https://theglobalscholarship.org/internships/data-scientist-internship-by-sequentia?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "PCB Design Internship By Qmax systems - Qmax systems",
      link: "https://theglobalscholarship.org/internships/pcb-design-internship-by-qmax-systems?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Embedded Systems Internship By Qmax systems - Qmax systems",
      link: "https://theglobalscholarship.org/internships/embedded-systems-internship-by-qmax-systems?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Internships By Mehta Infosoft Pvt Ltd - Mehta Infosoft Pvt Ltd",
      link: "https://theglobalscholarship.org/internships/internships-by-mehta-infosoft-pvt-ltd?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Energy Solutions Internship by SPZ Solutions - SPZ Solutions",
      link: "https://theglobalscholarship.org/internships/energy-solutions-internship-by-spz-solutions?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
      type: "N/A"
    },
    {
      title: "Process Engineer Internship by Plug Power Inc - Plug Power Inc",
      link: "https://theglobalscholarship.org/internships/process-engineer-internship-by-plug-power-inc?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Mechanical Engineering Internship by JetAvi - JetAvi",
      link: "https://theglobalscholarship.org/internships/mechanical-engineering-internship-by-jetavi?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Internships By Mercedes Benz - The Mercedes-Benz Group",
      link: "https://theglobalscholarship.org/internships/-internships-by-mercedes-benz?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "01-Jun",
      type: "N/A"
    },
    {
      title: "Internships By Adtran - Adtran Careers",
      link: "https://theglobalscholarship.org/internships/-internships-by-adtran?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
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
      title: "Internships By Seagate Technology - Seagate Technology",
      link: "https://theglobalscholarship.org/internships/internships-by-seagate-technology?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "26-Jun",
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
      title: "IBM Internship hiring 2024 - IBM India",
      link: "https://theglobalscholarship.org/internships/ibm-internship-hiring-2024-?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Aug",
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
      title: "The internship by ShopClues - ShopClues India",
      link: "https://theglobalscholarship.org/internships/the-internship-by-shopclues?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "DigiLocker Internship Program - DigiLocker",
      link: "https://theglobalscholarship.org/internships/digilocker-internship-program?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Infrastructure Internship by Synopsys - Synopsys",
      link: "https://theglobalscholarship.org/internships/-infrastructure-internship-by-synopsys?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
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
      title: "Graphic Design Internship by Airslide - Airslide",
      link: "https://theglobalscholarship.org/internships/graphic-design-internship-by-airslide?source=main",
      duration: "Click on \"View Details\"",
      isRemote: false,
      eligibility: "Engineering",
      stipend: "Click on \"View Details\"",
      lastDate: "31-Dec",
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
    }
  ];
 

export default function EngineeringInternships() {
  const [visibleCount, setVisibleCount] = useState(6); // Initial internships shown (5)
  const [filterType, setFilterType] = useState(''); // Remote or Onsite filter
  const [filterStipendRange, setFilterStipendRange] = useState(''); // Stipend range filter
  const [filteredInternships, setFilteredInternships] = useState(engineeringInternships);

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
    let filtered = [...engineeringInternships];

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

  const shouldShowLoadMore = engineeringInternships.length > visibleCount;

  return (
    <> 
    <Navbar />
    <Layout>
      <div style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold', color: '#222' }}>
          Engineering Internships for Students
        </h1>

        <p style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#555', fontSize: '1.1rem' }}>
          Discover top internships offered by leading companies in the field of engineering. Apply today!
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
              {/*<p style={cardDescription}>{internship.description}</p>*/}
              <p style={cardDetail}>
                <strong>Stipend:</strong> {internship.stipend}
              </p>
              <p style={cardDetail}>
        <strong>Eligibility:</strong> {internship.eligibility || "N/A"}
      </p>
      <p style={cardDetail}>
        <strong>Duration:</strong> {internship.duration || "N/A"}
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
