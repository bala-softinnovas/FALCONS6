Custom_Notification__e evt = new Custom_Notification__e();
evt.Message__c = 'Yahoo... Leads have been processed successfully!';
evt.Initiator__c = 'Leads Processing Batch';
EventBus.publish(evt);