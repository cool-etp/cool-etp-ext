Ext.define('CoolEtpExt.view.main.MainViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mainviewcontroller',

	listen : {
		controller : {
			'#' : {
				unmatchedroute : 'mainRoute'
			}
		}
	},

	routes: {
		':hash': {action: 'mainRoute'}
	},

	mainRoute:function(hash) {
		let
			hashArray = hash.split('/'),
			xtype = hashArray[0];

		let
			navview = this.lookup('navview'),
			menuview = navview.items.items[0],
			navNode = menuview.getStore().findNode('xtype', xtype),
			exists = Ext.ClassManager.getByAlias('widget.' + xtype);


		if (!navNode || !exists) {
			console.log('unmatchedRoute: ' + xtype);
			return;
		}

		this.updateCenterView(xtype, hashArray);

		menuview.setSelection(navNode);
	},

	updateCenterView: function(xtype, routeParams = []) {
		let centerview = this.lookup('centerview');

		if (!centerview.getComponent(xtype)) {
			centerview.add({ xtype: xtype,  itemId: xtype, routeParams: routeParams });
		}

		centerview.setActiveItem({ xtype: xtype,  routeId: xtype, routeParams: routeParams });
	},

	onMenuViewSelectionChange: function (tree, node) {
		if (node == null) { return }
		var vm = this.getViewModel();
		if (node.get('xtype') !== undefined) {
			this.redirectTo( node.get('xtype') );
		}
	},

	onTopViewNavToggle: function () {
		var vm = this.getViewModel();
		vm.set('navCollapsed', !vm.get('navCollapsed'));
	},

	onHeaderViewDetailToggle: function (button) {
		var vm = this.getViewModel();
		vm.set('detailCollapsed', !vm.get('detailCollapsed'));
		if(vm.get('detailCollapsed')===true) {
			button.setIconCls('x-fa fa-arrow-left');
		}
		else {
			button.setIconCls('x-fa fa-arrow-right');
		}
	},

	onBottomViewlogout: function () {
		localStorage.setItem("LoggedIn", false);
		this.getView().destroy();
		Ext.Viewport.add([{ xtype: 'loginview'}]);
	},

	toolbarButtonClick: function (btn) {
		let href = btn.config.href;

		this.redirectTo(href);
	}

});
