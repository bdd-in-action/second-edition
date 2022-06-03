export abstract class TravellerDetails {
    firstName:      string;
    lastName:       string;
    email:          string;
    password:       string;
    title:          string;
    address:        string;
    country:        string;
    seatPreference: string;

    static of(actorName: string): TravellerDetails {
        return {
            firstName:      actorName,
            lastName:       'Traveller',
            email:          `${ actorName }.Traveller@example.org`,
            password:       'P@ssw0rd',
            title:          'Mx',
            address:        '10 Partridge Street, Dandenong',
            country:        'Australia',
            seatPreference: 'window'
        }
    }
}
