var mortgage=require("./temperature");

/**
 * Get Temp in Farenheit with user input in celsius
 */
function getFarenheitTemp(param,callback) {
	$fh.log('debug. param: ' + JSON.stringify(param),'In main.js');
	
	//$fh.log('Result: ' + JSON.stringify(temperature.getFarenheitTemp(param.tempInCelsius)));
	
	//callback(undefined, temperature.getFarenheitTemp(param.tempInCelsius));
	return callback(null, temperature.getFarenheitTemp(param.tempInCelsius));
}

exports.getFarenheitTemp=getFarenheitTemp;

exports.beep = function(param,callback) {
	callback(undefined, {hello:"world"});
}