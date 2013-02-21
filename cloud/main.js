var mortgage=require("./temperature");

/**
 * Get Temp in Farenheit with user input in celsius
 */
function getFarenheitTemp(param,callback) {
	$fh.log('debug. param: ' + JSON.stringify(param),'In main.js');
	
	//$fh.log('Result: ' + JSON.stringify(temperature.getFarenheitTemp(param.tempInCelsius)));
	
	//callback(undefined, temperature.getFarenheitTemp(param.tempInCelsius));
	//return callback(null, temperature.getFarenheitTemp(param.tempInCelsius));
	
	$fh.log('debug 1','1');
	console.log('debug 1 console');
		
	/**
	 * Since SOAP calls are wrapped HTTP calls, in Javascript we have to wrap SOAP envelope manually or using a SOAP library in Javascript
	 */
	var xmlContent = '<?xml version="1.0" encoding="utf-8"?>' + 
	'<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' + 
	' <soap:Body>' + 
	'   <CelsiusToFahrenheit xmlns="http://tempuri.org/">' + 
	'   <Celsius>'+tempInCelsius+'</Celsius>' +
	'   </CelsiusToFahrenheit>' +
	' </soap:Body>' + 
	'</soap:Envelope>';


	var url="http://www.w3schools.com/webservices/tempconvert.asmx";
	//Webcall paramters.
	var opt={
		url : url,
		method : "POST",
		charset : 'UTF-8',
		contentType : 'text/xml',
		body:xmlContent,
		period : 3600
	 };

	 //Feedhenry Web Call
	var res= $fh.web(opt);

	$fh.log('debug 2','2');
	console.log('debug 2 console');
	// getSOAPElement will return an xml object that exists in SOAP response
	var xmlData=getSOAPElement("CelsiusToFahrenheitResponse",res.body);

	$fh.log('debug 3','3');
	console.log('debug 3 console');
	// construct final returned JSON object.
	var rtnObj={
		CelsiusToFahrenheitResult:xmlData.CelsiusToFahrenheitResult.toString()
	}
		
	$fh.log('debug 4','4');
	console.log('debug 4 console');
	
	return callback(null, rtnObj);
}

exports.getFarenheitTemp=getFarenheitTemp;

exports.beep = function(param,callback) {
	callback(undefined, {hello:"world"});
}