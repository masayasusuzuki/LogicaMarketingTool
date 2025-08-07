'use client'

import Link from 'next/link'
import { mockTikTokData } from '@/data/mockData'
import KPICard from '@/components/KPICard'
import ViewsChart from '@/components/ViewsChart'
import TopVideos from '@/components/TopVideos'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
                <span className="text-blue-600">LOGICA</span>
                <span className="text-gray-700"> MARKETING</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                接続中
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded text-sm font-medium border border-gray-200">
                  設定
                </button>
                <button className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                  エクスポート
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ページタイトル */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">TikTok Analytics Dashboard</h1>
              <p className="text-gray-600">自社アカウントのパフォーマンス分析</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">最終更新</p>
                <p className="text-sm font-medium text-gray-900">今日 12:30</p>
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* KPIサマリーカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <KPICard
            title="動画数"
            value={mockTikTokData.total_videos}
            icon={
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
              </svg>
            }
            color="from-blue-500 to-blue-600"
            trend={{ value: 12, isPositive: true }}
          />
          <KPICard
            title="合計再生数"
            value={mockTikTokData.total_views}
            icon={
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
            }
            color="from-green-500 to-green-600"
            trend={{ value: 8, isPositive: true }}
          />
          <KPICard
            title="いいね"
            value={mockTikTokData.total_likes}
            icon={
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
            }
            color="from-red-500 to-red-600"
            trend={{ value: 15, isPositive: true }}
          />
          <KPICard
            title="コメント"
            value={mockTikTokData.total_comments}
            icon={
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
              </svg>
            }
            color="from-yellow-500 to-yellow-600"
            trend={{ value: 5, isPositive: true }}
          />
          <KPICard
            title="シェア"
            value={mockTikTokData.total_shares}
            icon={
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
              </svg>
            }
            color="from-purple-500 to-purple-600"
            trend={{ value: 3, isPositive: false }}
          />
        </div>

        {/* グラフとトップ動画 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ViewsChart dailyViews={mockTikTokData.daily_views} />
          <TopVideos videos={mockTikTokData.top_videos} />
        </div>

        {/* 追加の分析セクション */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">パフォーマンス分析</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {((mockTikTokData.total_likes / mockTikTokData.total_views) * 100).toFixed(2)}%
              </div>
              <div className="text-sm text-blue-700 font-medium">エンゲージメント率</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {Math.round(mockTikTokData.total_views / mockTikTokData.total_videos).toLocaleString()}
              </div>
              <div className="text-sm text-green-700 font-medium">平均再生数</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {Math.round(mockTikTokData.total_likes / mockTikTokData.total_videos).toLocaleString()}
              </div>
              <div className="text-sm text-purple-700 font-medium">平均いいね数</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 