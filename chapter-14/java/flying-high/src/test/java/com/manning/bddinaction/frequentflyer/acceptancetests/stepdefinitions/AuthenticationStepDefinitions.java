package com.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.UserLevel;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravellerPersona;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.login.Login;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.registration.RegisterAsAFrequentFlyer;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.ux.Acknowledge;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.serenitybdd.core.pages.WebElementFacade;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.RememberThat;
import net.serenitybdd.screenplay.abilities.BrowseTheWeb;
import net.serenitybdd.screenplay.targets.Target;
import net.thucydides.core.configuration.SessionLocalTempDirectory;
import org.awaitility.Awaitility;

import java.io.File;
import java.util.concurrent.TimeUnit;

import static org.assertj.core.api.Assertions.assertThat;

public class AuthenticationStepDefinitions {

    @Given("{actor} is a new Frequent Flyer Member")
    public void aNewFrequentFlyerMember(Actor traveller) {
        traveller.attemptsTo(
                RegisterAsAFrequentFlyer.viaTheAPI().withMemberDetailsFrom(
                        TravellerPersona.withName(traveller.getName()).withAUniqueEmailAddress()
                )
        );
    }

    @Given("{actor} is a Frequent Flyer Member with status {statusLevel}")
    public void aNewFrequentFlyerMember(Actor traveller, UserLevel statusLevel) {
        traveller.attemptsTo(
                RegisterAsAFrequentFlyer.viaTheAPI().withMemberDetailsFrom(
                        TravellerPersona.withName(traveller.getName())
                                .withAUniqueEmailAddress()
                                .withLevel(statusLevel)
                )
        );
    }

    @Given("{actor} has logged onto the Frequent Flyer application as a new member")
    public void loginAsANewMember(Actor member) {
        Traveller traveller = TravellerPersona.withName(member.getName()).withAUniqueEmailAddress();
        member.attemptsTo(
                RegisterAsAFrequentFlyer.viaTheAPI().withMemberDetailsFrom(traveller),
                Login.as(traveller)
        );
    }

    public static Target FILE_OF_TYPE = Target.the("{0} download icon").locatedBy("//a[img[@alt = '{0} icon']]");

    String downloadedFileName;

    @When("{actor} selects a {word} file")
    public void selectsAFileOfType(Actor actor, String filetype) {
        WebElementFacade fileIconLink = FILE_OF_TYPE.of(filetype).resolveFor(actor);
        String downloadPath = fileIconLink.getAttribute("href");
        int lastPathSeparator = downloadPath.lastIndexOf("/");
        downloadedFileName = downloadPath.substring(lastPathSeparator + 1);
        fileIconLink.click();
    }

    @Then("the {word} file should be correctly downloaded")
    public void fileIsCorrectlyDownloadedForType(String filetype){

        File downloadedFile = SessionLocalTempDirectory.forTheCurrentSession().resolve("downloads/" + downloadedFileName).toFile();

        Awaitility.await().atMost(10, TimeUnit.SECONDS).until(downloadedFile::exists);

        // Check that the file exists...
        assertThat(downloadedFile).exists();
    }

    @When("{actor} has logged onto the Frequent Flyer application")
    public void loginAs(Actor member) {
        Traveller currentUser = member.recall("CURRENT_USER");
        member.attemptsTo(
                Login.as(currentUser),
                Acknowledge.successMessageOf("Logged in as " + currentUser.email())
        );
    }

    @And("he has confirmed his email address")
    public void heHasConfirmedHisEmailAddress() {

    }
}
