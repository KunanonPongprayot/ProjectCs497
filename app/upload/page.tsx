"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  Upload,
  FileText,
  User,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function UploadPage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "uploading" | "processing" | "done"
  >("idle");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      // เริ่ม upload
      setStatus("uploading");

      // จำลอง upload
      setTimeout(() => {
        setStatus("processing");

        // จำลอง AI processing
        setTimeout(() => {
          setStatus("done");
        }, 2000);
      }, 2000);
    }
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

          <Link href="/" className="text-sm text-gray-600 hover:underline">
            ← Back to home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        
        {/* LEFT PANEL */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="font-semibold mb-6">What we check</h2>

          <div className="space-y-6 text-sm">

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#f1e7dd] rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-[#c6a27b]" />
              </div>
              <div>
                <p className="font-medium">Contact information</p>
                <p className="text-gray-500">
                  Email, phone, location
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#f1e7dd] rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#c6a27b]" />
              </div>
              <div>
                <p className="font-medium">Skills</p>
                <p className="text-gray-500">
                  Technical and soft skills
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#f1e7dd] rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#c6a27b]" />
              </div>
              <div>
                <p className="font-medium">Work experience</p>
                <p className="text-gray-500">
                  Job history and achievements
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#f1e7dd] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#c6a27b]" />
              </div>
              <div>
                <p className="font-medium">Education</p>
                <p className="text-gray-500">
                  Degrees and certifications
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-semibold mb-6">
            Upload your resume
          </h1>

          {/* Upload Box */}
          <div className="border-2 border-dashed border-gray-200 rounded-2xl p-12 flex flex-col items-center justify-center text-center bg-white">

            {/* IDLE */}
            {status === "idle" && (
              <>
                <div className="w-12 h-12 bg-[#f1e7dd] rounded-full flex items-center justify-center mb-4">
                  <Upload className="w-5 h-5 text-[#c6a27b]" />
                </div>

                <p className="text-gray-700">
                  Drag and drop your resume here
                </p>
                <p className="text-sm text-gray-400 mt-1">or</p>

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
              </>
            )}

            {/* UPLOADING */}
            {status === "uploading" && file && (
              <>
                <div className="w-12 h-12 border-4 border-[#c6a27b] border-t-transparent rounded-full animate-spin mb-4" />

                <p className="font-medium">
                  Uploading {file.name}...
                </p>
                <p className="text-sm text-gray-400">
                  Please wait
                </p>
              </>
            )}

            {/* PROCESSING */}
            {status === "processing" && (
              <>
                <div className="w-12 h-12 border-4 border-[#c6a27b] border-t-transparent rounded-full animate-spin mb-4" />

                <p className="font-medium">
                  Processing your resume...
                </p>
                <p className="text-sm text-gray-400">
                  This may take a moment
                </p>
              </>
            )}

            {/* DONE */}
            {status === "done" && file && (
              <>
                <div className="w-12 h-12 bg-[#f1e7dd] rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#c6a27b] text-xl">✓</span>
                </div>

                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-gray-400">
                  Ready for analysis
                </p>
              </>
            )}
          </div>

          {/* Info */}
          <div className="mt-6 bg-gray-100 text-gray-500 text-sm rounded-xl px-6 py-4">
            Your resume is processed securely and privately. We don't store your
            documents or share them with third parties.
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              disabled={status !== "done"}
              onClick={() => router.push("/result")}
              className={`px-6 py-3 rounded-xl transition
                ${
                  status === "done"
                    ? "bg-[#c6a27b] text-white hover:bg-[#b8936d] cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }
              `}
            >
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