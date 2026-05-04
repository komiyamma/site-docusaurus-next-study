export type NextModule = {
  title: string;
  start: number;
  end: number;
};

export const nextModules: NextModule[] = [
  { title: 'Module 1: Next.jsってなに？全体像をつかむ', start: 1, end: 10 },
  { title: 'Module 2: プロジェクト作成と初期設定', start: 11, end: 22 },
  { title: 'Module 3: App Router 基本', start: 23, end: 36 },
  { title: 'Module 4: コンポーネント設計', start: 37, end: 48 },
  { title: 'Module 5: スタイリング', start: 49, end: 60 },
  { title: 'Module 6: ルーティング応用', start: 61, end: 74 },
  { title: 'Module 7: データ取得（基本）とキャッシュ感覚', start: 75, end: 90 },
  { title: 'Module 8: Suspense / Streaming / エラー設計', start: 91, end: 104 },
  { title: 'Module 9: Route Handlers（API）入門', start: 105, end: 118 },
  { title: 'Module 10: MiddlewareとEdgeの考え方', start: 119, end: 132 },
  { title: 'Module 11: Server Actions & フォーム革命', start: 133, end: 150 },
  { title: 'Module 12: セキュリティ基本（XSS/CSRF/依存更新）', start: 151, end: 160 },
  { title: 'Module 13: DBとCRUD（Prisma想定）', start: 161, end: 174 },
  { title: 'Module 14: 認証（Auth.js/NextAuth系の考え方）', start: 175, end: 188 },
  { title: 'Module 15: 画像・フォント・SEO', start: 189, end: 202 },
  { title: 'Module 16: テスト（Vitest / RTL / E2E）', start: 203, end: 218 },
  { title: 'Module 17: デプロイ & 運用（Vercel中心）', start: 219, end: 232 },
  { title: 'Module 18: 卒業制作（企画→実装→公開）', start: 233, end: 244 },
  { title: 'Module 19: 運用保守・エコシステム', start: 245, end: 254 },
  { title: 'Module 20: App Router時代の状態管理（Server連携特化）', start: 255, end: 264 },
  { title: 'Module 21: 次世代スタイリング（Panda CSS）', start: 265, end: 274 },
  { title: 'Module 22: 次世代バリデーション（Valibot）', start: 275, end: 284 },
];

export function getNextStudyId(chapter: number): string {
  return `next_study_${String(chapter).padStart(3, '0')}`;
}

export function getModuleSidebarId(index: number): string {
  return `nextModule${String(index + 1).padStart(2, '0')}Sidebar`;
}

export function getModuleLabel(module: NextModule): string {
  return module.title.replace(/^Module\s+\d+:\s*/, '');
}

export function getModuleNumberFromPath(pathname: string): number | null {
  const match = pathname.match(/\/docs\/next_study_(\d{3})(?:\/|$)/);
  return match ? Number(match[1]) : null;
}
