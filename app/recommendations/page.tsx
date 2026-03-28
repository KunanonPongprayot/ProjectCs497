"use client";

import Link from "next/link";
import {
  FileText,
  Lightbulb,
  Zap,
  CheckCircle,
} from "lucide-react";

export default function RecommendationsPage() {
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
      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* Back */}
        <Link
          href="/result"
          className="text-sm text-gray-500 hover:underline mb-6 inline-block"
        >
          ← Back to overview
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-semibold mb-3">
          How to improve your resume
        </h1>

        <p className="text-gray-500 mb-14 leading-relaxed">
          Based on our analysis, we've compiled a list of actionable
          recommendations to strengthen your resume. Start with high-impact
          changes for the best results, then tackle quick fixes, and consider
          optional improvements as time allows.
        </p>

        {/* Sections */}
        <div className="space-y-14 sm-shadow">

          <Section
            icon={<Lightbulb className="w-5 h-5 text-[#c6a27b]" />}
            title="High impact"
            subtitle="These changes will significantly improve your resume"
            items={[
              "Add quantifiable achievements to your work experience (e.g., Increased sales by 35% or Reduced load time by 2 seconds)",
              "Expand your skills section to include 8–12 relevant technical and soft skills",
              "Include 2–3 bullet points per job role highlighting specific accomplishments rather than just responsibilities",
            ]}
          />

          <Section
            icon={<Zap className="w-5 h-5 text-[#c6a27b]" />}
            title="Quick fixes"
            subtitle="Easy improvements you can make right now"
            items={[
              "Add your LinkedIn profile URL to the contact section",
              "List certifications or online courses in the education section",
              "Ensure all dates follow a consistent format (e.g., Jan 2020 - Dec 2022)",
              "Add your GitHub or portfolio link if you have one",
            ]}
          />

          <Section
            icon={<CheckCircle className="w-5 h-5 text-[#c6a27b]" />}
            title="Optional"
            subtitle="Nice-to-have additions when you have time"
            items={[
              "Consider adding a brief professional summary at the top (2–3 sentences)",
              "Include volunteer work or side projects if relevant",
              "Add language proficiencies if you speak multiple languages",
            ]}
          />

        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-16">

          <button className="bg-[#c6a27b] text-white px-6 py-3 rounded-xl hover:bg-[#b8936d] transition cursor-pointer">
            Download recommendations
          </button>

          <Link
            href="/upload"
            className="bg-white border border-gray-200 px-6 py-3 rounded-xl hover:bg-gray-50 transition"
          >
            Re-run analysis
          </Link>

          <Link
            href="/detail"
            className="bg-white border border-gray-200 px-6 py-3 rounded-xl hover:bg-gray-50 transition"
          >
            View detailed analysis
          </Link>

        </div>

      </div>
    </main>
  );
}

/* Section Component */
function Section({
  icon,
  title,
  subtitle,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  items: string[];
}) {
  return (
    <div className="flex gap-4">

      {/* Icon */}
      <div className="w-10 h-10 bg-[#f1e7dd] rounded-lg flex items-center justify-center shrink-0">
        {icon}
      </div>

      {/* Content */}
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500 mb-4">{subtitle}</p>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
          {items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 w-1.5 h-1.5 bg-[#c6a27b] rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}