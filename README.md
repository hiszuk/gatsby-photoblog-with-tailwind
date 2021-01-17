# Gastby Photo Gallery - typescript, tailwind css

## Photo Gallery 向け ブログ

写真ブログ向けにGatsby.jsを使い開発しました。

## 使い方

### `./gatsby-config.js` を編集します

- title: ヘッダに表示されるサイト名
- description: トップページの概要
- siteUrl: サイトURL
- author: フッタのコピーライトに表示する文字列
- image: サイトイメージ
- intro: 一覧表示画面上部に表示される文字
- locale: ロケールを設定
- footerLinks: SNS用のURLを設定するとリンク付きでアイコンが表示される

### `./content` フォルダに記事を追加します

※hello-world にサンプルがあります。

1. フォルダを作ります
2. 写真を配置します
3. 記事(`index.md`)を作成します
   1. title: 写真の題名　任意
   2. date: 日付　必須　一覧表示の並び順に影響します
   3. cover: イメージファイル名　必須
   4. tags: 任意　例　[旅行, 風景]
   5. 本文（任意）はマークダウン記法で記載します。ない場合は記事のアイコンが表示されません

### `./pages/about.tsx`を編集します

ご自分のサイトに合わせてaboutを編集します。

---

## 写真をダウンロードさせたくない場合

`./src/components/MediaCard.tsx`の63〜75行目をカットします。

```JSX
{props.src && (
  <a href={props.src} download>
    <button
      className="
      ml-2
      text-neutral-700 bg-neutral-200
      rounded-full border-transparent bg-tranparent
      hover:text-neutral-800 hover:bg-neutral-400"
    >
      <CloudIcon className="w-5 h-5 m-2 fill-current" />
    </button>
  </a>
)}
```
