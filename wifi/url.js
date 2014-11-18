var http = require('http');

http.get('http://tessel.io', function(res){

  console.log(res);
});
