const fs = require("fs");
const request = require("request");
const url = process.argv[2];
const path = process.argv[3];



const fetcher = function(url, path) {
  request(url, function(error, response, body) {
    if (error) {
      console.error("Error", error);
    }
    fs.writeFile(path, body, function(error) {
      if (error) {
        console.error("Error", error);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${path}.`);
      }
    
    });
   
  });
};

fetcher(url, path);