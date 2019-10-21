({
    fireApplicationEvent : function(component, event, helper) {
        var appEvent = $A.get("e.c:testApplicationEvent");
        appEvent.setParams({
            "message" : "Event message set in Comp1!" 
        });appEvent.fire();        
    }

})