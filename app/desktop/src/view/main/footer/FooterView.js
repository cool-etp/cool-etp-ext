Ext.define('CoolEtpExt.view.main.footer.FooterView', {
    extend: 'Ext.Toolbar',
    xtype: 'footerview',
    cls: 'footerview',
    viewModel: {},
    items: [
        {
            xtype: 'container',
            cls: 'footerviewtext',
            bind: { html: '{name} WEB client. v. 0.0.1' }
        },
        '->',
        {
            xtype: 'container',
            cls: 'footerviewtext',
            bind: { html: 'Production of DevilSter Inc.' }
        }
    ]
});
