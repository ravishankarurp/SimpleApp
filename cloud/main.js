var mortgage=require("./temperature");

/**
 * Get Temp in Farenheit with user input in celsius
 */
function getFarenheitTemp(param,callback) {
	$fh.log('debug','In main.js');
	callback(undefined, temperature.getFarenheitTemp(param.tempInCelsius));
}

exports.getFarenheitTemp=getFarenheitTemp;

exports.beep = function(param,callback) {
	callback(undefined, {hello:"world"});
}