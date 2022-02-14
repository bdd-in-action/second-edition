import {Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus} from '@nestjs/common';
import { FrequentFlyerService } from './frequent-flyer.service';
import { CreateFrequentFlyerDto } from './dto/create-frequent-flyer.dto';
import { UpdateFrequentFlyerDto } from './dto/update-frequent-flyer.dto';
import {ValidateEmailDto} from "./dto/validate-email.dto";
import { Response } from 'express';

@Controller('api/frequent-flyer')
export class FrequentFlyerController {
  constructor(private readonly frequentFlyerService: FrequentFlyerService) {}

  /**
   * Create a new frequent flyer account
   * The account will be pending until the member validates their email address
   */
  @Post()
  create(@Body() createFrequentFlyerDto: CreateFrequentFlyerDto) {
    return this.frequentFlyerService.create(createFrequentFlyerDto);
  }

  @Post("/email-confirmation")
  confirmEmail(@Body() validateEmailDto: ValidateEmailDto, response: Response) {
    if (!this.frequentFlyerService.confirmEmail(validateEmailDto)) {
      response.status(HttpStatus.CONFLICT).send();
    } else {
      response.status(HttpStatus.OK).send();
    }
  }

  @Get()
  findAll() {
    return this.frequentFlyerService.findAll();
  }

  @Get(':id')
  findByFrequentFlyerNumber(@Param('id') id: string) {
    return this.frequentFlyerService.findByFrequentFlyerNumber(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFrequentFlyerDto: UpdateFrequentFlyerDto) {
    return this.frequentFlyerService.update(+id, updateFrequentFlyerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frequentFlyerService.remove(+id);
  }
}
