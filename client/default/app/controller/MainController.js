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
		
		///// remove this
		/*
		var outData={
			CelsiusToFahrenheitResult: "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:soap=\"http://www.w3.org/2003/05/soap-envelope\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><soap:Body><CelsiusToFahrenheitResponse xmlns=\"http://tempuri.org/\"><CelsiusToFahrenheitResult>53.6</CelsiusToFahrenheitResult></CelsiusToFahrenheitResponse>"
		};
		console.log('outdata is: '+ JSON.stringify(outData));
		///// remove this end
		var xmlData=this.getSOAPElement("CelsiusToFahrenheitResult",outData.CelsiusToFahrenheitResult);
		console.log('xmlData='+xmlData);
		Ext.getCmp('tempInFarenheitOutput').setValue(xmlData);
		*/
	
		
		$fh.act({
						act : 'getFarenheitTemp',
						req : {
							tempInCelsius:celsiusValue
						}
					}, function(res) {
						console.log(JSON.stringify(res));
						
						// getSOAPElement will return an xml object that exists in SOAP response
						var xmlData=this.getSOAPElement("CelsiusToFahrenheitResult",res.CelsiusToFahrenheitResult);

						console.log('debug 2 console. xmldata is '+JSON.stringify(xmlData));
						
						Ext.getCmp('tempInFarenheitOutput').setValue(xmlData);
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
		var start_tag = "<"+eleTagWithNS+">";
		console.log('here 1');
		var start_index = SOAPRes.indexOf("<"+eleTagWithNS+">") + start_tag.length;
		console.log('here 2');
		var end_tag = "</"+eleTagWithNS+">";
		console.log('here 3');
		var end_index = SOAPRes.indexOf(end_tag);
		console.log('here 4');
		//var xmlData = new XML(SOAPRes.substring(start_index, end_index));
		var xmlData = SOAPRes.substring(start_index, end_index);
		console.log('here 5');
		return xmlData;
	}
});