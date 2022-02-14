import { Test, TestingModule } from '@nestjs/testing';
import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokenService],
    }).compile();

    service = module.get<TokenService>(TokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('When creating a token for a new Frequent Flyer', () => {
    it('should create a new token for a given frequent flyer number', () => {
      const token = service.newToken('some@email.com',12345678)
      expect(token).toBeDefined();
    })

    it('should allow the token validated for the corresponding email', () => {
      const token = service.newToken('some@email.com',12345678)
      const validated = service.validate('some@email.com', token)
      expect(validated).toBeTruthy()
    })

    it('should not allow the token validated for a different email', () => {
      const token = service.newToken('some@email.com',12345678)
      const validated = service.validate('some.other@email.com', token)
      expect(validated).toBeFalsy()
    })

    it('should not allow a token to be validated twice', () => {
      const token = service.newToken('some@email.com',12345678)
      service.validate('some@email.com', token)
      const validated = service.validate('some@email.com', token)
      expect(validated).toBeFalsy()
    })
  })
});
