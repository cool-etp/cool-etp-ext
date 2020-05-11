Ext.define('CoolEtpExt.model.ProcedureType', {
    extend: 'CoolEtpExt.model.Base',

    fields: [
        {
            name: 'name',
        }, {
            name: 'electronic',
            type: 'boolean'
        }, {
            name: 'actual',
            type: 'boolean'
        }
    ]
});