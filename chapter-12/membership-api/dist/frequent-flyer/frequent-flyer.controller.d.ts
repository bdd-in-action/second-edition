import { FrequentFlyerService } from './frequent-flyer.service';
import { CreateFrequentFlyerDto } from './dto/create-frequent-flyer.dto';
import { UpdateFrequentFlyerDto } from './dto/update-frequent-flyer.dto';
export declare class FrequentFlyerController {
    private readonly frequentFlyerService;
    constructor(frequentFlyerService: FrequentFlyerService);
    create(createFrequentFlyerDto: CreateFrequentFlyerDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFrequentFlyerDto: UpdateFrequentFlyerDto): string;
    remove(id: string): string;
}
