import {Test, TestingModule} from "@nestjs/testing";
import {EventBusService} from "./eventbus.service";
import {NewFrequentFlyerEvent} from "./new-frequent-flyer-event";

describe('EventBusService', () => {
    let service: EventBusService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EventBusService],
        }).compile();

        service = module.get<EventBusService>(EventBusService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    })

    it('should start empty', () => {
        expect(service.eventLog).toHaveLength(0)
    })

    describe("When publishing events", () => {

        const event1 = new NewFrequentFlyerEvent({
            frequentFlyerNumber: 1,
            firstName: "Tracy",
            lastName: "Traveller",
            email: "traveller@travellers.com",
            emailToken: "OIUYIUHKLJHB"
        })

        const event2 = new NewFrequentFlyerEvent({
            frequentFlyerNumber: 2,
            firstName: "Trevor",
            lastName: "Traveller",
            email: "trevor@travellers.com",
            emailToken: "LKHJLKJHKJ"
        })

        it('should publish events to the event bus', () => {
            service.publish(event1)

            expect(service.eventLog).toHaveLength(1);
        })

        it('should find events of a particular type and frequent flyer number', () => {
            service.publish(event1)
            service.publish(event2)

            const locatedEvent = service.findEventMatching("NewFrequentFlyerEvent", "frequentFlyerNumber", "1")

            expect(locatedEvent).toEqual(event1)
        })
    });
});
