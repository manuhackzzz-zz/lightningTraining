public class fetchCasesFromAccount {
	@AuraEnabled
    public static List<Account> getAccountList(){	
        return [SELECT Id, Name, Phone FROM Account LIMIT 30];
    }
    
    @AuraEnabled
    public static List<Case> getCaseList(Id accountId){
        System.debug('accountId = = ' + accountId);		
        return [SELECT Id, Subject, Status FROM Case WHERE AccountId =:accountId];
    }
}