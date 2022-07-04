package com.manning.bddinaction.acceptancetests.stepdefinitions;

import com.manning.bddinaction.acceptancetests.actions.TransferApi;
import com.manning.bddinaction.banking.*;
import com.manning.bddinaction.acceptancetests.domain.InitialAccount;
import io.cucumber.java.DataTableType;
import io.cucumber.java.ParameterType;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

public class TransferStepDefinitions {

    TransferApi transfer = new TransferApi();
    Client client;


    @ParameterType(".*")
    public Client client(String clientName) {
        return new Client(clientName);
    }

    @ParameterType(".*")
    public AccountType accountType(String accountType) {
        return AccountType.valueOf(accountType);
    }

    @Given("{client} has a {accountType} account with ${int}")
    public void setupInitialAccount(Client client, AccountType accountType, int balance) {
        this.client = client;
        this.accountType = accountType;
        client.opens(BankAccount.ofType(accountType).withBalance(balance));
    }

    InterestCalculator interestCalculator = new InterestCalculator();
    AccountType accountType;

    @Given("the interest rate for {accountType} accounts is {float}")
    public void setInterestRate(AccountType accountType, float interestRate) {
        interestCalculator.setRates(accountType, interestRate);
    }

    @DataTableType
    public InitialAccount initialAccount(Map<String, String> values) {
        return new InitialAccount(AccountType.valueOf(values.get("account")), Integer.parseInt(values.get("balance")));
    }

    @Given("{client} has the following accounts:")
    public void clientHasAccounts(Client client, List<InitialAccount> initialAccounts) {
        this.client = client;
        initialAccounts.forEach(
                account -> client.opens(BankAccount.ofType(account.accountType()).withBalance(account.balance()))
        );
    }

    @When("he/she transfers ${int} from the {accountType} account to the {accountType} account")
    public void transferBetweenAccounts(int amountToTransfer,
                                        AccountType sourceAccountType,
                                        AccountType destinationAccountType) {
        BankAccount sourceAccount = client.get(sourceAccountType);
        BankAccount destinationAccount = client.get(destinationAccountType);
        transfer.theAmount(amountToTransfer).from(sourceAccount).to(destinationAccount);
    }

    @Given("a/an {accountType} account with ${int}")
    public void setupAnotherAccount(AccountType accountType, int balance) {
        client.opens(BankAccount.ofType(accountType).withBalance(balance));
    }

    Transaction interestEarned;

    @When("the monthly interest is calculated")
    public void calculateInterest() {
        interestEarned = interestCalculator.calculateMonthlyInterestOn(client.get(accountType));
    }

    @Then("he/she should have earned ${double}")
    public void hasEarned(double amountEarned) {
        assertThat(interestEarned.amount()).isEqualTo(amountEarned);
    }

    @Then("he/she should have ${double} in the/his/her {accountType} account")
    public void iShouldHaveBalance(double expectedBalance, AccountType accountType) {
        BankAccount account = client.get(accountType);
        assertThat(account.getBalance()).isEqualTo(expectedBalance);
    }

    @Then("his/her accounts should look like this:")
    public void accountsShouldLookLike(List<InitialAccount> initialAccounts) {
        assertThat(initialAccounts).allMatch(
                expectedAccount -> client.get(expectedAccount.accountType()).getBalance() == expectedAccount.balance()
        );
    }

    @Then("he/she should receive an {string} error")
    public void iShouldReceiveAnError(String errorMessage) {

    }
}
