$(function() {
    const hintId = location.search.slice(1);
    console.log(hintId);
    // ステージIDチェック
    if(/.*hint_.*/.test(hintId)) {
        // hintIdありの場合⇒該当のものだけ表示
        masterArray
            .filter(element => element.id === hintId)
            .forEach((element) => {
                drawHint(element);
            });
    } else {
        // stageIdなしの場合⇒全部表示
        masterArray.forEach((element) => {
            drawHint(element);
        });   
    }

    $('dd').hide();

    $(document).on('click', 'dt', function(){
        $(this).next('dd').slideToggle();
    });
});

function drawHint(element) {
    if (element.body) {
        // 正規表現でURLを検出し、拡張子に応じてタグを変換
        element.body = element.body.replace(/((http[s]?:\/|\.)\/[^\s"'<>]+)/g, (url) => {
            if (url.match(/\.(jpg|jpeg|png)$/i)) {
                return `<img src="${url}" alt="image" />`;
            } else {
                return `<a href="${url}" target="_blank">${url}</a>`;
            }
        });
    }

    if (!element.body) {
        $('#hint').append('<h2>' + element['title'] + '</h2><dl id="' + element['id'] + '"></dl>');
    } else {
        $('#' + element['id']).append('<dt>' + element['title'] + '</dt><dd>' + element['body'] + '</dd>');
    }

    return;
}