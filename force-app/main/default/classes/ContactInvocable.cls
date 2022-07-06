public with sharing class ContactInvocable {

    @InvocableMethod(label='Send Data to GO-REST' 
                    description='Sample Desc' 
                    category='Contact')
    public static void sendData(List<Id> contactIds) {
        ContactCallouts.sendData(contactIds);
    }
}