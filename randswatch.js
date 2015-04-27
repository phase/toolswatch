$.get("http://api.bootswatch.com/3/", function(data){
  var themes = data.themes;
  var theme = themes[Math.floor(Math.random()*themes.length)];
  $("head").append('<link rel="stylesheet" type="text/css" href="' + theme.cssMin + '" />');
});
