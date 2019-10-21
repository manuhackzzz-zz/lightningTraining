({
    add : function(component, event, helper) {   
        if(!isNaN(parseFloat(sessionStorage.getItem("numberTemp")))){
            var oldSessionVal = parseFloat(sessionStorage.getItem("numberTemp"));
        }
        if(isNaN(oldSessionVal) || oldSessionVal == null){
            oldValue = 0;
        }else{
            oldValue = parseFloat(sessionStorage.getItem("numberTemp"));
        }
        var newValue = parseFloat(component.get("v.inputNumber"));               
        newValue = oldValue + newValue;
        
        sessionStorage.setItem("numberTemp", newValue);
        component.set('v.output', newValue);
    },
    sub : function(component, event, helper) { 
        var oldSessionVal = parseFloat(sessionStorage.getItem("numberTemp"));
        if(isNaN(oldSessionVal) || oldSessionVal == null){
            oldValue = 0;
        }else{
            oldValue = parseFloat(sessionStorage.getItem("numberTemp"));
        }
        var newValue = parseFloat(component.get("v.inputNumber"));               
        newValue = oldValue - newValue;
        
        sessionStorage.setItem("numberTemp", newValue);
        component.set('v.output', newValue);
    },
    mul : function(component, event, helper) { 
        var oldSessionVal = parseFloat(sessionStorage.getItem("numberTemp"));
        if(isNaN(oldSessionVal) || oldSessionVal == null){
            oldValue = 0;
        }else{
            oldValue = parseFloat(sessionStorage.getItem("numberTemp"));
        }
        var newValue = parseFloat(component.get("v.inputNumber"));               
        newValue = oldValue * newValue;
        
        sessionStorage.setItem("numberTemp", newValue);
        component.set('v.output', newValue);
    },
    div : function(component, event, helper) {    
        var oldSessionVal = parseFloat(sessionStorage.getItem("numberTemp"));
        if(isNaN(oldSessionVal) || oldSessionVal == null){
            oldValue = 0;
        }else{
            oldValue = parseFloat(sessionStorage.getItem("numberTemp"));
        }
        var newValue = parseFloat(component.get("v.inputNumber"));               
        newValue = oldValue / newValue;
        
        sessionStorage.setItem("numberTemp", newValue);
        component.set('v.output', newValue);
    },
    result : function(component, event, helper) {
        component.set("v.output", sessionStorage.getItem("numberTemp"));
    },
    validateNumber : function(component, event, helper) {
        var num = component.get('inputNumber');
        if(isNaN(num)){
            var message = "Enter a valid number.";
        }
    }
})