$(function() {
// ヒントデータサンプル（2階層分、複数分岐あり）
let hintData = [
  {
    "階層1質問文": "階層1質問A",
    "階層1選択肢": "階層1選択肢A",
    "階層2質問文": "階層2質問A",
    "階層2選択肢": "a",
    "テキスト": "テキスト1",
    "画像": null
  },
  {
    "階層1質問文": "階層1質問A",
    "階層1選択肢": "階層1選択肢A",
    "階層2質問文": "階層2質問A",
    "階層2選択肢": "b",
    "テキスト": "テキスト2",
    "画像": null
  },
  {
    "階層1質問文": "階層1質問A",
    "階層1選択肢": "階層1選択肢B",
    "階層2質問文": "階層2質問B",
    "階層2選択肢": "c",
    "テキスト": "テキスト3",
    "画像": null
  },
  {
    "階層1質問文": "階層1質問A",
    "階層1選択肢": "階層1選択肢B",
    "階層2質問文": "階層2質問B",
    "階層2選択肢": "d",
    "テキスト": "テキスト4",
    "画像": null
  },
  {
    "階層1質問文": "",
    "階層1選択肢": "階層1選択肢C",
    "階層2質問文": "",
    "階層2選択肢": "e",
    "テキスト": "テキスト5",
    "画像": null
  },
  {
    "階層1質問文": "",
    "階層1選択肢": "階層1選択肢C",
    "階層2質問文": "",
    "階層2選択肢": "f",
    "テキスト": "テキスト6",
    "画像": null
  },
  {
    "階層1質問文": "",
    "階層1選択肢": "階層1選択肢D",
    "階層2質問文": "階層2質問D",
    "階層2選択肢": "g",
    "テキスト": "テキスト7",
    "画像": null
  }
];

/**
 * 任意階層（最大5層）に対応したツリー構造を生成
 */
function buildHintTree(data) {
  const LEVELS = 5;
  const tree = [];
  let rootQuestion = "";

  data.forEach(row => {
    let qNodes = tree;
    for (let i = 1; i <= LEVELS; i++) {
      const qKey = `階層${i}質問文`;
      const aKey = `階層${i}選択肢`;
      const question = row[qKey] == null ? '' : row[qKey];
      const answer = row[aKey];
      if (i === 1 && question && !rootQuestion) rootQuestion = question;
      if (!answer) break;

      // 質問文ノード
      let qNode = qNodes.find(n => n.質問文 === question);
      if (!qNode) {
        qNode = { 質問文: question, 選択肢リスト: [] };
        qNodes.push(qNode);
      }

      // 選択肢ノード
      let aNode = qNode.選択肢リスト.find(n => n.選択肢 === answer);
      if (!aNode) {
        aNode = { 選択肢: answer, children: [] };
        qNode.選択肢リスト.push(aNode);
      }

      // leaf
      if (i === LEVELS || !row[`階層${i+1}選択肢`]) {
        aNode.leaf = { "テキスト": row["テキスト"], "画像": row["画像"] };
      }

      // 次の階層へ
      qNodes = aNode.children;
    }
  });

  return { rootQuestion, tree };
}

/**
 * 任意階層（最大5層）に対応した再帰描画
 */
function renderHints(tree, $parent = $("#hint-container"), level = 1) {
  tree.forEach(qNode => {
    // 質問文
    if (qNode.質問文) {
      $parent.append($("<div>").addClass(`hint-q-title hint-q${level}-title`).text(qNode.質問文));
    }
    // 選択肢リスト
    qNode.選択肢リスト.forEach(aNode => {
      const $aBlock = $("<div>").addClass(`hint-block hint-block${level}`);
      const $btn = $("<button>").addClass(`hint-a-btn hint-a${level}-btn`).text(aNode.選択肢);
      $aBlock.append($btn);

      if (aNode.leaf) {
        // leaf: テキスト・画像をトグル表示
        const $leafContent = $("<div>").addClass("hint-leaf-content").hide();
        $leafContent.append($("<span>").addClass("hint-text").html(aNode.leaf["テキスト"]));
        if (aNode.leaf["画像"]) {
          $leafContent.append($("<img>").addClass("hint-img").attr("src", aNode.leaf["画像"]));
        }
        $btn.on("click", function() {
          const isOpen = $btn.hasClass("open");
          $btn.toggleClass("open", !isOpen);
          $leafContent.slideToggle(200);
        });
        $aBlock.append($leafContent);
      } else if (aNode.children && aNode.children.length > 0) {
        // 下層: wrapをトグル
        const $nextWrap = $("<div>").addClass(`hint-q${level+1}-wrap`).hide();
        $btn.on("click", function() {
          const isOpen = $btn.hasClass("open");
          $btn.toggleClass("open", !isOpen);
          $nextWrap.slideToggle(200);
        });
        renderHints(aNode.children, $nextWrap, level + 1);
        $aBlock.append($nextWrap);
      }
      $parent.append($aBlock);
    });
  });
}

  // GoogleスプレッドシートCSV取得・パース
  const csvUrl = "https://docs.google.com/spreadsheets/d/1ojI1R7FrjJw5LHMA2jBnTz52ThJja33Y9g5ond7-O20/gviz/tq?tqx=out:csv";
  fetch(csvUrl)
    .then(res => res.ok ? res.text() : Promise.reject())
    .then(csv => {
      // ""内の改行のみ<br>に置換
      const csvBr = csv.replace(/"((?:[^"]|"")*)"/gs, (m) =>
        m.replace(/\r?\n/g, "<br>")
      );
      // 1レコード1行に
      const lines = csvBr.split(/\r?\n/);
      const parsed = [];
      for (let i = 1; i < lines.length; i++) { // 1行目（ヘッダ）はスキップ
        // 12カラム分だけ分割
        let cols = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).slice(0, 12);
        // 1,2カラム目が空ならスキップ
        if (!cols[0] || !cols[1]) continue;
        // 各セルの前後ダブルクォート除去＋必ず文字列化
        cols = cols.map(cell => {
          let s = String(cell == null ? "" : cell);
          if (s.startsWith('"')) s = s.slice(1);
          if (s.endsWith('"')) s = s.slice(0, -1);
          return s;
        });
        // オブジェクト化
        parsed.push({
          "階層1質問文": cols[0] || "",
          "階層1選択肢": cols[1] || "",
          "階層2質問文": cols[2] || "",
          "階層2選択肢": cols[3] || "",
          "階層3質問文": cols[4] || "",
          "階層3選択肢": cols[5] || "",
          "階層4質問文": cols[6] || "",
          "階層4選択肢": cols[7] || "",
          "階層5質問文": cols[8] || "",
          "階層5選択肢": cols[9] || "",
          "テキスト": cols[10] || "",
          "画像": cols[11] || null
        });
      }
      if (parsed.length > 0) {
        hintData = parsed;
      }
    })
    .catch(() => {
      // 取得失敗時はサンプル配列のまま
    })
    .finally(() => {
      console.log(hintData);
      const { rootQuestion, tree } = buildHintTree(hintData);
      console.log(tree);
      renderHints(tree, $("#hint-container"), 1);
    });
});
