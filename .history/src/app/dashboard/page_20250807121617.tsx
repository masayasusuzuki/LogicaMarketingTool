'use client'

import Link from 'next/link'
import { mockTikTokData } from '@/data/mockData'
import KPICard from '@/components/KPICard'
import ViewsChart from '@/components/ViewsChart'
import TopVideos from '@/components/TopVideos'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                <span className="text-tiktok-pink">INFIX</span>
                <span className="text-gray-900">dashboard</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">モックデータ表示中</span>
              <button 
                disabled
                className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed text-sm"
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
          <h1 className="text-3xl font-bold text-gray-900">TikTok Analytics Dashboard</h1>
          <p className="text-gray-600 mt-2">自社アカウントのパフォーマンス分析</p>
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
            color="border-blue-500"
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
            color="border-green-500"
          />
          <KPICard
            title="いいね"
            value={mockTikTokData.total_likes}
            icon={
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
            }
            color="border-red-500"
          />
          <KPICard
            title="コメント"
            value={mockTikTokData.total_comments}
            icon={
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
              </svg>
            }
            color="border-yellow-500"
          />
          <KPICard
            title="シェア"
            value={mockTikTokData.total_shares}
            icon={
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
              </svg>
            }
            color="border-purple-500"
          />
        </div>

        {/* グラフとトップ動画 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ViewsChart dailyViews={mockTikTokData.daily_views} />
          <TopVideos videos={mockTikTokData.top_videos} />
        </div>

        {/* 注意書き */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                モックアプリについて
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  このアプリはTikTok API申請審査用のモックアプリです。
                  表示されているデータはすべてダミーデータであり、実際のTikTok APIとの連携は実装されていません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 