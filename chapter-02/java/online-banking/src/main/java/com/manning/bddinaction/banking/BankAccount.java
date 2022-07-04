package com.manning.bddinaction.banking;

public class BankAccount {
    private AccountType accountType;
    private double balance;

    public BankAccount(AccountType accountType) {
        this.accountType = accountType;
    }

    public static BankAccount ofType(AccountType accountType) {
        return new BankAccount(accountType);
    }

    public BankAccount withBalance(double balance) {
        this.balance = balance;
        return this;
    }

    public void deposit(double amount) {
        this.balance += amount;
    }

    public void withdraw(double amount) {
        this.balance -= amount;
    }

    public double getBalance() {
        return balance;
    }

    public AccountType getAccountType() {
        return accountType;
    }

    public void recordTransaction(Transaction transaction) {
        this.balance = this.balance + transaction.amount();
    }
}
