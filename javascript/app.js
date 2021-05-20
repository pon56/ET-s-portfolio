// アニメーションさせたいクラス
let container = $(".top-title");
// アニメーションスピード
let speed = 100;

// テキストの間にスペースを入れます
var content = container.html();
var text = $.trim(content);
var newHtml = "";

// スペースで区切ったテキストを、テキストの数だけspanで囲む
text.split("").forEach(function(v) {
 newHtml += '<span>' + v + '</span>';
});

// spanで囲んだテキスト群をHTMLに戻す
container.html(newHtml);

// 1文字ずつ表示
var txtNum = 0;
container.css({opacity: 1});
setInterval(function() {
  container.find('span').eq(txtNum).css({opacity: 1});
 txtNum++
}, speed);


// テキスト最後の装飾
$(function(){
    setTimeout(function(){
        $(".top-title").addClass("is-ready");
    },1600);
});


// トップボタン表示
$(function() {
    setInterval(function() {
      $('.top-button-link').fadeIn(1500);
    }, 1200);
});

// #から始まるURLがクリックされた時
$('a[href^="#"]').click(function() {
  // 移動速度を指定（ミリ秒）
  let speed = 300;
  // hrefで指定されたidを取得
  let id = $(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = $("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = $(target).offset().top;
  // ターゲットの位置までspeedの速度で移動
  $("html, body").animate(
    {
      scrollTop: position - 80
   },
    speed
  );
  return false;
});

let $submit = $("#js-submit")
$("#js-form input, #js-form textarea").on("change",function(){
    if(
      
//js-formというidがついている中の　input[type="text"]　が空欄でない場合
    $('#js-form input[type="text"]').val() !== "" &&
    $('#js-form input[type="email"]').val() !== "" &&
    $("#js-form textarea").val() !== ""
    ){
        // すべて入力されたとき
        $submit.addClass('active')
        $submit.prop("disabled", false)
    }else{
        // すべて入力されていないとき
        $submit.removeClass('active')
        $submit.prop("disabled", true)
    }
})

// 送信の成否を判定
let $form = $("#js-form")
$form.submit(function (e) {
    $.ajax({
        url: $form.attr('action'),
        data: $form.serialize(),
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
                //送信に成功したときの処理 
                $form.slideUp()
                $("#js-success").slideDown()
            },
            200: function () {
                //送信に失敗したときの処理 
                $form.slideUp()
                $("#js-err").slideDown()
            }
        }
    });
    return false;
});

// WOW起動
new WOW().init();

// drawer.js起動
$(document).ready(function() {
	 $('.drawer').drawer();
});

