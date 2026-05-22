$(function () {
  // 判定用パターン（全マッチ = every(test)）
  const ANSWER_PATTERNS_1 = ['.*(女|おんな|じょせい|平井|ヒライ).*'];
  const ANSWER_PATTERNS_2 = ['.*(避雷針|ひらいしん).*'];

  const ENDING_1_URL = '../ending.html?c'; // cancel
  const ENDING_2_URL = '../ending.html?mm'; // match all ANSWER_PATTERNS_1
  const ENDING_3_URL = '../ending.html?m'; // match all ANSWER_PATTERNS_2
  const ENDING_4_URL = '../ending.html?u'; // un-match
  const MAX_LENGTH = 140;

  const $postText = $('#postText');
  const $postButton = $('#postButton');
  const $countIndicator = $('#countIndicator');
  const $countCore = $countIndicator.find('.count-core');
  const $confirmOverlay = $('#confirmOverlay');
  const compiledPatterns1 = ANSWER_PATTERNS_1.map((pattern) => new RegExp(pattern, 's'));
  const compiledPatterns2 = ANSWER_PATTERNS_2.map((pattern) => new RegExp(pattern, 's'));

  function getTextLength() {
    return $postText.val().length;
  }

  function resizeTextarea() {
    const textarea = $postText.get(0);
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  function updateCountIndicator(length) {
    if (length > MAX_LENGTH) {
      $countIndicator.addClass('is-over');
      $countIndicator.css('--progress', '0deg');
      $countCore.text(`-${length - MAX_LENGTH}`);
      return;
    }

    const progress = Math.min(length / MAX_LENGTH, 1) * 360;
    $countIndicator.removeClass('is-over');
    $countIndicator.css('--progress', `${progress}deg`);
    $countCore.text('');
  }

  function updatePostButton(length) {
    const isEnabled = length >= 1 && length <= MAX_LENGTH;
    $postButton.prop('disabled', !isEnabled);
  }

  function updateComposeState() {
    const length = getTextLength();
    resizeTextarea();
    updateCountIndicator(length);
    updatePostButton(length);
  }

  function showConfirmModal() {
    $confirmOverlay.addClass('is-visible').attr('aria-hidden', 'false');
    $('#confirmNo').trigger('focus');
  }

  function hideConfirmModal() {
    $confirmOverlay.removeClass('is-visible').attr('aria-hidden', 'true');
    $('.close-button').trigger('focus');
  }

  function isAllMatch(patterns, text) {
    return patterns.every((regex) => regex.test(text));
  }

  $postText.on('input', updateComposeState);

  $('.close-button').on('click', showConfirmModal);

  $('#confirmYes').on('click', function () {
    window.location.href = ENDING_1_URL;
  });

  $('#confirmNo').on('click', hideConfirmModal);

  $confirmOverlay.on('click', function (event) {
    if (event.target === this) {
      hideConfirmModal();
    }
  });

  $(document).on('keydown', function (event) {
    if (event.key === 'Escape' && $confirmOverlay.hasClass('is-visible')) {
      hideConfirmModal();
    }
  });

  $postButton.on('click', function () {
    if ($postButton.prop('disabled')) {
      return;
    }

    const text = $postText.val();

    var destination;
    if (isAllMatch(compiledPatterns1, text)) {
      destination = ENDING_2_URL;
    } else if (isAllMatch(compiledPatterns2, text)) {
      destination = ENDING_3_URL;
    } else {
      destination = ENDING_4_URL;
    }
    window.location.href = destination;
  });

  updateComposeState();
});