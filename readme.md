幸せok改造インスタンス
 <h3>このリポジトリは様々なデプロイに対応しています</h3>
render以外でデプロイした場合は掲示板機能は使えません
<br><br>
とりあえずインビのインスタンス置いとく<br>
https://docs.invidious.io/instances/<br>
https://invidious.namazso.eu/<br>

  
ASGIで動く    
blog内に静的サイトを入れると認証されていない時にそのサイトが表示されます。  
cookieにyuki=Trueを設定すると認証されます。  
サーバーの起動時に掲示板の公式インスタンスに接続します。定期的にサーバーを再起動してください。  <br>
<br><p>このリポジトリをデプロイ(slim-2-by-siawaseok.git)</p>

<a href="https://render.com/deploy?repo=https://github.com/siawaseok3/slim-2-by-siawaseok.git">
 <img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy to Render">
</a>
<br>


[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?type=git&builder=buildpack&repository=github.com/siawaseok3/slim-2-by-siawaseok&branch=main&name=slim-2-by-siawaseok)
<br>
<a href="https://vercel.com/new/clone?repository-url=https://github.com/siawaseok3/slim-2-by-siawaseok.git">
  <img src="https://vercel.com/button" alt="Deployto Vercel">
</a>
<br>

<h1>偽造ページの変え方</h1>

### はじめに

このリポジトリをフォークしてください。  

偽造ページを変更するには、以下のファイルを編集します:  
[blog/index.html](https://github.com/siawaseok3/slim-2-by-siawaseok/blob/main/blog/index.html)


作成した偽造ページのHTML内には、以下のコードが含まれている必要があります。これにより、サイトが正しく機能します。

### 必要なHTML要素

**`<head>`タグに追加する内容:**
```html
<link rel="stylesheet" href="styles.css">
```
**`<body>` タグに追加する内容:**
```html
<div id="cookie-notice" class="cookie-notice">
    このサイトではクッキーを使用しています。<br>
    <button id="accept-btn">承認する</button>
    <button id="reject-btn">拒否する</button>
</div>
<script src="script.js"></script>

