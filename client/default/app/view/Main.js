Ext.define('SimpleApp.view.Main', {
    extend: 'Ext.form.Panel',
    xtype: 'formpanel',
    requires: [
        'Ext.form.FieldSet',
		'Ext.field.Number',
		'Ext.TitleBar'
    ],
	title: 'Hello',
    config: {
        
        items: [
			{
		        docked: 'top',
		        xtype: 'titlebar',
		        title: 'Temp Converter'
		    },
            {
                xtype:'fieldset',
				id:'mainform123',
				title: 'Enter Values',
				items: [
				{
					xtype:'numberfield',
					id:'tempInCelsiusInput',
					label: 'Temperature in Celsius',
					placeholder:'0',
					required:true
				}
				]
            },
			{
                xtype: 'button',
                text: 'Submit',
				id: 'tempInCelsiusSubmit',
                ui: 'confirm',
				width: '50%',
				style: {
					'margin-left': 'auto',
					'margin-right': 'auto'
				},
                // handler: function() {
//                     this.up('formpanel').submit();
//                 }
            }
        ]
    }
});
