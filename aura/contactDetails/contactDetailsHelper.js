({
    doInitHelper : function(component, event, helper) {
        var action = component.get("c.contactDetails");
        var z = event.getParam("token");
        alert(z);
        if(!(z == '' || z === undefined)) {
            component.set("v.contactId", z.substr(z.indexOf('/') + 1)); 
            action.setParams({contactId: component.get("v.contactId")});
            action.setCallback(this,function(response){
                var state = response.getState();
                if(state === "SUCCESS"){
                    console.log(response.getReturnValue());
                    component.set("v.contact", response.getReturnValue());
                }
            });$A.enqueueAction(action);
        }
        
        
    }
})