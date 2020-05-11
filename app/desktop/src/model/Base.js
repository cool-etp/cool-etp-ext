Ext.define('CoolEtpExt.model.Base', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        }
    ],

    schema: {
        namespace: 'CoolEtpExt.model'
    }
});