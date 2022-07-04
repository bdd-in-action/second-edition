import {Test, TestingModule} from '@nestjs/testing';
import {FrequentFlyerRepository} from "./frequent-flyer.repository";
import {MembershipTier} from "./entities/MembershipTier";

describe('FrequentFlyerRepository', () => {
    let repository: FrequentFlyerRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FrequentFlyerRepository],
        }).compile();

        repository = module.get<FrequentFlyerRepository>(FrequentFlyerRepository);

        repository.clear();
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });

    describe('When creating a new frequent flyer', () => {
        const frequentFlyer = {
            frequentFlyerNumber: 123456,
            email: 'some@email.com',
            password: 'secret',
            firstName: 'Joe',
            lastName: 'Smith',
            title: 'Mr',
            address: 'Travelville',
            country: 'USA',
            isActivated: false,
            tier: MembershipTier.Standard,
            statusPoints: 0
        }

        it('should save a new frequent flyer', () => {
            repository.save(frequentFlyer)
            expect(repository.findAll()).toContain(frequentFlyer)
        })

        it('should be able to find a frequent flyer by frequent flyer number', () => {

            repository.save(frequentFlyer)

            const loadedFrequentFlyer = repository.findByFrequentFlyerNumber(123456)

            expect(loadedFrequentFlyer).toEqual(frequentFlyer);
        })

        it('should return undefined if no frequent flyer exists', () => {

            repository.save(frequentFlyer)

            const loadedFrequentFlyer = repository.findByFrequentFlyerNumber(999999999)

            expect(loadedFrequentFlyer).toBeUndefined()
        })
    })
})
