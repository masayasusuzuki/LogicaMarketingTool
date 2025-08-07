'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ViewsChartProps {
  dailyViews: number[];
}

export default function ViewsChart({ dailyViews }: ViewsChartProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '過去7日間の再生数推移',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return value.toLocaleString();
          }
        }
      }
    }
  };

  const labels = ['7日前', '6日前', '5日前', '4日前', '3日前', '2日前', '昨日'];

  const data = {
    labels,
    datasets: [
      {
        label: '再生数',
        data: dailyViews,
        borderColor: '#fe2c55',
        backgroundColor: 'rgba(254, 44, 85, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <Line options={options} data={data} />
    </div>
  );
} 