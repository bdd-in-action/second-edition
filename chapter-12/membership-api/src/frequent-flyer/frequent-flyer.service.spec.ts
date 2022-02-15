import {Test, TestingModule} from '@nestjs/testing';
import {FrequentFlyerService} from './frequent-flyer.service';
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
        email: 'some@email.com',
        password: 'secret',
        firstName: 'Joe',
        lastName: 'Smith',
        title: 'Mr',
        address: 'Travelville',
        country: 'USA'
    }

    const someOtherFrequentFlyer = {
        email: 'someother@email.com',
        password: 'secret',
        firstName: 'Joe',
        lastName: 'Smith',
        title: 'Mr',
        address: 'Travelville',
        country: 'USA'
    }

    describe('When creating new frequent flyer members', () => {
        it('the new frequent flyer should have a unique number', () => {
            const newFrequentFlyer = service.create(someFrequentFlyer)
            expect(service.findByFrequentFlyerNumber(newFrequentFlyer.frequentFlyerNumber)).toBeDefined()
        });

        it('should give each new frequent flyer a different number', () => {
            const newFrequentFlyer1 = service.create(someFrequentFlyer)
            const newFrequentFlyer2 = service.create(someOtherFrequentFlyer)

            expect(newFrequentFlyer2.frequentFlyerNumber).toBeGreaterThan(newFrequentFlyer1.frequentFlyerNumber)
        });
    });

    describe('When searching for Frequent Flyers', () => {
        it('should find all registered frequent flyers', () => {
            service.create(someFrequentFlyer)
            expect(service.findAll()).toHaveLength(1)
        });

        it('should find a frequent flyer with a given number', () => {
            const newFrequentFlyer = service.create(someFrequentFlyer)

            const foundFrequentFlyer = service.findByFrequentFlyerNumber(newFrequentFlyer.frequentFlyerNumber);

            expect(foundFrequentFlyer).toEqual(newFrequentFlyer)
        });

    })

    describe('When deleting Frequent Flyers', () => {
        it('should remove the frequent flyer from the list', () => {
            const newFrequentFlyer = service.create(someFrequentFlyer)

            const foundFrequentFlyer = service.remove(newFrequentFlyer.frequentFlyerNumber);

            expect(service.findAll()).toHaveLength(0)
        });

    })
});
