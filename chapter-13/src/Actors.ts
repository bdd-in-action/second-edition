import { Actor, Cast, TakeNotes } from '@serenity-js/core';
import { BrowseTheWebWithWebdriverIO } from '@serenity-js/webdriverio';
import { Discardable } from '@serenity-js/core/src/screenplay/abilities/Discardable';
import { travellers } from './testdata';

export class Actors implements Cast {
    prepare(actor: Actor): Actor {
        return actor.whoCan(
            BrowseTheWebWithWebdriverIO.using(browser),
            new TakeNotesUsingANotepadWithInitialNotes(travellers[actor.name]),
        );
    }
}

// todo: Move to @serenity-js/core
class TakeNotesUsingANotepadWithInitialNotes extends TakeNotes implements Discardable {

    /**
     * @desc
     *  Instantiates the {@link Ability} to {@link TakeNotes}
     *
     * @param {Map<string, any>} notepad
     */
    constructor(notes: Record<string, any>) {
        super(new Map<string, any>(Object.entries(notes)));
    }

    /**
     * @desc
     *  Enables the {@link Actor} to clear the notepad when the {@link SceneFinishes}.
     *
     * @returns {Promise<void> | void}
     */
    discard(): Promise<void> | void {
        this.notepad.clear();
    }
}
