Account acc = [SELECT Id, OwnerId FROM Account WHERE Industry = 'Biotechnology' LIMIT 1];
System.debug('BALA:' + acc.Id);
Map<String, Object> inputs = new Map<String, Object>();
inputs.put('AccountId', acc.Id);
inputs.put('AccountOwnerId', acc.OwnerId);
Flow.Interview flow = new Flow.Interview.Account_Updates(inputs);
flow.start();