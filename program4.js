var fs = require('fs');

var str = fs.readFile(process.argv[2], 'utf8', function callback(err, data){
  if(err) {
    console.log(err);
  } else {
    var lines = data.split('\n').length - 1;
    console.log(lines);
  }
});