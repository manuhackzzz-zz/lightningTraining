({
    calcHelper : function(component, event, helper) {
        debugger;
        var amount = component.get("v.Amount");
        var duration = component.get("v.Duration");
        var rate = component.get("v.Interest");
        //alert(rate);
        if(rate === null){
            if(duration > 10){
                rate = 10; 
            }else if(duration <= 10){
                rate = 8;
            }
        }
        var returns = parseFloat(amount) + parseFloat(amount * duration * rate/100);
        component.set("v.Returns", returns);
    },
    validateAmount : function(component, event, helper) {
        var inputDiv = component.find('AmountId');
        var amount = inputDiv.get("v.value");
        if(amount > 9999){
            var message = "Amount can not exceed 9999.";
            component.set("v.errorMessage", message);
            component.set("v.showError", true);
            component.set("v.pass", true);  
        }else{
            component.set("v.showError", false);
            component.set("v.pass", false);            
        }
    },
    validateDuration : function(component, event, helper) {
        var inputDiv = component.find('DurationId');
        var duration = inputDiv.get("v.value");
        if(duration > 48){
            var message = "Duration can not exceed 48.";
            component.set("v.errorMessage", message);
            component.set("v.showError", true);
            component.set("v.pass", true);
            component.set("v.pass", true);  
        }else{
            component.set("v.showError", false);
            component.set("v.pass", false);
        }
    },
    validateInterest : function(component, event, helper) {
        var inputDiv = component.find('InterestId');
        var interest = inputDiv.get("v.value");
        if(interest > 15){
            var message = "Interest can not exceed 15.";
            component.set("v.errorMessage", message);
            component.set("v.showError", true);
            component.set("v.pass", true);
        }else{
            component.set("v.showError", false);
            component.set("v.pass", false);
        }
    }
})