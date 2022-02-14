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

    expect(controller.findByEmail("some@email.com")).toEqual(token)
  })

});
