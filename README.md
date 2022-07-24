# 静的サイトジェネレータを使用したMarkdownベースのブログ

## 主に使用しているもの
- Next.js
- React
- Markdown
- SSG

## 使い方
下記コマンドを実行してローカルリポジトリを作成後、node-modulesを準備してください。

```bash
git clone https://github.com/u100golf/blog.git

yarn install
# or
npm install
```

## デプロイ方法
下記コマンドでビルドと静的ページの作成を実行後、ローカルサーバを立ち上げて確認できます。
ローカルサーバは[http://localhost:3000](http://localhost:3000)です。
```bash
npm run export

npm install --save-dev serve　//一度だけ

npx serve docs
```