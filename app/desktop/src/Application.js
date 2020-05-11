Ext.define('CoolEtpExt.Application', {
	extend: 'Ext.app.Application',
	name: 'CoolEtpExt',
	requires: ['CoolEtpExt.*'],
	defaultToken: 'dashboard',

	stores: [

	],

	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
		this.removeSplash()

		let loggedIn;

		loggedIn = localStorage.getItem("LoggedIn");

		let whichView = loggedIn ? 'mainview' : 'login';

		Ext.Viewport.add([{xtype: whichView}])
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
