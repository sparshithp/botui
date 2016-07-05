var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("."));
app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port);
});
