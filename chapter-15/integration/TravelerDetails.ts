export abstract class TravelerDetails {
    title:          string;
    firstName:      string;
    lastName:       string;
    email:          string;
    password:       string;
    address:        string;
    country:        string;
    seatPreference: string;

    static of(actorName: string): TravelerDetails {
        return {
            title:          'Mx',
            firstName:      actorName,
            lastName:       'Traveler',
            email:          `${ actorName }.Traveler@example.org`,
            password:       'P@ssw0rd',
            address:        '35 Victoria Street, Alexandria',
            country:        'Australia',
            seatPreference: 'window'
        }
    }
}
