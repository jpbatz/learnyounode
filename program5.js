var fs = require('fs');
var path = require('path');

var dirs = fs.readdir(process.argv[2], function callback(err, list) {
  if(err) {
    console.log(err);
  } else {
    //console.log(list);
    var ext = "." + process.argv[3];
    // console.log("looking for *" + ext);
    for(var i=0; i< list.length; i++) {
      if(path.extname(list[i]) == ext) {
        console.log(list[i]);
      }
    }
  }
});