export class FlightPlan {
    constructor(
        public readonly origin: string,
        public readonly destination: string,
        public readonly distance: number,
    ) {}
}
