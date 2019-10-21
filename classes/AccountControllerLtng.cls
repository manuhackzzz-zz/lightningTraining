public class AccountControllerLtng {
    @AuraEnabled
    public static Id createAccount(String accountName, String accountPhone){
        Account acc = new Account();
        acc.Name = accountName;
        acc.Phone = accountPhone;
        insert acc;        
        return acc.Id; 
    }  
    
    @AuraEnabled
    public static Account updateAccount(String accountName, String accountPhone, Id accId){
        system.debug('accountName >>>' + accountName + 'accountPhone >>>' + accountPhone + 'accId >>>' + accId);
        
        Account acc = new Account();
        acc = [SELECT Id,Name,Phone FROM Account WHERE Id =:accId];
        acc.Name = accountName;
        acc.Phone = accountPhone;
        try{
            update acc; 
        }catch(Exception e){
            String stackTrace = e.getStackTraceString();
            AccountControllerLtng.returnError(stackTrace); 
        }     
        return acc; 
    }  
    
    @AuraEnabled
    public static String returnError(String errStackTrace){
        return errStackTrace;
    }

    
    @AuraEnabled
    public static Account getAccount(Id accId){
        Account acc = new Account();
        acc = [SELECT Id,Name,Phone FROM Account WHERE Id =:accId];
        system.debug('acc >>>' + acc);
        return acc; 
    }  
    
    @AuraEnabled
    public static String deleteAccount(Id accId){
        Account acc = new Account();
        acc = [SELECT Id FROM Account WHERE Id =:accId];
        delete acc;
        String msg = 'Account Deleted';
        return msg; 
    }  
}