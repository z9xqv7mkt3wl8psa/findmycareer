// app/opportunities/college-board/page.tsx

"use client";

import Link from "next/link";
import Footer from "@/components/footer";

export default function CollegeBoardPage() {
  return (
    <>
      <div className="bg-white min-h-screen px-4 py-10 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6">
            College Board Services
          </h1>

          <p className="text-gray-700 mb-4">
            The College Board is a mission-driven organization that connects students to college success and opportunity. It offers a suite of programs like the SAT, AP courses, and BigFuture that help students prepare for college and career readiness.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Key Offerings:
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>SAT:</strong> A standardized test widely used for college admissions in the United States.</li>
            <li><strong>Advanced Placement (AP):</strong> College-level curricula and examinations to help students earn college credit while in high school.</li>
            <li><strong>BigFuture:</strong> A free, comprehensive set of digital tools to help students plan for college, explore careers, and find scholarships.</li>
            <li><strong>Scholarship Search:</strong> Tools and resources to help students find scholarships and financial aid opportunities.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Benefits for Students:
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access to global college opportunities and standardized assessments.</li>
            <li>Comprehensive guidance and tools to help make informed decisions about higher education.</li>
            <li>Programs that promote equity, access, and excellence in education.</li>
          </ul>

          <div className="mt-10">
            <Link
              href="https://www.collegeboard.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Visit College Board
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
