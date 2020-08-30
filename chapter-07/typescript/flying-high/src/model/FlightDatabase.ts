import { FlightPlan } from './FlightPlan';
import { TripDistanceRecorder } from './TripDistanceRecorder';

export class FlightDatabase {

    private readonly flightPlans: FlightPlan[]

    recordTripDistance(): TripDistanceRecorder {
        return new TripDistanceRecorder(this)
    }

    saveFlightPlan(flightPlan: FlightPlan) {
        this.flightPlans.push(flightPlan)
    }
}
