interface KPICardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

export default function KPICard({ title, value, icon, color }: KPICardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </p>
        </div>
        <div className="text-3xl text-gray-400">
          {icon}
        </div>
      </div>
    </div>
  );
} 