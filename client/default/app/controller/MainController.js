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
	}
});