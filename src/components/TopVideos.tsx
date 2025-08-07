interface Video {
  title: string;
  views: number;
  likes: number;
}

interface TopVideosProps {
  videos: Video[];
}

export default function TopVideos({ videos }: TopVideosProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Top Videos</h3>
        <div className="flex items-center text-sm text-gray-500">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
          </svg>
          Top 3 Posts
        </div>
      </div>
      
      <div className="space-y-4">
        {videos.map((video, index) => (
          <div key={index} className="group relative bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-all duration-200">
            {/* ランキングバッジ */}
            <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-sm">
              {index === 0 && (
                <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white">
                  1
                </div>
              )}
              {index === 1 && (
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white">
                  2
                </div>
              )}
              {index === 2 && (
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white">
                  3
                </div>
              )}
            </div>
            
            <div className="flex items-center">
              {/* サムネイルプレースホルダー */}
              <div className="w-12 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                </svg>
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 mb-1 truncate group-hover:text-blue-600 transition-colors">
                  {video.title}
                </h4>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">{video.views.toLocaleString()}</span>
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">{video.likes.toLocaleString()}</span>
                  </span>
                </div>
              </div>
              
              {/* エンゲージメント率 */}
              <div className="text-right">
                <div className="text-xs text-gray-500 mb-1">Engagement</div>
                <div className="text-sm font-semibold text-green-600">
                  {((video.likes / video.views) * 100).toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* 統計サマリー */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-600 font-medium mb-1">Total Views</p>
            <p className="text-lg font-semibold text-blue-900">
              {videos.reduce((sum, video) => sum + video.views, 0).toLocaleString()}
            </p>
          </div>
          <div className="text-center p-3 bg-red-50 rounded-lg">
            <p className="text-sm text-red-600 font-medium mb-1">Total Likes</p>
            <p className="text-lg font-semibold text-red-900">
              {videos.reduce((sum, video) => sum + video.likes, 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 