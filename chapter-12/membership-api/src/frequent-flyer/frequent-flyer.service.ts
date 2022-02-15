import { Injectable } from '@nestjs/common';
import { CreateFrequentFlyerDto } from './dto/create-frequent-flyer.dto';
import {FrequentFlyerRepository} from "./frequent-flyer.repository";
import {Status} from "./entities/status";
import {TokenService} from "../token/token.service";
import {ValidateEmailDto} from "./dto/validate-email.dto";

@Injectable()
export class FrequentFlyerService {
  constructor(
      private readonly frequentFlyerRepository: FrequentFlyerRepository,
      private readonly tokenService : TokenService
  ) {}

  create(frequentFlyerDetails: CreateFrequentFlyerDto) {
    const nextFrequentFlyerNumber = this.frequentFlyerRepository.findLargestFrequentFlyerNumber(1000000) + 1
    const newFrequentFlyer = {frequentFlyerNumber: nextFrequentFlyerNumber, status: Status.Pending}

    const frequentFlyer = Object.assign(newFrequentFlyer, frequentFlyerDetails)

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
      frequentFlyer.status = Status.Active
      return true;
    } else {
      return false;
    }
  }
}
