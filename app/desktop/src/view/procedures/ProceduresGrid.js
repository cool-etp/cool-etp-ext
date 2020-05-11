Ext.define('CoolEtpExt.view.procedures.ProceduresGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'proceduresgrid',

    cls: 'proceduresgrid',

    controller: {type: 'proceduresgrid'},
    viewModel: {type: 'proceduresgrid'},
    store: {type: 'proceduresgrid'},

    title: 'Procedures List',

    columns: [
        {
            text: 'Id',
            flex: .3,
            dataIndex: 'id',
            minWidth: 40
        }, {
            text: 'Type',
            flex: .5,
            minWidth: 100,
            renderer: function(value, record) {
                return record.getProcedureType().get('name');
            }
        }, {
            text: 'Reg Number',
            flex: 1,
            dataIndex: 'registryNumber',
            minWidth: 140
        }, {
            text: 'Title',
            flex: 1,
            dataIndex: 'name',
            minWidth: 240
        }, {
            text: 'Version',
            flex: 1,
            dataIndex: 'version',
            minWidth: 40
        }, {
            text: 'Organizer',
            flex: 1,
            dataIndex: 'organizer',
            minWidth: 40,
            renderer: function (value, record) {
                return record.getOrganizer().get('shortName');
            }
        }, {
            flex: 0.3,
            cell: {
                tools: [
                    {
                        iconCls: 'x-fa fa-heart',
                        tooltip: 'Mark as favorite',
                        handler: function(grid, context){
                            // context properties: cell, column, event, grid, record, tool
                            let t = context.tool;
                            t.setIconCls(Ext.String.toggle(t.getIconCls(),'x-fa fa-heart fa-red','x-fa fa-heart'))
                        }
                    }
                ]
            }
        }
    ],

    listeners: {
        // ReLoad Store on every @show@ event - whenever this view showed again and again
        show: function (sender, eOpts) {
            this.store.load();
        }
    }
});