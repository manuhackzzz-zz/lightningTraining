({
    doInitHelper : function(component, event, helper) {
        var action = component.get("c.getCaseList");
        var z = event.getParam("token");
        alert(z);
        if(!(z == '' || z === undefined)) {
            component.set("v.accountId", z.substr(z.indexOf('/') + 1)); 
            action.setParams({accountId: component.get("v.accountId")});
            action.setCallback(this,function(response){
                var state = response.getState();
                if(state === "SUCCESS"){
                    console.log(response.getReturnValue());
                    component.set("v.CaseList", response.getReturnValue());
                }
            });$A.enqueueAction(action);
        }
        
        
    }
})