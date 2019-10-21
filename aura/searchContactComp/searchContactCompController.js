({
    search : function(component, event, helper) {
        console.log(event.target.value);        
        var appSearchEvent = $A.get('e.c:listContactsApplicationEvnt');
        appSearchEvent.setParams({
            "searchTerm" : event.target.value });
        appSearchEvent.fire();
    }
})