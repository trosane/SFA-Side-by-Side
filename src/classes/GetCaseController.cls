public with sharing class GetCaseController {
	
	@AuraEnabled
	public static List<Case> getNewCases() {
		List<Case> cases = [SELECT Id, Priority FROM Case WHERE Status = 'New'];
		return cases;
	}

	@AuraEnabled
	public static List<Case> getWorkingCases() {
		List<Case> cases = [SELECT Id, Priority FROM Case WHERE Status = 'Working'];
		return cases;
	}

	@AuraEnabled
	public static List<Case> getEscalatedCases() {
		List<Case> cases = [SELECT Id, Priority FROM Case WHERE Status = 'Escalated'];
		return cases;
	}

	@AuraEnabled
	public static List<Case> getClosedCases() {
		List<Case> cases = [SELECT Id, Priority FROM Case WHERE Status = 'Closed'];
		return cases;
	}

	@AuraEnabled
	public static List<Account> getAllAccounts() {
		List<Account> accounts = [SELECT Id, Name, Phone, Type, AccountNumber FROM Account];
		return accounts;
	}
}