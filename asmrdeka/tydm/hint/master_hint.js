const masterArray = [

    {'id': 'hint_organizer', 'title': '【デスマッチ主催団体】', 'body': ''}, 
    {'id': 'hint_organizer', 'title': 'なにをすればよいかわからない1', 'body': 'まずは直前をふりかえりましょう。モリシタは「走り書き」が裏紙にされていたことに気づきました。そこに書かれている情報をアマミヤと共有しましょう。'}, 
    {'id': 'hint_organizer', 'title': 'なにをすればよいかわからない2', 'body': '裏紙は「LooP last One（ループラストワン）」というトークライブハウスのフライヤーのようです。同じもの（しかも、モリシタの持つ一部ではなく、全体のもの）をアマミヤが持っているようです。そのトークライブハウスでは、毎日イベントが開催されているようです。そこに気になるイベントはありませんでしょうか。'}, 
    {'id': 'hint_organizer', 'title': 'なにをすればよいかわからない3', 'body': 'デスマッチに関するイベントがあるようです。説明文からすると（「走り書き」からは確認できませんが、アマミヤの方では確認できます）、今回の路上デスマッチについても触れていそうです。詳細を確認したいですが、どうすればよいでしょうか。'}, 
    {'id': 'hint_organizer', 'title': 'なにをすればよいかわからない4', 'body': 'スケジュールの上に「詳細はこちら」のQRコードがあります。ということは……。'}, 
    {'id': 'hint_organizer', 'title': 'XXXのXXXxXXにアクセスした後1', 'body': 'QRコードをお手持ちのスマホで読み込むと、LPOのスケジュールページにアクセスできます。<br>https://looplastone.roudoujin.net/<br>該当のイベントの詳細を確認してみましょう。'}, 
    {'id': 'hint_organizer', 'title': 'XXXのXXXxXXにアクセスした後2', 'body': 'イベント詳細にアクセスすると、出演者のひとりである「デスマッチ評論家・裏モノライター」の須々木ロココに公式サイトがあることがわかります。実際にアクセスしてみましょう。'}, 
    {'id': 'hint_organizer', 'title': 'XXXXXXのブログにアクセスした後1', 'body': '一番上には「最新都市伝説レポ：トー横キッズに迫る魔の手」という気になる記事があります。流し読みしつつ、ほかの記事もみていきましょう。いま調べたい「デスマッチ」に関する記事はありませんでしょうか。<br>https://ameblo.jp/szkrcc/'}, 
    {'id': 'hint_organizer', 'title': 'XXXXXXのブログにアクセスした後2', 'body': '1つ前の記事が「伝説のデスマッチ『ノーロープ絶対安全剃刀デスマッチ』——誰も記録していない記憶の断片について」というタイトルのようです。これはASMRの中で聞いたデスマッチ名と同じようです。<br>https://ameblo.jp/szkrcc/entry-12902192110.html'}, 
    {'id': 'hint_organizer', 'title': 'XXXXXXのブログにアクセスした後3', 'body': '記事によると「ノーロープ絶対安全剃刀デスマッチ」は1980年代の新宿・花園神社でのもので、主催者・団体はいないということが明言されています。しかし、最後まで読むと、少し気になる記述があるようです。'}, 
    {'id': 'hint_organizer', 'title': 'XXXXXXのブログにアクセスした後4', 'body': '最近、トー横キッズの間で「ノーロープ絶対安全カミソリデスマッチ」の噂があるようです。これが、いま探しているデスマッチになるのではないでしょうか。それには「カギ」があるようです。'}, 
    {'id': 'hint_organizer', 'title': 'XXXXXXのブログにアクセスした後5', 'body': '現在の「ノーロープ絶対安全カミソリデスマッチ」のカギとなるのは「青いタブレット」のようです。「青いタブレット」についても、どこかに書かれていなかったでしょうか。<br>※「青いタブレット」について、モリシタが何か知っているかもしれません。アマミヤに伝えるかどうかはお任せします。'}, 
    {'id': 'hint_organizer', 'title': 'XXXXXXのブログにアクセスした後6', 'body': '一番上の「最新都市伝説レポ：トー横キッズに迫る魔の手」という記事に「青いタブレット」について書かれています。そこにはそれを配布している団体についても書かれています。<br>https://ameblo.jp/szkrcc/entry-12902193943.html'}, 
    {'id': 'hint_organizer', 'title': '解答', 'body': 'Dの部屋'}, 
    
    {'id': 'hint_sns', 'title': '【ケンから情報を聞き出す】', 'body': ''}, 
    {'id': 'hint_sns', 'title': 'なにをすればいいかわからない1', 'body': 'ケンから情報（ショウが最後に連絡していた相手）を聞き出すには、ケンにコンタクトを取る必要があります。まずはシバタからもらった画像をよく確認しましょう。これはXのアカウントのようですが……。'}, 
    {'id': 'hint_sns', 'title': 'なにをすればいいかわからない2', 'body': 'アカウント名がばっちり書かれています。実際にアクセスしてみましょう。<br>https://twitter.com/kenkabuki0920'}, 
    {'id': 'hint_sns', 'title': 'XXのXにアクセスしたあと1', 'body': 'プロフィール、投稿内容をひととおり確認しましょう。どうやら、彼もまたトー横キッズのひとりのようですが、少し変わった特性があるようです。彼から情報を聞き出すにはどうすればよいでしょうか。'}, 
    {'id': 'hint_sns', 'title': 'XXのXにアクセスしたあと2', 'body': 'プロフィールをみると「奢られ界隈」であり「通知みない」とのことです。「奢られ界隈」の意味はよくわかりませんが、「通知みない」ということは、少なくともリプライやDMを送っても反応は得られないでしょう。別のやり方を考えてみてください。'}, 
    {'id': 'hint_sns', 'title': 'XXのXにアクセスしたあと3', 'body': '固定ポスト（一番上に常に表示される）をみると「奢られ界隈」のことが書かれています。どうやら、彼に奢ってあげるとなんでも教えてくれるようです。ということは、いまの目的は「ケンに奢ること」になりそうです。彼に奢るにはどうすればよいか考えてみましょう。'}, 
    {'id': 'hint_sns', 'title': 'どのようにしてXればよいかがわからない1', 'body': 'プロフィールの「場所」の欄には「いつもの店いつもの席」とあり、投稿内容をみていくと行きつけの店を「実家」と呼んで愛用しているようです。だとすると、いまも彼は「いつもの店いつもの席」にいるのではないかと推測できます。'}, 
    {'id': 'hint_sns', 'title': 'どのようにしてXればよいかがわからない2', 'body': '「いつもの店いつもの席」ですが、そもそもその「店」とは何なのでしょうか。それは投稿内容をみればわかります。その店に関する情報を持っていないでしょうか。'}, 
    {'id': 'hint_sns', 'title': 'どのようにしてXればよいかがわからない3', 'body': 'アマミヤの手元に関連する情報があるはずです。'}, 
    {'id': 'hint_sns', 'title': 'どのようにしてXればよいかがわからない4', 'body': '食事写真の添付された投稿から、ケンはファーストフード店に入り浸っていることがわかります。その店はロゴマークから「ヤミドナルド」であり、アマミヤが持っているチラシの店と同じことがわかります（同じチラシについてケンも言及しています）。チラシによると、ヤミドナルドは歌舞伎町に6店舗あり、最近モバイルオーダーのサービスが開始していることがわかります。'}, 
    {'id': 'hint_sns', 'title': 'どのようにしてXればよいかがわからない5', 'body': 'ここまでの情報から「ケンに奢る方法」を考えてみましょう。<br>※モバイルオーダーがどのようなサービスかわからない場合、検索してみましょう。実際にQRコードからアクセスいただくと、機能がわかるかもしれません。'}, 
    {'id': 'hint_sns', 'title': 'どのようにしてXればよいかがわからない6', 'body': 'モバイルオーダーでは、商品を受け取る際に「カウンターで受け取る」「テーブルにお届けする」を選択できるようです。'}, 
    {'id': 'hint_sns', 'title': 'どのようにしてXればよいかがわからない7', 'body': 'モバイルオーダーで店舗を指定のうえ「テーブルにお届けする」を選択すれば、特定の店舗の特定の席に注文を届けることができそうです。それは遠隔のあなたたちからでも、もちろん可能です。<br><br>チラシのQRコードから実際にモバイルオーダーにアクセスしてみましょう。<br>※このURLはアマミヤ側にしかありませんので、モリシタにも共有しましょう。<br>https://yamidonalds.roudoujin.net/'}, 
    {'id': 'hint_sns', 'title': 'Xるために必要な情報がわからない', 'body': 'まずは店舗名を特定する必要があります。<br><br>店はチラシにある6店舗の中のどれかです。地図にマッピングしながら検討していきましょう。まずは地図内に6店舗の位置をプロットすることをおすすめします。チラシ内の地図に記載されている通りの名前や道の形状、店名やスポットを手がかりに場所を特定していきましょう。<br>※ちょっとしたショートカットもあります。よろしければ考えてみてください。<br>※ちなみに店舗を特定するだけであれば、すべての店舗の位置を把握する必要はありません。'}, 
    {'id': 'hint_sns', 'title': 'XXの位置を特定したい', 'body': '歌舞伎町タワー店、西武新宿駅前店などはすぐに場所が特定できると思います。花道通りも道の形状から特定できるでしょう。ただ、ほかの店だと確定にいたるには、難しいところもあるかもしれません。ただ、思い出してください。これはリアルな歌舞伎町の話です。たとえば、さくら通り店の地図内にある「神社」などは実際にあるかもしれません。GoogleやMAPアプリを併用することで、わかる情報もあるかもしれません。<br>※ただし、ヤミドナルドはフィクションです。店の場所に建物等はあっても、ヤミドナルドはありません。ご了承ください。'}, 
    {'id': 'hint_sns', 'title': 'XXの位置を確認したい', 'body': 'モバイルオーダーの画面の地図を縮小すると、歌舞伎町のどこに店舗があるのか確認できます。<br>地図上にプロットすると次のようになります。<br>./img/yamidomap.jpg'}, 
    {'id': 'hint_sns', 'title': 'ケンのいるXX名が特定できない1', 'body': 'ケンの投稿内容から、ケンのいる店舗「実家」の条件を拾っていきましょう。'}, 
    {'id': 'hint_sns', 'title': 'ケンのいるXX名が特定できない2', 'body': 'いくつかありますが、下記のような条件がわかります。<br>※古い投稿から順番に。<br>・2フロア以上（トレーもって階段のぼる瞬間まじたのしー）<br>・大通り沿いでない（アドトラ🚚が見えないのまじでありがて〜）<br>・西に窓がある・ビルがない（この席さ、夕方なるとまじで西日つら）<br><br>これらの情報から、いくつかの店舗は除外できます。<br>ほかにもケンの投稿には、歌舞伎町の地名やスポット名がいろいろ出てくるようです。気になるものがあれば検索してみましょう。'}, 
    {'id': 'hint_sns', 'title': 'ケンのいるXX名が特定できない3', 'body': '3つの条件から、チラシに記載されている情報から1フロアのみの店舗（歌舞伎町タワー店）、大通り沿いの店舗（西武新宿駅前店）、西側が通りでない店舗（さくら通り店、花道通り店）は除外できます。<br>残る候補は「歌舞伎町2丁目店」「新宿歌舞伎町店」のどちらかです。<br><br>ケンの投稿を読むと、たまに「実家ではない店舗」の情報も書かれています。そちらも参考になるかもしれません。たとえば「風林から花道はいったら〜」という投稿は、風林会館から花道通りに入ったところですので、花道通り店を示しているようです。<br>※「風林」が何のことだかわからなければ調べてみましょう。<br>https://bit.ly/43DfqRN'}, 
    {'id': 'hint_sns', 'title': 'ケンのいるXX名が特定できない4', 'body': '注目すべきは「新店」に関する情報です。'}, 
    {'id': 'hint_sns', 'title': 'ケンのいるXX名が特定できない5', 'body': '「新店」について、次のように書かれています。<br>・ハイジアの北を歩いてたら<br>・外からいつものあの音きこえてきてホッとした<br>・でもこの裏ってアレじゃん、例の「自殺の名所」…<br><br>ここから「新店」がどの店舗か考えてみましょう。'}, 
    {'id': 'hint_sns', 'title': 'ケンのいるXX名が特定できない6', 'body': '「自殺の名所」という単語に見覚えはありませんでしょうか？アマミヤはどこかでみているはずです。'}, 
    {'id': 'hint_sns', 'title': 'ケンのいるXX名が特定できない7', 'body': 'LPOフライヤーのコラム「事故？物件探訪記」によると、歌舞伎町の「自殺の名所」といえば「第6トーアビル」のようです。第6トーアビルの住所はコラム内にもありますし、検索すれば容易にみつかります。その裏にあるのが新店のようです。<br><br>ちなみに「ハイジアの北〜」というのもありましたが、「ハイジア」は大久保病院のある「東京都健康プラザ　ハイジア」のことのようです。その北ということは、ハイジアと大久保公園近くに新店があるようです。<br>※繰り返しになりますが、わからないことは積極的に調べてみましょう。'}, 
    {'id': 'hint_sns', 'title': 'ケンのいるXX名が特定できない8', 'body': 'つまり新店は「歌舞伎町2丁目店」になります。ということは……'}, 
    {'id': 'hint_sns', 'title': 'ケンのいるXX名が特定できない9', 'body': 'ケンの行きつけの店は「新宿歌舞伎町店」になります。<br>外から聞こえる「いつものあの音」というのはバッティングセンターの音（打球音）と推測できます。ともに、この2店はバッティングセンターの隣にあるため、正しそうです。'}, 
    {'id': 'hint_sns', 'title': 'ケンのいるXXXX番号がわからない1', 'body': 'あと必要なのはテーブル番号です。これは観察力がすべてです。ここまでの情報の中に、ケンの座るテーブル番号の情報があったはずです。'}, 
    {'id': 'hint_sns', 'title': 'ケンのいるXXXX番号がわからない2', 'body': 'ケンが投稿しているポテトの写真をあらためて観察してみてください。'}, 
    {'id': 'hint_sns', 'title': 'ケンのいるXXXX番号がわからない3', 'body': '左上に注目。'}, 
    {'id': 'hint_sns', 'title': 'ケンのいるXXXX番号がわからない4', 'body': '写真の中にテーブル番号が見切れています。それによると「42」番のようです。'}, 
    {'id': 'hint_sns', 'title': '何をXればよいかわからない', 'body': '（これは謎ではありません）あなたのお好きでかまいません。ただ、ケンの好物を買ってあげると、より喜んでくれるかもしれません。'}, 
    {'id': 'hint_sns', 'title': 'お金が足りない1', 'body': '落ち着いてください。どこかで良いものをみかけていませんでしょうか。'}, 
    {'id': 'hint_sns', 'title': 'お金が足りない2', 'body': 'アマミヤの手元にあるチラシには、クーポンがついていました。クーポンコード「supersizeme」を入力することで、1,000円までなら無料で購入可能です。<br>※クーポンの存在については、ケンの投稿でも触れられていました。'}, 
    {'id': 'hint_sns', 'title': 'ケンにXったがどうすればよいかわからない1', 'body': '無事に注文が完了すると、完了画面で動きがあるはずです。画面右上の通知に注目してください。'}, 
    {'id': 'hint_sns', 'title': 'ケンにXったがどうすればよいかわからない2', 'body': 'ケンから送られてきたメッセージに含まれるURLをタップしてください。<br>※この先はLINEになります。LINEアプリがインストールされた端末で進めてください。'}, 
    {'id': 'hint_sns', 'title': 'ケンにXったがどうすればよいかわからない3', 'body': '友だち登録すると、ケンの方から話しかけてきます。なにか入力するか、下部のボタン（クイックリプライ）をタップして、会話を進めてください。'}, 
    {'id': 'hint_sns', 'title': 'ケンから画像をもらったあと1', 'body': 'SNSのDM（ダイレクトメッセージ）のスクリーンショットをもらったと思います。それが、ショウが最後にやりとりしていた記録のようです。内容を確認しましょう。'}, 
    {'id': 'hint_sns', 'title': 'ケンから画像をもらったあと2', 'body': 'いま知りたいのは、その人物の名前です。よく観察してみましょう。'}, 
    {'id': 'hint_sns', 'title': 'ケンから画像をもらったあと3', 'body': 'スクリーンショットの左上に注目してください。'}, 
    {'id': 'hint_sns', 'title': '解答', 'body': 'マスダミユ<br>やりとりしている内容から、人狼コンカフェ「オオカミちゃんにカミングアウト」の店員であることもわかります。'}, 
    
    
    
    
    
    
    {'id': 'hint_hostclub', 'title': '【犯人の名前】', 'body': ''}, 
    {'id': 'hint_hostclub', 'title': 'どうすればよいかわからない', 'body': 'この問題はいくつかのアプローチがありますが、まずは、マナベが言っていたように、担当ホストを特定していきましょう。そうすれば、最終的に犯人にたどりつけるはずです。<br>ASMRの中でホストの名前は呼ばれていなかったでしょうか？聞き取れていなかったら、再度/asmrコマンドを使ってみてください。'}, 
    {'id': 'hint_hostclub', 'title': '担当ホストの「名前」がわからない1', 'body': 'ASMRの中でホストが挨拶しています。そのときに司会のホストから紹介されているようです。「本日の王子◯◯◯様」と言っています。モリシタの手元にあるホスト名刺も合わせて考えるとわかりやすいかもしれません。'}, 
    {'id': 'hint_hostclub', 'title': '担当ホストの「名前」がわからない2', 'body': 'ASMRからは担当ホストが「リュウ様」であることがわかります。モリシタの手元の名刺をみると「リュウ様」と呼べそうなホストが何人かいるようです。この中から、今回の事件の担当ホストを特定しましょう。'}, 
    {'id': 'hint_hostclub', 'title': '担当ホストがどのXXXだかわからない1', 'body': '複数の「リュウ様」は店が別々のようです。つまり、事件のあったホストクラブの店名を特定できれば、担当ホストを特定できると考えられそうです。'}, 
    {'id': 'hint_hostclub', 'title': '担当ホストがどのXXXだかわからない2', 'body': '手がかりは「注文明細管理簿」です。右下に何かがありませんでしたか。'}, 
    {'id': 'hint_hostclub', 'title': '担当ホストがどのXXXだかわからない3', 'body': '「注文明細管理簿」の右下にあるのは、店のロゴと思われるものでした。アマミヤからモリシタに「適切に」どのようなロゴか伝達しましょう。'}, 
    {'id': 'hint_hostclub', 'title': '担当ホストがどのXXXだかわからない4', 'body': '正しく伝達できれば、それが「Club Splendor」のダイヤモンドのロゴだとわかります（蒼星ベガ、山城・F・不二雄）。そのことから、同じ店に所属している「リュウ様」は「硫（リュウ）」だとわかります。<br>※この名刺自体にはロゴマークはありませんが、店名の記載から特定できます。'}, 
    {'id': 'hint_hostclub', 'title': '担当ホストの注文明細が特定できない1', 'body': '本事件の中心人物（元凶）である担当ホストが「硫（リュウ）」だと特定できたら、次は「注文明細管理簿」を読み解いていきましょう。<br>いろいろな注文が書かれているため、このままでは把握するのは難しそうです。まずは必要な行だけにしぼれないでしょうか。この管理簿の中から硫のものだけを抜き出すことができれば、事件にいたるまでの流れが理解できそうです。'}, 
    {'id': 'hint_hostclub', 'title': '担当ホストの注文明細が特定できない2', 'body': 'この注文明細管理簿は、下部の注意書きにあるように「記録は担当ホスト自身が実施」しているようです。つまり、この管理簿の筆跡は、各ホスト自身のものと考えられます。たしかに複数の筆跡が混在しているようです。<br>この中から硫の筆跡のみを抜き出してみたいです。参考になる硫の筆跡はどこかになかったでしょうか。'}, 
    {'id': 'hint_hostclub', 'title': '担当ホストの注文明細が特定できない3', 'body': '硫の筆跡はモリシタの手元にあります。'}, 
    {'id': 'hint_hostclub', 'title': '担当ホストの注文明細が特定できない4', 'body': 'モリシタの持つ硫の名刺には「24歳、漢の本気！」という書き込みがあります。この文字と同じ筆跡だけを注文明細管理簿から抜き出すことはできますでしょうか？'}, 
    {'id': 'hint_hostclub', 'title': '担当ホストの注文明細が特定できない5', 'body': '硫の筆跡のうち「2」「4」が特徴的です。「2」の下部がくるっと丸まっている、「4」が一筆書きのようになっている、という特徴から判断していきましょう。'}, 
    {'id': 'hint_hostclub', 'title': '担当ホストの注文明細が特定できない6', 'body': '正しく抜き出すと、これが硫の客の注文になります。<br>./img/hostsign.jpg'}, 
    {'id': 'hint_hostclub', 'title': '犯人の姫ネームがわからない1', 'body': '事件が発生したのは、硫（リュウ）が姫（客）の名前を間違えたからでした。2人の姫（うち1名はゆめ（ミユ））が硫（リュウ）をめぐって「シャンパンバトル」をしていたものと推測できます。実際に残った注文をみていくと「2番テーブル」と「14番テーブル」のバトルが読み取れます。'}, 
    {'id': 'hint_hostclub', 'title': '犯人の姫ネームがわからない2', 'body': '「2番テーブル」の姫ネームは不明ですが、「14番テーブル」の姫ネームはが書かれています。消去法から「2番テーブル」は「ゆめ（ミユ）」になります。たしかに、14番テーブルは最後にダメ押しの「アルマンド」を頼んでおり、それがASMRで聞いたシャンパンコールのシーンだったと推測できます。'}, 
    {'id': 'hint_hostclub', 'title': '解答', 'body': 'るる'}, 
    
    {'id': 'hint_itadaki', 'title': '【るるから情報を聞き出す】', 'body': ''}, 
    {'id': 'hint_itadaki', 'title': 'なにをすればよいかわからない', 'body': '「るる」の名前はLPOフライヤーにありました。スケジュールサイトでイベント「スナックるるちゃん」の詳細を確認しましょう。るるのnoteへのリンクがあります。'}, 
    {'id': 'hint_itadaki', 'title': 'xxxxにアクセスしたあと1', 'body': 'るるのnoteにアクセスしたら、まずは内容を一読しましょう。いまは歌舞伎町有識者であるるるから「トー横デスマッチ殺人事件」や「Dの部屋」に関する情報を聞き出したいわけですが、当の本人は逃走中で話を聞くことはできません。このnoteの内容から、なにか手がかりはないでしょうか。<br>https://note.com/chichikakakodesu/n/n8dc6b590cf72'}, 
    {'id': 'hint_itadaki', 'title': 'xxxxにアクセスしたあと2', 'body': 'るるはどろぼう女子のマニュアルを販売しているようです。それは28,000円もするようですが、気になるのは購入特典です。'}, 
    {'id': 'hint_itadaki', 'title': 'xxxxにアクセスしたあと3', 'body': '購入特典の「AIるるちゃん」は、どろぼう女子のことだけではなく、歌舞伎町の裏事情なんかも教えてくれるようです。これはとても使えそうです。しかし、値段が高いです。ヤミドナルドの時にはクーポンがありましたし、ランダムチェキの時にはマナベが購入してくれましたが、どうすれば良いでしょうか。<br>※いまはマナベが離席中のため、購入を依頼することはできません。'}, 
    {'id': 'hint_itadaki', 'title': 'xxxxにアクセスしたあと4', 'body': '本文をよく読むと、無料の体験版があるようです。もしかしたらAIるるちゃんの情報が得られるかもしれません。とりあえず、フォームから申し込んでみましょう。<br>https://forms.gle/EMPiQoXzZcf51pM5A'}, 
    {'id': 'hint_itadaki', 'title': 'XXxXXのXXXをもらったあと1', 'body': '申込みを行うと、完了ページで体験版のpdfのリンクがあります。内容を確認しましょう。AIるるちゃんについて、なにか情報はありますでしょうか。'}, 
    {'id': 'hint_itadaki', 'title': 'XXxXXのXXXをもらったあと2', 'body': '本文のサンプルに加えて、AIるるちゃんの説明などが書かれています。そこにはAIるるちゃんのQRコードも載っていますが、体験版なので読み込めないように汚しが入れられています……。どうにかすることはできないでしょうか。どこかで関係する情報を目にしているかもしれません。'}, 
    {'id': 'hint_itadaki', 'title': 'XXxXXのXXXをもらったあと3', 'body': '被害者ショウのスマホを拾っていた「ケン」のX投稿を振り返ってみてください。<br>https://twitter.com/kenkabuki0920'}, 
    {'id': 'hint_itadaki', 'title': 'XXxXXのXXXをもらったあと4', 'body': '注目すべきは、この投稿です。<br>＝＝＝<br>このあいだ拾ったチラシ<br>めっちゃふまれて👣グチャグチャだったけど<br>QRコードだけは読めたわ〜<br>こんなに汚れててもいけんのかよｗマジすげー'}, 
    {'id': 'hint_itadaki', 'title': 'XXxXXのXXXをもらったあと5', 'body': 'QRコードはだいぶ汚れに強いようです。半信半疑で、汚しの入っているQRコードをお手持ちのスマホで読み込んでみてください。'}, 
    {'id': 'hint_itadaki', 'title': 'XXxXXのXXXをもらったあと6', 'body': '大きく汚れが入っていますが、無事に読み込み成功します。晴れて「AIるるちゃん」を使えるようになりました。<br>https://ai-ruruchan.vercel.app/'}, 
    {'id': 'hint_itadaki', 'title': 'XXるるちゃんにアクセスしたあと1', 'body': 'まずはいろいろ書き込んでみましょう。AIるるちゃんが返信してきますので、それに対して適切に応答していきましょう。'}, 
    {'id': 'hint_itadaki', 'title': 'XXるるちゃんにアクセスしたあと2', 'body': '最終的な目標は「トー横デスマッチ殺人事件」や「Dの部屋」の真相です。何か聞き出せそうなタイミングがあれば、すかさず聞いていきましょう。'}, 
    {'id': 'hint_itadaki', 'title': '何も情報が聞き出せない', 'body': 'あきらめずに真摯に返答を繰り返しましょう。15往復以上会話をしても何も情報が得られない場合、次の項目をみてください。<br>※システムトラブルの可能性があります。おそれいりますが、次の項目をみて先に進んでください。'}, 
    {'id': 'hint_itadaki', 'title': '引き出せる情報', 'body': 'AIるるちゃんは「……オオハシユウキをたずねなさい。彼がこの事件の最重要参考人。ただし、もうこの世にいないかもね」と伝えてきます。'}, 
    {'id': 'hint_itadaki', 'title': '解答', 'body': 'オオハシユウキ'}, 
    
    
    
    {'id': 'hint_beat', 'title': '【マナベを倒す方法】', 'body': ''}, 
    {'id': 'hint_beat', 'title': 'オオハシのダイイングメッセージがわからない', 'body': 'ASMRを聞き直してみましょう。オオハシは最後に意味深なことを言っています。'}, 
    {'id': 'hint_beat', 'title': 'オオハシのダイイングメッセージ（前半）が解釈できない1', 'body': 'オオハシは「詳しく見る。そのあと、星の間を探せ」と言っています。<br>まずは前半の「詳しく見る」を考えてみましょう。'}, 
    {'id': 'hint_beat', 'title': 'オオハシのダイイングメッセージ（前半）が解釈できない2', 'body': 'ふたりでオオハシについて知っている情報を共有すると、そこに突破口があるかもしれません。'}, 
    {'id': 'hint_beat', 'title': 'オオハシのダイイングメッセージ（前半）が解釈できない3', 'body': 'カギになるのは、アマミヤの持っているオオハシの情報です。アマミヤはオオハシと最後に会ったときに、なにか言われているはずです。'}, 
    {'id': 'hint_beat', 'title': 'オオハシのダイイングメッセージ（前半）が解釈できない4', 'body': 'オオハシはアマミヤに「LPOにいたことを内緒にしてくれ」と言っていました。それはなぜでしょう。'}, 
    {'id': 'hint_beat', 'title': 'オオハシのダイイングメッセージ（前半）が解釈できない5', 'body': 'ドラッグレポートによると、オオハシは「調査経過については機会があれば積極的に発表していきたい」といったことを言っています。それもあわせると、ひとつの推理ができるかもしれません。'}, 
    {'id': 'hint_beat', 'title': 'オオハシのダイイングメッセージ（前半）が解釈できない6', 'body': 'LPOの扱っているテーマをみているとなにかわかるかもしれません。フライヤーによると次のようになっています。「政治、エロ、格闘技、お笑い、アイドル、映画、アニメ、ロック、SM、文学、怪談、ヤクザ、ドラッグetc」。'}, 
    {'id': 'hint_beat', 'title': 'オオハシのダイイングメッセージ（前半）が解釈できない7', 'body': 'ここまでの情報を合わせると、オオハシはLPOでドラッグ関連のトークイベントを「1日店長」として開催していたかもしれません。web上のスケジュールをあらためて確認してみましょう。'}, 
    {'id': 'hint_beat', 'title': 'オオハシのダイイングメッセージ（前半）が解釈できない8', 'body': '「歌舞伎町ドラッグレポート」というイベントをみつけることができます。<br>※「バズる怪談、バズらない怪談」というホラー気味な女性の画像が掲載されているイベントの1つ下。<br>イベント概要「現役厚生労働省官僚が覆面で語る」からも、これがオオハシのイベントの可能性が高そうです。<br><br>では、あらためて「詳しく見る」について考えてみてください。'}, 
    {'id': 'hint_beat', 'title': 'オオハシのダイイングメッセージ（前半）が解釈できない9', 'body': 'スケジュールには、スケジュール詳細へのリンク「詳しく見る→」があります。オオハシのダイイングメッセージで言っていたのは、このことのようです。イベント詳細ページを開きましょう。'}, 
    {'id': 'hint_beat', 'title': 'オオハシのダイイングメッセージ（後半）が解釈できない1', 'body': 'イベント詳細を開くと、トップページでは省略されていたイベント情報が確認できます。出演者である「ビッグY」というのは、オオハシユウキの可能性が高そうです。<br><br>続いて「星の間を探せ」です。どこかに「星」がないか、確認してみましょう。<br>https://looplastone.roudoujin.net/events/%E6%AD%8C%E8%88%9E%E4%BC%8E%E7%94%BA%E3%83%89%E3%83%A9%E3%83%83%E3%82%B0%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88'}, 
    {'id': 'hint_beat', 'title': 'オオハシのダイイングメッセージ（後半）が解釈できない2', 'body': '「星の間」ということですので、たとえば「星」という文字や「★」という記号などが2つあって、その間を探せば良いように思います。しかし、このページをよくみても、そのような「2個の星」をみつけるのは難しそうです。少し方針を変えてみましょう。'}, 
    {'id': 'hint_beat', 'title': 'オオハシのダイイングメッセージ（後半）が解釈できない3', 'body': '「星の間」は「星」そのものの間かもしれません。たとえば「ホ」と「シ」の間など。しかし「ホ」も「ほ」もなさそうです。その方針で考えてみてくだださい。'}, 
    {'id': 'hint_beat', 'title': 'オオハシのダイイングメッセージ（後半）が解釈できない4', 'body': '「星の間」は「日」と「生」の間と解釈することもできそうです。'}, 
    {'id': 'hint_beat', 'title': 'オオハシのダイイングメッセージ（後半）が解釈できない5', 'body': '後半の「＜ビッグYより＞」というメッセージ内に「日」「生」がありました。その間を探してみましょう。'}, 
    {'id': 'hint_beat', 'title': 'オオハシのダイイングメッセージ（後半）が解釈できない6', 'body': 'メッセージは次のようになっています。<br>＝＝＝<br>ドラッグは危険だ。そのことを伝えるためにこのイベントを開いているんだ。<br>日々の生活に疲れてるやつ！<br><br>生まれたことに感謝しろ！<br>そして、ドラッグは絶対にやるな！<br>＝＝＝<br>2行目の行頭「日」と4行目ぼ行頭「生」の間、3行目の空行部分の行頭付近がタップ・クリックできます。どうやら、オオハシの遺した最新のドラッグレポートにアクセスできるようです。'}, 
    {'id': 'hint_beat', 'title': 'XXのXXXXXXXXにアクセスしたあと', 'body': 'まずはオオハシが遺した最新のドラッグレポートを読み込みましょう。そこには「トー横デスマッチ殺人事件」の真相、「Dの部屋」のやっていること、そしてマナベを倒す方法の手がかりが残されているかもしれません。'}, 
    {'id': 'hint_beat', 'title': 'トー横デスマッチの実態がわからない1', 'body': 'ここからは一足飛びにマナベを倒す方法を導くこともできますが、順番に考えていきましょう。<br><br>まずこのレポートから明らかになりそうなのは「トー横デスマッチ」が何だったのか、です。「儀式的集団摂取：Dマッチ」の記載から推測できそうです。それは「Dタブを参加者全員が一斉に服用」「過去の“死のASMR音声”を聴く」「ドラッグパーティ」のようです。「Dタブの服用」というのは、被害者ショウが「青い舌」だったこととも整合します。<br>※「青い舌」については、モリシタの所持品である「ドラッグレポート」に詳しいです。まだアマミヤに共有できていなかった場合、このタイミングで実施いただくことをおすすめします。'}, 
    {'id': 'hint_beat', 'title': 'トー横デスマッチの実態がわからない2', 'body': 'さらに「Dマッチ」については「スマートフォンの使用」「『D』から始まる名称のアプリ」「コマンダーの操作によって（中略）“死のASMR音声”を聴く」ということもわかります。これらの情報から、デスマッチ＝Dマッチ（ドラッグパーティ）の真相が推理できるでしょうか。'}, 
    {'id': 'hint_beat', 'title': 'トー横デスマッチの実態がわからない3', 'body': 'Dマッチと同じようなことをあなたも何回か体験しているかもしれません。'}, 
    {'id': 'hint_beat', 'title': 'トー横デスマッチの実態がわからない4', 'body': 'あなたも「コマンド」によって「ASMRを聴く」体験をしていないでしょうか？'}, 
    {'id': 'hint_beat', 'title': 'トー横デスマッチの実態がわからない5', 'body': 'Dマッチで行われていることは、ASMR捜査と極めて近い行為だと推測されます。Dタブを服用してASMR能力が覚醒した状態の集団が、ASMRコマンドをもとにASMRを聴くドラッグパーティ。それが「トー横デスマッチ」の真相のようです。<br>※ショウの遺留品にイヤホンがあることも整合します。実際にASMRを聞き直すと、途中でイヤホンが片方外れ、左耳はデスマッチ、右耳は歌舞伎町の音になっていることに気づくかもしれません。つまり、ショウのASMRで聞いていたデスマッチ音声は、ショウが直接体験していたものではなく、イヤホン越しに聞いているASMRだった、ということになります。<br><br>では、なぜショウは亡くなったのでしょう。'}, 
    {'id': 'hint_beat', 'title': 'ショウの死因がわからない1', 'body': '「音源の正体：伝説のスナッフASMR」の記載によると「過剰に刺激的なASMRによる精神的・肉体的な影響」が懸念されるとのことです。モリシタの所持品である「ドラッグレポート」の段階でも「死亡を含む重篤な健康被害」が懸念されていました。'}, 
    {'id': 'hint_beat', 'title': 'ショウの死因がわからない2', 'body': '条件は定かではありませんが、「感受性の高い若年層」であるショウにおいて、不運にも「激しい損傷（死亡を含む）」が発現してしまったと考えることができそうです。<br><br>これが「トー横デスマッチ殺人事件」の真相と推理できそうです。つまり、この事件は「殺人事件」ではなくDマッチ＝ドラッグパーティで発生した不幸な事故だったということです。<br><br>次に、それをふまえてマナベの倒し方を検討しましょう。'}, 
    {'id': 'hint_beat', 'title': 'ショウの死因がわかったあと1', 'body': 'ショウは不幸な事故でした。しかし、その原理を転用することはできないでしょうか。たとえば、マナベをDマッチに参加させることができれば、精神的・肉体的損傷を与えることができるかもしれません。<br>※それによりマナベが死亡する可能性もありますが、「記憶障害、失神、意識の混濁」とも記載されています。ほどよく無力化だけできる可能性も少なくなさそうです。'}, 
    {'id': 'hint_beat', 'title': 'ショウの死因がわかったあと2', 'body': 'しかし、マナベ自身に行動を促すことは難しそうです。いまのマナベの状況を考え直してみてください。すると、ひとつの気付きがあるかもしれません。'}, 
    {'id': 'hint_beat', 'title': 'ショウの死因がわかったあと3', 'body': 'あなたは「マナベの退室音」を聞いていないはずです。ということは、マナベはいまもこのオンライン捜査会議に参加中であり、音声も生きていることになります。<br>※途中でシバタが退室し忘れていたことがありました。その時と似たような状況です。'}, 
    {'id': 'hint_beat', 'title': 'ショウの死因がわかったあと4', 'body': 'つまり、いまASMRコマンドを発動することで、マナベにASMR音声を聞かせることができそうです。<br>※ASMR音声は、同じオンライン捜査会議に関しているASMR能力者が全員同時に聴くことになります。<br>./img/asmrwarn.png<br><br>では、次に何のASMRを聞かせれば良いか考えてみましょう。'}, 
    {'id': 'hint_beat', 'title': 'ショウの死因がわかったあと5', 'body': 'デスマッチのASMR＝デスマッチで死んだレスラーの直筆があれば良さそうですが、いま手元にそのようなものはありません。オオハシの最新レポートによると、デスマッチASMRは「伝説的な死・珍しい死」のようです。だとすると、デスマッチと同じくらい「過剰で過激な」「伝説的な死・珍しい死」のASMRであれば、同じ効果が期待できそうです。'}, 
    {'id': 'hint_beat', 'title': 'ショウの死因がわかったあと6', 'body': '「デスマッチで死亡したレスラー」の詳細について、どこかで目にしていませんでしたでしょうか。そこに似たような「伝説的な死・珍しい死」についての記載があるかもしれません。'}, 
    {'id': 'hint_beat', 'title': 'ショウの死因がわかったあと7', 'body': '記載があるのは、デスマッチ評論家・裏モノライターである須々木ロココのブログでした。振り返ってみましょう。'}, 
    {'id': 'hint_beat', 'title': 'ショウの死因がわかったあと8', 'body': '須々木ロココのブログに「語り継がれる『伝説の珍死』」という記事があります。そこに「デスマッチで命を落としたファイター」の記載があります。あらためて前後含め内容を確認してみましょう。<br>https://ameblo.jp/szkrcc/entry-12902631993.html'}, 
    {'id': 'hint_beat', 'title': 'ショウの死因がわかったあと9', 'body': 'カギになるのは「③ 警視庁『伝説の刑事』の殉職」です。'}, 
    {'id': 'hint_beat', 'title': 'ショウの死因がわかったあと10', 'body': 'この「伝説の刑事」は「筆耕の腕も相当」であり、「自らの手で数百枚以上の警視庁封筒を作った」「自作された封筒は『警視庁』の文字を彼自身が書いて」いることがわかります。これは使えるかもしれません。'}, 
    {'id': 'hint_beat', 'title': 'ショウの死因がわかったあと11', 'body': 'リンク先の本物の警視庁封筒と比較すると、たしかに手元の封筒は「封筒全体のデザインが少し異なる」ようです（リンク先は封筒の裏面に「警視庁」の文字があるが、手元の封筒は表面にある）。「警視庁」を囲む枠の形も少しはみ出ていたり、手書きの可能性も高そうです。マナベが何らかの理由で、この伝説の刑事の自作封筒で証拠品を送ってきていた場合、この封筒からASMRコマンドを実行できそうです。'}, 
    {'id': 'hint_beat', 'title': '解答', 'body': '実際にASMRコマンドを実行してみましょう。テキストチャンネルに「/asmr 警視庁封筒」と入力してください。'}, 
];