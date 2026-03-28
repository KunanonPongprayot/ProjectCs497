"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FileText,
  User,
  Briefcase,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

export default function DetailPage() {
  const router = useRouter();
  const [open, setOpen] = useState<string | null>("contact");

  const toggle = (section: string) => {
    setOpen(open === section ? null : section);
  };

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

          <span className="text-sm text-gray-400">Step 3 of 3</span>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        <Link
          href="/result"
          className="text-sm text-gray-500 hover:underline mb-6 inline-block"
        >
          ← Back to overview
        </Link>

        <h1 className="text-3xl font-semibold mb-2">
          Detailed analysis
        </h1>
        
        <p className="text-gray-500 mb-10">
          Review each section of your resume with specific feedback
        </p>

        <div className="space-y-4">

          {/* CONTACT */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
            <button
              onClick={() => toggle("contact")}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-[#c6a27b]" />
                <div>
                  <p className="font-medium">Contact information</p>
                  <p className="text-sm text-gray-500">90% • Good</p>
                </div>
              </div>

              <ChevronDown
                className={`transition ${
                  open === "contact" ? "rotate-180" : ""
                }`}
              />
            </button>

            {open === "contact" && (
              <div className="px-5 pb-5 space-y-4">

                <div className="bg-gray-100 rounded-lg p-4 text-sm">
                  <p>• Full name: John Anderson</p>
                  <p>• Email: john.anderson@email.com</p>
                  <p>• Phone: +1 (555) 123-4567</p>
                  <p>• Location: San Francisco, CA</p>
                </div>

                <div>
                  <p className="font-medium mb-1">Explanation</p>
                  <p className="text-sm text-gray-500">
                    All essential contact information is present and properly formatted.
                  </p>
                </div>

                <div className="bg-[#f1e7dd] rounded-lg p-4 text-sm">
                  💡 Consider adding your LinkedIn profile URL.
                </div>

              </div>
            )}
          </div>

          {/* SKILLS */}
          <Section
            title="Skills"
            icon={<FileText className="w-5 h-5 text-[#c6a27b]" />}
            percent="20% • Needs improvement"
            open={open === "skills"}
            onClick={() => toggle("skills")}
          />

          {/* WORK */}
          <Section
            title="Work experience"
            icon={<Briefcase className="w-5 h-5 text-[#c6a27b]" />}
            percent="90% • Good"
            open={open === "work"}
            onClick={() => toggle("work")}
          />

          {/* EDUCATION */}
          <Section
            title="Education"
            icon={<GraduationCap className="w-5 h-5 text-[#c6a27b]" />}
            percent="20% • Needs improvement"
            open={open === "edu"}
            onClick={() => toggle("edu")}
          />

        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-10">
          <button className="bg-[#c6a27b] text-white px-6 py-3 rounded-xl hover:bg-[#b8936d]">
            View recommendations
          </button>

          <Link
            href="/upload"
            className="bg-white border border-gray-200 px-6 py-3 rounded-xl hover:bg-gray-50"
          >
            Upload updated resume
          </Link>
        </div>

      </div>
    </main>
  );
}

/* Reusable Section */
function Section({
  title,
  icon,
  percent,
  open,
  onClick,
}: any) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <div className="flex items-center gap-3">
          {icon}
          <div>
            <p className="font-medium">{title}</p>
            <p className="text-sm text-gray-500">{percent}</p>
          </div>
        </div>

        <ChevronDown
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-5 pb-5 text-sm text-gray-500">
          More detailed feedback coming soon...
        </div>
      )}
    </div>
  );
}