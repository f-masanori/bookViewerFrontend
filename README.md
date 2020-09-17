# bookViewer Frontend

## セットアップ

## 開発サーバー立ち上げ
- (ローカル環境) 
1. git clone等でソースコードを持ってくる
2. プロジェクトのルートディレクトリで'''npm install'''
3. '''npm start'''で開発サーバー を立ち上げる
- (docker)
1. ローカル環境にdockerをインストール
2. '''docker-compose up'''で起動
3. '''docker exec -it (コンテナID) sh''' 等のコマンドでコンテナの中に入る
4. コンテナ内の /app でnpm install
5. '''npm start'''で開発サーバー を立ち上げる

## メモ
reduxで使用してるグローバルステートはsrc/reducer 内に記述 
## ESlint,prettierについて
ESlint、prettierの設定については、[りあクト！ TypeScriptで始めるつらくないReact開発 第2版](https://booth.pm/ja/items/1312652)を参考にしている


