public with sharing class CommonUtilities {
    public static void createLog(String logType, String targetName, String targetType, String message, String stackTrace) {
        Application_Log__c log = new Application_Log__c();
        log.Log_Type__c = logType;
        log.Target_Name__c = targetName;
        log.Target_Type__c = targetType;
        log.Message__c = message;
        log.Stack_Trace__c = stackTrace;
        insert log;
    }
}