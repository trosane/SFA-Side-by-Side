({
	handleAppEvent : function(component, event) {
		var id = event.getParam("id");
		component.set("v.accountId", id);
	}
})