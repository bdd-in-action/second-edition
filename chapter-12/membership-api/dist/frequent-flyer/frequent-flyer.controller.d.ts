import { FrequentFlyerService } from './frequent-flyer.service';
import { CreateFrequentFlyerDto } from './dto/create-frequent-flyer.dto';
import { ValidateEmailDto } from "./dto/validate-email.dto";
export declare class FrequentFlyerController {
    private readonly frequentFlyerService;
    constructor(frequentFlyerService: FrequentFlyerService);
    create(createFrequentFlyerDto: CreateFrequentFlyerDto): {
        frequentFlyerNumber: any;
        status: import("./entities/status").Status;
    } & CreateFrequentFlyerDto;
    confirmEmail(validateEmailDto: ValidateEmailDto): void;
    findAll(): any[];
    findByFrequentFlyerNumber(id: number): any;
    remove(id: string): void;
}
