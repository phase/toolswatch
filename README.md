#randswatch
If you're like me and you want something new every once in a while, *randswatch* is for you. 
This will randomly load a Bootswatch theme and apply it to your site.

##Where
Simply put this into your `<head>`.
```html
<script src="https://raw.githubusercontent.com/phase/randswatch/master/randswatch.js"></script>
```

##How
Using Bootswatch's API, we can get the CSS file of each theme. 
Once we've queried it with jQuery, we can append it to the `<head>`. 