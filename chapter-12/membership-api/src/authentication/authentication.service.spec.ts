import { Test, TestingModule } from '@nestjs/testing';
import {AuthenticationService} from "./authentication.service";
import {FrequentFlyerService} from "../frequent-flyer/frequent-flyer.service";
import {FrequentFlyerRepository} from "../frequent-flyer/frequent-flyer.repository";
import {TokenService} from "../token/token.service";
import {EventBusService} from "../events/eventbus.service";

describe('AuthenticationService', () => {
  let authenticationService: AuthenticationService;
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
      providers: [FrequentFlyerService, FrequentFlyerRepository, AuthenticationService, TokenService, EventBusService],
    }).compile();

    authenticationService = module.get<AuthenticationService>(AuthenticationService);
    frequentFlyerService = module.get<FrequentFlyerService>(FrequentFlyerService);
  });

  it('should be defined', () => {
    expect(authenticationService).toBeDefined();
  });

  describe('When authenticating a user', () => {
    it('should return the user details if the email and password match', () => {
      frequentFlyerService.create(someFrequentFlyer)

      const authenticatedUser = authenticationService.authenticate("some@email.com","secret")
      expect(authenticatedUser).toBeDefined();
      expect(authenticatedUser.email).toEqual("some@email.com")
      expect(authenticatedUser.firstName).toEqual("Joe")
      expect(authenticatedUser.lastName).toEqual("Smith")
      expect(authenticatedUser.isActivated).toBeFalsy()
    })
  })

  it('should return a JWT token for an authenticated user', () => {
    frequentFlyerService.create(someFrequentFlyer)
    const authenticatedUser = authenticationService.authenticate("some@email.com","secret")
    expect(authenticatedUser.jwtToken).toBeDefined()
  })

  it('should return undefined if the user does not exist', () => {
    frequentFlyerService.create(someFrequentFlyer)

    const authenticatedUser = authenticationService.authenticate("unknown@email.com","secret")
    expect(authenticatedUser).toBeUndefined();
  })

  it('should return undefined if the password does not match', () => {
    frequentFlyerService.create(someFrequentFlyer)

    const authenticatedUser = authenticationService.authenticate("some@email.com","wrong-password")
    expect(authenticatedUser).toBeUndefined();
  })

});
