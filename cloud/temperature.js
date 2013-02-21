//SOAP example
/**
 * Use this Web service to convert temperatures
 */
var temperature = {
	//SOAP API URL
	SOAPUrl : "http://www.w3schools.com/webservices/tempconvert.asmx",
	/**
	 * Get Farenhiet Temperature
	 * Tutorial: How to wrap SOAP message and unwrap SOAP response.
	 */
	getFarenheitTemp : function(tempInCelsius) {
		
		$fh.log('debug 1','1');
		
		/**
		 * Since SOAP calls are wrapped HTTP calls, in Javascript we have to wrap SOAP envelope manually or using a SOAP library in Javascript
		 */
		var xmlContent = '<?xml version="1.0" encoding="utf-8"?>' + 
		'<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' + 
		' <soap:Body>' + 
		'   <CelsiusToFahrenheit xmlns="http://tempuri.org/">' + 
		'   <Celsius>string</Celsius>' +
		'   </CelsiusToFahrenheit>' +
		' </soap:Body>' + 
		'</soap:Envelope>';


		var url=this.SOAPUrl;
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

		$fh.log('debug','2');
		// getSOAPElement will return an xml object that exists in SOAP response
		var xmlData=getSOAPElement("CelsiusToFahrenheitResponse",res.body);

		$fh.log('debug','3');
		// construct final returned JSON object.
		var rtnObj={
			CelsiusToFahrenheitResult:xmlData.CelsiusToFahrenheitResult.toString()
		}
		
		$fh.log('debug','4');

		return rtnObj;


	}
};