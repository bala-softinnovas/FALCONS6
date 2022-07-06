public with sharing class ContactCallouts {
    @future(callout=true)
    public static void sendData(List<Id> contactIds) {
        //get the data and prepare json
        List<Contact> con = [Select Name, Email, Gender__c, Status__c FROM Contact WHERE Id = :contactIds[0]];
        UserInfo info = new UserInfo();
        info.name = con[0].Name;
        info.email = con[0].Email;
        info.gender = con[0].Gender__c;
        info.status = con[0].Status__c;
        //populate info with details from soql
        String jsonString = JSON.serialize(info);
        System.debug(jsonString);
        
        //prepare request
        String endpoint = 'https://gorest.co.in/public/v2/users';
        String token = '70e1f461fd475135683473e734663791d988ca49336b3a1002405be2ff00ed29';
        HttpRequest request = new HttpRequest();
        //set endpoint, httpmethod & request body
        request.setEndpoint(endpoint);
        request.setMethod('POST');
        request.SetBody(jsonString);
        request.setHeader('Content-Type', 'application/json; charset=utf-8');
        request.setHeader('Authorization', 'Bearer 70e1f461fd475135683473e734663791d988ca49336b3a1002405be2ff00ed29');
        
        Http http = new Http();
        HttpResponse response = http.send(request);
        System.debug('Status Code: ' + response.getStatusCode());
        System.debug('Response: ' + response.getBody());
		//create a log => it can be info incase of sucess, error incase of error
        if(response.getStatusCode() == 201) {
            //create success log
            CommonUtilities.createLog('Success', 'ContactCallouts.sendData', 'Integration', response.getStatus(), response.getBody());
        } else {
            //create error log
            CommonUtilities.createLog('Error', 'ContactCallouts.sendData', 'Integration', response.getStatus(), response.getBody());
        }
    }
}