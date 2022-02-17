import {Test, TestingModule} from '@nestjs/testing';
import {FrequentFlyerController} from './frequent-flyer.controller';
import {FrequentFlyerService} from './frequent-flyer.service';
import {FrequentFlyerRepository} from "./frequent-flyer.repository";
import {AccountStatus} from "./entities/accountStatus";
import {TokenService} from "../token/token.service";

describe('FrequentFlyerController', () => {
    let controller: FrequentFlyerController;
    let tokenService: TokenService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FrequentFlyerController],
            providers: [FrequentFlyerService, FrequentFlyerRepository, TokenService],
        }).compile();

        controller = module.get<FrequentFlyerController>(FrequentFlyerController);
        tokenService = module.get<TokenService>(TokenService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    const newFrequentFlyer = {
        email: 'some@email.com',
        password: 'secret',
        firstName: 'Joe',
        lastName: 'Smith',
        title: 'Mr',
        address: 'Travelville',
        country: 'USA'
    }

    const anotherFrequentFlyer = {
        email: 'another@email.com',
        password: 'secret',
        firstName: 'Joe',
        lastName: 'Smith',
        title: 'Mr',
        address: 'Travelville',
        country: 'USA'
    }

    describe('When creating a new account', () => {

        it('should generate a new Frequent Flyer number for each account', () => {
            const result = controller.create(newFrequentFlyer);
            expect(result.frequentFlyerNumber).toBeDefined()
        })

        it('new Frequent Flyer accounts should be Pending', () => {
            const result = controller.create(newFrequentFlyer);
            const frequentFlyerNumber = result.frequentFlyerNumber;

            const frequentFlyerAccount = controller.findByFrequentFlyerNumber(frequentFlyerNumber)
            expect(frequentFlyerAccount.accountStatus).toEqual(AccountStatus.Pending)
        });

        it('should return an error if the email is already used ', () => {
            controller.create(newFrequentFlyer);

            const createANewAccountWithAnExistingEmail = () => controller.create(newFrequentFlyer);
            expect(createANewAccountWithAnExistingEmail).toThrow('Email already exists')
        })
    });

    describe('When finding a frequent flyer using the frequent flyer number', () => {

        it('should find a frequent flyer with a given number', () => {
            const result = controller.create(newFrequentFlyer);
            const frequentFlyerNumber = result.frequentFlyerNumber;

            expect(controller.findByFrequentFlyerNumber(frequentFlyerNumber)).toBeDefined()
        })

        it('should produce an error if no such frequent flyer exists', () => {
            const findFrequentFlyerWithIncorrectNumber = () => controller.findByFrequentFlyerNumber(9999999);
            expect(findFrequentFlyerWithIncorrectNumber).toThrow("No matching Frequent Flyer found with this number")
        })

    });

    describe('When confirming the email address', () => {

        it('the account status should go to Active ', () => {
            const result = controller.create(newFrequentFlyer);
            const frequentFlyerNumber = result.frequentFlyerNumber;

            const token = tokenService.findByFrequentFlyerNumber(frequentFlyerNumber);

            controller.confirmEmail({frequentFlyerNumber: frequentFlyerNumber, email: 'some@email.com', token: token})

            const frequentFlyerAccount = controller.findByFrequentFlyerNumber(frequentFlyerNumber)
            expect(frequentFlyerAccount.accountStatus).toEqual(AccountStatus.Active)
        })

        it('should return an error if the token is incorrect ', () => {
            const result = controller.create(newFrequentFlyer);
            const frequentFlyerNumber = result.frequentFlyerNumber;

            const confirmWithWrongToken = () => controller.confirmEmail({
                frequentFlyerNumber: frequentFlyerNumber,
                email: 'some@email.com',
                token: "WRONG-TOKEN"
            })
            expect(confirmWithWrongToken).toThrow('Could not confirm this email with this token')
        })

        it('should return an error if the email is incorrect ', () => {
            const result = controller.create(newFrequentFlyer);
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

        it('should remove the frequent flyer from the list', () => {
            const flyer1 = controller.create(newFrequentFlyer);
            controller.create(anotherFrequentFlyer);

            controller.remove(flyer1.frequentFlyerNumber)

            expect(controller.findAll()).toHaveLength(1)
        })

    });
});
