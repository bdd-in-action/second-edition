package com.manning.bddinaction.banking;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

public class InterestCalculator {
    private Map<AccountType, Float> interestRates = new HashMap<>();

    public void setRates(AccountType accountType, float interestRate) {
        interestRates.put(accountType, interestRate);
    }

    public Transaction calculateMonthlyInterestOn(BankAccount account) {
        double rawinterestEarned = interestRates.get(account.getAccountType()) * account.getBalance() / 100.0 / 12;
        double roundedInterestEarned = Math.round(rawinterestEarned * 100.0) / 100.0;
        Transaction transaction = new Transaction(LocalDateTime.now(), "INTEREST", roundedInterestEarned);
        account.recordTransaction(transaction);
        return transaction;
    }
}
