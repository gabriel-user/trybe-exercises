var readLineSync = require('readline-sync');
var scripts = ['area', 'capacity', 'length', 'mass', 'volume'];
var script = readLineSync.keyInSelect(scripts, 'Qual conversão realizar? ');
require("./" + scripts[script]);
