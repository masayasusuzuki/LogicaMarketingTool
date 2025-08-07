'use client'

import Link from 'next/link'
import { mockTikTokData } from '@/data/mockData'
import KPICard from '@/components/KPICard'
import ViewsChart from '@/components/ViewsChart'
import TopVideos from '@/components/TopVideos'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* ヘッダー */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
                <span className="text-tiktok-pink">INFIX</span>
                <span className="text-gray-900">dashboard</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-yellow-700 font-medium">モックデータ</span>
              </div>
              <button 
                disabled
                className="px-4 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed text-sm font-medium border border-gray-200"
              >
                Coming Soon
              </button>
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
              <h1 className="text-4xl font-bold text-gray-900 mb-2">TikTok Analytics Dashboard</h1>
              <p className="text-gray-600 text-lg">自社アカウントのパフォーマンス分析</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm text-gray-500">最終更新</p>
                <p className="text-sm font-medium text-gray-900">今日 12:30</p>
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
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

        {/* 注意書き */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                モックアプリケーションについて
              </h3>
              <div className="text-yellow-700">
                <p className="mb-2">
                  このアプリはTikTok API申請審査用のモックアプリです。
                  表示されているデータはすべてダミーデータであり、実際のTikTok APIとの連携は実装されていません。
                </p>
                <p className="text-sm">
                  <strong>目的:</strong> TikTok Developer Platform におけるOAuth認証申請審査の通過
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 