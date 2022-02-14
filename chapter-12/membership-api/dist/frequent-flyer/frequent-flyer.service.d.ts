import { CreateFrequentFlyerDto } from './dto/create-frequent-flyer.dto';
import { UpdateFrequentFlyerDto } from './dto/update-frequent-flyer.dto';
export declare class FrequentFlyerService {
    create(createFrequentFlyerDto: CreateFrequentFlyerDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFrequentFlyerDto: UpdateFrequentFlyerDto): string;
    remove(id: number): string;
}
