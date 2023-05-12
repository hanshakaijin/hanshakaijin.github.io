$(function() {
    // ステージIDチェック
    if(/.*stage=([1-2]{1}).*/.test(location.search)) {
        // stageIdあり（1〜7）の場合⇒該当のものだけ表示
        stageId = location.search.match(/.*stage=([1-7]{1}).*/)[1] - 0;
        masterArray.forEach((element) => {
            if(Math.floor(element['id']/100) == stageId) {
                drawGamou(element);
            }
        });  
    } else {
        // stageIdなしの場合⇒全部表示
        masterArray.forEach((element) => {
            drawGamou(element);
        });   
    }

    $('dd').hide();

    $(document).on('click', 'dt', function(){
        $(this).next('dd').slideToggle();
    });
});

function drawGamou(element) {
    const categoryId = Math.floor(element['id']/100);

    if(element['id'] % 100 === 0) {
        $('#hint').append('<h2>' + element['title'] + '</h2><dl id="hint-' + categoryId + '"></dl>');
    } else {
        $('#hint-' + categoryId).append('<dt id="' + element['id'] + '">' + element['title'] + '</dt><dd>' + element['body'] + '</dd>');
    }

    return;
}