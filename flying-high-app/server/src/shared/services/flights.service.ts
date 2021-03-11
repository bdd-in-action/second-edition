import { BadRequestException, forwardRef, HttpService, Inject, Injectable } from '@nestjs/common';
import { City } from '../../flights/interface/city.interface';
import { Flight, FlightResource } from '../../flights/interface/flight.interface';
import { delay } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

@Injectable()
export class FlightsService {
    // km / min
    private readonly flightSpeed = 800 / 60;
    private readonly flights: Flight[] = [];
    cityList = [
        { name: 'Sydney', point: 150, short: 'SYD' },
        { name: 'Melbourne', point: 138, short: 'MEL' },
        { name: 'Perth', point: 129, short: 'PER' },
        { name: 'Auckland', point: 131, short: 'AKL' },
        { name: 'Wellington', point: 129, short: 'WLG' },
        { name: 'London', point: 162, short: 'LHR' },
        { name: 'San Francisco', point: 142, short: 'SFO' },
        { name: 'New York', point: 150, short: 'JFK' },
        { name: 'Los Angeles', point: 147, short: 'LAX' },
        { name: 'Toronto', point: 132, short: 'YYZ' },
        { name: 'Singapore', point: 162, short: 'SIN' },
        { name: 'Hong Kong', point: 188, short: 'HKG' },
        { name: 'Seattle', point: 122, short: 'SEA' },
        { name: 'Shanghai', point: 167, short: 'PVG' },
        { name: 'Seoul', point: 132, short: 'ICN' },
        { name: 'Sao Paulo', point: 133, short: 'GRU' },
        { name: 'Amsterdam', point: 166, short: 'AMS' }
    ];

    constructor(
        private readonly http: HttpService,
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService,
        @Inject(forwardRef(() => UsersService))
        private usersService: UsersService
    ) { }

    getCities(filter: string): City[] {
        if (filter) {
            return this.cityList.filter(
                city =>
                    city.name.toUpperCase().includes(filter.toUpperCase()) ||
                    city.short.includes(filter.toUpperCase())
            )
        } else {
            return this.cityList;
        }
    }

    getCity(cityName: any) {
        return this.cityList.find(city => city.name === cityName)
    }

    createFlight(flight: Flight) {
        flight = {
            ...flight,
            points: this.usersService.updateUserPointsAndLevel(this.authService.getAuthUser(), flight.departure.point + flight.destination.point),
            // generate random string to make an id of the order
            orderNumber: this.generateRandomString(8)
        };
        this.flights.push(flight);
        return this.flights;
    }

    getFlights() {
        return this.flights;
    }

    getFlightsByEmail(email: string) {
        return this.flights.filter(flight => flight.email === email);
    }

    async searchFlight(flight: Flight) {
        let flightResources: FlightResource[] | FlightResource[][];
        let randomFlightNumber = Math.floor(Math.random() * 5);
        if (randomFlightNumber < 1) {
            randomFlightNumber = 1;
        }
        if (flight.returnDate) {
            if (new Date(flight.departureDate).getTime() > new Date(flight.returnDate).getTime()) {
                throw new BadRequestException('departure date cannot be later than the return date!')
            }
            const flightTimes = await this.generateRandomTime(randomFlightNumber, flight, 'return');
            flightResources = flightTimes.map(
                flightTime => {
                    const comeFlight = flightTime[0];
                    const returnFlight = flightTime[1];
                    return [
                        {
                            departureTime: comeFlight.departureTimeForCome,
                            arrivalTime: comeFlight.arrivalTimeForCome,
                            duration: comeFlight.travelDuration.duration,
                            departure: flight.departure,
                            destination: flight.destination,
                            class: flight.class,
                            price: Number(comeFlight.price)
                        },
                        {

                            departureTime: returnFlight.departureTimeForReturn,
                            arrivalTime: returnFlight.arrivalTimeForReturn,
                            duration: returnFlight.travelDuration.duration,
                            departure: flight.destination,
                            destination: flight.departure,
                            class: flight.class,
                            price: Number(returnFlight.price)
                        }
                    ]
                }
            )
        } else {
            const flightTimes = await this.generateRandomTime(randomFlightNumber, flight, 'departure');
            flightResources = flightTimes.map(
                flightTime => ({
                    departureTime: flightTime.departureTime,
                    arrivalTime: flightTime.arrivalTime,
                    duration: flightTime.travelDuration.duration,
                    departure: flight.departure,
                    destination: flight.destination,
                    class: flight.class,
                    price: Number(flightTime.price)
                })
            )
        }
        return flightResources;
    }

    private async generateRandomTime(count: number, flight: Flight, flag: 'departure' | 'return') {
        const result: any = (await this.http.get(
            `https://www.distance24.org/route.json?stops=${flight.departure.name}|${flight.destination.name}`
        ).pipe(delay(3000)).toPromise()).data;
        const distance = result.distance;
        const travelDuration = this.getTravelDuration(distance);
        const totalTravelDuration = travelDuration.totalInHours * 3600000;
        const departureEpo = new Date(flight.departureDate).getTime();
        if (flag === 'departure') {
            const flightsTimes = [];
            // in minutes
            for (let i = 0; i < count; i++) {
                const randomDepartureEpo = departureEpo + Math.random() * (24 - i * count) * 360000;
                const departureTime = new Date(randomDepartureEpo);
                const arrivalTime = new Date(randomDepartureEpo + totalTravelDuration);
                flightsTimes.push({
                    departureTime,
                    arrivalTime,
                    travelDuration,
                    price: Math.floor(Math.random() * distance) === 0 ? 800 : Math.floor(Math.random() * distance)
                });
            }
            return flightsTimes.sort((a, b) => {
                return a.departureTime.getTime() - b.departureTime.getTime()
            });
        } else {
            const flightsTimes = [];
            const returnEpo = new Date(flight.returnDate).getTime();
            // in minutes
            for (let i = 0; i < count; i++) {
                const randomDepartureEpo = departureEpo + Math.random() * (24 - i * count) * 360000;
                const randomReturnEpo = returnEpo + 86400000 / 2 + Math.random() * (24 - i * count) * 360000;
                const departureTimeForCome = new Date(randomDepartureEpo);
                const arrivalTimeForCome = new Date(randomDepartureEpo + totalTravelDuration);
                const departureTimeForReturn = new Date(randomReturnEpo);
                const arrivalTimeForReturn = new Date(randomReturnEpo + totalTravelDuration);
                flightsTimes.push([{
                    departureTimeForCome,
                    arrivalTimeForCome,
                    travelDuration,
                    price: Math.floor(Math.random() * distance) === 0 ? 800 : Math.floor(Math.random() * distance)
                }, {
                    departureTimeForReturn,
                    arrivalTimeForReturn,
                    travelDuration,
                    price: Math.floor(Math.random() * distance) === 0 ? 800 : Math.floor(Math.random() * distance)
                }]);
            }
            return flightsTimes.sort((a, b) => {
                return a[0].departureTimeForCome.getTime() - b[0].departureTimeForCome.getTime()
            });
        }
    }

    private getTravelDuration(distance: number) {
        // in minutes
        const takeOffTime = 30;
        const landingTime = 30;
        const totalInHours = (takeOffTime + landingTime + distance / this.flightSpeed) / 60;
        const rHours = Math.floor(totalInHours);
        const minutes = (totalInHours - rHours) * 60;
        const rminutes = Math.round(minutes);
        // return in hours
        return {
            totalInHours,
            duration: rHours + ' hours ' + rminutes + ' minutes'
        };
    }

    generateRandomString(length: number, charSet?: string): string {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < length; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
        return randomString;
    }
}
