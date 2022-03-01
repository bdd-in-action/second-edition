import {Test, TestingModule} from '@nestjs/testing';
import {FrequentFlyerController} from './frequent-flyer.controller';
import {FrequentFlyerService} from './frequent-flyer.service';
import {FrequentFlyerRepository} from "./frequent-flyer.repository";
import {TokenService} from "../token/token.service";
import {EventBusService} from "../events/eventbus.service";

describe('FrequentFlyerController', () => {
    let controller: FrequentFlyerController;
    let tokenService: TokenService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FrequentFlyerController],
            providers: [FrequentFlyerService, FrequentFlyerRepository, TokenService, EventBusService],
        }).compile();

        controller = module.get<FrequentFlyerController>(FrequentFlyerController);
        tokenService = module.get<TokenService>(TokenService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    const newFrequentFlyer = {
        email: 'joe@example.org',
        password: 'secret',
        firstName: 'Joe',
        lastName: 'Smith',
        title: 'Mr',
        address: 'Travelville',
        country: 'USA'
    }

    const anotherFrequentFlyer = {
        email: 'jane@example.org',
        password: 'secret',
        firstName: 'Jane',
        lastName: 'Smith',
        title: 'Mrs',
        address: 'Travelville',
        country: 'USA'
    }

    const frequentFlyerWithAnInvalidEmail = {
        email: 'lortufefya@vusra.com',
        password: 'secret',
        firstName: 'Joe',
        lastName: 'Smith',
        title: 'Mr',
        address: 'Travelville',
        country: 'USA'
    }

    describe('When creating a new account', () => {

        it('should generate a new Frequent Flyer number for each account', async () => {
            const result = await controller.create(newFrequentFlyer);
            expect(result.frequentFlyerNumber).toBeDefined()
        })

        it('new Frequent Flyer accounts should be Pending', async () => {
            const result = await controller.create(newFrequentFlyer);
            const frequentFlyerNumber = result.frequentFlyerNumber;

            const frequentFlyerAccount = controller.findByFrequentFlyerNumber(frequentFlyerNumber)
            expect(frequentFlyerAccount.isActivated).toBeFalsy()
        });

        it('should return an error if the email is invalid ', async () => {
            const result = controller.create(frequentFlyerWithAnInvalidEmail);
            await expect(result).rejects.toThrow("Invalid email address");
        })

        it('should return an error if the email is already used ',  async () => {
            await controller.create(newFrequentFlyer);

            const result = controller.create(newFrequentFlyer);
            await expect(result).rejects.toThrow("Email already exists");
        })

    });

    describe('When finding a frequent flyer using the frequent flyer number', () => {

        it('should find a frequent flyer with a given number', async () => {
            const result = await controller.create(newFrequentFlyer);
            const frequentFlyerNumber = result.frequentFlyerNumber;

            expect(controller.findByFrequentFlyerNumber(frequentFlyerNumber)).toBeDefined()
        })

        it('should produce an error if no such frequent flyer exists', () => {
            const findFrequentFlyerWithIncorrectNumber = () => controller.findByFrequentFlyerNumber(9999999);
            expect(findFrequentFlyerWithIncorrectNumber).toThrow("No matching Frequent Flyer found with this number")
        })
    });

    describe('When confirming the email address', () => {

        it('the account status should go to Active ', async () => {
            const result = await controller.create(newFrequentFlyer);
            const frequentFlyerNumber = result.frequentFlyerNumber;

            const token = tokenService.findByFrequentFlyerNumber(frequentFlyerNumber);

            controller.confirmEmail({frequentFlyerNumber: frequentFlyerNumber, email: 'joe@example.org', token: token})

            const frequentFlyerAccount = controller.findByFrequentFlyerNumber(frequentFlyerNumber)
            expect(frequentFlyerAccount.isActivated)
        })

        it('should return an error if the token is incorrect ', async () => {
            const result = await controller.create(newFrequentFlyer);
            const frequentFlyerNumber = result.frequentFlyerNumber;

            const confirmWithWrongToken = () => controller.confirmEmail({
                frequentFlyerNumber: frequentFlyerNumber,
                email: 'some@email.com',
                token: "WRONG-TOKEN"
            })
            expect(confirmWithWrongToken).toThrow('Could not confirm this email with this token')
        })

        it('should return an error if the email is incorrect ', async () => {
            const result = await controller.create(newFrequentFlyer);
            const frequentFlyerNumber = result.frequentFlyerNumber;

            const token = tokenService.findByFrequentFlyerNumber(frequentFlyerNumber);

            const confirmWithWrongEmail = () => controller.confirmEmail({
                frequentFlyerNumber: frequentFlyerNumber,
                email: 'wrong@email.com',
                token: token
            })
            expect(confirmWithWrongEmail).toThrow('Could not confirm this email with this token')
        })
    });

    describe('When deleting a frequent flyer account', () => {

        it('should remove the frequent flyer from the list', async () => {
            const flyer1 = await controller.create(newFrequentFlyer);
            await controller.create(anotherFrequentFlyer);

            controller.remove(flyer1.frequentFlyerNumber)

            expect(controller.findAll()).toHaveLength(1)
        })

        it('should not reuse account numbers', async () => {
            const flyer1 = await controller.create(newFrequentFlyer);
            controller.remove(flyer1.frequentFlyerNumber)

            const flyer2 = await controller.create(anotherFrequentFlyer);
            expect(flyer2.frequentFlyerNumber).toBeGreaterThan(flyer1.frequentFlyerNumber)
        })
    });
});
