/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 14ではappDirはデフォルトで有効なので削除
  async headers() {
    return [
      {
        source: '/tiktoktBXLwvwppcyqZUPGNlzz74oSUgsgl6n6.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 