'use client'

import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
                <span className="text-blue-600">LOGICA</span>
                <span className="text-gray-700"> MARKETING</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">Home</Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium">Dashboard</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy for LOGICA MARKETING Analytics</h1>
            <p className="text-gray-600">
              <strong>Last updated: August 7, 2025</strong>
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              LOGICA MARKETING Analytics is an internal-use analytics application developed by LOGICA to access and 
              visualize performance data from our own TikTok business account.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Data We Collect</h2>
            <p>
              The app uses TikTok's official API to retrieve publicly available data from our own account, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Video views</li>
              <li>Likes</li>
              <li>Comments</li>
              <li>Shares</li>
              <li>Engagement metrics</li>
            </ul>
            <p className="mt-4">
              We <strong>do not collect or store any personally identifiable information (PII)</strong>, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>TikTok user profiles</li>
              <li>Direct messages</li>
              <li>Follower identities</li>
              <li>User-generated content not published by us</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use the Data</h2>
            <p>
              The data is used exclusively for internal reporting and content strategy purposes within our marketing 
              and development teams. We use it to analyze performance trends and improve content planning.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Data Storage and Access</h2>
            <p>
              Some aggregated metrics may be stored temporarily in a secure internal database to support dashboard 
              functionality. These data are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Not shared with any third parties</li>
              <li>Not sold or transferred externally</li>
              <li>Accessed only by authorized team members</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. No Posting or Content Modification</h2>
            <p>
              LOGICA MARKETING Analytics is a <strong>read-only</strong> application. It does 
              <strong> not post, edit, delete, or otherwise modify content</strong> on TikTok.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Third-Party Sharing</h2>
            <p>
              No data collected by this app is shared with, or processed by, any third-party services or vendors.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact the LOGICA MARKETING Analytics 
              development team within LOGICA.
            </p>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <Link 
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 