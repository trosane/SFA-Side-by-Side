({
	loadCases : function(component) {
		var action = component.get("c.getNewCases");
		action.setCallback(this, function(res) {
			if(res.getState() === "SUCCESS" && component.isValid()) {
				component.set("v.cases", response.getReturnValue());
			}
		});
		$A.enqueueAction(action);
	}
})