({
	loadAllAccounts : function(component, event, helper) {
		var action = component.get("c.getAllAccounts");
		action.setCallback(this, function(res) {
			if(res.getState() === "SUCCESS" && component.isValid()) {
				component.set("v.accounts", res.getReturnValue());
			}
		});
		$A.enqueueAction(action);
	},

	fireAppEvent : function(component, event) {
		console.log("click fired");
		var id = event.currentTarget.getAttribute("data-recId");
		var appEvent = $A.get("e.c:viewRecord");
		appEvent.setParams({
			"id" : id
		});
		appEvent.fire();
	}

	
})