$(document).on("click", "#lang_en", function(){
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);
  window.open('../'+filename);
});
