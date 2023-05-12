$(function(){
    // answer
    $('#sendAnswer').on('click', () => {
        const inputAnswer = $('#queryEdit').val();
        console.log('clicked: ' + inputAnswer);
        // answer check
        const answerRegExp = new RegExp('(オオトミゴウ|おおとみごう|大富豪)', 'gim');
        // console.log(answerRegExp);
        if(answerRegExp.test(inputAnswer)) {
            // correct
            console.log('正解');
            $('#answer-true').show();
            $('#answer-true-result').show();
            $('#answer-false').hide();
        } else {
            // wrong
            console.log('不正解です');
            $('#answer-true').hide();
            $('#answer-true-result').hide();
            $('#answer-false').show();
        }
    });
});
