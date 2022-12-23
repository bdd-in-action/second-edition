/**
 * This is a Cucumber.js profile
 * @see https://github.com/cucumber/cucumber-js/blob/main/docs/profiles.md
 *
 * @type {{default: string}}
 */
module.exports = {
    playwright: [
        `--publish-quiet`,
        `--require-module 'ts-node/register'`,                      // use TypeScript in-memory transpiler, ts-node
        `--format "@serenity-js/cucumber"`,                         // use Serenity/JS Cucumber adapter - https://serenity-js.org/modules/cucumber/
        `--require "./features/**/*.steps.ts"`,                     // load step definition libraries
        `--require './integration/playwright/serenity.config.ts'`   // load Serenity/JS configuration
    ].join(' ')
};
