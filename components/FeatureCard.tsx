import { ReactNode } from "react";

type Props = {
  title: string;
  desc: string;
  icon: ReactNode;
};

export default function FeatureCard({ title, desc, icon }: Props) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="w-10 h-10 bg-[#f1e7dd] rounded-lg mb-4 flex items-center justify-center">
        {icon}
      </div>

      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}