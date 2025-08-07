export interface TikTokData {
  total_videos: number;
  total_views: number;
  total_likes: number;
  total_comments: number;
  total_shares: number;
  daily_views: number[];
  top_videos: {
    title: string;
    views: number;
    likes: number;
  }[];
}

export const mockTikTokData: TikTokData = {
  total_videos: 128,
  total_views: 1024540,
  total_likes: 134210,
  total_comments: 5340,
  total_shares: 820,
  daily_views: [23000, 18000, 26000, 29000, 30000, 24000, 27000],
  top_videos: [
    { title: "Product Demo", views: 320000, likes: 22000 },
    { title: "Behind the Scenes", views: 215000, likes: 18900 },
    { title: "Staff Interview", views: 140000, likes: 10200 }
  ]
}; 