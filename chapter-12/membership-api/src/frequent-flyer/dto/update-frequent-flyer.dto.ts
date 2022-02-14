import { PartialType } from '@nestjs/mapped-types';
import { CreateFrequentFlyerDto } from './create-frequent-flyer.dto';

export class UpdateFrequentFlyerDto extends PartialType(CreateFrequentFlyerDto) {}
