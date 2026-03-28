import AppNavbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import { FileText, TrendingUp, File } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] text-gray-800">
      {/* Navbar */}
      <AppNavbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold leading-[1.2] tracking-tight max-w-2xl">
          Get your resume
          <br />
          analyzed in seconds
        </h1>

        <p className="mt-4 text-gray-500 max-w-xl">
          Upload your resume and receive instant feedback on completeness,
          formatting, and content quality.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/upload"
            className="bg-[#c6a27b] text-white px-6 py-3 rounded-xl shadow-sm hover:bg-[#b8936d] transition duration-200"
          >
            Analyze my resume
          </Link>

          <button className="bg-white px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition duration-200">
            See sample results
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-24 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard
          title="Resume completeness check"
          desc="Ensure all essential sections are present and properly formatted for maximum impact."
          icon={<FileText className="w-5 h-5 text-[#c6a27b]" />}
        />

        <FeatureCard
          title="AI-based score (0–100)"
          desc="Get an objective score based on industry standards and best practices."
          icon={<TrendingUp className="w-5 h-5 text-[#c6a27b]" />}
        />

        <FeatureCard
          title="PDF & DOCX support"
          desc="Upload your resume in any common format. We support both PDF and DOCX files."
          icon={<File className="w-5 h-5 text-[#c6a27b]" />}
        />
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 pb-10 space-x-4">
        <span>Privacy</span>
        <span>•</span>
        <span>Terms</span>
        <span>•</span>
        <span>Support</span>
      </footer>
    </main>
  );
}