import { FlightDatabase } from './FlightDatabase';
import { FlightPlan } from './FlightPlan';

export class TripDistanceRecorder {
    private origin: string
    private destination: string
    private distanceInKm: number

    constructor(private readonly flightDatabase: FlightDatabase) {
    }

    from(origin: string) {
        this.origin = origin
        return this
    }

    to(destination: string) {
        this.destination = destination
        return this
    }

    as(distanceInKm: number) {
        this.distanceInKm = distanceInKm
        return this
    }

    kilometers() {
        this.flightDatabase.saveFlightPlan(
            new FlightPlan(this.origin, this.destination, this.distanceInKm)
        )
    }
}
