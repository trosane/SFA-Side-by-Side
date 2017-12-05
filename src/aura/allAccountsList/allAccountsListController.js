({
	loadAllAccounts : function(component, event, helper) {
		var action = component.get("c.getAllAccounts");
		// component.set("v.id", "0011I00000AfmqLQAR")
		action.setCallback(this, function(res) {
			if(res.getState() === "SUCCESS" && component.isValid()) {
				component.set("v.accounts", res.getReturnValue());
				console.log(res.getReturnValue());
			}
		});
		$A.enqueueAction(action);
	},

	navigateToComponent : function(component, event, helper) {
		var id = event.currentTarget.getAttribute("data-recId");
		console.log("id: " + id);
		component.set("v.id", id);
	}

	
})