$(document).on("click", "#lang_ru", function(){
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);
  window.location.replace('new_energylab_final/templates/ru/base.html');
});
