export abstract class TravelerDetails {
    firstName:      string;
    lastName:       string;
    email:          string;
    password:       string;
    title:          string;
    address:        string;
    country:        string;
    seatPreference: string;

    static of(actorName: string): TravelerDetails {
        return {
            firstName:      actorName,
            lastName:       'Traveler',
            email:          `${ actorName }.Traveler@example.org`,
            password:       'P@ssw0rd',
            title:          'Mx',
            address:        '10 Partridge Street, Dandenong',
            country:        'Australia',
            seatPreference: 'window'
        }
    }
}
