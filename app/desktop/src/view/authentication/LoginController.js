Ext.define('CoolEtpExt.view.Authentication.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    doLogin: function () {
        let form = this.lookup('loginInfo');
        let me = this;

        if (form.validate()) {
            form.submit({
                url: 'https://localhost:8080/api_v1/login',

                success: me.setLoggedIn,
                failure: function (form, data) {
                    // At the moment backend security not realized - so just "logging in"
                    // Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
                    me.setLoggedIn();
                }
            });
        }
        else {
            Ext.Msg.alert('Login Failure', 'All Fields have to be valid!');
        }



    },

    setLoggedIn: function() {
        // Set the localStorage value to true
        localStorage.setItem("LoggedIn", true);

        // Use Ext.util.TaskRunner to start repeate auth check

        this.getView().destroy();

        Ext.Viewport.add([{xtype: 'mainview'}]);

        this.redirectTo('dashboard', {force: true});
    }
});