export interface Traveller {
  "firstName": string,
  "lastName": string,
  "email": string,
  "password": string,
  "title": string,
  "address": string,
  "country": string,
  "seatPreference": string,
}

export const travellers: { [name: string]: Traveller } = {
  "Trevor": {
    "firstName": "Trevor",
    "lastName": "Traveller",
    "email": "trevor@traveller.com",
    "password": "tr3vor",
    "title": "Mr",
    "address": "10 Partridge Street, Dandenong",
    "country": "Australia",
    "seatPreference": "aisle"
  },
  "Candy": {
    "firstName": "Candy",
    "lastName": "Traveller",
    "email": "candy@traveller.com",
    "password": "cand1",
    "title": "Mrs",
    "address": "10 Partridge Street, Dandenong",
    "country": "Australia",
    "seatPreference": "window"
  }
}
