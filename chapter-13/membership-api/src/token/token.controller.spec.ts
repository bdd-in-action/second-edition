import { Test, TestingModule } from '@nestjs/testing';
import { TokenController } from './token.controller';
import {TokenService} from "./token.service";

describe('TokenController', () => {
  let controller: TokenController;
  let service: TokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokenController],
      providers: [TokenService],
    }).compile();

    controller = module.get<TokenController>(TokenController);
    service = module.get<TokenService>(TokenService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find a token for a given email', () => {
    const token = service.newToken("some@email.com", 12345678);

    expect(controller.findByID("12345678")).toEqual(token)
  })

  it('should return an error if no email is present ', () => {
    expect(() => controller.findByID("10000000")).toThrow('Unknown frequent flyer')
  })


  it('should list all the current tokens', () => {
    service.newToken("some@email.com", 12345678);

    expect(controller.findAll()[12345678]).toBeDefined()
  })

});
