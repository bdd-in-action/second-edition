import {Test, TestingModule} from '@nestjs/testing';
import {FrequentFlyerController} from './frequent-flyer.controller';
import {FrequentFlyerService} from './frequent-flyer.service';
import {FrequentFlyerRepository} from "./frequent-flyer.repository";
import {Status} from "./entities/status";
import {TokenService} from "../token/token.service";
import mocks from "node-mocks-http";
import {HttpStatus} from "@nestjs/common";

describe('FrequentFlyerController', () => {
    let controller: FrequentFlyerController;
    let tokenService: TokenService;
    var mocks = require('node-mocks-http');
    var req = mocks.createRequest()

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FrequentFlyerController],
            providers: [FrequentFlyerService, FrequentFlyerRepository, TokenService],
        }).compile();

        controller = module.get<FrequentFlyerController>(FrequentFlyerController);
        tokenService = module.get<TokenService>(TokenService);
        req.res = mocks.createResponse()

    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('When creating a new account', () => {

        const newFrequentFlyer = {
            email: 'some@email.com',
            password: 'secret',
            firstName: 'Joe',
            lastName: 'Smith',
            title: 'Mr',
            address: 'Travelville',
            country: 'USA'
        }

        it('should generate a new Frequent Flyer number for each account', () => {
            const result = controller.create(newFrequentFlyer);
            expect(result.frequentFlyerNumber).toBeDefined()
        })

        it('new Frequent Flyer accounts should be Pending', () => {
            const result = controller.create(newFrequentFlyer);
            const frequentFlyerNumber = result.frequentFlyerNumber;

            const frequentFlyerAccount = controller.findByFrequentFlyerNumber(frequentFlyerNumber)
            expect(frequentFlyerAccount.status).toEqual(Status.Pending)
        });

        describe('When confirming the email address', () => {

            it('the account status should go to Active ', () => {
                const result = controller.create(newFrequentFlyer);
                const frequentFlyerNumber = result.frequentFlyerNumber;

                const token = tokenService.findByEmail('some@email.com');

                controller.confirmEmail({email: 'some@email.com', token: token}, req.res)

                const frequentFlyerAccount = controller.findByFrequentFlyerNumber(frequentFlyerNumber)
                expect(frequentFlyerAccount.status).toEqual(Status.Active)
            })
        });
    })
});
