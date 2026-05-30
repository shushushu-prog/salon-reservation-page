# 小規模店舗向け 予約導線ページ

Instagramプロフィールに貼るための、1ページ完結型の予約導線LPです。
ネイルサロン、まつ毛サロン、美容室、整体など、個人店の紹介と予約リンクをまとめる用途に向いています。

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認できます。

## カスタマイズ方法

店舗名、紹介文、メニュー、予約リンク、店舗情報、FAQは [config/site.ts](./config/site.ts) で変更できます。

主に編集する項目は以下です。

- `shop`: 店舗名、キャッチコピー、紹介文
- `links`: LINE、Googleフォーム、Instagram、Google Map のURL
- `services`: サービス内容
- `menu`: メニュー名、価格、所要時間、説明
- `reservationMethods`: 予約方法のカード。`linkKey` に `line`、`googleForm`、`instagram` のいずれかを指定します。
- `shopInfo`: 営業時間、住所、アクセス
- `faqs`: よくある質問

## 複数店舗で使う場合

このテンプレートを複製し、店舗ごとに `config/site.ts` だけ差し替えると使い回せます。
デザインを共通化しながら、各店舗のメニューや予約リンクだけを変更できます。

## デザイン

- スマホ表示を優先
- 白、ベージュ、淡いグリーンを基調
- 文字とボタンを大きめに配置
- LINE予約、Googleフォーム、Instagram DMへの導線を分かりやすく設計

## 技術構成

- Next.js
- TypeScript
- Tailwind CSS
- lucide-react
