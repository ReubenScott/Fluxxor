■ファイル一式の配置場所

js-files以下のファイル一式を、/dp以下に配置します。
/dp直下にpackage.jsonが置かれることになります。


■開発マシンへのセットアップ方法

1.Node.jsをインストールします。

バージョンは、v4.4.4をインストールします。
以下のようなサイトからダウンロード可能です。
https://nodejs.org/dist/v4.4.4/


> node -v
> npm -v

コマンドプロンプトなどから上記コマンドを実行し、
以下のように表示されれば問題ありません。
---------------------------------------------
C:\Users\agenda>node -v
v4.4.4

C:\Users\agenda>npm -v
v2.15.1

---------------------------------------------



2.コマンドプロンプトなどから以下のコマンドを実行し
　必要なパッケージをインストールします。

> npm -g install gulp-cli@1.2.2


3.コマンドプロンプトなどで/dp以下に移動して、
　以下のコマンドから必要なパッケージをインストールします。
　※管理者権限で実行してください。

> npm install


4.以下のコマンドからインストール済みパッケージを確認します。

> npm list --depth=0 -g
> npm list --depth=0


以下のサンプルのように出力されれば問題ありません。
---------------------------------------------
c:\Users\agenda\work\dp>npm list --depth=0 -g
C:\Users\agenda\AppData\Roaming\npm
└── gulp-cli@1.2.2

c:\Users\agenda\work\dp>npm list --depth=0
dsweb_dp@1.0.0 c:\Users\agenda\work\dp
├── babel@6.5.2
├── babel-core@6.10.4
├── babel-es6-polyfill@1.0.1
├── babel-polyfill@6.9.1
├── babel-preset-es2015@6.9.0
├── babel-preset-react@6.5.0
├── babelify@7.3.0
├── browserify@13.0.1
├── fluxxor@1.7.3
├── gulp@3.9.1
├── gulp-uglify@1.5.4
├── licensify@3.1.2
├── react@15.2.0
├── react-dom@15.2.0
├── reactify@1.1.1
├── uglify@0.1.5
├── uglify-js@2.6.3
├── uglifyjs@2.4.10
├── vinyl-buffer@1.0.0
├── vinyl-source-stream@1.1.0
└── watchify@3.7.0
---------------------------------------------



■リリース時のビルド方法

コマンドプロンプトなどで/dp以下に移動して、
以下のコマンドを実行します。

> gulp build


上記を実行すると、以下の3つのファイルが生成されます。

/dp/js/list.js
/dp/js/confirm.js
/dp/js/hotel_info.js


以下のように変えることで上記を個別にビルドすることも可能です。

> gulp build_list
> gulp build_confirm
> gulp build_hotel_info



■開発時のビルド方法

コマンドプロンプトなどで/dp以下に移動して、
以下のコマンドを実行します。

> npm run watch_list


上記コマンドを実行すると、/dp/src/js以下のファイルを監視して、
ソースに変更が発生すると、自動で差分ビルドが行われて、
/dp/js/list.jsに上書き保存されます。


以下のコマンドはconfirm.jsとhotel_info.jsの場合です。

> npm run watch_confirm
> npm run watch_hotel_info


このビルドは、初回のビルドには時間がかかりますが、
2回目以降は差分ビルドのため初回ほど時間はかかりません。

また、圧縮など行っていないため、[リリース時のビルド]よりも
生成されるファイルサイズが大きくなります。

