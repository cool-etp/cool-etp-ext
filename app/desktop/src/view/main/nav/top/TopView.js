Ext.define('CoolEtpExt.view.main.nav.top.TopView', {
    extend: 'Ext.Toolbar',
    xtype: 'topview',
    cls: 'topview',
    viewModel: {},
    shadow: false,
    items: [
        {
            xtype: 'container', 
            cls: 'topviewtext',
            bind: { 
                html: '{name}',
                hidden: '{navCollapsed}' 
            }
        }
    ]
});