Ext.define('CoolEtpExt.view.main.toolbar.ToolbarView', {
    extend: 'Ext.Toolbar',
    xtype: 'toolbarview',

    cls: 'main-toolbar',

    requires: [
        'Ext.Button',
        'Ext.Img',
        'Ext.SegmentedButton'
    ],

    items: [{
            ui: 'header',
            iconCls: 'x-fa fa-bars',
            margin: '0',
            listeners: {
                tap: 'onTopViewNavToggle'
            }
        },
        '->',
        {
            ui: 'header',
            iconCls: 'x-fa fa-envelope',
            href: '#email',
            margin: '0 7 0 0',
            handler: 'toolbarButtonClick'
        }, {
            ui: 'header',
            iconCls: 'x-fa fa-question',
            href: '#faq',
            margin: '0 7 0 0',
            handler: 'toolbarButtonClick'
        }, {
            ui: 'header',
            html: 'Goff Smith',
            margin: '0 12 0 4',
            userCls: 'main-user-name',
            href: '#profile',
            handler: 'toolbarButtonClick'
        }, {
            xtype: 'image',
            userCls: 'main-user-image small-image circular',
            alt: 'Current user image',
            src: '<shared>/desktop/images/user-profile/2.png'
        }, {
            xtype: 'button',
            reference: 'detailtoggle',
            handler: 'onHeaderViewDetailToggle',
            iconCls: 'x-fa fa-arrow-left'
        }]
});