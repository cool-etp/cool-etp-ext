Ext.define('CoolEtpExt.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.navigationtree',
    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: 'Dashboard',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                xtype: 'dashboard', // routeId defaults to viewType
                leaf: true
            }, {
                text: 'Procedures List',
                iconCls: 'x-fa fa-flask',
                xtype: 'proceduresgrid',
                leaf: true
            }, {
                text: 'Personnel',
                iconCls: 'x-fa fa-user',
                xtype: 'personnelview',
                leaf: true
            }, {
                text: 'Profile',
                iconCls: 'x-fa fa-user',
                xtype: 'profile',
                leaf: true,
                visible: false
            },

        ]
    }
});