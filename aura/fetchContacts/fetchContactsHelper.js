({
	getContactsHelper : function(component, event, helper) {
		var action = component.get("c.getContacts");
        action.setParams({ accName : component.get("v.accName") });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {                
                console.log("From server: " + response.getReturnValue());
                component.set("v.ListContacts" ,response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
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
        });$A.enqueueAction(action);
	}
    
    
    
})