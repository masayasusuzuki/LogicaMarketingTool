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
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ViewsChartProps {
  dailyViews: number[];
}

export default function ViewsChart({ dailyViews }: ViewsChartProps) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
                   title: {
               display: true,
               text: 'Daily Views Trend (Last 7 Days)',
               font: {
                 size: 16,
                 weight: 'bold',
               },
               color: '#374151',
               padding: 16,
             },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#3B82F6',
        borderWidth: 1,
        cornerRadius: 6,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `Views: ${context.parsed.y.toLocaleString()}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
                       ticks: {
                 color: '#6B7280',
                 font: {
                   weight: 'bold',
                 }
               }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#E5E7EB',
          drawBorder: false,
        },
        ticks: {
          color: '#6B7280',
          font: {
            weight: '500',
          },
          callback: function(value: any) {
            return value.toLocaleString();
          }
        }
      }
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6,
        backgroundColor: '#3B82F6',
        borderColor: '#fff',
        borderWidth: 2,
      },
      line: {
        tension: 0.3,
      }
    }
  };

  const labels = ['7 days ago', '6 days ago', '5 days ago', '4 days ago', '3 days ago', '2 days ago', 'Yesterday'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Views',
        data: dailyViews,
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        pointBackgroundColor: '#3B82F6',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="h-72">
        <Line options={options} data={data} />
      </div>
      
      {/* 統計情報 */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Average Views</p>
            <p className="text-lg font-semibold text-gray-900">
              {Math.round(dailyViews.reduce((a, b) => a + b, 0) / dailyViews.length).toLocaleString()}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Peak Views</p>
            <p className="text-lg font-semibold text-green-600">
              {Math.max(...dailyViews).toLocaleString()}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Total Views</p>
            <p className="text-lg font-semibold text-blue-600">
              {dailyViews.reduce((a, b) => a + b, 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 