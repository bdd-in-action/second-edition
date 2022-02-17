import {Injectable} from '@nestjs/common';
import {CreateFrequentFlyerDto} from './dto/create-frequent-flyer.dto';
import {FrequentFlyerRepository} from "./frequent-flyer.repository";
import {AccountStatus} from "./entities/accountStatus";
import {TokenService} from "../token/token.service";
import {ValidateEmailDto} from "./dto/validate-email.dto";
import {MembershipTier} from "./entities/MembershipTier";
import {FrequentFlyer} from "./entities/frequent-flyer.entity";

@Injectable()
export class FrequentFlyerService {
  constructor(
      private readonly frequentFlyerRepository: FrequentFlyerRepository,
      private readonly tokenService : TokenService
  ) {}

  create(frequentFlyerDetails: CreateFrequentFlyerDto) {
    const nextFrequentFlyerNumber = this.frequentFlyerRepository.findLargestFrequentFlyerNumber(1000000) + 1
    const frequentFlyer = Object.assign(new FrequentFlyer(), frequentFlyerDetails)
    frequentFlyer.frequentFlyerNumber = nextFrequentFlyerNumber;

    // Save the new member details
    this.frequentFlyerRepository.save(frequentFlyer)

    // Generate a token for this member
    this.tokenService.newToken(frequentFlyerDetails.email, nextFrequentFlyerNumber)

    return frequentFlyer;
  }

  findAll() {
    return this.frequentFlyerRepository.findAll();
  }

  findByFrequentFlyerNumber(id: number) {
    return this.frequentFlyerRepository.findByFrequentFlyerNumber(id);
  }

  findByEmail(email: string) {
    return this.frequentFlyerRepository.findByEmail(email);
  }

  remove(id: number) {
    this.frequentFlyerRepository.removeByFrequentFlyerNumber(id);
  }

  confirmEmail(validateEmailDto: ValidateEmailDto) {
    if (this.tokenService.validate(validateEmailDto.email, validateEmailDto.frequentFlyerNumber, validateEmailDto.token)) {
      let frequentFlyer = this.frequentFlyerRepository.findByEmail(validateEmailDto.email);
      frequentFlyer.accountStatus = AccountStatus.Active
      return true;
    } else {
      return false;
    }
  }
}
