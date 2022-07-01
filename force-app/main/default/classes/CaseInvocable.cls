public with sharing class CaseInvocable {
    
    @InvocableMethod(label='Send Email & Save Activity'
    description='Sends an email and saves the same as an activity'
    category='Case')
    public static void sendEmail(List<FlowInput> inputs) {

    }

    public class FlowInput {
        public String caseNumber;
        public Id contactId;
    }

    /*account name, List<contactname> & List<opp name>
    public class DataClass {
        public String accName;
        public List<String> conNames;
        public List<String> oppNames;
    }*/
}
