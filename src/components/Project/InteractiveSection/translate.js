// translate to kazakh
$(document).on("click", "#lang_kz", function(){
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/') + 1);
  window.location.replace('/kz/'); // + filename
});

// translate to russian
$(document).on("click", "#lang_ru", function(){
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/') + 1);
  window.location.replace('/ru/'); // + filename
});

// translate to english
$(document).on("click", "#lang_en", function () {
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf("/") + 1);
  window.location.replace("/" ); // + filename
});
