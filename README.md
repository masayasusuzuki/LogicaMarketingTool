# LOGICA MARKETING - TikTok Analytics Mock App

TikTok API申請審査用のモックダッシュボードアプリケーションです。

## 概要

このアプリは、TikTok Developer Platform におけるOAuth認証申請審査を通過することを目的としたモックアプリケーションです。

### 主な機能（モック）

- TikTok風ダッシュボードUIの表示
- ダミーデータによる指標・グラフの表示
- KPIサマリーカード（動画数、再生数、いいね、コメント、シェア）
- 日別再生数推移グラフ
- トップ動画一覧

### 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **グラフ**: Chart.js + react-chartjs-2
- **アイコン**: Heroicons (SVG)

## セットアップ

### 前提条件

- Node.js 18.0.0以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### ビルド

```bash
# 本番用ビルド
npm run build

# 本番サーバーの起動
npm start
```

## 画面構成

### 1. トップページ (`/`)

- ロゴ・アプリ名・簡単な説明
- ダミーの「TikTokでログイン」ボタン（押下で `/dashboard` に遷移）

### 2. ダッシュボード (`/dashboard`)

- KPIサマリーカード（5つの指標）
- 日別再生数推移グラフ（過去7日分）
- トップ動画一覧（上位3投稿）
- 非活性ログインボタン（「Coming Soon」表示）

## 注意事項

⚠️ **このアプリはモックアプリケーションです**

- 実際のTikTok APIとの連携は実装されていません
- 表示されているデータはすべてダミーデータです
- 外部ユーザーへの投稿やアカウント操作はできません
- TikTok API申請審査用の一次開発版です

## 開発目的

このモックアプリは以下の目的で開発されています：

1. **TikTok API申請審査の通過**
2. **実運用時のUI/UXの高精度再現**
3. **TikTok APIスコープ（`video.list`, `video.stats`）に基づいた設計**

## ライセンス

ISC License # LogicaMarketingTool
