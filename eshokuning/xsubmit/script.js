$(function () {
  const ANSWER_PATTERNS = ['.*test.*', '.*(aaa|bbb).*'];

  const ENDING_1_URL = './ending1.html';
  const ENDING_2_URL = './ending2.html';
  const ENDING_3_URL = './ending3.html';
  const MAX_LENGTH = 140;

  const $postText = $('#postText');
  const $postButton = $('#postButton');
  const $countIndicator = $('#countIndicator');
  const $countCore = $countIndicator.find('.count-core');
  const $confirmOverlay = $('#confirmOverlay');
  const compiledPatterns = ANSWER_PATTERNS.map((pattern) => new RegExp(pattern, 's'));

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

  function isCorrectAnswer(text) {
    return compiledPatterns.every((regex) => regex.test(text));
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

    const destination = isCorrectAnswer($postText.val()) ? ENDING_2_URL : ENDING_3_URL;
    window.location.href = destination;
  });

  updateComposeState();
});