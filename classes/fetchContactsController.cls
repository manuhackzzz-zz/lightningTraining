public class fetchContactsController {
    @AuraEnabled
    public static List<Contact> getContacts(String accName){
        System.debug('accName >> ' + accName);	
        String toSearch = '%' + accName + '%';
        List<Contact> conList = [SELECT Id, Name, Email, Phone FROM Contact 
                                 WHERE Account.Name LIKE :toSearch];
        system.debug('conList @@@ ' + conList);
        return conList;
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getAllContacts(){
        List<Contact> conList = [SELECT Id, Name, Email, Phone FROM Contact];
        system.debug('conList @@@ ' + conList);
        return conList;
    }
    
    @AuraEnabled
    public static Contact contactDetails(Id contactId){
        System.debug('contactId = = ' + contactId);		
        return [SELECT Id, Name, Email, Phone FROM Contact WHERE Id =:contactId];
    }
    
    
}