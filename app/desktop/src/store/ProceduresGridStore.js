Ext.define('CoolEtpExt.store.ProceduresGrid', {
    extend: 'Ext.data.Store',
    alias: 'store.proceduresgrid',
    storeId: 'proceduresgridstore',

    model: 'CoolEtpExt.model.ProcedureShort',

    autoLoad: false,
    pageSize: null,

    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/api/procedures',

        reader: {
            type: 'json',
            rootProperty: '_embedded.procedures'
        }
    },
});