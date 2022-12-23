import { AfterAll, BeforeAll, setDefaultTimeout } from '@cucumber/cucumber';
import { ConsoleReporter } from '@serenity-js/console-reporter';
import { ArtifactArchiver, configure, Duration } from '@serenity-js/core';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';
import { Photographer, TakePhotosOfFailures, TakePhotosOfInteractions /* TakePhotosOfFailures */ } from '@serenity-js/web';
import * as playwright from 'playwright';

import { Actors } from './Actors';
import { resolve } from 'path';

const projectRoot   = resolve(__dirname, '../..');

const baseURL = 'http://localhost:3000';

const timeouts = {
    cucumber: {
        step: Duration.ofSeconds(30),                       // how long to wait for a Cucumber step to complete
    },
    playwright: {
        defaultNavigationTimeout: Duration.ofSeconds(3),        // how long to wait for a page to load
        defaultTimeout:           Duration.ofMilliseconds(500), // how long to wait for an element to show up
    },
    serenity: {
        cueTimeout:               Duration.ofSeconds(5),    // how long to wait for Serenity/JS to complete any post-test activities, like saving screenshots and reports
    }
}

let browser: playwright.Browser;

BeforeAll(async () => {
    // Launch the browser once before all the tests
    // Serenity/JS will take care of managing Playwright browser context and browser tabs.
    browser = await playwright.chromium.launch({
        // headless: false,     // enable non-headless mode
        // slowMo: 500,         // and slow down each Playwright command to see tests in action
    });

    // Configure Cucumber
    setDefaultTimeout(timeouts.cucumber.step.inMilliseconds());

    // Configure Serenity/JS
    configure({

        // Configure Serenity/JS actors to use Playwright browser
        actors: new Actors(browser, {
            baseURL:                    baseURL,
            defaultNavigationTimeout:   timeouts.playwright.defaultNavigationTimeout.inMilliseconds(),
            defaultTimeout:             timeouts.playwright.defaultTimeout.inMilliseconds(),
            defaultNavigationWaitUntil: 'networkidle',
        }),

        // Configure Serenity/JS reporting services
        crew: [
            ArtifactArchiver.storingArtifactsAt(projectRoot, 'reports/playwright'),
            new SerenityBDDReporter(),
            ConsoleReporter.forDarkTerminals(),
            // Photographer.whoWill(TakePhotosOfInteractions),         // capture screenshots of all the interactions; slower but more comprehensive
            Photographer.whoWill(TakePhotosOfFailures),             // capture screenshots of failed interactions; much faster
        ],

        cueTimeout: timeouts.serenity.cueTimeout,
    });
});

AfterAll(async () => {
    // Close the browser after all the tests are finished
    if (browser) {
        await browser.close();
    }
})
