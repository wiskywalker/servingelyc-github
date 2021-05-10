var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.render("index");
})

app.set('port', process.env.PORT || 80);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
