package com.manning.bddinaction.banking;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("When creating a new bank account")
class WhenCreatingANewAccount {

    @DisplayName("A new account should have an initial balance")
    @Test
    void newAccountTypeAndBalance() {
        BankAccount account = BankAccount.ofType(AccountType.Savings).withBalance(100);
        assertThat(account.getBalance()).isEqualTo(100.0);
        assertThat(account.getAccountType()).isEqualTo(AccountType.Savings);
    }
}


//
//
//    @DisplayName("Different types of accounts are supported")
//    @ParameterizedTest
//    @EnumSource(AccountType.class)
//    void differentAccountTypes(AccountType accountType) {
//        BankAccount account = BankAccount.ofType(accountType).withBalance(100);
//        assertThat(account.getAccountType()).isEqualTo(accountType);
//    }
//}
