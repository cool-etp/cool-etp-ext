Ext.define('CoolEtpExt.view.Authentication.Login', {
    extend: 'Ext.Panel',
    xtype: 'login',

    controller: 'login',

    requires: [
        'Ext.layout.VBox',
        'Ext.field.Checkbox',
        'Ext.field.Email',
        'Ext.field.Password',
        'Ext.layout.HBox',
        'Ext.form.Panel'
    ],

    baseCls: 'auth-locked',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: [{
        xtype: 'formpanel',
        padding: 40,
        width: 400,
        title: 'You need to login',
        reference: 'loginInfo',
        jsonSubmit: true,
        method: 'post',

        buttons: [
            {
                xtype: 'button',
                text: 'Login',
                iconAlign: 'right',
                iconCls: 'x-fa fa-angle-right',
                ui: 'action',
                handler: 'doLogin'
            }
        ],

        items: [{
            xtype: 'textfield',
            allowBlank: false,
            required: true,
            label: 'Username',
            name: 'username',
            placeholder: 'Username'
        }, {
            xtype: 'passwordfield',
            allowBlank: false,
            required: true,
            label: 'Password',
            name: 'password',
            placeholder: 'Password'
        }, {
            xtype: 'checkbox',
            boxLabel: 'Remember me',
            name: 'remember'
        }]
    }]
});