document.getElementById('submit').addEventListener('click', function() {
  const answer = document.getElementById('answer').value.trim();
  const regex = /のろわれる|ノロワレル|呪われる/;
  if (regex.test(answer)) {
    showCorrectPopup();
  } else {
    alert('不正解です');
  }
});

function showCorrectPopup() {
  // 既存モーダルがあれば削除
  const oldModal = document.getElementById('popup-modal');
  if (oldModal) oldModal.remove();

  // モーダル作成
  const modal = document.createElement('div');
  modal.id = 'popup-modal';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.background = 'rgba(0,0,0,0.7)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '9999';

  const content = document.createElement('div');
  content.style.background = '#fff';
  content.style.borderRadius = '12px';
  content.style.padding = '32px 24px 24px 24px';
  content.style.textAlign = 'center';
  content.style.minWidth = '220px';
  content.style.maxWidth = '90vw';
  content.style.boxShadow = '0 2px 16px rgba(0,0,0,0.15)';

  const title = document.createElement('h2');
  title.textContent = '正解';
  title.style.marginBottom = '18px';
  content.appendChild(title);

  const shareBtn = document.createElement('button');
  shareBtn.textContent = 'Xでシェア';
  shareBtn.style.background = '#222';
  shareBtn.style.color = '#fff';
  shareBtn.style.border = 'none';
  shareBtn.style.borderRadius = '6px';
  shareBtn.style.padding = '12px 24px';
  shareBtn.style.fontSize = '1.1rem';
  shareBtn.style.cursor = 'pointer';
  shareBtn.style.marginBottom = '12px';
  shareBtn.addEventListener('click', function() {
    const text = encodeURIComponent('『売れなかったTシャツで謎解き作ってみた』お試し謎に正解した！そして私は■■■■――。');
    const url = encodeURIComponent('https://gamemarket.jp/game/187097');
    const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    window.open(shareUrl, '_blank');
  });
  content.appendChild(shareBtn);

  modal.appendChild(content);
  document.body.appendChild(modal);

  // モーダル外クリックで閉じる
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.remove();
    }
  });
}
