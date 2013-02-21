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
		
		//create a data record for entity "myFirstEntity"
		$fh.db({
		  "act": "create",
		  "type": "myFirstEntity",
		  "fields": {
		    "firstName": "Joe",
		    "lastName": "Bloggs",
		    "address1": "22 Blogger Lane",
		    "address2": "Bloggsville",
		    "country": "Bloggland",
		    "phone": "555-123456"
		  }
		}, function(err, data) {
		  if (err) {
		    console.log("Error " + err)
		  } else {
		    console.log(JSON.stringify(data))
		    /*
		     The output will be something similar to this
		     {
		      "fields": {
		        "address1": "22 Blogger Lane",
		        "address2": "Bloggsville",
		        "country": "Bloggland",
		        "fistName": "Joe",
		        "lastName": "Bloggs",
		        "phone": "555-123456"
		      },
		      "guid": "4e563ea44fe8e7fc19000002",
		      "type": "myFirstEntity"
		    }
		    */
		  }
		});
		
		console.log('Inserted record..');
    },
	
	tempInCelsiusSubmitted: function(){
		var celsiusValue=Ext.getCmp('tempInCelsiusInput').getValue();
		
		console.log('Submitted Celsius button. Value is ' + celsiusValue);
		
		$fh.log({
		  message: 'Querying inserted record... '
		});
		
		$fh.db({
		  "act": "read",
		  "type": "myFirstEntity",
		  "guid": celsiusValue
		}, function(err, data) {
			console.log('Result: ' + JSON.stringify(data));
			
		  /* Sample output 
		    {
		      "fields": {
		        "address1": "22 Blogger Lane",
		        "address2": "Bloggsville",
		        "country": "Bloggland",
		        "fistName": "Joe",
		        "lastName": "Bloggs",
		        "phone": "555-123456"
		      },
		      "guid": "4e563ea44fe8e7fc19000002",
		      "type": "myFirstEntity"
		    }
		    */
		});
		
		console.log('Done...');
	}
});