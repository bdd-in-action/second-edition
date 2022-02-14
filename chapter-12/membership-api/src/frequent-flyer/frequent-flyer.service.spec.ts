import { Test, TestingModule } from '@nestjs/testing';
import { FrequentFlyerService } from './frequent-flyer.service';
import {FrequentFlyerRepository} from "./frequent-flyer.repository";
import {TokenService} from "../token/token.service";

describe('FrequentFlyerService', () => {
  let service: FrequentFlyerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrequentFlyerService, FrequentFlyerRepository, TokenService],
    }).compile();

    service = module.get<FrequentFlyerService>(FrequentFlyerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  const someFrequentFlyer = {
      email:'some@email.com',
      password: 'secret',
      firstName: 'Joe',
      lastName: 'Smith',
      title: 'Mr',
      address: 'Travelville',
      country: 'USA'
  }

    const someOtherFrequentFlyer = {
        email:'someother@email.com',
        password: 'secret',
        firstName: 'Joe',
        lastName: 'Smith',
        title: 'Mr',
        address: 'Travelville',
        country: 'USA'
    }

  it('should create new frequent flyers', () => {
    const newFrequentFlyer = service.create(someFrequentFlyer)
    expect(service.findByFrequentFlyerNumber(newFrequentFlyer.frequentFlyerNumber)).toBeDefined()
  });

  it('should give each new frequent flyer a different number', () => {
    const newFrequentFlyer1 = service.create(someFrequentFlyer)
    const newFrequentFlyer2 = service.create(someOtherFrequentFlyer)

    expect(newFrequentFlyer2.frequentFlyerNumber).toBeGreaterThan(newFrequentFlyer1.frequentFlyerNumber)
  });

  it('should find all registered frequent flyers', () => {
    service.create(someFrequentFlyer)
    expect(service.findAll()).toHaveLength(1)
  });
});
