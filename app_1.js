/**
 * Created by anshaj on 6/29/17.
 */

//
// require('./wendy')
// require('./anshaj')
//

// Lecture 12 - Core modules - Read and write files

// var fs = require('fs');
//
// fs.writeFileSync("corn.txt","corn is good, its life");
// console.log(fs.readFileSync("corn.txt").toString())


var path = require('path');
var websiteHome = "~/WebStormProjects/NodeJS_NewBoston/index.html"
var websiteAbout = "~/WebStormProjects//NodeJS_NewBoston/about.html"


console.log(path.normalize(websiteAbout));
console.log(path.dirname(websiteHome));
console.log(path.basename(websiteHome));
console.log(path.extname(websiteHome));

console.log(__dirname);
console.log(__filename);