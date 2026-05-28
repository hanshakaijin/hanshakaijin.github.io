/* global jQuery */
(function ($) {
  "use strict";

  var tapHintTimerId = null;

  var COPY = {
    c: {
      detail:
        "あなたは投稿をキャンセルした。\n世界は何も変わらない。それは、ある意味では一番平和なことだった。",
    },
    mm: {
      detail:
        "あなたの投稿はネットの海を駆け巡った。増えていくリポスト、コメント通知が止まらない。それは「ネットの避雷針」に対する下世話な興味を刺激するには十分すぎるものだった。",
    },
    m: {
      detail:
        "あなたの投稿はネットの海を駆け巡った。人々は忘れかけていた「ネットの避雷針」について、再度思いを馳せることになった。",
    },
    u: {
      detail:
        "あなたの投稿はネットの海にぽつりと沈んでいった。\n今日もSNSはいつもと同じ顔を見せている。",
    },
    unknown: {
      detail:
        "ネットの避雷針が消えた世界。今日もまた1日が過ぎていく。",
    },
  };

  function getCode() {
    return String(window.location.search || "")
      .replace(/^\?/, "")
      .trim();
  }

  function reveal() {
    if (tapHintTimerId !== null) {
      window.clearTimeout(tapHintTimerId);
      tapHintTimerId = null;
    }

    $("#revealOverlay").removeClass("is-hint-visible");
    $("body").addClass("is-revealed");
  }

  function applyCopy(code) {
    var copy = COPY[code] || COPY.unknown;

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

    // 5秒後、まだrevealされていなければ TAP ヒントをフェードイン
    tapHintTimerId = window.setTimeout(function () {
      tapHintTimerId = null;

      if (!$("body").hasClass("is-revealed")) {
        $("#revealOverlay").addClass("is-hint-visible");
      }
    }, 5000);

    // tap/click to reveal
    $("#revealOverlay").on("click", reveal);
    $("body").on("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        reveal();
      }
    });
  });
})(jQuery);
