package com.manning.bddinaction.acceptancetests.domain;

import com.manning.bddinaction.banking.AccountType;

public record InitialAccount(AccountType accountType, int balance) {
}
