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
        text: '過去7日間の再生数推移',
        font: {
          size: 18,
          weight: 'bold',
        },
        color: '#374151',
        padding: 20,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#fe2c55',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `再生数: ${context.parsed.y.toLocaleString()}`;
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
            weight: '500',
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
        radius: 6,
        hoverRadius: 8,
        backgroundColor: '#fe2c55',
        borderColor: '#fff',
        borderWidth: 3,
      },
      line: {
        tension: 0.4,
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
        fill: true,
        pointBackgroundColor: '#fe2c55',
        pointBorderColor: '#fff',
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="h-80">
        <Line options={options} data={data} />
      </div>
      
      {/* 統計情報 */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">平均再生数</p>
            <p className="text-lg font-bold text-gray-900">
              {Math.round(dailyViews.reduce((a, b) => a + b, 0) / dailyViews.length).toLocaleString()}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">最高再生数</p>
            <p className="text-lg font-bold text-green-600">
              {Math.max(...dailyViews).toLocaleString()}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">合計再生数</p>
            <p className="text-lg font-bold text-blue-600">
              {dailyViews.reduce((a, b) => a + b, 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 