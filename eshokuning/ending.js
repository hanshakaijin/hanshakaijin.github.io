/* global jQuery */
(function ($) {
  "use strict";

  var COPY = {
    common: {
      kicker: "ending",
      commonLead: "判定を記録しました。",
      commonBody:
        "このページはクエリ（c / mm / m / u）に応じて内容が変化します。",
    },
    c: {
      title: "エピローグ",
      resultTitle: "あなたは投稿をキャンセルした。",
      detail:
        "あなたは投稿をキャンセルした。\n世界は何も変わらない。それは、ある意味では一番平和なことだった。",
    },
    mm: {
      title: "エピローグ",
      resultTitle: "観測は成立した。",
      detail:
        "あなたの投稿はネットの海を駆け巡った。増えていくリポスト、コメント通知が止まらない。それは「ネットの避雷針」に対する下世話な興味を刺激するには十分すぎるものだった。",
    },
    m: {
      title: "エピローグ",
      resultTitle: "観測は成立した（暫定）。",
      detail:
        "あなたの投稿はネットの海を駆け巡った。人々は忘れかけていた「ネットの避雷針」について、再度思いを馳せることになった。",
    },
    u: {
      title: "エピローグ",
      resultTitle: "観測は失敗した。",
      detail:
        "あなたの投稿はネットの海にぽつりと沈んでいった。\n今日もSNSはいつもと同じ顔を見せている。",
    },
    unknown: {
      title: "エピローグ",
      resultTitle: "結果を判定できません。",
      detail:
        "クエリが不正です。\n\nURLを確認してください。",
    },
  };

  function getCode() {
    return String(window.location.search || "")
      .replace(/^\?/, "")
      .trim();
  }

  function reveal() {
    $("body").addClass("is-revealed");
  }

  function applyCopy(code) {
    var copy = COPY[code] || COPY.unknown;

    $("#ending-kicker").text(COPY.common.kicker);
    $("#ending-title").text(copy.title);
    $("#ending-result-title").text(copy.resultTitle);
    $("#ending-common-lead").text(COPY.common.commonLead);
    $("#ending-common-body").text(COPY.common.commonBody);

    // 改行は
    // - CSS側は `white-space` 指定していないのでここで <br> 化
    // - ただし安全にするため text -> html 変換を最低限に
    var detailHtml = String(copy.detail)
      .split("\n")
      .map(function (line) {
        return $("<span>").text(line).prop("outerHTML");
      })
      .join("<br>");

    $("#ending-detail").html(detailHtml);
  }

  $(function () {
    var code = getCode();
    applyCopy(code);

    // tap/click to reveal
    $("#revealOverlay").on("click", reveal);
    $("body").on("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        reveal();
      }
    });
  });
})(jQuery);
