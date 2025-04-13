// src/data.ts

export type ItemType = 'Scholarship' | 'Internship' | 'Loan';

export interface BaseItem {
  title: string;
  description: string;
  lastDate: string;
  link: string;
  type: ItemType;
}

export interface InternshipItem extends BaseItem {
  duration: string;
  stipend: string;
  isRemote: boolean;
}

export interface LoanItem extends BaseItem {
  amount: string;
  interestRate: string;
  eligibility: string;
}

export interface ScholarshipItem extends BaseItem {
  amount: string;
}

export type Item = InternshipItem | LoanItem | ScholarshipItem;

// ----------------------------
// 🧩 Internships
// ----------------------------

export const internships: InternshipItem[] = [
  {
    title: 'Software Engineering Intern - Google',
    description: 'As a Software Engineering Intern at Google, you’ll work on challenging projects that impact millions of users worldwide.',
    duration: '12 weeks',
    stipend: '₹80,000/month',
    lastDate: 'May 31, 2025',
    link: 'https://careers.google.com/jobs/results/12345678-software-engineering-intern/',
    type: 'Internship',
    isRemote: true,
  },
  // ... other internships
];

// ----------------------------
// 🧩 Loans
// ----------------------------

export const loans: LoanItem[] = [
  {
    title: 'SBI Education Loan - Engineering',
    description: 'State Bank of India offers loans for engineering students with flexible repayment terms and competitive interest rates.',
    amount: 'Up to ₹20 lakhs',
    interestRate: '8.5% p.a.',
    eligibility: 'Indian students, Engineering courses',
    lastDate: 'Open throughout the year',
    link: 'https://www.sbi.co.in/web/personal-banking/education-loan',
    type: 'Loan',
  },
  // ... other loans
];

// ----------------------------
// 🧩 Scholarships
// ----------------------------

export const scholarships: ScholarshipItem[] = [
  {
    title: 'AICTE Pragati',
    description: 'Scholarship for girls in technical education.',
    amount: '₹50,000/year',
    lastDate: 'October 31, 2025',
    link: 'https://www.aicte-india.org/',
    type: 'Scholarship',
  },
  // ... other scholarships
];

// ----------------------------
// 🔄 Combined List for Search
// ----------------------------

export const allItems: Item[] = [...internships, ...loans, ...scholarships];
