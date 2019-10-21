({
	handleInsert : function(component, event, helper) {
		var action = component.get("c.createAccount");
        action.setParams({ accountName : component.get("v.accName"),
                           accountPhone : component.get("v.accPhone")
                         });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("From server: " + response.getReturnValue());
                var returnedVal = response.getReturnValue();
                component.set("v.accId", returnedVal);
                // Navigate to sObject Tab
                var navEvt = $A.get("e.force:navigateToSObject");
                navEvt.setParams({
                    "recordId": returnedVal,
                    "slideDevName": "detail"
                });
                navEvt.fire();
                ///
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },
    
    handleUpdate : function(component, event, helper) {
		var action = component.get("c.updateAccount");
        action.setParams({ accountName : component.get("v.accName"),
                           accountPhone : component.get("v.accPhone"),
                           accId : component.get("v.accId")
                         });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("From server: " + response.getReturnValue());
                var returnedVal = response.getReturnValue();
                component.set("v.newName", returnedVal);
                // Navigate to sObject Tab
                var navEvt = $A.get("e.force:navigateToSObject");
                navEvt.setParams({
                    "recordId": component.get("v.accId"),
                    "slideDevName": "detail"
                });
                navEvt.fire();
                ///
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    } 
	
})