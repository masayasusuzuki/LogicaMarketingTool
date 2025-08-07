'use client'

import Link from 'next/link'

export default function Terms() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">✅ LOGICA MARKETING – Terms of Service (Internal Use Only)</h1>
            <p className="text-gray-600">
              <strong>Last updated: August 7, 2025</strong>
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of LOGICA MARKETING Analytics (the "App"), 
              a proprietary internal tool developed and maintained by LOGICA for the purpose of analyzing the performance 
              of our own official TikTok business account. By using this App, you agree to these Terms as a member of the 
              authorized internal team.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Purpose</h2>
            <p>
              LOGICA MARKETING Analytics is designed solely for internal use to assist our marketing and content teams 
              in reviewing and understanding the performance of TikTok video content. It aggregates video metrics using 
              the official TikTok API to support operational decision-making and content strategy optimization. 
              This App is <strong>not intended for public release, third-party use, or external client distribution</strong>.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Data Usage</h2>
            <p>
              The App accesses and retrieves publicly available TikTok video data through authorized OAuth2 authentication 
              with our own company-managed TikTok account. The data collected includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Number of views</li>
              <li>Likes</li>
              <li>Comments</li>
              <li>Shares</li>
              <li>Engagement rate</li>
              <li>Post dates</li>
            </ul>
            <p className="mt-4">
              We do <strong>not collect, access, or store</strong> any personal information from individual TikTok users. 
              The App also does <strong>not retrieve DMs, user-generated content, or follower identities</strong>. 
              All data used is already visible via TikTok's official platform.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. No Posting or Content Modification</h2>
            <p>
              LOGICA MARKETING Analytics does <strong>not have the ability to post, edit, delete, or otherwise manipulate content</strong> 
              on TikTok. Its scope is strictly read-only. The App is designed to analyze existing performance data for internal insights only.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Access and Authorization</h2>
            <p>
              Only authorized employees of LOGICA are permitted to access and use this App. Access is granted via secure 
              credentials and OAuth-based login through our official TikTok business account. Sharing access with third 
              parties or unauthorized personnel is strictly prohibited.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Storage and Security</h2>
            <p>
              The App may temporarily store aggregated performance data in a secure internal database for dashboard 
              visualization purposes. This data is protected by our company's internal security policies, including 
              access restrictions, encryption, and monitoring. No data is sold or transferred to third parties.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              This App is provided "as is" for internal analysis purposes only. LOGICA makes no warranties regarding 
              the availability, accuracy, or completeness of TikTok data as retrieved through the API. LOGICA shall 
              not be liable for any indirect, incidental, or consequential damages arising from the use of this App.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Updates and Modifications</h2>
            <p>
              These Terms may be updated from time to time as the App evolves. All internal users will be notified 
              of major changes via official communication channels.
            </p>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-sm">
                If you do not agree to these Terms, you are not permitted to access or use LOGICA MARKETING Analytics. 
                For questions, please contact the App administrator within the marketing or development team.
              </p>
            </div>

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