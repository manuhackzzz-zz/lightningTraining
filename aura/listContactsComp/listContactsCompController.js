({    
    handleEvent : function(component, event, helper) {
        var ToSearch = event.getParam("searchTerm");
        
		var action = component.get("c.getContacts");
        action.setParams({ nameToSearch : ToSearch });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {                
                console.log("From server: " + response.getReturnValue());
                component.set("v.contacts" ,response.getReturnValue());
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