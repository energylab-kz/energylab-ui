$(document).on("click", "#lang_kz", function(){
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);
  window.location.replace('./kz/'+filename);
});
