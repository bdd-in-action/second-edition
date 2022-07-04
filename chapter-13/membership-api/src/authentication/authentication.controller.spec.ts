import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationController } from './authentication.controller';
import {AuthenticationService} from "./authentication.service";
import {FrequentFlyerService} from "../frequent-flyer/frequent-flyer.service";
import {FrequentFlyerRepository} from "../frequent-flyer/frequent-flyer.repository";
import {TokenService} from "../token/token.service";
import {EventBusService} from "../events/eventbus.service";

describe('AuthenticationController', () => {
    let controller: AuthenticationController;
    let frequentFlyerService: FrequentFlyerService;

    const someFrequentFlyer = {
        email: 'some@email.com',
        password: 'secret',
        firstName: 'Joe',
        lastName: 'Smith',
        title: 'Mr',
        address: 'Travelville',
        country: 'USA'
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthenticationController],
            providers: [AuthenticationService, FrequentFlyerService, FrequentFlyerRepository, TokenService, EventBusService],
        }).compile();

        controller = module.get<AuthenticationController>(AuthenticationController);
        frequentFlyerService = module.get<FrequentFlyerService>(FrequentFlyerService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should allow a user to authenticate with a valid username and password', () => {
        const newFrequentFlyer = frequentFlyerService.create(someFrequentFlyer);
        newFrequentFlyer.isActivated = true

        const userDetails = controller.authenticate({email: "some@email.com", password: "secret"})

        expect(userDetails).toBeDefined()
    })

    it('should return an object with user details and a JWT token', () => {
        const newFrequentFlyer = frequentFlyerService.create(someFrequentFlyer);
        newFrequentFlyer.isActivated = true

        const userDetails = controller.authenticate({email: "some@email.com", password: "secret"})

        expect(userDetails.jwtToken).toBeDefined()
    })

    it('should fail for an unknown user', () => {
        const newFrequentFlyer = frequentFlyerService.create(someFrequentFlyer);
        newFrequentFlyer.isActivated = true

        const authenticateWithWrongEmail = () =>  controller.authenticate({email: "unknown@email.com", password: "secret"});

        expect(authenticateWithWrongEmail).toThrow("Invalid email or password")

    })

    it('should fail for a bad password', () => {
        const newFrequentFlyer = frequentFlyerService.create(someFrequentFlyer);
        newFrequentFlyer.isActivated = true

        const authenticateWithWrongEmail = () =>  controller.authenticate({email: "unknown@email.com", password: "incorrect-password"});

        expect(authenticateWithWrongEmail).toThrow("Invalid email or password")

    })

    it('should fail with an unconfirmed email', () => {
        const newFrequentFlyer = frequentFlyerService.create(someFrequentFlyer);
        newFrequentFlyer.isActivated = false

        const authenticateWithWrongEmail = () =>  controller.authenticate({email: "some@email.com", password: "secret"});

        expect(authenticateWithWrongEmail).toThrow("Please confirm your email address")

    })
});
