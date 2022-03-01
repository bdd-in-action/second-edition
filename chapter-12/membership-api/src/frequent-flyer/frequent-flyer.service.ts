import {Injectable} from '@nestjs/common';
import {CreateFrequentFlyerDto} from './dto/create-frequent-flyer.dto';
import {FrequentFlyerRepository} from "./frequent-flyer.repository";
import {TokenService} from "../token/token.service";
import {ValidateEmailDto} from "./dto/validate-email.dto";
import {FrequentFlyer} from "./entities/frequent-flyer.entity";
import {EventBusService} from "../events/eventbus.service";
import {NewFrequentFlyerEvent} from "../events/new-frequent-flyer-event";

@Injectable()
export class FrequentFlyerService {
    constructor(
        private readonly frequentFlyerRepository: FrequentFlyerRepository,
        private readonly tokenService: TokenService,
        private readonly eventBusService: EventBusService
    ) {
    }

    frequentFlyerNumberCounter = 1000000;

    create(frequentFlyerDetails: CreateFrequentFlyerDto) {
        const nextFrequentFlyerNumber = this.frequentFlyerNumberCounter++;
        const frequentFlyer = Object.assign(new FrequentFlyer(), frequentFlyerDetails)
        frequentFlyer.frequentFlyerNumber = nextFrequentFlyerNumber;

        // Save the new member details
        this.frequentFlyerRepository.save(frequentFlyer)

        // Generate a token for this member
        const token = this.tokenService.newToken(frequentFlyerDetails.email, nextFrequentFlyerNumber)

        // Publish a NewFrequentFlyer event
        this.eventBusService.publish(new NewFrequentFlyerEvent({
            frequentFlyerNumber: frequentFlyer.frequentFlyerNumber,
            firstName: frequentFlyer.firstName,
            lastName: frequentFlyer.lastName,
            email: frequentFlyer.email,
            emailToken: token
        }));

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
            frequentFlyer.isActivated = true;
            return true;
        } else {
            return false;
        }
    }
}
