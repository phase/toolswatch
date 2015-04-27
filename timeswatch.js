$.get("http://api.bootswatch.com/3/", function(data){
  var themes = data.themes;
  var theme = themes[Math.min(themes.length, new Date().getHours())];
  $("head").append('<link rel="stylesheet" type="text/css" href="' + theme.css + '" />');
});
