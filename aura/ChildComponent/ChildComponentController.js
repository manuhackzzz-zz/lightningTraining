({
	fireComponentEvent : function(cmp, event) {
        var cmpEvent = cmp.getEvent("cmpEvent");
        cmpEvent.setParams({
            "message" : "Test Event" });
        cmpEvent.fire();
    }
})