import Link from "next/link";
import { FileText } from "lucide-react";

type Props = {
  showBack?: boolean;
};

export default function AppNavbar({ showBack }: Props) {
  return (
    <nav className="bg-gray border-b border-gray-100 shadow-sm">
      <div className="flex justify-between items-center px-10 py-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-medium">
          <div className="w-6 h-6 bg-[#c6a27b] rounded-md flex items-center justify-center">
            <FileText className="w-4 h-4 text-white" />
          </div>
          <span>AI Resume Analyzer</span>
        </div>

        {/* Right side */}
        {showBack ? (
          <Link href="/" className="text-sm text-gray-600 hover:underline">
            ← Back to home
          </Link>
        ) : (
          <button className="text-sm text-gray-600 hover:underline">
            Login
          </button>
        )}

      </div>
    </nav>
  );
}