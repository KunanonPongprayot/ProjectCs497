"use client"

import Link from "next/link";
import {
  FileText,
  User,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ResultPage() {
    const router = useRouter();
  return (
    <main className="min-h-screen bg-[#f3f4f6] text-gray-800">

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100">
        <div className="flex justify-between items-center px-10 py-6">
          <div className="flex items-center gap-2 font-medium">
            <div className="w-6 h-6 bg-[#c6a27b] rounded-md flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span>AI Resume Analyzer</span>
          </div>

          <span className="text-sm text-gray-400">Step 2 of 3</span>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">

        <h1 className="text-3xl font-semibold mb-2">
          Your resume analysis
        </h1>
        <p className="text-gray-500 mb-10">
          We’ve analyzed your resume and here’s what we found
        </p>

        {/* Score Card */}
        <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm mb-10">
          <div className="w-24 h-24 mx-auto rounded-full bg-[#f1e7dd] flex items-center justify-center text-3xl font-semibold mb-4">
            78
          </div>

          <h2 className="text-lg font-medium mb-1">Good</h2>
          <p className="text-gray-500 text-sm">
            Your resume covers the essentials but has room for improvement in some areas.
          </p>
        </div>

        {/* Breakdown */}
        <div className="text-left mb-6 font-medium">
          Detailed breakdown
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-left">

          {/* Card */}
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <User className="w-5 h-5 text-[#c6a27b]" />
              <p className="font-medium">Contact information</p>
            </div>
            <p className="text-sm text-gray-500">
              90% • Good
            </p>
            <p className="text-sm mt-2">
              All essential contact details present
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-5 h-5 text-[#c6a27b]" />
              <p className="font-medium">Skills</p>
            </div>
            <p className="text-sm text-gray-500">
              20% • Needs improvement
            </p>
            <p className="text-sm mt-2">
              Consider adding more relevant skills
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-5 h-5 text-[#c6a27b]" />
              <p className="font-medium">Work experience</p>
            </div>
            <p className="text-sm text-gray-500">
              90% • Good
            </p>
            <p className="text-sm mt-2">
              Well-documented work history
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-5 h-5 text-[#c6a27b]" />
              <p className="font-medium">Education</p>
            </div>
            <p className="text-sm text-gray-500">
              20% • Needs improvement
            </p>
            <p className="text-sm mt-2">
              Missing certification details
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-10">
            <button 
                onClick={() => router.push("/upload")}
                className="bg-[#c6a27b] text-white px-6 py-3 rounded-xl hover:bg-[#b8936d] cursor-pointer"
            >
                    Upload updated resume
            </button>

            <button
                onClick={() => router.push("/detail")}
                className="bg-white border border-gray-200 px-6 py-3 rounded-xl hover:bg-gray-50 cursor-pointer"
            >
                View detailed analysis
            </button>

            <button 
                onClick={() => router.push("/recommendations")}
                className="bg-white border border-gray-200 px-6 py-3 rounded-xl hover:bg-gray-50 cursor-pointer"
            >
                Get recommendations
          </button>
        </div>

      </div>
    </main>
  );
}