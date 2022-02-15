import { CreateFrequentFlyerDto } from './dto/create-frequent-flyer.dto';
import { FrequentFlyerRepository } from "./frequent-flyer.repository";
import { Status } from "./entities/status";
import { TokenService } from "../token/token.service";
import { ValidateEmailDto } from "./dto/validate-email.dto";
export declare class FrequentFlyerService {
    private readonly frequentFlyerRepository;
    private readonly tokenService;
    constructor(frequentFlyerRepository: FrequentFlyerRepository, tokenService: TokenService);
    create(frequentFlyerDetails: CreateFrequentFlyerDto): {
        frequentFlyerNumber: any;
        status: Status;
    } & CreateFrequentFlyerDto;
    findAll(): any[];
    findByFrequentFlyerNumber(id: number): any;
    findByEmail(email: string): any;
    remove(id: number): void;
    confirmEmail(validateEmailDto: ValidateEmailDto): boolean;
}
