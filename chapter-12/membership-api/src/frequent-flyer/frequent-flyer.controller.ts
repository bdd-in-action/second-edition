import {Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException} from '@nestjs/common';
import { FrequentFlyerService } from './frequent-flyer.service';
import { CreateFrequentFlyerDto } from './dto/create-frequent-flyer.dto';
import {ValidateEmailDto} from "./dto/validate-email.dto";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";

@Controller('api/frequent-flyer')
export class FrequentFlyerController {
  constructor(private readonly frequentFlyerService: FrequentFlyerService) {}

  /**
   * Create a new frequent flyer account
   * The account will be pending until the member validates their email address
   */
  @Post()
  @ApiOperation({summary: 'Register a new Frequent Flyer member'})
  @ApiResponse({status:409, description: 'Email already exists'})
  create(@Body() createFrequentFlyerDto: CreateFrequentFlyerDto) {
    if (this.frequentFlyerService.findByEmail(createFrequentFlyerDto.email)) {
      throw new HttpException('Email already exists', HttpStatus.CONFLICT)
    }
    return this.frequentFlyerService.create(createFrequentFlyerDto);
  }

  @Post("/email-confirmation")
  @ApiOperation({summary: 'Confirm a new frequent flyer email address'})
  @ApiResponse({status:400, description: 'Email could not be confirmed with this token'})
  confirmEmail(@Body() validateEmailDto: ValidateEmailDto) {
    if (!this.frequentFlyerService.confirmEmail(validateEmailDto)) {
      throw new HttpException('Could not confirm this email with this token', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  @ApiOperation({summary: 'Find the list of all current frequent flyers'})
  findAll() {
    return this.frequentFlyerService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Find a frequent flyer by frequent flyer number'})
  @ApiResponse({status:400, description: 'Missing mandatory fields'})
  findByFrequentFlyerNumber(@Param('id') id: number) {
    const frequentFlyer = this.frequentFlyerService.findByFrequentFlyerNumber(+id);
    if (!frequentFlyer) {
      throw new HttpException('No matching Frequent Flyer found with this number', HttpStatus.NOT_FOUND)
    } else {
      return frequentFlyer;
    }
  }

  @Delete(':id')
  @ApiOperation({summary: 'Delete a frequent flyer with a given frequent flyer number'})
  remove(@Param('id') id: number) {
    return this.frequentFlyerService.remove(+id);
  }
}
