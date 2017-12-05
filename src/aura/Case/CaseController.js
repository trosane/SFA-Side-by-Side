({
	loadCases : function(component, event, helper) {
		var action = component.get("c.getNewCases");
		action.setCallback(this, function(res) {
			if(res.getState() === "SUCCESS" && component.isValid()) {
				component.set("v.newCases", res.getReturnValue());
			}
		});
		$A.enqueueAction(action);
	},

	loadWorkingCases : function(component, event, helper) {
		var action = component.get("c.getWorkingCases");
		action.setCallback(this, function(res) {
			if(res.getState() === "SUCCESS" && component.isValid()) {
				component.set("v.workingCases", res.getReturnValue());
			}
		});
		$A.enqueueAction(action);
	},

	loadEscalatedCases : function(component, event, helper) {
		var action = component.get("c.getEscalatedCases");
		action.setCallback(this, function(res) {
			if(res.getState() === "SUCCESS" && component.isValid()) {
				component.set("v.escalatedCases", res.getReturnValue());
			}
		});
		$A.enqueueAction(action);
	},

	loadClosedCases : function(component, event, helper) {
		var action = component.get("c.getClosedCases");
		action.setCallback(this, function(res) {
			if(res.getState() === "SUCCESS" && component.isValid()) {
				component.set("v.closedCases", res.getReturnValue());
			}
		});
		$A.enqueueAction(action);
	},
	
	hideComponent : function (component, event, helper) {
		$A.util.addClass(component.find("visibility"), "slds-hide");
	},

	showComponent : function (component, event, helper) {
		$A.util.addClass(component.find("visibility"), "slds-show");
	}

})