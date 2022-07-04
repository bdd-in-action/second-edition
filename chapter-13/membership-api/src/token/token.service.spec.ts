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

    it('should find a token with a given frequent flyer number', () => {
      const token = service.newToken('some@email.com',12345678)
      const storedToken = service.findByFrequentFlyerNumber(12345678)
      expect(token).toEqual(storedToken);
    })

    it('should not find a token if the frequent flyer number is invalid', () => {
      service.newToken('some@email.com',12345678)
      const storedToken = service.findByFrequentFlyerNumber(99999999)
      expect(storedToken).toBeUndefined()
    })


    it('should allow the token validated for the corresponding email', () => {
      const token = service.newToken('some@email.com',12345678)
      const validated = service.validate('some@email.com', 12345678, token)
      expect(validated).toBeTruthy()
    })

    it('should not allow the token validated for a different email', () => {
      const token = service.newToken('some@email.com',12345678)
      const validated = service.validate('some.other@email.com', 12345678, token)
      expect(validated).toBeFalsy()
    })

    it('should not allow the token validated for a different frequent flyer number', () => {
      const token = service.newToken('some@email.com',12345678)
      const validated = service.validate('some.other@email.com', 99999999, token)
      expect(validated).toBeFalsy()
    })

    it('should not allow a token to be validated twice', () => {
      const token = service.newToken('some@email.com',12345678)
      service.validate('some@email.com', 12345678, token)
      const validated = service.validate('some@email.com', 12345678, token)
      expect(validated).toBeFalsy()
    })

    it('should not allow a token to be validated after it has expired', () => {
      const token = service.newToken('some@email.com',12345678)
      service.tokens[12345678].created = new Date("2001-01-01");

      const validated = service.validate('some@email.com', 12345678, token)
      expect(validated).toBeFalsy()
    })
  })
});
