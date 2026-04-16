import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="bg-[#18181B] border border-white/5 rounded-2xl p-5 flex flex-col items-start gap-4 h-full flex-1">
      <div>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-white mb-1">{value}</span>
        <span className="text-xs text-[#81818b] uppercase tracking-wide">{label}</span>
      </div>
    </div>
  );
}
