public with sharing class ContactCtrl {
    @AuraEnabled(cacheable=false)
    public static List<Contact> searchContacts(String searchKey) {
        searchKey = '%' + searchKey + '%';
        return [SELECT FirstName, LastName, Title, Department
            FROM Contact
            WHERE FirstName LIKE :searchKey
            OR LastName LIKE :searchKey
            WITH SECURITY_ENFORCED];
    }
}
