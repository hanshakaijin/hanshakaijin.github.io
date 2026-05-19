(function ($) {
  "use strict";

  $(function () {
    var $scrollCue = $(".scroll-cue");
    var $startCheckInputs = $(".start-check-input");
    var $startCheckBox = $(".start-check-box");
    var $startMessage = $(".start-message");

    function updateScrollCue() {
      if (!$scrollCue.length) {
        return;
      }

      var scrollTop = $(window).scrollTop();
      var viewportHeight = $(window).height();
      var documentHeight = $(document).height();
      var remainingScroll = documentHeight - (scrollTop + viewportHeight);

      $scrollCue.toggleClass("is-hidden", remainingScroll < 120);
    }

    function updateStartMessage() {
      if (!$startCheckBox.length || !$startCheckInputs.length) {
        return;
      }

      var isReady = $startCheckInputs.toArray().every(function (input) {
        return input.checked;
      });

      $startCheckBox.toggleClass("is-ready", isReady);
      $startMessage.attr("aria-hidden", String(!isReady));
    }

    $(window).on("scroll resize load", updateScrollCue);
    updateScrollCue();

    $startCheckInputs.on("change", updateStartMessage);
    updateStartMessage();
  });
})(jQuery);
