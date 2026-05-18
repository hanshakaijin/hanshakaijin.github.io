(function ($) {
  "use strict";

  var SPECIAL_RESPONSE = "お問い合わせありがとうございます。反社会人サークルです。\n\n" +
    "このたびは商品パッケージ内に不備があり、ご迷惑おかけしました。\n\n" +
    "ご指摘いただきましたように、本来ブランク（空白）であるブランクカードに意図しない図案が混入しておりました。深くお詫び申し上げます。\n\n" +
    "以下は今回の顛末になります。\n\n" +
    "本ゲームにおいて、お気づきになられた方も多いと思いますが、炎上対象となるインフルエンサーにはモデルとなる人物が存在します。ただし、当然そのまま用いるわけにはいきませんので、ぼかした形でアレンジしています（誹謗中傷やネガティブな印象を与えないような調整をしています）。\n\n" +
    "そのうちの1人の方において、ゲーム制作中にトラブルが発生しました。弊サークルとの間のトラブルということではなく、そのインフルエンサーご自身のトラブルになります。\n\n" +
    "詳細ははっきりとしていないのですが、弊サークルとしては、この方をモデルにしたカードを自粛させていただく判断をしました。入稿直前だったため、急遽、該当のインフルエンサーを含むカードを「ブランクカード」扱いにして入稿したのですが、ギリギリの作業だったことで削除作業に漏れが発生し、下絵レイヤーが残ってしまっていました。\n\n" +
    "以降、このような商品不備を起こさないように、入稿前のチェック体制を強化してまいります。\n\n" +
    "今後とも、反社会人サークルのゲーム・謎解きをご愛顧いただければさいわいです。\n\n" +
    "追伸：当該インフルエンサーの「トラブル」ですが、詳細がはっきりしていません。我々も気になって調べていたのですが、よくわからず……。もしご興味がありましたら、ご自身で調べていただくのも良いかもしれません。\n\n" +
    "反社会人サークル";

  var GENERIC_RESPONSE = "お問い合わせありがとうございます。反社会人サークルです。\n\n" +
    "ご入力いただいた内容ですが、個別対応とさせていただければさいわいです。\n" +
    "XよりDMでお問い合わせください。\n" +
    '<a class="text-link" href="https://x.com/hanshakaijin" target="_blank" rel="noopener noreferrer">https://x.com/hanshakaijin</a>\n\n' +
    "お手数おかけしますが、よろしくおねがいします。\n\n" +
    "反社会人サークル";

  var specialMessagePattern = /.*ブランクカード.*/;

  $(function () {
    var $form = $("#inquiry-form");
    var $type = $("#inquiry-type");
    var $productField = $("#product-field");
    var $product = $("#product-name");
    var $message = $("#message");
    var $error = $("#form-error");
    var $modal = $("#response-modal");
    var $modalPanel = $modal.find(".modal-panel");
    var $modalMessage = $("#modal-message");
    var lastFocusedElement = null;

    function isProductInquiry() {
      return $type.val() === "商品について";
    }

    function updateProductField() {
      if (isProductInquiry()) {
        $productField.prop("hidden", false);
      } else {
        $productField.prop("hidden", true);
        $product.val("");
        clearFieldError($product);
      }
    }

    function clearFieldError($field) {
      $field.removeClass("is-error").attr("aria-invalid", "false");
    }

    function setFieldError($field) {
      $field.addClass("is-error").attr("aria-invalid", "true");
    }

    function clearErrors() {
      $error.prop("hidden", true);
      $form.find(".form-control").each(function () {
        clearFieldError($(this));
      });
    }

    function getRequiredFields() {
      var fields = [
        $("#name"),
        $type,
        $message
      ];

      if (isProductInquiry()) {
        fields.push($product);
      }

      return fields;
    }

    function validateForm() {
      var firstErrorField = null;

      clearErrors();

      $.each(getRequiredFields(), function (_, $field) {
        if (!$.trim($field.val())) {
          setFieldError($field);
          if (!firstErrorField) {
            firstErrorField = $field;
          }
        }
      });

      if (firstErrorField) {
        $error.prop("hidden", false);
        firstErrorField.trigger("focus");
        return false;
      }

      return true;
    }

    function openModal(message, isHtml) {
      lastFocusedElement = document.activeElement;
      if (isHtml) {
        $modalMessage.html(message);
      } else {
        $modalMessage.text(message);
      }
      $modal.prop("hidden", false);
      $modalPanel.scrollTop(0);
      $modalMessage.scrollTop(0);
      $("body").addClass("is-modal-open");
    }

    function closeModal() {
      $modal.prop("hidden", true);
      $("body").removeClass("is-modal-open");

      if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
        lastFocusedElement.focus();
      }
    }

    $type.on("change", updateProductField);

    $form.on("input change", ".form-control", function () {
      clearFieldError($(this));
      if (!$form.find(".form-control.is-error").length) {
        $error.prop("hidden", true);
      }
    });

    $form.on("submit", function (event) {
      event.preventDefault();

      if (!validateForm()) {
        return;
      }

      var productName = $product.val();
      var messageText = $message.val();
      var isSpecialProduct = productName.indexOf("炎上職人") !== -1;
      var isSpecialMessage = specialMessagePattern.test(messageText);

      if (isSpecialProduct && isSpecialMessage) {
        openModal(SPECIAL_RESPONSE);
      } else {
        openModal(GENERIC_RESPONSE, true);
      }
    });

    $("[data-modal-close]").on("click", closeModal);

    $(document).on("keydown", function (event) {
      if (event.key === "Escape" && !$modal.prop("hidden")) {
        closeModal();
      }
    });

    updateProductField();
  });
})(jQuery);
