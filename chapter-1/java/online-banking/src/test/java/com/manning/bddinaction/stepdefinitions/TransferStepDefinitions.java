package com.manning.bddinaction.stepdefinitions;

import com.manning.bddinaction.actions.TransferApi;
import com.manning.bddinaction.banking.BankAccount;
import com.manning.bddinaction.banking.AccountType;
import com.manning.bddinaction.banking.Client;
import io.cucumber.java.ParameterType;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

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
        client.opens(BankAccount.ofType(accountType).withBalance(balance));
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

    @When("the monthly interest is calculated")
    public void calculateInterest() {
    }

    @Then("he/she should have ${int} in the/his/her {accountType} account")
    public void iShouldHaveBalance(int expectedBalance, AccountType accountType) {
        BankAccount account = client.get(accountType);
        assertThat(account.getBalance()).isEqualTo(expectedBalance);
    }

    @Then("he/she should receive an {string} error")
    public void iShouldReceiveAnError(String errorMessage) {

    }
}
