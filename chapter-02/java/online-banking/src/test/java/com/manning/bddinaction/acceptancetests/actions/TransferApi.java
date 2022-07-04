package com.manning.bddinaction.acceptancetests.actions;

import com.manning.bddinaction.banking.BankAccount;


public class TransferApi {

    double amountToTransfer;
    BankAccount sourceAccount;

    public TransferApi theAmount(double amountToTransfer) {
        this.amountToTransfer = amountToTransfer;
        return this;
    }

    public TransferApi from(BankAccount sourceAccount) {
        this.sourceAccount = sourceAccount;
        return this;
    }

    public void to(BankAccount destinationAccount) {
        if (sourceAccount.getBalance() >= amountToTransfer) {
            sourceAccount.withdraw(amountToTransfer);
            destinationAccount.deposit(amountToTransfer);
        }
    }
}
