package com.manning.bddinaction.banking;

import java.util.HashMap;
import java.util.Map;

public class Client {
    private final String name;
    private final Map<AccountType, BankAccount> accounts = new HashMap<>();

    public Client(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void opens(BankAccount bankAccount) {
        accounts.put(bankAccount.getAccountType(), bankAccount);
    }

    public BankAccount get(AccountType accountType) {
        return accounts.get(accountType);
    }
}
