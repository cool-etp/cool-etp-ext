Ext.define('CoolEtpExt.model.ProcedureShort', {
    extend: 'CoolEtpExt.model.Base',

    fields: [
        {
            name: 'registryNumber',
        }, {
            name: 'name'
        } ,{
            name: 'version',
            type: 'int'
        }
    ],

    hasOne: [
        {
            model: 'ContragentShort',
            role: 'organizer'
        }, {
            model: 'ProcedureType',
            role: 'procedureType'
        }
    ]
});