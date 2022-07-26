public with sharing class OpportunityCtrl {
    @AuraEnabled(cacheable=false)
    public static List<Opportunity> getOppsByStage(String stage) {
        return [SELECT Name, Type, Amount, StageName, CloseDate
            FROM Opportunity
            WHERE StageName = :stage];
    }
}
