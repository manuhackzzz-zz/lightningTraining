({
    calcHelper : function(component, event, helper) {
        //alert(component.get("v.Amount"));
        
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
        alert(amount);
        alert(duration);
        alert(rate);
        var returns = parseFloat(amount) + parseFloat(amount * duration * rate/100);
        component.set("v.Returns", returns);
    },
    validateAmount : function(component, event, helper) {
        var inputDiv = component.find('AmountId');
        var amount = inputDiv.get("v.value");
        if(amount > 9999){
            inputDiv.set("v.errors", [{message:"Amount can not exceed 9999."}]);
        }else{
            inputDiv.set("v.errors", [{message:"" + amount}]);
        }
    },
    validateDuration : function(component, event, helper) {
        var inputDiv = component.find('DurationId');
        var duration = inputDiv.get("v.value");
        if(duration > 48){
            inputDiv.set("v.errors", [{message:"Duration can not exceed 48."}]);
        }else{
            inputDiv.set("v.errors", [{message:"" + duration}]);
        }
    },
    validateInterest : function(component, event, helper) {
        var inputDiv = component.find('InterestId');
        var interest = inputDiv.get("v.value");
        if(interest >= 15){
            inputDiv.set("v.errors", [{message:"Interest can not exceed 100."}]);
        }else{
            inputDiv.set("v.errors", [{message:"" + interest}]);
        }
    }
})