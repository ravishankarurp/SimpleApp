Ext.define('SimpleApp.controller.MainController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            submitBtn: "#tempInCelsiusSubmit",
			celsiusInput: "#tempInCelsiusInput"
        },
        control: {
            submitBtn: {
            	tap: "tempInCelsiusSubmitted"
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log('Application Loaded. Inserting record');
    },
	
	tempInCelsiusSubmitted: function(){
		var celsiusValue=Ext.getCmp('tempInCelsiusInput').getValue();
		
		console.log('Submitting Celsius temp. Value is ' + celsiusValue);
		
		// $fh.log({
		//   message: 'Querying inserted record... '
		// });
		
		
		$fh.act({
						act : 'getFarenheitTemp',
						req : {
							tempInCelsius:celsiusValue
						}
					}, function(res) {
						console.log(JSON.stringify(res));
						
						// getSOAPElement will return an xml object that exists in SOAP response
						var xmlData=getSOAPElement("CelsiusToFahrenheitResponse",res.body);

						console.log('debug 2 console. xmldata is '+JSON.stringify(xmlData));
						
						// if (res.status==="OK"){
							// alert("Request has been created!");
						// }else{
							// alert("Error happened. Please try again.");
						// }
					},
						function(code,errorprops,params) {
							alert("Error occurred. Please try again. Code: "+code + "; errorprops: " + JSON.stringify(errorprops) + "; params: " + params);
					});
		
		console.log('Done...');
	},
	getSOAPElement: function(eleTagWithNS, SOAPRes) {
		console.log('here 1');
		var start_index = SOAPRes.indexOf("<"+eleTagWithNS+">");
		console.log('here 2');
		var end_tag = "</"+eleTagWithNS+">";
		console.log('here 3');
		var end_index = SOAPRes.indexOf(end_tag) + end_tag.length;
		console.log('here 4');
		//var xmlData = new XML(SOAPRes.substring(start_index, end_index));
		var xmlData = SOAPRes.substring(start_index, end_index);
		console.log('here 5');
		return xmlData;
	}
});