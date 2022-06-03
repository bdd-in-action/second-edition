import { Actor, Cast, Notepad, TakeNotes } from '@serenity-js/core';
import { BrowseTheWebWithWebdriverIO } from '@serenity-js/webdriverio';
import { CallAnApi } from '@serenity-js/rest';
import { TravellerDetails } from './TravellerDetails';
import { AuthenticationDetails } from './AuthenticationDetails';

export interface TravellerNotes {
    travellerDetails:       TravellerDetails;
    authenticationDetails?: AuthenticationDetails;
}

export class Actors implements Cast {
    constructor(private readonly apiUrl: string) {
    }

    prepare(actor: Actor): Actor {
        return actor.whoCan(
            BrowseTheWebWithWebdriverIO.using(browser),
            CallAnApi.at(this.apiUrl),
            TakeNotes.using(
                Notepad.with<TravellerNotes>({
                    travellerDetails: TravellerDetails.of(actor.name),
                })
            )
        );
    }
}
