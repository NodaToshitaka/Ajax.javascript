const API_KEY = "71451a5fceca646e0775e74019770a56"

$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
      //通信成功
    }).fail(function (data) {
      //通信失敗
    });
      
  });
});