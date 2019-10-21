public class seatchContactsController {
	@AuraEnabled
    public static List<Contact> getContacts(String nameToSearch){
        String nameToSearchInQuery = '%' + nameToSearch + '%';
        return [SELECT Id,Name,Phone,Email FROM Contact WHERE Name like :nameToSearchInQuery];
    }
}