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
        console.log('Application Loaded');
    },
	
	tempInCelsiusSubmitted: function(){
		var celsiusValue=Ext.getCmp('tempInCelsiusInput').getValue();
		
		console.log('Submitted Celsius button. Value is ' + celsiusValue);
		
		$fh.log({
		  message: 'your log message'
		});
	}
});