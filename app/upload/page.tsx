"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Upload,
  FileText,
  User,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import AppNavbar from "@/components/Navbar";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <main className="min-h-screen bg-[#f3f4f6] text-gray-800">
      <AppNavbar showBack />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        
        {/* Left Panel */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="font-semibold mb-6">What we check</h2>

          <div className="space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-[#c6a27b]" />
              <div>
                <p className="font-medium">Contact information</p>
                <p className="text-gray-500">Email, phone, location</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-[#c6a27b]" />
              <div>
                <p className="font-medium">Skills</p>
                <p className="text-gray-500">Technical and soft skills</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-[#c6a27b]" />
              <div>
                <p className="font-medium">Work experience</p>
                <p className="text-gray-500">Job history and achievements</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-[#c6a27b]" />
              <div>
                <p className="font-medium">Education</p>
                <p className="text-gray-500">Degrees and certifications</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-semibold mb-6">
            Upload your resume
          </h1>

          {/* Upload Box */}
          <div className="border-2 border-dashed border-gray-200 rounded-2xl p-12 flex flex-col items-center justify-center text-center bg-white">
            
            <div className="w-12 h-12 bg-[#f1e7dd] rounded-full flex items-center justify-center mb-4">
              <Upload className="w-5 h-5 text-[#c6a27b]" />
            </div>

            <p className="text-gray-700">
              Drag and drop your resume here
            </p>
            <p className="text-sm text-gray-400 mt-1">or</p>

            {/* Hidden input */}
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              id="fileUpload"
              onChange={handleFileChange}
            />

            <label
              htmlFor="fileUpload"
              className="mt-4 px-5 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition cursor-pointer"
            >
              Browse files
            </label>

            <p className="text-xs text-gray-400 mt-4">
              Supported formats: PDF, DOCX
            </p>

            {file && (
              <p className="mt-4 text-sm text-green-600">
                Selected: {file.name}
              </p>
            )}
          </div>

          {/* Info */}
          <div className="mt-6 bg-gray-100 text-gray-500 text-sm rounded-xl px-6 py-4">
            Your resume is processed securely and privately. We don't store your
            documents or share them with third parties.
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-[#c6a27b] text-white px-6 py-3 rounded-xl hover:bg-[#b8936d] transition">
              Start analysis
            </button>

            <Link
              href="/"
              className="bg-white border border-gray-200 px-6 py-3 rounded-xl hover:bg-gray-50 transition"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}