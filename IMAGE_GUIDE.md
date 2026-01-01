# ロケーション画像ダウンロードガイド

このガイドでは、サイトに使用する5つのロケーション画像をダウンロードして配置する方法を説明します。

## 📸 必要な画像

以下の5つの画像が必要です：

1. **上海 OLD MONEY街** - `images/locations/shanghai.jpg`
2. **長野県上高地** - `images/locations/kamikochi.jpg`
3. **バリ島ビーチ** - `images/locations/bali.jpg`
4. **トルコ市街地** - `images/locations/turkey.jpg`
5. **渋谷区松濤** - `images/locations/shoto.jpg`

## 🎨 画像の推奨仕様

- **解像度**: 最低 1920x1080px（フルHD）
- **アスペクト比**: 16:9 または 3:2
- **ファイル形式**: JPG
- **ファイルサイズ**: 200KB - 1MB（Web最適化済み）
- **画質**: 高品質だが、Web用に圧縮されたもの

## 🌐 無料画像サービス

以下のサービスから高品質な無料画像をダウンロードできます：

### 1. Unsplash（推奨）
- URL: https://unsplash.com/
- 商用利用可能
- クレジット表記不要
- 高品質な写真が豊富

**検索キーワード例**：
- 上海: "Shanghai old money", "Shanghai French Concession", "Shanghai architecture"
- 上高地: "Kamikochi", "Japanese Alps", "Nagano nature"
- バリ: "Bali beach", "Bali luxury", "Bali sunset"
- トルコ: "Istanbul streets", "Turkey architecture", "Turkish bazaar"
- 松濤: "Tokyo residential", "Shibuya quiet street", "Japanese modern house"

### 2. Pexels
- URL: https://www.pexels.com/
- 商用利用可能
- クレジット表記不要

### 3. Pixabay
- URL: https://pixabay.com/
- 商用利用可能
- クレジット表記不要

## 📥 ダウンロード手順

### Unsplashを使用する場合：

1. **https://unsplash.com/** にアクセス
2. 検索バーに上記のキーワードを入力
3. 気に入った画像をクリック
4. 「Download free」ボタンをクリック
5. サイズは「Large」または「Original」を選択

### ファイル名の変更：

ダウンロードした画像のファイル名を以下のように変更してください：

```
上海の画像 → shanghai.jpg
上高地の画像 → kamikochi.jpg
バリの画像 → bali.jpg
トルコの画像 → turkey.jpg
松濤の画像 → shoto.jpg
```

## 📂 画像の配置

ダウンロードした画像を以下のディレクトリに配置してください：

```
MENS-Fashon-EC/
└── images/
    └── locations/
        ├── shanghai.jpg
        ├── kamikochi.jpg
        ├── bali.jpg
        ├── turkey.jpg
        └── shoto.jpg
```

### コマンドラインで配置する場合：

```bash
# プロジェクトディレクトリに移動
cd /home/user/MENS-Fashon-EC

# 画像をコピー（ダウンロードフォルダから）
cp ~/Downloads/shanghai.jpg images/locations/
cp ~/Downloads/kamikochi.jpg images/locations/
cp ~/Downloads/bali.jpg images/locations/
cp ~/Downloads/turkey.jpg images/locations/
cp ~/Downloads/shoto.jpg images/locations/
```

## 🎨 画像の質感統一について

CSSで自動的に以下のフィルターが適用され、すべての画像が統一された質感になります：

- **セピア調**: 15-22%（各画像で微調整）
- **彩度**: 72-85%（柔らかな色合い）
- **明度**: 100-108%（明るめ）
- **コントラスト**: 92-100%（自然な雰囲気）
- **色相**: -10度〜-3度（温かみのある色調）

これにより、異なる写真でもサイトのニュアンスカラーに馴染む統一感が生まれます。

## 🔍 画像選択のポイント

### 上海 OLD MONEY街
- クラシックな建築物
- フランス租界のような雰囲気
- 落ち着いた色調の建物

### 上高地
- 自然の美しさが際立つもの
- 山、川、森などの風景
- 清涼感のある写真

### バリ島ビーチ
- 穏やかなビーチシーン
- ラグジュアリー感のあるもの
- サンセットや静かな雰囲気

### トルコ市街地
- 歴史的な建築物
- イスタンブールの街並み
- エキゾチックな雰囲気

### 渋谷区松濤
- 静かな住宅街
- 洗練された都会の風景
- モダンな建築

## ✅ 確認方法

画像を配置したら、ブラウザで `http://localhost:8000` を開いて確認してください。

ページをスクロールして、各ロケーションセクションが正しく表示されているか確認します。

## 🛠️ トラブルシューティング

### 画像が表示されない場合：

1. ファイル名が正しいか確認（大文字・小文字も正確に）
2. ファイルが `images/locations/` ディレクトリにあるか確認
3. ブラウザのキャッシュをクリア（Ctrl+Shift+R または Cmd+Shift+R）
4. 画像ファイルのパーミッションを確認

```bash
# パーミッションを確認
ls -la images/locations/

# 必要に応じて読み取り権限を付与
chmod 644 images/locations/*.jpg
```

## 📝 クレジット表記（オプション）

Unsplash、Pexels、Pixabayの画像は基本的にクレジット表記不要ですが、礼儀として表記したい場合は、フッターに以下のように追加できます：

```html
<p class="photo-credit">
  Photos by <a href="photographer-url">Photographer Name</a> on Unsplash
</p>
```

---

画像を配置したら、ぜひブラウザでサイトを確認してみてください！
各ロケーションの写真が美しく表示され、サイト全体に統一感が生まれるはずです。
