import {EventBusController} from "./eventbus.controller";
import {EventBusService} from "./eventbus.service";
import {Test, TestingModule} from "@nestjs/testing";
import {NewFrequentFlyerEvent} from "./new-frequent-flyer-event";

describe('EventBusController', () => {
  let controller: EventBusController;
  let service: EventBusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventBusController],
      providers: [EventBusService],
    }).compile();

    controller = module.get<EventBusController>(EventBusController);
    service = module.get<EventBusService>(EventBusService);
  });

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

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find the list of events', () => {
    service.publish(event1);
    service.publish(event2);

    const events = controller.findAll();

    expect(events).toHaveLength(2);
  })

  it('should find a given event', () => {
    service.publish(event1);
    service.publish(event2);

    const event = controller.findEvent("NewFrequentFlyerEvent", "frequentFlyerNumber", "2")

    expect(event.data.firstName).toEqual("Trevor")
  })

  it('should produce an error if no such event exists', () => {
    const findEventWithIncorrectNumber = () => controller.findEvent("NewFrequentFlyerEvent", "frequentFlyerNumber", "999999999");

    expect(findEventWithIncorrectNumber).toThrow("No matching event found")
  })


});
