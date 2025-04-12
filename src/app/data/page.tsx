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
  {
    title: 'Data Science Intern - Microsoft',
    description: 'Join Microsoft’s Data Science team and help solve real-world problems using data-driven insights.',
    duration: '6 months',
    stipend: '₹60,000/month',
    lastDate: 'April 30, 2025',
    link: 'https://careers.microsoft.com/us/en/job/123456789/data-science-intern',
    type: 'Internship',
    isRemote: false,
  },
  {
    title: 'Product Management Intern - Meta',
    description: 'Work on Meta’s flagship products and contribute to their product strategy and development.',
    duration: '10 weeks',
    stipend: '₹70,000/month',
    lastDate: 'June 15, 2025',
    link: 'https://www.metacareers.com/job/12345678/product-management-intern/',
    type: 'Internship',
    isRemote: true,
  },
  {
    title: 'UX Design Intern - Apple',
    description: 'Join Apple’s UX design team to help create intuitive, user-friendly designs for innovative products.',
    duration: '3 months',
    stipend: '₹50,000/month',
    lastDate: 'May 20, 2025',
    link: 'https://jobs.apple.com/us/en-us/details/12345678/ux-design-intern',
    type: 'Internship',
    isRemote: false,
  },
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
  {
    title: 'HDFC Bank Education Loan - Bachelors',
    description: 'HDFC provides education loans for bachelors with minimal documentation and low processing fees.',
    amount: 'Up to ₹40 lakhs',
    interestRate: '9.5% p.a.',
    eligibility: 'Indian students, Undergraduate courses',
    lastDate: 'Open throughout the year',
    link: 'https://www.hdfcbank.com/personal/borrow/popular-loans/education-loans',
    type: 'Loan',
  },
  {
    title: 'Punjab National Bank Education Loan - Masters',
    description: 'PNB offers education loans for Masters courses, including MBA, MS, and more, with a special scheme for women.',
    amount: 'Up to ₹30 lakhs',
    interestRate: '9.25% p.a.',
    eligibility: 'Indian students, Postgraduate courses',
    lastDate: 'Open throughout the year',
    link: 'https://www.pnbindia.in/education-loan-scheme.html',
    type: 'Loan',
  },
  {
    title: 'Bank of Baroda Education Loan - Engineering',
    description: 'Bank of Baroda provides loans for engineering students at competitive interest rates with flexible repayment options.',
    amount: 'Up to ₹15 lakhs',
    interestRate: '8.75% p.a.',
    eligibility: 'Indian students, Engineering courses',
    lastDate: 'Open throughout the year',
    link: 'https://www.bankofbaroda.in/education-loan.htm',
    type: 'Loan',
  },
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
  {
    title: 'Vidyadhan',
    description: 'Supports low-income students post Class 10.',
    amount: '₹10,000 – ₹60,000/year',
    lastDate: 'June 10, 2025',
    link: 'https://www.vidyadhan.org/',
    type: 'Scholarship',
  },
  {
    title: 'SVMCM',
    description: 'Merit-cum-means scholarship for West Bengal students.',
    amount: 'Up to ₹12,000/month',
    lastDate: 'August 30, 2025',
    link: 'https://svmcm.wbhed.gov.in/',
    type: 'Scholarship',
  },
  {
    title: 'NSP Scholarship',
    description: 'For various minority and backward class students.',
    amount: '₹6,000 – ₹25,000/year',
    lastDate: 'September 15, 2025',
    link: 'https://scholarships.gov.in/',
    type: 'Scholarship',
  },
  {
    title: 'KVPY',
    description: 'Science scholarship merged with INSPIRE.',
    amount: '₹5,000 – ₹7,000/month',
    lastDate: 'N/A',
    link: 'http://www.kvpy.iisc.ernet.in/',
    type: 'Scholarship',
  },
];

// ----------------------------
// 🔄 Combined List for Search
// ----------------------------

export const allItems: Item[] = [...internships, ...loans, ...scholarships];
