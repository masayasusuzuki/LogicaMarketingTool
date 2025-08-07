'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tiktok-black to-gray-900 flex items-center justify-center">
      <div className="text-center text-white p-8">
        {/* ロゴ・アプリ名 */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-tiktok-pink">INFIX</span>
            <span className="text-white">dashboard</span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">v0.1</p>
        </div>

        {/* 簡単な説明 */}
        <div className="mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            TikTok自社アカウント分析ダッシュボード
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            自社運用TikTokアカウントの投稿パフォーマンスを内部で可視化する分析ダッシュボードです。
            <br />
            動画数、再生数、いいね、コメント、シェア数などの重要な指標をリアルタイムで確認できます。
          </p>
        </div>

        {/* TikTokでログインボタン */}
        <div className="mb-8">
          <Link 
            href="/dashboard"
            className="inline-flex items-center px-8 py-4 bg-tiktok-pink hover:bg-pink-600 text-white font-semibold rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
            TikTokでログイン
          </Link>
        </div>

        {/* 注意書き */}
        <div className="text-sm text-gray-400">
          <p>※ このアプリはTikTok API申請審査用のモックアプリです</p>
          <p>※ 実際のAPI連携は未実装です</p>
        </div>
      </div>
    </div>
  )
} 