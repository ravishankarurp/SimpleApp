var mortgage=require("./temperature");

/**
 * Get Temp in Farenheit with user input in celsius
 */
function getFarenheitTemp(param,callback) {
	
	console.log('hello ' + JSON.stringify(param));
	// $fh.log('debug. param: ' + JSON.stringify(param),'In main.js');
	
	//$fh.log('Result: ' + JSON.stringify(temperature.getFarenheitTemp(param.tempInCelsius)));
	
	//callback(undefined, temperature.getFarenheitTemp(param.tempInCelsius));
	//return callback(null, temperature.getFarenheitTemp(param.tempInCelsius));
	
	// $fh.log('debug 1','1');
	console.log('debug 1 console');
		
	/**
	 * Since SOAP calls are wrapped HTTP calls, in Javascript we have to wrap SOAP envelope manually or using a SOAP library in Javascript
	 */
	// var xmlContent = '<?xml version="1.0" encoding="utf-8"?>' + 
	// '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' + 
	// ' <soap:Body>' + 
	// '   <CelsiusToFahrenheit xmlns="http://tempuri.org/">' + 
	// '   <Celsius>'+param.tempInCelsius+'</Celsius>' +
	// '   </CelsiusToFahrenheit>' +
	// ' </soap:Body>' + 
	// '</soap:Envelope>';
	
	var xmlContent='<?xml version="1.0" encoding="UTF-8" standalone="no"?>' +
	'<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://www.w3.org/2003/05/soap-envelope" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:mime="http://schemas.xmlsoap.org/wsdl/mime/" xmlns:tns="http://tempuri.org/" xmlns:s="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://schemas.xmlsoap.org/wsdl/soap12/" xmlns:http="http://schemas.xmlsoap.org/wsdl/http/" xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" >'+
  		'<SOAP-ENV:Body>'+
			'<tns:CelsiusToFahrenheit xmlns:tns="http://tempuri.org/">' +
 		   	'<tns:Celsius>44</tns:Celsius>' +
    		'</tns:CelsiusToFahrenheit>' +
		'</SOAP-ENV:Body>' +
	'</SOAP-ENV:Envelope>';

	// $fh.log('debug 1.1');
	console.log('debug 1.1');

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

	console.log('debug 1.2');
	
	// Feedhenry Web Call
	var res= $fh.web(opt
		, function(err, result) {
		  if (err) {
		    console.log("Error : " + err.message);
		  } else {
		    var data = result.body;
		    console.log("Response is " + data);
		  }
		});
	
	// $fh.web({
	//   url: "http://www.google.com",
	//   method: "GET",
	//   contentType: "text/html",
	//   charset: "UTF-8",
	//   period: 60000 //cache for 1 min
	// }, function(err, result) {
	//   if (err) {
	//     console.log("Error : " + err.message);
	//   } else {
	//     var data = result.body;
	//     console.log("Response is " + data);
	//   }
	// })

	console.log('debug 2 console');
	// getSOAPElement will return an xml object that exists in SOAP response
	var xmlData=getSOAPElement("CelsiusToFahrenheitResponse",res.body);

	console.log('debug 3 console');
	// construct final returned JSON object.
	var rtnObj={
		CelsiusToFahrenheitResult:xmlData.CelsiusToFahrenheitResult.toString()
	}
		
	console.log('debug 4 console');
	
	return callback(null, rtnObj);
}

exports.getFarenheitTemp=getFarenheitTemp;

exports.beep = function(param,callback) {
	callback(undefined, {hello:"world"});
}